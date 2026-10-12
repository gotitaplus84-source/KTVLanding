// Nội dung các trang con của ktvlab.com — sửa ở đây rồi chạy build.sh (hoặc: node pages/build.mjs).
// Chỉ ghi thông tin labo đã công bố (xuất xứ, hãng, bảo hành, ISO, địa chỉ, số điện thoại) và kiến
// thức nha khoa phổ thông. Không ghi máy móc / giá khi labo chưa cung cấp.

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

/* ---------- Thời gian sản xuất (áp dụng cho mọi loại phục hình, tính từ lúc labo nhận hàng) ---------- */
export const TURNAROUND = [
  { what: 'Răng đơn lẻ, 2 – 3 đơn vị', time: '1 ngày', max: 'tối đa 36 giờ' },
  { what: 'Cầu răng 3 – 8 đơn vị', time: '2 ngày', max: 'tối đa 60 giờ' },
  { what: 'Cầu toàn hàm', time: '3 ngày', max: '' },
  { what: 'Hai hàm toàn hàm', time: '4 ngày', max: '' },
];
export const turnaroundTable = () => `<div class="table-wrap"><table>
<thead><tr><th>Loại ca</th><th>Thời gian sản xuất</th></tr></thead>
<tbody>
${TURNAROUND.map((t) => `<tr><td>${t.what}</td><td><strong>${t.time}</strong>${t.max ? ` (${t.max})` : ''}</td></tr>`).join('\n')}
</tbody></table></div>`;

export function turnaroundBody() {
  return `
<p>Thời gian sản xuất áp dụng cho <strong>mọi loại phục hình</strong> (sứ kim loại, zirconia, multilayer, inlay · onlay, overlay, cùi giả, phục hình trên implant) và được tính <strong>kể từ lúc labo nhận hàng</strong>.</p>
${turnaroundTable()}
<h2>Giờ làm việc</h2>
<p>${BIZ.hours}. Gọi <a href="tel:${BIZ.phones[0].tel}">${BIZ.phones[0].text}</a> hoặc nhắn Zalo <a href="${BIZ.quote.zalo}" target="_blank" rel="noopener">${BIZ.quote.label}</a> để gửi ca và nhận báo giá.</p>
<h2>Khu vực giao nhận</h2>
<ul>
<li>Nhận ca từ phòng khám <strong>khắp khu vực miền Nam</strong>.</li>
<li><strong>Lấy và giao hàng nhanh tận nơi</strong> tại khu vực Bình Dương cũ (Thủ Dầu Một và lân cận).</li>
</ul>
<p>Phục hình được giao trực tiếp đến phòng khám nha khoa.</p>`;
}

