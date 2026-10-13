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
import { SITE, BIZ, QUOTE_LINKS, QUOTE_TEXT, QUOTE_TPL, SOURCES, MATERIALS, PRODUCTS, FAQ, FAQ_SOURCES, TURNAROUND, TURNAROUND_FAQ, WARRANTY_FAQ, materialBody, warrantyBody, turnaroundBody, compareBody, COMPARE_FAQ, COMPARE_SOURCES, etchBody, ETCH_FAQ, ETCH_SOURCES, sendCaseBody, SENDCASE_FAQ, SENDCASE_SOURCES, localBody, LOCAL_FAQ, LOCAL_SOURCES, LOCAL_AREAS, hcmBody, HCM_FAQ, HCM_SOURCES, legalBody, LEGAL_FAQ, LEGAL_SOURCES, rxBody, rxData, RX_FAQ } from './content.mjs';
import { QA_TOPICS as QA_1, QA_UPDATED } from './qa.mjs';
import { QA_TOPICS_2 } from './qa2.mjs';
import { QA_TOPICS_3 } from './qa3.mjs';
import { QA_TOPICS_4 } from './qa4.mjs';
const QA_TOPICS = [...QA_1, ...QA_TOPICS_2, ...QA_TOPICS_3, ...QA_TOPICS_4];

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const today = new Date().toISOString().slice(0, 10);
const read = (f) => { try { return readFileSync(f, 'utf8'); } catch { return null; } };

/* ---------- lastmod: a page keeps its previous date unless its HTML actually changed ----------
   Previous dates come from the current sitemap.xml. Pages that print their own dateModified pass
   LASTMOD instead of a date; it is filled with the page's lastmod, so the date alone never counts as a change. */
const LASTMOD = '@@lastmod@@';
const prevLastmod = Object.fromEntries([...(read(join(ROOT, 'sitemap.xml')) || '').matchAll(/<loc>[^<]*?ktvlab\.com([^<]*)<\/loc><lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]));
const lastmod = {};
function emit(path, file, html) {
  const prev = prevLastmod[path];
  if (prev && html.replaceAll(LASTMOD, prev) === read(file)) { lastmod[path] = prev; return; }
  lastmod[path] = today;
  writeFileSync(file, html.replaceAll(LASTMOD, today));
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fit = (d, tail) => (d.length + tail.length <= 160 ? d + tail : d);
const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/* ---------- footer link block, shared by every page ---------- */
const footLinks = `<!--@links-->
  <div class="wrap foot-links">
    <nav aria-label="Phục hình"><p class="lbl dim">Phục hình</p>${PRODUCTS.map((p) => `<a href="/phuc-hinh/${p.slug}/">${p.name}</a>`).join('')}</nav>
    <nav aria-label="Vật liệu"><p class="lbl dim">Vật liệu</p>${MATERIALS.map((m) => `<a href="/vat-lieu/${m.slug}/">${m.name}</a>`).join('')}<a href="/vat-lieu/so-sanh-zirconia/">So sánh zirconia</a></nav>
    <nav aria-label="Thông tin"><p class="lbl dim">Thông tin</p><a href="/labo-rang-su-binh-duong/">Labo răng sứ Bình Dương</a><a href="/labo-rang-su-tp-hcm/">Labo răng sứ TP HCM</a><a href="/gui-ca/">Cách gửi ca</a><a href="/phieu-chi-dinh/">Phiếu chỉ định online</a><a href="/thoi-gian-san-xuat/">Thời gian sản xuất</a><a href="/bao-hanh/">Bảo hành</a><a href="/cau-hoi-thuong-gap/">Câu hỏi thường gặp</a><a href="/hoi-dap/">Hỏi đáp kỹ thuật</a><a href="/phap-ly/">Thông tin pháp lý</a><a href="/dich-vu/xoi-mon-zirconia-zircos-e/">Xoi mòn Zircos-E</a><a href="/#lien-he">Liên hệ</a></nav>
    <div><p class="lbl dim">Liên hệ</p><p>${esc(BIZ.address)}</p><p>${BIZ.hoursShort}</p><p class="dim">${esc(BIZ.delivery)}</p><p>${BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join('<br>')}</p></div>
  </div>
  <nav class="dock" aria-label="Liên hệ nhanh"><a href="tel:${BIZ.phones[0].tel}"><b>Gọi</b>${BIZ.phones[0].text}</a><a href="${BIZ.quote.zalo}" target="_blank" rel="noopener"><b>Zalo</b>${BIZ.quote.label}</a><a href="/phieu-chi-dinh/" class="dock-rx"><b>Lên phiếu</b>chỉ định</a></nav>
  <!--/@links-->`;

let index = readFileSync(join(ROOT, 'index.html'), 'utf8');
if (!index.includes('<!--@links-->')) throw new Error('index.html thiếu <!--@links--> trong chân trang');
index = index.replace(/<!--@links-->[\s\S]*?<!--\/@links-->/, footLinks);
if (!index.includes('<!--@quote-->')) throw new Error('index.html thiếu <!--@quote-->');
index = index.replace(/<!--@quote-->[\s\S]*?<!--\/@quote-->/, `<!--@quote-->\n${QUOTE_TPL}\n<!--/@quote-->`);
const homeDesc = (index.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
if (!homeDesc || homeDesc.length > 160) throw new Error(`index.html: meta description dài ${homeDesc.length} ký tự (tối đa 160)`);
emit('/', join(ROOT, 'index.html'), index);

/* ---------- pieces taken from the home page ---------- */
const grab = (re) => { const m = index.match(re); if (!m) throw new Error('index.html: không tìm thấy ' + re); return m[0]; };
const toHome = (html) => html.replace(/href="#top"/g, 'href="/"').replace(/href="#([^"]+)"/g, 'href="/#$1"');
const HEADER = toHome(grab(/<header class="site-header">[\s\S]*?<\/header>/));
const MENU = toHome(grab(/<div class="menu" id="menu">[\s\S]*?<\/nav>[\s\S]*?<\/div>/));
const FOOTER = toHome(grab(/<footer class="site-footer">[\s\S]*?<\/footer>/));
const HEAD_COMMON = grab(/<meta name="theme-color"[^>]*>/) + '\n' +
  grab(/<link rel="icon" href[\s\S]*?<link rel="stylesheet" href="\/assets\/css\/site.css">/);

/* ---------- page template ---------- */
function page({ path, title, desc, crumbs, h1, lead, img, imgAlt, side, wide = false, body, related, relatedTitle, schema = [], faq = [], sources = [], pageExtra = {}, article = null }) {
  const url = SITE + path;
  if (desc.length > 160) throw new Error(`${path}: meta description dài ${desc.length} ký tự (tối đa 160)`);
  for (const k of sources) if (!SOURCES[k]) throw new Error(`${path}: thiếu nguồn "${k}" trong SOURCES`);
  if (faq.length) {
    body += `\n<section class="faq-block" aria-labelledby="faq-h">\n<h2 id="faq-h">Câu hỏi thường gặp</h2>\n${faq.map(([q, a]) => `<div class="qa"><h3>${esc(q)}</h3><p>${a}</p></div>`).join('\n')}\n</section>`;
    schema = [...schema, { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) }];
  }
  if (sources.length) {
    body += `\n<section class="refs" aria-labelledby="refs-h">\n<h2 id="refs-h">Nguồn tham khảo</h2>\n<ol>${sources.map((k) => `<li><a href="${SOURCES[k][1]}" target="_blank" rel="noopener">${esc(SOURCES[k][0])}</a></li>`).join('')}</ol>\n</section>`;
  }
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': url + '#page', url, name: title, description: desc, inLanguage: 'vi',
        publisher: { '@id': SITE + '/#org' }, ...(img ? { primaryImageOfPage: SITE + img } : {}), ...pageExtra },
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
<meta property="og:type" content="${article ? 'article' : 'website'}">
<meta property="og:site_name" content="KTV Dental Lab">
<meta property="og:locale" content="vi_VN">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="KTV Dental Lab — labo răng sứ">${article ? `
<meta property="article:published_time" content="${article.published}">
<meta property="article:modified_time" content="${article.modified}">` : ''}
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
  <nav class="crumbs" aria-label="Đường dẫn">${crumbHtml}</nav>
  <header class="page-head${img ? '' : ' no-fig'}">
    <div>
      <h1>${h1}</h1>
      <p class="page-lead">${lead}</p>
      <div class="page-cta">
        <a class="btn btn-red" href="${BIZ.quote.zalo}" target="_blank" rel="noopener" data-quote>Nhận bảng giá qua Zalo</a>
        ${path === '/gui-ca/' ? `<a class="btn btn-line" href="tel:${BIZ.phones[0].tel}">Gọi labo ${BIZ.phones[0].text}</a>` : '<a class="btn btn-line" href="/gui-ca/">Gửi ca cho labo</a>'}
      </div>
      <p class="cta-note">Nhắn “bảng giá” — labo gửi bảng giá, không gọi điện làm phiền.</p>
    </div>
    ${img ? `<figure class="page-fig"><img src="${img}" alt="${esc(imgAlt)}" width="400" height="400" fetchpriority="high"></figure>` : ''}
  </header>
  <div class="page-body${wide ? ' is-wide' : ''}">
    <article class="prose">${body}
    </article>${side ? `
    <aside class="page-side">${side}</aside>` : ''}
  </div>${rel}
