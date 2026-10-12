// Nội dung các trang con của ktvlab.com — sửa ở đây rồi chạy build.sh (hoặc: node pages/build.mjs).
//
// Nguyên tắc nội dung:
// - Thông tin về labo chỉ lấy từ những gì labo đã công bố (xuất xứ, hãng, bảo hành, ISO, địa chỉ,
//   giờ làm việc, thời gian sản xuất, khu vực giao nhận).
// - Thông số vật liệu chỉ ghi khi có nguồn của hãng (liệt kê ở SOURCES); hãng không công bố thì mô tả
//   định tính, không tự đặt số.
// - Hướng dẫn lâm sàng ghi rõ là tham khảo, kèm nguồn; quyết định cuối cùng thuộc về bác sĩ.
// - Không dùng từ ngữ tuyệt đối ("tốt nhất", "số 1"…).

export const SITE = 'https://ktvlab.com';
export const BIZ = {
  name: 'KTV Dental Lab',
  legal: 'CÔNG TY TNHH MTV KTV',
  address: '614/18/21 Lê Hồng Phong, phường Phú Lợi, TP Hồ Chí Minh',
  area: 'khu vực Thủ Dầu Một, Bình Dương cũ',
  quote: { tel: '0772829989', label: '077 282 9989', zalo: 'https://zalo.me/0772829989' },
  phones: [
    { label: 'Cố định', tel: '02746514429', text: '0274 651 4429' },
    { label: 'Di động', tel: '0984241929', text: '098 424 1929' },
    { label: 'Di động', tel: '0904241929', text: '090 424 1929' },
  ],
  email: 'ktvlab8@gmail.com',
  hours: '8h00 – 20h00',
  delivery: 'Nhận ca khắp khu vực miền Nam; lấy và giao hàng nhanh tận nơi tại khu vực Bình Dương cũ.',
  iso: { std: 'ISO 13485:2016', body: 'ISOCERT', no: '9199302854823-MED', valid: '19/06/2026 – 18/06/2029' },
};

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
  lavaBro: ['Lava™ Plus High Translucency Zirconia — brochure, 3M', 'https://multimedia.3m.com/mws/media/1488179O/lava-plus-high-translucency-zirconia-brochure.pdf'],
  lavaSpec: ['Lava™ Plus High Translucency Zirconia — thông số 3M trên Dental Compare', 'https://www.dentalcompare.com/24992-CAD-CAM-Materials/33052-Lava-Plus-High-Translucency-Zirconia/'],
  cerconBro: ['Cercon® ht / xt — brochure, Dentsply Sirona', 'https://assets.dentsplysirona.com/flagship/en/explore/lab/dental-lab/cercon/LAB-Brochure-Cercon-ht-xt-EN-28376.pdf'],
  cerconML: ['Cercon® ht ML — Dentsply Sirona', 'https://www.dentsplysirona.com/en/discover/discover-by-brand/cercon-ht-ml.html'],
  ddbio: ['DD Bio ZX² — Dental Direkt GmbH', 'https://shop.dentaldirekt.de/en/products/zirconia-dd-bio-zx'],
  upcera: ['Upcera Dental — danh mục sản phẩm (Lab Management Today)', 'https://lmtmag.com/products/vendors/30904'],
};