/* ---------- Vật liệu ---------- */
export const MATERIALS = [
  { slug: 'upcera', name: 'Upcera', kind: 'zirconia', country: 'Trung Quốc', maker: 'Shenzhen Upcera Dental Technology', years: 3,
    img: '/assets/img/blanks/upcera.webp', imgAlt: 'Phôi zirconia Upcera TT-One', multilayer: false,
    intro: 'Upcera là phôi zirconia của Shenzhen Upcera Dental Technology (Trung Quốc), dùng để phay mão và cầu răng sứ không kim loại. Đây là lựa chọn zirconia có chi phí hợp lý trong 6 dòng phôi KTV Dental Lab đang dùng.' },
  { slug: 'unc', name: 'UNC', kind: 'zirconia', country: 'Hàn Quốc', maker: 'U&C International Co., Ltd', years: 3,
    img: '/assets/img/blanks/unc.webp', imgAlt: 'Phôi zirconia UNC Razor', multilayer: true,
    intro: 'UNC là phôi zirconia của U&C International (Hàn Quốc). Bên cạnh phôi một màu, UNC có dòng Multilayer nhiều lớp màu cho phục hình cần thẩm mỹ cao hơn.' },
  { slug: 'katana', name: 'Katana', kind: 'zirconia', country: 'Nhật Bản', maker: 'Kuraray Noritake Dental Inc.', years: 5,
    img: '/assets/img/blanks/katana.webp', imgAlt: 'Hộp và phôi Katana Zirconia YML', multilayer: true,
    intro: 'Katana Zirconia của Kuraray Noritake Dental (Nhật Bản) là một trong những dòng zirconia nhiều lớp được biết đến rộng rãi, với các phôi Multilayer chuyển màu từ cổ răng đến mặt nhai, ví dụ dòng YML (Yttria Multi Layered).' },
  { slug: 'ddbio', name: 'DDBio', kind: 'zirconia', country: 'Đức', maker: 'Dental Direkt GmbH', years: 5,
    img: '/assets/img/blanks/ddbio.webp', imgAlt: 'Phôi zirconia DD Bio ZX² của Dental Direkt', multilayer: false,
    intro: 'DDBio là dòng phôi zirconia của Dental Direkt GmbH (Đức), sản xuất tại Đức, dùng cho mão và cầu răng sứ không kim loại.' },
  { slug: 'cercon', name: 'Cercon', kind: 'zirconia', country: 'Đức', maker: 'Dentsply Sirona', years: 7,
    img: '/assets/img/blanks/cercon.webp', imgAlt: 'Phôi zirconia Cercon ht của Dentsply Sirona', multilayer: true,
    intro: 'Cercon là dòng zirconia của Dentsply Sirona, gồm cả phôi một màu (ví dụ Cercon ht) và phôi Multilayer nhiều lớp màu.' },
  { slug: 'lava', name: 'Lava', kind: 'zirconia', country: 'Mỹ', maker: 'Solventum (3M)', years: 15,
    img: '/assets/img/blanks/lava.webp', imgAlt: 'Phôi zirconia Lava Plus độ trong cao', multilayer: false,
    intro: 'Lava là dòng zirconia của 3M, nay thuộc Solventum. Phôi Lava Plus là zirconia độ trong cao (High Translucency). Đây là dòng có thời hạn bảo hành dài nhất tại KTV Dental Lab: 15 năm.' },
  { slug: 'ni-cr', name: 'Ni-Cr', kind: 'metal', country: 'Đức / Mỹ', maker: 'Eisenbacher Dentalwaren ED · Aalba Dent', years: null,
    img: '/assets/img/products/pfm-lg.webp', imgAlt: 'Mão sứ trên sườn kim loại, cắt mở thấy sườn', multilayer: false,
    intro: 'Ni-Cr (nickel – chrome) là hợp kim không quý dùng làm sườn cho răng sứ kim loại và mão toàn kim loại. KTV Dental Lab dùng hợp kim của Eisenbacher Dentalwaren ED (Đức) và Aalba Dent (Mỹ).' },
  { slug: 'co-cr', name: 'Co-Cr', kind: 'metal', country: 'Đức', maker: 'Eisenbacher Dentalwaren ED', years: null,
    img: '/assets/img/products/metal-lg.webp', imgAlt: 'Mão răng toàn kim loại', multilayer: false,
    intro: 'Co-Cr (cobalt – chrome) là hợp kim không quý, không chứa nickel, dùng làm sườn răng sứ kim loại và mão toàn kim loại. KTV Dental Lab dùng hợp kim Co-Cr của Eisenbacher Dentalwaren ED (Đức).' },
];

const zr = MATERIALS.filter((m) => m.kind === 'zirconia');
const ml = MATERIALS.filter((m) => m.multilayer);
const list = (arr) => arr.map((m) => `<a href="/vat-lieu/${m.slug}/">${m.name}</a>`).join(' · ');