</div>
</main>

${FOOTER}

${QUOTE_TPL}
<script type="module" src="/assets/js/main.js"></script>
</body>
</html>
`;
  const out = join(ROOT, path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  emit(path, out, html);
  return path;
}

const sideBox = (rows, note = '') => `
      <dl>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>${note}
      <p class="side-iso">Labo đạt ISO 13485:2016, cấp bởi ISOCERT</p>`;
const fastest = `${TURNAROUND[0].time} cho răng đơn lẻ, 2 – 3 đơn vị. <a href="/thoi-gian-san-xuat/">Xem chi tiết</a>`;
const service = (name, path, extra = {}) => ({ '@type': 'Service', '@id': SITE + path + '#service', name, url: SITE + path, provider: { '@id': SITE + '/#org' }, ...extra });

const pages = ['/'];

/* ---------- phục hình ---------- */
for (const p of PRODUCTS) {
  const path = `/phuc-hinh/${p.slug}/`;
  pages.push(page({
    path,
    title: `${p.title} | KTV Dental Lab`,
    desc: p.desc || fit(strip(p.lead), ' Labo ISO 13485 tại TP HCM – Bình Dương.'),
    crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Phục hình', url: '/#phuc-hinh' }, { name: p.name, url: path }],
    h1: esc(p.title), lead: p.lead, img: p.img, imgAlt: p.imgAlt, body: p.body,
    side: sideBox([['Vật liệu', esc(p.short)], ['Thời gian sản xuất', fastest], ['Bảo hành', '<a href="/bao-hanh/">Theo dòng vật liệu</a>'], ['Giao nhận', 'Khắp miền Nam; lấy và giao tận nơi ở Bình Dương cũ']]),
    related: [...(['inlay-onlay', 'overlay'].includes(p.slug) ? [{ name: 'Xoi mòn Zircos-E (miễn phí)', url: '/dich-vu/xoi-mon-zirconia-zircos-e/' }] : []), ...PRODUCTS.filter((x) => x !== p).map((x) => ({ name: x.name, url: `/phuc-hinh/${x.slug}/`, thumb: x.thumb }))],
    relatedTitle: 'Phục hình khác',
    faq: p.faq || [], sources: p.sources || [],
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
      ? fit(`Răng sứ zirconia ${m.name} (${m.maker}, ${m.country}) tại labo KTV Dental Lab: mão nguyên khối${m.multilayer ? ', Multilayer' : ''}, sườn sứ đắp. Bảo hành ${war}.`, ' TP HCM – Bình Dương.')
      : `Hợp kim ${m.name} (${m.maker}, ${m.country}) cho răng sứ kim loại và mão toàn kim loại tại labo KTV Dental Lab, TP HCM – Bình Dương.`,
    crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Vật liệu', url: '/#vat-lieu' }, { name: m.name, url: path }],
    h1: zr ? `Răng sứ <span class="nw">${esc(m.name)}</span>` : `Răng sứ kim loại <span class="nw">${esc(m.name)}</span>`,
    lead: m.lead,
    img: m.img, imgAlt: m.imgAlt, body: materialBody(m),
    side: sideBox([['Loại', zr ? `Zirconia${m.multilayer ? ', có dòng Multilayer' : ''}` : 'Hợp kim không quý'], ['Xuất xứ', esc(m.country)], ['Nhà sản xuất', esc(m.maker)], ['Bảo hành', `<strong>${war}</strong>`], ['Thời gian sản xuất', fastest]]),
    related: [...(zr ? [{ name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }] : []), ...MATERIALS.filter((x) => x !== m).map((x) => ({ name: x.name, url: `/vat-lieu/${x.slug}/`, thumb: x.kind === 'zirconia' ? x.img : null }))],
    relatedTitle: 'Dòng vật liệu khác',
    faq: m.faq || [], sources: m.sources || [],
    schema: [service(zr ? `Răng sứ ${m.name}` : `Răng sứ kim loại ${m.name}`, path, { serviceType: 'Phục hình răng sứ', brand: { '@type': 'Brand', name: m.name }, image: SITE + m.img })],
  }));
}

/* ---------- so sánh zirconia ---------- */
{
  const zrs = MATERIALS.filter((m) => m.kind === 'zirconia');
  pages.push(page({
    path: '/vat-lieu/so-sanh-zirconia/',
    title: 'So sánh răng sứ zirconia: Lava, Cercon, Katana, DDBio | KTV Dental Lab',
    desc: 'So sánh độ bền uốn, độ trong (theo công bố của hãng), xuất xứ và bảo hành các dòng phôi zirconia tại labo KTV Dental Lab, kèm gợi ý chọn dòng theo ca.',
    crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Vật liệu', url: '/#vat-lieu' }, { name: 'So sánh zirconia', url: '/vat-lieu/so-sanh-zirconia/' }],
    h1: 'So sánh các dòng zirconia',
    lead: `Các dòng phôi zirconia tại KTV Dental Lab — ${zrs.map((m) => m.name).join(', ')} — đặt cạnh nhau theo độ bền, độ trong, xuất xứ và bảo hành (từ 3 đến 15 năm).`,
    body: compareBody(),
    side: sideBox([['Dòng zirconia', 'Đa dạng, nhập thêm theo yêu cầu'], ['Bảo hành', '3 – 15 năm'], ['Thời gian sản xuất', fastest], ['Tư vấn chọn phôi', `Zalo ${QUOTE_LINKS}`]]),
    related: zrs.map((x) => ({ name: x.name, url: `/vat-lieu/${x.slug}/`, thumb: x.img })),
    relatedTitle: 'Chi tiết từng dòng',
    faq: COMPARE_FAQ, sources: COMPARE_SOURCES,
    schema: [{ '@type': 'ItemList', name: 'Các dòng zirconia tại KTV Dental Lab', itemListElement: zrs.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.name, url: `${SITE}/vat-lieu/${m.slug}/` })) }],
  }));
}

/* ---------- dịch vụ: xoi mòn Zircos-E ---------- */
pages.push(page({
  path: '/dich-vu/xoi-mon-zirconia-zircos-e/',
  title: 'Xoi mòn bề mặt zirconia bằng Zircos-E – miễn phí | KTV Dental Lab',
  desc: 'Xử lý mặt dán inlay, onlay, overlay zirconia bằng dung dịch xoi mòn Zircos-E tại labo KTV Dental Lab, hiện miễn phí. Kèm tóm tắt nghiên cứu về độ bền dán.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Phục hình', url: '/#phuc-hinh' }, { name: 'Xoi mòn Zircos-E', url: '/dich-vu/xoi-mon-zirconia-zircos-e/' }],
  h1: 'Xoi mòn bề mặt zirconia bằng Zircos-E',
  lead: 'Tạo bề mặt vi lưu trên mặt dán của inlay, onlay, overlay zirconia bằng dung dịch xoi mòn Zircos-E, giúp tăng độ bám của xi măng nhựa. Hiện miễn phí.',
  body: etchBody(),
  side: sideBox([['Chi phí', '<strong>Miễn phí</strong>'], ['Áp dụng', 'Inlay, onlay, overlay zirconia'], ['Thời gian', 'Ngâm tối đa 2 giờ, không trễ ca'], ['Dung dịch', 'Zircos-E (RH Marketing, Mỹ)'], ['Yêu cầu', 'Ghi trên phiếu chỉ định. <a href="/gui-ca/">Cách gửi ca</a>']]),
  related: ['inlay-onlay', 'overlay', 'mao-full-zirconia'].map((s) => PRODUCTS.find((x) => x.slug === s)).map((x) => ({ name: x.name, url: `/phuc-hinh/${x.slug}/`, thumb: x.thumb })),
  relatedTitle: 'Phục hình liên quan',
  faq: ETCH_FAQ, sources: ETCH_SOURCES,
  schema: [service('Xoi mòn bề mặt zirconia bằng Zircos-E', '/dich-vu/xoi-mon-zirconia-zircos-e/', { serviceType: 'Xử lý bề mặt phục hình zirconia', offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND' } })],
}));

pages.push(page({
  path: '/gui-ca/',
  title: 'Cách gửi ca cho labo răng sứ | KTV Dental Lab',
  desc: 'Gửi ca cho labo KTV Dental Lab: nhận dấu, mẫu hàm, file scan; phiếu chỉ định qua Zalo, email. Răng đơn lẻ 1 ngày; lấy – giao tận nơi Bình Dương cũ.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Cách gửi ca', url: '/gui-ca/' }],
  h1: 'Cách gửi ca cho labo',
  lead: 'Nhận dấu theo mọi phương thức; phiếu chỉ định nha khoa gửi qua mọi kênh online. Không cần mẫu phiếu riêng của labo.',
  body: sendCaseBody(),
  side: sideBox([['Dấu', 'Mọi phương thức'], ['Phiếu chỉ định', 'Mọi kênh online'], ['Giờ làm việc', BIZ.hoursShort], ['Giao nhận', 'Khắp miền Nam; lấy và giao tận nơi ở Bình Dương cũ'], ['Thời gian sản xuất', fastest]]),
  related: [{ name: 'Phiếu chỉ định online', url: '/phieu-chi-dinh/' }, { name: 'Thời gian sản xuất', url: '/thoi-gian-san-xuat/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }, { name: 'Xoi mòn Zircos-E (miễn phí)', url: '/dich-vu/xoi-mon-zirconia-zircos-e/' }],
  relatedTitle: 'Xem thêm',
  faq: SENDCASE_FAQ, sources: SENDCASE_SOURCES,
}));

pages.push(page({
  path: '/phieu-chi-dinh/',
  title: 'Phiếu chỉ định online có sơ đồ răng | KTV Dental Lab',
  desc: 'Soạn phiếu chỉ định nha khoa: chọn răng trên sơ đồ FDI, phục hình, dòng phôi, màu VITA, implant; gửi Zalo, email hoặc in PDF. Miễn phí, không cần tài khoản.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Cách gửi ca', url: '/gui-ca/' }, { name: 'Phiếu chỉ định online', url: '/phieu-chi-dinh/' }],
  h1: 'Phiếu chỉ định online',
  lead: 'Chọn răng trên sơ đồ, chọn phục hình, vật liệu, màu — phiếu tự soạn sẵn để gửi labo qua Zalo, email hoặc in kèm dấu. Không bắt buộc, không cần tài khoản.',
  body: rxBody() + `\n<script type="application/json" id="rx-data">${JSON.stringify(rxData()).replace(/</g, '\\u003c')}</script>`,
  side: '', wide: true,
  related: [{ name: 'Cách gửi ca', url: '/gui-ca/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }, { name: 'Thời gian sản xuất', url: '/thoi-gian-san-xuat/' }, { name: 'Xoi mòn Zircos-E (miễn phí)', url: '/dich-vu/xoi-mon-zirconia-zircos-e/' }],
  relatedTitle: 'Xem thêm',
  faq: RX_FAQ,
  schema: [{ '@type': 'WebApplication', name: 'Phiếu chỉ định online — KTV Dental Lab', url: SITE + '/phieu-chi-dinh/', applicationCategory: 'HealthApplication', operatingSystem: 'Mọi trình duyệt', inLanguage: 'vi', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND' }, provider: { '@id': SITE + '/#org' } }],
}));

/* ---------- hỏi đáp kỹ thuật ---------- */
// Trang dịch vụ / vật liệu liên quan cho từng chủ đề (chủ đề mới ghi thẳng "links" trong file hỏi đáp).
const ORG_REF = { '@type': 'Organization', '@id': SITE + '/#org', name: BIZ.name, url: SITE + '/' };
const P = (slug) => { const x = PRODUCTS.find((p) => p.slug === slug); if (!x) throw new Error('QA_LINKS: không có phục hình ' + slug); return [x.name, `/phuc-hinh/${slug}/`]; };
const ZR_COMPARE = ['So sánh các dòng zirconia', '/vat-lieu/so-sanh-zirconia/'];
const ETCH = ['Xoi mòn Zircos-E (miễn phí)', '/dich-vu/xoi-mon-zirconia-zircos-e/'];
const SEND = ['Cách gửi ca', '/gui-ca/'];
const QA_LINKS = {
  'chon-vat-lieu-zirconia': [ZR_COMPARE, P('mao-full-zirconia'), P('mao-zirconia-multilayer'), ['Bảo hành theo dòng vật liệu', '/bao-hanh/']],
  'mai-cui-zirconia': [P('mao-full-zirconia'), P('mao-zirconia-multilayer'), P('cui-gia'), SEND],
  'gan-mao-zirconia': [P('mao-full-zirconia'), ETCH, P('inlay-onlay')],
  'bong-mao-zirconia': [ETCH, P('mao-full-zirconia'), P('overlay')],
  'khop-can-me-gay-zirconia': [P('mao-full-zirconia'), P('mao-full-kim-loai'), ZR_COMPARE],
  'sat-khit-tiep-xuc-hinh-the': [P('mao-full-zirconia'), SEND, ['Phiếu chỉ định online', '/phieu-chi-dinh/']],
  'scan-trong-mieng': [['Labo răng sứ TP HCM: gửi ca từ xa', '/labo-rang-su-tp-hcm/'], SEND, ['Phiếu chỉ định online', '/phieu-chi-dinh/']],
  'scan-body-implant': [P('phuc-hinh-tren-implant'), SEND],
  'thiet-ke-tren-implant': [P('phuc-hinh-tren-implant'), P('mao-full-zirconia'), ['Bảo hành theo dòng vật liệu', '/bao-hanh/']],
  'tinh-huong-lam-sang': [P('mao-zirconia-multilayer'), P('mao-su-dap-su'), SEND],
};
{
  // Mỗi chủ đề có thể ghi ngày đăng / ngày cập nhật riêng (published, updated); mặc định QA_UPDATED.
  const vn = (d) => d.split('-').reverse().join('/');
  const tUpd = (t) => t.updated || QA_UPDATED;
  const hubUpdated = QA_TOPICS.map(tUpd).sort().at(-1);
  const upd = vn(hubUpdated);
  const byline = `\n<p class="byline">Biên soạn: KTV Dental Lab. Cập nhật: ${upd}</p>`;
  const extra = { author: { '@id': SITE + '/#org' }, dateModified: hubUpdated };
  const total = QA_TOPICS.reduce((n, t) => n + t.qs.length, 0);
  const hubSide = sideBox([['Biên soạn', 'KTV Dental Lab'], ['Cập nhật', upd], ['Số câu hỏi', String(total)], ['Hỏi thêm, tư vấn', `Zalo ${QUOTE_LINKS}`]]);
  pages.push(page({
    path: '/hoi-dap/',
    title: 'Hỏi đáp kỹ thuật phục hình cho bác sĩ | KTV Dental Lab',
    desc: `${total} câu hỏi về phục hình cho bác sĩ, phụ tá: chọn zirconia, mài cùi, gắn – bong mão, scan, implant, so màu, cầu răng, răng tạm, tuổi thọ răng sứ.`,
    crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Hỏi đáp kỹ thuật', url: '/hoi-dap/' }],
    h1: 'Hỏi đáp kỹ thuật cho bác sĩ',
    lead: 'Những câu hỏi thường gặp khi làm phục hình zirconia, scan và implant — trả lời thẳng, kèm số liệu từ hướng dẫn của hãng và nghiên cứu.',
    body: byline + QA_TOPICS.map((t) => `
