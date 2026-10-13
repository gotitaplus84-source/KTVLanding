// Nội dung các trang con của ktvlab.com — sửa ở đây rồi chạy build.sh (hoặc: node pages/build.mjs).
//
// Nguyên tắc nội dung:
// - Viết cho người đọc là bác sĩ / phòng khám; không viết câu giải thích hậu trường
//   ("trang này…", "nguồn chúng tôi tham khảo…").
// - Thông tin về labo chỉ lấy từ những gì labo đã công bố (xuất xứ, hãng, bảo hành, ISO, địa chỉ,
//   giờ làm việc, thời gian sản xuất, khu vực giao nhận, cách gửi ca, quy trình Zircos-E).
// - Mọi con số về vật liệu / lâm sàng phải có nguồn trong SOURCES; hãng không công bố thì mô tả định tính.
// - Không dùng từ ngữ tuyệt đối ("tốt nhất", "số 1"…).

export const SITE = 'https://ktvlab.com';
export const BIZ = {
  name: 'KTV Dental Lab',
  legal: 'CÔNG TY TNHH MTV KTV',
  address: '614/18/21 Lê Hồng Phong, phường Phú Lợi, TP Hồ Chí Minh',
  area: 'khu vực Thủ Dầu Một, Bình Dương cũ',
  quote: { tel: '0904241929', label: '090 424 1929', zalo: 'https://zalo.me/0904241929' },
  quote2: { tel: '0772829989', label: '077 282 9989', zalo: 'https://zalo.me/0772829989' },
  phones: [
    { label: 'Cố định', tel: '02746514429', text: '0274 651 4429' },
    { label: 'Di động', tel: '0984241929', text: '098 424 1929' },
    { label: 'Di động', tel: '0904241929', text: '090 424 1929' },
  ],
  email: 'ktvlab8@gmail.com',
  hours: 'Thứ 2 – Thứ 7: 8h00 – 20h00; Chủ nhật: 8h00 – 12h00',
  hoursShort: 'T2 – T7: 8h00 – 20h00<br>CN: 8h00 – 12h00',
  delivery: 'Nhận ca khắp khu vực miền Nam; lấy và giao hàng nhanh tận nơi tại khu vực Bình Dương cũ.',
  iso: { std: 'ISO 13485:2016', body: 'ISOCERT', no: '9199302854823-MED', valid: '19/06/2026 – 18/06/2029' },
};

// Số báo giá, tư vấn ban đầu, Zalo: hai số song song (090 424 1929 là số chính).
export const QUOTE_LINKS = `<a href="${BIZ.quote.zalo}" target="_blank" rel="noopener">${BIZ.quote.label}</a> hoặc <a href="${BIZ.quote2.zalo}" target="_blank" rel="noopener">${BIZ.quote2.label}</a>`;
export const QUOTE_TEXT = `${BIZ.quote.label} hoặc ${BIZ.quote2.label}`;

// Nhập phôi theo yêu cầu: danh mục vật liệu không cố định.
export const MORE_BLANKS = `<p class="more-blanks"><strong>Cần dòng phôi zirconia khác?</strong> Gọi KTV Dental Lab, labo sẽ liên hệ đối tác và nhập phôi chính hãng loại đó theo yêu cầu của phòng khám. Điện thoại <a href="tel:${BIZ.phones[0].tel}">${BIZ.phones[0].text}</a> · Zalo ${QUOTE_LINKS}.</p>`;
export const MORE_BLANKS_TEXT = 'Ngoài các dòng phôi hiện có, nếu phòng khám cần dòng phôi zirconia khác, KTV Dental Lab liên hệ đối tác và nhập phôi chính hãng loại đó theo yêu cầu.';

// Popup "Nhận bảng giá qua Zalo" — nút có thuộc tính data-quote mở popup này (main.js); không có JS thì mở Zalo trực tiếp.
export const QUOTE_TPL = `<template id="quote-tpl"><div class="quote-box">
<button class="quote-x" type="button" data-close aria-label="Đóng">×</button>
<h2 id="quote-h">Bảng giá được gửi riêng cho từng phòng khám</h2>
<p>Labo không đăng bảng giá công khai, để giá labo là thông tin riêng giữa labo và phòng khám — không ảnh hưởng đến cách phòng khám tư vấn và báo giá với bệnh nhân.</p>
<p>Chỉ cần nhắn <strong>“bảng giá”</strong> qua Zalo — labo gửi bảng giá, không gọi điện làm phiền.</p>
<div class="quote-btns"><a class="btn btn-red" href="${BIZ.quote.zalo}" target="_blank" rel="noopener">Zalo ${BIZ.quote.label}</a><a class="btn btn-line" href="${BIZ.quote2.zalo}" target="_blank" rel="noopener">Zalo ${BIZ.quote2.label}</a></div>
<p class="quote-foot">Giờ làm việc: ${BIZ.hours}</p>
</div></template>`;