/* ---------- Thời gian sản xuất (áp dụng cho mọi loại phục hình, tính từ lúc labo nhận hàng) ---------- */
export const TURNAROUND = [
  { what: 'Răng đơn lẻ, 2 – 3 đơn vị', time: '1 ngày', max: 'tối đa 36 giờ' },
  { what: 'Cầu răng 3 – 8 đơn vị', time: '2 ngày', max: 'tối đa 60 giờ' },
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
const PREP_TABLE = table(['Loại mão', 'Mài mặt nhai', 'Mài thành trục', 'Đường hoàn tất'], [
  ['<a href="/phuc-hinh/mao-full-zirconia/">Zirconia nguyên khối</a>', '1,0 – 1,5 mm (múi chức năng)<br>1,0 mm (múi không chức năng)', '0,8 – 1,0 mm', 'Chamfer, khoảng 0,5 – 0,8 mm'],
  ['<a href="/phuc-hinh/mao-su-dap-su/">Sứ – kim loại</a>', '1,5 – 2,0 mm (múi chức năng)<br>1,0 – 1,5 mm (múi không chức năng)<br>Rìa cắn 2,0 mm', 'Đủ chỗ cho sườn kim loại ~1,0 mm và sứ ~1,5 mm', '—'],
  ['<a href="/phuc-hinh/mao-full-kim-loai/">Toàn kim loại</a>', '1,5 mm (múi chức năng)<br>1,0 mm (múi không chức năng)', '0,5 – 1,0 mm', '—'],
  ['Toàn sứ đắp sứ', '2,0 mm (múi chức năng)<br>1,5 mm (múi không chức năng)', '1,2 – 1,5 mm', '1,0 mm (chamfer hoặc shoulder)'],
], 'wide');
const PREP_NOTE = '<p class="note">Số liệu tham khảo theo tài liệu giảng dạy phục hình của Đại học Iowa; độ thuôn tổng lý tưởng của cùi khoảng 10 – 20°. Bác sĩ quyết định theo lâm sàng và hướng dẫn của hãng vật liệu.</p>';

const SEND_CASE = `<ul>
<li><strong>Dấu hoặc file scan</strong> (STL/PLY) của hàm làm việc, hàm đối diện và khớp cắn.</li>
<li><strong>Màu răng</strong> theo bảng màu VITA, kèm ảnh chụp răng kế bên với cây so màu nếu có — đặc biệt với răng trước.</li>
<li><strong>Vật liệu và dòng phôi</strong> mong muốn; nếu chưa chắc, ghi yêu cầu (thẩm mỹ, chịu lực, chi phí) để labo tư vấn.</li>
<li>Ghi chú đặc biệt: răng trụ cầu, nhịp cầu, độ dày hạn chế, khớp cắn sâu, nghiến răng…</li>
</ul>`;

const ZR_CEMENT = `<p>Zirconia không xoi mòn bằng axit HF và không silane hoá được như sứ thuỷ tinh (lithium disilicate). Hai cách gắn thường dùng:</p>
<ul>
<li><strong>Xi măng thông thường</strong> (glass ionomer, glass ionomer biến tính nhựa) khi cùi có đủ lưu giữ và kháng lực.</li>
<li><strong>Xi măng nhựa</strong> khi cùi ngắn hoặc thuôn nhiều: thổi cát mặt trong bằng Al₂O₃ 50 µm (khoảng 2,5 bar), sau đó dùng chất dán / primer có chứa <strong>MDP</strong>.</li>
</ul>`;

/* ---------- Vật liệu ---------- */
export const MATERIALS = [
  { slug: 'upcera', name: 'Upcera', kind: 'zirconia', country: 'Trung Quốc', maker: 'Shenzhen Upcera Dental Technology', years: 3,
    img: '/assets/img/blanks/upcera.webp', imgAlt: 'Phôi zirconia Upcera TT-One', multilayer: false,
    lead: 'Phôi zirconia của Shenzhen Upcera Dental Technology (Trung Quốc) — lựa chọn có chi phí hợp lý cho răng sứ không kim loại. Bảo hành 3 năm.',
    about: `<p>Upcera là nhà sản xuất phôi zirconia và vật liệu CAD/CAM của Trung Quốc. Danh mục zirconia của hãng gồm nhiều dòng, ví dụ <strong>Upcera ST</strong> (độ trong cao, có loại tiền nhuộm màu và loại nhiều lớp) và <strong>Upcera TT-One</strong> (phôi khối trắng, phôi tiền nhuộm màu và phôi nhiều lớp).</p>
<p>Trong 6 dòng zirconia tại KTV Dental Lab, Upcera là dòng phù hợp khi phòng khám cần răng sứ không kim loại với chi phí hợp lý.</p>`,
    specs: [['Vật liệu', 'Zirconia'], ['Dòng sản phẩm của hãng', 'ST (Color, Multilayer, White), TT-One (White, Pre-shade, Multilayer)'], ['Mô tả của hãng', 'Độ bền cao, độ trong cao; dòng Multilayer có chuyển màu nhiều lớp'], ['Bảo hành tại KTV', '<strong>3 năm</strong>']],
    specsNote: 'Hãng không công bố số liệu độ bền / độ trong ở nguồn chúng tôi tham khảo, nên trang này chỉ ghi mô tả của hãng.',
    choose: 'Răng sứ không kim loại cần tối ưu chi phí; mão đơn lẻ và cầu ngắn. Khi cần bảo hành dài hơn, cân nhắc <a href="/vat-lieu/katana/">Katana</a>, <a href="/vat-lieu/ddbio/">DDBio</a>, <a href="/vat-lieu/cercon/">Cercon</a> hoặc <a href="/vat-lieu/lava/">Lava</a>.',
    faq: [['Răng sứ Upcera bảo hành bao lâu?', 'Tại KTV Dental Lab, phục hình zirconia Upcera được bảo hành 3 năm.'],
      ['Upcera có phôi nhiều lớp không?', 'Có. Theo danh mục của hãng, Upcera có các dòng nhiều lớp như ST Multilayer và TT-One Multilayer.']],
    sources: ['upcera'] },

  { slug: 'unc', name: 'UNC', kind: 'zirconia', country: 'Hàn Quốc', maker: 'U&C International Co., Ltd', years: 3,
    img: '/assets/img/blanks/unc.webp', imgAlt: 'Phôi zirconia UNC Razor', multilayer: true,
    lead: 'Phôi zirconia của U&C International (Hàn Quốc), có cả phôi một màu và phôi Multilayer nhiều lớp. Bảo hành 3 năm.',
    about: `<p>UNC là thương hiệu zirconia của <strong>U&C International Co., Ltd</strong> (Ansan, Hàn Quốc). Hãng công bố hệ thống quản lý chất lượng đạt ISO 13485:2016 và ISO 9001:2015, phôi đường kính Ø98 mm cho máy phay hệ mở — ví dụ dòng <strong>Razor Zirconia</strong>.</p>
<p>Bên cạnh phôi một màu, UNC có dòng <strong>Multilayer</strong> nhiều lớp màu, phù hợp cho mão zirconia nguyên khối cần chuyển màu tự nhiên.</p>`,
    specs: [['Vật liệu', 'Zirconia'], ['Kích thước phôi', 'Ø98 mm (máy phay hệ mở)'], ['Dòng nhiều lớp', 'Có (Multilayer)'], ['Chứng nhận của hãng', 'ISO 13485:2016, ISO 9001:2015'], ['Bảo hành tại KTV', '<strong>3 năm</strong>']],
    specsNote: 'Thông tin theo nhãn phôi của hãng; hãng không công bố số liệu độ bền / độ trong ở nguồn chúng tôi tham khảo.',
    choose: 'Răng sứ không kim loại chi phí hợp lý, có lựa chọn Multilayer cho răng trước. Cần bảo hành dài hơn: <a href="/vat-lieu/katana/">Katana</a>, <a href="/vat-lieu/cercon/">Cercon</a>, <a href="/vat-lieu/lava/">Lava</a>.',
    faq: [['Răng sứ UNC bảo hành bao lâu?', 'Tại KTV Dental Lab, phục hình zirconia UNC được bảo hành 3 năm.'],
      ['UNC khác Upcera thế nào?', 'Cả hai đều là zirconia có chi phí hợp lý, cùng bảo hành 3 năm tại KTV Dental Lab. UNC sản xuất tại Hàn Quốc, Upcera tại Trung Quốc; cả hai đều có dòng nhiều lớp.']],
    sources: [] },

  { slug: 'katana', name: 'Katana', kind: 'zirconia', country: 'Nhật Bản', maker: 'Kuraray Noritake Dental Inc.', years: 5,
    img: '/assets/img/blanks/katana.webp', imgAlt: 'Hộp và phôi Katana Zirconia YML', multilayer: true,
    lead: 'Zirconia nhiều lớp của Kuraray Noritake Dental (Nhật Bản), với các dòng STML, UTML, HTML PLUS, YML. Bảo hành 5 năm.',
    about: `<p>KATANA™ Zirconia của <strong>Kuraray Noritake Dental</strong> (Nhật Bản) gồm nhiều dòng phôi khác nhau về độ trong và độ bền, phần lớn là phôi <strong>nhiều lớp</strong> chuyển màu từ cổ răng đến rìa cắn.</p>
<p>Dòng <strong>YML</strong> (Yttria Multi Layered) kết hợp ba loại zirconia có hàm lượng yttria khác nhau trong cùng một phôi: lớp men trên cùng trong hơn, các lớp thân bên dưới bền hơn. Nhờ vậy một phôi YML có thể dùng từ mão răng trước đến cầu dài.</p>`,
    specs: null,
    specsTable: table(['Dòng Katana', 'Độ bền uốn', 'Độ trong', 'Chỉ định chính (theo hãng)'], [
      ['YML', 'Men 750 MPa · Thân 1 1.000 MPa · Thân 2–3 1.100 MPa', '49% · 47% · 45%', 'Mão, cầu nguyên khối, sườn cắt lớp (cut-back), cầu dài'],
      ['HTML PLUS', '1.150 MPa', '45%', 'Mão, cầu nguyên khối, sườn'],
      ['STML', '748 MPa', '49%', 'Mão; cầu nguyên khối đến 3 đơn vị'],
      ['UTML', '557 MPa', '51%', 'Răng trước: mão, cầu đến 3 đơn vị'],
      ['HT', '1.125 MPa', '45%', 'Sườn; mão và cầu nguyên khối răng trước; inlay, onlay, veneer'],
    ], 'wide') + `<p class="note">Theo Kuraray Noritake Dental. Với YML, hãng hướng dẫn độ dày tối thiểu 0,4 mm (răng trước) / 0,5 mm (răng sau) ở nửa dưới phôi, và tối thiểu 0,8 mm nếu nằm ở nửa trên phôi; cầu từ 4 đơn vị cần đặt ít nhất 50% tiết diện nối ở nửa dưới phôi; tối đa 2 nhịp giữa 2 trụ. Màu: 14 màu theo bảng VITA classical.</p>`,
    choose: 'Khi cần cân bằng giữa thẩm mỹ và độ bền trong cùng một phôi (YML), răng trước cần độ trong cao (UTML, STML), hoặc cầu dài (YML, HTML PLUS). Labo tư vấn dòng phù hợp theo vị trí và số đơn vị.',
    faq: [['Katana STML, UTML và YML khác nhau thế nào?', 'UTML trong nhất (51%) nhưng độ bền thấp hơn (557 MPa), chỉ định cho răng trước; STML cân bằng (49%, 748 MPa), cầu đến 3 đơn vị; YML có nhiều lớp với độ bền tăng dần từ 750 MPa (lớp men) đến 1.100 MPa (lớp thân), dùng được cho cầu dài.'],
      ['Răng sứ Katana bảo hành bao lâu?', 'Tại KTV Dental Lab, phục hình zirconia Katana được bảo hành 5 năm.'],
      ['Mão Katana nên gắn bằng xi măng gì?', 'Như các loại zirconia khác: xi măng thông thường khi cùi đủ lưu giữ; xi măng nhựa kèm thổi cát và primer chứa MDP khi cùi ngắn. Xem phần gắn mão ở trang <a href="/phuc-hinh/mao-full-zirconia/">mão zirconia nguyên khối</a>.']],
    sources: ['katana', 'katanaYML'] },

  { slug: 'ddbio', name: 'DDBio', kind: 'zirconia', country: 'Đức', maker: 'Dental Direkt GmbH', years: 5,
    img: '/assets/img/blanks/ddbio.webp', imgAlt: 'Phôi zirconia DD Bio ZX² của Dental Direkt', multilayer: false,
    lead: 'Zirconia 3Y-TZP sản xuất tại Đức của Dental Direkt GmbH, độ bền uốn 1.150 ± 150 MPa. Bảo hành 5 năm.',
    about: `<p>DD Bio là dòng zirconia của <strong>Dental Direkt GmbH</strong>, sản xuất tại Đức. Phôi <strong>DD Bio ZX²</strong> là zirconia 3Y-TZP-LA độ trong cao, có độ bền cao nên được hãng chỉ định cho cả mão, cầu dài và sườn sứ đắp.</p>`,
    specs: [['Vật liệu', '3Y-TZP-LA (zirconia độ trong cao)'], ['Độ bền uốn', '1.150 ± 150 MPa (DIN EN ISO 6872)'], ['Độ dai gãy (K<sub>IC</sub>)', '> 8 MPa√m'], ['Hệ số giãn nở nhiệt', '~10,6 × 10⁻⁶ K⁻¹ (25 – 500 °C)'], ['Màu', '16 màu VITA và 3 màu bleach (dùng dung dịch nhuộm DD Shade Concept®)'], ['Bảo hành tại KTV', '<strong>5 năm</strong>']],
    specsNote: 'Theo Dental Direkt (DD Bio ZX²).',
    indications: ['Mão giải phẫu thu nhỏ (làm sườn để đắp sứ) và mão nguyên khối răng sau', 'Cầu sườn hoặc cầu nguyên khối, đến 14 đơn vị', 'Mão chính telescope, abutment lai (hybrid), thanh bar'],
    choose: 'Mão và cầu chịu lực vùng răng sau, cầu nhiều đơn vị, hoặc sườn zirconia cho <a href="/phuc-hinh/mao-su-dap-su/">mão sứ đắp sứ</a>.',
    faq: [['Răng sứ DDBio có bền không?', 'Theo Dental Direkt, DD Bio ZX² có độ bền uốn 1.150 ± 150 MPa và độ dai gãy trên 8 MPa√m, được hãng chỉ định cho cầu đến 14 đơn vị.'],
      ['Răng sứ DDBio bảo hành bao lâu?', 'Tại KTV Dental Lab, phục hình zirconia DDBio được bảo hành 5 năm.']],
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
    specsTable: table(['Dòng Cercon', 'Độ bền uốn', 'Độ trong', 'Chỉ định chính (theo hãng)'], [
      ['Cercon ht', '1.200 MPa', '41%', 'Mão, mão chính telescope, cầu nhiều đơn vị (tối đa 2 nhịp giữa 2 trụ) — răng trước và răng sau'],
      ['Cercon xt', '750 MPa', '49%', 'Mão; cầu 3 đơn vị đến răng cối nhỏ thứ hai (không dùng cầu 3 đơn vị vùng răng cối lớn)'],
      ['Cercon ht ML', '1.200 → 750 MPa (ngà → rìa cắn)', '41 – 49%', 'Mão, cầu nhiều đơn vị — răng trước và răng sau'],
    ], 'wide') + '<p class="note">Theo Dentsply Sirona; độ trong đo trên đĩa trắng bằng máy đo độ mờ (haze meter). Màu: 16 màu VITA, trắng và BL2. Thiêu kết ở 1.500 °C.</p>',
    choose: 'Cầu nhiều đơn vị cần độ bền (ht), mão răng trước cần độ trong (xt), hoặc mão nguyên khối có chuyển màu tự nhiên (ht ML). Bảo hành 7 năm.',
    faq: [['Cercon ht và Cercon xt khác nhau thế nào?', 'Theo Dentsply Sirona, Cercon ht có độ bền uốn 1.200 MPa và độ trong 41%; Cercon xt có độ bền 750 MPa nhưng độ trong 49%. Cercon xt không dùng cho cầu 3 đơn vị vùng răng cối lớn.'],
      ['Răng sứ Cercon bảo hành bao lâu?', 'Tại KTV Dental Lab, phục hình zirconia Cercon được bảo hành 7 năm.']],
    sources: ['cerconBro', 'cerconML'] },

  { slug: 'lava', name: 'Lava', kind: 'zirconia', country: 'Mỹ', maker: 'Solventum (3M)', years: 15,
    img: '/assets/img/blanks/lava.webp', imgAlt: 'Phôi zirconia Lava Plus độ trong cao', multilayer: false,
    lead: 'Lava™ Plus — zirconia độ trong cao của 3M (nay thuộc Solventum), độ bền uốn 1.100 MPa. Bảo hành 15 năm, dài nhất tại KTV Dental Lab.',
    about: `<p>Lava™ là dòng zirconia của <strong>3M</strong>, nay thuộc <strong>Solventum</strong>. Phôi <strong>Lava™ Plus High Translucency Zirconia</strong> là zirconia độ trong cao, có cấu trúc hạt mịn (kích thước hạt trung bình dưới 0,5 µm sau thiêu kết), dùng được cho mão nguyên khối, sườn sứ đắp và cầu nhiều đơn vị.</p>`,
    specs: [['Vật liệu', 'Zirconia độ trong cao'], ['Độ bền uốn', '1.100 MPa'], ['Kích thước hạt', '< 0,5 µm (trung bình, sau thiêu kết)'], ['Độ dày thành tối thiểu', '0,5 mm (giá trị hãng nêu cho cầu nhiều đơn vị vùng răng sau)'], ['Màu', '16 màu VITA classical A1 – D4 và 2 màu bleach (dung dịch nhuộm)'], ['Bảo hành tại KTV', '<strong>15 năm</strong>']],
    specsNote: 'Theo 3M (brochure Lava™ Plus và thông số sản phẩm).',
    indications: ['Mão răng trước và răng sau; mão liên kết đến 4 đơn vị', 'Cầu 3 – 4 đơn vị, cầu dài và cầu cong, cầu đèo (cantilever)', 'Cầu inlay/onlay, cầu dán Maryland răng trước', 'Mão trên abutment implant, cầu 3 đơn vị trên 2 implant', 'Nguyên khối hoặc đắp sứ một phần / toàn phần'],
    choose: 'Khi phòng khám cần thời hạn bảo hành dài nhất tại labo (15 năm), cùng phạm vi chỉ định rộng từ mão đơn lẻ đến cầu dài.',
    faq: [['Răng sứ Lava bảo hành bao lâu?', 'Tại KTV Dental Lab, phục hình zirconia Lava được bảo hành 15 năm — dài nhất trong các dòng vật liệu của labo.'],
      ['Lava Plus có làm được cầu dài không?', 'Có. Theo 3M, Lava Plus được chỉ định cho cầu 3 – 4 đơn vị, cầu dài và cầu cong, cầu đèo, và cầu trên implant.']],
    sources: ['lavaBro', 'lavaSpec'] },

  { slug: 'ni-cr', name: 'Ni-Cr', kind: 'metal', country: 'Đức / Mỹ', maker: 'Eisenbacher Dentalwaren ED · Aalba Dent', years: null,
    img: '/assets/img/products/pfm-lg.webp', imgAlt: 'Mão sứ trên sườn kim loại, cắt mở thấy sườn', multilayer: false,
    lead: 'Hợp kim nickel – chrome của Eisenbacher Dentalwaren ED (Đức) và Aalba Dent (Mỹ), làm sườn răng sứ kim loại và mão toàn kim loại.',
    about: `<p><strong>Ni-Cr</strong> (nickel – chrome) là hợp kim không quý, được dùng lâu đời làm <strong>sườn răng sứ kim loại</strong> và <strong>mão toàn kim loại</strong> nhờ cứng, bền và chi phí hợp lý. KTV Dental Lab dùng hợp kim của Eisenbacher Dentalwaren ED (Đức) và Aalba Dent (Mỹ).</p>
<h3>Lưu ý dị ứng nickel</h3>
<p>Dị ứng nickel khá phổ biến trong cộng đồng — các khảo sát thử áp da ghi nhận khoảng 10 – 30% ở nữ và 1 – 3% ở nam. Với bệnh nhân có tiền sử dị ứng nickel (ví dụ dị ứng khuyên tai, dây đồng hồ), bác sĩ nên cân nhắc vật liệu khác như <a href="/vat-lieu/co-cr/">Co-Cr</a> (kiểm tra thành phần) hoặc <a href="/phuc-hinh/mao-full-zirconia/">zirconia</a>.</p>`,
    specs: [['Loại', 'Hợp kim không quý nickel – chrome'], ['Hãng', 'Eisenbacher Dentalwaren ED (Đức), Aalba Dent (Mỹ)'], ['Dùng cho', 'Sườn mão sứ đắp sứ, mão toàn kim loại, inlay/onlay, cùi giả kim loại'], ['Bảo hành tại KTV', '<strong>Theo thỏa thuận</strong> với phòng khám']],
    specsNote: '',
    choose: 'Răng sau cần độ bền và chi phí hợp lý; mão toàn kim loại khi khoảng phục hình hạn chế. Tránh dùng cho bệnh nhân dị ứng nickel.',
    faq: [['Răng sứ Ni-Cr có gây đen viền nướu không?', 'Sườn kim loại có thể làm vùng cổ răng hơi tối hoặc lộ viền xám khi nướu co. Khi thẩm mỹ là ưu tiên, bác sĩ thường chọn sườn hoặc mão zirconia.'],
      ['Răng sứ kim loại bảo hành bao lâu?', 'Răng sứ kim loại (Ni-Cr, Co-Cr) tại KTV Dental Lab được bảo hành theo thỏa thuận với phòng khám.']],
    sources: ['nickel'] },

  { slug: 'co-cr', name: 'Co-Cr', kind: 'metal', country: 'Đức', maker: 'Eisenbacher Dentalwaren ED', years: null,
    img: '/assets/img/products/metal-lg.webp', imgAlt: 'Mão răng toàn kim loại', multilayer: false,
    lead: 'Hợp kim cobalt – chrome của Eisenbacher Dentalwaren ED (Đức), làm sườn răng sứ kim loại và mão toàn kim loại.',
    about: `<p><strong>Co-Cr</strong> (cobalt – chrome) là hợp kim không quý có thành phần chính là cobalt và chrome, dùng làm <strong>sườn răng sứ kim loại</strong> và <strong>mão toàn kim loại</strong>. KTV Dental Lab dùng hợp kim Co-Cr của Eisenbacher Dentalwaren ED (Đức).</p>
<p>Với bệnh nhân dị ứng nickel, Co-Cr thường được cân nhắc thay cho Ni-Cr; bác sĩ có thể đề nghị labo cung cấp thông số thành phần của hợp kim để kiểm tra trước khi chỉ định.</p>`,
    specs: [['Loại', 'Hợp kim không quý cobalt – chrome'], ['Hãng', 'Eisenbacher Dentalwaren ED (Đức)'], ['Dùng cho', 'Sườn mão sứ đắp sứ, mão toàn kim loại, inlay/onlay, cùi giả kim loại'], ['Bảo hành tại KTV', '<strong>Theo thỏa thuận</strong> với phòng khám']],
    specsNote: '',
    choose: 'Răng sứ kim loại cho bệnh nhân cần tránh nickel (sau khi kiểm tra thành phần hợp kim), hoặc khi bác sĩ ưu tiên hợp kim cobalt – chrome.',
    faq: [['Co-Cr khác Ni-Cr thế nào?', 'Ni-Cr có thành phần chính là nickel và chrome; Co-Cr có thành phần chính là cobalt và chrome. Co-Cr thường được cân nhắc cho bệnh nhân dị ứng nickel — nên kiểm tra thông số thành phần hợp kim trước khi chỉ định.'],
      ['Răng sứ Co-Cr bảo hành bao lâu?', 'Răng sứ kim loại tại KTV Dental Lab được bảo hành theo thỏa thuận với phòng khám.']],
    sources: ['nickel'] },
];

const zr = MATERIALS.filter((m) => m.kind === 'zirconia');
const ml = MATERIALS.filter((m) => m.multilayer);
const bySlug = (s) => MATERIALS.find((m) => m.slug === s);
const link = (m) => `<a href="/vat-lieu/${m.slug}/">${m.name}</a>`;
const list = (arr) => arr.map(link).join(' · ');

/* ---------- Phục hình ---------- */
export const PRODUCTS = [
  { slug: 'mao-su-dap-su', name: 'Mão sứ đắp sứ', short: 'Ni-Cr · Co-Cr · Zirconia',
    img: '/assets/img/products/pfm-lg.webp', thumb: '/assets/img/products/pfm.webp', imgAlt: 'Mão sứ đắp sứ trên sườn kim loại, cắt mở thấy sườn',
    title: 'Mão sứ đắp sứ trên sườn kim loại & Zirconia',
    lead: 'Sườn chịu lực bên trong, sứ đắp nhiều lớp bên ngoài. KTV Dental Lab làm mão sứ đắp sứ trên sườn Ni-Cr, Co-Cr và Zirconia.',
    body: `
<h2>Mão sứ đắp sứ là gì?</h2>
<p>Mão sứ đắp sứ gồm hai phần: <strong>sườn</strong> chịu lực ôm sát cùi răng, và <strong>lớp sứ</strong> được kỹ thuật viên đắp thủ công từng lớp lên sườn rồi nung. Nhờ đắp nhiều lớp, màu và độ trong của mão có thể điều chỉnh theo từng vùng — từ cổ răng, thân răng đến rìa cắn.</p>
<h2>Sườn kim loại hay sườn zirconia?</h2>
${table(['', 'Sườn kim loại (Ni-Cr, Co-Cr)', 'Sườn zirconia'], [
  ['Màu sườn', 'Xám kim loại — cần lớp sứ che (opaque)', 'Trắng — không lộ ánh xám ở cổ răng'],
  ['Thẩm mỹ', 'Tốt; có thể lộ viền tối khi nướu co', 'Tốt hơn ở vùng răng trước'],
  ['Kim loại trong miệng', 'Có (lưu ý bệnh nhân dị ứng nickel với Ni-Cr)', 'Không'],
  ['Chi phí', 'Hợp lý', 'Cao hơn'],
])}
<h2>Độ bền lâu dài: số liệu nghiên cứu</h2>
<p>Tổng quan hệ thống của Sailer và cộng sự (2015, <em>Dental Materials</em>) ước tính tỉ lệ tồn tại sau 5 năm của mão sứ – kim loại khoảng 95%. Mão sứ đắp trên sườn zirconia bị mất do <strong>vỡ lớp sứ đắp</strong> thường hơn mão sứ – kim loại (khoảng 3,2% so với 0,3% sau 5 năm). Vì vậy với răng hàm chịu lực lớn, nhiều bác sĩ chọn <a href="/phuc-hinh/mao-full-zirconia/">mão zirconia nguyên khối</a> — không có lớp sứ đắp.</p>
<h2>Hướng dẫn mài cùi tham khảo</h2>
${PREP_TABLE}
${PREP_NOTE}
<h2>Gửi ca cho labo</h2>
${SEND_CASE}
<h2>Bảo hành</h2>
<p>Sườn zirconia bảo hành theo dòng phôi sử dụng; răng sứ kim loại (Ni-Cr, Co-Cr) bảo hành theo thỏa thuận với phòng khám. Xem <a href="/bao-hanh/">bảng bảo hành</a>.</p>`,
    faq: [['Khi nào nên chọn mão sứ đắp sứ thay vì zirconia nguyên khối?', 'Khi cần thẩm mỹ theo từng lớp màu (đặc biệt răng trước), hoặc khi bác sĩ muốn dùng sườn kim loại với chi phí hợp lý. Với răng hàm chịu lực lớn, zirconia nguyên khối giúp tránh nguy cơ mẻ lớp sứ đắp.'],
      ['Mão sứ kim loại có bị đen viền nướu không?', 'Sườn kim loại có thể làm vùng cổ răng hơi tối hoặc lộ viền xám khi nướu co. Sườn zirconia khắc phục được nhược điểm này.']],
    sources: ['sailer', 'iowa'] },

  { slug: 'mao-full-zirconia', name: 'Mão Full màu', short: zr.map((m) => m.name).join(' · '),
    img: '/assets/img/products/zirconia-lg.webp', thumb: '/assets/img/products/zirconia.webp', imgAlt: 'Mão răng zirconia nguyên khối (full màu)',
    title: 'Mão zirconia nguyên khối (Full màu)',
    lead: `Phay nguyên khối từ phôi zirconia, nhuộm màu và nướng bóng — không có lớp sứ đắp. KTV Dental Lab làm mão full màu trên 6 dòng phôi: ${zr.map((m) => m.name).join(', ')}.`,
    body: `
<h2>Mão full màu là gì?</h2>
<p>Mão full màu (zirconia nguyên khối, <em>full-contour</em>) được phay trọn hình răng từ một phôi zirconia, sau đó thiêu kết, nhuộm màu và nướng bóng. Vì không có lớp sứ đắp bên ngoài nên loại bỏ nguy cơ <strong>mẻ lớp sứ đắp</strong> — biến chứng thường gặp của mão sứ đắp sứ.</p>
<h2>Ưu điểm</h2>
<ul>
<li><strong>Bền</strong>: nhiều dòng zirconia có độ bền uốn trên 1.000 MPa theo công bố của hãng.</li>
<li><strong>Mài ít hơn</strong> so với mão sứ – kim loại: mặt nhai khoảng 1,0 – 1,5 mm thay vì 1,5 – 2,0 mm.</li>
<li><strong>Không kim loại</strong>: không lộ viền xám ở cổ răng.</li>
</ul>
<h2>6 dòng phôi zirconia tại KTV Dental Lab</h2>
${table(['Dòng', 'Xuất xứ', 'Nhà sản xuất', 'Bảo hành'], zr.map((m) => [link(m), m.country, m.maker, `${m.years} năm`]))}
<p>Xem bảng <a href="/vat-lieu/so-sanh-zirconia/">so sánh độ bền, độ trong các dòng zirconia</a>.</p>
<h2>Hướng dẫn mài cùi tham khảo</h2>
${PREP_TABLE}
${PREP_NOTE}
<h2>Gắn mão zirconia</h2>
${ZR_CEMENT}
<h2>Gửi ca cho labo</h2>
${SEND_CASE}`,
    faq: [['Mão zirconia nguyên khối có bị mẻ không?', 'Không có lớp sứ đắp nên không có nguy cơ mẻ lớp sứ đắp như mão sứ đắp sứ. Zirconia vẫn cần đủ độ dày tối thiểu theo hướng dẫn của hãng (ví dụ Katana YML: 0,4 – 0,5 mm ở vùng thân).'],
      ['Có cần xoi mòn axit trước khi gắn mão zirconia?', 'Không. Zirconia không xoi mòn được bằng axit HF. Nếu dùng xi măng nhựa, mặt trong mão được thổi cát Al₂O₃ 50 µm và dùng primer có chứa MDP.'],
      ['Nên chọn dòng zirconia nào?', 'Tuỳ vị trí, số đơn vị, yêu cầu thẩm mỹ và thời hạn bảo hành mong muốn (3 – 15 năm). Xem <a href="/vat-lieu/so-sanh-zirconia/">bảng so sánh</a> hoặc nhắn Zalo để labo tư vấn.']],
    sources: ['iowa', 'spear', 'katanaYML'] },

  { slug: 'mao-zirconia-multilayer', name: 'Mão Full Multilayer', short: 'Zirconia nhiều lớp',
    img: '/assets/img/products/multilayer-lg.webp', thumb: '/assets/img/products/multilayer.webp', imgAlt: 'Mão zirconia Multilayer chuyển màu nhiều lớp',
    title: 'Mão zirconia Multilayer (nhiều lớp màu)',
    lead: `Phôi zirconia nhiều lớp, màu và độ trong chuyển dần từ cổ răng đến rìa cắn như răng thật. Dòng Multilayer tại KTV Dental Lab: ${ml.map((m) => m.name).join(', ')}.`,
    body: `
<h2>Zirconia Multilayer khác zirconia thường thế nào?</h2>
<p>Phôi zirconia một màu có cùng màu và độ trong từ trên xuống dưới. Phôi <strong>Multilayer</strong> được ép nhiều lớp: vùng cổ răng đậm màu hơn, càng lên rìa cắn càng sáng và trong hơn. Mão phay từ phôi này có chuyển màu tự nhiên ngay từ phôi, giảm phụ thuộc vào nhuộm màu bề mặt.</p>
<p>Ở một số dòng, các lớp còn khác nhau về <strong>độ bền</strong>: lớp ngà bền hơn, lớp men trong hơn. Ví dụ theo hãng:</p>
${table(['Phôi', 'Lớp men / rìa cắn', 'Lớp thân / ngà'], [
  [`<a href="/vat-lieu/katana/">Katana YML</a>`, '750 MPa · độ trong 49%', '1.000 – 1.100 MPa · độ trong 45 – 47%'],
  [`<a href="/vat-lieu/cercon/">Cercon ht ML</a>`, '750 MPa', '1.200 MPa (độ trong cả phôi 41 – 49%)'],
])}
<p class="note">Vì lớp ngà bền hơn, các hãng khuyên đặt phần chịu lực (đặc biệt là vùng nối của cầu) ở phần thân/ngà của phôi. Ví dụ Katana YML: cầu từ 4 đơn vị cần ít nhất 50% tiết diện nối nằm ở nửa dưới phôi.</p>
<h2>Dòng phôi Multilayer tại KTV Dental Lab</h2>
<p>${list(ml)}.</p>
<h2>Khi nào chọn Multilayer?</h2>
<ul>
<li>Răng trước và các vùng thẩm mỹ, nơi màu sắc tự nhiên quan trọng.</li>
<li>Khi muốn ưu điểm của zirconia nguyên khối (không có lớp sứ đắp) nhưng thẩm mỹ cao hơn phôi một màu.</li>
<li>Cầu dài có chuyển màu: chọn dòng có lớp thân bền (ví dụ Katana YML, Cercon ht ML).</li>
</ul>
<h2>Gắn mão</h2>
${ZR_CEMENT}`,
    faq: [['Mão Multilayer có bền như zirconia thường không?', 'Tuỳ dòng phôi. Lớp men của phôi nhiều lớp thường trong hơn nhưng độ bền thấp hơn lớp ngà (ví dụ Katana YML: 750 MPa ở lớp men, 1.100 MPa ở lớp thân). Labo bố trí mão trong phôi sao cho vùng chịu lực nằm ở lớp bền.'],
      ['Răng trước nên dùng Multilayer không?', 'Multilayer phù hợp cho răng trước nhờ màu chuyển tự nhiên. Với yêu cầu độ trong cao hơn nữa, có thể cân nhắc các dòng chuyên cho răng trước như Katana UTML.']],
    sources: ['katana', 'katanaYML', 'cerconML'] },

  { slug: 'mao-full-kim-loai', name: 'Full kim loại', short: 'Ni-Cr · Co-Cr',
    img: '/assets/img/products/metal-lg.webp', thumb: '/assets/img/products/metal.webp', imgAlt: 'Mão răng toàn kim loại',
    title: 'Mão toàn kim loại Ni-Cr, Co-Cr',
    lead: 'Mão đúc hoàn toàn bằng hợp kim, không phủ sứ — mài ít, bền, chi phí hợp lý. KTV Dental Lab làm mão full kim loại bằng Ni-Cr và Co-Cr.',
    body: `
<h2>Mão toàn kim loại là gì?</h2>
<p>Mão toàn kim loại được làm hoàn toàn bằng hợp kim, không có lớp sứ phủ ngoài. Vì không cần chừa chỗ cho lớp sứ nên mão có thể làm mỏng, và cùi răng được mài ít hơn so với mão sứ – kim loại.</p>
<h2>Khi nào chọn?</h2>
<ul>
<li>Răng hàm ít yêu cầu thẩm mỹ, chịu lực nhai lớn.</li>
<li>Khoảng phục hình hạn chế (thân răng thấp, khoảng liên hàm hẹp).</li>
<li>Khi cần giải pháp bền với chi phí hợp lý.</li>
</ul>
<h2>Vật liệu</h2>
${table(['Hợp kim', 'Hãng', 'Ghi chú'], [
  ['<a href="/vat-lieu/ni-cr/">Ni-Cr</a>', 'Eisenbacher Dentalwaren ED (Đức), Aalba Dent (Mỹ)', 'Tránh cho bệnh nhân dị ứng nickel'],
  ['<a href="/vat-lieu/co-cr/">Co-Cr</a>', 'Eisenbacher Dentalwaren ED (Đức)', 'Thường cân nhắc khi cần tránh nickel (kiểm tra thành phần)'],
])}
<h2>Hướng dẫn mài cùi tham khảo</h2>
<p>Theo tài liệu giảng dạy phục hình của Đại học Iowa, mão toàn kim loại cần mài mặt nhai khoảng <strong>1,5 mm</strong> ở múi chức năng và <strong>1,0 mm</strong> ở múi không chức năng; thành trục <strong>0,5 – 1,0 mm</strong> — ít hơn so với mão sứ – kim loại (mặt nhai 1,5 – 2,0 mm).</p>
<h2>Gửi ca cho labo</h2>
${SEND_CASE}
<h2>Bảo hành</h2>
<p>Mão toàn kim loại bảo hành theo thỏa thuận với phòng khám.</p>`,
    faq: [['Mão toàn kim loại có ưu điểm gì so với mão sứ?', 'Mài ít mô răng hơn, không có lớp sứ nên không mẻ sứ, phù hợp khi khoảng phục hình hẹp. Nhược điểm là màu kim loại, không thẩm mỹ.']],
    sources: ['iowa', 'nickel'] },

  { slug: 'inlay-onlay', name: 'Inlay · Onlay', short: 'Kim loại · Zirconia',
    img: null, thumb: null, imgAlt: '',
    title: 'Inlay · Onlay kim loại và Zirconia',
    lead: 'Phục hình từng phần, giữ lại tối đa mô răng thật. KTV Dental Lab làm inlay, onlay bằng kim loại và Zirconia.',
    body: `
<h2>Inlay và onlay là gì?</h2>
${table(['', 'Inlay', 'Onlay'], [
  ['Vị trí', 'Nằm gọn trong lòng răng, giữa các múi', 'Phủ lên một hoặc nhiều múi răng'],
  ['Khi nào dùng', 'Lỗ sâu / miếng trám cũ lớn nhưng các múi còn chắc', 'Múi răng yếu hoặc mất một phần, cần được bảo vệ'],
  ['Mô răng phải mài', 'Ít', 'Nhiều hơn inlay, ít hơn mão toàn phần'],
])}
<p>Cả hai được labo chế tác ngoài miệng theo dấu hoặc file scan, sau đó bác sĩ gắn vào răng. Khi cần phủ toàn bộ mặt nhai, xem <a href="/phuc-hinh/overlay/">overlay</a>; khi răng mất quá nhiều mô, xem <a href="/phuc-hinh/mao-full-zirconia/">mão toàn phần</a>.</p>
<h2>Ưu điểm so với trám trực tiếp và mão</h2>
<ul>
<li>Bảo tồn mô răng hơn so với mài làm mão toàn phần.</li>
<li>Hình thể, điểm tiếp xúc và khớp cắn được hoàn thiện ngoài miệng, phù hợp với lỗ hổng lớn hơn miếng trám trực tiếp.</li>
</ul>
<h2>Vật liệu</h2>
<ul>
<li><strong>Zirconia</strong> — màu răng, bền. Nhiều dòng zirconia có chỉ định inlay/onlay theo hãng (ví dụ <a href="/vat-lieu/katana/">Katana</a>, <a href="/vat-lieu/lava/">Lava</a>).</li>
<li><strong>Kim loại</strong> (<a href="/vat-lieu/ni-cr/">Ni-Cr</a>, <a href="/vat-lieu/co-cr/">Co-Cr</a>) — vùng răng sau không cần thẩm mỹ.</li>
</ul>
<h2>Gửi ca cho labo</h2>
${SEND_CASE}`,
    faq: [['Inlay khác miếng trám thường thế nào?', 'Miếng trám thường được bác sĩ đắp trực tiếp trong miệng; inlay được labo chế tác ngoài miệng theo dấu hoặc file scan rồi gắn vào, nên kiểm soát hình thể và điểm tiếp xúc tốt hơn với lỗ hổng lớn.'],
      ['Khi nào nên làm onlay thay vì mão?', 'Khi múi răng yếu cần được bảo vệ nhưng phần thành răng còn tốt — onlay giữ lại nhiều mô răng hơn mão toàn phần.']],
    sources: ['katana', 'lavaBro'] },

  { slug: 'overlay', name: 'Overlay', short: 'Zirconia',
    img: '/assets/img/products/overlay-lg.webp', thumb: '/assets/img/products/overlay.webp', imgAlt: 'Overlay zirconia phủ mặt nhai',
    title: 'Overlay Zirconia phủ mặt nhai',
    lead: 'Phục hình phủ toàn bộ mặt nhai, giữ lại thành răng thật. KTV Dental Lab làm overlay bằng Zirconia.',
    body: `
<h2>Overlay là gì?</h2>
<p>Overlay (còn gọi là <em>table-top</em> hay occlusal veneer) là phục hình phủ lên <strong>toàn bộ mặt nhai</strong> của răng hàm, trong khi thành răng bên ngoài vẫn được giữ lại. So với mão toàn phần, overlay mài ít mô răng hơn và đường hoàn tất thường nằm trên nướu — dễ kiểm soát khi gắn.</p>
<h2>Khi nào dùng overlay?</h2>
<ul>
<li>Mặt nhai bị mòn hoặc mất chất nhiều nhưng thành răng còn tốt.</li>
<li>Phục hồi hình thể mặt nhai, tái lập khớp cắn mà không mài răng làm mão.</li>
<li>Răng có nhiều miếng trám cũ ở mặt nhai cần thay.</li>
</ul>
<h2>Vật liệu</h2>
<p>Zirconia — xem các <a href="/vat-lieu/so-sanh-zirconia/">dòng phôi zirconia</a> labo đang dùng. Overlay mỏng nên cần đảm bảo độ dày tối thiểu theo hướng dẫn của từng hãng phôi (ví dụ Katana YML: tối thiểu 0,5 mm vùng răng sau ở nửa dưới phôi).</p>
<h2>Gắn overlay zirconia</h2>
${ZR_CEMENT}
<h2>Gửi ca cho labo</h2>
${SEND_CASE}`,
    faq: [['Overlay khác onlay thế nào?', 'Onlay phủ một hoặc vài múi răng; overlay phủ toàn bộ mặt nhai.'],
      ['Overlay có cần mài nhiều không?', 'Ít hơn mão toàn phần vì giữ lại thành răng; mức mài mặt nhai phụ thuộc độ dày tối thiểu của vật liệu theo hướng dẫn hãng.']],
    sources: ['spear', 'katanaYML'] },

  { slug: 'cui-gia', name: 'Cùi giả', short: 'Kim loại · Chốt gài · Zirconia',
    img: '/assets/img/products/core-lg.webp', thumb: '/assets/img/products/core.webp', imgAlt: 'Cùi giả đúc kèm chốt (hình minh hoạ)',
    title: 'Cùi giả kim loại, chốt gài và Zirconia',
    lead: 'Tái tạo phần thân răng đã mất để làm nền giữ mão. KTV Dental Lab làm cùi giả kim loại, chốt gài và Zirconia.',
    body: `
<h2>Cùi giả là gì?</h2>
<p>Khi răng (thường là răng đã điều trị tuỷ) mất nhiều mô, không đủ chỗ bám cho mão, bác sĩ dùng <strong>cùi giả</strong>: một khối tái tạo phần thân răng, có chốt cắm vào ống tuỷ. Mão được làm trên cùi giả này.</p>
<h2>Vai trò của "đai" (ferrule)</h2>
<p>Theo tổng quan của Mamoun (2017, <em>J Adv Prosthodont</em>), yếu tố quyết định răng có bị gãy hay không là <strong>lượng mô răng thật còn lại</strong> phía trên đường hoàn tất — vùng "đai" khoảng <strong>1,5 – 2,0 mm</strong>. Chốt chủ yếu giúp hạn chế gãy khi mô răng vùng đai còn ít, hơn là để giữ cùi. Vì vậy khi mài, bác sĩ nên giữ lại tối đa mô răng ở vùng đai.</p>
<h2>Các loại cùi giả tại KTV Dental Lab</h2>
${table(['Loại', 'Đặc điểm', 'Phù hợp'], [
  ['Cùi giả kim loại', 'Chốt và cùi đúc liền một khối theo ống tuỷ', 'Răng mất nhiều mô, làm mão sứ – kim loại'],
  ['Chốt gài', 'Theo chỉ định của bác sĩ', 'Theo thiết kế ca'],
  ['Cùi giả Zirconia', 'Màu trắng, không kim loại', 'Mão toàn sứ ở vùng thẩm mỹ'],
])}
<h2>Gửi ca cho labo</h2>
<ul>
<li>Dấu ống tuỷ (hoặc chốt lấy dấu) và vùng cùi, cùng hàm đối diện, khớp cắn.</li>
<li>Loại cùi mong muốn và loại mão sẽ làm trên cùi.</li>
</ul>`,
    faq: [['Khi nào cần cùi giả?', 'Khi răng đã điều trị tuỷ mất nhiều mô, phần thân răng còn lại không đủ giữ mão. Quyết định dựa trên lượng mô răng thật còn lại, đặc biệt vùng "đai" 1,5 – 2,0 mm phía trên đường hoàn tất.'],
      ['Cùi giả zirconia khác cùi giả kim loại thế nào?', 'Cùi zirconia màu trắng, không kim loại, phù hợp làm nền cho mão toàn sứ ở vùng thẩm mỹ; cùi kim loại đúc liền chốt, thường dùng với mão sứ – kim loại.']],
    sources: ['mamoun'] },

  { slug: 'phuc-hinh-tren-implant', name: 'Phục hình trên Implant', short: 'Sứ kim loại & sứ không kim loại · theo chỉ định riêng',
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
  ['Xi măng thừa', 'Không có', 'Khó lấy hết, liên quan viêm quanh implant'],
  ['Mặt nhai', 'Có lỗ vít (kênh vít nghiêng giúp dời lỗ khỏi mặt ngoài)', 'Nguyên vẹn, dễ kiểm soát khớp cắn'],
  ['Khoảng liên hàm', 'Dùng được khi khoảng hẹp (tối thiểu ~4 mm)', '—'],
  ['Phù hợp', 'Cầu dài, cầu đèo, khi cần tháo lắp', 'Phục hình ngắn, đường hoàn tất ngang hoặc trên niêm mạc'],
], 'wide')}
<p class="note">Tổng hợp theo hướng dẫn của Nobel Biocare.</p>
<h2>Thông tin cần gửi kèm ca</h2>
<ul>
<li>Hệ implant, đường kính và kiểu kết nối.</li>
<li>Loại abutment và kiểu lưu giữ mão (bắt vít hoặc gắn xi măng).</li>
<li>Dấu hoặc file scan có scanbody / transfer, hàm đối diện, khớp cắn.</li>
<li>Vật liệu và màu răng mong muốn.</li>
</ul>
<h2>Bảo hành</h2>
<p>Phục hình trên implant được bảo hành như phục hình trên răng thật cùng dòng vật liệu — xem <a href="/bao-hanh/">bảng bảo hành</a>.</p>`,
    faq: [['Mão trên implant nên làm sứ – kim loại hay zirconia?', 'Cả hai đều có tỉ lệ tồn tại 5 năm trên 97% theo tổng quan của Pjetursson và cộng sự (2018). Zirconia thẩm mỹ hơn, không có kim loại; sứ – kim loại có tỉ lệ gãy vật liệu thấp hơn.'],
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
<li><a href="/phuc-hinh/overlay/">Overlay</a>, <a href="/phuc-hinh/inlay-onlay/">inlay · onlay</a>, <a href="/phuc-hinh/cui-gia/">cùi giả</a> zirconia và <a href="/phuc-hinh/phuc-hinh-tren-implant/">phục hình trên implant</a> theo chỉ định</li>
</ul>`
    : `<ul>
<li><a href="/phuc-hinh/mao-su-dap-su/">Sườn cho mão sứ đắp sứ (răng sứ kim loại)</a></li>
<li><a href="/phuc-hinh/mao-full-kim-loai/">Mão toàn kim loại</a></li>
<li><a href="/phuc-hinh/inlay-onlay/">Inlay · onlay</a> và <a href="/phuc-hinh/cui-gia/">cùi giả</a> kim loại</li>
</ul>`;
  const specs = m.specsTable || (m.specs ? table(['Thông số', 'Giá trị'], m.specs) + (m.specsNote ? `<p class="note">${m.specsNote}</p>` : '') : '');
  return `
<h2>${m.name} là gì?</h2>
${m.about}
<h2>Thông số ${m.kind === 'zirconia' ? 'kỹ thuật' : 'và ứng dụng'}</h2>
${specs}
${m.indications ? `<h2>Chỉ định theo hãng</h2>\n<ul>${m.indications.map((x) => `<li>${x}</li>`).join('')}</ul>` : ''}
<h2>Khi nào chọn ${m.name}?</h2>
<p>${m.choose}</p>
<h2>Dùng cho phục hình nào tại KTV Dental Lab?</h2>
${uses}
${m.kind === 'zirconia' ? `<h2>Gắn mão ${m.name}</h2>\n${ZR_CEMENT}` : ''}
<h2>Bảo hành</h2>
<p>Phục hình ${m.name} tại KTV Dental Lab được bảo hành ${war}. Phục hình trên implant bảo hành như phục hình trên răng thật cùng dòng vật liệu. Xem <a href="/bao-hanh/">bảng bảo hành tất cả dòng vật liệu</a>.</p>
<h2>So sánh với các dòng khác</h2>
<p>${m.kind === 'zirconia' ? `Các dòng zirconia khác tại labo: ${list(zr.filter((x) => x.slug !== m.slug))}. Xem <a href="/vat-lieu/so-sanh-zirconia/">bảng so sánh các dòng zirconia</a>.` : `Hợp kim còn lại: ${list(MATERIALS.filter((x) => x.kind === 'metal' && x.slug !== m.slug))}. Răng sứ không kim loại: ${list(zr)}.`}</p>`;
}