<h2><a href="/hoi-dap/${t.slug}/">${esc(t.name)}</a></h2>
<p>${esc(t.lead)}</p>
<ol class="qa-toc">${t.qs.map(([n, q]) => `<li value="${n}"><a href="/hoi-dap/${t.slug}/#cau-${n}">${esc(q)}</a></li>`).join('')}</ol>`).join(''),
    side: hubSide,
    related: [{ name: 'Cách gửi ca', url: '/gui-ca/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }, { name: 'Xoi mòn Zircos-E (miễn phí)', url: '/dich-vu/xoi-mon-zirconia-zircos-e/' }, { name: 'Câu hỏi thường gặp', url: '/cau-hoi-thuong-gap/' }],
    relatedTitle: 'Xem thêm',
    pageExtra: extra,
    schema: [{ '@type': 'ItemList', name: 'Hỏi đáp kỹ thuật', itemListElement: QA_TOPICS.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: `${SITE}/hoi-dap/${t.slug}/` })) }],
  }));
  for (const t of QA_TOPICS) {
    const path = `/hoi-dap/${t.slug}/`;
    const published = t.published || QA_UPDATED, modified = tUpd(t);
    const tByline = `\n<p class="byline">Biên soạn: KTV Dental Lab. Cập nhật: ${vn(modified)}</p>`;
    const desc = t.lead.length > 158 ? t.lead.slice(0, t.lead.lastIndexOf(' ', 155)) + '…' : t.lead;
    pages.push(page({
      path,
      title: `${t.title} | KTV Dental Lab`,
      desc,
      crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Hỏi đáp kỹ thuật', url: '/hoi-dap/' }, { name: t.name, url: path }],
      h1: esc(t.name),
      lead: esc(t.lead),
      body: tByline + `