/* ---------- Nguồn tham khảo ---------- */
export const SOURCES = {
  iowa: ['Crown preparation guidelines — University of Iowa College of Dentistry (D3 Prosthodontics)', 'https://pressbooks.uiowa.edu/d3pros/?p=223'],
  spear: ['Cementation of full contour zirconia restorations — Spear Education', 'https://speareducation.com/2012/10/cementation-of-full-contour-zirconia-restorations'],
  sailer: ['Sailer I. và cs. (2015). All-ceramic or metal-ceramic tooth-supported fixed dental prostheses? Part I: Single crowns. Dental Materials 31(6):603–623', 'https://archive-ouverte.unige.ch/unige:79013'],
  pjet: ['Pjetursson B.E. và cs. (2018). Zirconia-ceramic vs metal-ceramic implant-supported single crowns. Clinical Oral Implants Research 29(Suppl 16):199–214', 'https://opinvisindi.is/items/288fc2bd-551c-4dc6-9324-7f40dc9b3e22/full'],
  nobel: ['Screw- vs cement-retained restorations — Nobel Biocare', 'https://nobelbiocare.com/en-int/blog/productivity/screw-vs-cement-retained-restorations'],
  mamoun: ['Mamoun J. (2017). Post and core build-ups in crown and bridge abutments. J Adv Prosthodont 9(3):232–237', 'https://synapse.koreamed.org/articles/1054406'],
  nickel: ['Chakravarthi S. và cs. (2012). Allergy and orthodontics. Journal of Orthodontic Science 1(4):83–87', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4072366'],
  katana: ['KATANA™ Zirconia — CAD/CAM discs, Kuraray Noritake Dental', 'https://www.kuraraynoritake.eu/en/labside/zirconia'],
  katanaYML: ['KATANA™ Zirconia YML — Kuraray Noritake Dental', 'https://www.kuraraynoritake.eu/en/katana-zirconia-yml'],
  katanaGuide: ['KATANA™ Zirconia STML / UTML — Technical Guide, Kuraray Noritake Dental', 'https://www.bego.com/fileadmin/user_downloads/Mediathek/Medical/en_Keramik/KATANA_Zirconia/KATANA-stml-utml-technical-guide-en.pdf'],
  lavaBro: ['Lava™ Plus High Translucency Zirconia — brochure, 3M', 'https://multimedia.3m.com/mws/media/1488179O/lava-plus-high-translucency-zirconia-brochure.pdf'],
  lavaSpec: ['Lava™ Plus High Translucency Zirconia — thông số 3M trên Dental Compare', 'https://www.dentalcompare.com/24992-CAD-CAM-Materials/33052-Lava-Plus-High-Translucency-Zirconia/'],
  cerconBro: ['Cercon® ht / xt — brochure, Dentsply Sirona', 'https://assets.dentsplysirona.com/flagship/en/explore/lab/dental-lab/cercon/LAB-Brochure-Cercon-ht-xt-EN-28376.pdf'],
  cerconML: ['Cercon® ht ML — Dentsply Sirona', 'https://www.dentsplysirona.com/en/discover/discover-by-brand/cercon-ht-ml.html'],
  ddbio: ['DD Bio ZX² — Dental Direkt GmbH', 'https://shop.dentaldirekt.de/en/products/zirconia-dd-bio-zx'],
  upcera: ['Upcera Dental — danh mục sản phẩm (Lab Management Today)', 'https://lmtmag.com/products/vendors/30904'],
  yousry: ['Yousry M. và cs. (2024). Translucency of recent zirconia materials and material-related variables affecting their translucency: a systematic review and meta-analysis. BMC Oral Health 24:309', 'https://link.springer.com/article/10.1186/s12903-024-04070-7'],
  binici: ['Binici Aygün E. và cs. (2025). Factors Affecting the Color Change of Monolithic Zirconia Ceramics: A Narrative Review. J Funct Biomater 16(2):58', 'https://www.mdpi.com/2079-4983/16/2/58'],
  shade: ['Guidelines for Visual Shade Selection — Shade Selection for Indirect Esthetic Restorations (CE690), Dentalcare', 'https://www.dentalcare.com/en-us/ce-courses/ce690/guidelines-for-visual-shade-selection'],
  alsahafi: ['Alsahafi T., Sulaiman T.A. (2024). Effective and predictable bonding of zirconia restorations. Oral Health Group', 'https://www.oralhealthgroup.com/features/effective-and-predictable-bonding-of-zirconia-restorations/'],
  blatz: ['Blatz M.B. (2024). Reliably Bonding Zirconia. Inside Dental Technology', 'https://idt.cdeworld.com/courses/5434'],
  bisco: ['3 essential tips for bonding to zirconia — BISCO', 'https://bisco.com/3-essential-tips-for-bonding-to-zirconia'],
  christensen: ['Christensen G.J. (2024). Successful cementing of zirconia crowns: Still a problem. Dental Economics', 'https://dentaleconomics.com/science-tech/article/14286611/successful-cementing-of-zirconia-crowns-still-a-problem'],
  shirazi: ['Sarraf Shirazi A. và cs. (2024). Effect of Different Cleaning Methods on Bond Strength of Resin to Saliva-Contaminated Zirconia: A Systematic Review and Meta-analysis of in Vitro Studies. Annali di Stomatologia 15(1):27–38', 'https://doi.org/10.59987/ads/2024.1.27-38'],
  ishii: ['Ishii R. và cs. (2015). Influence of surface treatment of contaminated zirconia on surface free energy and resin cement bonding. Dental Materials Journal 34(1):91–97', 'https://doi.org/10.4012/dmj.2014-066'],
  recement: ['(2025). Effect of Surface Cleaning and Heat Treatment on Shear Bond Strength of Cement-Contaminated Zirconia. Thieme', 'https://doi.org/10.1055/s-0045-1811225'],
  difiore: ['Di Fiore A., Monaco C., Stellini E. (2023). Retrospective clinical study of 1472-unit monolithic zirconia restorations with feather-edge margins realized with digital workflow. Clinical Oral Investigations 27:6567–6575', 'https://doi.org/10.1007/s00784-023-05262-1'],
  leitao: ['Leitão C.I.M.B. và cs. (2022). Clinical performance of monolithic CAD/CAM tooth-supported zirconia restorations: systematic review and meta-analysis. J Prosthodont Res 66(3):374–384', 'https://doi.org/10.2186/jpr.JPR_D_21_00081'],
  alves: ['Alves L.M.M. và cs. (2019). The Wear Performance of Glazed and Polished Full Contour Zirconia. Brazilian Dental Journal 30(5):511–518', 'https://scielo.br/j/bdj/a/S9bR5vCK6ymJcVzmG6PPp4t/?lang=en'],
  kale: ['Kale E. và cs. (2016). Effect of cement space on the marginal fit of CAD-CAM-fabricated monolithic zirconia crowns. J Prosthet Dent 116(6):890–895', 'https://doi.org/10.1016/j.prosdent.2016.05.006'],
  alshalan: ['Al-shalan A. và cs. (2019). Marginal and internal fit of CAD CAM system: A literature review. Saudi Dental Journal 31:S21', 'https://doaj.org/article/222d0d166def4ea49e7d238bf38c4bf4'],
  an2024: ['An H. và cs. (2024). Effect of finish line location and saliva contamination on the accuracy of crown finish line scanning. J Prosthodont 33(1):86–94', 'https://doi.org/10.1111/jopr.13658'],
  iti2018: ['ITI Consensus Conference 2018 — Digital technologies (Wismeijer D. và cs., Clin Oral Implants Res); tóm tắt trên DrBicuspid', 'https://www.drbicuspid.com/dental-specialties/smile-design/restorations/article/15374669/5-key-takeaways-for-dental-implant-imaging'],
  scanTorque: ['(2020). Displacement of scan body during screw tightening: A comparative in vitro study. J Adv Prosthodont', 'https://pesquisa.bvsalud.org/gim/resource/pt/wpr-837229'],
  wan2024: ['Wan Q. và cs. (2024). Enhancing scanning accuracy of digital implant scans: A systematic review on application methods of scan bodies. J Prosthet Dent', 'https://doi.org/10.1016/j.prosdent.2024.06.010'],
  shetty2025: ['Shetty P.S. và cs. (2025). Accuracy of the digital implant impression with splinted and non-splinted intraoral scan bodies: A systematic review. J Indian Prosthodont Soc', 'https://doi.org/10.4103/jips.jips_261_24'],
  katafuchi: ['Katafuchi M. và cs. (2018). Restoration contour is a risk indicator for peri-implantitis: A cross-sectional radiographic analysis. J Clin Periodontol 45(2):225–232', 'https://pubmed.ncbi.nlm.nih.gov/28985447/'],
  totou: ['Totou D. và cs. (2021). Esthetic, mechanical, and biological outcomes of various implant abutments for single-tooth replacement in the anterior region: a systematic review. Int J Implant Dent 7', 'https://doaj.org/article/6af8236d8c4440a1abed9cdb221ddf9a'],
  kinzer: ['Kinzer G. (2016). How to achieve success with custom zirconia abutments — Spear Education', 'https://www.speareducation.com/spear-review/2016/07/how-to-achieve-success-with-custom-zirconia-abutments'],
  pardal: ['Pardal-Peláez B. và cs. (2018). Strategies to reduce torque loss of abutment screws. J Oral Res Rev 10(2):68–75', 'https://doi.org/10.4103/jorr.jorr_37_17'],
  kendirli: ['Kendirli C. và cs. (2026). The Effect of Implant Angle and Ti-Base Abutment Height on Monolithic Zirconia Crown Retention. Meandros Med Dent J', 'https://doi.org/10.69601/meandrosmdj.1789538'],
  nq202: ['Nghị quyết 202/2025/QH15 về sắp xếp đơn vị hành chính cấp tỉnh — tóm tắt trên Thư viện Pháp luật', 'https://thuvienphapluat.vn/phap-luat-nha-dat/cap-nhat-thong-tin-dia-chi-van-phong-dang-ky-dat-dai-tinh-binh-duong-sau-khi-sap-nhap-tu-ngay-01720-5312.html'],
  iso13485: ['ISO 13485:2016 — Medical devices — Quality management systems — Requirements for regulatory purposes (ISO)', 'https://www.iso.org/standard/59752.html'],
  dwx52: ['DWX-52Di 5 Axis Dental Milling Machine — DGSHAPE / Roland DGA', 'https://www.rolanddga.com/en-la/products/dental/dwx-52di-5-axis-dental-milling-machine'],
  zircosE: ['Zircos-E Etching Solution — RH Marketing (Lab Management Today)', 'https://lmtmag.com/products/rh-marketing-zircos-e-etching-solution'],
  sokolowski: ['Sokolowski G. và cs. (2023). The Shear Bond Strength of Resin-Based Luting Cement to Zirconia Ceramics after Different Surface Treatments. Materials 16(15):5433', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10419834'],
  cho2017: ['Cho J.H. và cs. (2017). Effect of zirconia surface treatment using nitric acid-hydrofluoric acid on the shear bond strengths of resin cements. J Adv Prosthodont 9(2):77–84', 'https://synapse.koreamed.org/articles/1054452'],
  alawawda: ['Alawawda O., Altalla H., Bayındır F. (2026). Comparative effect of Zircos-E and airborne-particle abrasion on zirconia surface treatment: A meta-analysis. J Prosthodont 35(7):988–994', 'https://doi.org/10.1111/jopr.70033'],
};

/* ---------- Thời gian sản xuất (áp dụng cho mọi loại phục hình, tính từ lúc labo nhận hàng) ---------- */
export const TURNAROUND = [
  { what: 'Răng đơn lẻ, 2 – 3 đơn vị', time: '1 ngày', max: 'tối đa 36 giờ' },
  { what: 'Cầu răng 4 – 8 đơn vị', time: '2 ngày', max: 'tối đa 60 giờ' },
  { what: 'Cầu toàn hàm', time: '3 ngày', max: '' },
  { what: 'Hai hàm toàn hàm', time: '4 ngày', max: '' },
];
const table = (head, rows, cls = '') => `<div class="table-wrap${cls ? ' ' + cls : ''}"><table>
<thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('\n')}
</tbody></table></div>`;
export const turnaroundTable = () => table(['Loại ca', 'Thời gian sản xuất'],
  TURNAROUND.map((t) => [t.what, `<strong>${t.time}</strong>${t.max ? ` (${t.max})` : ''}`]));

/* ---------- Khối dùng chung ---------- */
const PREP_TABLE = table(['Loại mão', 'Mặt nhai<br>(múi chức năng / không chức năng)', 'Rìa cắn', 'Thành trục', 'Đường hoàn tất'], [
  ['<a href="/phuc-hinh/mao-full-zirconia/">Zirconia nguyên khối</a>', '1,0 – 1,5 mm / 1,0 mm', '1,8 – 2,0 mm', '0,8 – 1,0 mm', 'Chamfer 0,5 – 0,8 mm'],
  ['<a href="/phuc-hinh/mao-su-dap-su/">Sứ – kim loại</a>', '1,5 – 2,0 mm / 1,0 – 1,5 mm', '2,0 mm', '—', '—'],
  ['<a href="/phuc-hinh/mao-full-kim-loai/">Toàn kim loại</a>', '1,5 mm / 1,0 mm', '—', '0,5 – 1,0 mm', '—'],
  ['Toàn sứ', '2,0 mm / 1,5 mm', '1,5 – 2,0 mm', '1,2 – 1,5 mm', '1,0 mm'],
], 'wide');
const PREP_NOTE = '<p class="note">Theo giáo trình phục hình của Đại học Iowa.</p>';
const PREP_RULES = `<ul>
<li><strong>Chiều cao cùi tối thiểu:</strong> khoảng 3 mm với răng cối nhỏ, 4 mm với răng cối lớn.</li>
<li><strong>Độ thuôn tổng:</strong> lý tưởng 10 – 20°; thuôn càng nhiều, kháng lực càng giảm.</li>
<li><strong>Vị trí đường hoàn tất:</strong> không đặt sâu dưới nướu quá một nửa độ sâu khe nướu, để tôn trọng khoảng sinh học (khoảng 2 mm).</li>
</ul>`;

const SEND_CASE = `<ul>
<li><strong>Dấu hoặc file scan</strong> của hàm làm việc, hàm đối diện và khớp cắn.</li>
<li><strong>Màu răng</strong> theo bảng màu VITA, kèm ảnh chụp răng kế bên với cây so màu — đặc biệt với răng trước.</li>
<li><strong>Vật liệu và dòng phôi</strong>; nếu chưa chọn, ghi yêu cầu (thẩm mỹ, chịu lực, chi phí, bảo hành) để labo đề xuất.</li>
<li>Ghi chú đặc biệt: răng trụ cầu, nhịp cầu, khoảng phục hình hạn chế, khớp cắn sâu, nghiến răng…</li>
</ul>
<p>Labo nhận dấu theo mọi phương thức; phiếu chỉ định gửi qua mọi kênh online. Chi tiết: <a href="/gui-ca/">cách gửi ca</a>.</p>`;

const ZR_CEMENT = `<p>Zirconia không xoi mòn được bằng axit HF và không silane hoá được như sứ thuỷ tinh (lithium disilicate). Hai cách gắn thường dùng:</p>
<ul>
<li><strong>Xi măng thông thường</strong> (glass ionomer, glass ionomer biến tính nhựa) khi cùi đủ chiều cao và độ thuôn hợp lý.</li>
<li><strong>Xi măng nhựa</strong> khi cùi ngắn hoặc thuôn nhiều: thổi cát mặt trong bằng Al₂O₃ 50 µm (khoảng 2,5 bar), sau đó dùng primer có chứa <strong>MDP</strong>.</li>
</ul>
<p>Với inlay, onlay, overlay zirconia, labo <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn mặt dán bằng Zircos-E</a> theo yêu cầu — hiện miễn phí.</p>
<p>Hỏi đáp chi tiết: <a href="/hoi-dap/gan-mao-zirconia/">gắn mão zirconia</a>, <a href="/hoi-dap/bong-mao-zirconia/">mão zirconia bị bong</a>.</p>`;

const ZR_ADJUST = `<ul>
<li>Chỉnh khớp bằng mũi kim cương hạt mịn, có làm mát bằng nước; tránh mũi thô và đá mài xanh ở bước hoàn tất.</li>
<li><strong>Đánh bóng lại</strong> mọi vùng đã mài bằng bộ đánh bóng chuyên cho zirconia, nhất là vùng tiếp xúc với răng đối diện.</li>
<li>Với dòng có độ bền thấp hơn (như các dòng độ trong cao), tránh dùng lực mạnh khi chỉnh mặt trong và bờ viền.</li>
</ul>`;

/* ---------- Vật liệu ---------- */
export const MATERIALS = [
  { slug: 'upcera', name: 'Upcera', kind: 'zirconia', country: 'Trung Quốc', maker: 'Shenzhen Upcera Dental Technology', years: 3,
    img: '/assets/img/blanks/upcera.webp', imgAlt: 'Phôi zirconia Upcera TT-One', multilayer: false,
    lead: 'Phôi zirconia của Shenzhen Upcera Dental Technology (Trung Quốc) cho răng sứ không kim loại với chi phí hợp lý. Bảo hành 3 năm.',
    about: `<p><strong>Upcera</strong> là nhà sản xuất phôi zirconia và vật liệu CAD/CAM của Trung Quốc. Danh mục zirconia của hãng chia theo độ trong và cách tạo màu:</p>
<ul>
<li><strong>Upcera ST</strong> — dòng độ trong cao, có phôi tiền nhuộm màu (Color), phôi nhiều lớp (Multilayer) và phôi trắng (White).</li>
<li><strong>Upcera TT-One</strong> — phôi trắng, phôi tiền nhuộm màu (Pre-shade) và phôi nhiều lớp.</li>
</ul>
<h3>Phôi trắng, phôi tiền nhuộm và phôi nhiều lớp</h3>
<p><strong>Phôi trắng</strong> được nhuộm màu bằng dung dịch trước khi thiêu kết, cho phép kỹ thuật viên chủ động màu từng vùng. <strong>Phôi tiền nhuộm</strong> đã có sẵn một màu đồng nhất theo bảng màu, cho màu ổn định giữa các ca. <strong>Phôi nhiều lớp</strong> chuyển màu từ cổ răng đến rìa cắn ngay trong phôi.</p>`,
    specs: [['Vật liệu', 'Zirconia'], ['Dòng sản phẩm', 'ST (Color, Multilayer, White) · TT-One (White, Pre-shade, Multilayer)'], ['Đặc điểm theo hãng', 'Độ bền cao, độ trong cao; phôi Multilayer chuyển màu nhiều lớp'], ['Bảo hành tại KTV', '<strong>3 năm</strong>']],
    specsNote: 'Theo danh mục sản phẩm của Upcera.',
    more: `<h2>Phù hợp với ca nào?</h2>
<ul>
<li>Mão zirconia nguyên khối răng sau, mão đơn lẻ, cầu ngắn.</li>
<li>Sườn zirconia cho <a href="/phuc-hinh/mao-su-dap-su/">mão sứ đắp sứ</a>.</li>
<li>Ca cần tối ưu chi phí mà vẫn là răng sứ không kim loại.</li>
</ul>
<p>Với cầu dài nhiều đơn vị hoặc ca cần thời hạn bảo hành dài, các dòng có công bố độ bền cao và được hãng chỉ định rõ cho cầu dài như <a href="/vat-lieu/ddbio/">DDBio</a>, <a href="/vat-lieu/cercon/">Cercon ht</a>, <a href="/vat-lieu/lava/">Lava</a> là lựa chọn phù hợp hơn.</p>`,
    choose: 'Răng sứ không kim loại cần tối ưu chi phí: mão đơn lẻ, cầu ngắn, sườn zirconia. Cần bảo hành dài hơn: <a href="/vat-lieu/katana/">Katana</a>, <a href="/vat-lieu/ddbio/">DDBio</a> (5 năm), <a href="/vat-lieu/cercon/">Cercon</a> (7 năm), <a href="/vat-lieu/lava/">Lava</a> (15 năm).',
    faq: [['Răng sứ Upcera bảo hành bao lâu?', 'Phục hình zirconia Upcera tại KTV Dental Lab được bảo hành 3 năm.'],
      ['Upcera có phôi nhiều lớp không?', 'Có. Danh mục của Upcera có các dòng nhiều lớp như ST Multilayer và TT-One Multilayer.'],
      ['Phôi tiền nhuộm màu khác phôi trắng thế nào?', 'Phôi tiền nhuộm có sẵn màu đồng nhất theo bảng màu nên màu ổn định giữa các ca; phôi trắng được nhuộm bằng dung dịch trước khi thiêu kết, cho phép điều chỉnh màu từng vùng.']],
    sources: ['upcera'] },

  { slug: 'unc', name: 'UNC', kind: 'zirconia', country: 'Hàn Quốc', maker: 'U&C International Co., Ltd', years: 3,
    img: '/assets/img/blanks/unc.webp', imgAlt: 'Phôi zirconia UNC Razor', multilayer: true,
    lead: 'Phôi zirconia của U&C International (Hàn Quốc), có phôi một màu và phôi Multilayer nhiều lớp. Bảo hành 3 năm.',
    about: `<p><strong>UNC</strong> là thương hiệu zirconia của <strong>U&C International Co., Ltd</strong> (Ansan, Hàn Quốc). Hệ thống quản lý chất lượng của hãng đạt ISO 13485:2016 và ISO 9001:2015. Phôi có đường kính Ø98 mm, dùng cho máy phay hệ mở — ví dụ dòng <strong>Razor Zirconia</strong>.</p>
<p>Bên cạnh phôi một màu, UNC có dòng <strong>Multilayer</strong> nhiều lớp màu cho mão zirconia nguyên khối cần chuyển màu tự nhiên từ cổ răng đến rìa cắn.</p>`,
    specs: [['Vật liệu', 'Zirconia'], ['Kích thước phôi', 'Ø98 mm (máy phay hệ mở)'], ['Dòng nhiều lớp', 'Có (Multilayer)'], ['Chứng nhận của hãng', 'ISO 13485:2016, ISO 9001:2015'], ['Bảo hành tại KTV', '<strong>3 năm</strong>']],
    specsNote: 'Theo nhãn phôi của U&C International.',
    more: `<h2>Phôi một màu hay Multilayer?</h2>
${table(['', 'Phôi một màu', 'Phôi Multilayer'], [
  ['Màu', 'Đồng nhất từ cổ đến rìa cắn; tạo chuyển màu bằng nhuộm bề mặt', 'Chuyển màu sẵn trong phôi'],
  ['Phù hợp', 'Răng sau, sườn đắp sứ', 'Răng trước và vùng thẩm mỹ'],
])}
<p>Với cả hai loại, độ dày phục hình theo hướng dẫn của hãng; bề mặt được đánh bóng hoặc glaze sau khi hoàn thiện màu.</p>`,
    choose: 'Răng sứ không kim loại chi phí hợp lý, có lựa chọn Multilayer cho răng trước. Cần bảo hành dài hơn: <a href="/vat-lieu/katana/">Katana</a>, <a href="/vat-lieu/cercon/">Cercon</a>, <a href="/vat-lieu/lava/">Lava</a>.',
    faq: [['Răng sứ UNC bảo hành bao lâu?', 'Phục hình zirconia UNC tại KTV Dental Lab được bảo hành 3 năm.'],
      ['UNC khác Upcera thế nào?', 'Cả hai đều là zirconia chi phí hợp lý, cùng bảo hành 3 năm tại KTV Dental Lab. UNC sản xuất tại Hàn Quốc, Upcera tại Trung Quốc; cả hai đều có phôi nhiều lớp.'],
      ['Mão UNC Multilayer dùng cho răng trước được không?', 'Được. Phôi Multilayer chuyển màu từ cổ răng đến rìa cắn, phù hợp mão nguyên khối ở vùng thẩm mỹ.']],
    sources: [] },

  { slug: 'katana', name: 'Katana', kind: 'zirconia', country: 'Nhật Bản', maker: 'Kuraray Noritake Dental Inc.', years: 5,
    img: '/assets/img/blanks/katana.webp', imgAlt: 'Hộp và phôi Katana Zirconia YML', multilayer: true,
    lead: 'Zirconia nhiều lớp của Kuraray Noritake Dental (Nhật Bản), với các dòng YML, HTML PLUS, STML, UTML. Bảo hành 5 năm.',
    about: `<p>KATANA™ Zirconia của <strong>Kuraray Noritake Dental</strong> (Nhật Bản) gồm nhiều dòng phôi khác nhau về độ trong và độ bền, phần lớn là phôi <strong>nhiều lớp</strong> chuyển màu từ cổ răng đến rìa cắn.</p>
<p>Dòng <strong>YML</strong> (Yttria Multi Layered) kết hợp ba loại zirconia có hàm lượng yttria khác nhau trong cùng một phôi: lớp men trên cùng trong hơn, các lớp thân bên dưới bền hơn. Một phôi YML vì vậy dùng được từ mão răng trước đến cầu dài.</p>`,
    specs: null,
    specsTable: table(['Dòng Katana', 'Độ bền uốn', 'Độ trong', 'Chỉ định chính'], [
      ['YML', 'Men 750 MPa · Thân 1 1.000 MPa · Thân 2–3 1.100 MPa', '49% · 47% · 45%', 'Mão, cầu nguyên khối, sườn cắt lớp (cut-back), cầu dài'],
      ['HTML PLUS', '1.150 MPa', '45%', 'Mão, cầu nguyên khối, sườn'],
      ['STML', '748 MPa', '49%', 'Mão; cầu nguyên khối đến 3 đơn vị'],
      ['UTML', '557 MPa', '51%', 'Răng trước: mão, cầu đến 3 đơn vị'],
      ['HT', '1.125 MPa', '45%', 'Sườn; mão và cầu nguyên khối răng trước; inlay, onlay, veneer'],
    ], 'wide') + '<p class="note">Theo Kuraray Noritake Dental. Màu: 14 màu theo bảng VITA classical.</p>',
    more: `<h2>Thiết kế theo hướng dẫn của hãng</h2>
<h3>Katana YML</h3>
<ul>
<li>Độ dày tối thiểu <strong>0,4 mm</strong> (răng trước) / <strong>0,5 mm</strong> (răng sau) khi phục hình nằm ở nửa dưới phôi; tối thiểu <strong>0,8 mm</strong> nếu nằm ở nửa trên phôi.</li>
<li>Cầu từ 4 đơn vị: ít nhất 50% tiết diện vùng nối nằm ở nửa dưới phôi (lớp thân bền hơn).</li>
<li>Tối đa 2 nhịp giữa 2 trụ.</li>
</ul>
<h3>Katana STML và UTML</h3>
${table(['Cầu 2 – 3 đơn vị', 'Tiết diện vùng nối tối thiểu'], [
  ['Răng trước', '12 mm²'],
  ['Răng sau', '16 mm²'],
])}
<ul>
<li>Không làm nhịp cầu đèo (cantilever).</li>
<li>Độ dày tối thiểu 0,8 mm nếu đắp sứ; có thể giảm đến 0,4 mm khi hoàn thiện bằng glaze và đánh bóng.</li>
<li>Khi chỉnh mặt trong và bờ viền, dùng lực nhẹ và làm mát bằng nước vì độ bền uốn thấp hơn các dòng HT, HTML PLUS.</li>
</ul>
<h2>Chọn dòng Katana theo vị trí</h2>
${table(['Vị trí / loại ca', 'Dòng phù hợp'], [
  ['Răng cửa, cần độ trong cao', 'UTML, STML'],
  ['Răng cối nhỏ, mão đơn lẻ vùng thẩm mỹ', 'STML, YML'],
  ['Răng cối lớn, khớp cắn mạnh', 'HTML PLUS, YML'],
  ['Cầu dài nhiều đơn vị', 'YML, HTML PLUS'],
  ['Sườn đắp sứ', 'HT, HTML PLUS, YML (cut-back)'],
])}`,
    choose: 'Cân bằng giữa thẩm mỹ và độ bền trong cùng một phôi (YML); răng trước cần độ trong cao (UTML, STML); cầu dài (YML, HTML PLUS). Labo đề xuất dòng phù hợp theo vị trí và số đơn vị.',
    faq: [['Katana STML, UTML và YML khác nhau thế nào?', 'UTML trong nhất (51%) nhưng độ bền thấp hơn (557 MPa), chỉ định cho răng trước; STML cân bằng (49%, 748 MPa), cầu đến 3 đơn vị; YML có nhiều lớp với độ bền tăng dần từ 750 MPa (lớp men) đến 1.100 MPa (lớp thân), dùng được cho cầu dài.'],
      ['Cầu Katana STML cần vùng nối bao nhiêu?', 'Theo Kuraray Noritake, cầu 2 – 3 đơn vị bằng STML hoặc UTML cần tiết diện vùng nối tối thiểu 12 mm² ở răng trước và 16 mm² ở răng sau; không làm nhịp cầu đèo.'],
      ['Răng sứ Katana bảo hành bao lâu?', 'Phục hình zirconia Katana tại KTV Dental Lab được bảo hành 5 năm.']],
    sources: ['katana', 'katanaYML', 'katanaGuide'] },

  { slug: 'ddbio', name: 'DDBio', kind: 'zirconia', country: 'Đức', maker: 'Dental Direkt GmbH', years: 5,
    img: '/assets/img/blanks/ddbio.webp', imgAlt: 'Phôi zirconia DD Bio ZX² của Dental Direkt', multilayer: false,
    lead: 'Zirconia 3Y-TZP sản xuất tại Đức của Dental Direkt GmbH, độ bền uốn 1.150 ± 150 MPa, chỉ định đến cầu 14 đơn vị. Bảo hành 5 năm.',
    about: `<p>DD Bio là dòng zirconia của <strong>Dental Direkt GmbH</strong>, sản xuất tại Đức. Phôi <strong>DD Bio ZX²</strong> là zirconia 3Y-TZP-LA — zirconia ổn định bằng 3 mol% yttria, hàm lượng alumina thấp để tăng độ trong — có độ bền cao nên được hãng chỉ định cho cả mão, cầu dài và sườn sứ đắp.</p>
<p>Độ dai gãy trên 8 MPa√m giúp vật liệu chống lan vết nứt tốt, phù hợp vùng răng sau chịu lực nhai lớn.</p>`,
    specs: [['Vật liệu', '3Y-TZP-LA (zirconia độ trong cao)'], ['Độ bền uốn', '1.150 ± 150 MPa (DIN EN ISO 6872)'], ['Độ dai gãy (K<sub>IC</sub>)', '> 8 MPa√m'], ['Hệ số giãn nở nhiệt', '~10,6 × 10⁻⁶ K⁻¹ (25 – 500 °C)'], ['Màu', '16 màu VITA và 3 màu bleach (dung dịch nhuộm DD Shade Concept®)'], ['Bảo hành tại KTV', '<strong>5 năm</strong>']],
    specsNote: 'Theo Dental Direkt (DD Bio ZX²).',
    indications: ['Mão giải phẫu thu nhỏ (làm sườn để đắp sứ) và mão nguyên khối răng sau', 'Cầu sườn hoặc cầu nguyên khối, đến 14 đơn vị', 'Mão chính telescope, abutment lai (hybrid), thanh bar'],
    more: `<h2>Thế mạnh của DD Bio ZX²</h2>
<ul>
<li><strong>Cầu dài:</strong> chỉ định đến 14 đơn vị — phù hợp cầu toàn hàm, cầu nhiều trụ.</li>
<li><strong>Sườn đắp sứ:</strong> hệ số giãn nở nhiệt khoảng 10,6 × 10⁻⁶ K⁻¹, tương thích với các hệ sứ đắp dành cho sườn zirconia.</li>
<li><strong>Phục hình trên implant:</strong> dùng cho abutment lai và thanh bar theo chỉ định của hãng.</li>
</ul>`,
    choose: 'Mão và cầu chịu lực vùng răng sau, cầu nhiều đơn vị, cầu toàn hàm, hoặc sườn zirconia cho <a href="/phuc-hinh/mao-su-dap-su/">mão sứ đắp sứ</a>.',
    faq: [['Răng sứ DDBio có bền không?', 'Theo Dental Direkt, DD Bio ZX² có độ bền uốn 1.150 ± 150 MPa và độ dai gãy trên 8 MPa√m, được hãng chỉ định cho cầu đến 14 đơn vị.'],
      ['DDBio có dùng làm sườn đắp sứ được không?', 'Được. Dental Direkt chỉ định DD Bio ZX² cho mão giải phẫu thu nhỏ để đắp sứ và cầu sườn.'],
      ['Răng sứ DDBio bảo hành bao lâu?', 'Phục hình zirconia DDBio tại KTV Dental Lab được bảo hành 5 năm.']],
    sources: ['ddbio'] },

  { slug: 'cercon', name: 'Cercon', kind: 'zirconia', country: 'Đức', maker: 'Dentsply Sirona', years: 7,
    img: '/assets/img/blanks/cercon.webp', imgAlt: 'Phôi zirconia Cercon ht của Dentsply Sirona', multilayer: true,
    lead: 'Zirconia của Dentsply Sirona: Cercon ht (1.200 MPa), xt (độ trong 49%) và ht ML nhiều lớp. Bảo hành 7 năm.',
    about: `<p>Cercon® là dòng zirconia của <strong>Dentsply Sirona</strong>, gồm ba lựa chọn chính:</p>
<ul>
<li><strong>Cercon ht</strong> — độ bền cao, dùng cho răng trước và răng sau, cầu nhiều đơn vị.</li>
<li><strong>Cercon xt</strong> — độ trong cao hơn, cho mão và cầu 3 đơn vị đến răng cối nhỏ thứ hai.</li>
<li><strong>Cercon ht ML</strong> — phôi bốn lớp màu, độ bền chuyển dần từ 1.200 MPa ở vùng ngà đến 750 MPa ở vùng rìa cắn.</li>
</ul>`,
    specs: null,
    specsTable: table(['Dòng Cercon', 'Độ bền uốn', 'Độ trong', 'Chỉ định chính'], [
      ['Cercon ht', '1.200 MPa', '41%', 'Mão, mão chính telescope, cầu nhiều đơn vị (tối đa 2 nhịp giữa 2 trụ) — răng trước và răng sau'],
      ['Cercon xt', '750 MPa', '49%', 'Mão; cầu 3 đơn vị đến răng cối nhỏ thứ hai (không dùng cầu 3 đơn vị vùng răng cối lớn)'],
      ['Cercon ht ML', '1.200 → 750 MPa (ngà → rìa cắn)', '41 – 49%', 'Mão, cầu nhiều đơn vị — răng trước và răng sau'],
    ], 'wide') + '<p class="note">Theo Dentsply Sirona; độ trong đo trên đĩa trắng bằng máy đo độ mờ (haze meter). Màu: 16 màu VITA, trắng và BL2. Thiêu kết ở 1.500 °C.</p>',
    more: `<h2>Chọn dòng Cercon theo ca</h2>
${table(['Loại ca', 'Dòng phù hợp', 'Lưu ý'], [
  ['Cầu nhiều đơn vị, răng sau chịu lực', 'Cercon ht', 'Tối đa 2 nhịp giữa 2 trụ'],
  ['Mão răng trước, cần độ trong cao', 'Cercon xt', 'Không làm cầu 3 đơn vị vùng răng cối lớn'],
  ['Mão nguyên khối chuyển màu tự nhiên', 'Cercon ht ML', 'Đặt vùng chịu lực, vùng nối ở lớp ngà (1.200 MPa)'],
  ['Mão chính telescope', 'Cercon ht', '—'],
], 'wide')}`,
    choose: 'Cầu nhiều đơn vị cần độ bền (ht), mão răng trước cần độ trong (xt), hoặc mão nguyên khối có chuyển màu tự nhiên (ht ML). Bảo hành 7 năm.',
    faq: [['Cercon ht và Cercon xt khác nhau thế nào?', 'Theo Dentsply Sirona, Cercon ht có độ bền uốn 1.200 MPa và độ trong 41%; Cercon xt có độ bền 750 MPa nhưng độ trong 49%. Cercon xt không dùng cho cầu 3 đơn vị vùng răng cối lớn.'],
      ['Cercon ht ML có mấy lớp?', 'Bốn lớp màu; độ bền chuyển dần từ 1.200 MPa ở vùng ngà đến 750 MPa ở vùng rìa cắn, độ trong 41 – 49%.'],
      ['Răng sứ Cercon bảo hành bao lâu?', 'Phục hình zirconia Cercon tại KTV Dental Lab được bảo hành 7 năm.']],
    sources: ['cerconBro', 'cerconML'] },

  { slug: 'lava', name: 'Lava', kind: 'zirconia', country: 'Mỹ', maker: 'Solventum (3M)', years: 15,
    img: '/assets/img/blanks/lava.webp', imgAlt: 'Phôi zirconia Lava Plus độ trong cao', multilayer: false,
    lead: 'Lava™ Plus — zirconia độ trong cao của 3M (nay thuộc Solventum), độ bền uốn 1.100 MPa. Bảo hành 15 năm, dài nhất tại KTV Dental Lab.',
    about: `<p>Lava™ là dòng zirconia của <strong>3M</strong>, nay thuộc <strong>Solventum</strong>. Phôi <strong>Lava™ Plus High Translucency Zirconia</strong> có cấu trúc hạt mịn — kích thước hạt trung bình dưới 0,5 µm sau thiêu kết — cho độ trong cao mà vẫn giữ độ bền uốn 1.100 MPa.</p>
<p>Lava Plus dùng được cả dạng nguyên khối, đắp sứ một phần hoặc toàn phần, với phạm vi chỉ định rộng từ mão đơn lẻ đến cầu dài, cầu cong và cầu trên implant.</p>`,
    specs: [['Vật liệu', 'Zirconia độ trong cao'], ['Độ bền uốn', '1.100 MPa'], ['Kích thước hạt', '< 0,5 µm (trung bình, sau thiêu kết)'], ['Độ dày thành tối thiểu', '0,5 mm (cầu nhiều đơn vị vùng răng sau)'], ['Màu', '16 màu VITA classical A1 – D4 và 2 màu bleach (dung dịch nhuộm)'], ['Bảo hành tại KTV', '<strong>15 năm</strong>']],
    specsNote: 'Theo 3M (brochure Lava™ Plus và thông số sản phẩm).',
    indications: ['Mão răng trước và răng sau; mão liên kết đến 4 đơn vị', 'Cầu 3 – 4 đơn vị, cầu dài và cầu cong, cầu đèo (cantilever)', 'Cầu inlay/onlay, cầu dán Maryland răng trước', 'Mão trên abutment implant, cầu 3 đơn vị trên 2 implant', 'Nguyên khối hoặc đắp sứ một phần / toàn phần'],
    more: `<h2>Hoàn thiện màu</h2>
<p>Lava Plus là phôi trắng, được nhuộm bằng hệ dung dịch của hãng trước khi thiêu kết: 16 màu VITA classical và 2 màu bleach. Lớp glaze sau cùng giúp màu khớp với màu đã chọn và cho bề mặt bóng mịn.</p>
<h2>Bảo hành 15 năm</h2>
<p>Lava là dòng có thời hạn bảo hành dài nhất trong các dòng zirconia hiện có tại KTV Dental Lab, phù hợp phòng khám muốn cam kết dài hạn với bệnh nhân cho mão và cầu không kim loại.</p>`,
    choose: 'Khi cần thời hạn bảo hành dài nhất tại labo (15 năm), cùng phạm vi chỉ định rộng từ mão đơn lẻ đến cầu dài, cầu cong và cầu trên implant.',
    faq: [['Răng sứ Lava bảo hành bao lâu?', 'Phục hình zirconia Lava tại KTV Dental Lab được bảo hành 15 năm — dài nhất trong các dòng vật liệu của labo.'],
      ['Lava Plus có làm được cầu dài không?', 'Có. Theo 3M, Lava Plus được chỉ định cho cầu 3 – 4 đơn vị, cầu dài và cầu cong, cầu đèo, và cầu trên implant.'],
      ['Lava Plus có đắp sứ được không?', 'Được. Lava Plus dùng được dạng nguyên khối, đắp sứ một phần hoặc đắp sứ toàn phần.']],
    sources: ['lavaBro', 'lavaSpec'] },

  { slug: 'ni-cr', name: 'Ni-Cr', kind: 'metal', country: 'Đức / Mỹ', maker: 'Eisenbacher Dentalwaren ED, Aalba Dent', years: null,
    img: '/assets/img/products/pfm-lg.webp', imgAlt: 'Mão sứ trên sườn kim loại, cắt mở thấy sườn', multilayer: false,
    lead: 'Hợp kim nickel – chrome của Eisenbacher Dentalwaren ED (Đức) và Aalba Dent (Mỹ), làm sườn răng sứ kim loại và mão toàn kim loại.',
    about: `<p><strong>Ni-Cr</strong> (nickel – chrome) là hợp kim không quý, được dùng lâu đời làm <strong>sườn răng sứ kim loại</strong> và <strong>mão toàn kim loại</strong> nhờ cứng, bền và chi phí hợp lý. KTV Dental Lab dùng hợp kim của Eisenbacher Dentalwaren ED (Đức) và Aalba Dent (Mỹ).</p>
<h3>Lưu ý dị ứng nickel</h3>
<p>Dị ứng nickel khá phổ biến — các khảo sát thử áp da ghi nhận khoảng 10 – 30% ở nữ và 1 – 3% ở nam. Với bệnh nhân có tiền sử dị ứng nickel (dị ứng khuyên tai, khoá thắt lưng, dây đồng hồ…), nên chọn <a href="/vat-lieu/co-cr/">Co-Cr</a> — mẫu hợp kim Co-Cr của labo có kết quả kiểm nghiệm Ni 0,00% — hoặc <a href="/phuc-hinh/mao-full-zirconia/">zirconia</a>.</p>`,
    specs: [['Loại', 'Hợp kim không quý nickel – chrome'], ['Hãng', 'Eisenbacher Dentalwaren ED (Đức), Aalba Dent (Mỹ)'], ['Dùng cho', 'Sườn mão sứ đắp sứ, mão toàn kim loại, inlay/onlay, cùi giả kim loại'], ['Bảo hành tại KTV', '<strong>Theo thỏa thuận</strong> với phòng khám']],
    specsNote: '',
    more: `<h2>Ưu điểm và hạn chế</h2>
${table(['Ưu điểm', 'Hạn chế'], [
  ['Cứng, chịu lực tốt; sườn và mão có thể làm mỏng', 'Màu kim loại: cần lớp sứ che (opaque); có thể lộ viền xám ở cổ răng khi nướu co'],
  ['Chi phí hợp lý', 'Không dùng cho bệnh nhân dị ứng nickel'],
  ['Kỹ thuật đúc và đắp sứ quen thuộc, ổn định', 'Thẩm mỹ vùng răng trước kém hơn zirconia'],
])}`,
    choose: 'Răng sau cần độ bền và chi phí hợp lý; mão toàn kim loại khi khoảng phục hình hạn chế. Không dùng cho bệnh nhân dị ứng nickel.',
    faq: [['Răng sứ Ni-Cr có gây đen viền nướu không?', 'Sườn kim loại có thể làm vùng cổ răng hơi tối hoặc lộ viền xám khi nướu co. Khi thẩm mỹ là ưu tiên, nên chọn sườn hoặc mão zirconia.'],
      ['Bệnh nhân dị ứng nickel nên dùng gì?', 'Co-Cr (mẫu hợp kim Co-Cr của labo có kết quả kiểm nghiệm Ni 0,00%) hoặc zirconia.'],
      ['Răng sứ kim loại bảo hành bao lâu?', 'Răng sứ kim loại (Ni-Cr, Co-Cr) tại KTV Dental Lab được bảo hành theo thỏa thuận với phòng khám.']],
    sources: ['nickel'] },

  { slug: 'co-cr', name: 'Co-Cr', kind: 'metal', country: 'Đức', maker: 'Eisenbacher Dentalwaren ED', years: null,
    img: '/assets/img/products/metal-lg.webp', imgAlt: 'Mão răng toàn kim loại', multilayer: false,
    lead: 'Hợp kim cobalt – chrome của Eisenbacher Dentalwaren ED (Đức), làm sườn răng sứ kim loại và mão toàn kim loại. Kết quả kiểm nghiệm thành phần tại Viện Vật liệu xây dựng: Ni 0,00%.',
    about: `<p><strong>Co-Cr</strong> (cobalt – chrome) là hợp kim không quý có thành phần chính là cobalt và chrome, dùng làm <strong>sườn răng sứ kim loại</strong> và <strong>mão toàn kim loại</strong>. KTV Dental Lab dùng hợp kim Co-Cr của Eisenbacher Dentalwaren ED (Đức).</p>
<p>Co-Cr dùng cho cùng các loại phục hình như Ni-Cr và là lựa chọn thay thế ở bệnh nhân dị ứng nickel.</p>
<h2>Kết quả kiểm nghiệm thành phần</h2>
<p>Mẫu phần kim loại của răng sứ Co-Cr do labo sản xuất được <strong>Trung tâm Phân tích, Kiểm định vật liệu xây dựng — Viện Vật liệu xây dựng (VIBM, Bộ Xây dựng)</strong> phân tích theo phương pháp tham chiếu ISO 22674:2022 (phiếu kết quả số 1958/VLXD-TTKĐ, ngày 26/05/2026).</p>
${table(['Nguyên tố', 'Kết quả (%)'], [
  ['Cobalt (Co)', '46,70'],
  ['Chrome (Cr)', '38,40'],
  ['Tungsten (W)', '4,54'],
  ['<strong>Nickel (Ni)</strong>', '<strong>0,00</strong>'],
  ['Titan (Ti), Molypden (Mo), Kẽm (Zn)', '0,00'],
])}
<p class="note">Kết quả có giá trị với mẫu thử nghiệm. <a href="/assets/img/docs/co-cr-thanh-phan-vibm.webp" target="_blank" rel="noopener">Xem toàn văn phiếu kết quả thử nghiệm</a>.</p>`,
    specs: [['Loại', 'Hợp kim không quý cobalt – chrome'], ['Hãng', 'Eisenbacher Dentalwaren ED (Đức)'], ['Dùng cho', 'Sườn mão sứ đắp sứ, mão toàn kim loại, inlay/onlay, cùi giả kim loại'], ['Bảo hành tại KTV', '<strong>Theo thỏa thuận</strong> với phòng khám']],
    specsNote: '',
    choose: 'Răng sứ kim loại cho bệnh nhân cần tránh nickel (mẫu Co-Cr của labo có kết quả Ni 0,00%), hoặc khi bác sĩ ưu tiên hợp kim cobalt – chrome.',
    faq: [['Co-Cr khác Ni-Cr thế nào?', 'Ni-Cr có thành phần chính là nickel và chrome; Co-Cr có thành phần chính là cobalt và chrome. Co-Cr là lựa chọn cho bệnh nhân dị ứng nickel.'],
      ['Răng sứ Co-Cr của KTV Dental Lab có chứa nickel không?', 'Mẫu phần kim loại răng sứ Co-Cr của labo được Viện Vật liệu xây dựng (VIBM) phân tích, kết quả Ni 0,00% (phiếu số 1958/VLXD-TTKĐ, 26/05/2026); thành phần chính là cobalt 46,70%, chrome 38,40%, tungsten 4,54%.'],
      ['Răng sứ Co-Cr bảo hành bao lâu?', 'Răng sứ kim loại tại KTV Dental Lab được bảo hành theo thỏa thuận với phòng khám.']],
    sources: ['nickel'] },
];

const zr = MATERIALS.filter((m) => m.kind === 'zirconia');
const ml = MATERIALS.filter((m) => m.multilayer);
const bySlug = (s) => MATERIALS.find((m) => m.slug === s);
const link = (m) => `<a href="/vat-lieu/${m.slug}/">${m.name}</a>`;
const list = (arr) => arr.map(link).join(', ');

/* ---------- Phục hình ---------- */
export const PRODUCTS = [
  { slug: 'mao-su-dap-su', name: 'Mão sứ đắp sứ', short: 'Sườn Ni-Cr, Co-Cr hoặc zirconia',
    img: '/assets/img/products/pfm-lg.webp', thumb: '/assets/img/products/pfm.webp', imgAlt: 'Mão sứ đắp sứ trên sườn kim loại, cắt mở thấy sườn',
    title: 'Mão sứ đắp sứ trên sườn kim loại & Zirconia',
    lead: 'Sườn chịu lực bên trong, sứ đắp nhiều lớp bên ngoài. KTV Dental Lab làm mão sứ đắp sứ trên sườn Ni-Cr, Co-Cr và Zirconia.',
    body: `
<h2>Mão sứ đắp sứ là gì?</h2>
<p>Mão sứ đắp sứ gồm hai phần: <strong>sườn</strong> chịu lực ôm sát cùi răng, và <strong>lớp sứ</strong> được kỹ thuật viên đắp thủ công từng lớp lên sườn rồi nung. Nhờ đắp nhiều lớp, màu và độ trong của mão được điều chỉnh theo từng vùng — cổ răng, thân răng, rìa cắn.</p>
<h2>Cấu tạo các lớp sứ</h2>
<ul>
<li><strong>Lớp opaque</strong> — phủ trực tiếp lên sườn kim loại, che màu xám và tạo liên kết giữa kim loại và sứ.</li>
<li><strong>Lớp ngà (dentin)</strong> — tạo màu nền chính của răng.</li>
<li><strong>Lớp men (enamel) và lớp trong (translucent)</strong> — tạo độ trong ở rìa cắn và bề mặt.</li>
<li><strong>Glaze</strong> — lớp nung bóng cuối cùng.</li>
</ul>
<h2>Sườn kim loại hay sườn zirconia?</h2>
${table(['', 'Sườn kim loại (Ni-Cr, Co-Cr)', 'Sườn zirconia'], [
  ['Màu sườn', 'Xám kim loại — cần lớp sứ che (opaque)', 'Trắng — không lộ ánh xám ở cổ răng'],
  ['Thẩm mỹ', 'Tốt; có thể lộ viền tối khi nướu co', 'Tốt hơn ở vùng răng trước'],
  ['Kim loại trong miệng', 'Có (Ni-Cr không dùng cho bệnh nhân dị ứng nickel)', 'Không'],
  ['Nguy cơ mẻ sứ đắp', 'Thấp', 'Cao hơn (xem số liệu bên dưới)'],
  ['Chi phí', 'Hợp lý', 'Cao hơn'],
])}
<h2>Độ bền lâu dài: số liệu nghiên cứu</h2>
<p>Tổng quan hệ thống của Sailer và cộng sự (2015, <em>Dental Materials</em>) ước tính tỉ lệ tồn tại sau 5 năm của mão sứ – kim loại khoảng <strong>95%</strong>. Mão sứ đắp trên sườn zirconia bị mất do <strong>vỡ lớp sứ đắp</strong> thường hơn mão sứ – kim loại: khoảng <strong>3,2% so với 0,3%</strong> sau 5 năm. Với răng hàm chịu lực lớn, <a href="/phuc-hinh/mao-full-zirconia/">mão zirconia nguyên khối</a> — không có lớp sứ đắp — tránh được biến chứng này.</p>
<h2>Hướng dẫn mài cùi</h2>
${PREP_TABLE}
${PREP_NOTE}
${PREP_RULES}
<h2>Gắn mão sứ – kim loại</h2>
<p>Mão sứ – kim loại gắn được bằng các loại xi măng thông thường như glass ionomer hoặc glass ionomer biến tính nhựa khi cùi đủ chiều cao và độ thuôn hợp lý. Mão trên sườn zirconia gắn theo hướng dẫn cho zirconia — xem <a href="/phuc-hinh/mao-full-zirconia/">mão zirconia nguyên khối</a>.</p>
<h2>Gửi ca cho labo</h2>
${SEND_CASE}
<h2>Bảo hành</h2>
<p>Sườn zirconia bảo hành theo dòng phôi sử dụng; răng sứ kim loại (Ni-Cr, Co-Cr) bảo hành theo thỏa thuận với phòng khám. Xem <a href="/bao-hanh/">bảng bảo hành</a>.</p>`,
    faq: [['Khi nào nên chọn mão sứ đắp sứ thay vì zirconia nguyên khối?', 'Khi cần thẩm mỹ theo từng lớp màu (đặc biệt răng trước), hoặc khi dùng sườn kim loại với chi phí hợp lý. Với răng hàm chịu lực lớn, zirconia nguyên khối tránh được nguy cơ mẻ lớp sứ đắp.'],
      ['Mão sứ kim loại có bị đen viền nướu không?', 'Sườn kim loại có thể làm vùng cổ răng hơi tối hoặc lộ viền xám khi nướu co. Sườn zirconia khắc phục được nhược điểm này.'],
      ['Mão sứ đắp trên sườn zirconia có dễ mẻ không?', 'Theo tổng quan của Sailer và cộng sự (2015), tỉ lệ mất mão do vỡ sứ đắp sau 5 năm khoảng 3,2% với sườn zirconia và 0,3% với sườn kim loại.']],
    sources: ['sailer', 'iowa'] },

  { slug: 'mao-full-zirconia', name: 'Mão Full màu', short: zr.map((m) => m.name).join(', '),
    img: '/assets/img/products/zirconia-lg.webp', thumb: '/assets/img/products/zirconia.webp', imgAlt: 'Mão răng zirconia nguyên khối (full màu)',
    title: 'Mão zirconia nguyên khối (Full màu)',
    lead: `Phay nguyên khối từ phôi zirconia, nhuộm màu và nướng bóng — không có lớp sứ đắp. KTV Dental Lab làm mão full màu trên nhiều dòng phôi: ${zr.map((m) => m.name).join(', ')} và nhập dòng khác theo yêu cầu.`,
    body: `
<h2>Mão full màu là gì?</h2>
<p>Mão full màu (zirconia nguyên khối, <em>full-contour</em>) được phay trọn hình răng từ một phôi zirconia, sau đó thiêu kết, nhuộm màu và nướng bóng. Không có lớp sứ đắp bên ngoài nên không có nguy cơ <strong>mẻ lớp sứ đắp</strong> — biến chứng thường gặp của mão sứ đắp sứ.</p>
<h2>Ưu điểm</h2>
<ul>
<li><strong>Bền:</strong> nhiều dòng zirconia có độ bền uốn trên 1.000 MPa theo công bố của hãng.</li>
<li><strong>Mài ít hơn</strong> so với mão sứ – kim loại: mặt nhai 1,0 – 1,5 mm thay vì 1,5 – 2,0 mm.</li>
<li><strong>Không kim loại:</strong> không lộ viền xám ở cổ răng, không lo dị ứng kim loại.</li>
<li><strong>Phù hợp khoảng phục hình hẹp</strong> nhờ độ dày tối thiểu nhỏ.</li>
</ul>
<h2>Các thế hệ zirconia</h2>
<p>Hàm lượng yttria quyết định cân bằng giữa độ bền và độ trong của zirconia:</p>
${table(['Thế hệ', 'Yttria', 'Độ bền uốn', 'Độ trong', 'Chỉ định thường gặp'], [
  ['3Y', '3 mol%', 'Khoảng 900 – 1.200 MPa', 'Thấp nhất', 'Sườn đắp sứ; mão và cầu răng sau'],
  ['4Y', '4 mol%', 'Giữa 3Y và 5Y', 'Trung gian', 'Mão răng trước và răng sau, cầu ngắn'],
  ['5Y', '5 mol% (khoảng 50% pha cubic)', 'Khoảng 700 – 800 MPa', 'Cao hơn 3Y khoảng 20 – 25%', 'Mão răng trước, cầu ngắn'],
], 'wide')}
<p class="note">Theo tổng quan của Yousry và cộng sự (2024, <em>BMC Oral Health</em>) và Binici Aygün và cộng sự (2025, <em>J Funct Biomater</em>).</p>
<p>Phôi nhiều lớp thế hệ mới kết hợp các loại zirconia này trong cùng một phôi — xem <a href="/phuc-hinh/mao-zirconia-multilayer/">mão zirconia Multilayer</a>.</p>
<h2>Các dòng phôi zirconia tại KTV Dental Lab</h2>
${table(['Dòng', 'Xuất xứ', 'Nhà sản xuất', 'Bảo hành'], zr.map((m) => [link(m), m.country, m.maker, `${m.years} năm`]))}
<p>Độ bền, độ trong từng dòng: <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>.</p>
${MORE_BLANKS}
<h2>Hướng dẫn mài cùi</h2>
${PREP_TABLE}
${PREP_NOTE}
${PREP_RULES}
<h2>Chỉnh khớp và đánh bóng trong miệng</h2>
${ZR_ADJUST}
<p>Hỏi đáp chi tiết: <a href="/hoi-dap/khop-can-me-gay-zirconia/">mẻ, gãy, chỉnh khớp zirconia</a>, <a href="/hoi-dap/mai-cui-zirconia/">mài cùi cho zirconia</a>.</p>
<h2>Gắn mão zirconia</h2>
${ZR_CEMENT}
<h2>Gửi ca cho labo</h2>
${SEND_CASE}`,
    faq: [['Mão zirconia nguyên khối có bị mẻ không?', 'Không có lớp sứ đắp nên không có nguy cơ mẻ lớp sứ đắp như mão sứ đắp sứ. Zirconia vẫn cần đủ độ dày tối thiểu theo hướng dẫn của hãng (ví dụ Katana YML: 0,4 – 0,5 mm ở vùng thân).'],
      ['Có cần xoi mòn axit trước khi gắn mão zirconia?', 'Không. Zirconia không xoi mòn được bằng axit HF. Khi dùng xi măng nhựa, mặt trong mão được thổi cát Al₂O₃ 50 µm và dùng primer có chứa MDP.'],
      ['Zirconia càng trong thì càng yếu?', 'Nhìn chung là vậy: zirconia 5Y trong hơn 3Y khoảng 20 – 25% nhưng độ bền uốn thấp hơn (khoảng 700 – 800 MPa so với 900 – 1.200 MPa).'],
      ['Nên chọn dòng zirconia nào?', 'Tuỳ vị trí, số đơn vị, yêu cầu thẩm mỹ và thời hạn bảo hành mong muốn (3 – 15 năm). Xem <a href="/vat-lieu/so-sanh-zirconia/">bảng so sánh</a> hoặc nhắn Zalo để labo tư vấn.']],
    sources: ['iowa', 'spear', 'yousry', 'binici', 'katanaYML', 'katanaGuide'] },

  { slug: 'mao-zirconia-multilayer', name: 'Mão Full Multilayer', short: 'Zirconia nhiều lớp',
    img: '/assets/img/products/multilayer-lg.webp', thumb: '/assets/img/products/multilayer.webp', imgAlt: 'Mão zirconia Multilayer chuyển màu nhiều lớp',
    title: 'Mão zirconia Multilayer (nhiều lớp màu)',
    lead: `Phôi zirconia nhiều lớp, màu và độ trong chuyển dần từ cổ răng đến rìa cắn như răng thật. Dòng Multilayer tại KTV Dental Lab: ${ml.map((m) => m.name).join(', ')}.`,
    body: `
<h2>Zirconia Multilayer khác zirconia thường thế nào?</h2>
<p>Phôi zirconia một màu có cùng màu và độ trong từ trên xuống dưới. Phôi <strong>Multilayer</strong> được ép nhiều lớp: vùng cổ răng đậm màu hơn, càng lên rìa cắn càng sáng và trong hơn. Mão phay từ phôi này có chuyển màu tự nhiên ngay từ phôi, giảm phụ thuộc vào nhuộm màu bề mặt.</p>
<p>Ở một số dòng, các lớp còn khác nhau về <strong>độ bền</strong>: lớp ngà bền hơn, lớp men trong hơn.</p>
${table(['Phôi', 'Lớp men / rìa cắn', 'Lớp thân / ngà'], [
  ['<a href="/vat-lieu/katana/">Katana YML</a>', '750 MPa · độ trong 49%', '1.000 – 1.100 MPa · độ trong 45 – 47%'],
  ['<a href="/vat-lieu/cercon/">Cercon ht ML</a>', '750 MPa', '1.200 MPa (độ trong cả phôi 41 – 49%)'],
])}
<p class="note">Theo Kuraray Noritake Dental và Dentsply Sirona.</p>
<h2>Bố trí mão trong phôi</h2>
<p>Kỹ thuật viên chọn vị trí mão theo chiều cao phôi để điều chỉnh tỉ lệ màu giữa cổ và rìa cắn. Với cầu, vùng nối và vùng chịu lực được đặt ở lớp thân bền hơn. Ví dụ với Katana YML, cầu từ 4 đơn vị cần ít nhất 50% tiết diện vùng nối nằm ở nửa dưới phôi.</p>
<h2>Vùng nối của cầu Multilayer</h2>
${table(['Phôi', 'Hướng dẫn của hãng'], [
  ['Katana STML, UTML', 'Cầu 2 – 3 đơn vị: vùng nối tối thiểu 12 mm² (răng trước), 16 mm² (răng sau); không làm nhịp cầu đèo'],
  ['Katana YML', 'Tối đa 2 nhịp giữa 2 trụ; cầu từ 4 đơn vị đặt ≥ 50% tiết diện nối ở nửa dưới phôi'],
  ['Cercon ht ML', 'Mão, cầu nhiều đơn vị — răng trước và răng sau'],
], 'wide')}
<h2>Dòng phôi Multilayer tại KTV Dental Lab</h2>
<p>${list(ml)}.</p>
<h2>Khi nào chọn Multilayer?</h2>
<ul>
<li>Răng trước và các vùng thẩm mỹ, nơi màu sắc tự nhiên quan trọng.</li>
<li>Khi muốn ưu điểm của zirconia nguyên khối (không có lớp sứ đắp) nhưng thẩm mỹ cao hơn phôi một màu.</li>
<li>Cầu dài có chuyển màu: chọn dòng có lớp thân bền (Katana YML, Cercon ht ML).</li>
</ul>
<h2>So màu cho mão Multilayer</h2>
<p>Màu của mão Multilayer phụ thuộc nhiều vào màu được chọn. So màu ở đầu buổi hẹn, trước khi mài răng, dưới ánh sáng 5.500 K; gửi kèm ảnh răng kế bên với cây so màu. Hướng dẫn chi tiết: <a href="/gui-ca/#so-mau">so màu đúng cách</a>.</p>
<h2>Chỉnh khớp và gắn mão</h2>
${ZR_ADJUST}
${ZR_CEMENT}`,
    faq: [['Mão Multilayer có bền như zirconia thường không?', 'Tuỳ dòng phôi. Lớp men của phôi nhiều lớp thường trong hơn nhưng độ bền thấp hơn lớp ngà (ví dụ Katana YML: 750 MPa ở lớp men, 1.100 MPa ở lớp thân). Labo bố trí mão trong phôi sao cho vùng chịu lực nằm ở lớp bền.'],
      ['Răng trước nên dùng Multilayer không?', 'Multilayer phù hợp cho răng trước nhờ màu chuyển tự nhiên. Với yêu cầu độ trong cao hơn nữa, có thể chọn các dòng chuyên cho răng trước như Katana UTML.'],
      ['Cầu Multilayer làm được mấy đơn vị?', 'Tuỳ dòng phôi: Katana STML, UTML đến 3 đơn vị; Katana YML và Cercon ht ML dùng được cho cầu nhiều đơn vị theo chỉ định của hãng.']],
    sources: ['katana', 'katanaYML', 'katanaGuide', 'cerconML', 'shade'] },

  { slug: 'mao-full-kim-loai', name: 'Full kim loại', short: 'Ni-Cr, Co-Cr',
    img: '/assets/img/products/metal-lg.webp', thumb: '/assets/img/products/metal.webp', imgAlt: 'Mão răng toàn kim loại',
    title: 'Mão toàn kim loại Ni-Cr, Co-Cr',
    lead: 'Mão đúc hoàn toàn bằng hợp kim, không phủ sứ — mài ít, bền, chi phí hợp lý. KTV Dental Lab làm mão full kim loại bằng Ni-Cr và Co-Cr.',
    body: `
<h2>Mão toàn kim loại là gì?</h2>
<p>Mão toàn kim loại được làm hoàn toàn bằng hợp kim, không có lớp sứ phủ ngoài. Không cần chừa chỗ cho lớp sứ nên mão có thể làm mỏng, và cùi răng được mài ít hơn so với mão sứ – kim loại.</p>
<h2>Khi nào chọn?</h2>
<ul>
<li>Răng hàm ít yêu cầu thẩm mỹ, chịu lực nhai lớn.</li>
<li>Khoảng phục hình hạn chế: thân răng thấp, khoảng liên hàm hẹp.</li>
<li>Bệnh nhân nghiến răng, cần mão không có lớp sứ có thể mẻ.</li>
<li>Khi cần giải pháp bền với chi phí hợp lý.</li>
</ul>
<h2>Ưu điểm và hạn chế</h2>
${table(['Ưu điểm', 'Hạn chế'], [
  ['Mài ít mô răng nhất trong các loại mão toàn phần', 'Màu kim loại, không thẩm mỹ'],
  ['Không có lớp sứ nên không mẻ sứ', 'Ni-Cr không dùng cho bệnh nhân dị ứng nickel'],
  ['Bờ viền mỏng, khít sát', '—'],
])}
<h2>Vật liệu</h2>
${table(['Hợp kim', 'Hãng', 'Ghi chú'], [
  ['<a href="/vat-lieu/ni-cr/">Ni-Cr</a>', 'Eisenbacher Dentalwaren ED (Đức), Aalba Dent (Mỹ)', 'Không dùng cho bệnh nhân dị ứng nickel'],
  ['<a href="/vat-lieu/co-cr/">Co-Cr</a>', 'Eisenbacher Dentalwaren ED (Đức)', 'Kết quả kiểm nghiệm mẫu: Ni 0,00% — <a href="/vat-lieu/co-cr/">xem chi tiết</a>'],
])}
<h2>Hướng dẫn mài cùi</h2>
<p>Mão toàn kim loại cần mài mặt nhai khoảng <strong>1,5 mm</strong> ở múi chức năng và <strong>1,0 mm</strong> ở múi không chức năng; thành trục <strong>0,5 – 1,0 mm</strong> — ít hơn mão sứ – kim loại (mặt nhai 1,5 – 2,0 mm).</p>
${PREP_RULES}
${PREP_NOTE}
<h2>Gắn mão</h2>
<p>Mão toàn kim loại gắn bằng các loại xi măng thông thường như glass ionomer hoặc glass ionomer biến tính nhựa khi cùi đủ chiều cao và độ thuôn hợp lý.</p>
<h2>Gửi ca cho labo</h2>
${SEND_CASE}
<h2>Bảo hành</h2>
<p>Mão toàn kim loại bảo hành theo thỏa thuận với phòng khám.</p>`,
    faq: [['Mão toàn kim loại có ưu điểm gì so với mão sứ?', 'Mài ít mô răng hơn, không có lớp sứ nên không mẻ sứ, phù hợp khi khoảng phục hình hẹp. Nhược điểm là màu kim loại, không thẩm mỹ.'],
      ['Nên chọn Ni-Cr hay Co-Cr cho mão toàn kim loại?', 'Cả hai đều là hợp kim không quý, cứng và bền. Với bệnh nhân dị ứng nickel, chọn Co-Cr — mẫu Co-Cr của labo có kết quả kiểm nghiệm Ni 0,00%.']],
    sources: ['iowa', 'nickel'] },

  { slug: 'inlay-onlay', name: 'Inlay, Onlay', short: 'Kim loại hoặc zirconia',
    img: null, thumb: null, imgAlt: '',
    title: 'Inlay, onlay kim loại và zirconia',
    lead: 'Phục hình từng phần, giữ lại tối đa mô răng thật. KTV Dental Lab làm inlay, onlay bằng kim loại và Zirconia.',
    body: `
<h2>Inlay và onlay là gì?</h2>
${table(['', 'Inlay', 'Onlay'], [
  ['Vị trí', 'Nằm gọn trong lòng răng, giữa các múi', 'Phủ lên một hoặc nhiều múi răng'],
  ['Khi nào dùng', 'Lỗ sâu / miếng trám cũ lớn nhưng các múi còn chắc', 'Múi răng yếu hoặc mất một phần, cần được bảo vệ'],
  ['Mô răng phải mài', 'Ít', 'Nhiều hơn inlay, ít hơn mão toàn phần'],
])}
<p>Cả hai được labo chế tác ngoài miệng theo dấu hoặc file scan, sau đó bác sĩ gắn vào răng. Khi cần phủ toàn bộ mặt nhai: <a href="/phuc-hinh/overlay/">overlay</a>; khi răng mất quá nhiều mô: <a href="/phuc-hinh/mao-full-zirconia/">mão toàn phần</a>.</p>
<h2>Ưu điểm so với trám trực tiếp và mão</h2>
<ul>
<li>Bảo tồn mô răng hơn so với mài làm mão toàn phần.</li>
<li>Hình thể, điểm tiếp xúc và khớp cắn được hoàn thiện ngoài miệng — phù hợp lỗ hổng lớn hơn khả năng của miếng trám trực tiếp.</li>
<li>Vật liệu chế tác sẵn, không co khi trùng hợp như composite trám trực tiếp.</li>
</ul>
<h2>Thiết kế lỗ hàn</h2>
<ul>
<li>Thành lỗ hàn hơi loe ra phía mặt nhai, không có vùng lẹm, để phục hình vào được theo một hướng.</li>
<li>Góc trong bo tròn; đường hoàn tất rõ, liên tục.</li>
<li>Đủ độ dày vật liệu theo hướng dẫn của dòng phôi zirconia hoặc hợp kim được chọn.</li>
</ul>
<h2>Vật liệu</h2>
<ul>
<li><strong>Zirconia</strong> — màu răng, bền. Nhiều dòng zirconia có chỉ định inlay/onlay theo hãng (ví dụ <a href="/vat-lieu/katana/">Katana HT</a>, <a href="/vat-lieu/lava/">Lava Plus</a> cho cầu inlay/onlay).</li>
<li><strong>Kim loại</strong> (<a href="/vat-lieu/ni-cr/">Ni-Cr</a>, <a href="/vat-lieu/co-cr/">Co-Cr</a>) — vùng răng sau không cần thẩm mỹ.</li>
</ul>
<h2>Xử lý mặt dán inlay, onlay zirconia</h2>
<p>Inlay, onlay ít lưu giữ cơ học nên phụ thuộc nhiều vào lớp dán. Labo <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn mặt dán bằng Zircos-E</a> trước khi giao — hiện miễn phí, không làm ca chậm hơn. Phòng khám gắn theo quy trình thông thường.</p>
<h2>Gửi ca cho labo</h2>
${SEND_CASE}`,
    faq: [['Inlay khác miếng trám thường thế nào?', 'Miếng trám thường được đắp trực tiếp trong miệng; inlay được labo chế tác ngoài miệng theo dấu hoặc file scan rồi gắn vào, nên kiểm soát hình thể và điểm tiếp xúc tốt hơn với lỗ hổng lớn.'],
      ['Khi nào nên làm onlay thay vì mão?', 'Khi múi răng yếu cần được bảo vệ nhưng phần thành răng còn tốt — onlay giữ lại nhiều mô răng hơn mão toàn phần.'],
      ['Inlay, onlay zirconia có được xử lý bề mặt dán không?', 'Có. Labo xoi mòn mặt dán bằng Zircos-E theo yêu cầu, hiện miễn phí và không làm ca chậm hơn.']],
    sources: ['katana', 'lavaBro', 'sokolowski'] },

  { slug: 'overlay', name: 'Overlay', short: 'Zirconia',
    img: '/assets/img/products/overlay-lg.webp', thumb: '/assets/img/products/overlay.webp', imgAlt: 'Overlay zirconia phủ mặt nhai',
    title: 'Overlay Zirconia phủ mặt nhai',
    lead: 'Phục hình phủ toàn bộ mặt nhai, giữ lại thành răng thật. KTV Dental Lab làm overlay bằng Zirconia.',
    body: `
<h2>Overlay là gì?</h2>
<p>Overlay (còn gọi là <em>table-top</em> hay occlusal veneer) là phục hình phủ <strong>toàn bộ mặt nhai</strong> của răng hàm, trong khi thành răng bên ngoài vẫn được giữ lại. So với mão toàn phần, overlay mài ít mô răng hơn và đường hoàn tất thường nằm trên nướu — dễ kiểm soát khi gắn và vệ sinh.</p>
<h2>Khi nào dùng overlay?</h2>
<ul>
<li>Mặt nhai bị mòn hoặc mất chất nhiều nhưng thành răng còn tốt.</li>
<li>Phục hồi hình thể mặt nhai, tái lập khớp cắn mà không mài răng làm mão.</li>
<li>Răng có nhiều miếng trám cũ ở mặt nhai cần thay.</li>
<li>Nâng khớp cắn ở bệnh nhân mòn răng nhiều răng, theo kế hoạch điều trị của bác sĩ.</li>
</ul>
<h2>Overlay, onlay hay mão?</h2>
${table(['', 'Onlay', 'Overlay', 'Mão toàn phần'], [
  ['Phủ', 'Một hoặc vài múi', 'Toàn bộ mặt nhai', 'Toàn bộ thân răng'],
  ['Mài mô răng', 'Ít', 'Ít – trung bình', 'Nhiều nhất'],
  ['Đường hoàn tất', 'Trên nướu', 'Thường trên nướu', 'Ngang hoặc dưới nướu'],
  ['Lưu giữ', 'Chủ yếu nhờ dán', 'Chủ yếu nhờ dán', 'Cơ học + xi măng'],
], 'wide')}
<h2>Thiết kế và vật liệu</h2>
<p>Overlay mỏng nên cần đủ độ dày tối thiểu theo hướng dẫn của từng dòng phôi — ví dụ Katana YML: tối thiểu 0,5 mm vùng răng sau khi phục hình nằm ở nửa dưới phôi. Mài mặt nhai theo hình thể giải phẫu để độ dày phục hình đều. Các dòng phôi labo đang dùng: <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>.</p>
<h2>Gắn overlay zirconia</h2>
${ZR_CEMENT}
<h2>Gửi ca cho labo</h2>
${SEND_CASE}`,
    faq: [['Overlay khác onlay thế nào?', 'Onlay phủ một hoặc vài múi răng; overlay phủ toàn bộ mặt nhai.'],
      ['Overlay có cần mài nhiều không?', 'Ít hơn mão toàn phần vì giữ lại thành răng; mức mài mặt nhai phụ thuộc độ dày tối thiểu của vật liệu theo hướng dẫn của hãng.'],
      ['Overlay zirconia có được xử lý bề mặt dán không?', 'Có. Labo xoi mòn mặt dán bằng Zircos-E theo yêu cầu, hiện miễn phí.']],
    sources: ['spear', 'katanaYML'] },

  { slug: 'cui-gia', name: 'Cùi giả', short: 'Kim loại, chốt gài, zirconia',
    img: '/assets/img/products/core-lg.webp', thumb: '/assets/img/products/core.webp', imgAlt: 'Cùi giả đúc kèm chốt (hình minh hoạ)',
    title: 'Cùi giả kim loại, chốt gài và Zirconia',
    lead: 'Tái tạo phần thân răng đã mất để làm nền giữ mão. KTV Dental Lab làm cùi giả kim loại, chốt gài và Zirconia.',
    body: `
<h2>Cùi giả là gì?</h2>
<p>Khi răng — thường là răng đã điều trị tuỷ — mất nhiều mô, không đủ chỗ bám cho mão, cần <strong>cùi giả</strong>: một khối tái tạo phần thân răng, có chốt cắm vào ống tuỷ. Mão được làm trên cùi giả này.</p>
<h2>Vai trò của vùng đai (ferrule)</h2>
<p>Theo tổng quan của Mamoun (2017, <em>J Adv Prosthodont</em>), yếu tố quyết định răng có bị gãy hay không là <strong>lượng mô răng thật còn lại</strong> phía trên đường hoàn tất — vùng đai cao khoảng <strong>1,5 – 2,0 mm</strong>, ôm trọn 360° quanh răng. Chốt chủ yếu giúp giữ cùi khi mô răng vùng đai còn ít. Khi mài, cần giữ lại tối đa mô răng ở vùng đai.</p>
<h2>Các loại cùi giả tại KTV Dental Lab</h2>
${table(['Loại', 'Đặc điểm', 'Phù hợp'], [
  ['Cùi giả kim loại', 'Chốt và cùi đúc liền một khối theo hình ống tuỷ', 'Răng mất nhiều mô, làm mão sứ – kim loại'],
  ['Chốt gài (chốt rời)', 'Cùi đúc kèm một chân chốt rời, xuyên qua cùi chính vào ống tuỷ thứ hai', 'Răng sau có từ 2 ống tuỷ trở lên, các ống tuỷ chếch nhau'],
  ['Cùi giả Zirconia', 'Màu trắng, không kim loại', 'Mão toàn sứ ở vùng thẩm mỹ'],
])}
<h2>Chốt gài — cùi giả cho răng nhiều ống tuỷ</h2>
<p>Răng sau thường có từ 2 ống tuỷ trở lên, và các ống tuỷ thường chếch nhau. Một cùi giả đúc liền với hai chốt chếch nhau sẽ không lắp vào được, vì không có chung một hướng vào. <strong>Chốt gài</strong> giải quyết bằng cách tách làm hai phần:</p>
<ul>
<li><strong>Cùi chính</strong> đúc liền với chốt cắm vào ống tuỷ thứ nhất, có sẵn một lỗ xuyên qua thân cùi theo hướng của ống tuỷ thứ hai.</li>
<li><strong>Chân chốt rời</strong> được cắm qua lỗ này vào ống tuỷ thứ hai sau khi cùi chính đã vào vị trí, khoá cùi giả vào chân răng.</li>
</ul>
<p>Nhờ vậy cùi giả dùng được cả hai ống tuỷ theo đúng hướng tự nhiên của chúng, không phải mài rộng ống tuỷ để tạo một hướng vào chung.</p>
<h2>Cùi giả đúc khác cùi đắp trực tiếp thế nào?</h2>
<p>Cùi giả đúc được labo chế tác theo dấu ống tuỷ, chốt và cùi liền một khối, khít với hình dạng ống tuỷ. Cùi đắp trực tiếp (chốt làm sẵn kết hợp vật liệu tái tạo cùi) được bác sĩ thực hiện ngay trên ghế. Cùi đúc phù hợp khi ống tuỷ loe rộng hoặc thân răng mất gần hết.</p>
<h2>Gửi ca cho labo</h2>
<ul>
<li>Dấu ống tuỷ rõ toàn bộ chiều dài chốt, không bọt, cùng vùng cùi, hàm đối diện và khớp cắn. Với chốt gài, lấy dấu đủ các ống tuỷ sẽ đặt chốt.</li>
<li>Loại cùi mong muốn và loại mão sẽ làm trên cùi.</li>
</ul>
<p>Chi tiết: <a href="/gui-ca/">cách gửi ca</a>.</p>`,
    faq: [['Khi nào cần cùi giả?', 'Khi răng đã điều trị tuỷ mất nhiều mô, phần thân răng còn lại không đủ giữ mão. Quyết định dựa trên lượng mô răng thật còn lại, đặc biệt vùng đai 1,5 – 2,0 mm phía trên đường hoàn tất.'],
      ['Cùi giả zirconia khác cùi giả kim loại thế nào?', 'Cùi zirconia màu trắng, không kim loại, phù hợp làm nền cho mão toàn sứ ở vùng thẩm mỹ; cùi kim loại đúc liền chốt, thường dùng với mão sứ – kim loại.'],
      ['Chốt gài là gì?', 'Chốt gài (chốt rời) là cùi giả đúc gồm cùi chính có chốt vào một ống tuỷ và một chân chốt rời xuyên qua cùi chính vào ống tuỷ thứ hai. Dùng cho răng sau có từ 2 ống tuỷ trở lên, các ống tuỷ chếch nhau nên không lắp được cùi đúc liền một khối.'],
      ['Vì sao vùng đai (ferrule) quan trọng?', 'Mô răng thật ôm 360° phía trên đường hoàn tất giúp răng chống gãy; theo Mamoun (2017), vùng này nên cao khoảng 1,5 – 2,0 mm.']],
    sources: ['mamoun'] },

  { slug: 'phuc-hinh-tren-implant', name: 'Phục hình trên Implant', short: 'Sứ kim loại và sứ không kim loại, theo chỉ định riêng',
    img: '/assets/img/products/implant-lg.webp', thumb: '/assets/img/products/implant.webp', imgAlt: 'Mão sứ trên trụ implant (hình minh hoạ)',
    title: 'Phục hình răng sứ trên Implant',
    lead: 'Mão sứ kim loại và sứ không kim loại trên implant, theo chỉ định riêng từng ca. Bảo hành như phục hình trên răng thật cùng dòng vật liệu.',
    body: `
<h2>Phục hình trên implant tại KTV Dental Lab</h2>
<p>KTV Dental Lab làm mão sứ – kim loại và mão sứ không kim loại (zirconia) trên implant, theo chỉ định riêng của bác sĩ cho từng ca.</p>
<h2>Sứ – kim loại hay zirconia trên implant?</h2>
<p>Theo tổng quan hệ thống của Pjetursson và cộng sự (2018, <em>Clinical Oral Implants Research</em>), tỉ lệ tồn tại sau 5 năm của mão đơn lẻ trên implant là <strong>98,3%</strong> với sứ – kim loại và <strong>97,6%</strong> với sứ trên sườn zirconia; tỉ lệ mẻ sứ đắp tương đương (2,9% và 2,8%). Mão zirconia ít vấn đề thẩm mỹ hơn, nhưng tỉ lệ gãy vật liệu cao hơn (2,1% so với 0,2%). Các tác giả kết luận zirconia là lựa chọn hợp lý thay cho sứ – kim loại trên implant.</p>
<h2>Bắt vít hay gắn xi măng?</h2>
${table(['', 'Bắt vít (screw-retained)', 'Gắn xi măng (cement-retained)'], [
  ['Tháo ra khi cần', 'Dễ — thuận lợi khi vệ sinh, sửa chữa', 'Khó hơn'],
  ['Xi măng thừa', 'Không có', 'Khó lấy hết, liên quan viêm niêm mạc và viêm quanh implant'],
  ['Mặt nhai', 'Có lỗ vít; kênh vít nghiêng cho phép dời lỗ vít 0 – 25°', 'Nguyên vẹn, dễ kiểm soát khớp cắn'],
  ['Khoảng liên hàm', 'Dùng được khi khoảng hẹp (tối thiểu 4 mm)', '—'],
  ['Phù hợp', 'Cầu dài, cầu đèo, vùng thẩm mỹ, phục hình tạm, khi cần tháo lắp', 'Phục hình ngắn, đường hoàn tất ngang hoặc trên niêm mạc'],
], 'wide')}
<p class="note">Theo Nobel Biocare: bắt vít được khuyến nghị khi có thể.</p>
<h2>Các loại abutment thường gặp</h2>
${table(['Loại', 'Đặc điểm'], [
  ['Abutment làm sẵn (stock)', 'Hình dạng chuẩn của hãng implant; phù hợp khi vị trí và trục implant thuận lợi'],
  ['Abutment cá nhân hoá', 'Thiết kế theo từng ca: đường viền, chiều cao, góc nghiêng theo mô mềm và trục răng'],
  ['Ti-base + zirconia', 'Phần zirconia dán trên nền titan; dùng cho abutment lai hoặc mão bắt vít trực tiếp'],
])}
<h2>Thông tin cần gửi kèm ca</h2>
<ul>
<li>Hệ implant, đường kính và kiểu kết nối.</li>
<li>Loại abutment và kiểu lưu giữ mão (bắt vít hoặc gắn xi măng).</li>
<li>Dấu hoặc file scan có scanbody / transfer, hàm đối diện, khớp cắn.</li>
<li>Vật liệu và màu răng mong muốn.</li>
</ul>
<p>Chi tiết: <a href="/gui-ca/">cách gửi ca</a>.</p>
<h2>Bảo hành</h2>
<p>Phục hình trên implant được bảo hành như phục hình trên răng thật cùng dòng vật liệu — xem <a href="/bao-hanh/">bảng bảo hành</a>.</p>`,
    faq: [['Mão trên implant nên làm sứ – kim loại hay zirconia?', 'Cả hai đều có tỉ lệ tồn tại 5 năm trên 97% theo tổng quan của Pjetursson và cộng sự (2018). Zirconia thẩm mỹ hơn, không có kim loại; sứ – kim loại có tỉ lệ gãy vật liệu thấp hơn.'],
      ['Khi nào nên làm mão bắt vít?', 'Theo Nobel Biocare, bắt vít được khuyến nghị khi có thể, đặc biệt khi khoảng liên hàm hẹp (tối thiểu 4 mm), cầu dài, cầu đèo, vùng thẩm mỹ, phục hình tạm hoặc khi cần tháo lắp.'],
      ['Phục hình trên implant bảo hành thế nào?', 'Được bảo hành như phục hình trên răng thật cùng dòng vật liệu.']],
    sources: ['pjet', 'nobel'] },
];

/* ---------- Trang vật liệu: phần thân ---------- */
export function materialBody(m) {
  const war = m.years ? `<strong>${m.years} năm</strong>` : '<strong>theo thỏa thuận</strong> với phòng khám';
  const uses = m.kind === 'zirconia'
    ? `<ul>
<li><a href="/phuc-hinh/mao-full-zirconia/">Mão zirconia nguyên khối (full màu)</a></li>
${m.multilayer ? '<li><a href="/phuc-hinh/mao-zirconia-multilayer/">Mão zirconia Multilayer</a></li>\n' : ''}<li><a href="/phuc-hinh/mao-su-dap-su/">Sườn zirconia cho mão sứ đắp sứ</a></li>
<li><a href="/phuc-hinh/overlay/">Overlay</a>, <a href="/phuc-hinh/inlay-onlay/">inlay, onlay</a>, <a href="/phuc-hinh/cui-gia/">cùi giả</a> zirconia và <a href="/phuc-hinh/phuc-hinh-tren-implant/">phục hình trên implant</a> theo chỉ định</li>
</ul>`
    : `<ul>
<li><a href="/phuc-hinh/mao-su-dap-su/">Sườn cho mão sứ đắp sứ (răng sứ kim loại)</a></li>
<li><a href="/phuc-hinh/mao-full-kim-loai/">Mão toàn kim loại</a></li>
<li><a href="/phuc-hinh/inlay-onlay/">Inlay, onlay</a> và <a href="/phuc-hinh/cui-gia/">cùi giả</a> kim loại</li>
</ul>`;
  const specs = m.specsTable || (m.specs ? table(['Thông số', 'Giá trị'], m.specs) + (m.specsNote ? `<p class="note">${m.specsNote}</p>` : '') : '');
  return `
<h2>${m.name} là gì?</h2>
${m.about}
<h2>Thông số ${m.kind === 'zirconia' ? 'kỹ thuật' : 'và ứng dụng'}</h2>
${specs}
${m.indications ? `<h2>Chỉ định theo hãng</h2>\n<ul>${m.indications.map((x) => `<li>${x}</li>`).join('')}</ul>` : ''}
${m.more || ''}
<h2>Khi nào chọn ${m.name}?</h2>
<p>${m.choose}</p>
<h2>Dùng cho phục hình nào tại KTV Dental Lab?</h2>
${uses}
${m.kind === 'zirconia' ? `<h2>Gắn và chỉnh khớp</h2>\n<p>Mão ${m.name} gắn bằng xi măng thông thường khi cùi đủ lưu giữ, hoặc xi măng nhựa kèm thổi cát mặt trong và primer chứa MDP khi cùi ngắn. Sau khi chỉnh khớp trong miệng, đánh bóng lại vùng đã mài bằng bộ đánh bóng zirconia. Chi tiết: <a href="/phuc-hinh/mao-full-zirconia/">mão zirconia nguyên khối</a>.</p>` : ''}
<h2>Bảo hành</h2>
<p>Phục hình ${m.name} tại KTV Dental Lab được bảo hành ${war}. Phục hình trên implant bảo hành như phục hình trên răng thật cùng dòng vật liệu. Xem <a href="/bao-hanh/">bảng bảo hành tất cả dòng vật liệu</a>.</p>
<h2>So sánh với các dòng khác</h2>
<p>${m.kind === 'zirconia' ? `Các dòng zirconia khác tại labo: ${list(zr.filter((x) => x.slug !== m.slug))}. Xem <a href="/vat-lieu/so-sanh-zirconia/">bảng so sánh các dòng zirconia</a>.` : `Hợp kim còn lại: ${list(MATERIALS.filter((x) => x.kind === 'metal' && x.slug !== m.slug))}. Răng sứ không kim loại: ${list(zr)}.`}</p>
${m.kind === 'zirconia' ? MORE_BLANKS : ''}`;
}

/* ---------- So sánh zirconia ---------- */
export function compareBody() {
  return `
<p>Các dòng phôi zirconia hiện có tại KTV Dental Lab, bảo hành từ 3 đến 15 năm. Độ bền uốn và độ trong ghi theo công bố của từng hãng.</p>
${MORE_BLANKS}
${table(['Dòng', 'Xuất xứ', 'Độ bền uốn', 'Độ trong', 'Nhiều lớp', 'Bảo hành'], [
  [link(bySlug('lava')), 'Mỹ', 'Lava Plus: 1.100 MPa', 'Độ trong cao', '—', '<strong>15 năm</strong>'],
  [link(bySlug('cercon')), 'Đức', 'ht: 1.200 · xt: 750 · ht ML: 1.200 → 750 MPa', 'ht: 41% · xt: 49% · ht ML: 41 – 49%', 'Có (ht ML)', '<strong>7 năm</strong>'],
  [link(bySlug('katana')), 'Nhật Bản', 'YML: 750 – 1.100 · HTML PLUS: 1.150 · STML: 748 · UTML: 557 MPa', 'YML: 45 – 49% · STML: 49% · UTML: 51%', 'Có', '<strong>5 năm</strong>'],
  [link(bySlug('ddbio')), 'Đức', 'DD Bio ZX²: 1.150 ± 150 MPa', 'Độ trong cao (3Y-TZP-LA)', '—', '<strong>5 năm</strong>'],
  [link(bySlug('unc')), 'Hàn Quốc', '—', '—', 'Có', '<strong>3 năm</strong>'],
  [link(bySlug('upcera')), 'Trung Quốc', '—', 'Độ trong cao (ST)', 'Có (ST, TT-One Multilayer)', '<strong>3 năm</strong>'],
], 'wide')}
<p class="note">Mỗi hãng đo theo phương pháp riêng; so sánh giữa các hãng mang tính tương đối.</p>
<h2>Độ bền và độ trong: hai mặt của một lựa chọn</h2>
<p>Zirconia càng nhiều yttria thì càng nhiều pha cubic, càng trong nhưng độ bền uốn càng giảm. Zirconia 5Y trong hơn 3Y khoảng 20 – 25%, nhưng độ bền uốn chỉ khoảng 700 – 800 MPa so với 900 – 1.200 MPa của 3Y. Số liệu của hãng cho thấy cùng xu hướng: Katana UTML trong nhất (51%) với 557 MPa, còn HTML PLUS (45%) đạt 1.150 MPa.</p>
${table(['Thế hệ', 'Độ bền uốn', 'Độ trong', 'Chỉ định thường gặp'], [
  ['3Y', 'Khoảng 900 – 1.200 MPa', 'Thấp nhất', 'Sườn đắp sứ; mão và cầu răng sau'],
  ['4Y', 'Giữa 3Y và 5Y', 'Trung gian', 'Mão răng trước và răng sau, cầu ngắn'],
  ['5Y', 'Khoảng 700 – 800 MPa', 'Cao nhất', 'Mão răng trước, cầu ngắn'],
], 'wide')}
<p class="note">Theo Yousry và cộng sự (2024) và Binici Aygün và cộng sự (2025).</p>
<p>Phôi nhiều lớp giải quyết mâu thuẫn này bằng cách đặt lớp trong ở rìa cắn và lớp bền ở vùng ngà — xem <a href="/phuc-hinh/mao-zirconia-multilayer/">mão zirconia Multilayer</a>.</p>
<h2>Chọn dòng zirconia theo ca</h2>
${table(['Nhu cầu', 'Dòng phù hợp'], [
  ['Răng trước, cần độ trong cao', 'Katana UTML / STML, Cercon xt, phôi Multilayer'],
  ['Răng hàm chịu lực, mão đơn lẻ', 'Cercon ht, DDBio, Lava, Katana HTML PLUS / YML'],
  ['Cầu dài nhiều đơn vị', 'Katana YML / HTML PLUS, Cercon ht, DDBio (đến 14 đơn vị), Lava'],
  ['Thẩm mỹ chuyển màu tự nhiên, nguyên khối', 'Multilayer: Katana YML, Cercon ht ML, UNC, Upcera'],
  ['Bảo hành dài', 'Lava (15 năm), Cercon (7 năm)'],
  ['Tối ưu chi phí', 'Upcera, UNC (3 năm)'],
])}
<p>Labo tư vấn dòng phù hợp theo vị trí răng, số đơn vị, khớp cắn và yêu cầu thẩm mỹ — gọi hoặc nhắn Zalo ${QUOTE_LINKS}.</p>`;
}
export const COMPARE_FAQ = [
  ['Dòng zirconia nào bảo hành lâu nhất?', 'Tại KTV Dental Lab, Lava được bảo hành 15 năm, tiếp theo là Cercon 7 năm, Katana và DDBio 5 năm, UNC và Upcera 3 năm.'],
  ['Zirconia càng trong thì càng yếu?', 'Nhìn chung là vậy: zirconia 5Y trong hơn 3Y khoảng 20 – 25% nhưng độ bền uốn thấp hơn. Số liệu của Kuraray Noritake cũng cho thấy Katana UTML (độ trong 51%) có độ bền 557 MPa, còn HTML PLUS (45%) đạt 1.150 MPa.'],
  ['Dòng zirconia nào làm được cầu dài?', 'Theo chỉ định của hãng: DD Bio ZX² đến 14 đơn vị; Katana YML, HTML PLUS, Cercon ht và Lava Plus dùng được cho cầu nhiều đơn vị.'],
];
export const COMPARE_SOURCES = ['katana', 'katanaYML', 'cerconBro', 'cerconML', 'ddbio', 'lavaBro', 'lavaSpec', 'upcera', 'yousry', 'binici'];

export function turnaroundBody() {
  return `
<p>Thời gian sản xuất áp dụng cho <strong>mọi loại phục hình</strong> — sứ kim loại, zirconia, Multilayer, inlay, onlay, overlay, cùi giả, phục hình trên implant — và được tính <strong>kể từ lúc labo nhận hàng</strong>.</p>
${turnaroundTable()}
<h2>Để ca về đúng hẹn</h2>
<ul>
<li>Gửi đủ dấu hoặc file scan hàm làm việc, hàm đối diện và khớp cắn.</li>
<li>Ghi rõ màu răng (bảng màu VITA), vật liệu / dòng phôi và ngày hẹn bệnh nhân.</li>
<li>Với implant: ghi hệ implant, loại abutment và kiểu lưu giữ.</li>
<li>Ca cần <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn Zircos-E</a>: thời gian ngâm đã tính sẵn, không làm ca chậm hơn.</li>
</ul>
<p>Chi tiết: <a href="/gui-ca/">cách gửi ca</a>.</p>
<h2>Giờ làm việc</h2>
<p>${BIZ.hours}. Gửi ca: gọi <a href="tel:${BIZ.phones[0].tel}">${BIZ.phones[0].text}</a>. Báo giá, tư vấn ban đầu: Zalo ${QUOTE_LINKS}.</p>
<h2>Khu vực giao nhận</h2>
<ul>
<li>Nhận ca từ phòng khám <strong>khắp khu vực miền Nam</strong>.</li>
<li><strong>Lấy và giao hàng nhanh tận nơi</strong> tại khu vực Bình Dương cũ (Thủ Dầu Một và lân cận).</li>
</ul>
<p>Phục hình được giao trực tiếp đến phòng khám nha khoa.</p>`;
}

/* ---------- Bảo hành ---------- */
export function warrantyBody() {
  return `
<p>Thời hạn bảo hành phụ thuộc vào dòng vật liệu của phục hình: từ 3 đến 15 năm với zirconia; răng sứ kim loại bảo hành theo thỏa thuận với phòng khám.</p>
${table(['Dòng vật liệu', 'Loại', 'Xuất xứ', 'Nhà sản xuất', 'Bảo hành'], MATERIALS.map((m) => [link(m), m.kind === 'zirconia' ? 'Zirconia' : 'Hợp kim', m.country, m.maker, `<strong>${m.years ? m.years + ' năm' : 'Theo thỏa thuận'}</strong>`]), 'wide')}
<h2>Phạm vi áp dụng</h2>
<ul>
<li><strong>Phục hình trên răng thật:</strong> theo thời hạn của dòng vật liệu trong bảng trên.</li>
<li><strong>Phục hình trên implant:</strong> bảo hành như phục hình trên răng thật cùng dòng vật liệu.</li>
<li><strong>Răng sứ kim loại (Ni-Cr, Co-Cr):</strong> theo thỏa thuận với phòng khám.</li>
</ul>
<p>Điều kiện bảo hành chi tiết: liên hệ labo qua <a href="tel:${BIZ.phones[0].tel}">${BIZ.phones[0].text}</a>.</p>
<h2>Chọn vật liệu theo thời hạn bảo hành</h2>
${table(['Bảo hành', 'Dòng zirconia'], [
  ['15 năm', link(bySlug('lava'))],
  ['7 năm', link(bySlug('cercon'))],
  ['5 năm', `${link(bySlug('katana'))}, ${link(bySlug('ddbio'))}`],
  ['3 năm', `${link(bySlug('unc'))}, ${link(bySlug('upcera'))}`],
])}
<p>Độ bền, độ trong từng dòng: <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>.</p>`;
}

/* ---------- Câu hỏi thường gặp (trang chung) ---------- */
export const FAQ = [
  ['KTV Dental Lab nhận làm những loại phục hình nào?',
    `Mão sứ đắp sứ (sườn Ni-Cr, Co-Cr, Zirconia), mão zirconia nguyên khối (full màu), mão zirconia Multilayer, mão toàn kim loại, inlay, onlay, overlay, cùi giả và phục hình trên implant. <a href="/#phuc-hinh">Xem danh sách phục hình</a>.`],
  ['Labo đang dùng những dòng phôi zirconia nào?',
    `Hiện có ${zr.map((m) => `${link(m)} (${m.country})`).join(', ')}. ${MORE_BLANKS_TEXT} <a href="/vat-lieu/so-sanh-zirconia/">So sánh các dòng zirconia</a>.`],
  ['Phòng khám muốn dùng dòng phôi zirconia khác thì sao?',
    `Gọi hoặc nhắn KTV Dental Lab — labo liên hệ đối tác và nhập phôi chính hãng loại đó theo yêu cầu. Điện thoại ${BIZ.phones[0].text}, Zalo ${QUOTE_TEXT}.`],
  ['Răng sứ được bảo hành bao lâu?',
    `Tuỳ dòng vật liệu: ${zr.map((m) => `${m.name} ${m.years} năm`).join(', ')}; răng sứ kim loại Ni-Cr, Co-Cr bảo hành theo thỏa thuận. <a href="/bao-hanh/">Xem bảng bảo hành</a>.`],
  ['Labo làm một ca mất bao lâu?',
    `Tính từ lúc labo nhận hàng, áp dụng cho mọi loại phục hình: ${TURNAROUND.map((t) => `${t.what.toLowerCase()} — ${t.time}${t.max ? ` (${t.max})` : ''}`).join('; ')}. <a href="/thoi-gian-san-xuat/">Xem chi tiết</a>.`],
  ['Labo nhận ca ở những khu vực nào?',
    'KTV Dental Lab nhận ca khắp khu vực miền Nam, và lấy – giao hàng nhanh tận nơi tại khu vực Bình Dương cũ.'],
  ['Giờ làm việc của labo?', `${BIZ.hours}.`],
  ['Gửi ca cho labo như thế nào?',
    'Labo nhận dấu theo mọi phương thức (dấu, mẫu hàm hoặc file scan trong miệng); phiếu chỉ định nha khoa gửi qua mọi kênh online như Zalo, email, tin nhắn. <a href="/gui-ca/">Xem cách gửi ca</a>.'],
  ['Phục hình trên implant được bảo hành thế nào?',
    'Phục hình trên implant được bảo hành như phục hình trên răng thật cùng dòng vật liệu.'],
  ['KTV Dental Lab có chứng nhận chất lượng gì?',
    `Hệ thống quản lý chất lượng của Công ty TNHH MTV KTV đạt ${BIZ.iso.std}, do ${BIZ.iso.body} chứng nhận (giấy chứng nhận số ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid}). <a href="https://isocert.org.vn/tra-cuu-chung-chi-iso" target="_blank" rel="noopener">Tra cứu chứng chỉ trên website ISOCERT</a>.`],
  ['Làm sao để nhận báo giá?',
    `Gọi hoặc nhắn Zalo ${QUOTE_LINKS} để nhận bảng báo giá mới nhất và tư vấn chọn vật liệu.`],
  ['Labo ở đâu?',
    `${BIZ.address} (${BIZ.area}). Điện thoại: ${BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join(', ')}.`],
  ['Răng sứ kim loại và răng sứ không kim loại khác nhau thế nào?',
    'Răng sứ kim loại có sườn hợp kim (Ni-Cr hoặc Co-Cr) bên trong, phủ sứ bên ngoài; chi phí hợp lý nhưng có thể lộ ánh xám ở cổ răng. Răng sứ không kim loại dùng zirconia, màu trắng từ trong ra ngoài nên thẩm mỹ hơn và không có kim loại.'],
  ['Zirconia Multilayer khác zirconia thường thế nào?',
    'Phôi Multilayer có nhiều lớp màu chuyển dần từ cổ răng đến rìa cắn, nên răng làm ra có màu tự nhiên hơn phôi một màu. <a href="/phuc-hinh/mao-zirconia-multilayer/">Xem thêm về Multilayer</a>.'],
  ['Mão zirconia nên gắn bằng xi măng gì?',
    'Xi măng thông thường (glass ionomer, glass ionomer biến tính nhựa) khi cùi đủ lưu giữ; xi măng nhựa kèm thổi cát Al₂O₃ 50 µm và primer chứa MDP khi cùi ngắn hoặc thuôn. Zirconia không xoi mòn được bằng axit HF.'],
  ['Bệnh nhân dị ứng nickel nên làm răng sứ gì?',
    'Zirconia (không kim loại) hoặc răng sứ kim loại Co-Cr — mẫu Co-Cr của labo có kết quả kiểm nghiệm Ni 0,00%. <a href="/vat-lieu/co-cr/">Xem kết quả kiểm nghiệm</a>.'],
  ['Labo có xử lý bề mặt dán cho phục hình zirconia không?',
    'Có. Với inlay, onlay, overlay zirconia, labo xoi mòn mặt dán bằng dung dịch Zircos-E theo yêu cầu, hiện miễn phí. <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">Xem chi tiết</a>.'],
  ['Labo phục vụ những ai?',
    'KTV Dental Lab sản xuất phục hình cho phòng khám nha khoa ở khu vực miền Nam và giao phục hình trực tiếp đến phòng khám.'],
];
export const FAQ_SOURCES = ['spear'];

/* ---------- Cách gửi ca ---------- */
export function sendCaseBody() {
  return `
<p>KTV Dental Lab nhận dấu theo <strong>mọi phương thức</strong> và nhận phiếu chỉ định nha khoa qua <strong>mọi kênh online</strong>. Phòng khám không cần dùng mẫu phiếu riêng của labo.</p>
<h2>1. Gửi dấu</h2>
${table(['Phương thức', 'Ghi chú'], [
  ['Dấu, mẫu hàm', 'Lấy và giao tận nơi tại khu vực Bình Dương cũ. Phòng khám ở các tỉnh, thành khác thuộc miền Nam: liên hệ labo để sắp xếp giao nhận.'],
  ['File scan trong miệng', 'Gửi file qua kênh online, kèm hàm làm việc, hàm đối diện và khớp cắn.'],
])}
<h2>2. Gửi phiếu chỉ định</h2>
<p>Phiếu chỉ định nha khoa gửi qua <strong>mọi kênh online</strong> — Zalo, email, tin nhắn… — cùng lúc hoặc trước khi labo nhận dấu. Phiếu nên có:</p>
<ul>
<li>Tên phòng khám, bác sĩ; tên hoặc mã bệnh nhân.</li>
<li>Vị trí răng và loại phục hình (mão, cầu, inlay, onlay, overlay, cùi giả, phục hình trên implant).</li>
<li>Vật liệu và dòng phôi — xem <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a> nếu chưa chọn.</li>
<li>Màu răng theo bảng màu VITA, kèm ảnh so màu — đặc biệt với răng trước.</li>
<li>Cầu răng: răng trụ, nhịp cầu. Implant: hệ implant, đường kính, kiểu kết nối, loại abutment, bắt vít hay gắn xi măng.</li>
<li>Yêu cầu thêm, ví dụ <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn Zircos-E</a> cho inlay, onlay, overlay zirconia (miễn phí).</li>
<li>Ngày hẹn bệnh nhân.</li>
</ul>
<p>Muốn soạn nhanh cho đủ ý? Dùng <a href="/phieu-chi-dinh/">phiếu chỉ định online</a>: chọn răng trên sơ đồ, chọn phục hình, vật liệu, màu, rồi sao chép gửi Zalo, email hoặc in kèm dấu.</p>
<h2 id="so-mau">3. So màu đúng cách</h2>
<ul>
<li><strong>So màu ở đầu buổi hẹn,</strong> trước khi mài răng và trước khi đặt đê cao su: răng mất nước sẽ sáng và đục hơn, mắt cũng mỏi dần trong buổi điều trị.</li>
<li><strong>Nhìn nhanh 5 – 7 giây</strong> mỗi lần; nếu cần lâu hơn, nhìn vào một bề mặt xám trung tính để mắt nghỉ rồi so tiếp.</li>
<li><strong>Ánh sáng:</strong> nguồn sáng chuẩn màu khoảng 5.500 K, chỉ số hoàn màu (CRI) trên 90; kiểm tra lại dưới một nguồn sáng khác.</li>
<li><strong>Đặt cây so màu</strong> cùng mặt phẳng và góc với răng, rìa cắn sát rìa cắn; chọn màu theo 1/3 giữa thân răng.</li>
<li><strong>Môi trường trung tính:</strong> che quần áo sặc sỡ, lau son môi, tránh dụng cụ phản chiếu.</li>
<li><strong>Chụp ảnh</strong> răng kế bên cùng cây so màu đã chọn và gửi kèm phiếu — giúp labo nhìn thấy độ trong, đặc điểm bề mặt.</li>
</ul>
<p class="note">Theo hướng dẫn so màu bằng mắt của Dentalcare (CE690).</p>
<h2>4. Thời gian sản xuất</h2>
<p>Áp dụng cho mọi loại phục hình, tính <strong>kể từ lúc labo nhận hàng</strong>:</p>
${turnaroundTable()}
<p>Giờ làm việc: ${BIZ.hours}.</p>
<h2>5. Liên hệ</h2>
<ul>
<li>Điện thoại: ${BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join(', ')}</li>
<li>Email: <a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
<li>Báo giá, tư vấn ban đầu qua Zalo: ${QUOTE_LINKS}</li>
</ul>`;
}
export const SENDCASE_FAQ = [
  ['Labo nhận dấu theo hình thức nào?', 'Mọi phương thức: dấu, mẫu hàm hoặc file scan trong miệng.'],
  ['Có cần dùng mẫu phiếu chỉ định của labo không?', 'Không. Phiếu chỉ định nha khoa của phòng khám gửi qua bất kỳ kênh online nào (Zalo, email, tin nhắn…) đều được.'],
  ['Nên so màu lúc nào?', 'Ở đầu buổi hẹn, trước khi mài răng và đặt đê cao su, khi răng chưa mất nước và mắt chưa mỏi; nhìn nhanh 5 – 7 giây mỗi lần dưới ánh sáng khoảng 5.500 K.'],
  ['Thời gian sản xuất tính từ khi nào?', `Tính từ lúc labo nhận hàng: ${TURNAROUND.map((t) => `${t.what.toLowerCase()} — ${t.time}`).join('; ')}.`],
  ['Phòng khám ngoài Bình Dương có gửi ca được không?', 'Được. Labo nhận ca khắp khu vực miền Nam; lấy và giao hàng tận nơi tại khu vực Bình Dương cũ, các khu vực khác liên hệ labo để sắp xếp giao nhận.'],
];
export const SENDCASE_SOURCES = ['shade'];

/* ---------- Dịch vụ: xoi mòn zirconia bằng Zircos-E ---------- */
export function etchBody() {
  return `
<h2>Vì sao zirconia khó dán?</h2>
<p>Sứ thuỷ tinh (như lithium disilicate) được xoi mòn bằng axit HF và silane hoá để dán. <strong>Zirconia</strong> gần như không có pha thuỷ tinh nên không đáp ứng với cách xử lý này; cách thường dùng là thổi cát Al₂O₃ rồi phủ primer chứa MDP.</p>
<p>Với <a href="/phuc-hinh/inlay-onlay/">inlay, onlay</a> và <a href="/phuc-hinh/overlay/">overlay</a>, phục hình ít có thành trục để lưu giữ cơ học như mão toàn phần, nên độ bám của lớp dán càng quan trọng.</p>
<h2>Zircos-E là gì?</h2>
<p><strong>Zircos-E Etching Solution</strong> là dung dịch xoi mòn bề mặt zirconia của RH Marketing (Mỹ), dạng hợp chất axit nitric – axit HF. Dung dịch tạo độ xốp nhẹ trên <strong>toàn bộ bề mặt</strong> zirconia — kể cả những vùng khó thổi cát — để tăng khả năng bám dính của xi măng.</p>
<h2>Nghiên cứu nói gì?</h2>
<p>Các nghiên cứu hiện có là thử nghiệm <strong>trong phòng thí nghiệm</strong> (in vitro), đo độ bền dán cắt (shear bond strength) giữa xi măng nhựa và zirconia:</p>
${table(['Nghiên cứu', 'Kết quả chính'], [
  ['Sokolowski và cs., 2023 (<em>Materials</em>)', 'Sau thổi cát 50 µm, xoi mòn thêm bằng Zircos-E (30 phút, 30 °C) làm tăng đáng kể độ bền dán so với chỉ thổi cát. Sau 24 giờ: trung vị cao nhất 17,7 MPa (xoi mòn + primer) so với 6,1 MPa (chỉ thổi cát). Sau lão hoá nhiệt 5.000 chu kỳ, độ bền dán giảm ở hầu hết các nhóm.'],
  ['Alawawda và cs., 2026 (<em>J Prosthodont</em>, phân tích gộp)', '8 nghiên cứu in vitro: Zircos-E cho độ bền dán cao hơn thổi cát; khác biệt rõ ở nhóm không lão hoá nhiệt, không có ý nghĩa thống kê ở nhóm đã lão hoá nhiệt. Các nghiên cứu khác nhau nhiều.'],
  ['Cho và cs., 2017 (<em>J Adv Prosthodont</em>)', 'Độ bền dán sau xử lý tăng với Superbond C&B (16,15 so với 7,09 MPa khi thổi cát) và RelyX Unicem, nhưng giảm với Panavia F 2.0 — hiệu quả phụ thuộc loại xi măng.'],
], 'wide')}
<p class="note">Chưa có dữ liệu lâm sàng dài hạn; ảnh hưởng của xoi mòn lên độ bền uốn của zirconia chưa được đánh giá trong các nghiên cứu trên.</p>
<h2>Dịch vụ tại KTV Dental Lab</h2>
${table(['Mục', 'Chi tiết'], [
  ['Áp dụng', 'Thường dùng cho <a href="/phuc-hinh/inlay-onlay/">inlay, onlay</a> và <a href="/phuc-hinh/overlay/">overlay</a> zirconia. Trường hợp khác, trao đổi với labo.'],
  ['Xử lý', 'Phục hình được ngâm trong dung dịch Zircos-E tại labo trước khi giao — tối đa 2 giờ, tuỳ kích thước phục hình. Không thổi cát trước và sau khi xoi mòn.'],
  ['Thời gian', 'Thời gian ngâm đã được tính sẵn trong <a href="/thoi-gian-san-xuat/">thời gian sản xuất</a> — ca không bị trễ thêm.'],
  ['Chi phí', '<strong>Hiện miễn phí</strong>'],
  ['Cách yêu cầu', 'Ghi “Xoi mòn Zircos-E” trên phiếu chỉ định khi <a href="/gui-ca/">gửi ca</a>.'],
])}
<h2>Khi gắn tại phòng khám</h2>
<p>Phòng khám gắn theo <strong>quy trình gắn thông thường</strong>; không cần thổi cát lại mặt dán.</p>`;
}
export const ETCH_FAQ = [
  ['Xoi mòn Zircos-E có mất phí không?', 'Hiện KTV Dental Lab xử lý miễn phí.'],
  ['Dịch vụ áp dụng cho loại phục hình nào?', 'Thường dùng cho inlay, onlay và overlay zirconia — các phục hình phụ thuộc nhiều vào dán. Trường hợp khác, bác sĩ trao đổi với labo.'],
  ['Xoi mòn có làm ca bị chậm không?', 'Không. Thời gian ngâm (tối đa 2 giờ, tuỳ kích thước phục hình) đã được tính sẵn trong thời gian sản xuất.'],
  ['Phòng khám có cần thổi cát hay xử lý thêm trước khi gắn không?', 'Không cần thổi cát. Labo không thổi cát trước và sau khi xoi mòn; phòng khám gắn theo quy trình gắn thông thường.'],
  ['Xoi mòn có làm yếu zirconia không?', 'Các nghiên cứu in vitro hiện có tập trung vào độ bền dán, chưa đánh giá đầy đủ ảnh hưởng lên độ bền uốn của zirconia.'],
];
export const ETCH_SOURCES = ['zircosE', 'sokolowski', 'alawawda', 'cho2017'];

/* ---------- Trang địa phương: Bình Dương và TP HCM ---------- */
export const LOCAL_AREAS = ['Thủ Dầu Một', 'Thuận An', 'Dĩ An', 'Tân Uyên', 'Bến Cát', 'Bàu Bàng', 'Bắc Tân Uyên', 'Phú Giáo', 'Dầu Tiếng'];
const MAPS = 'https://www.google.com/maps/search/?api=1&amp;query=614%2F18%2F21%20L%C3%AA%20H%E1%BB%93ng%20Phong%2C%20Ph%C3%BA%20L%E1%BB%A3i%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh';
const quickInfo = (deliveryRow) => table(['Mục', 'Chi tiết'], [
  ['Labo', `${BIZ.name} — ${BIZ.legal}`],
  ['Địa chỉ', `${BIZ.address} (${BIZ.area}). <a href="${MAPS}" target="_blank" rel="noopener">Chỉ đường</a>`],
  ['Giờ làm việc', BIZ.hours],
  ['Điện thoại labo', BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join(', ')],
  ['Báo giá, tư vấn ban đầu', `Zalo ${QUOTE_LINKS}`],
  ['Chứng nhận', `${BIZ.iso.std} — ${BIZ.iso.body}, số ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid}`],
  ['Máy phay CAD/CAM', 'DGSHAPE DWX-52Di — 5 trục'],
  ['Thời gian sản xuất', 'Răng đơn lẻ, 2 – 3 đơn vị: 1 ngày; cầu 4 – 8 đơn vị: 2 ngày; cầu toàn hàm: 3 ngày'],
  ['Bảo hành', 'Zirconia 3 – 15 năm theo dòng phôi; răng sứ kim loại theo thỏa thuận'],
  ['Giao nhận', deliveryRow],
]);
const materialTable = () => table(['Dòng zirconia', 'Nhà sản xuất', 'Xuất xứ', 'Bảo hành'], zr.map((m) => [link(m), m.maker, m.country, `<strong>${m.years} năm</strong>`]), 'wide');
const turnaroundNote = '<p class="note">Tính từ khi labo nhận đủ hàng và dữ liệu hợp lệ. Ca đặc biệt, dữ liệu cần bổ sung hoặc yêu cầu thẩm mỹ phức tạp được trao đổi riêng với phòng khám.</p>';

export function localBody() {
  return `
<p class="qa-short">KTV Dental Lab là labo răng sứ tại <strong>${BIZ.address}</strong> — khu vực Thủ Dầu Một, Bình Dương cũ. Labo sản xuất phục hình cho phòng khám nha khoa, đạt <strong>${BIZ.iso.std}</strong>, răng đơn lẻ trong <strong>1 ngày</strong>, lấy và giao tận nơi trong khu vực Bình Dương cũ.</p>
<h2>Thông tin nhanh</h2>
${quickInfo('Lấy và giao tận nơi khu vực Bình Dương cũ; nhận ca khắp miền Nam')}
<h2>Chọn labo không chỉ là chọn nơi “làm răng sứ”</h2>
<p>Với phòng khám, một mão zirconia đẹp chưa phải là toàn bộ vấn đề. Labo phù hợp còn phải giúp bác sĩ kiểm soát những điều ít xuất hiện trong quảng cáo: mão có xuống hết không, tiếp xúc có phải chỉnh nhiều không, khớp cắn có ổn định không, màu có tái lập được ở lần chỉnh sau không, vật liệu thực tế có đúng chỉ định không, ca khó có được trao đổi trước khi sản xuất không, và ngày giao có đủ ổn định để xếp lịch bệnh nhân.</p>
<p>Vì vậy câu hỏi khi tìm labo răng sứ tại Bình Dương không chỉ là “giá một răng bao nhiêu?”, mà là: <strong>labo này có giúp phòng khám kiểm soát chất lượng của cả quá trình phục hình không?</strong></p>
<h2>Một labo tốt nên hỏi lại khi dữ liệu chưa đủ</h2>
<p>Labo luôn trả lời “làm được” chưa chắc là labo dễ làm việc nhất. Có những ca mà lựa chọn đúng là dừng lại và hỏi:</p>
<ul>
<li>Đường hoàn tất chưa rõ, hoặc scan mất một vùng ở bờ.</li>
<li>Khoảng phục hình thiếu, cùi quá thấp.</li>
<li>Thiếu dữ liệu tiếp xúc với răng kế bên; scan khớp cắn có dấu hiệu sai.</li>
<li>Ảnh màu răng thiếu ánh sáng chuẩn.</li>
<li>Hướng implant hoặc vị trí lỗ vít tạo giới hạn thiết kế.</li>
</ul>
<p>Nếu labo cố đoán để kịp giao, vấn đề chỉ lộ ra khi bác sĩ thử răng trên bệnh nhân. Sửa dữ liệu trước khi phay đơn giản hơn nhiều so với sửa một phục hình đã hoàn thiện. Cách KTV xử lý từng tình huống: <a href="/hoi-dap/mai-cui-zirconia/#cau-19">thiếu khoảng</a>, <a href="/hoi-dap/sat-khit-tiep-xuc-hinh-the/#cau-60">khi nào cần scan lại</a>, <a href="/hoi-dap/scan-trong-mieng/#cau-63">margin bị thiếu</a>.</p>
<h2>Với zirconia, tên thương hiệu chưa nói hết</h2>
<p>“Cercon hay Katana tốt hơn?” là câu hỏi thường gặp, nhưng chưa đủ. Ngay trong cùng một hãng, các dòng phôi khác nhau về độ trong, độ bền, chỉ định và độ dày tối thiểu — ví dụ Katana UTML có độ trong 51% với độ bền uốn 557 MPa, còn Katana HTML PLUS 45% với 1.150 MPa. Phôi nhiều lớp (Multilayer) tạo chuyển màu ngay trong phôi để mão nguyên khối có thẩm mỹ tự nhiên hơn.</p>
<p>Một răng hàm chịu lực lớn, một răng cửa cần độ trong, một cùi đổi màu và một cầu nhiều đơn vị cần những ưu tiên khác nhau — không nhất thiết chọn theo bảng giá từ thấp đến cao. KTV Dental Lab chế tác đa dạng dòng zirconia, mỗi dòng có hãng, xuất xứ và bảo hành riêng:</p>
${materialTable()}
<p>Chọn dòng theo ca: <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>, <a href="/hoi-dap/chon-vat-lieu-zirconia/">hỏi đáp chọn vật liệu</a>.</p>
${MORE_BLANKS}
<h2>Máy CAD/CAM quan trọng, nhưng máy không tự tạo ra phục hình tốt</h2>
<p>KTV Dental Lab dùng máy phay nha khoa 5 trục <strong>DGSHAPE DWX-52Di</strong> (Roland DGA) cho quy trình CAD/CAM. Máy phay chính xác là một phần quan trọng của labo số, nhưng máy không tự quyết định:</p>
<ul>
<li>đường hoàn tất nằm ở đâu;</li>
<li>khe xi măng bao nhiêu;</li>
<li>vùng nối của cầu thiết kế thế nào;</li>
<li>tiếp xúc chặt hay nhẹ;</li>
<li>múi nào đang chịu lực;</li>
<li>hình thể vùng cổ có ép mô mềm không;</li>
<li>bác sĩ muốn giữ hình thể răng cũ đến mức nào.</li>
</ul>
<p>Những quyết định đó nằm ở thiết kế và kiểm soát của kỹ thuật viên. Giới thiệu máy không nhằm nói “có máy này nên răng sẽ hoàn hảo”: một phục hình tốt cần đủ chuỗi: <strong>dữ liệu đúng → thiết kế đúng → vật liệu đúng → gia công chính xác → kiểm soát sau sản xuất</strong>. Thiếu một mắt xích, máy tốt cũng không sửa được cả quy trình.</p>
<h2>Độ sát khít không bắt đầu ở máy phay</h2>
<p>Mão không xuống hết có thể bắt đầu từ đường hoàn tất chưa rõ, mô mềm che bờ, vùng scan nhiễu do nước bọt hoặc máu, tiếp xúc quá chặt, khe xi măng chưa phù hợp, hoặc dữ liệu khớp cắn sai. Theo An và cộng sự (2024), đường hoàn tất dưới nướu và nước bọt đều làm giảm đáng kể độ chính xác khi scan.</p>
<p>File scan nhìn đẹp không đồng nghĩa mọi dữ liệu cần thiết đều đủ để sản xuất. Labo số cần đọc file dưới góc độ sản xuất và báo lại vùng có nguy cơ trước khi thiết kế. KTV nhận dấu truyền thống, mẫu hàm và file scan trong miệng — mục tiêu là dữ liệu đủ tốt cho từng ca, không ép phòng khám theo một quy trình duy nhất.</p>
<h2>Bác sĩ nên biết chính xác mình nhận vật liệu gì</h2>
<p>“Zirconia Đức”, “sứ Nhật”, “sứ Mỹ” dễ hiểu nhưng chưa nói được nhiều. Thông tin vật liệu nên có tối thiểu: <strong>hãng sản xuất, tên thương mại, xuất xứ, loại phục hình được chỉ định, thời hạn bảo hành</strong>. KTV công khai từng dòng vật liệu thay vì gom thành “răng toàn sứ cao cấp”; với hợp kim, mẫu Co-Cr của labo có <a href="/vat-lieu/co-cr/">kết quả kiểm nghiệm thành phần</a> tại Viện Vật liệu xây dựng (Ni 0,00%).</p>
<p>Bảo hành dài nhất không mặc nhiên là phù hợp nhất với mọi ca — điều quan trọng là bác sĩ biết mình đang đặt hàng thứ gì.</p>
<h2>ISO 13485 nói lên cách labo vận hành</h2>
<p>ISO 13485 là tiêu chuẩn quốc tế về hệ thống quản lý chất lượng cho tổ chức trong lĩnh vực thiết bị y tế, đặt ra yêu cầu để sản phẩm đáp ứng nhất quán yêu cầu của khách hàng và quy định. Tiêu chuẩn này không nói kỹ thuật viên nào đắp răng cửa đẹp hơn; nó nói tổ chức kiểm soát quy trình của mình ra sao — và khả năng truy xuất khi cần.</p>
<p>Hệ thống quản lý chất lượng của ${BIZ.legal} đạt ${BIZ.iso.std}, chứng nhận bởi ${BIZ.iso.body}, số ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid} — <a href="https://isocert.org.vn/tra-cuu-chung-chi-iso" target="_blank" rel="noopener">tra cứu tại ISOCERT</a>.</p>
<h2>Thời gian sản xuất nên là một thông số công khai</h2>
<p>Một ca làm nhanh nhưng không đoán được ngày giao gây khó cho phòng khám hơn một ca cần thêm vài giờ nhưng có lịch rõ ràng: bệnh nhân đã được hẹn, ghế nha có lịch. Thời gian sản xuất hiện tại của KTV:</p>
${turnaroundTable()}
${turnaroundNote}
<h2>Bảo hành tốt không chỉ là “bao nhiêu năm”</h2>
<p>Khi phục hình gặp vấn đề sau vài tháng, việc đầu tiên là xác định chuyện gì đã xảy ra: gãy vật liệu, mẻ sứ, bong mão, thay đổi cùi, bệnh lý răng trụ, chỉnh sửa lâm sàng sau khi giao hay thay đổi kế hoạch điều trị là những tình huống rất khác nhau. Bảo hành có giá trị khi đi cùng khả năng xác định ca nào, vật liệu gì, sản xuất khi nào và phục hình ban đầu ra sao.</p>
<p>KTV bảo hành theo dòng vật liệu: Upcera, UNC 3 năm; Katana, DDBio 5 năm; Cercon 7 năm; Lava 15 năm; phục hình trên implant theo dòng vật liệu tương ứng — <a href="/bao-hanh/">bảng bảo hành</a>.</p>
<h2>Lợi thế của labo gần phòng khám là vòng phản hồi ngắn</h2>
<p>Với phòng khám ở khu vực Bình Dương cũ, labo gần giúp giao nhận thuận tiện — nhưng lợi ích lớn hơn là trao đổi nhanh: ca cần chỉnh màu, mẫu cần kiểm tra lại, ca khó cần bàn trực tiếp giữa bác sĩ và kỹ thuật viên. KTV lấy và giao tận nơi tại:</p>
<ul class="area-list">${LOCAL_AREAS.map((a) => `<li>${a}</li>`).join('')}</ul>
<h2>Phường Phú Lợi — Bình Dương cũ, nay thuộc TP Hồ Chí Minh</h2>
<p>Từ ngày 01/7/2025, theo Nghị quyết 202/2025/QH15, toàn bộ tỉnh Bình Dương được sắp xếp vào TP Hồ Chí Minh. Địa chỉ labo ghi phường Phú Lợi, TP Hồ Chí Minh; vị trí vẫn ở khu vực Thủ Dầu Một. Phòng khám ở các khu vực khác của TP Hồ Chí Minh: xem <a href="/labo-rang-su-tp-hcm/">labo răng sứ TP HCM</a>.</p>
<h2>KTV Dental Lab phù hợp với phòng khám nào?</h2>
<p>KTV làm việc với phòng khám nha khoa, không tiếp nhận bệnh nhân trực tiếp. Labo phù hợp với phòng khám muốn biết rõ vật liệu đang dùng, muốn trao đổi trực tiếp khi ca có vấn đề kỹ thuật, cần thời gian sản xuất ngắn và muốn làm việc với labo có hệ thống quản lý chất lượng chuẩn hoá.</p>
${table(['Phục hình', 'Vật liệu'], PRODUCTS.map((p) => [`<a href="/phuc-hinh/${p.slug}/">${p.name}</a>`, p.short]))}
<p>Một lần hỏi thêm trước khi phay tốt hơn một lần làm lại khi bệnh nhân đã ngồi trên ghế.</p>
<h2>Labo tốt không khiến bác sĩ phải nghĩ về labo quá nhiều</h2>
<ul>
<li>Khi dữ liệu đủ, ca được sản xuất đúng.</li>
<li>Khi dữ liệu chưa đủ, labo hỏi.</li>
<li>Khi vật liệu được chỉ định, bác sĩ biết mình nhận gì.</li>
<li>Khi có vấn đề, hai bên có dữ liệu để cùng tìm nguyên nhân.</li>
</ul>
<p>Báo giá và tư vấn vật liệu: Zalo ${QUOTE_LINKS}. Gửi ca: <a href="/gui-ca/">cách gửi ca</a>.</p>`;
}
export const LOCAL_FAQ = [
  ['Labo răng sứ KTV Dental Lab ở đâu tại Bình Dương?', `${BIZ.address} — khu vực Thủ Dầu Một, Bình Dương cũ (từ 01/7/2025 thuộc TP Hồ Chí Minh).`],
  ['KTV có nhận file scan trong miệng không?', 'Có. KTV nhận dấu truyền thống, mẫu hàm hoặc file scan trong miệng.'],
  ['Có thể chọn cụ thể hãng zirconia không?', `Có. Vật liệu được chỉ định theo từng dòng hiện có: ${zr.map((m) => m.name).join(', ')}. ${MORE_BLANKS_TEXT}`],
  ['Một răng zirconia đơn lẻ mất bao lâu?', '1 ngày, tối đa 36 giờ, tính từ khi labo nhận đủ hàng và dữ liệu hợp lệ.'],
  ['Labo có lấy và giao hàng tận nơi ở Thuận An, Dĩ An, Tân Uyên, Bến Cát không?', `Có. Labo lấy và giao tận nơi trong khu vực Bình Dương cũ: ${LOCAL_AREAS.join(', ')}.`],
  ['Labo có làm phục hình trên implant không?', 'Có. KTV làm phục hình răng sứ trên implant theo chỉ định riêng của bác sĩ.'],
  ['Nếu scan hoặc chỉ định có điểm bất thường thì sao?', 'Labo trao đổi lại với phòng khám trước khi chuyển sang sản xuất.'],
  ['Răng toàn sứ tại labo bảo hành bao lâu?', `Theo dòng zirconia: ${zr.map((m) => `${m.name} ${m.years} năm`).join(', ')}. Răng sứ kim loại bảo hành theo thỏa thuận với phòng khám.`],
  ['Labo có làm việc trực tiếp với bệnh nhân không?', 'Không. KTV Dental Lab sản xuất phục hình theo chỉ định của phòng khám nha khoa và giao trực tiếp đến phòng khám.'],
];
export const LOCAL_SOURCES = ['nq202', 'iso13485', 'katana', 'dwx52', 'an2024', 'iowa'];

export function hcmBody() {
  return `
<p class="qa-short">KTV Dental Lab là labo răng sứ tại <strong>TP Hồ Chí Minh</strong> — ${BIZ.address}, khu vực Thủ Dầu Một (Bình Dương cũ). Labo nhận ca từ phòng khám trên toàn thành phố và khắp miền Nam: file scan trong miệng gửi online, dấu và mẫu hàm được sắp xếp giao nhận; răng đơn lẻ sản xuất trong <strong>1 ngày</strong> kể từ khi labo nhận hàng.</p>
<h2>Thông tin nhanh</h2>
${quickInfo('Lấy và giao tận nơi khu vực Bình Dương cũ; các khu vực khác của TP HCM và miền Nam: file scan online hoặc liên hệ sắp xếp giao nhận')}
<h2>TP Hồ Chí Minh mới — labo ở khu vực Bình Dương cũ</h2>
<p>Từ ngày 01/7/2025, theo Nghị quyết 202/2025/QH15, TP Hồ Chí Minh, tỉnh Bình Dương và tỉnh Bà Rịa – Vũng Tàu được sắp xếp thành TP Hồ Chí Minh mới. KTV Dental Lab nằm ở phường Phú Lợi — khu vực Thủ Dầu Một, Bình Dương cũ — và phục vụ phòng khám ở cả ba khu vực.</p>
<h2>Gửi ca từ xa: dữ liệu số là đường giao hàng nhanh nhất</h2>
<p>Với phòng khám không ở gần labo, file scan trong miệng gửi online loại bỏ thời gian vận chuyển dấu. Điều kiện là file đủ dữ liệu để sản xuất — labo không nên đoán phần bị thiếu. Trước khi gửi, kiểm tra:</p>
${table(['Kiểm tra', 'Vì sao quan trọng'], [
  ['Đường hoàn tất thấy liên tục, không bị nướu, máu, nước bọt che', 'Đường hoàn tất dưới nướu và nước bọt làm giảm rõ độ chính xác của scan (An và cộng sự, 2024)'],
  ['Có hàm đối diện và khớp cắn hai bên', 'Không có hàm đối diện, labo không biết khoảng phục hình và điểm chạm khớp'],
  ['Thấy rõ vùng tiếp xúc với răng kế bên', 'Thiếu dữ liệu tiếp xúc dễ dẫn đến tiếp xúc quá chặt hoặc lỏng'],
  ['Implant: ghi hãng, model scan body, hệ implant, đường kính, kết nối', 'Scan body phải khớp đúng thư viện thiết kế và linh kiện'],
  ['Ảnh màu răng với cây so màu, ánh sáng trung tính', 'Labo không gặp trực tiếp bệnh nhân — ảnh là dữ liệu màu duy nhất'],
], 'wide')}
<p>Chi tiết: <a href="/gui-ca/">cách gửi ca</a>, <a href="/hoi-dap/scan-trong-mieng/">hỏi đáp scan trong miệng</a>, <a href="/hoi-dap/scan-body-implant/">scan body implant</a>.</p>
<h2>Gửi dấu và mẫu hàm từ xa</h2>
<p>Phòng khám ngoài khu vực Bình Dương cũ vẫn gửi được dấu truyền thống và mẫu hàm — liên hệ labo để sắp xếp giao nhận. Đóng gói dấu kèm phiếu chỉ định, ghi rõ ngày hẹn bệnh nhân. Phiếu chỉ định gửi trước qua kênh online để labo kiểm tra thông tin trong lúc chờ hàng.</p>
<h2>Xếp lịch hẹn bệnh nhân với labo ở xa</h2>
${turnaroundTable()}
${turnaroundNote}
<p>Thời gian trên tính từ khi labo nhận hàng. Với dấu và mẫu hàm gửi từ xa, cộng thêm thời gian vận chuyển hai chiều khi xếp lịch hẹn; với file scan, thời gian sản xuất bắt đầu ngay khi labo nhận file hợp lệ.</p>
<h2>Màu răng khi labo không gặp bệnh nhân</h2>
<p>Với ca răng trước, ảnh là dữ liệu màu quan trọng nhất. Gửi ảnh chính diện vùng răng trước, ảnh cận răng cần phục hình và răng đối xứng, ảnh có cây so màu cùng mặt phẳng với răng, ảnh nghiêng thấy độ trong rìa cắn; nếu cùi đổi màu, thêm ảnh cùi sau mài. Chụp dưới ánh sáng trung tính, không dùng filter. So màu ở đầu buổi hẹn, trước khi mài — <a href="/gui-ca/#so-mau">hướng dẫn so màu</a>.</p>
<h2>Vật liệu rõ nguồn gốc, bảo hành theo dòng</h2>
${materialTable()}
<p>Răng sứ kim loại: <a href="/vat-lieu/ni-cr/">Ni-Cr</a>, <a href="/vat-lieu/co-cr/">Co-Cr</a> (mẫu Co-Cr có kết quả kiểm nghiệm Ni 0,00%). Phục hình trên implant bảo hành như phục hình trên răng thật cùng dòng vật liệu.</p>
<h2>Phục hình labo sản xuất</h2>
${table(['Phục hình', 'Vật liệu'], PRODUCTS.map((p) => [`<a href="/phuc-hinh/${p.slug}/">${p.name}</a>`, p.short]))}
<p>Dịch vụ đi kèm: <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn mặt dán Zircos-E</a> cho inlay, onlay, overlay zirconia — hiện miễn phí.</p>
<h2>Bắt đầu với một ca đầu tiên</h2>
<ol>
<li>Nhắn Zalo ${QUOTE_LINKS} để nhận báo giá và tư vấn chọn vật liệu.</li>
<li>Gửi file scan hoặc liên hệ sắp xếp giao nhận dấu; gửi phiếu chỉ định qua kênh online.</li>
<li>Labo kiểm tra dữ liệu; nếu thiếu, labo trao đổi lại trước khi sản xuất.</li>
<li>Nhận phục hình đúng lịch; bảo hành theo dòng vật liệu.</li>
</ol>
<p>Phòng khám ở khu vực Bình Dương cũ: xem <a href="/labo-rang-su-binh-duong/">labo răng sứ Bình Dương</a> — lấy và giao tận nơi.</p>`;
}
export const HCM_FAQ = [
  ['KTV Dental Lab có phải labo răng sứ ở TP HCM không?', `Có. Labo ở ${BIZ.address} — khu vực Thủ Dầu Một, Bình Dương cũ, thuộc TP Hồ Chí Minh từ 01/7/2025.`],
  ['Phòng khám ở khu vực TP HCM cũ gửi ca thế nào?', 'Gửi file scan trong miệng qua kênh online, hoặc liên hệ labo để sắp xếp giao nhận dấu và mẫu hàm; phiếu chỉ định gửi qua mọi kênh online.'],
  ['Thời gian sản xuất tính từ khi nào?', 'Từ khi labo nhận đủ hàng và dữ liệu hợp lệ: răng đơn lẻ, 2 – 3 đơn vị 1 ngày; cầu 4 – 8 đơn vị 2 ngày; cầu toàn hàm 3 ngày; hai hàm 4 ngày. Với dấu gửi từ xa, cộng thêm thời gian vận chuyển khi xếp lịch hẹn.'],
  ['Labo có nhận ca từ Bà Rịa – Vũng Tàu cũ và các tỉnh miền Nam không?', 'Có. KTV Dental Lab nhận ca khắp khu vực miền Nam.'],
  ['Gửi file scan cần những gì?', 'Hàm làm việc với đường hoàn tất liên tục, hàm đối diện, khớp cắn hai bên, ảnh màu với cây so màu; với implant, ghi hãng và model scan body, hệ implant, đường kính, kết nối.'],
  ['Labo có giao tận nơi ở TP HCM không?', 'Labo lấy và giao tận nơi trong khu vực Bình Dương cũ; các khu vực khác liên hệ labo để sắp xếp giao nhận.'],
  ['Labo có chứng nhận chất lượng không?', `Có. ${BIZ.legal} đạt ${BIZ.iso.std}, do ${BIZ.iso.body} chứng nhận (số ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid}).`],
  ['Làm sao nhận báo giá?', `Nhắn Zalo ${QUOTE_TEXT} để nhận bảng báo giá mới nhất và tư vấn chọn vật liệu.`],
];
export const HCM_SOURCES = ['nq202', 'an2024', 'iti2018', 'dwx52'];

/* ---------- Thông tin pháp lý (chỉ thông tin công khai) ---------- */
export function legalBody() {
  return `
<p class="qa-short">KTV Dental Lab là tên thương mại của <strong>${BIZ.legal}</strong>, mã số thuế <strong>3703340735</strong>, địa chỉ ${BIZ.address}. Hệ thống quản lý chất lượng đạt <strong>${BIZ.iso.std}</strong> do ${BIZ.iso.body} chứng nhận. Thông tin dưới đây phòng khám tự tra cứu được tại nguồn chính thức.</p>
<h2>Thông tin doanh nghiệp</h2>
${table(['Mục', 'Chi tiết'], [
  ['Tên doanh nghiệp', BIZ.legal],
  ['Tên thương mại', BIZ.name],
  ['Mã số thuế', '3703340735'],
  ['Địa chỉ', `${BIZ.address} (${BIZ.area})`],
  ['Điện thoại', BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join(', ')],
  ['Email', `<a href="mailto:${BIZ.email}">${BIZ.email}</a>`],
  ['Website', `<a href="${SITE}/">ktvlab.com</a>`],
])}
<p>Tra cứu mã số thuế và trạng thái doanh nghiệp: <a href="https://tracuunnt.gdt.gov.vn/tcnnt/mstdn.jsp" target="_blank" rel="noopener">trang tra cứu người nộp thuế của Cục Thuế</a> và <a href="https://dangkykinhdoanh.gov.vn/" target="_blank" rel="noopener">Cổng thông tin quốc gia về đăng ký doanh nghiệp</a>.</p>
<h2>Chứng nhận hệ thống quản lý chất lượng</h2>
${table(['Mục', 'Chi tiết'], [
  ['Tiêu chuẩn', `${BIZ.iso.std} — hệ thống quản lý chất lượng cho lĩnh vực trang thiết bị y tế`],
  ['Tổ chức chứng nhận', BIZ.iso.body],
  ['Số giấy chứng nhận', BIZ.iso.no],
  ['Hiệu lực', BIZ.iso.valid],
  ['Phạm vi', 'Sản xuất và kinh doanh răng sứ kim loại, răng sứ không kim loại'],
  ['Giám sát', 'Đánh giá giám sát định kỳ hằng năm'],
])}
<p>Tra cứu chứng chỉ: <a href="https://isocert.org.vn/tra-cuu-chung-chi-iso" target="_blank" rel="noopener">website ISOCERT</a>. ISO 13485 là tiêu chuẩn quốc tế về hệ thống quản lý chất lượng cho tổ chức trong lĩnh vực thiết bị y tế — chứng nhận cách labo kiểm soát và truy xuất quy trình sản xuất.</p>
<h2>Nguồn gốc vật liệu</h2>
<p>Mỗi dòng vật liệu hiện có được công bố tên hãng và xuất xứ. Dòng phôi zirconia khác: labo nhập chính hãng theo yêu cầu của phòng khám.</p>
${table(['Vật liệu', 'Loại', 'Nhà sản xuất', 'Xuất xứ'], MATERIALS.map((m) => [link(m), m.kind === 'zirconia' ? 'Zirconia' : 'Hợp kim', m.maker, m.country]), 'wide')}
<h2>Kiểm nghiệm vật liệu</h2>
<p>Mẫu phần kim loại của răng sứ Co-Cr do labo sản xuất được Trung tâm Phân tích, Kiểm định vật liệu xây dựng — Viện Vật liệu xây dựng (VIBM) phân tích theo phương pháp tham chiếu ISO 22674:2022: <strong>Ni 0,00%</strong> (phiếu kết quả số 1958/VLXD-TTKĐ, ngày 26/05/2026). <a href="/vat-lieu/co-cr/">Xem kết quả và toàn văn phiếu</a>.</p>
<h2>Hoá đơn và chứng từ</h2>
<p>Phòng khám cần thông tin xuất hoá đơn hoặc chứng từ cho hồ sơ, vui lòng trao đổi với labo khi bắt đầu hợp tác: <a href="tel:${BIZ.phones[0].tel}">${BIZ.phones[0].text}</a> hoặc email <a href="mailto:${BIZ.email}">${BIZ.email}</a>.</p>
<h2>Địa chỉ sau sắp xếp đơn vị hành chính</h2>
<p>Từ ngày 01/7/2025, theo Nghị quyết 202/2025/QH15, tỉnh Bình Dương được sắp xếp vào TP Hồ Chí Minh. Địa chỉ của labo ghi theo đơn vị hành chính mới: phường Phú Lợi, TP Hồ Chí Minh (khu vực Thủ Dầu Một, Bình Dương cũ).</p>`;
}
export const LEGAL_FAQ = [
  ['KTV Dental Lab là doanh nghiệp nào?', `${BIZ.legal}, mã số thuế 3703340735, địa chỉ ${BIZ.address}.`],
  ['Làm sao kiểm tra mã số thuế của labo?', 'Nhập mã số thuế 3703340735 trên trang tra cứu người nộp thuế của Cục Thuế hoặc Cổng thông tin quốc gia về đăng ký doanh nghiệp.'],
  ['Chứng nhận ISO 13485 của labo tra cứu ở đâu?', `Trên website ${BIZ.iso.body} (isocert.org.vn), với số giấy chứng nhận ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid}.`],
  ['Vật liệu của labo có rõ nguồn gốc không?', 'Có. Mỗi dòng zirconia và hợp kim được công bố tên nhà sản xuất và xuất xứ; mẫu hợp kim Co-Cr có kết quả kiểm nghiệm thành phần tại Viện Vật liệu xây dựng.'],
  ['Phòng khám cần hoá đơn, chứng từ thì liên hệ thế nào?', `Trao đổi với labo khi bắt đầu hợp tác qua điện thoại ${BIZ.phones[0].text} hoặc email ${BIZ.email}.`],
];
export const LEGAL_SOURCES = ['iso13485', 'nq202'];

/* ---------- Phiếu chỉ định online (công cụ /phieu-chi-dinh/, chạy bằng src/rx.js) ---------- */
// Dữ liệu cho công cụ: lấy từ MATERIALS, TURNAROUND, BIZ để trang luôn khớp danh mục của labo.
export const rxData = () => ({
  zirconia: MATERIALS.filter((m) => m.kind === 'zirconia').map((m) => ({ name: m.name, ml: !!m.multilayer, years: m.years })),
  metal: MATERIALS.filter((m) => m.kind !== 'zirconia').map((m) => m.name),
  turnaround: TURNAROUND.map((t) => ({ what: t.what, time: t.time, max: t.max })),
  zalo: { url: BIZ.quote.zalo, label: BIZ.quote.label },
  email: BIZ.email,
  hours: BIZ.hours,
});
export function rxBody() {
  return `
<div class="rx" id="rx" data-rx>
<noscript><p class="more-blanks">Công cụ cần bật JavaScript. Phòng khám vẫn có thể gửi phiếu chỉ định của mình qua Zalo hoặc email như thường — xem <a href="/gui-ca/">cách gửi ca</a>.</p></noscript>
</div>
<h2>Phiếu này dùng thế nào?</h2>
<ul>
<li><strong>Không bắt buộc.</strong> Labo vẫn nhận phiếu chỉ định của phòng khám qua mọi kênh online; công cụ này chỉ giúp soạn nhanh, đủ ý và dễ đọc.</li>
<li><strong>Chọn răng trên sơ đồ</strong> (ký hiệu FDI: 11 – 48), chọn loại phục hình, vật liệu và màu, rồi bấm “Thêm vào phiếu”. Với cầu răng, bấm vào từng răng trong hạng mục để đánh dấu răng trụ hay nhịp.</li>
<li><strong>Gửi:</strong> sao chép và dán vào Zalo, gửi email, hoặc in / lưu PDF để kèm hộp dấu.</li>
<li><strong>Riêng tư:</strong> phiếu được soạn ngay trên trình duyệt, không gửi đi đâu cho đến khi bác sĩ tự gửi. Tên phòng khám và bác sĩ được nhớ trên máy này cho lần sau; nên ghi mã bệnh nhân thay vì họ tên đầy đủ.</li>
</ul>
<p>Chưa chọn được dòng phôi? Chọn “Labo đề xuất” và ghi yêu cầu (thẩm mỹ, chịu lực, bảo hành) — hoặc xem <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>. Cách lấy dấu, so màu: <a href="/gui-ca/">cách gửi ca</a>.</p>`;
}
export const RX_FAQ = [
  ['Có bắt buộc dùng phiếu chỉ định online của labo không?', 'Không. Labo nhận phiếu chỉ định của phòng khám qua mọi kênh online; phiếu online chỉ là công cụ soạn nhanh, không bắt buộc.'],
  ['Thông tin trên phiếu có được lưu lên máy chủ không?', 'Không. Phiếu được soạn trên trình duyệt của bác sĩ và chỉ được gửi khi bác sĩ tự dán vào Zalo, gửi email hoặc in ra. Tên phòng khám, bác sĩ được nhớ trên chính máy đó cho lần sau.'],
  ['Gửi phiếu cho labo bằng cách nào?', `Bấm “Sao chép, mở Zalo” rồi dán vào khung chat Zalo ${BIZ.quote.label}; hoặc bấm “Gửi email” để mở email soạn sẵn đến ${BIZ.email}; hoặc in, lưu PDF để kèm dấu.`],
  ['Thời gian sản xuất trên phiếu tính thế nào?', `Theo bảng thời gian sản xuất của labo, tính từ lúc labo nhận hàng: ${TURNAROUND.map((t) => `${t.what.toLowerCase()} — ${t.time}`).join('; ')}.`],
];
