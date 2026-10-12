// Tạo các trang con tĩnh của ktvlab.com từ content.mjs.
// Chạy: node pages/build.mjs   (build.sh tự gọi). Không cần thư viện ngoài.
//
// - Đầu trang, menu điện thoại, chân trang lấy thẳng từ index.html → sửa ở trang chủ là mọi trang theo.
// - Khối liên kết ở chân trang (giữa <!--@links--> và <!--/@links--> trong index.html) được tạo lại
//   từ dữ liệu, để trang chủ và trang con luôn có cùng danh mục.
// - Ghi sitemap.xml cho toàn bộ trang.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, BIZ, MATERIALS, PRODUCTS, FAQ, TURNAROUND, materialBody, warrantyBody, turnaroundBody } from './content.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const today = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/* ---------- footer link block, shared by every page ---------- */
const footLinks = `<!--@links-->
  <div class="wrap foot-links">
    <nav aria-label="Phục hình"><p class="mono dim">Phục hình</p>${PRODUCTS.map((p) => `<a href="/phuc-hinh/${p.slug}/">${p.name}</a>`).join('')}</nav>
    <nav aria-label="Vật liệu"><p class="mono dim">Vật liệu</p>${MATERIALS.map((m) => `<a href="/vat-lieu/${m.slug}/">${m.name}</a>`).join('')}</nav>
    <nav aria-label="Thông tin"><p class="mono dim">Thông tin</p><a href="/thoi-gian-san-xuat/">Thời gian sản xuất</a><a href="/bao-hanh/">Bảo hành</a><a href="/cau-hoi-thuong-gap/">Câu hỏi thường gặp</a><a href="/#lien-he">Liên hệ</a></nav>
    <div><p class="mono dim">Liên hệ</p><p>${esc(BIZ.address)}<br>Giờ làm việc ${BIZ.hours}</p><p class="dim">${esc(BIZ.delivery)}</p><p>${BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join(' · ')}</p></div>
  </div>
  <!--/@links-->`;

let index = readFileSync(join(ROOT, 'index.html'), 'utf8');
if (!index.includes('<!--@links-->')) throw new Error('index.html thiếu <!--@links--> trong chân trang');
index = index.replace(/<!--@links-->[\s\S]*?<!--\/@links-->/, footLinks);
writeFileSync(join(ROOT, 'index.html'), index);

/* ---------- pieces taken from the home page ---------- */
const grab = (re) => { const m = index.match(re); if (!m) throw new Error('index.html: không tìm thấy ' + re); return m[0]; };
const toHome = (html) => html.replace(/href="#top"/g, 'href="/"').replace(/href="#([^"]+)"/g, 'href="/#$1"');
const HEADER = toHome(grab(/<header class="site-header">[\s\S]*?<\/header>/));
const MENU = toHome(grab(/<div class="menu" id="menu">[\s\S]*?<\/nav>[\s\S]*?<\/div>/));
const FOOTER = toHome(grab(/<footer class="site-footer">[\s\S]*?<\/footer>/));
const HEAD_COMMON = grab(/<meta name="theme-color"[^>]*>/) + '\n' +
  grab(/<link rel="icon" href[\s\S]*?<link rel="stylesheet" href="\/assets\/css\/site.css">/);

/* ---------- page template ---------- */
function page({ path, title, desc, crumbs, kicker, h1, lead, img, imgAlt, side, body, related, relatedTitle, schema = [] }) {
  const url = SITE + path;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': url + '#page', url, name: title, description: desc, inLanguage: 'vi',
        publisher: { '@id': SITE + '/#org' }, ...(img ? { primaryImageOfPage: SITE + img } : {}) },
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE + c.url })) },
      ...schema,
    ],
  };
  const crumbHtml = crumbs.map((c, i) => (i < crumbs.length - 1 ? `<a href="${c.url}">${esc(c.name)}</a>` : `<span aria-current="page">${esc(c.name)}</span>`)).join('<i aria-hidden="true">/</i>');
  const rel = related && related.length ? `
  <section class="related" aria-labelledby="rel-h">
    <h2 id="rel-h">${relatedTitle}</h2>
    <ul class="rel-grid">${related.map((r) => `<li><a href="${r.url}">${r.thumb ? `<img src="${r.thumb}" alt="" width="56" height="56" loading="lazy" decoding="async">` : '<b class="rel-dot" aria-hidden="true"></b>'}<span>${esc(r.name)}</span></a></li>`).join('')}</ul>
  </section>` : '';
  const html = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="KTV Dental Lab">