<nav class="qa-toc-box" aria-label="Các câu hỏi"><ol class="qa-toc">${t.qs.map(([n, q]) => `<li value="${n}"><a href="#cau-${n}">${esc(q)}</a></li>`).join('')}</ol></nav>` +
        t.qs.map(([n, q, a]) => `
<section class="qa-item" id="cau-${n}" aria-labelledby="cau-${n}-h">
<h2 id="cau-${n}-h"><span class="qa-n">Câu ${n}</span> ${esc(q)}</h2>
${a}
</section>`).join(''),
      side: sideBox([['Biên soạn', 'KTV Dental Lab'], ['Cập nhật', vn(modified)], ['Chủ đề', `<a href="/hoi-dap/">${QA_TOPICS.length} chủ đề, ${total} câu</a>`], ['Hỏi thêm, tư vấn', `Zalo ${QUOTE_LINKS}`]]),
      related: [...(t.links || QA_LINKS[t.slug] || []).map(([name, url]) => ({ name, url })), ...QA_TOPICS.filter((x) => x !== t).map((x) => ({ name: x.name, url: `/hoi-dap/${x.slug}/` }))],
      relatedTitle: 'Dịch vụ và chủ đề liên quan',
      sources: t.sources,
      pageExtra: { ...extra, dateModified: modified },
      article: { published, modified },
      schema: [{ '@type': 'Article', '@id': SITE + path + '#article', headline: t.title, description: desc, inLanguage: 'vi',
        datePublished: published, dateModified: modified, author: ORG_REF, publisher: ORG_REF,
        mainEntityOfPage: { '@id': SITE + path + '#page' }, image: SITE + '/assets/img/og.jpg' },
        { '@type': 'FAQPage', mainEntity: t.qs.map(([n, q, a]) => ({ '@type': 'Question', name: q, url: `${SITE}${path}#cau-${n}`, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) }],
    }));
  }
}

