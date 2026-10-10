#!/usr/bin/env python3
"""Dựng các mẫu phục hình cho ảnh nhỏ ở mục "Phục hình", từ ca răng 16 (exocad).

Cách dùng (từ thư mục _source/):
    pip install numpy scipy trimesh shapely mapbox_earcut rtree
    python3 tools/thumb_models.py models/crown-16.stl models/coping-16.stl <thư-mục-ra>

Xuất các file .bin cùng định dạng với stl_to_bin.py:
    crown.bin    mão toàn phần (dùng cho sứ đắp sứ, full màu, multilayer, full kim loại)
    coping.bin   sườn
    overlay.bin  phần mặt nhai thật của mão, cắt ngang (overlay / table-top)
    core.bin     cùi giả: mặt trong của sườn (= hình cùi răng đã mài) + chốt vào ống tuỷ  [minh hoạ]
    abut.bin, fixture.bin   trụ abutment + fixture có ren, đặt dưới mão              [minh hoạ]
Phần ghi [minh hoạ] là hình dựng, thay bằng file thật khi có. Inlay/onlay: chờ STL thật.
"""
import sys
from pathlib import Path
import numpy as np
import trimesh
from trimesh.intersections import slice_mesh_plane

sys.path.insert(0, str(Path(__file__).parent))
from stl_to_bin import load, upright_transform, cavity, write_bin  # noqa: E402


def capped_slice(m, normal, origin):
    """Giữ phần nằm phía `normal` của mặt phẳng, bịt mặt cắt."""
    return slice_mesh_plane(m, plane_normal=normal, plane_origin=origin, cap=True)


def fan_cap(m):
    """Bịt các lỗ hở còn lại (vd. đường hoàn tất) bằng quạt tam giác quanh tâm lỗ."""
    e = m.edges_sorted
    uniq, cnt = np.unique(e, axis=0, return_counts=True)
    b = uniq[cnt == 1]
    if not len(b):
        return m
    verts, faces = [m.vertices], [m.faces]
    n0 = len(m.vertices)
    for loop in trimesh.graph.connected_components(b):
        # order the loop
        adj = {}
        for a, c in b:
            if a in loop:
                adj.setdefault(a, []).append(c); adj.setdefault(c, []).append(a)
        start = next(iter(loop)); order = [start]; prev = None
        while True:
            nxt = [v for v in adj[order[-1]] if v != prev]
            if not nxt or nxt[0] == start:
                break
            prev = order[-1]; order.append(nxt[0])
        c = m.vertices[order].mean(axis=0)
        ci = n0; verts.append(c[None]); n0 += 1
        f = np.array([[order[i], order[(i + 1) % len(order)], ci] for i in range(len(order))])
        faces.append(f)
    out = trimesh.Trimesh(np.vstack(verts), np.vstack(faces), process=True)
    trimesh.repair.fix_normals(out)
    return out


def revolve(profile, sections=96):
    """profile: [(r, y), …] từ dưới lên → khối tròn xoay quanh trục y."""
    p = np.asarray(profile, float)
    m = trimesh.creation.revolve(p[:, [0, 1]], sections=sections)   # quanh trục z
    m.apply_transform(trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0]))
    trimesh.repair.fix_normals(m)
    return m


def main():
    crown_p, coping_p, out = sys.argv[1], sys.argv[2], Path(sys.argv[3])
    out.mkdir(parents=True, exist_ok=True)
    crown, coping = load(crown_p), load(coping_p)
    M, _, _ = upright_transform(crown)
    crown.apply_transform(M); coping.apply_transform(M)
    lo, hi = crown.bounds
    top = hi[1]
    models = {'crown': crown, 'coping': coping}

    # overlay: the occlusal part of the real crown, cut below the deepest fissure
    models['overlay'] = capped_slice(crown, [0, 1, 0], [0, top - 0.62, 0])

    # core (cùi giả): the coping's inner surface is the prepared-tooth shape; add a post
    P = np.array([coping.centroid[0], coping.bounds[0][1], coping.centroid[2]])
    inner = np.einsum('ij,ij->i', coping.face_normals, coping.triangles_center - P) < 0
    core = coping.submesh([np.flatnonzero(inner)], append=True)
    core.invert()
    core = fan_cap(core)
    core = capped_slice(core, [0, 1, 0], [0, core.bounds[0][1] + 0.2, 0])    # drop the flared rim
    y0 = core.bounds[0][1]
    post = revolve([(0.0, y0 - 1.25), (0.07, y0 - 1.24), (0.115, y0 - 1.17), (0.16, y0 - 0.5),
                    (0.21, y0 + 0.05), (0.0, y0 + 0.05)])
    post.apply_translation([P[0], 0, P[2]])
    models['core'] = trimesh.util.concatenate([core, post])

    # implant: real crown on an illustrative abutment + threaded fixture (Ø4 mm × 10 mm)
    mm = upright_transform(load(crown_p))[2]                        # đơn vị cảnh / mm
    base = lo[1]
    R = 2.0 * mm
    models['abut'] = revolve([(0.0, base - 0.35), (R * 0.98, base - 0.35), (R * 1.05, base - 0.25),
                              (R * 1.55, base - 0.02), (R * 1.25, base + 0.02), (R * 0.95, base + 0.55),
                              (R * 0.6, base + 0.75), (0.0, base + 0.78)])
    prof, y, pitch, depth = [(0.0, base - 0.35 - 10 * mm)], base - 0.35 - 10 * mm, 0.8 * mm, 0.32 * mm
    prof.append((R * 0.55, y)); y += 0.6 * mm
    while y < base - 0.35 - 0.6 * mm:
        prof += [(R - depth, y), (R, y + pitch * 0.35), (R, y + pitch * 0.5), (R - depth, y + pitch)]
        y += pitch
    prof += [(R, base - 0.35), (0.0, base - 0.35)]
    models['fixture'] = revolve(prof, sections=128)

    for name, m in models.items():
        cav = cavity(m) if name in ('crown', 'overlay') else np.zeros(len(m.vertices))
        if len(m.vertices) >= 65536:
            m = m.simplify_quadric_decimation(face_count=60000)
            cav = np.zeros(len(m.vertices))
        size = write_bin(out / f'{name}.bin', m.vertices, m.faces, cav)
        print(f'{name}: {len(m.vertices)} đỉnh, {len(m.faces)} tam giác, {size // 1024} KB, '
              f'y {m.bounds[0][1]:.2f}…{m.bounds[1][1]:.2f}')


if __name__ == '__main__':
    main()