<meta property="og:locale" content="vi_VN">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
${HEAD_COMMON}
<script>document.documentElement.classList.add('js')</script>
<script type="application/ld+json">
${JSON.stringify(ld, null, 1)}
</script>
</head>
<body class="subpage">
<a class="skip" href="#noi-dung">Bỏ qua đến nội dung</a>
${HEADER}

${MENU}

<main id="noi-dung" class="page">
<div class="wrap">
  <nav class="crumbs mono" aria-label="Đường dẫn">${crumbHtml}</nav>
  <header class="page-head${img ? '' : ' no-fig'}">
    <div>
      <p class="kicker mono"><span class="tag-red">[${kicker[0]}]</span> ${kicker[1]}</p>
      <h1>${h1}</h1>
      <p class="page-lead">${lead}</p>
      <div class="page-cta">
        <a class="btn btn-red" href="tel:${BIZ.quote.tel}">Gọi báo giá ${BIZ.quote.label}</a>
        <a class="btn btn-line" href="${BIZ.quote.zalo}" target="_blank" rel="noopener">Nhắn Zalo <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    ${img ? `<figure class="page-fig"><img src="${img}" alt="${esc(imgAlt)}" width="400" height="400" fetchpriority="high"></figure>` : ''}
  </header>
  <div class="page-body">
    <article class="prose">${body}
    </article>
    <aside class="page-side">${side}</aside>
  </div>${rel}
</div>
</main>

${FOOTER}