/* ---------- trang địa phương ---------- */
pages.push(page({
  path: '/labo-rang-su-binh-duong/',
  title: 'Labo răng sứ Bình Dương cho phòng khám | KTV Dental Lab',
  desc: 'Tìm labo răng sứ tại Bình Dương? Những điều bác sĩ nên kiểm tra: vật liệu, độ sát khít, thời gian sản xuất, bảo hành, ISO 13485 và cách phối hợp ca.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Labo răng sứ Bình Dương', url: '/labo-rang-su-binh-duong/' }],
  h1: 'Labo răng sứ Bình Dương: bác sĩ nên nhìn gì trước khi chọn nơi gửi ca?',
  lead: 'Vật liệu, độ sát khít, thời gian sản xuất, bảo hành và cách phối hợp ca — những điều nên kiểm tra trước khi gửi ca, và cách KTV Dental Lab đáp ứng từng điều.',
  body: localBody(),
  side: sideBox([['Địa chỉ', `${esc(BIZ.address)}`], ['Giờ làm việc', BIZ.hoursShort], ['Điện thoại', BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join('<br>')], ['Báo giá qua Zalo', `${QUOTE_LINKS}`], ['Thời gian sản xuất', fastest]]),
  related: [{ name: 'Labo răng sứ TP HCM', url: '/labo-rang-su-tp-hcm/' }, { name: 'Cách gửi ca', url: '/gui-ca/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }, { name: 'Hỏi đáp kỹ thuật cho bác sĩ', url: '/hoi-dap/' }],
  relatedTitle: 'Xem thêm',
  faq: LOCAL_FAQ, sources: LOCAL_SOURCES,
  pageExtra: { about: { '@id': SITE + '/#org' }, dateModified: LASTMOD },
  schema: [service('Labo răng sứ tại Bình Dương', '/labo-rang-su-binh-duong/', { serviceType: 'Sản xuất phục hình răng sứ cho phòng khám nha khoa', areaServed: [...LOCAL_AREAS.map((a) => ({ '@type': 'Place', name: `${a}, Bình Dương cũ` })), { '@type': 'Place', name: 'Miền Nam Việt Nam' }] })],
}));

