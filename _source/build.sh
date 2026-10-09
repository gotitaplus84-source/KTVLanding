#!/bin/sh
# Đóng gói lại JS/CSS sau khi sửa src/. Cần Node.js: chạy "npm install" (trong thư mục _source/) một lần trước.
# Kết quả ghi thẳng vào thư mục gốc của repo (../assets/js, ../assets/css) — nơi GitHub Pages phục vụ website.
set -e
cd "$(dirname "$0")"
OUT=..
rm -f "$OUT"/assets/js/*.js
npx esbuild src/main.js --bundle --splitting --format=esm --minify --target=es2020 --outdir="$OUT/assets/js" --chunk-names=[name]-[hash] --legal-comments=none
npx esbuild src/site.css --minify --outfile="$OUT/assets/css/site.css"
echo "Xong. Commit thư mục assets/ ở gốc repo lên GitHub."
