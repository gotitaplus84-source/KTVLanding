#!/usr/bin/env python3
"""Chuẩn bị ảnh phôi (ảnh sản phẩm của hãng) để hiện phía sau răng 3D ở mục Vật liệu.

Cách dùng (từ thư mục _source/):
    pip install pillow numpy scipy
    python3 tools/blank_image.py anh-goc.jpg ../assets/img/blanks/katana.webp [ngưỡng-nền]

Việc script làm:
  1. Tách nền: loang từ mép ảnh qua những điểm gần với màu nền (trắng/xám nhạt của ảnh
     sản phẩm) → trong suốt; mép vật thể được làm mềm để không bị răng cưa.
  2. Cắt sát vật thể, chừa lề 4%, thu về cạnh dài tối đa 1200 px.
  3. Lưu WebP có kênh trong suốt (chất lượng 86).
Ảnh đã có nền trong suốt (PNG/WebP) thì bỏ qua bước 1.
Sau đó thêm data-blank="/assets/img/blanks/<tên>.webp" vào thẻ .mat-step tương ứng.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

TOL = 14        # độ lệch màu tối đa so với màu nền (0–255); phôi trắng trên nền trắng → để thấp
MAX_SIDE = 1200


def remove_background(im, tol=TOL):
    rgb = np.asarray(im.convert('RGB')).astype(np.int16)
    h, w, _ = rgb.shape
    border = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
    bg = np.median(border, axis=0)                       # màu nền ước lượng từ viền ảnh
    near = np.abs(rgb - bg).max(axis=2) <= tol
    lab, _ = ndimage.label(near)
    edge_labels = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    bgmask = np.isin(lab, edge_labels[edge_labels > 0])  # chỉ vùng nền nối với mép ảnh
    alpha = Image.fromarray(np.where(bgmask, 0, 255).astype(np.uint8))
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
    out = im.convert('RGBA')
    out.putalpha(alpha)
    return out


def main():
    src, dst = sys.argv[1], sys.argv[2]
    tol = int(sys.argv[3]) if len(sys.argv) > 3 else TOL
    im = Image.open(src)
    has_alpha = im.mode in ('RGBA', 'LA') and np.asarray(im.getchannel('A')).min() < 250
    im = im.convert('RGBA') if has_alpha else remove_background(im, tol)
    box = im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    if not box:
        sys.exit('Không tìm thấy vật thể trong ảnh (nền và vật cùng màu?)')
    im = im.crop(box)
    pad = int(max(im.size) * 0.04)
    canvas = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad))
    canvas.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    canvas.save(dst, 'WEBP', quality=86, method=6)
    print(f'{dst}: {canvas.width}×{canvas.height}')


if __name__ == '__main__':
    main()