pages.push(page({
  path: '/labo-rang-su-tp-hcm/',
  title: 'Labo răng sứ TP HCM cho phòng khám – nhận file scan | KTV Dental Lab',
  desc: 'Labo răng sứ tại TP HCM (Phú Lợi, Bình Dương cũ): nhận file scan online, dấu, mẫu hàm; răng đơn lẻ 1 ngày, ISO 13485, nhận ca khắp miền Nam.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Labo răng sứ TP HCM', url: '/labo-rang-su-tp-hcm/' }],
  h1: 'Labo răng sứ TP HCM: gửi ca từ xa sao cho chính xác',
  lead: 'Phòng khám ở TP Hồ Chí Minh và miền Nam gửi ca cho KTV Dental Lab qua file scan hoặc dấu truyền thống — cần những gì để ca về đúng, đúng lịch.',
  body: hcmBody(),
  side: sideBox([['Địa chỉ', `${esc(BIZ.address)}`], ['Gửi file scan', '<a href="/gui-ca/">Cách gửi ca</a>'], ['Báo giá qua Zalo', `${QUOTE_LINKS}`], ['Giờ làm việc', BIZ.hoursShort], ['Thời gian sản xuất', fastest]]),
  related: [{ name: 'Labo răng sứ Bình Dương', url: '/labo-rang-su-binh-duong/' }, { name: 'Cách gửi ca', url: '/gui-ca/' }, { name: 'Hỏi đáp: scan trong miệng', url: '/hoi-dap/scan-trong-mieng/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }],
  relatedTitle: 'Xem thêm',
  faq: HCM_FAQ, sources: HCM_SOURCES,
  pageExtra: { about: { '@id': SITE + '/#org' }, dateModified: LASTMOD },
  schema: [service('Labo răng sứ tại TP Hồ Chí Minh', '/labo-rang-su-tp-hcm/', { serviceType: 'Sản xuất phục hình răng sứ cho phòng khám nha khoa', areaServed: [{ '@type': 'City', name: 'TP Hồ Chí Minh' }, { '@type': 'Place', name: 'Bình Dương cũ' }, { '@type': 'Place', name: 'Bà Rịa – Vũng Tàu cũ' }, { '@type': 'Place', name: 'Miền Nam Việt Nam' }] })],
}));