/* ---------- Phục hình ---------- */
export const PRODUCTS = [
  { slug: 'mao-su-dap-su', name: 'Mão sứ đắp sứ', short: 'Ni-Cr · Co-Cr · Zirconia',
    img: '/assets/img/products/pfm-lg.webp', thumb: '/assets/img/products/pfm.webp', imgAlt: 'Mão sứ đắp sứ trên sườn kim loại, cắt mở thấy sườn',
    title: 'Mão sứ đắp sứ trên sườn kim loại & Zirconia',
    lead: 'Sườn chịu lực bên trong, sứ đắp nhiều lớp bên ngoài. KTV Dental Lab làm mão sứ đắp sứ trên sườn Ni-Cr, Co-Cr và Zirconia.',
    body: `
<h2>Mão sứ đắp sứ là gì?</h2>
<p>Mão sứ đắp sứ gồm hai phần: <strong>sườn</strong> chịu lực ôm sát cùi răng, và <strong>lớp sứ</strong> được kỹ thuật viên đắp thủ công từng lớp lên sườn rồi nung. Nhờ đắp nhiều lớp, màu và độ trong của mão có thể chỉnh theo từng vùng, từ cổ răng đến rìa cắn.</p>
<h2>Các loại sườn</h2>
<ul>
<li><strong>Sườn kim loại <a href="/vat-lieu/ni-cr/">Ni-Cr</a> hoặc <a href="/vat-lieu/co-cr/">Co-Cr</a></strong> — răng sứ kim loại truyền thống, chi phí hợp lý. Co-Cr không chứa nickel, phù hợp khi bác sĩ cần tránh nickel.</li>
<li><strong>Sườn Zirconia</strong> — răng sứ không kim loại: sườn màu trắng nên không lộ ánh xám kim loại ở cổ răng.</li>
</ul>
<h2>Khi nào bác sĩ chọn mão sứ đắp sứ?</h2>
<p>Mão sứ đắp sứ phù hợp khi phục hình cần thẩm mỹ theo từng lớp màu, hoặc cho cầu răng có sườn chịu lực. Với vùng răng sau chịu lực nhai lớn, nhiều bác sĩ chọn <a href="/phuc-hinh/mao-full-zirconia/">mão zirconia nguyên khối</a> vì không có lớp sứ đắp có thể mẻ.</p>
<h2>Bảo hành</h2>
<p>Sườn Zirconia bảo hành theo dòng phôi sử dụng; răng sứ kim loại (Ni-Cr, Co-Cr) bảo hành theo thỏa thuận với phòng khám. Xem <a href="/bao-hanh/">bảng bảo hành</a>.</p>` },

  { slug: 'mao-full-zirconia', name: 'Mão Full màu', short: zr.map((m) => m.name).join(' · '),
    img: '/assets/img/products/zirconia-lg.webp', thumb: '/assets/img/products/zirconia.webp', imgAlt: 'Mão răng zirconia nguyên khối (full màu)',
    title: 'Mão zirconia nguyên khối (Full màu)',
    lead: `Phay nguyên khối từ phôi zirconia, nhuộm màu và nướng bóng — không có lớp sứ đắp. KTV Dental Lab làm mão full màu trên 6 dòng phôi: ${zr.map((m) => m.name).join(', ')}.`,
    body: `
<h2>Mão full màu là gì?</h2>
<p>Mão full màu (zirconia nguyên khối, full-contour) được phay trọn hình răng từ một phôi zirconia, sau đó thiêu kết, nhuộm màu và nướng bóng. Vì không có lớp sứ đắp bên ngoài nên không có nguy cơ bong mẻ lớp sứ đắp — một ưu điểm khi phục hình răng hàm chịu lực nhai lớn.</p>
<h2>6 dòng phôi zirconia</h2>
<p>${list(zr)}. Mỗi dòng khác nhau ở xuất xứ, độ trong, màu sắc và thời hạn bảo hành (từ 3 đến 15 năm).</p>
<h2>Khi nào chọn mão full màu?</h2>
<ul>
<li>Răng hàm, vùng chịu lực nhai lớn.</li>
<li>Khi cần răng sứ không kim loại, không lộ viền tối ở cổ răng.</li>
<li>Vùng răng trước cần chuyển màu tự nhiên hơn: cân nhắc <a href="/phuc-hinh/mao-zirconia-multilayer/">zirconia Multilayer</a>.</li>
</ul>` },

  { slug: 'mao-zirconia-multilayer', name: 'Mão Full Multilayer', short: 'Zirconia nhiều lớp',
    img: '/assets/img/products/multilayer-lg.webp', thumb: '/assets/img/products/multilayer.webp', imgAlt: 'Mão zirconia Multilayer chuyển màu nhiều lớp',
    title: 'Mão zirconia Multilayer (nhiều lớp màu)',
    lead: `Phôi zirconia nhiều lớp, màu chuyển dần từ cổ răng đến mặt nhai như răng thật. Dòng Multilayer tại KTV Dental Lab: ${ml.map((m) => m.name).join(', ')}.`,
    body: `
<h2>Zirconia Multilayer khác zirconia thường thế nào?</h2>
<p>Phôi zirconia một màu có cùng màu từ trên xuống dưới. Phôi <strong>Multilayer</strong> được ép nhiều lớp: vùng cổ răng đậm màu hơn, càng lên mặt nhai (hoặc rìa cắn) càng sáng và trong hơn. Khi phay mão từ phôi này, răng có độ chuyển màu tự nhiên ngay từ phôi, ít phải nhuộm.</p>
<h2>Dòng phôi Multilayer</h2>
<p>${list(ml)}.</p>
<h2>Khi nào chọn Multilayer?</h2>
<ul>
<li>Răng trước và các vùng thẩm mỹ, nơi màu sắc tự nhiên quan trọng.</li>
<li>Khi muốn ưu điểm của zirconia nguyên khối (không có lớp sứ đắp) nhưng thẩm mỹ cao hơn phôi một màu.</li>
</ul>` },

  { slug: 'mao-full-kim-loai', name: 'Full kim loại', short: 'Ni-Cr · Co-Cr',
    img: '/assets/img/products/metal-lg.webp', thumb: '/assets/img/products/metal.webp', imgAlt: 'Mão răng toàn kim loại',
    title: 'Mão toàn kim loại Ni-Cr, Co-Cr',
    lead: 'Mão đúc hoàn toàn bằng hợp kim, không phủ sứ. KTV Dental Lab làm mão full kim loại bằng Ni-Cr và Co-Cr.',
    body: `
<h2>Mão toàn kim loại là gì?</h2>
<p>Mão toàn kim loại được làm hoàn toàn bằng hợp kim, không có lớp sứ phủ ngoài. Vì không cần chừa chỗ cho lớp sứ nên mão có thể làm mỏng — phù hợp khi khoảng phục hình hạn chế.</p>
<h2>Vật liệu</h2>
<ul>
<li><a href="/vat-lieu/ni-cr/">Ni-Cr</a> — Eisenbacher Dentalwaren ED (Đức), Aalba Dent (Mỹ).</li>
<li><a href="/vat-lieu/co-cr/">Co-Cr</a> — Eisenbacher Dentalwaren ED (Đức); không chứa nickel.</li>
</ul>
<h2>Khi nào chọn?</h2>
<p>Thường dùng cho răng hàm ít yêu cầu thẩm mỹ, chịu lực lớn. Bảo hành theo thỏa thuận với phòng khám.</p>` },

  { slug: 'inlay-onlay', name: 'Inlay · Onlay', short: 'Kim loại · Zirconia',
    img: null, thumb: null, imgAlt: '',
    title: 'Inlay · Onlay kim loại và Zirconia',
    lead: 'Phục hình từng phần, giữ lại tối đa mô răng thật. KTV Dental Lab làm inlay, onlay bằng kim loại và Zirconia.',
    body: `
<h2>Inlay và onlay là gì?</h2>
<p><strong>Inlay</strong> là miếng trám gián tiếp nằm gọn trong lòng răng, giữa các múi. <strong>Onlay</strong> rộng hơn, phủ lên một hoặc nhiều múi răng. Cả hai được labo chế tác ngoài miệng theo dấu hoặc file scan rồi bác sĩ gắn vào răng.</p>
<h2>Ưu điểm</h2>
<ul>
<li>Bảo tồn mô răng hơn so với mài răng làm mão toàn phần.</li>
<li>Khít sát và bền hơn miếng trám trực tiếp khi lỗ sâu hoặc vùng mất chất răng lớn.</li>
</ul>
<h2>Vật liệu</h2>
<p>Kim loại hoặc Zirconia, tuỳ chỉ định của bác sĩ. Khi phải phủ toàn bộ mặt nhai, xem thêm <a href="/phuc-hinh/overlay/">overlay</a>.</p>` },

  { slug: 'overlay', name: 'Overlay', short: 'Zirconia',
    img: '/assets/img/products/overlay-lg.webp', thumb: '/assets/img/products/overlay.webp', imgAlt: 'Overlay zirconia phủ mặt nhai',
    title: 'Overlay Zirconia phủ mặt nhai',
    lead: 'Phục hình phủ toàn bộ mặt nhai, giữ lại thành răng thật. KTV Dental Lab làm overlay bằng Zirconia.',
    body: `
<h2>Overlay là gì?</h2>
<p>Overlay (còn gọi là table-top) là phục hình phủ lên toàn bộ mặt nhai của răng hàm, trong khi phần thành răng bên ngoài vẫn được giữ lại. So với mão toàn phần, overlay mài ít mô răng hơn.</p>
<h2>Khi nào dùng overlay?</h2>
<ul>
<li>Mặt nhai bị mòn hoặc mất chất nhiều nhưng thành răng còn tốt.</li>
<li>Khi bác sĩ muốn phục hồi hình thể mặt nhai mà không mài răng làm mão.</li>
</ul>
<h2>Vật liệu</h2>
<p>Zirconia — xem các <a href="/phuc-hinh/mao-full-zirconia/">dòng phôi zirconia</a> labo đang dùng.</p>` },

  { slug: 'cui-gia', name: 'Cùi giả', short: 'Kim loại · Chốt gài · Zirconia',
    img: '/assets/img/products/core-lg.webp', thumb: '/assets/img/products/core.webp', imgAlt: 'Cùi giả đúc kèm chốt (hình minh hoạ)',
    title: 'Cùi giả kim loại, chốt gài và Zirconia',
    lead: 'Tái tạo phần thân răng đã mất để làm nền giữ mão. KTV Dental Lab làm cùi giả kim loại, chốt gài và Zirconia.',
    body: `
<h2>Cùi giả là gì?</h2>
<p>Khi răng (thường là răng đã điều trị tuỷ) mất nhiều mô, không đủ chỗ bám cho mão, bác sĩ dùng <strong>cùi giả</strong>: một khối tái tạo phần thân răng, có chốt cắm vào ống tuỷ để lưu giữ. Mão sứ sau đó được làm trên cùi giả này.</p>
<h2>Các loại cùi giả tại KTV Dental Lab</h2>
<ul>
<li><strong>Cùi giả kim loại</strong> — chốt và cùi đúc liền một khối.</li>
<li><strong>Chốt gài</strong> — theo chỉ định của bác sĩ.</li>
<li><strong>Cùi giả Zirconia</strong> — không kim loại, phù hợp khi làm mão toàn sứ ở vùng thẩm mỹ.</li>
</ul>` },

  { slug: 'phuc-hinh-tren-implant', name: 'Phục hình trên Implant', short: 'Sứ kim loại & sứ không kim loại · theo chỉ định riêng',
    img: '/assets/img/products/implant-lg.webp', thumb: '/assets/img/products/implant.webp', imgAlt: 'Mão sứ trên trụ implant (hình minh hoạ)',
    title: 'Phục hình răng sứ trên Implant',
    lead: 'Mão sứ kim loại và sứ không kim loại trên implant, làm theo chỉ định riêng của từng ca. Bảo hành như phục hình trên răng thật cùng dòng vật liệu.',
    body: `
<h2>Phục hình trên implant</h2>
<p>KTV Dental Lab làm mão sứ kim loại và mão sứ không kim loại (zirconia) trên implant, theo chỉ định riêng của bác sĩ cho từng ca.</p>
<h2>Thông tin nên gửi kèm ca</h2>
<ul>
<li>Hệ implant và đường kính / kết nối.</li>
<li>Loại abutment và kiểu lưu giữ mão (bắt vít hoặc gắn xi măng).</li>
<li>Vật liệu và màu răng mong muốn.</li>
</ul>
<h2>Bảo hành</h2>
<p>Phục hình trên implant được bảo hành như phục hình trên răng thật cùng dòng vật liệu — xem <a href="/bao-hanh/">bảng bảo hành</a>.</p>` },
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
  return `
<h2>${m.name} là gì?</h2>
<p>${m.intro}</p>
<h2>Dùng cho phục hình nào?</h2>
${uses}
<h2>Bảo hành</h2>
<p>Phục hình ${m.name} tại KTV Dental Lab được bảo hành ${war}. Phục hình trên implant bảo hành như phục hình trên răng thật cùng dòng vật liệu. Xem <a href="/bao-hanh/">bảng bảo hành tất cả dòng vật liệu</a>.</p>
<h2>So sánh với các dòng khác</h2>
<p>${m.kind === 'zirconia' ? `Các dòng zirconia khác tại labo: ${list(zr.filter((x) => x.slug !== m.slug))}.` : `Hợp kim còn lại: ${list(MATERIALS.filter((x) => x.kind === 'metal' && x.slug !== m.slug))}. Răng sứ không kim loại: ${list(zr)}.`}</p>`;
}

