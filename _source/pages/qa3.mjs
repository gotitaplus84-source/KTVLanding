// Hỏi đáp kỹ thuật — đợt 3 (câu 101–116): so màu và lấy dấu, hai chủ đề bác sĩ cần khi gửi ca nhưng chưa có trang riêng.
// Cùng quy ước với qa.mjs: câu đầu trả lời thẳng, mọi con số có nguồn trong SOURCES.
// Không mô tả quy trình sản xuất nội bộ của labo; chỉ những gì phòng khám cần làm và gửi.

const short = (t) => `<p class="qa-short">${t}</p>`;

export const QA_TOPICS_3 = [
  /* ===================== 11. So màu và truyền đạt màu ===================== */
  { slug: 'so-mau-rang-su', name: 'So màu và truyền đạt màu cho labo',
    title: 'So màu răng sứ: thời điểm, ánh sáng, ảnh gửi labo',
    lead: 'So màu lúc nào để răng chưa mất nước, dưới ánh sáng nào, ghi VITA classical hay 3D-Master, khi nào cần màu cùi và chụp ảnh gửi labo ra sao.',
    published: '2026-10-13', updated: '2026-10-13',
    links: [['Mão zirconia Multilayer', '/phuc-hinh/mao-zirconia-multilayer/'], ['Mão sứ đắp sứ', '/phuc-hinh/mao-su-dap-su/'], ['Cách gửi ca', '/gui-ca/'], ['Phiếu chỉ định online', '/phieu-chi-dinh/']],
    qs: [
      [101, 'Vì sao nên so màu trước khi mài răng và cô lập?',
        `${short('Vì răng mất nước khi bị thổi khô, cô lập hay há miệng lâu sẽ sáng và đục hơn; màu chọn sau đó dễ sáng hơn màu thật của răng.')}
<p>Haciali và cộng sự (2025) theo dõi màu răng trên lâm sàng bằng máy so màu quang phổ: sau 3 phút làm khô, thay đổi màu chưa nhận thấy được; ở 5 phút đã nhận thấy nhưng còn chấp nhận được; ở 15 phút vượt ngưỡng chấp nhận. Sau khi răng ngậm nước trở lại, khoảng 70% răng về dưới ngưỡng nhận thấy sau 24 giờ — không phải sau vài phút.</p>
<p>Vì vậy nên so màu ở đầu buổi hẹn, trước khi mài, đặt đê hoặc lấy dấu. Nếu cần so lại sau một buổi điều trị dài, hẹn so màu vào lần khác. Các bước cơ bản: <a href="/gui-ca/#so-mau">so màu đúng cách</a>.</p>`],
      [102, 'Nên so màu dưới ánh sáng nào?',
        `${short('Nguồn sáng đã hiệu chỉnh màu, gần ánh sáng ban ngày (khoảng 5.500 – 6.500 K), chỉ số hoàn màu (CRI) từ 90 trở lên; không dựa hoàn toàn vào đèn ghế nha hay ánh sáng cửa sổ.')}
<p>Đây là điều kiện chiếu sáng được nêu trong nghiên cứu về độ chính xác so màu của Ahmed (2024). Ánh sáng tự nhiên thay đổi theo giờ, thời tiết và hướng phòng; đèn ghế nha quá mạnh làm răng và cây so màu cùng nhạt đi, khó phân biệt.</p>
<p>Sau khi chọn được màu dưới đèn chuẩn, nhìn lại dưới một nguồn sáng khác. Nếu răng và cây so màu khớp dưới nguồn này nhưng lệch dưới nguồn kia (hiện tượng đồng sắc dị phổ — metamerism), ghi chú điều đó trên phiếu để labo biết màu đang nằm ở vùng ranh giới.</p>`],
      [103, 'Ghi màu theo VITA classical hay VITA 3D-Master?',
        `${short('Hệ nào cũng được, miễn là ghi rõ tên hệ bảng màu trên phiếu và chụp ảnh với chính cây so màu đã dùng.')}
<p>VITA classical xếp màu theo nhóm sắc độ A, B, C, D (A1 – D4). VITA 3D-Master chọn độ sáng trước, sau đó đến độ bão hoà và sắc độ (ví dụ 2M2). Hai hệ không quy đổi một – một hoàn toàn, nên ghi "A2" khi thực ra so bằng 3D-Master (hoặc ngược lại) là một nguồn lệch màu.</p>
<p>Khi răng nằm giữa hai màu, ghi cả hai, ví dụ "giữa A2 và A3, gần A2", thay vì chọn đại một màu. Với răng nhiều vùng màu, ghi theo vùng (xem câu 106).</p>`],
      [104, 'Màu cùi răng có cần gửi cho labo không?',
        `${short('Cần, nhất là khi làm zirconia độ trong cao hoặc mão Multilayer răng trước, và khi cùi đổi màu, có chốt kim loại hay được tái tạo bằng vật liệu khác màu.')}
<p>Theo Binici Aygün và cộng sự (2025), màu cuối cùng của mão zirconia nguyên khối chịu ảnh hưởng của màu nền cùi, độ dày phục hình, loại và màu xi măng; ảnh hưởng của màu nền rõ nhất với zirconia độ trong cao.</p>
<p>Sau khi mài, chụp cùi cùng cây so màu cùi nếu phòng khám có; nếu không, ít nhất ghi rõ "cùi sẫm màu", "chốt kim loại" hay "cùi composite". Labo dựa vào đó để chọn phôi và độ dày — xem <a href="/hoi-dap/chon-vat-lieu-zirconia/#cau-9">chọn zirconia khi cùi đổi màu</a> và <a href="/hoi-dap/tinh-huong-lam-sang/#cau-95">răng cửa đổi màu nặng</a>.</p>`],
      [105, 'Chụp ảnh gửi labo thế nào để ảnh thật sự có ích?',
        `${short('Chụp răng cùng cây so màu đặt cạnh, đọc được mã màu, trong cùng một điều kiện ánh sáng. Ảnh giúp labo thấy độ trong và đặc điểm bề mặt; mã màu chọn bằng cây so màu vẫn là căn cứ chính.')}
<ul>
<li>Cây so màu cùng mặt phẳng với răng, rìa cắn sát rìa cắn, mặt có mã màu quay về phía máy. Phân vân giữa hai màu thì chụp cả hai cây.</li>
<li>Một ảnh chính diện không cháy sáng; một ảnh nghiêng để thấy độ trong vùng rìa cắn.</li>
<li>Đặt thẻ xám hoặc thẻ cân bằng trắng trong khung hình để labo hiệu chỉnh màu ảnh.</li>
<li>Filter phân cực chéo (nếu có) giảm phản quang, giúp thấy rõ cấu trúc men – ngà; chụp thêm một ảnh không filter để labo thấy độ bóng bề mặt.</li>
<li>Không chỉnh màu hay dùng bộ lọc làm đẹp của điện thoại trước khi gửi.</li>
</ul>
<p>Cần ảnh gì cho ca lệch màu răng cửa: <a href="/hoi-dap/tinh-huong-lam-sang/#cau-94">câu 94</a>.</p>`],
      [106, 'Răng có đốm trắng, rìa cắn trong hoặc vệt nứt thì ghi cho labo thế nào?',
        `${short('Chia răng thành vùng cổ – thân – rìa cắn, ghi màu từng vùng, mô tả đặc điểm và đánh dấu trên ảnh; ghi rõ muốn mão giống hệt răng bên cạnh hay đều màu hơn.')}
<p>Phôi Multilayer đã có chuyển màu từ cổ đến rìa cắn; những đặc điểm riêng như đốm trắng, vệt, rìa cắn trong cần nhuộm bề mặt, hoặc đắp sứ trên sườn zirconia khi ca đòi hỏi nhiều hiệu ứng — xem <a href="/phuc-hinh/mao-zirconia-multilayer/">mão zirconia Multilayer</a> và <a href="/phuc-hinh/mao-su-dap-su/">mão sứ đắp sứ</a>.</p>
<p>Nên thống nhất với bệnh nhân trước: nhiều người muốn răng mới "sạch" hơn răng cũ, trong khi bác sĩ ghi yêu cầu làm giống hệt. Một dòng ghi chú trên phiếu tránh được một lần làm lại.</p>`],
      [107, 'Làm một răng cửa đơn lẻ, cần chuẩn bị gì để khớp màu với răng bên cạnh?',
        `${short('Đây là ca khó nhất về màu: gửi đủ ảnh răng đối xứng, màu từng vùng và màu cùi; với ca thẩm mỹ cao, trao đổi trước với labo về việc thử trước khi hoàn tất.')}
<p>Hai răng cửa giữa được nhìn cạnh nhau nên sai khác nhỏ về độ sáng, độ trong hay hình thể bề mặt cũng dễ thấy. Ngoài mã màu, gửi: ảnh chính diện, ảnh cận răng đối xứng có cây so màu, ảnh nghiêng, ảnh cùi sau khi mài.</p>
<p>Với ca nhiều hiệu ứng, phương án có lớp sứ đắp (đắp toàn phần hoặc cut-back) cho phép chỉnh màu sau lần thử dễ hơn mão nguyên khối. Chọn giữa hai hướng: <a href="/hoi-dap/chon-vat-lieu-zirconia/#cau-3">nguyên khối hay đắp sứ cho răng trước</a>.</p>`],
      [108, 'Mão về khác màu răng bên cạnh thì xử lý thế nào?',
        `${short('Kiểm tra lại dưới ánh sáng chuẩn khi răng bên cạnh đã ngậm nước trở lại, thử với gel thử màu xi măng nếu có, rồi chụp ảnh mão trong miệng cạnh răng thật kèm cây so màu gửi labo.')}
<p>Trước khi kết luận mão sai màu, loại trừ hai nguyên nhân thường gặp:</p>
<ul>
<li><strong>Răng bên cạnh còn mất nước</strong> sau buổi điều trị: trong nghiên cứu của Haciali và cộng sự (2025), sau 30 – 60 phút răng vẫn còn lệch màu nhiều hơn so với sau 24 giờ.</li>
<li><strong>Xi măng chưa có mặt:</strong> màu và độ đục của xi măng ảnh hưởng đến màu cuối cùng (Binici Aygün và cộng sự, 2025), nhất là với zirconia độ trong cao; thử khô có thể khác sau khi gắn.</li>
</ul>
<p>Nếu vẫn lệch, ảnh có cây so màu giúp labo quyết định chỉnh bề mặt hay làm lại. Các tình huống lâm sàng khác: <a href="/hoi-dap/tinh-huong-lam-sang/">cao khớp, đau sau gắn, lệch màu</a>.</p>`],
    ],
    sources: ['haciali', 'ahmed2024', 'binici', 'shade'] },

  /* ===================== 12. Lấy dấu và gửi dấu ===================== */
  { slug: 'lay-dau-gui-labo', name: 'Lấy dấu và gửi dấu cho labo',
    title: 'Lấy dấu răng sứ: vật liệu, khử khuẩn, gửi labo',
    lead: 'Chọn vật liệu lấy dấu cho mão – cầu, một thì hay hai thì, bao lâu phải đổ mẫu, dấu thế nào là đạt, khử khuẩn, ghi khớp cắn và đóng gói gửi labo.',
    published: '2026-10-13', updated: '2026-10-13',
    links: [['Cách gửi ca', '/gui-ca/'], ['Phiếu chỉ định online', '/phieu-chi-dinh/'], ['Cùi giả kim loại, chốt gài và Zirconia', '/phuc-hinh/cui-gia/'], ['Thời gian sản xuất', '/thoi-gian-san-xuat/']],
    qs: [
      [109, 'Nên dùng vật liệu lấy dấu nào cho mão, cầu răng sứ?',
        `${short('Hàm làm việc dùng vật liệu đàn hồi chính xác như silicone cộng hợp (PVS) hoặc polyether; hàm đối diện có thể dùng alginate nếu đổ mẫu kịp thời.')}
<p>Silicone cộng hợp và polyether đều ghi được chi tiết bờ viền; chọn loại nào tuỳ thói quen của bác sĩ, khả năng kiểm soát ẩm và thời điểm đổ mẫu (câu 111). Alginate không đủ chi tiết cho bờ viền của hàm làm việc nhưng đủ cho hàm đối diện, miễn là mặt nhai rõ và không biến dạng.</p>
<p>Labo nhận dấu, mẫu hàm hoặc file scan trong miệng — xem <a href="/gui-ca/">cách gửi ca</a>.</p>`],
      [110, 'Lấy dấu một thì hay hai thì?',
        `${short('Cả hai đều dùng được. Với kỹ thuật hai thì, nên tạo khoảng trống cho lớp vật liệu nhẹ (dùng miếng đệm khi lấy dấu sơ khởi), thay vì ép lớp nhẹ vào dấu nặng đã đông khít.')}
<p>Gómez-Polo và cộng sự (2012) so sánh 480 dấu: dấu hai thì không có khoảng đệm thay đổi kích thước nhiều hơn; dấu một thì và dấu hai thì có khoảng đệm cho kết quả tương đương.</p>
<p>Dù dùng kỹ thuật nào: khay đủ cứng, không chạm cùi; vật liệu nhẹ phủ kín bờ viền trước khi đặt khay; giữ khay yên cho đến khi vật liệu đông hẳn theo thời gian của hãng.</p>`],
      [111, 'Sau khi lấy dấu, bao lâu phải đổ mẫu hoặc gửi labo?',
        `${short('Tuỳ vật liệu: alginate cần đổ mẫu càng sớm càng tốt; polyether và silicone cộng hợp ổn định lâu hơn nhưng vẫn có giới hạn theo hãng.')}
<ul>
<li><strong>Alginate:</strong> dễ mất nước hoặc hút nước sau khi lấy ra khỏi miệng, làm mẫu biến dạng. Đổ mẫu ngay hoặc trong thời gian hãng cho phép; một số loại alginate được thiết kế cho phép đổ chậm hơn.</li>
<li><strong>Polyether:</strong> Gómez-Polo và cộng sự (2012) khuyến nghị đổ mẫu không muộn hơn 7 ngày sau khi lấy dấu.</li>
<li><strong>Silicone cộng hợp:</strong> một số loại cần chờ một khoảng thời gian sau khi đông rồi mới đổ thạch cao, để tránh bọt trên bề mặt mẫu — làm theo hướng dẫn của hãng.</li>
</ul>
<p>Khi gửi dấu chưa đổ mẫu, ghi trên phiếu loại vật liệu và thời điểm lấy dấu để labo đổ mẫu đúng lúc.</p>`],
      [112, 'Dấu thế nào thì đạt để gửi labo?',
        `${short('Bờ viền liên tục và rõ quanh toàn bộ cùi, không bọt, không rách, không lộ khay ở vùng cùi, vật liệu không bong khỏi khay; răng kế bên và mặt nhai rõ.')}
<ul>
<li>Soi bờ viền dưới đèn, tốt nhất có kính phóng đại: đường hoàn tất phải thấy liên tục, có một dải vật liệu vượt qua bờ.</li>
<li>Bọt hoặc rách đúng vùng bờ viền, vùng tiếp xúc: lấy lại, không gửi kèm ghi chú "labo tự sửa".</li>
<li>Vật liệu bong khỏi khay hoặc lộ khay ở vùng cùi: dấu đã biến dạng, cần lấy lại.</li>
</ul>
<p>Bờ viền dưới nướu bị máu, nước bọt hoặc nướu che sẽ không ghi được, dù lấy dấu hay scan. An và cộng sự (2024) ghi nhận trên scan: đường hoàn tất dưới nướu và nước bọt đều làm giảm độ chính xác ghi bờ. Co nướu, cầm máu và giữ khô trước khi lấy dấu. Liên quan: <a href="/hoi-dap/sat-khit-tiep-xuc-hinh-the/">mão hở bờ, sát khít</a>.</p>`],
      [113, 'Có cần khử khuẩn dấu trước khi gửi labo không, làm thế nào?',
        `${short('Có. Rửa dấu dưới vòi nước lạnh ngay sau khi lấy ra khỏi miệng cho đến khi hết nước bọt, máu, rồi khử khuẩn bằng dung dịch phù hợp với vật liệu dấu, theo hướng dẫn của hãng.')}
<ul>
<li><strong>Ngâm hay xịt:</strong> một số vật liệu thay đổi kích thước khi ngâm dung dịch khử khuẩn. Kiểm tra hướng dẫn của hãng vật liệu dấu và hãng dung dịch trước khi chọn cách.</li>
<li><strong>Khi xịt:</strong> đặt dấu trong túi nhựa để hạn chế hít phải hơi dung dịch, giữ kín đủ thời gian tiếp xúc theo hãng.</li>
<li><strong>Báo cho labo</strong> rằng dấu đã được khử khuẩn — ghi trên phiếu hoặc nhãn túi, thống nhất cách ghi với labo.</li>
</ul>
<p>Theo hướng dẫn thực hành của SDCEP (Scottish Dental Clinical Effectiveness Programme).</p>`],
      [114, 'Ghi khớp cắn gửi kèm dấu thế nào cho đúng?',
        `${short('Ghi ở vị trí lồng múi tối đa bằng vật liệu ghi khớp cứng chắc sau khi đông, chỉ phủ vùng răng cần thiết; khi mất nhiều răng làm mất chặn khớp, cần ghi khớp có điểm tựa rõ ràng.')}
<ul>
<li>Miếng ghi khớp quá dày, phủ cả mô mềm hoặc làm bệnh nhân cắn lệch khiến mẫu lên giá khớp sai và mão về cao khớp.</li>
<li>Đặt lại miếng ghi khớp vào miệng sau khi lấy ra: phải khít, không nứt, bệnh nhân cắn vào đúng vị trí.</li>
<li>Gửi kèm hàm đối diện; với cầu dài hay phục hình nhiều răng, ghi chú các răng còn chặn khớp.</li>
</ul>
<p>Mão về vẫn cao khớp dù dữ liệu đẹp: <a href="/hoi-dap/scan-trong-mieng/#cau-67">câu 67</a> và <a href="/hoi-dap/tinh-huong-lam-sang/#cau-91">câu 91</a>.</p>`],
      [115, 'Nên lấy dấu truyền thống hay scan trong miệng?',
        `${short('Cả hai đều làm được phục hình tốt nếu dữ liệu đủ. Chọn theo ca và thiết bị của phòng khám, không cần đổi quy trình chỉ để phù hợp với labo.')}
<ul>
<li><strong>Scan trong miệng:</strong> gửi ngay qua mạng, không phải vận chuyển dấu, xem lại được trước khi bệnh nhân về. Khó hơn khi bờ viền sâu dưới nướu, chảy máu, hoặc vùng khó tiếp cận — xem <a href="/hoi-dap/scan-trong-mieng/">scan trong miệng</a>.</li>
<li><strong>Dấu truyền thống:</strong> phù hợp khi phòng khám chưa có máy scan, và thường dùng cho cùi giả đúc cần dấu ống tuỷ — xem <a href="/phuc-hinh/cui-gia/">cùi giả</a>.</li>
</ul>
<p>KTV Dental Lab nhận dấu truyền thống, mẫu hàm và file scan trong miệng. Phòng khám ở xa labo: <a href="/labo-rang-su-tp-hcm/">gửi ca từ xa</a>.</p>`],
      [116, 'Đóng gói và gửi dấu cho labo thế nào để không biến dạng?',
        `${short('Dấu đã khử khuẩn cho vào túi kín riêng từng ca, không để vật nặng đè hay để nơi nóng; gửi kèm miếng ghi khớp, hàm đối diện và phiếu chỉ định ghi rõ loại vật liệu, thời điểm lấy dấu.')}
<ul>
<li>Mỗi ca một túi, ghi tên phòng khám và tên hoặc mã bệnh nhân bên ngoài.</li>
<li>Không để dấu dưới nắng hoặc trong cốp xe nóng; không xếp chồng dấu lên nhau.</li>
<li>Phiếu chỉ định gửi trước qua Zalo hoặc email giúp labo chuẩn bị — soạn nhanh bằng <a href="/phieu-chi-dinh/">phiếu chỉ định online</a>.</li>
</ul>
<p>KTV Dental Lab lấy và giao hàng tận nơi tại khu vực Bình Dương cũ; phòng khám ở xa gửi qua mọi dịch vụ chuyển phát hoặc nhà xe tuyến cố định, labo gửi trả phục hình theo đúng phương thức đã nhận. Thời gian sản xuất tính từ lúc labo nhận hàng — xem <a href="/thoi-gian-san-xuat/">thời gian sản xuất</a>.</p>`],
    ],
    sources: ['gomezpolo', 'sdcep', 'an2024'] },
];