/* ---------- So sánh zirconia ---------- */
export function compareBody() {
  return `
<p>KTV Dental Lab dùng 6 dòng phôi zirconia. Bảng dưới tổng hợp thông số theo công bố của từng hãng (với các dòng có công bố số liệu) và thời hạn bảo hành tại labo.</p>
${table(['Dòng', 'Xuất xứ', 'Độ bền uốn (theo hãng)', 'Độ trong (theo hãng)', 'Nhiều lớp', 'Bảo hành'], [
  [link(bySlug('lava')), 'Mỹ', 'Lava Plus: 1.100 MPa', 'Độ trong cao (không công bố %)', '—', '<strong>15 năm</strong>'],
  [link(bySlug('cercon')), 'Đức', 'ht: 1.200 · xt: 750 · ht ML: 1.200 → 750 MPa', 'ht: 41% · xt: 49% · ht ML: 41 – 49%', 'Có (ht ML)', '<strong>7 năm</strong>'],
  [link(bySlug('katana')), 'Nhật Bản', 'YML: 750 – 1.100 · HTML PLUS: 1.150 · STML: 748 · UTML: 557 MPa', 'YML: 45 – 49% · STML: 49% · UTML: 51%', 'Có', '<strong>5 năm</strong>'],
  [link(bySlug('ddbio')), 'Đức', 'DD Bio ZX²: 1.150 ± 150 MPa', 'Độ trong cao (không công bố %)', '—', '<strong>5 năm</strong>'],
  [link(bySlug('unc')), 'Hàn Quốc', 'Không công bố trong nguồn tham khảo', '—', 'Có', '<strong>3 năm</strong>'],
  [link(bySlug('upcera')), 'Trung Quốc', 'Không công bố trong nguồn tham khảo', 'Hãng mô tả: độ trong cao', 'Có (ST, TT-One Multilayer)', '<strong>3 năm</strong>'],
], 'wide')}
<p class="note">Số liệu do mỗi hãng tự công bố theo phương pháp đo của họ, nên chỉ nên so sánh tương đối. Độ trong cao hơn thường đi kèm độ bền thấp hơn — đây là lý do phôi nhiều lớp đặt lớp trong ở rìa cắn và lớp bền ở vùng ngà.</p>
<h2>Chọn dòng zirconia theo ca</h2>
${table(['Nhu cầu', 'Gợi ý cân nhắc'], [
  ['Răng trước, cần độ trong cao', 'Katana UTML / STML, Cercon xt, phôi Multilayer'],
  ['Răng hàm chịu lực, mão đơn lẻ', 'Các dòng độ bền cao: Cercon ht, DDBio, Lava, Katana HTML PLUS / YML'],
  ['Cầu dài nhiều đơn vị', 'Dòng hãng chỉ định cho cầu dài: Katana YML / HTML PLUS, Cercon ht, DDBio (đến 14 đơn vị), Lava'],
  ['Thẩm mỹ chuyển màu tự nhiên, nguyên khối', 'Multilayer: Katana YML, Cercon ht ML, UNC, Upcera'],
  ['Bảo hành dài', 'Lava (15 năm), Cercon (7 năm)'],
  ['Tối ưu chi phí', 'Upcera, UNC (3 năm)'],
])}
<p>Labo tư vấn dòng phù hợp theo vị trí răng, số đơn vị, khớp cắn và yêu cầu thẩm mỹ — gọi hoặc nhắn Zalo <a href="tel:${BIZ.quote.tel}">${BIZ.quote.label}</a>.</p>`;
}
export const COMPARE_FAQ = [
  ['Dòng zirconia nào bảo hành lâu nhất?', 'Tại KTV Dental Lab, Lava được bảo hành 15 năm, tiếp theo là Cercon 7 năm, Katana và DDBio 5 năm, UNC và Upcera 3 năm.'],
  ['Zirconia càng trong thì càng yếu?', 'Nhìn chung có xu hướng như vậy: ví dụ Katana UTML có độ trong 51% với độ bền 557 MPa, còn HTML PLUS độ trong 45% với độ bền 1.150 MPa (theo Kuraray Noritake). Vì vậy cần chọn dòng theo vị trí răng và lực nhai.'],
];
export const COMPARE_SOURCES = ['katana', 'katanaYML', 'cerconBro', 'cerconML', 'ddbio', 'lavaBro', 'lavaSpec', 'upcera'];