pages.push(page({
  path: '/phap-ly/',
  title: 'Thông tin pháp lý – Công ty TNHH MTV KTV | KTV Dental Lab',
  desc: 'Thông tin pháp lý của KTV Dental Lab: Công ty TNHH MTV KTV, mã số thuế 3703340735, chứng nhận ISO 13485:2016, nguồn gốc vật liệu, kết quả kiểm nghiệm Co-Cr.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Thông tin pháp lý', url: '/phap-ly/' }],
  h1: 'Thông tin pháp lý',
  lead: 'Doanh nghiệp, mã số thuế, chứng nhận chất lượng và nguồn gốc vật liệu — tra cứu được tại nguồn chính thức.',
  body: legalBody(),
  side: sideBox([['Doanh nghiệp', BIZ.legal], ['Mã số thuế', '3703340735'], ['Điện thoại công ty', `<a href="tel:${BIZ.office.tel}">${BIZ.office.text}</a>`], ['Chứng nhận', `${BIZ.iso.std}<br>số ${BIZ.iso.no}`], ['Email', `<a href="mailto:${BIZ.email}">${BIZ.email}</a>`]]),
  related: [{ name: 'Bảo hành', url: '/bao-hanh/' }, { name: 'Co-Cr: kết quả kiểm nghiệm', url: '/vat-lieu/co-cr/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }, { name: 'Câu hỏi thường gặp', url: '/cau-hoi-thuong-gap/' }],
  relatedTitle: 'Xem thêm',
  faq: LEGAL_FAQ, sources: LEGAL_SOURCES,
  pageExtra: { about: { '@id': SITE + '/#org' }, dateModified: LASTMOD },
}));

/* ---------- thông tin ---------- */
pages.push(page({
  path: '/thoi-gian-san-xuat/',
  title: 'Thời gian sản xuất răng sứ: từ 1 ngày | KTV Dental Lab',
  desc: `Labo răng sứ KTV Dental Lab: răng đơn lẻ 1 ngày (tối đa 36 giờ), cầu 4 – 8 đơn vị 2 ngày, cầu toàn hàm 3 ngày. Nhận ca khắp miền Nam, giao tận nơi Bình Dương.`,
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Thời gian sản xuất', url: '/thoi-gian-san-xuat/' }],
  h1: 'Thời gian sản xuất',
  lead: 'Răng đơn lẻ trong 1 ngày, áp dụng cho mọi loại phục hình, tính từ lúc labo nhận hàng.',
  body: turnaroundBody(),
  side: sideBox([['Giờ làm việc', BIZ.hoursShort], ['Giao nhận', 'Khắp miền Nam; lấy và giao tận nơi ở Bình Dương cũ'], ['Gửi ca', '<a href="/gui-ca/">Cách gửi ca</a>'], ['Báo giá, tư vấn', `Zalo ${QUOTE_LINKS}`], ['Điện thoại', BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join('<br>')]]),
  related: [{ name: 'Bảo hành', url: '/bao-hanh/' }, { name: 'Câu hỏi thường gặp', url: '/cau-hoi-thuong-gap/' }, ...PRODUCTS.slice(0, 2).map((x) => ({ name: x.name, url: `/phuc-hinh/${x.slug}/`, thumb: x.thumb }))],
  relatedTitle: 'Xem thêm',  faq: TURNAROUND_FAQ,
}));

pages.push(page({
  path: '/bao-hanh/',
  title: 'Bảo hành răng sứ theo dòng vật liệu | KTV Dental Lab',
  desc: `Bảo hành răng sứ tại labo KTV Dental Lab: ${MATERIALS.filter((m) => m.years).map((m) => `${m.name} ${m.years} năm`).join(', ')}; răng sứ kim loại theo thỏa thuận.`,
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Bảo hành', url: '/bao-hanh/' }],
  h1: 'Bảo hành theo dòng vật liệu',
  lead: 'Từ 3 đến 15 năm cho răng sứ không kim loại; răng sứ kim loại bảo hành theo thỏa thuận với phòng khám.',
  body: warrantyBody(),
  side: sideBox([['Dài nhất', 'Lava, 15 năm'], ['Implant', 'Như răng thật cùng dòng vật liệu'], ['Sứ kim loại', 'Theo thỏa thuận']]),
  related: [{ name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }, ...MATERIALS.filter((m) => m.kind === 'zirconia').map((x) => ({ name: x.name, url: `/vat-lieu/${x.slug}/`, thumb: x.img }))],
  relatedTitle: 'Các dòng zirconia',
  faq: WARRANTY_FAQ,
}));

pages.push(page({
  path: '/cau-hoi-thuong-gap/',
  title: 'Câu hỏi thường gặp về labo răng sứ | KTV Dental Lab',
  desc: 'Giải đáp về phục hình, phôi zirconia, bảo hành, thời gian sản xuất, chứng nhận ISO 13485 và cách nhận báo giá tại labo răng sứ KTV Dental Lab.',
  crumbs: [{ name: 'Trang chủ', url: '/' }, { name: 'Câu hỏi thường gặp', url: '/cau-hoi-thuong-gap/' }],
  h1: 'Câu hỏi thường gặp',
  lead: 'Những câu bác sĩ và phòng khám hay hỏi khi làm việc với KTV Dental Lab.',
  body: FAQ.map(([q, a]) => `\n<h2>${esc(q)}</h2>\n<p>${a}</p>`).join(''),
  side: sideBox([['Báo giá qua Zalo', `${QUOTE_LINKS}`], ['Giờ làm việc', BIZ.hoursShort], ['Email', `<a href="mailto:${BIZ.email}">${BIZ.email}</a>`]]),
  related: [{ name: 'Hỏi đáp kỹ thuật cho bác sĩ', url: '/hoi-dap/' }, { name: 'Thời gian sản xuất', url: '/thoi-gian-san-xuat/' }, { name: 'Bảo hành', url: '/bao-hanh/' }, { name: 'So sánh các dòng zirconia', url: '/vat-lieu/so-sanh-zirconia/' }],
  relatedTitle: 'Xem thêm',
  sources: FAQ_SOURCES,
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) }],
}));