/* ---------- Bảo hành ---------- */
export function warrantyBody() {
  const rows = MATERIALS.map((m) => `<tr><td><a href="/vat-lieu/${m.slug}/">${m.name}</a></td><td>${m.kind === 'zirconia' ? 'Zirconia' : 'Hợp kim'}</td><td>${m.country}</td><td>${m.maker}</td><td><strong>${m.years ? m.years + ' năm' : 'Theo thỏa thuận'}</strong></td></tr>`).join('\n');
  return `
<p>Thời hạn bảo hành phụ thuộc vào dòng vật liệu của phục hình.</p>
<div class="table-wrap"><table>
<thead><tr><th>Dòng vật liệu</th><th>Loại</th><th>Xuất xứ</th><th>Nhà sản xuất</th><th>Bảo hành</th></tr></thead>
<tbody>
${rows}
</tbody></table></div>
<h2>Lưu ý</h2>
<ul>
<li><strong>Phục hình trên implant</strong> được bảo hành như phục hình trên răng thật cùng dòng vật liệu.</li>
<li><strong>Răng sứ kim loại (Ni-Cr, Co-Cr)</strong> bảo hành theo thỏa thuận với phòng khám.</li>
<li>Để biết điều kiện bảo hành chi tiết, vui lòng liên hệ labo.</li>
</ul>`;
}

