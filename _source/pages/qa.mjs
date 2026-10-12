// Hỏi đáp kỹ thuật cho bác sĩ — mỗi chủ đề là một trang /hoi-dap/<slug>/, mỗi câu có id "cau-<n>".
// Câu trả lời: câu đầu trả lời thẳng (class "qa-short"), sau đó chi tiết. Mọi con số phải có nguồn trong SOURCES.
// Biên soạn: KTV Dental Lab.

export const QA_UPDATED = '2026-10-12';

const table = (head, rows) => `<div class="table-wrap"><table>
<thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('\n')}
</tbody></table></div>`;
const short = (t) => `<p class="qa-short">${t}</p>`;

export const QA_TOPICS = [
  /* ===================== 1. Chọn zirconia và vật liệu ===================== */
  { slug: 'chon-vat-lieu-zirconia', name: 'Chọn zirconia và vật liệu',
    title: 'Chọn zirconia 3Y, 4Y, 5Y, Multilayer theo vị trí',
    lead: 'Zirconia 3Y, 4Y, 5Y, Multilayer khác nhau thế nào, chọn loại nào cho răng trước, răng hàm, cầu dài, cầu toàn hàm và cùi đổi màu.',
    qs: [
      [1, 'Zirconia 3Y, 4Y và 5Y khác nhau như thế nào và nên dùng loại nào cho từng vị trí?',
        `${short('Khác nhau ở hàm lượng yttria: càng nhiều yttria, zirconia càng trong nhưng độ bền uốn càng giảm. 3Y cho vùng chịu lực và cầu dài, 4Y cho mão răng trước – răng sau và cầu ngắn, 5Y cho răng trước.')}
${table(['Thế hệ', 'Độ bền uốn', 'Độ trong', 'Chỉ định thường gặp'], [
  ['3Y (3 mol% yttria)', 'Khoảng 900 – 1.200 MPa', 'Thấp nhất', 'Sườn đắp sứ; mão và cầu răng sau, cầu dài'],
  ['4Y (4 mol%)', 'Giữa 3Y và 5Y', 'Trung gian', 'Mão răng trước và răng sau, cầu ngắn'],
  ['5Y (5 mol%, khoảng 50% pha cubic)', 'Khoảng 700 – 800 MPa', 'Cao hơn 3Y khoảng 20 – 25%', 'Mão răng trước, cầu ngắn'],
])}
<p>Số liệu theo tổng quan của Yousry và cộng sự (2024) và Binici Aygün và cộng sự (2025). Mỗi hãng có tên thương mại riêng cho từng loại; luôn đối chiếu chỉ định của dòng phôi cụ thể — xem <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>.</p>`],
      [2, 'Zirconia càng trong thì có phải càng yếu không?',
        `${short('Đúng, về xu hướng chung. Pha cubic làm zirconia trong hơn nhưng không có cơ chế chuyển pha chống nứt như pha tetragonal, nên độ bền uốn và độ dai gãy giảm.')}
<p>Ví dụ theo Kuraray Noritake: Katana UTML có độ trong 51% với độ bền uốn 557 MPa; Katana HTML PLUS độ trong 45% với 1.150 MPa. Dentsply Sirona: Cercon xt 49% – 750 MPa, Cercon ht 41% – 1.200 MPa. Vì vậy dòng độ trong cao thường bị giới hạn chỉ định (ví dụ Cercon xt không làm cầu 3 đơn vị vùng răng cối lớn).</p>`],
      [3, 'Nên chọn zirconia nguyên khối hay zirconia đắp sứ cho răng trước?',
        `${short('Zirconia nguyên khối (5Y hoặc Multilayer) phù hợp phần lớn ca răng trước và không có nguy cơ mẻ sứ đắp; zirconia đắp sứ dành cho ca đòi hỏi thẩm mỹ cao về độ trong, hiệu ứng rìa cắn mà phôi nguyên khối chưa đạt.')}
<p>Tổng quan của Sailer và cộng sự (2015) cho thấy mão sứ đắp trên sườn zirconia bị mất do vỡ sứ đắp khoảng 3,2% sau 5 năm, so với 0,3% ở mão sứ – kim loại. Với răng trước chịu lực ít, nguy cơ này thấp hơn răng hàm, nhưng vẫn là điểm cần cân nhắc. Giải pháp trung gian: mão cut-back — phay nguyên khối rồi cắt bớt mặt ngoài vùng rìa cắn để đắp một lớp sứ mỏng (Katana YML có chỉ định này).</p>`],
      [4, 'Zirconia Multilayer khác zirconia một màu như thế nào?',
        `${short('Phôi Multilayer có nhiều lớp màu chuyển dần từ cổ răng đến rìa cắn ngay trong phôi; phôi một màu đồng nhất từ trên xuống, chuyển màu phải tạo bằng nhuộm bề mặt.')}
<p>Ở một số dòng, các lớp còn khác nhau về độ bền: Katana YML lớp men 750 MPa, lớp thân 1.000 – 1.100 MPa; Cercon ht ML chuyển từ 1.200 MPa (ngà) đến 750 MPa (rìa cắn). Kỹ thuật viên bố trí mão trong phôi để vùng chịu lực, vùng nối nằm ở lớp bền. Chi tiết: <a href="/phuc-hinh/mao-zirconia-multilayer/">mão zirconia Multilayer</a>.</p>`],
      [5, 'Có nên dùng zirconia Multilayer cho cầu dài không?',
        `${short('Được, nếu là dòng Multilayer có lớp thân độ bền cao và hãng chỉ định cho cầu dài — ví dụ Katana YML, Cercon ht ML. Không dùng các dòng Multilayer độ trong cao chỉ định đến 3 đơn vị như Katana STML, UTML.')}
<ul>
<li><strong>Katana YML:</strong> tối đa 2 nhịp giữa 2 trụ; cầu từ 4 đơn vị đặt ít nhất 50% tiết diện vùng nối ở nửa dưới phôi (lớp thân bền hơn).</li>
<li><strong>Katana STML, UTML:</strong> cầu đến 3 đơn vị; vùng nối tối thiểu 12 mm² (răng trước), 16 mm² (răng sau); không làm nhịp đèo.</li>
<li><strong>Cercon ht ML:</strong> mão, cầu nhiều đơn vị — răng trước và răng sau.</li>
</ul>`],
      [6, 'Cầu zirconia 4–6 đơn vị nên chọn loại phôi nào?',
        `${short('Chọn zirconia độ bền cao (nhóm 3Y) hoặc phôi nhiều lớp có lớp thân bền, được hãng chỉ định cho cầu nhiều đơn vị.')}
<p>Tại KTV Dental Lab, các dòng phù hợp: <a href="/vat-lieu/ddbio/">DD Bio ZX²</a> (1.150 ± 150 MPa, đến 14 đơn vị), <a href="/vat-lieu/cercon/">Cercon ht</a> (1.200 MPa, tối đa 2 nhịp giữa 2 trụ), <a href="/vat-lieu/katana/">Katana YML / HTML PLUS</a>, <a href="/vat-lieu/lava/">Lava Plus</a> (1.100 MPa, cầu dài và cầu cong). Tránh dòng độ trong cao như Katana STML, UTML, Cercon xt cho cầu dài. Vùng nối cần đủ tiết diện theo hướng dẫn của hãng.</p>`],
      [7, 'Cầu toàn hàm zirconia nên dùng loại zirconia nào?',
        `${short('Zirconia độ bền cao, được hãng chỉ định cho cầu dài nhiều đơn vị — ví dụ DD Bio ZX² (chỉ định đến 14 đơn vị).')}
<p>Với cầu toàn hàm, ưu tiên độ bền và độ dai gãy hơn độ trong; có thể dùng phôi nhiều lớp có lớp thân bền để cải thiện thẩm mỹ vùng răng trước. Thời gian sản xuất cầu toàn hàm tại KTV Dental Lab: 3 ngày, hai hàm: 4 ngày — xem <a href="/thoi-gian-san-xuat/">thời gian sản xuất</a>.</p>`],
      [8, 'Zirconia độ trong cao có phù hợp cho răng hàm không?',
        `${short('Hạn chế. Zirconia độ trong cao (nhóm 5Y) có độ bền uốn khoảng 700 – 800 MPa, thấp hơn rõ so với 3Y, và nhiều hãng giới hạn chỉ định ở vùng răng sau.')}
<p>Ví dụ: Katana UTML chỉ định chủ yếu cho răng trước; Cercon xt không dùng cho cầu 3 đơn vị vùng răng cối lớn. Với mão đơn lẻ răng cối lớn, ưu tiên dòng độ bền cao hoặc phôi nhiều lớp có lớp thân bền. Tổng quan của Leitão và cộng sự (2022) ghi nhận một nghiên cứu trên bệnh nhân nghiến răng có tỉ lệ tồn tại thấp (31,6%) — cần thận trọng hơn với dòng độ trong cao ở bệnh nhân lực cắn mạnh.</p>`],
      [9, 'Khi cùi răng bị đổi màu hoặc có chốt kim loại nên chọn zirconia nào để che màu?',
        `${short('Chọn zirconia độ trong thấp hơn (nhóm 3Y hoặc lớp thân của phôi nhiều lớp), tăng độ dày phục hình trong giới hạn cho phép, và chọn màu xi măng phù hợp.')}
<p>Theo Binici Aygün và cộng sự (2025), màu cuối cùng của mão zirconia nguyên khối chịu ảnh hưởng của màu nền cùi, độ dày phục hình, loại và màu xi măng, loại zirconia. Màu nền ảnh hưởng nhiều nhất với zirconia độ trong cao; phục hình dày hơn che màu nền tốt hơn nhưng giảm độ trong; với cùi tối màu, độ đục của xi măng càng quan trọng. Khi gửi ca, ghi rõ màu cùi (có thể chụp ảnh cùi với cây so màu cùi) để labo chọn phôi và độ dày phù hợp.</p>`],
      [10, 'Làm sao chọn giữa zirconia, kim loại-sứ và toàn kim loại cho răng sau?',
        `${short('Zirconia nguyên khối khi cần không kim loại và tránh mẻ sứ; toàn kim loại khi khoảng phục hình rất hẹp hoặc bệnh nhân nghiến nặng, không cần thẩm mỹ; kim loại – sứ khi cần thẩm mỹ với chi phí hợp lý.')}
${table(['', 'Zirconia nguyên khối', 'Kim loại – sứ', 'Toàn kim loại'], [
  ['Mài mặt nhai', '1,0 – 1,5 mm', '1,5 – 2,0 mm', '1,5 mm (múi chức năng)'],
  ['Mẻ sứ đắp', 'Không có lớp sứ đắp', 'Có thể (thấp)', 'Không'],
  ['Thẩm mỹ', 'Tốt', 'Tốt; có thể lộ viền xám', 'Không'],
  ['Kim loại', 'Không', 'Có', 'Có'],
])}
<p>Số liệu mài cùi theo giáo trình phục hình Đại học Iowa. Bệnh nhân dị ứng nickel: chọn zirconia hoặc <a href="/vat-lieu/co-cr/">Co-Cr</a>.</p>`],
    ],
    sources: ['yousry', 'binici', 'katana', 'katanaYML', 'katanaGuide', 'cerconBro', 'cerconML', 'ddbio', 'lavaBro', 'sailer', 'leitao', 'iowa'] },

  /* ===================== 2. Mài cùi cho zirconia ===================== */
  { slug: 'mai-cui-zirconia', name: 'Mài cùi cho zirconia',
    title: 'Mài cùi zirconia: khoảng phục hình, đường hoàn tất',
    lead: 'Khoảng phục hình tối thiểu, độ dày mão, chamfer hay shoulder, feather edge, độ thuôn, cùi ngắn và góc trong khi mài cùi cho zirconia.',
    qs: [
      [11, 'Mài cùi zirconia cần tối thiểu bao nhiêu khoảng phục hình?',
        `${short('Với mão zirconia nguyên khối: mặt nhai 1,0 – 1,5 mm (múi chức năng) và 1,0 mm (múi không chức năng), rìa cắn răng trước 1,8 – 2,0 mm, thành trục 0,8 – 1,0 mm.')}
${table(['Loại mão', 'Mặt nhai', 'Rìa cắn', 'Thành trục'], [
  ['Zirconia nguyên khối', '1,0 – 1,5 / 1,0 mm', '1,8 – 2,0 mm', '0,8 – 1,0 mm'],
  ['Sứ – kim loại', '1,5 – 2,0 / 1,0 – 1,5 mm', '2,0 mm', '—'],
  ['Toàn sứ đắp sứ', '2,0 / 1,5 mm', '1,5 – 2,0 mm', '1,2 – 1,5 mm'],
])}
<p>Theo giáo trình phục hình Đại học Iowa. Khoảng thực tế phải đáp ứng độ dày tối thiểu của dòng phôi được chọn.</p>`],
      [12, 'Mão zirconia nguyên khối cần dày tối thiểu bao nhiêu?',
        `${short('Tuỳ dòng phôi và vị trí, thường từ 0,4 – 0,5 mm ở thành mỏng nhất đến 0,8 mm; dòng độ trong cao và vùng chịu lực cần dày hơn.')}
<ul>
<li><strong>Katana YML:</strong> 0,4 mm (răng trước) / 0,5 mm (răng sau) ở nửa dưới phôi; 0,8 mm nếu nằm ở nửa trên phôi.</li>
<li><strong>Katana STML, UTML:</strong> 0,8 mm nếu đắp sứ; có thể 0,4 mm khi hoàn thiện bằng glaze và đánh bóng.</li>
<li><strong>Lava Plus:</strong> thành tối thiểu 0,5 mm cho cầu nhiều đơn vị vùng răng sau.</li>
<li>Giáo trình Iowa ghi độ dày tối thiểu 0,8 mm cho zirconia nguyên khối.</li>
</ul>`],
      [13, 'Đường hoàn tất cho zirconia nên là chamfer hay shoulder?',
        `${short('Chamfer hoặc shoulder bo tròn đều dùng được; chamfer khoảng 0,5 – 0,8 mm là lựa chọn phổ biến cho zirconia nguyên khối.')}
<p>Giáo trình Iowa ghi chamfer 0,5 mm ở vùng nướu đến 0,8 mm cho zirconia nguyên khối. Hướng dẫn của Kuraray Noritake (Katana STML, UTML) liệt kê các dạng cần tránh: shoulder quá sâu, knife edge, vùng lẹm, bờ viền gồ ghề, rãnh, cạnh rìa cắn sắc. Điều quan trọng là đường hoàn tất rõ, liên tục và đủ độ dày cho vật liệu.</p>`],
      [14, 'Có thể làm zirconia với feather edge hoặc knife edge không?',
        `${short('Có nghiên cứu lâm sàng ủng hộ feather edge với zirconia nguyên khối, nhưng một số hãng phôi không khuyến nghị knife edge — cần theo chỉ định của dòng phôi.')}
<p>Nghiên cứu hồi cứu của Di Fiore và cộng sự (2023) trên 1.472 đơn vị zirconia nguyên khối với đường hoàn tất feather edge, quy trình kỹ thuật số, theo dõi trung bình 44 tháng: tỉ lệ tồn tại 98,5%. Ngược lại, hướng dẫn Katana STML, UTML xếp knife edge vào nhóm không nên. Với feather edge, phục hình rất mỏng ở bờ viền — labo cần dấu hoặc file scan thấy rõ giới hạn đường hoàn tất.</p>`],
      [15, 'Cùi zirconia nên có độ côn bao nhiêu?',
        `${short('Độ thuôn tổng lý tưởng 10 – 20°; không nên vượt quá 20°.')}
<p>Theo giáo trình Iowa, kháng lực giảm khi độ thuôn tăng. Christensen (2024) nhận xét nhiều cùi phải làm lại có độ thuôn trên 20° — một nguyên nhân thường gặp khiến mão bong. Khi gắn bằng xi măng thông thường, mão chủ yếu dựa vào lưu giữ cơ học của cùi.</p>`],
      [16, 'Cùi quá ngắn thì có nên làm mão zirconia không?',
        `${short('Làm được, nhưng cần bổ sung lưu giữ: kéo dài thân răng lâm sàng nếu có thể, tạo rãnh lưu giữ, và gắn bằng xi măng nhựa theo quy trình dán zirconia (thổi cát, primer MDP).')}
<p>Chiều cao cùi tối thiểu theo giáo trình Iowa: khoảng 3 mm với răng cối nhỏ và 4 mm với răng cối lớn. Khi cùi không đạt lưu giữ và kháng lực, các tác giả khuyến nghị dán bằng xi măng nhựa thay vì gắn thông thường (Alsahafi & Sulaiman, 2024; Blatz, 2024).</p>`],
      [17, 'Cùi chỉ còn khoảng 2–3 mm chiều cao thì nên xử lý thế nào?',
        `${short('Dưới mức tối thiểu với răng cối lớn (4 mm): cân nhắc kéo dài thân răng lâm sàng, thêm rãnh lưu giữ trên thành trục, hoặc tái tạo cùi; khi gắn, dùng quy trình dán zirconia với xi măng nhựa.')}
<ul>
<li><strong>Kéo dài thân răng lâm sàng</strong> khi đường hoàn tất có thể dời về phía chóp mà vẫn tôn trọng khoảng sinh học (khoảng 2 mm).</li>
<li><strong>Rãnh lưu giữ</strong> ngang trên thành trục cùi và mặt trong mão (Christensen, 2024).</li>
<li><strong>Dán bằng xi măng nhựa:</strong> thổi cát mặt trong, primer chứa MDP, xi măng nhựa trùng hợp kép hoặc tự trùng hợp (Blatz, 2024).</li>
<li>Răng đã điều trị tuỷ mất nhiều mô: cân nhắc <a href="/phuc-hinh/cui-gia/">cùi giả</a>, giữ tối đa vùng đai 1,5 – 2,0 mm.</li>
</ul>`],
      [18, 'Góc trong của cùi zirconia có cần bo tròn không?',
        `${short('Có. Góc trong và cạnh rìa cắn nên bo tròn, không để góc sắc.')}
<p>Góc sắc trên cùi tạo điểm tập trung ứng suất trong mão và khó phay chính xác bằng mũi phay có đường kính nhất định, dẫn đến mão không xuống hết hoặc phải mài chỉnh mặt trong. Hướng dẫn Katana STML, UTML liệt kê cạnh rìa cắn sắc, rãnh và vùng lẹm là những dạng cần tránh.</p>`],
      [19, 'Mài thiếu khoảng mặt nhai thì labo nên giảm zirconia hay báo bác sĩ mài thêm?',
        `${short('Không giảm zirconia dưới độ dày tối thiểu của dòng phôi. Khi khoảng không đủ, KTV Dental Lab báo bác sĩ vùng thiếu khoảng để bác sĩ quyết định mài thêm, chỉnh răng đối diện hoặc đổi vật liệu.')}
<p>Mão mỏng hơn mức tối thiểu của hãng làm tăng nguy cơ nứt gãy, nhất là ở vùng chịu lực. Các hướng xử lý thường gặp: mài thêm cùi ở vùng thiếu khoảng; chỉnh nhẹ răng đối diện nếu bác sĩ chỉ định; hoặc đổi sang vật liệu cần ít khoảng hơn như mão toàn kim loại (mặt nhai 1,0 mm ở múi không chức năng).</p>`],
      [20, 'Khi khoảng phục hình quá ít, zirconia hay kim loại-sứ sẽ phù hợp hơn?',
        `${short('Zirconia nguyên khối hoặc toàn kim loại; kim loại – sứ cần nhiều khoảng nhất vì phải chứa cả sườn và lớp sứ.')}
<p>Theo giáo trình Iowa: mặt nhai cần 1,0 – 1,5 mm cho zirconia nguyên khối, 1,5 mm (múi chức năng) / 1,0 mm cho toàn kim loại, nhưng 1,5 – 2,0 mm cho kim loại – sứ. Với khoảng liên hàm rất hẹp ở răng hàm không cần thẩm mỹ, <a href="/phuc-hinh/mao-full-kim-loai/">mão toàn kim loại</a> là lựa chọn mài ít nhất.</p>`],
    ],
    sources: ['iowa', 'katanaYML', 'katanaGuide', 'lavaBro', 'difiore', 'christensen', 'alsahafi', 'blatz', 'mamoun'] },

  /* ===================== 3. Gắn mão zirconia ===================== */
  { slug: 'gan-mao-zirconia', name: 'Gắn mão zirconia',
    title: 'Gắn mão zirconia: xi măng, thổi cát, MDP, làm sạch',
    lead: 'Glass ionomer, RMGI hay xi măng nhựa; khi nào phải dán; thổi cát bao nhiêu micron; MDP, HF, silane; làm sạch mão sau khi thử trong miệng.',
    qs: [
      [21, 'Mão zirconia nên gắn bằng glass ionomer, RMGI hay resin cement?',
        `${short('Mão toàn phần có cùi đủ lưu giữ: gắn thông thường bằng glass ionomer hoặc RMGI là đủ. Cùi ngắn, thuôn nhiều hoặc phục hình bán phần: dán bằng xi măng nhựa theo quy trình thổi cát + primer MDP.')}
<p>Blatz (2024) khuyến nghị dán (APC: thổi cát – primer – xi măng nhựa) cho cầu dán, mặt dán, inlay/onlay; mão toàn phần có lưu giữ tốt có thể gắn thông thường. Christensen (2024) dẫn dữ liệu sơ bộ của nghiên cứu lâm sàng TRAC: tỉ lệ bong 1% với RMGI, 4% với xi măng nhựa dán và 5% với xi măng nhựa tự dán — tác giả nghiêng về RMGI cho mão zirconia có lưu giữ đủ. Hai quan điểm thống nhất ở một điểm: hình dạng cùi quyết định phần lớn khả năng lưu giữ.</p>`],
      [22, 'Trường hợp nào zirconia bắt buộc nên dùng resin cement?',
        `${short('Khi phục hình không có đủ lưu giữ cơ học: cầu dán (Maryland), mặt dán, inlay, onlay, overlay, và mão trên cùi ngắn hoặc thuôn nhiều.')}
<p>Alsahafi & Sulaiman (2024): gắn thông thường dùng được khi cùi có đủ lưu giữ và kháng lực; khi không đủ, cần dán. Không nên dùng xi măng nhựa tự dán đơn giản khi cùi thiếu lưu giữ cơ học. Dưới zirconia, ánh sáng đèn bị giảm, nên dùng xi măng trùng hợp kép hoặc tự trùng hợp (Blatz, 2024).</p>`],
      [23, 'Zirconia có cần dùng primer chứa MDP trước khi gắn không?',
        `${short('Cần, nếu dán bằng xi măng nhựa. MDP (10-methacryloyloxydecyl dihydrogen phosphate) tạo liên kết hoá học với oxit zirconium.')}
<p>Bôi primer chứa 10-MDP ngay sau khi thổi cát, không làm sạch thêm (Blatz, 2024); Alsahafi & Sulaiman (2024) hướng dẫn chà primer 2 – 3 phút rồi thổi nhẹ cho bay dung môi. Primer hoặc xi măng phải chứa MDP; nếu xi măng đã chứa MDP, có thể không cần primer riêng — theo hướng dẫn của hãng (Bisco). Dùng primer, chất dán và xi măng cùng một hãng để đảm bảo tương thích. Khi gắn thông thường bằng glass ionomer / RMGI, primer MDP không bắt buộc.</p>`],
      [24, 'Có nên thổi cát mặt trong zirconia trước khi gắn không?',
        `${short('Có, khi dán bằng xi măng nhựa: thổi cát tạo bề mặt vi lưu và làm sạch, là bước đầu của quy trình APC. Nên thổi cát sau khi thử mão trong miệng.')}
<p>Thổi cát sau khi thử còn giúp loại bỏ nước bọt, máu nhiễm vào mặt trong — hiệu quả hơn các chất làm sạch khác (Alsahafi & Sulaiman, 2024; Blatz, 2024). Với inlay, onlay, overlay, KTV Dental Lab có dịch vụ <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn mặt dán bằng Zircos-E</a> — phòng khám gắn theo quy trình thông thường, không cần thổi cát lại.</p>`],
      [25, 'Nên thổi cát zirconia bằng Al₂O₃ bao nhiêu micron và áp lực bao nhiêu?',
        `${short('Al₂O₃ 50 µm (50 – 60 µm), áp lực thấp — khoảng 1,5 – 2,5 bar tuỳ hướng dẫn.')}
<ul>
<li><strong>Blatz (2024):</strong> hạt 50 – 60 µm, áp lực dưới 2 bar là đủ; một nghiên cứu trên zirconia trong ghi nhận 0,2 MPa (2 bar) hiệu quả nhất.</li>
<li><strong>Alsahafi & Sulaiman (2024):</strong> 50 µm, 2,5 bar, 10 giây, khoảng cách 10 mm.</li>
<li>Thổi cát quá mạnh hoặc hạt lớn làm giảm độ bền của zirconia (Alsahafi & Sulaiman, 2024).</li>
</ul>`],
      [26, 'Có nên dùng axit HF để xử lý zirconia không?',
        `${short('Không. Axit HF xoi mòn pha thuỷ tinh của sứ thuỷ tinh; zirconia gần như không có pha thuỷ tinh nên HF thông thường không tạo được bề mặt lưu giữ.')}
<p>Zirconia không xoi mòn được bằng HF thông thường (Alsahafi & Sulaiman, 2024; Spear Education). Có các dung dịch xoi mòn chuyên cho zirconia như <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">Zircos-E</a> (hợp chất axit nitric – axit HF dùng tại labo) — khác với gel HF xoi mòn sứ dùng trên ghế.</p>`],
      [27, 'Silane có tác dụng với zirconia không?',
        `${short('Không có tác dụng đáng kể. Silane liên kết với silica; zirconia không có silica nên silane đơn thuần không tạo liên kết.')}
<p>Bề mặt trong của zirconia không xoi mòn và silane hoá được như lithium disilicate (Spear Education). Liên kết hoá học với zirconia dựa vào monomer phosphate như MDP. Silane chỉ có ý nghĩa khi bề mặt zirconia đã được phủ silica (phương pháp silica hoá bằng thổi cát chuyên dụng).</p>`],
      [28, 'Sau khi thử mão zirconia trong miệng bị nhiễm nước bọt thì phải làm sạch thế nào?',
        `${short('Thổi cát lại mặt trong là cách hiệu quả nhất; nếu không có máy thổi cát, dùng chất làm sạch chuyên cho zirconia (như Ivoclean). Không dùng cồn hoặc axit phosphoric.')}
<p>Ishii và cộng sự (2015): thổi cát bổ sung làm tăng độ bền dán của zirconia nhiễm nước bọt. Phân tích gộp của Sarraf Shirazi và cộng sự (2024) trên 15 nghiên cứu in vitro: thổi cát Al₂O₃, Ivoclean và plasma argon phục hồi được độ bền dán; cồn và axit phosphoric thì không. Blatz (2024): nếu làm sạch sau khi đã thổi cát, nên thổi cát lại.</p>`],
      [29, 'Có thể dùng phosphoric acid để làm sạch zirconia sau thử miệng không?',
        `${short('Không nên. Axit phosphoric không phục hồi được độ bền dán của zirconia nhiễm nước bọt.')}
<p>Theo phân tích gộp của Sarraf Shirazi và cộng sự (2024), zirconia làm sạch bằng axit phosphoric có độ bền dán thấp hơn đáng kể so với bề mặt không nhiễm bẩn. Nước bọt chứa các nhóm phosphate bám lên zirconia và cạnh tranh vị trí liên kết với MDP; axit phosphoric cũng chứa phosphate nên không giải quyết được vấn đề. Axit phosphoric chỉ dùng để xoi mòn men răng trên cùi.</p>`],
      [30, 'Ivoclean, NaOCl và các chất làm sạch zirconia khác nhau thế nào?',
        `${short('Ivoclean (dung dịch hạt oxit zirconium) và thổi cát lại phục hồi được độ bền dán sau nhiễm nước bọt; cồn và axit phosphoric thì không. Bằng chứng cho NaOCl ít hơn.')}
${table(['Cách làm sạch', 'Phục hồi độ bền dán sau nhiễm nước bọt'], [
  ['Thổi cát Al₂O₃ lại', 'Có — hiệu quả nhất'],
  ['Ivoclean', 'Có'],
  ['Plasma argon', 'Có (ít phổ biến tại phòng khám)'],
  ['Cồn', 'Không'],
  ['Axit phosphoric', 'Không'],
])}
<p>Theo Sarraf Shirazi và cộng sự (2024, phân tích gộp 15 nghiên cứu in vitro). Dù dùng cách nào, rửa sạch, thổi khô bằng khí không dầu, rồi bôi primer MDP ngay trước khi gắn.</p>`],
    ],
    sources: ['blatz', 'alsahafi', 'christensen', 'spear', 'bisco', 'ishii', 'shirazi'] },

  /* ===================== 4. Bong mão và thất bại liên kết ===================== */
  { slug: 'bong-mao-zirconia', name: 'Bong mão và thất bại liên kết',
    title: 'Mão zirconia bị bong: nguyên nhân và cách gắn lại',
    lead: 'Vì sao mão zirconia hay bong, đọc nguyên nhân từ vị trí xi măng còn lại, xử lý cùi thuôn – ngắn, làm sạch và gắn lại mão đã bong, xoi mòn Zircos-E.',
    qs: [
      [31, 'Vì sao mão zirconia thường xuyên bị bong?',
        `${short('Thường do cùi thiếu lưu giữ (thuôn quá 20°, thấp), mặt trong mão bị nhiễm bẩn khi thử, không thổi cát hoặc không dùng primer MDP khi dán, hoặc chọn xi măng không phù hợp với hình dạng cùi.')}
<ul>
<li><strong>Hình dạng cùi:</strong> Christensen (2024) khuyến nghị độ thuôn không quá 20° và khoảng 4 mm mô răng chắc trên các thành trục.</li>
<li><strong>Nhiễm bẩn:</strong> nước bọt, máu làm giảm đáng kể độ bền dán (Alsahafi & Sulaiman, 2024).</li>
<li><strong>Xử lý bề mặt:</strong> thiếu thổi cát hoặc primer MDP khi dán bằng xi măng nhựa.</li>
<li><strong>Xi măng:</strong> dữ liệu sơ bộ của nghiên cứu TRAC (dẫn theo Christensen, 2024): bong 1% với RMGI, 4% với xi măng nhựa dán, 5% với xi măng nhựa tự dán.</li>
</ul>
<p>Trong nghiên cứu của Di Fiore và cộng sự (2023) trên 1.472 đơn vị zirconia nguyên khối, theo dõi trung bình 44 tháng, có 25 đơn vị mất lưu giữ.</p>`],
      [32, 'Mão zirconia bong nhưng xi măng vẫn còn trên cùi thì nguyên nhân thường nằm ở đâu?',
        `${short('Liên kết thất bại ở mặt tiếp xúc giữa xi măng và mặt trong mão — thường do mặt trong zirconia chưa được xử lý (thổi cát, primer MDP) hoặc bị nhiễm bẩn sau khi thử.')}
<p>Khi dán bằng xi măng nhựa, cần thổi cát mặt trong sau khi thử, bôi primer chứa MDP ngay sau đó, và tránh để mặt trong tiếp xúc lại với nước bọt (Blatz, 2024). Khi gắn lại: làm sạch và thổi cát mặt trong mão, sau đó dùng primer MDP — xem <a href="#cau-37">câu 37</a>.</p>`],
      [33, 'Xi măng nằm trong mão nhưng bong khỏi cùi nghĩa là gì?',
        `${short('Liên kết thất bại ở mặt tiếp xúc giữa xi măng và răng — thường do cùi thiếu lưu giữ cơ học, bề mặt cùi bị nhiễm bẩn khi gắn, hoặc quy trình xử lý ngà/men chưa đúng với loại xi măng.')}
<p>Kiểm tra độ thuôn và chiều cao cùi (lý tưởng 10 – 20°, chiều cao khoảng 3 – 4 mm), cách ly khi gắn, và quy trình xử lý răng theo hướng dẫn của hãng xi măng. Với xi măng nhựa, men răng lộ có thể xoi mòn bằng axit phosphoric (Alsahafi & Sulaiman, 2024).</p>`],
      [34, 'Cùi quá thuôn có phải nguyên nhân làm mão zirconia dễ bong không?',
        `${short('Có — đây là một trong những nguyên nhân thường gặp nhất. Kháng lực giảm khi độ thuôn tăng; nên giữ độ thuôn tổng 10 – 20°.')}
<p>Christensen (2024) nhận xét nhiều răng phải làm lại cùi có độ thuôn trên 20°. Với cùi đã thuôn nhiều, có thể bổ sung rãnh lưu giữ và chuyển sang dán bằng xi măng nhựa theo quy trình đầy đủ.</p>`],
      [35, 'Mão zirconia trên răng có chiều cao cùi thấp nên gắn thế nào để tăng lưu giữ?',
        `${short('Dán bằng xi măng nhựa theo quy trình APC: thổi cát mặt trong (Al₂O₃ 50 µm, áp lực thấp) → primer chứa MDP → xi măng nhựa trùng hợp kép hoặc tự trùng hợp.')}
<p>Không dùng xi măng nhựa tự dán đơn giản khi cùi thiếu lưu giữ cơ học (Alsahafi & Sulaiman, 2024). Có thể kết hợp rãnh lưu giữ trên cùi và mặt trong mão (Christensen, 2024). Khi gửi ca, ghi chú "cùi ngắn" để labo chú ý độ khít và khe xi măng.</p>`],
      [36, 'Có nên tạo rãnh lưu giữ trên cùi khi mão thường xuyên bị bong không?',
        `${short('Có thể. Rãnh ngang trên thành trục của cùi (và tương ứng trên mặt trong mão) giúp tăng lưu giữ cơ học cho cùi ngắn hoặc thuôn.')}
<p>Christensen (2024) khuyến nghị rãnh ngang trên thành trục cùi và mặt trong mão cho cùi ngắn hoặc quá thuôn, kết hợp với chất dán tốt. Rãnh cần bo tròn, không tạo vùng lẹm cản trở hướng lắp.</p>`],
      [37, 'Mão zirconia đã gắn rồi bị bong có thể xử lý và gắn lại không?',
        `${short('Được, nếu mão còn nguyên vẹn và khít. Làm sạch hết xi măng cũ ở mặt trong, thổi cát lại, bôi primer MDP rồi gắn lại ngay.')}
<p>Một nghiên cứu in vitro năm 2025 về zirconia nhiễm xi măng nhựa: làm sạch (bằng lò nung 500 °C hoặc đầu cạo vôi siêu âm) <strong>kèm thổi cát lại</strong> và gắn ngay đưa độ bền dán về mức tương đương zirconia sạch mới thổi cát (6,60 và 5,42 MPa so với 6,59 MPa); bỏ bước thổi cát lại hoặc gắn chậm cho độ bền thấp hơn (4,17 – 4,60 MPa). Đồng thời tìm và xử lý nguyên nhân bong — xem <a href="#cau-31">câu 31</a>.</p>`],
      [38, 'Mặt trong zirconia đã bị nhiễm xi măng cũ phải làm sạch thế nào trước khi gắn lại?',
        `${short('Loại bỏ cơ học xi măng cũ (đầu cạo vôi siêu âm tại phòng khám, hoặc nung ở 500 °C tại labo), sau đó thổi cát lại và gắn ngay.')}
<p>Nghiên cứu in vitro năm 2025 nói trên đánh giá đầu cạo vôi siêu âm là cách làm sạch thực tế và hiệu quả tại phòng khám. Gắn lại chậm làm giảm độ bền dán dù đã xử lý lại bề mặt. Nếu cần, phòng khám gửi mão về labo để làm sạch và xử lý bề mặt.</p>`],
      [39, 'Xử lý bề mặt zirconia bằng Zircos-E có giúp tăng độ bám dính không?',
        `${short('Các nghiên cứu trong phòng thí nghiệm cho thấy có: Zircos-E làm tăng độ bền dán so với chỉ thổi cát, nhất là trước lão hoá nhiệt; chưa có dữ liệu lâm sàng dài hạn.')}
<p>Sokolowski và cộng sự (2023): sau 24 giờ, trung vị cao nhất 17,7 MPa (xoi mòn + primer) so với 6,1 MPa (chỉ thổi cát). Phân tích gộp của Alawawda và cộng sự (2026) trên 8 nghiên cứu: Zircos-E cao hơn thổi cát, khác biệt không còn ý nghĩa thống kê sau lão hoá nhiệt. Cho và cộng sự (2017): hiệu quả phụ thuộc loại xi măng. KTV Dental Lab xoi mòn Zircos-E miễn phí cho inlay, onlay, overlay zirconia — <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xem dịch vụ</a>.</p>`],
      [40, 'Xoi mòn zirconia bằng hóa chất khác gì so với thổi cát?',
        `${short('Thổi cát tạo nhám bằng va đập hạt Al₂O₃ trên vùng được thổi tới; xoi mòn hoá chất (như Zircos-E) tạo độ xốp nhẹ trên toàn bộ bề mặt, kể cả vùng khó thổi cát.')}
${table(['', 'Thổi cát Al₂O₃', 'Xoi mòn Zircos-E'], [
  ['Thực hiện', 'Tại phòng khám hoặc labo, vài giây', 'Tại labo, ngâm tối đa 2 giờ tuỳ kích thước'],
  ['Phạm vi', 'Vùng hạt cát thổi tới', 'Toàn bộ bề mặt ngâm'],
  ['Lưu ý', 'Áp lực cao, hạt lớn làm giảm độ bền zirconia', 'Chưa có dữ liệu lâm sàng dài hạn'],
  ['Sau nhiễm nước bọt khi thử', 'Thổi cát lại', 'Gắn theo quy trình thông thường'],
])}
<p>Số liệu độ bền dán: xem <a href="#cau-39">câu 39</a>.</p>`],
    ],
    sources: ['christensen', 'alsahafi', 'blatz', 'difiore', 'recement', 'sokolowski', 'alawawda', 'cho2017', 'iowa'] },

  /* ===================== 5. Khớp cắn, mẻ và gãy ===================== */
  { slug: 'khop-can-me-gay-zirconia', name: 'Khớp cắn, mẻ và gãy zirconia',
    title: 'Zirconia mẻ, gãy, mòn răng đối diện, connector',
    lead: 'Vì sao zirconia vẫn gãy, nguyên khối hay đắp sứ ít mẻ hơn, chỉnh khớp – đánh bóng – glaze, bệnh nhân nghiến răng, độ dày và vùng nối cầu.',
    qs: [
      [41, 'Vì sao mão zirconia có thể bị gãy dù zirconia rất cứng?',
        `${short('Zirconia bền nhưng vẫn là gốm giòn: gãy thường bắt đầu từ chỗ quá mỏng, vùng nối cầu nhỏ, góc sắc, vết nứt nhỏ sau khi mài chỉnh, hoặc lực cắn quá mức.')}
<p>Trên implant, tổng quan của Pjetursson và cộng sự (2018) ghi nhận tỉ lệ gãy vật liệu sau 5 năm 2,1% với mão sườn zirconia so với 0,2% với mão sứ – kim loại. Dòng độ trong cao có độ bền uốn thấp hơn nhiều (Katana UTML 557 MPa so với HTML PLUS 1.150 MPa) nên dễ gãy hơn nếu dùng sai chỉ định. Kuraray Noritake khuyến nghị kiểm tra vết nứt sau khi mài chỉnh.</p>`],
      [42, 'Zirconia nguyên khối và zirconia đắp sứ loại nào ít mẻ hơn?',
        `${short('Zirconia nguyên khối — không có lớp sứ đắp nên không có biến chứng mẻ sứ đắp.')}
<p>Với mão trên răng thật, Sailer và cộng sự (2015) ghi nhận tỉ lệ mất mão do vỡ sứ đắp sau 5 năm khoảng 3,2% với sườn zirconia, 0,3% với sườn kim loại. Trên implant, Pjetursson và cộng sự (2018) ghi nhận tỉ lệ mẻ sứ đắp tương đương giữa sườn zirconia và sườn kim loại (khoảng 2,8 – 2,9%).</p>`],
      [43, 'Vì sao lớp sứ phủ trên zirconia dễ bị chipping?',
        `${short('Chủ yếu do lớp sứ đắp không được sườn đỡ đều (lớp sứ dày, không đều), cùng khác biệt về tính chất nhiệt giữa sườn zirconia và sứ đắp trong quá trình nung – làm nguội.')}
<p>Biện pháp thường dùng: thiết kế sườn giải phẫu thu nhỏ để lớp sứ dày đều; dùng sứ đắp có hệ số giãn nở nhiệt phù hợp với sườn (ví dụ DD Bio ZX² có hệ số khoảng 10,6 × 10⁻⁶ K⁻¹); hoặc chuyển sang zirconia nguyên khối / cut-back ở vùng chịu lực. Dữ liệu lâm sàng về tỉ lệ mẻ: xem <a href="#cau-42">câu 42</a>.</p>`],
      [44, 'Mài chỉnh khớp cắn zirconia sau khi nung có làm yếu phục hình không?',
        `${short('Có thể, nếu mài bằng mũi thô, không làm mát hoặc dùng lực mạnh — mài tạo vết nứt nhỏ trên bề mặt. Chỉnh bằng mũi kim cương hạt mịn có nước, rồi đánh bóng lại.')}
<p>Hướng dẫn Katana STML, UTML: không dùng mũi thô (đá xanh, mũi kim cương hạt thô) cho bước chỉnh cuối; với dòng độ bền thấp hơn, tránh dùng lực mạnh và làm việc dưới nước khi chỉnh mặt trong và bờ viền; kiểm tra vết nứt sau khi chỉnh. Khi gửi ca, khớp cắn chính xác (scan khớp cắn hoặc mẫu hàm đối diện) giúp giảm lượng phải chỉnh trong miệng.</p>`],
      [45, 'Sau khi chỉnh khớp zirconia nên đánh bóng hay glaze lại?',
        `${short('Tại phòng khám: đánh bóng kỹ vùng đã mài bằng bộ đánh bóng chuyên cho zirconia. Nếu chỉnh nhiều, gửi lại labo để glaze lại.')}
<p>Trong nghiên cứu in vitro của Alves và cộng sự (2019), zirconia glaze gây mòn vật liệu đối diện ít nhất (0,29 mm³), nhưng lớp glaze tự mòn đi theo thời gian; zirconia đánh bóng (2,16 mm³) và không hoàn thiện (2,67 mm³) gây mòn nhiều hơn. Vì vậy vùng đã mài không nên để thô — đánh bóng là tối thiểu, glaze lại khi có điều kiện.</p>`],
      [46, 'Zirconia không được đánh bóng kỹ có làm mòn răng đối diện không?',
        `${short('Có xu hướng làm mòn nhiều hơn. Bề mặt zirconia không hoàn thiện gây mòn vật liệu đối diện nhiều nhất trong thử nghiệm.')}
<p>Alves và cộng sự (2019): thể tích mòn của vật liệu đối diện 2,67 mm³ với zirconia không hoàn thiện, 2,16 mm³ với zirconia đánh bóng, 0,29 mm³ với zirconia glaze. Đây là thử nghiệm in vitro với vật liệu thay men răng; tuy vậy nguyên tắc chung vẫn là không để bề mặt zirconia thô sau khi chỉnh.</p>`],
      [47, 'Bruxism nên chọn zirconia loại nào?',
        `${short('Zirconia nguyên khối độ bền cao (nhóm 3Y hoặc lớp thân của phôi nhiều lớp), không đắp sứ ở mặt nhai, đủ độ dày; kèm máng bảo vệ ban đêm theo chỉ định của bác sĩ.')}
<p>Tổng quan của Leitão và cộng sự (2022) về zirconia nguyên khối CAD/CAM: tỉ lệ tồn tại 91 – 100% ở phần lớn nghiên cứu, nhưng một nghiên cứu trên bệnh nhân nghiến răng chỉ đạt 31,6%. Tránh dòng độ trong cao (5Y) cho vùng chịu lực ở bệnh nhân nghiến. <a href="/phuc-hinh/mao-full-kim-loai/">Mão toàn kim loại</a> là lựa chọn khác khi không cần thẩm mỹ.</p>`],
      [48, 'Răng hàm có lực cắn mạnh nên thiết kế độ dày zirconia bao nhiêu?',
        `${short('Không thấp hơn độ dày tối thiểu của hãng; với răng hàm chịu lực mạnh, nên giữ mặt nhai khoảng 1,0 – 1,5 mm nếu khoảng phục hình cho phép.')}
<p>Giáo trình Iowa: mài mặt nhai 1,0 – 1,5 mm (múi chức năng) cho zirconia nguyên khối, độ dày tối thiểu 0,8 mm. Mức tối thiểu của hãng (ví dụ 0,5 mm cho Katana YML răng sau, 0,5 mm cho Lava Plus cầu răng sau) là giới hạn dưới, không phải mục tiêu với bệnh nhân lực cắn mạnh.</p>`],
      [49, 'Connector cầu zirconia nên có kích thước bao nhiêu?',
        `${short('Theo hướng dẫn của từng dòng phôi. Ví dụ Katana STML, UTML: cầu 2 – 3 đơn vị cần vùng nối tối thiểu 12 mm² ở răng trước và 16 mm² ở răng sau.')}
<p>Dòng độ trong cao cần vùng nối lớn hơn dòng độ bền cao. Với Katana YML, cầu từ 4 đơn vị cần ít nhất 50% tiết diện vùng nối nằm ở nửa dưới phôi (lớp bền hơn). Chiều cao vùng nối quan trọng hơn chiều rộng; cần đủ khoảng từ đỉnh gai nướu đến gờ bên — khi gửi ca, cho labo biết nếu khoảng này hạn chế.</p>`],
      [50, 'Vì sao cầu zirconia thường gãy ở vùng connector?',
        `${short('Vùng nối là nơi tiết diện nhỏ nhất và tập trung ứng suất uốn khi nhai; gãy thường xảy ra khi vùng nối thiếu tiết diện (nhất là thiếu chiều cao), kẽ nướu dưới vùng nối có góc sắc, hoặc dùng dòng độ trong cao cho cầu dài.')}
<p>Phòng ngừa: đủ tiết diện theo hướng dẫn của hãng (ví dụ 12 / 16 mm² cho Katana STML, UTML); bo tròn kẽ nướu dưới vùng nối; chọn dòng có chỉ định cầu dài; với phôi nhiều lớp, đặt vùng nối ở lớp bền; không mài chỉnh làm mỏng vùng nối sau khi nung.</p>`],
    ],
    sources: ['pjet', 'sailer', 'katana', 'katanaYML', 'katanaGuide', 'ddbio', 'alves', 'leitao', 'iowa', 'lavaBro'] },
];