export function turnaroundBody() {
  return `
<p>Thời gian sản xuất áp dụng cho <strong>mọi loại phục hình</strong> (sứ kim loại, zirconia, multilayer, inlay · onlay, overlay, cùi giả, phục hình trên implant) và được tính <strong>kể từ lúc labo nhận hàng</strong>.</p>
${turnaroundTable()}
<h2>Để ca về đúng hẹn</h2>
<ul>
<li>Gửi đủ dấu hoặc file scan hàm làm việc, hàm đối diện và khớp cắn.</li>
<li>Ghi rõ màu răng (bảng màu VITA), vật liệu / dòng phôi và ngày hẹn bệnh nhân.</li>
<li>Với implant: ghi hệ implant, loại abutment và kiểu lưu giữ.</li>
</ul>
<h2>Giờ làm việc</h2>
<p>${BIZ.hours}. Gọi <a href="tel:${BIZ.phones[0].tel}">${BIZ.phones[0].text}</a> hoặc nhắn Zalo <a href="${BIZ.quote.zalo}" target="_blank" rel="noopener">${BIZ.quote.label}</a> để gửi ca và nhận báo giá.</p>
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
<p>Thời hạn bảo hành phụ thuộc vào dòng vật liệu của phục hình.</p>
${table(['Dòng vật liệu', 'Loại', 'Xuất xứ', 'Nhà sản xuất', 'Bảo hành'], MATERIALS.map((m) => [link(m), m.kind === 'zirconia' ? 'Zirconia' : 'Hợp kim', m.country, m.maker, `<strong>${m.years ? m.years + ' năm' : 'Theo thỏa thuận'}</strong>`]), 'wide')}
<h2>Lưu ý</h2>
<ul>
<li><strong>Phục hình trên implant</strong> được bảo hành như phục hình trên răng thật cùng dòng vật liệu.</li>
<li><strong>Răng sứ kim loại (Ni-Cr, Co-Cr)</strong> bảo hành theo thỏa thuận với phòng khám.</li>
<li>Để biết điều kiện bảo hành chi tiết, vui lòng liên hệ labo.</li>
</ul>
<p>Muốn so sánh thêm độ bền, độ trong giữa các dòng zirconia? Xem <a href="/vat-lieu/so-sanh-zirconia/">bảng so sánh</a>.</p>`;
}