/* ---------- sitemap ---------- */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${lastmod[p]}</lastmod><priority>${p === '/' ? '1.0' : p.split('/').length > 3 ? '0.8' : '0.6'}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);

/* ---------- llms.txt: bản tóm tắt cho trợ lý AI (https://llmstxt.org) ---------- */
{
  const zr = MATERIALS.filter((m) => m.kind === 'zirconia');
  const metal = MATERIALS.filter((m) => m.kind !== 'zirconia');
  const L = (name, path, note) => `- [${name}](${SITE}${path})${note ? ': ' + note : ''}`;
  const txt = `# KTV Dental Lab

> Labo răng sứ (CÔNG TY TNHH MTV KTV) sản xuất phục hình nha khoa — răng sứ kim loại và răng sứ không kim loại (zirconia) — cho phòng khám nha khoa. Địa chỉ ${BIZ.address} (${BIZ.area}). Hệ thống quản lý chất lượng đạt ${BIZ.iso.std}, chứng nhận bởi ${BIZ.iso.body}. Nhận ca khắp khu vực miền Nam.

Labo sản xuất phục hình theo từng ca của phòng khám nha khoa và giao trực tiếp đến phòng khám.

## Thông tin chính

- Tên: ${BIZ.name} — pháp nhân ${BIZ.legal}, mã số thuế 3703340735
- Địa chỉ: ${BIZ.address} (${BIZ.area})
- Giờ làm việc: ${BIZ.hours}
- Điện thoại: ${BIZ.phones.map((p) => `${p.text} (${p === BIZ.office ? 'cố định, số công ty' : p.label.toLowerCase()})`).join(', ')}
- Email: ${BIZ.email}
- Báo giá, tư vấn ban đầu (Zalo): ${QUOTE_TEXT}
- Khu vực: ${BIZ.delivery}
- Chứng nhận: ${BIZ.iso.std}, ${BIZ.iso.body}, số ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid}
- Máy phay CAD/CAM: DGSHAPE DWX-52Di (5 trục)
- Thời gian sản xuất (mọi loại phục hình, tính từ lúc labo nhận hàng): ${TURNAROUND.map((t) => `${t.what.toLowerCase()} ${t.time}${t.max ? ` (${t.max})` : ''}`).join('; ')}
- Bảo hành: ${zr.map((m) => `${m.name} ${m.years} năm`).join(', ')}; răng sứ kim loại (${metal.map((m) => m.name).join(', ')}) theo thỏa thuận; phục hình trên implant như phục hình trên răng thật cùng dòng vật liệu
- Gửi ca: nhận dấu theo mọi phương thức (dấu, mẫu hàm, file scan trong miệng); phiếu chỉ định nha khoa gửi qua mọi kênh online (có công cụ soạn phiếu online tại ${SITE}/phieu-chi-dinh/, không bắt buộc)
- Vật liệu: đa dạng dòng phôi zirconia; phòng khám cần dòng khác thì labo liên hệ đối tác, nhập phôi chính hãng theo yêu cầu
- Dịch vụ miễn phí: xoi mòn mặt dán zirconia bằng dung dịch Zircos-E cho inlay, onlay, overlay

## Phục hình

${PRODUCTS.map((p) => L(p.title, `/phuc-hinh/${p.slug}/`, p.short)).join('\n')}

## Vật liệu

${MATERIALS.map((m) => L(m.name, `/vat-lieu/${m.slug}/`, `${m.kind === 'zirconia' ? 'zirconia' : 'hợp kim'}, ${m.maker}, ${m.country}; bảo hành ${m.years ? m.years + ' năm' : 'theo thỏa thuận'}`)).join('\n')}
${L('So sánh các dòng zirconia', '/vat-lieu/so-sanh-zirconia/', 'độ bền, độ trong theo công bố của hãng, xuất xứ, bảo hành')}

## Thông tin cho phòng khám

${L('Labo răng sứ Bình Dương (Thủ Dầu Một)', '/labo-rang-su-binh-duong/', 'địa chỉ, khu vực giao nhận, thời gian sản xuất, bảo hành')}
${L('Labo răng sứ TP HCM', '/labo-rang-su-tp-hcm/', 'gửi ca từ xa: file scan, dấu, lịch hẹn')}
${L('Cách gửi ca', '/gui-ca/')}
${L('Phiếu chỉ định online', '/phieu-chi-dinh/', 'soạn phiếu chỉ định có sơ đồ răng FDI, gửi qua Zalo, email hoặc in; không bắt buộc')}
${L('Thông tin pháp lý', '/phap-ly/', 'tên doanh nghiệp, mã số thuế, ISO 13485, nguồn gốc vật liệu')}
${L('Thời gian sản xuất', '/thoi-gian-san-xuat/')}
${L('Bảo hành', '/bao-hanh/')}
${L('Xoi mòn zirconia bằng Zircos-E (miễn phí)', '/dich-vu/xoi-mon-zirconia-zircos-e/')}
${L('Câu hỏi thường gặp', '/cau-hoi-thuong-gap/')}

## Hỏi đáp kỹ thuật cho bác sĩ

${QA_TOPICS.map((t) => L(t.name, `/hoi-dap/${t.slug}/`, t.qs.map((q) => q[1]).join(' · '))).join('\n')}

## Optional

${L('Trang chủ', '/')}
- [Sitemap](${SITE}/sitemap.xml)
`;
  writeFileSync(join(ROOT, 'llms.txt'), txt);
}
console.log(`Đã tạo ${pages.length - 1} trang con + sitemap.xml (${pages.length} URL).`);