<script type="module" src="/assets/js/main.js"></script>
</body>
</html>
`;
  const out = join(ROOT, path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  return path;
}

const sideBox = (rows, note = '') => `
      <dl>${rows.map(([k, v]) => `<div><dt class="mono">${k}</dt><dd>${v}</dd></div>`).join('')}</dl>${note}
      <p class="side-iso mono">ISO 13485:2016 · ISOCERT</p>`;
const fastest = `${TURNAROUND[0].time} cho răng đơn lẻ, 2 – 3 đơn vị · <a href="/thoi-gian-san-xuat/">chi tiết</a>`;
const service = (name, path, extra = {}) => ({ '@type': 'Service', '@id': SITE + path + '#service', name, url: SITE + path, provider: { '@id': SITE + '/#org' }, ...extra });

const pages = ['/'];

/* ---------- phục hình ---------- */
for (const p of PRODUCTS) {
  const path = `/phuc-hinh/${p.slug}/`;
  pages.push(page({
    path,
    title: `${p.title} | KTV Dental Lab`,
    desc: `${strip(p.lead)} Labo răng sứ đạt ISO 13485 tại TP HCM (Thủ Dầu Một, Bình Dương cũ).`.slice(0, 300),
    crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Phục hình', url: '/#phuc-hinh' }, { name: p.name, url: path }],
    kicker: [String(PRODUCTS.indexOf(p) + 1).padStart(2, '0'), 'Phục hình'],
    h1: esc(p.title), lead: p.lead, img: p.img, imgAlt: p.imgAlt, body: p.body,
    side: sideBox([['Vật liệu', esc(p.short)], ['Thời gian sản xuất', fastest], ['Bảo hành', '<a href="/bao-hanh/">Theo dòng vật liệu</a>'], ['Giao nhận', 'Khắp miền Nam · lấy/giao tận nơi Bình Dương cũ']]),
    related: PRODUCTS.filter((x) => x !== p).map((x) => ({ name: x.name, url: `/phuc-hinh/${x.slug}/`, thumb: x.thumb })),
    relatedTitle: 'Phục hình khác',
    schema: [service(p.title, path, { serviceType: p.name, ...(p.img ? { image: SITE + p.img } : {}) })],
  }));
}

/* ---------- vật liệu ---------- */
for (const m of MATERIALS) {
  const path = `/vat-lieu/${m.slug}/`;
  const zr = m.kind === 'zirconia';
  const war = m.years ? `${m.years} năm` : 'Theo thỏa thuận';
  pages.push(page({
    path,
    title: zr ? `Răng sứ ${m.name} – zirconia ${m.country}, bảo hành ${war} | KTV Dental Lab` : `Răng sứ kim loại ${m.name} | KTV Dental Lab`,
    desc: zr
      ? `Răng sứ zirconia ${m.name} (${m.maker}, ${m.country}) tại labo KTV Dental Lab: mão nguyên khối${m.multilayer ? ', Multilayer' : ''}, sườn sứ đắp. Bảo hành ${war}. TP HCM – Bình Dương.`
      : `Hợp kim ${m.name} (${m.maker}, ${m.country}) cho răng sứ kim loại và mão toàn kim loại tại labo KTV Dental Lab, TP HCM – Bình Dương.`,
    crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Vật liệu', url: '/#vat-lieu' }, { name: m.name, url: path }],
    kicker: [String(MATERIALS.indexOf(m) + 1).padStart(2, '0'), zr ? 'Vật liệu · Zirconia' : 'Vật liệu · Hợp kim'],
    h1: zr ? `Răng sứ ${esc(m.name)}` : `Răng sứ kim loại ${esc(m.name)}`,
    lead: zr
      ? `Phôi zirconia ${esc(m.maker)} (${esc(m.country)})${m.multilayer ? ', có dòng Multilayer nhiều lớp màu' : ''}. Bảo hành ${war.toLowerCase()}; răng đơn lẻ làm trong 1 ngày.`
      : `Hợp kim ${esc(m.maker)} (${esc(m.country)}) cho sườn răng sứ kim loại và mão toàn kim loại. Bảo hành theo thỏa thuận với phòng khám.`,
    img: m.img, imgAlt: m.imgAlt, body: materialBody(m),
    side: sideBox([['Loại', zr ? `Zirconia${m.multilayer ? ' · có Multilayer' : ''}` : 'Hợp kim không quý'], ['Xuất xứ', esc(m.country)], ['Nhà sản xuất', esc(m.maker)], ['Bảo hành', `<strong>${war}</strong>`], ['Thời gian sản xuất', fastest]]),
    related: MATERIALS.filter((x) => x !== m).map((x) => ({ name: x.name, url: `/vat-lieu/${x.slug}/`, thumb: x.kind === 'zirconia' ? x.img : null })),
    relatedTitle: 'Dòng vật liệu khác',
    schema: [service(zr ? `Răng sứ ${m.name}` : `Răng sứ kim loại ${m.name}`, path, { serviceType: 'Phục hình răng sứ', brand: { '@type': 'Brand', name: m.name }, image: SITE + m.img })],
  }));
}

/* ---------- thông tin ---------- */
pages.push(page({
  path: '/thoi-gian-san-xuat/',
  title: 'Thời gian sản xuất răng sứ: từ 1 ngày | KTV Dental Lab',
  desc: `Labo răng sứ KTV Dental Lab: răng đơn lẻ 1 ngày (tối đa 36 giờ), cầu 3 – 8 đơn vị 2 ngày, cầu toàn hàm 3 ngày. Nhận ca khắp miền Nam, giao tận nơi Bình Dương cũ.`,
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Thời gian sản xuất', url: '/thoi-gian-san-xuat/' }],
  kicker: ['+', 'Thông tin'], h1: 'Thời gian sản xuất',
  lead: 'Răng đơn lẻ trong 1 ngày, áp dụng cho mọi loại phục hình, tính từ lúc labo nhận hàng.',
  body: turnaroundBody(),
  side: sideBox([['Giờ làm việc', BIZ.hours], ['Giao nhận', 'Khắp miền Nam · lấy/giao tận nơi Bình Dương cũ'], ['Gửi ca · báo giá', `<a href="${BIZ.quote.zalo}" target="_blank" rel="noopener">Zalo ${BIZ.quote.label}</a>`], ['Điện thoại', BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join('<br>')]]),
  related: [{ name: 'Bảo hành', url: '/bao-hanh/' }, { name: 'Câu hỏi thường gặp', url: '/cau-hoi-thuong-gap/' }, ...PRODUCTS.slice(0, 2).map((x) => ({ name: x.name, url: `/phuc-hinh/${x.slug}/`, thumb: x.thumb }))],
  relatedTitle: 'Xem thêm',
}));

pages.push(page({
  path: '/bao-hanh/',
  title: 'Bảo hành răng sứ theo dòng vật liệu | KTV Dental Lab',
  desc: `Bảo hành răng sứ tại labo KTV Dental Lab: ${MATERIALS.filter((m) => m.years).map((m) => `${m.name} ${m.years} năm`).join(', ')}; răng sứ kim loại theo thỏa thuận.`,
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Bảo hành', url: '/bao-hanh/' }],
  kicker: ['+', 'Thông tin'], h1: 'Bảo hành theo dòng vật liệu',
  lead: 'Từ 3 đến 15 năm cho răng sứ không kim loại; răng sứ kim loại bảo hành theo thỏa thuận với phòng khám.',
  body: warrantyBody(),
  side: sideBox([['Dài nhất', 'Lava · 15 năm'], ['Implant', 'Như răng thật cùng dòng vật liệu'], ['Sứ kim loại', 'Theo thỏa thuận']]),
  related: MATERIALS.filter((m) => m.kind === 'zirconia').map((x) => ({ name: x.name, url: `/vat-lieu/${x.slug}/`, thumb: x.img })),
  relatedTitle: 'Các dòng zirconia',
}));

pages.push(page({
  path: '/cau-hoi-thuong-gap/',
  title: 'Câu hỏi thường gặp về labo răng sứ | KTV Dental Lab',
  desc: 'Giải đáp về phục hình, phôi zirconia, bảo hành, thời gian sản xuất, chứng nhận ISO 13485 và cách nhận báo giá tại labo răng sứ KTV Dental Lab.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Câu hỏi thường gặp', url: '/cau-hoi-thuong-gap/' }],
  kicker: ['?', 'Hỏi đáp'], h1: 'Câu hỏi thường gặp',
  lead: 'Những câu bác sĩ và phòng khám hay hỏi khi làm việc với KTV Dental Lab.',
  body: FAQ.map(([q, a]) => `\n<h2>${esc(q)}</h2>\n<p>${a}</p>`).join(''),
  side: sideBox([['Báo giá · Zalo', `<a href="${BIZ.quote.zalo}" target="_blank" rel="noopener">${BIZ.quote.label}</a>`], ['Giờ làm việc', BIZ.hours], ['Email', `<a href="mailto:${BIZ.email}">${BIZ.email}</a>`]]),
  related: [{ name: 'Thời gian sản xuất', url: '/thoi-gian-san-xuat/' }, { name: 'Bảo hành', url: '/bao-hanh/' }],
  relatedTitle: 'Xem thêm',
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) }],
}));

/* ---------- sitemap ---------- */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : p.split('/').length > 3 ? '0.8' : '0.6'}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);
console.log(`Đã tạo ${pages.length - 1} trang con + sitemap.xml (${pages.length} URL).`);