/* ---------- Câu hỏi thường gặp (trang chung) ---------- */
export const FAQ = [
  ['KTV Dental Lab nhận làm những loại phục hình nào?',
    `Mão sứ đắp sứ (sườn Ni-Cr, Co-Cr, Zirconia), mão zirconia nguyên khối (full màu), mão zirconia Multilayer, mão toàn kim loại, inlay · onlay, overlay, cùi giả và phục hình trên implant. <a href="/#phuc-hinh">Xem danh sách phục hình</a>.`],
  ['Labo đang dùng những dòng phôi zirconia nào?',
    `${zr.map((m) => `${link(m)} (${m.country})`).join(', ')}. <a href="/vat-lieu/so-sanh-zirconia/">So sánh các dòng zirconia</a>.`],
  ['Răng sứ được bảo hành bao lâu?',
    `Tuỳ dòng vật liệu: ${zr.map((m) => `${m.name} ${m.years} năm`).join(', ')}; răng sứ kim loại Ni-Cr, Co-Cr bảo hành theo thỏa thuận. <a href="/bao-hanh/">Xem bảng bảo hành</a>.`],
  ['Labo làm một ca mất bao lâu?',
    `Tính từ lúc labo nhận hàng, áp dụng cho mọi loại phục hình: ${TURNAROUND.map((t) => `${t.what.toLowerCase()} — ${t.time}${t.max ? ` (${t.max})` : ''}`).join('; ')}. <a href="/thoi-gian-san-xuat/">Xem chi tiết</a>.`],
  ['Labo nhận ca ở những khu vực nào?',
    'KTV Dental Lab nhận ca khắp khu vực miền Nam, và lấy – giao hàng nhanh tận nơi tại khu vực Bình Dương cũ.'],
  ['Giờ làm việc của labo?', `${BIZ.hours}.`],
  ['Phục hình trên implant được bảo hành thế nào?',
    'Phục hình trên implant được bảo hành như phục hình trên răng thật cùng dòng vật liệu.'],
  ['KTV Dental Lab có chứng nhận chất lượng gì?',
    `Hệ thống quản lý chất lượng của Công ty TNHH MTV KTV đạt ${BIZ.iso.std}, do ${BIZ.iso.body} chứng nhận (giấy chứng nhận số ${BIZ.iso.no}, hiệu lực ${BIZ.iso.valid}). Có thể <a href="https://isocert.org.vn/tra-cuu-chung-chi-iso" target="_blank" rel="noopener">tra cứu chứng chỉ trên website ISOCERT</a>.`],
  ['Làm sao để nhận báo giá?',
    `Gọi hoặc nhắn Zalo <a href="tel:${BIZ.quote.tel}">${BIZ.quote.label}</a> để nhận bảng báo giá mới nhất và tư vấn chọn vật liệu.`],
  ['Labo ở đâu?',
    `${BIZ.address} (${BIZ.area}). Điện thoại: ${BIZ.phones.map((p) => `<a href="tel:${p.tel}">${p.text}</a>`).join(', ')}.`],
  ['Răng sứ kim loại và răng sứ không kim loại khác nhau thế nào?',
    'Răng sứ kim loại có sườn hợp kim (Ni-Cr hoặc Co-Cr) bên trong, phủ sứ bên ngoài; chi phí hợp lý nhưng có thể lộ ánh xám ở cổ răng. Răng sứ không kim loại dùng zirconia, có màu trắng từ trong ra ngoài nên thẩm mỹ hơn và không có kim loại.'],
  ['Zirconia Multilayer khác zirconia thường thế nào?',
    'Phôi Multilayer có nhiều lớp màu chuyển dần từ cổ răng đến rìa cắn, nên răng làm ra có màu tự nhiên hơn phôi một màu. <a href="/phuc-hinh/mao-zirconia-multilayer/">Xem thêm về Multilayer</a>.'],
  ['Mão zirconia nên gắn bằng xi măng gì?',
    'Xi măng thông thường (glass ionomer, glass ionomer biến tính nhựa) khi cùi đủ lưu giữ; xi măng nhựa kèm thổi cát Al₂O₃ 50 µm và primer chứa MDP khi cùi ngắn hoặc thuôn. Zirconia không xoi mòn bằng axit HF.'],
  ['Labo phục vụ những ai?',
    'KTV Dental Lab sản xuất phục hình cho phòng khám nha khoa ở khu vực miền Nam và giao phục hình trực tiếp đến phòng khám.'],
];
export const FAQ_SOURCES = ['spear'];
