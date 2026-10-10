#!/usr/bin/env python3
"""Chuyển STL thiết kế (exocad) của mão + sườn thành file .bin gọn cho website.

Cách dùng (từ thư mục _source/):
    pip install numpy scipy trimesh
    python3 tools/stl_to_bin.py models/crown-16.stl models/coping-16.stl ../assets/models

Cả hai STL phải cùng hệ toạ độ (xuất cùng một ca trong exocad). Mão được dựng đứng
(trục lắp theo pháp tuyến đường hoàn tất), mặt nhai hướng lên, đặt giữa khung và co về
cỡ của răng 3D trên trang. Sườn dùng đúng phép biến đổi đó nên nằm khít bên trong mão.

Định dạng .bin (little-endian):
    'KTV1' | u32 số đỉnh n | u32 số chỉ số m | f32 min[3] | f32 bước[3]
    | u16 vị trí[3n] (lượng tử hoá) | u16 chỉ số[m] | u8 độ lõm[n] (0 lồi … 255 rãnh sâu)
"""
import struct, sys
from pathlib import Path
import numpy as np
import trimesh

TARGET_WIDTH = 2.2    # bề ngang lớn nhất của mão trong đơn vị cảnh three.js
MARGIN_Y = -0.92      # đường hoàn tất (điểm thấp nhất) nằm ở độ cao này
CAVITY_RADIUS = 0.35  # mm — bán kính đo độ cong để tìm rãnh mặt nhai


def load(p):
    m = trimesh.load(p, force='mesh', process=True)
    m.merge_vertices()
    return m


def boundary_points(m):
    e = m.edges_sorted
    uniq, cnt = np.unique(e, axis=0, return_counts=True)
    b = uniq[cnt == 1]
    return m.vertices[np.unique(b)] if len(b) else None


def upright_transform(crown):
    """Ma trận đưa mão về: trục lắp = +y (mặt nhai lên), tâm giữa, cỡ TARGET_WIDTH."""
    pts = boundary_points(crown)
    c = pts.mean(axis=0)
    _, _, vt = np.linalg.svd(pts - c)
    n = vt[2]                                   # pháp tuyến mặt phẳng đường hoàn tất
    # hướng n về phía mặt nhai (phía có tâm khối mão)
    if np.dot(crown.vertices.mean(axis=0) - c, n) < 0:
        n = -n
    up = np.array([0.0, 1.0, 0.0])
    R = trimesh.geometry.align_vectors(n, up)   # 4x4
    tilt = np.degrees(np.arccos(np.clip(abs(n[2]), -1, 1)))
    v = trimesh.transform_points(crown.vertices, R)
    lo, hi = v.min(axis=0), v.max(axis=0)
    s = TARGET_WIDTH / max(hi[0] - lo[0], hi[2] - lo[2])
    T = np.eye(4)
    T[:3, :3] *= s
    T[:3, 3] = [-(lo[0] + hi[0]) / 2 * s, MARGIN_Y - lo[1] * s, -(lo[2] + hi[2]) / 2 * s]
    return T @ R, tilt, s


def cavity(m):
    """0..1: mức lõm (rãnh, hố) theo độ cong trung bình rời rạc trong bán kính CAVITY_RADIUS."""
    # các điểm lân cận nằm "cao hơn" mặt tiếp tuyến (theo pháp tuyến hướng ra) → chỗ lõm
    from scipy.spatial import cKDTree
    v, n = m.vertices, m.vertex_normals
    nb = cKDTree(v).query_ball_point(v, CAVITY_RADIUS)
    c = np.array([np.mean((v[ix] - v[i]) @ n[i]) for i, ix in enumerate(nb)]) / CAVITY_RADIUS
    c = np.clip(c, 0, None)
    hi = np.percentile(c, 99) or 1.0
    return np.clip(c / hi, 0, 1)


def write_bin(path, verts, faces, cav):
    lo = verts.min(axis=0).astype(np.float32)
    hi = verts.max(axis=0).astype(np.float32)
    step = ((hi - lo) / 65535.0).astype(np.float32)
    step[step == 0] = 1
    q = np.round((verts - lo) / step).clip(0, 65535).astype('<u2')
    idx = faces.astype('<u2').ravel()
    assert len(verts) < 65536
    with open(path, 'wb') as f:
        f.write(b'KTV1')
        f.write(struct.pack('<II', len(verts), len(idx)))
        f.write(lo.astype('<f4').tobytes()); f.write(step.astype('<f4').tobytes())
        f.write(q.tobytes()); f.write(idx.tobytes())
        f.write(np.round(cav * 255).astype(np.uint8).tobytes())
    return Path(path).stat().st_size


def main():
    crown_p, coping_p, out = sys.argv[1], sys.argv[2], Path(sys.argv[3])
    out.mkdir(parents=True, exist_ok=True)
    crown, coping = load(crown_p), load(coping_p)
    cav_crown, cav_coping = cavity(crown), np.zeros(len(coping.vertices))
    M, tilt, s = upright_transform(crown)
    for name, m, cav in (('crown', crown, cav_crown), ('coping', coping, cav_coping)):
        v = trimesh.transform_points(m.vertices, M)
        f = m.faces
        if np.linalg.det(M[:3, :3]) < 0:
            f = f[:, ::-1]
        size = write_bin(out / f'{name}.bin', v, f, cav)
        print(f'{name}: {len(v)} đỉnh, {len(f)} tam giác, {size / 1024:.0f} KB, '
              f'y {v[:, 1].min():.2f}…{v[:, 1].max():.2f}')
    print(f'trục lắp lệch {tilt:.1f}° so với trục z của exocad; tỉ lệ {s:.4f} đơn vị/mm')


if __name__ == '__main__':
    main()
