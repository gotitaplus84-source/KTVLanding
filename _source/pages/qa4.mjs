// Hỏi đáp kỹ thuật — đợt 4 (câu 117–140): những câu bác sĩ, phụ tá và lễ tân nha khoa hay tìm hoặc hỏi trợ lý AI
// mà site chưa có: thiết kế cầu và thử sườn; nhận ca, thử, gắn và răng tạm; tuổi thọ, tháo, sửa răng sứ.
// Cùng quy ước với qa.mjs: câu đầu trả lời thẳng, mọi con số có nguồn trong SOURCES.
// Về labo chỉ nêu những gì labo đã công bố (vật liệu, thời gian sản xuất, bảo hành, cách gửi ca).

const short = (t) => `<p class="qa-short">${t}</p>`;

export const QA_TOPICS_4 = [
  /* ===================== 13. Cầu răng: răng trụ, nhịp cầu và thử sườn ===================== */
  { slug: 'cau-rang-thu-suon', name: 'Cầu răng: răng trụ, nhịp cầu và thử sườn',
    title: 'Cầu răng sứ: mấy răng trụ, cầu với, nhịp cầu, thử sườn',
    lead: 'Cầu răng cần mấy răng trụ, định luật Ante còn đúng không, khi nào làm cầu với, chọn kiểu nhịp cầu, khi nào thử sườn, cầu răng sứ dùng được bao lâu.',
    published: '2026-10-13', updated: '2026-10-13',
    links: [['Mão sứ đắp sứ', '/phuc-hinh/mao-su-dap-su/'], ['So sánh các dòng zirconia', '/vat-lieu/so-sanh-zirconia/'], ['Thời gian sản xuất', '/thoi-gian-san-xuat/'], ['Phiếu chỉ định online', '/phieu-chi-dinh/']],
    qs: [
      [117, 'Cầu răng cần bao nhiêu răng trụ? Định luật Ante còn áp dụng không?',
        `${short('Không có con số cố định. Định luật Ante (diện tích dây chằng nha chu của răng trụ phải bằng hoặc lớn hơn của răng được thay) là một quy tắc kinh nghiệm từ năm 1926, chưa được các nghiên cứu dài hạn xác nhận.')}
<p>Tổng quan hệ thống của Lulić và cộng sự (2007) trên cầu răng làm trên răng trụ có mô nha chu giảm nặng nhưng đã điều trị ổn định cho thấy chức năng ăn nhai vẫn duy trì được và tỉ lệ tồn tại của cầu tương đương với bệnh nhân không có tổn thương nha chu nặng — với điều kiện bệnh nhân được kiểm soát nha chu và tái khám đều. Bằng chứng chủ yếu từ nghiên cứu hồi cứu nên mức độ còn hạn chế.</p>
<p>Khi quyết định số răng trụ, những yếu tố thực tế quan trọng hơn tỉ lệ diện tích chân răng:</p>
<ul>
<li><strong>Tình trạng răng trụ:</strong> đã chữa tuỷ chưa, còn bao nhiêu mô răng, có vùng đai (ferrule) không — xem <a href="/phuc-hinh/cui-gia/">cùi giả</a>.</li>
<li><strong>Chiều dài nhịp và độ cong cung răng:</strong> nhịp càng dài, vùng nối chịu lực uốn càng lớn — xem <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-49">kích thước vùng nối cầu zirconia</a>.</li>
<li><strong>Lực nhai:</strong> nghiến răng, cắn chặt, đối diện là răng sứ hay implant.</li>
<li><strong>Vật liệu:</strong> mỗi dòng phôi zirconia có giới hạn số đơn vị và số nhịp riêng — xem <a href="/hoi-dap/chon-vat-lieu-zirconia/#cau-6">chọn phôi cho cầu 4 – 6 đơn vị</a>.</li>
</ul>`],
      [118, 'Cầu với (cầu một đầu, cantilever) dùng được khi nào?',
        `${short('Dùng được trong ca chọn lọc: thường thay một răng nhỏ, lực nhai thấp, răng trụ vững và khớp cắn trên nhịp được kiểm soát. Tỉ lệ tồn tại thấp hơn cầu có hai đầu trụ.')}
<p>Theo tổng quan hệ thống của Pjetursson và cộng sự (2004), tỉ lệ tồn tại sau 10 năm của cầu với khoảng <strong>81,8%</strong>, thấp hơn mức <strong>89,1%</strong> của cầu thông thường hai đầu trụ trong tổng quan của Tan và cộng sự (2004). Ở cầu với, biến chứng sinh học thường gặp nhất là răng trụ mất tuỷ sống, biến chứng kỹ thuật thường gặp nhất là bong cầu.</p>
<p>Khi chỉ định cầu với, ghi rõ trên phiếu để labo thiết kế nhịp nhỏ hơn răng thật, giảm tiếp xúc khớp cắn trên nhịp, không để nhịp chạm trong vận động sang bên; và chọn răng trụ có chân dài, vững.</p>`],
      [119, 'Nhịp cầu nên làm kiểu nào: ridge lap cải tiến, ovate hay nhịp vệ sinh?',
        `${short('Vùng thẩm mỹ thường dùng ridge lap cải tiến hoặc ovate; vùng răng sau không lộ khi cười có thể dùng nhịp dễ vệ sinh. Tránh ridge lap toàn phần (ôm cả sống hàm) vì mặt dưới lõm, gần như không làm sạch được.')}
${'<div class="table-wrap"><table><thead><tr><th>Kiểu nhịp</th><th>Tiếp xúc sống hàm</th><th>Phù hợp</th></tr></thead><tbody>'}
<tr><td>Ridge lap cải tiến</td><td>Chỉ chạm phía ngoài sống hàm, mặt dưới lồi</td><td>Răng trước, răng cối nhỏ hàm trên: cân bằng thẩm mỹ và vệ sinh</td></tr>
<tr><td>Ovate</td><td>Đầu tròn tựa nhẹ vào hõm sống hàm</td><td>Răng trước cần thẩm mỹ cao; sống hàm phải được chuẩn bị (thường ngay sau nhổ hoặc tạo hõm)</td></tr>
<tr><td>Nhịp vệ sinh</td><td>Không chạm, có khoảng hở dưới nhịp</td><td>Răng hàm dưới vùng sau, không yêu cầu thẩm mỹ</td></tr>
<tr><td>Ridge lap toàn phần</td><td>Ôm cả hai phía sống hàm</td><td>Không khuyến nghị: khó làm sạch, dễ viêm mô dưới nhịp</td></tr>
</tbody></table></div>
<p>Dù kiểu nào, mặt tiếp xúc mô của nhịp cần được đánh bóng kỹ, và bệnh nhân cần được hướng dẫn làm sạch dưới nhịp bằng chỉ luồn hoặc bàn chải kẽ. Ghi kiểu nhịp mong muốn trên phiếu; nếu không ghi, labo chọn theo vị trí và ảnh trong miệng.</p>`],
      [120, 'Khi nào nên thử sườn hoặc thử sứ thô trước khi hoàn tất?',
        `${short('Nên thử với cầu dài, cầu có nhiều răng trụ, ca dấu khó hoặc nghi ngờ dữ liệu, và ca răng trước cần chỉnh hình thể – màu. Mão đơn trên dữ liệu tốt thường không cần.')}
<p>Ở răng sứ – kim loại, sườn được thử trong miệng trước khi đắp sứ để kiểm tra độ khít, độ vững và khoảng cho sứ. Hướng dẫn điều trị của FOR (Foundation for Oral Rehabilitation) cũng mô tả bước thử ở giai đoạn <em>sứ thô</em> (bisque bake), trước khi glaze và nhuộm màu, để còn chỉnh hình thể hoặc đắp thêm sứ.</p>
<ul>
<li><strong>Nên thử:</strong> cầu từ 4 đơn vị, cầu toàn hàm, phục hình trên nhiều implant, ca lấy dấu bờ viền sâu, ca răng cửa yêu cầu thẩm mỹ cao.</li>
<li><strong>Đổi lại:</strong> thêm một lần hẹn và thời gian chờ. Lễ tân cần xếp lịch thử trước ngày gắn — xem <a href="/hoi-dap/nhan-thu-gan-phuc-hinh/#cau-132">số lần hẹn</a>.</li>
</ul>
<p>Muốn thử sườn hay thử sứ thô, ghi rõ trên phiếu chỉ định để labo dừng đúng giai đoạn.</p>`],
      [121, 'Thử sườn kim loại cần kiểm tra những gì?',
        `${short('Bốn việc: sườn ngồi hết và khít bờ, không bập bênh, đủ khoảng cho sứ với răng đối diện, và vùng nối – nhịp không ép mô.')}
<ul>
<li><strong>Ngồi hết, khít bờ:</strong> kiểm tra bằng thám trâm dọc bờ; nếu không xuống, kiểm tra tiếp xúc bên và mặt trong bằng chất chỉ thị (silicone kiểm tra độ khít hoặc bột xịt).</li>
<li><strong>Không bập bênh:</strong> ấn luân phiên hai đầu trụ. Cầu bập bênh thường do sai dấu hoặc mẫu, không sửa được bằng mài.</li>
<li><strong>Khoảng cho sứ:</strong> cho bệnh nhân cắn, kiểm tra khoảng giữa sườn và răng đối diện ở mọi vùng sẽ phủ sứ.</li>
<li><strong>Nhịp và vùng nối:</strong> không chạm mạnh vào nướu; còn chỗ cho dụng cụ làm sạch dưới vùng nối.</li>
</ul>
<p>Ghi nhận xét lên phiếu hoặc nhắn labo kèm ảnh. Lấy lại khớp cắn trên sườn khi khớp cắn cũ không chắc chắn.</p>`],
      [122, 'Thử sườn cầu không khít thì xử lý thế nào?',
        `${short('Xác định do đâu trước: nếu từng răng trụ khít riêng nhưng cả cầu không xuống, có thể cắt sườn qua nhịp, thử từng nửa rồi ghi vị trí để labo nối lại; nếu từng răng trụ cũng không khít, cần lấy dấu hoặc scan lại.')}
<p>Một báo cáo lâm sàng mô tả cách làm: sườn cầu dài không khít được cắt qua nhịp bằng đĩa cắt, thử từng nửa trong miệng; nửa nào khít thì giữ lại và nối, nửa nào vẫn không khít thì đúc lại. Khi đã cắt, cố định hai nửa trong miệng bằng nhựa chuyên dùng (ví dụ nhựa cố định sườn) và gửi kèm để labo nối đúng vị trí.</p>
<p>Với cầu zirconia, sườn đã nung kết không cắt nối được như kim loại; nếu không khít, labo cần dữ liệu mới. Đó là lý do cầu zirconia dài nên được kiểm tra dữ liệu kỹ ngay từ đầu — xem <a href="/hoi-dap/scan-trong-mieng/#cau-62">scan cầu dài</a>.</p>`],
      [123, 'Cầu răng sứ dùng được bao lâu và thường hỏng vì đâu?',
        `${short('Theo tổng quan hệ thống của Tan và cộng sự (2004), khoảng 89% cầu răng thông thường còn tồn tại sau 10 năm. Nguyên nhân mất cầu thường gặp là sâu răng trụ, bong cầu và gãy răng trụ, nhiều hơn là vỡ vật liệu.')}
<p>Ước tính trong 10 năm của cùng tổng quan: mất cầu do sâu răng khoảng 2,6%; bong cầu 6,4%; gãy răng trụ 2,1%; gãy vật liệu 3,2%. Tỉ lệ cầu không có bất kỳ biến chứng nào sau 10 năm chỉ khoảng 71%.</p>
<p>Nghĩa là phần lớn yếu tố quyết định tuổi thọ cầu nằm ở răng trụ và vệ sinh: mài cùi đủ lưu giữ, bờ viền khít, nhịp dễ làm sạch, bệnh nhân dùng chỉ luồn và tái khám. Thời hạn bảo hành theo dòng vật liệu tại labo: <a href="/bao-hanh/">bảo hành</a>.</p>`],
      [124, 'Mão, cầu zirconia nguyên khối có thử trước khi glaze được không?',
        `${short('Được, nếu ghi yêu cầu trên phiếu: labo giao ở giai đoạn đã nung kết, chưa glaze – nhuộm hoàn tất, để bác sĩ kiểm tra độ khít, tiếp xúc, khớp cắn và hình thể rồi gửi lại.')}
<p>Cách này hữu ích cho cầu dài và ca răng trước, vì mọi chỉnh sửa hình thể, tiếp xúc được làm trước khi glaze, tránh phải mài trên bề mặt đã hoàn tất — xem <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-44">mài chỉnh zirconia sau khi nung</a>. Đổi lại thêm một lần hẹn.</p>
<p>Khi thử: không dùng xi măng thử có thể nhiễm vào mặt trong mà khó làm sạch; nếu đã thử trong miệng, mặt trong cần làm sạch đúng cách trước khi gắn chính thức — xem <a href="/hoi-dap/gan-mao-zirconia/#cau-28">làm sạch zirconia sau thử miệng</a>.</p>`],
    ],
    sources: ['lulic', 'pjet2004cant', 'tan2004', 'forTrial', 'metalTryin'] },

  /* ===================== 14. Nhận ca, thử, gắn và răng tạm ===================== */
  { slug: 'nhan-thu-gan-phuc-hinh', name: 'Nhận ca, thử, gắn và răng tạm',
    title: 'Nhận, thử, gắn răng sứ và làm răng tạm: việc của phụ tá',
    lead: 'Cho phụ tá, lễ tân nha khoa: kiểm tra ca labo giao, khử khuẩn, thứ tự thử mão, răng tạm, xi măng tạm eugenol, xi măng thừa quanh implant, lịch hẹn.',
    published: '2026-10-13', updated: '2026-10-13',
    links: [['Thời gian sản xuất', '/thoi-gian-san-xuat/'], ['Phiếu chỉ định online', '/phieu-chi-dinh/'], ['Phục hình trên implant', '/phuc-hinh/phuc-hinh-tren-implant/'], ['Cách gửi ca', '/gui-ca/']],
    qs: [
      [125, 'Nhận phục hình từ labo cần kiểm tra những gì trước ngày hẹn?',
        `${short('Kiểm tra ngay khi nhận, đừng đợi bệnh nhân ngồi ghế: đúng bệnh nhân và vị trí răng, đúng loại phục hình – vật liệu – màu như phiếu, phục hình ngồi khít trên mẫu, không nứt mẻ, đủ phụ kiện.')}
<ul>
<li><strong>Đối chiếu phiếu:</strong> tên hoặc mã bệnh nhân, số răng, loại phục hình, dòng phôi, màu.</li>
<li><strong>Trên mẫu:</strong> mão ngồi hết, bờ khít, tiếp xúc bên có, không bập bênh (với cầu).</li>
<li><strong>Bề mặt:</strong> soi dưới đèn tìm vết nứt, mẻ, bọt; mặt trong sạch.</li>
<li><strong>Phụ kiện implant:</strong> vít, abutment, máng định vị (nếu có) đủ và đúng hệ.</li>
<li><strong>Thẻ:</strong> thẻ bảo hành của labo và thẻ chứng nhận xuất xứ của hãng phôi đi kèm, đúng dòng vật liệu trên phiếu — xem <a href="/bao-hanh/#the-bao-hanh">thẻ bảo hành và thẻ xuất xứ</a>.</li>
<li><strong>Ngày hẹn:</strong> phục hình về kịp lịch bệnh nhân; nếu cần chỉnh, báo labo ngay để còn thời gian.</li>
</ul>
<p>Có sai khác so với phiếu, chụp ảnh và nhắn labo trước buổi hẹn. Phiếu ghi rõ ngay từ đầu giúp tránh phần lớn nhầm lẫn — <a href="/phieu-chi-dinh/">phiếu chỉ định online</a> có sẵn các mục này.</p>`],
      [126, 'Phục hình labo giao có cần khử khuẩn lại trước khi thử trong miệng không?',
        `${short('Phục hình phải được khử khuẩn trước khi vào miệng, nhưng không nhất thiết làm hai lần. Theo hướng dẫn của CDC (Hoa Kỳ), labo và phòng khám thống nhất bên nào khử khuẩn khâu cuối; nếu labo đã khử khuẩn và ghi rõ, phòng khám không cần lặp lại; nếu không có ghi nhận, phòng khám khử khuẩn trước khi thử.')}
<ul>
<li><strong>Thống nhất trước với labo:</strong> ai khử khuẩn khâu cuối, và labo ghi nhận việc này ở đâu (trên phiếu giao, nhãn túi). Khử khuẩn lặp lại không cần thiết có thể làm hại bề mặt một số vật liệu.</li>
<li><strong>Khi không có ghi nhận:</strong> làm sạch, khử khuẩn bằng dung dịch có hoạt tính ít nhất mức trung bình, đúng thời gian tiếp xúc, rồi rửa sạch — theo hướng dẫn của hãng dung dịch và tương thích với vật liệu.</li>
<li>Với zirconia sẽ gắn bằng xi măng nhựa, tránh để mặt trong tiếp xúc chất làm bẩn bề mặt; sau thử miệng, mặt trong cần làm sạch lại trước khi gắn — xem <a href="/hoi-dap/gan-mao-zirconia/#cau-28">câu 28</a> và <a href="/hoi-dap/gan-mao-zirconia/#cau-30">câu 30</a>.</li>
<li>Phục hình thử không đạt gửi trả labo cũng cần khử khuẩn trước khi đóng gói, như với dấu — xem <a href="/hoi-dap/lay-dau-gui-labo/#cau-113">khử khuẩn dấu</a>.</li>
</ul>`],
      [127, 'Thử mão răng trong miệng theo thứ tự nào?',
        `${short('Tiếp xúc bên trước, rồi độ khít bờ, sau đó khớp cắn, cuối cùng là hình thể và màu. Sai thứ tự dễ mài nhầm chỗ.')}
<ol>
<li><strong>Tiếp xúc bên:</strong> chỉ nha khoa qua được với lực cản vừa phải. Tiếp xúc quá chặt làm mão không xuống hết — xem <a href="/hoi-dap/sat-khit-tiep-xuc-hinh-the/#cau-55">câu 55</a>.</li>
<li><strong>Độ khít bờ:</strong> khi mão đã xuống hết, kiểm tra bờ bằng thám trâm; nghi ngờ thì dùng chất chỉ thị mặt trong.</li>
<li><strong>Khớp cắn:</strong> chỉ chỉnh sau khi chắc chắn mão đã ngồi hết; mão chưa xuống hết luôn có vẻ cao khớp — xem <a href="/hoi-dap/tinh-huong-lam-sang/#cau-91">câu 91</a>.</li>
<li><strong>Hình thể, màu:</strong> xem dưới ánh sáng chuẩn, cho bệnh nhân xem gương ở khoảng cách nói chuyện.</li>
</ol>
<p>Zirconia đã mài chỉnh cần đánh bóng lại trước khi gắn — xem <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-45">câu 45</a>.</p>`],
      [128, 'Làm răng tạm thế nào cho đúng trong thời gian chờ labo?',
        `${short('Răng tạm cần khít bờ, có tiếp xúc bên và khớp cắn nhẹ, không ép nướu. Răng tạm hở hoặc lỏng làm nướu viêm, chảy máu, răng xô lệch — khiến mão chính thức khó vào và khó gắn.')}
<ul>
<li><strong>Vật liệu:</strong> nhựa bis-acryl thường được chọn cho răng tạm làm trực tiếp vì co ít và ít sinh nhiệt hơn nhựa PMMA tự trùng hợp; PMMA phù hợp khi làm gián tiếp hoặc cần răng tạm dài ngày.</li>
<li><strong>Bờ viền:</strong> mài gọn phần thừa, đánh bóng, không để gờ nhựa lấn xuống dưới nướu.</li>
<li><strong>Tiếp xúc và khớp cắn:</strong> giữ tiếp xúc bên để răng kế bên không di chuyển; khớp cắn nhẹ hơn răng thật.</li>
<li><strong>Thời gian chờ:</strong> càng ngắn càng ít biến chứng. Thời gian sản xuất tại labo: răng đơn lẻ, 2 – 3 đơn vị 1 ngày, tính từ lúc labo nhận hàng — xem <a href="/thoi-gian-san-xuat/">thời gian sản xuất</a>.</li>
</ul>
<p>Răng tạm bị bong hoặc vỡ trong lúc chờ: gắn lại sớm, vì vài ngày không có răng tạm là đủ để nướu phủ lên bờ viền hoặc răng đối diện trồi xuống.</p>`],
      [129, 'Gắn răng tạm bằng xi măng có eugenol có ảnh hưởng khi gắn mão bằng xi măng nhựa không?',
        `${short('Có thể, nhưng không phải lúc nào cũng vậy. Bằng chứng chủ yếu từ phòng thí nghiệm; điều quan trọng nhất là làm sạch cơ học hết xi măng tạm trước khi gắn chính thức.')}
<p>Phân tích gộp của Ding và cộng sự (2023, <em>Clinical Oral Investigations</em>) trên 14 nghiên cứu in vitro: xi măng tạm làm giảm độ bám của phục hình gián tiếp khi ngà được dán sau (delayed dentin sealing); khi ngà được dán ngay sau khi mài (immediate dentin sealing), ảnh hưởng này gần như không còn. Xi măng tạm polycarboxylate và calcium hydroxide cho kết quả tốt hơn nhóm nhựa và nhóm oxide kẽm không eugenol.</p>
<ul>
<li>Định gắn chính thức bằng xi măng nhựa: ưu tiên xi măng tạm không eugenol cho thuận tiện.</li>
<li>Dù dùng loại nào: lấy phần lớn xi măng tạm bằng dụng cụ, rồi làm sạch cùi bằng thổi hạt Al₂O₃. Trong cùng phân tích gộp, thổi Al₂O₃ đưa độ bám về mức tương đương nhóm không dùng xi măng tạm và tốt hơn chỉ dùng dụng cụ cầm tay; đánh bóng bằng pumice đơn thuần làm sạch không ổn định.</li>
<li>Gắn bằng xi măng glass ionomer hoặc RMGI: xi măng tạm có eugenol ít đáng lo hơn.</li>
</ul>
<p>Chọn xi măng gắn chính thức cho zirconia: <a href="/hoi-dap/gan-mao-zirconia/#cau-21">câu 21</a>.</p>`],
      [130, 'Lấy xi măng thừa thế nào, nhất là mão gắn xi măng trên implant?',
        `${short('Xi măng thừa dưới niêm mạc quanh implant là một yếu tố liên quan đến viêm quanh implant. Bờ viền càng sâu dưới niêm mạc, xi măng thừa càng khó lấy hết, và phim X-quang không đủ tin cậy để phát hiện.')}
<p>Wilson (2009, <em>Journal of Periodontology</em>) dùng nội soi nha khoa ở bệnh nhân có dấu hiệu viêm quanh implant: phần lớn ca có xi măng thừa, và các dấu hiệu viêm giảm ở đa số implant sau khi lấy hết xi măng thừa. Linkevicius và cộng sự (2011) ghi nhận lượng xi măng thừa sót lại nhiều hơn rõ rệt khi bờ viền nằm sâu dưới niêm mạc; với bờ sâu trên khoảng 1 mm, gần như không lấy hết được.</p>
<ul>
<li><strong>Thiết kế:</strong> abutment cá nhân hoá đưa bờ viền lên ngang hoặc sát bờ niêm mạc; hoặc chọn mão bắt vít — xem <a href="/hoi-dap/thiet-ke-tren-implant/#cau-81">bắt vít hay gắn xi măng</a>.</li>
<li><strong>Lượng xi măng:</strong> chỉ quét một lớp mỏng ở phần bờ trong của mão; có thể ép thừa ra ngoài trên một bản sao abutment trước khi đưa vào miệng.</li>
<li><strong>Làm sạch:</strong> lấy xi măng ở giai đoạn đông một phần, dùng chỉ nha khoa và dụng cụ không làm xước bề mặt; kiểm tra lại ở lần tái khám.</li>
</ul>`],
      [131, 'Dặn bệnh nhân những gì sau khi gắn răng sứ?',
        `${short('Ba nhóm: ăn nhai trong ngày đầu theo loại xi măng, vệ sinh kẽ và dưới nhịp cầu, và khi nào cần quay lại ngay.')}
<ul>
<li><strong>Ngày đầu:</strong> xi măng glass ionomer cần thời gian để đạt độ cứng — tránh nhai mạnh, đồ dẻo dính phía bên có răng mới gắn theo hướng dẫn của bác sĩ.</li>
<li><strong>Vệ sinh:</strong> chải răng bình thường, dùng chỉ nha khoa; cầu răng cần chỉ luồn hoặc bàn chải kẽ để làm sạch dưới nhịp.</li>
<li><strong>Nghiến răng:</strong> nếu có, cân nhắc máng bảo vệ ban đêm, nhất là với phục hình có sứ đắp.</li>
<li><strong>Quay lại ngay khi:</strong> cắn thấy cộm, đau khi nhai kéo dài, mão lung lay, giắt thức ăn liên tục — xem <a href="/hoi-dap/tinh-huong-lam-sang/#cau-92">đau khi cắn sau gắn mão</a>, <a href="/hoi-dap/tinh-huong-lam-sang/#cau-93">nhét thức ăn</a>.</li>
<li><strong>Tái khám định kỳ</strong> để kiểm tra bờ viền, nướu và khớp cắn.</li>
</ul>`],
      [132, 'Làm răng sứ mất mấy lần hẹn? Lễ tân xếp lịch thế nào?',
        `${short('Mão đơn, cầu ngắn thường 2 lần hẹn: mài – lấy dấu (hoặc scan) – làm răng tạm, rồi thử – gắn. Ca cần thử sườn, thử sứ thô hoặc phục hình trên implant có thể thêm 1 lần.')}
<p>Khoảng cách giữa hai lần hẹn tính bằng thời gian vận chuyển dấu đến labo cộng thời gian sản xuất. Tại KTV Dental Lab, thời gian sản xuất áp dụng cho mọi loại phục hình, tính từ lúc labo nhận hàng:</p>
<div class="table-wrap"><table><thead><tr><th>Loại ca</th><th>Thời gian sản xuất</th></tr></thead><tbody>
<tr><td>Răng đơn lẻ, 2 – 3 đơn vị</td><td><strong>1 ngày</strong> (tối đa 36 giờ)</td></tr>
<tr><td>Cầu răng 4 – 8 đơn vị</td><td><strong>2 ngày</strong> (tối đa 60 giờ)</td></tr>
<tr><td>Cầu toàn hàm</td><td><strong>3 ngày</strong></td></tr>
<tr><td>Hai hàm toàn hàm</td><td><strong>4 ngày</strong></td></tr>
</tbody></table></div>
<ul>
<li>Gửi file scan thì không mất thời gian vận chuyển dấu; dấu truyền thống cộng thêm thời gian giao nhận.</li>
<li>Ca cần thử sườn hoặc thử sứ thô: xếp thêm lịch thử giữa hai lần hẹn — xem <a href="/hoi-dap/cau-rang-thu-suon/#cau-120">khi nào cần thử</a>.</li>
<li>Ghi ngày hẹn bệnh nhân trên phiếu chỉ định để labo nắm lịch — <a href="/phieu-chi-dinh/">phiếu chỉ định online</a> có ô ngày hẹn và tự ước tính thời gian sản xuất.</li>
</ul>`],
    ],
    sources: ['cdc2003', 'ding2023', 'wilson2009', 'linkev2011'] },

  /* ===================== 15. Tuổi thọ, tháo và sửa răng sứ ===================== */
  { slug: 'tuoi-tho-thao-sua-rang-su', name: 'Tuổi thọ, tháo và sửa răng sứ',
    title: 'Răng sứ dùng được bao lâu, tháo mão zirconia, sửa mẻ sứ',
    lead: 'Răng sứ, cầu, mão implant dùng được bao lâu theo nghiên cứu, vì sao hỏng, tháo mão zirconia, sửa mẻ sứ, zirconia hay E.max, MRI, thẻ bảo hành.',
    published: '2026-10-13', updated: '2026-10-13',
    links: [['Bảo hành theo dòng vật liệu', '/bao-hanh/'], ['Mão zirconia nguyên khối', '/phuc-hinh/mao-full-zirconia/'], ['Răng sứ Co-Cr', '/vat-lieu/co-cr/'], ['So sánh các dòng zirconia', '/vat-lieu/so-sanh-zirconia/']],
    qs: [
      [133, 'Răng sứ dùng được bao lâu?',
        `${short('Không có "hạn dùng" cố định. Nghiên cứu đo tỉ lệ phục hình còn trên miệng sau một khoảng thời gian: khoảng 95% mão sứ – kim loại trên răng thật còn sau 5 năm; khoảng 89% cầu răng còn sau 10 năm; mão trên implant khoảng 98% sau 5 năm.')}
<div class="table-wrap"><table><thead><tr><th>Loại phục hình</th><th>Tỉ lệ tồn tại</th><th>Nguồn</th></tr></thead><tbody>
<tr><td>Mão sứ – kim loại trên răng thật</td><td>Khoảng 95% sau 5 năm</td><td>Sailer và cs. (2015)</td></tr>
<tr><td>Cầu răng thông thường</td><td>89,1% sau 10 năm</td><td>Tan và cs. (2004)</td></tr>
<tr><td>Cầu với (một đầu trụ)</td><td>81,8% sau 10 năm</td><td>Pjetursson và cs. (2004)</td></tr>
<tr><td>Mão trên implant: sứ – kim loại / sườn zirconia</td><td>98,3% / 97,6% sau 5 năm</td><td>Pjetursson và cs. (2018)</td></tr>
</tbody></table></div>
<p>"Tồn tại" là phục hình vẫn còn trên miệng, có thể đã có biến chứng nhỏ được sửa. Tuổi thọ thực tế phụ thuộc nhiều vào răng trụ, vệ sinh, khớp cắn và tái khám hơn là riêng vật liệu. Với mão zirconia nguyên khối, tổng quan của Leitão và cộng sự (2022) đánh giá đây là lựa chọn phù hợp cho mão đơn, nhất là răng sau, dù dữ liệu dài hạn còn ít hơn sứ – kim loại.</p>
<p>Bảo hành tại labo theo dòng vật liệu, từ 3 đến 15 năm với zirconia — xem <a href="/bao-hanh/">bảo hành</a>. Bảo hành là cam kết của labo với phòng khám, khác với tỉ lệ tồn tại trong nghiên cứu.</p>`],
      [134, 'Răng sứ, cầu răng thường hỏng vì những nguyên nhân nào?',
        `${short('Thường gặp nhất là vấn đề ở răng trụ (sâu răng dưới mão, mất tuỷ, gãy răng), bong mão, và mẻ sứ đắp. Vỡ toàn bộ sườn ít gặp hơn.')}
<ul>
<li><strong>Sâu răng trụ, bờ viền hở:</strong> trong 10 năm, khoảng 2,6% cầu bị mất do sâu răng (Tan và cs., 2004). Phát hiện sớm nhờ tái khám và phim cắn cánh.</li>
<li><strong>Bong mão, bong cầu:</strong> khoảng 6,4% cầu trong 10 năm. Nguyên nhân và cách xử lý: <a href="/hoi-dap/bong-mao-zirconia/">bong mão zirconia</a>.</li>
<li><strong>Mẻ sứ đắp:</strong> mão sứ đắp trên sườn zirconia mất do vỡ sứ đắp khoảng 3,2% sau 5 năm, so với 0,3% ở sườn kim loại (Sailer và cs., 2015) — xem <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-43">vì sao sứ đắp dễ mẻ</a>.</li>
<li><strong>Gãy vật liệu:</strong> khoảng 3,2% cầu trong 10 năm; với cầu zirconia, vị trí hay gãy là vùng nối — xem <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-50">câu 50</a>.</li>
</ul>`],
      [135, 'Cắt, tháo mão zirconia dùng mũi khoan gì?',
        `${short('Mũi kim cương dành cho zirconia hoặc mũi kim cương hạt thô, tốc độ cao, phun nước đủ; xẻ một rãnh dọc mặt ngoài – mặt nhai rồi tách mão bằng dụng cụ nạy. Mũi mòn rất nhanh, nên dùng mũi mới.')}
<p>Borzangy và cộng sự (2024, <em>BMC Oral Health</em>) so sánh mũi kim cương khi cắt mão zirconia nguyên khối và lithium disilicate: mũi chuyên cho zirconia cắt zirconia nhanh hơn ở các lần cắt đầu, và hiệu quả cắt của mọi loại mũi giảm sau mỗi lần dùng do mất hạt kim cương.</p>
<ul>
<li>Chuẩn bị 2 – 3 mũi cho một mão; đổi mũi khi tốc độ cắt giảm rõ, thay vì ấn mạnh hơn (sinh nhiệt).</li>
<li>Phun nước liên tục; cắt từng đoạn ngắn để kiểm soát nhiệt.</li>
<li>Cắt đến lớp xi măng, tránh cắt vào cùi; với cùi giả kim loại bên dưới, dừng khi chạm kim loại.</li>
<li>Mão zirconia dày ở răng sau mất thời gian hơn mão sứ – kim loại — báo bệnh nhân trước.</li>
</ul>`],
      [136, 'Mẻ sứ nhỏ có sửa trong miệng được không?',
        `${short('Được với mẻ nhỏ đến vừa, không ở vùng chịu lực chính: sửa bằng composite sau khi xử lý bề mặt đúng loại vật liệu bị lộ. Mẻ lớn, mẻ lại nhiều lần, hoặc lộ nhiều sườn thì nên làm lại.')}
<p>Tổng quan của Alqarawi và cộng sự (2022, <em>F1000Research</em>) trên 21 nghiên cứu cho thấy độ bám của miếng sửa phụ thuộc chủ yếu vào cách xử lý bề mặt:</p>
<div class="table-wrap"><table><thead><tr><th>Bề mặt bị lộ</th><th>Xử lý thường dùng</th></tr></thead><tbody>
<tr><td>Sứ đắp (sứ thuỷ tinh)</td><td>Xoi mòn axit HF, silane, keo dán, composite</td></tr>
<tr><td>Sườn zirconia</td><td>Thổi cát (hoặc tạo nhám), primer chứa MDP, keo dán, composite</td></tr>
<tr><td>Sườn kim loại</td><td>Thổi cát, primer kim loại, lớp cản quang (opaquer) che màu, composite</td></tr>
</tbody></table></div>
<p>Axit HF dùng trong miệng cần cô lập tuyệt đối (đê cao su, bảo vệ mô mềm) và chỉ bôi lên vùng sứ. Bằng chứng chủ yếu là in vitro và ca lâm sàng; miếng sửa nên được xem là giải pháp kéo dài thời gian dùng phục hình, cần theo dõi. Phục hình bị mẻ trong thời hạn bảo hành: liên hệ labo trước khi sửa — xem <a href="/bao-hanh/">bảo hành</a>.</p>`],
      [137, 'Khi nào nên sửa, khi nào nên làm lại mão hoặc cầu?',
        `${short('Sửa khi lỗi nhỏ, khu trú và bờ viền còn kín. Làm lại khi bờ hở có sâu răng bên dưới, mão lỏng tái đi tái lại, vỡ lớn ở vùng chịu lực, hoặc hình thể – màu không chấp nhận được.')}
<ul>
<li><strong>Có thể sửa:</strong> mẻ sứ nhỏ ngoài vùng chịu lực; tiếp xúc bên lỏng nhẹ (đắp thêm khi còn ở labo, trước khi gắn); bong mão mà mão và cùi còn nguyên — xem <a href="/hoi-dap/bong-mao-zirconia/#cau-37">gắn lại mão bong</a>.</li>
<li><strong>Nên làm lại:</strong> sâu răng dưới bờ viền; bờ hở rõ; cầu bong một đầu trụ (đầu kia còn dính, sâu răng tiến triển nhanh ở đầu bong); vỡ sườn; lộ sườn kim loại ở vùng thẩm mỹ.</li>
<li><strong>Trước khi quyết định:</strong> chụp phim, kiểm tra răng trụ và nướu; nguyên nhân hỏng (khớp cắn, nghiến răng, cùi ngắn) cần được xử lý, nếu không phục hình mới sẽ hỏng theo cùng cách.</li>
</ul>`],
      [138, 'Nên chọn zirconia hay E.max (lithium disilicate)?',
        `${short('Zirconia bền hơn, làm được cầu dài và vùng chịu lực lớn, gắn bằng xi măng thông thường được khi cùi đủ lưu giữ. Lithium disilicate trong hơn ở cùng độ dày, xoi mòn axit HF và dán được, hợp với mão răng trước, mặt dán, inlay – onlay dán.')}
<div class="table-wrap"><table><thead><tr><th></th><th>Zirconia</th><th>Lithium disilicate (ví dụ IPS e.max CAD)</th></tr></thead><tbody>
<tr><td>Độ bền uốn (hãng, nghiên cứu)</td><td>3Y khoảng 900 – 1.200 MPa; 5Y khoảng 700 – 800 MPa</td><td>Ivoclar công bố 530 MPa (độ bền uốn hai trục)</td></tr>
<tr><td>Cầu răng</td><td>Có, tuỳ dòng phôi đến cầu dài, toàn hàm</td><td>Giới hạn hơn nhiều</td></tr>
<tr><td>Xoi mòn HF và silane</td><td>Không hiệu quả; dùng thổi cát + primer MDP</td><td>Có — dán bền</td></tr>
<tr><td>Gắn</td><td>Xi măng thông thường hoặc xi măng nhựa</td><td>Thường dán bằng xi măng nhựa</td></tr>
</tbody></table></div>
<p>Số liệu zirconia theo tổng quan của Yousry và cộng sự (2024); chi tiết từng thế hệ: <a href="/hoi-dap/chon-vat-lieu-zirconia/#cau-1">câu 1</a>. Các dòng vật liệu KTV Dental Lab đang công bố là zirconia (từ 3 đến 15 năm bảo hành) và hợp kim cho răng sứ kim loại — xem <a href="/vat-lieu/so-sanh-zirconia/">so sánh các dòng zirconia</a>. Cần vật liệu khác, trao đổi trực tiếp với labo.</p>`],
      [139, 'Răng sứ có ảnh hưởng đến chụp MRI, CT không?',
        `${short('Mão zirconia và sứ không kim loại gây rất ít nhiễu ảnh MRI. Mão sứ trên hợp kim không quý như Co-Cr, Ni-Cr gây nhiễu nhiều hơn, chủ yếu ảnh hưởng vùng hàm mặt gần răng đó.')}
<p>Gao và cộng sự (2022, <em>Scientific Reports</em>) chụp MRI 1,5 T trên mẫu: mão nhựa, sứ, zirconia và sứ trên hợp kim quý tạo ít nhiễu ảnh; titan nguyên chất và sứ trên hợp kim không quý tạo nhiễu ảnh đáng kể. Trên implant titan, mão Co-Cr và Ni-Cr làm vùng nhiễu ảnh tăng thêm.</p>
<ul>
<li>Nhiễu ảnh là vấn đề chất lượng hình ảnh, khác với an toàn. Bệnh nhân có răng sứ kim loại cần báo cho cơ sở chụp để kỹ thuật viên điều chỉnh.</li>
<li>Trên phim CT, CBCT, kim loại cũng gây nhiễu ảnh dạng tia; zirconia cản quang mạnh nên cũng có thể gây nhiễu, mức độ tuỳ máy.</li>
<li>Bệnh nhân có kế hoạch theo dõi bằng MRI vùng đầu cổ lâu dài: cân nhắc phục hình không kim loại khi tư vấn.</li>
</ul>`],
      [140, 'Bệnh nhân hỏi: răng sứ có bị sâu, hôi miệng hay đen viền nướu không?',
        `${short('Bản thân sứ không sâu, nhưng răng thật bên dưới vẫn có thể sâu ở bờ viền nếu vệ sinh kém hoặc bờ hở. Hôi miệng thường do mảng bám, thức ăn giắt dưới nhịp cầu hoặc kẽ răng. Đen viền nướu liên quan đến sườn kim loại và nướu co.')}
<ul>
<li><strong>Sâu răng dưới mão:</strong> là một trong những nguyên nhân mất cầu thường gặp — khoảng 2,6% trong 10 năm (Tan và cs., 2004). Tái khám định kỳ để phát hiện sớm.</li>
<li><strong>Hôi miệng:</strong> kiểm tra giắt thức ăn ở tiếp xúc bên, mặt dưới nhịp cầu, bờ viền thừa — xem <a href="/hoi-dap/tinh-huong-lam-sang/#cau-93">nhét thức ăn</a>, <a href="/hoi-dap/cau-rang-thu-suon/#cau-119">kiểu nhịp cầu</a>.</li>
<li><strong>Đen viền nướu:</strong> gặp ở răng sứ kim loại khi nướu co lộ bờ sườn; răng toàn sứ, zirconia không có sườn kim loại — xem <a href="/vat-lieu/ni-cr/">răng sứ Ni-Cr</a> và <a href="/vat-lieu/co-cr/">Co-Cr</a>.</li>
</ul>
<p>Hướng dẫn chăm sóc sau gắn: <a href="/hoi-dap/nhan-thu-gan-phuc-hinh/#cau-131">câu 131</a>.</p>`],
      [141, 'Thẻ bảo hành răng sứ và thẻ của hãng phôi khác nhau thế nào?',
        `${short('Thẻ bảo hành là cam kết của labo (hoặc phòng khám) về việc sửa, làm lại phục hình trong thời hạn. Thẻ của hãng phôi là chứng nhận xuất xứ: phục hình được làm từ phôi của hãng đó. Hai thẻ trả lời hai câu hỏi khác nhau, nên bệnh nhân thường nhận cả hai.')}
<ul>
<li><strong>Thẻ bảo hành:</strong> ghi thời hạn và điều kiện bảo hành. Thời hạn thường theo dòng vật liệu — tại KTV Dental Lab từ 3 đến 15 năm với zirconia, răng sứ kim loại theo thỏa thuận.</li>
<li><strong>Thẻ xuất xứ của hãng phôi:</strong> chứng nhận nguồn gốc vật liệu. Đây không phải cam kết bảo hành của labo, và thời hạn ghi trên thẻ hãng (nếu có) không thay cho điều kiện bảo hành của labo.</li>
<li><strong>Tại KTV Dental Lab:</strong> mỗi phục hình được giao kèm thẻ bảo hành của labo, đồng thời gửi song song thẻ chứng nhận xuất xứ của hãng phôi tương ứng với loại phục hình — xem <a href="/bao-hanh/#the-bao-hanh">thẻ bảo hành và thẻ xuất xứ</a>.</li>
</ul>
<p>Lễ tân nên lưu số thẻ, vị trí răng và ngày gắn trong hồ sơ bệnh nhân để khi cần bảo hành, phòng khám liên hệ labo nhanh, kể cả khi bệnh nhân làm mất thẻ.</p>`],
    ],
    sources: ['sailer', 'tan2004', 'pjet2004cant', 'pjet', 'leitao', 'borzangy2024', 'alqarawi2022', 'yousry', 'ivoclarEmax', 'gao2022'] },
];