/* ---------- Câu hỏi thường gặp ---------- */
export const FAQ = [
  ['KTV Dental Lab nhận làm những loại phục hình nào?',
    `Mão sứ đắp sứ (sườn Ni-Cr, Co-Cr, Zirconia), mão zirconia nguyên khối (full màu), mão zirconia Multilayer, mão toàn kim loại, inlay · onlay, overlay, cùi giả và phục hình trên implant. <a href="/#phuc-hinh">Xem danh sách phục hình</a>.`],
  ['Labo đang dùng những dòng phôi zirconia nào?',
    `${zr.map((m) => `<a href="/vat-lieu/${m.slug}/">${m.name}</a> (${m.country})`).join(', ')}.`],
  ['Răng sứ được bảo hành bao lâu?',
    `Tuỳ dòng vật liệu: ${zr.map((m) => `${m.name} ${m.years} năm`).join(', ')}; răng sứ kim loại Ni-Cr, Co-Cr bảo hành theo thỏa thuận. <a href="/bao-hanh/">Xem bảng bảo hành</a>.`],
  ['Labo làm một ca mất bao lâu?',
    `Tính từ lúc labo nhận hàng, áp dụng cho mọi loại phục hình: ${TURNAROUND.map((t) => `${t.what.toLowerCase()} — ${t.time}${t.max ? ` (${t.max})` : ''}`).join('; ')}. <a href="/thoi-gian-san-xuat/">Xem chi tiết</a>.`],
  ['Labo nhận ca ở những khu vực nào?',
    'KTV Dental Lab nhận ca khắp khu vực miền Nam, và lấy – giao hàng nhanh tận nơi tại khu vực Bình Dương cũ.'],
  ['Giờ làm việc của labo?',
    `${BIZ.hours}.`],
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
    'Phôi Multilayer có nhiều lớp màu chuyển dần từ cổ răng đến mặt nhai, nên răng làm ra có màu tự nhiên hơn phôi một màu. <a href="/phuc-hinh/mao-zirconia-multilayer/">Xem thêm về Multilayer</a>.'],
  ['Labo phục vụ những ai?',
    'KTV Dental Lab sản xuất phục hình cho phòng khám nha khoa ở khu vực miền Nam và giao phục hình trực tiếp đến phòng khám.'],
];
