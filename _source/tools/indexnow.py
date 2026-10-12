#!/usr/bin/env python3
"""Báo cho Bing / các công cụ tìm kiếm hỗ trợ IndexNow những trang vừa thay đổi trên ktvlab.com.

Chạy tự động bởi .github/workflows/indexnow.yml sau mỗi lần GitHub Pages triển khai xong.
- Mặc định: gửi các trang HTML thay đổi trong commit mới nhất (so với commit trước đó).
- INDEXNOW_ALL=true (chạy tay trên tab Actions): gửi toàn bộ URL trong sitemap.xml.
Khoá IndexNow nằm trong file <KEY>.txt ở thư mục gốc website — đổi khoá thì đổi cả hai.
"""
import json, os, re, subprocess, sys, urllib.request

SITE = 'https://ktvlab.com'
KEY = 'e7421af8c30a71ec0519745c67e7b8cf'
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')


def sitemap_urls():
    with open(os.path.join(ROOT, 'sitemap.xml'), encoding='utf8') as f:
        return re.findall(r'<loc>([^<]+)</loc>', f.read())


def changed_urls():
    try:
        out = subprocess.run(['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'], cwd=ROOT,
                             capture_output=True, text=True, check=True).stdout.split()
    except subprocess.CalledProcessError:
        return sitemap_urls()  # không có commit trước (lần đầu) → gửi tất cả
    urls = []
    for p in out:
        if p == 'index.html':
            urls.append(SITE + '/')
        elif p.endswith('/index.html') and not p.startswith(('_source/', '.github/')):
            urls.append(f'{SITE}/{p[:-len("index.html")]}')
        elif p == 'llms.txt':
            urls.append(SITE + '/llms.txt')
    return urls


def main():
    urls = sitemap_urls() if os.environ.get('INDEXNOW_ALL') == 'true' else changed_urls()
    if not urls:
        print('Không có trang nào thay đổi — bỏ qua.')
        return
    body = json.dumps({'host': 'ktvlab.com', 'key': KEY, 'keyLocation': f'{SITE}/{KEY}.txt',
                       'urlList': sorted(set(urls))}).encode()
    req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body,
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f'IndexNow: HTTP {r.status} — đã gửi {len(set(urls))} URL')
    except urllib.error.HTTPError as e:
        print(f'IndexNow: HTTP {e.code} {e.read().decode(errors="replace")[:300]}')
        sys.exit(1)
    for u in sorted(set(urls)):
        print('  ' + u)


if __name__ == '__main__':
    main()
