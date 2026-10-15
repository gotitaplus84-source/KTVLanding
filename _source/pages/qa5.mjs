// Hỏi đáp kỹ thuật — đợt 5 (câu 142–162): ba nhóm câu bác sĩ hay tìm mà site chưa có trang riêng:
// răng đã chữa tuỷ (mão, chốt, cùi giả); inlay, onlay, overlay; cầu răng trên implant.
// Cùng quy ước với qa.mjs: câu đầu trả lời thẳng, mọi con số có nguồn trong SOURCES.
// Về labo chỉ nêu những gì labo đã công bố (loại phục hình, vật liệu, xoi mòn Zircos-E, cách gửi ca).

const short = (t) => `<p class="qa-short">${t}</p>`;

export const QA_TOPICS_5 = [
  /* ===================== 16. Răng đã chữa tuỷ: mão, chốt và cùi giả ===================== */
  { slug: 'rang-chua-tuy-chot-cui-gia', name: 'Răng chữa tuỷ: bọc mão, chốt và cùi giả',
    title: 'Răng chữa tuỷ có cần bọc sứ? Chốt sợi hay chốt đúc, vùng đai, cùi giả',
    lead: 'Răng đã chữa tuỷ có cần bọc mão, khi nào cần chốt, chốt sợi hay chốt kim loại, vùng đai bao nhiêu là đủ, cùi đúc hay cùi đắp, lấy dấu ống tuỷ.',
    published: '2026-10-15', updated: '2026-10-15',
    links: [['Cùi giả kim loại, chốt gài, zirconia', '/phuc-hinh/cui-gia/'], ['Onlay, overlay phủ múi', '/phuc-hinh/overlay/'], ['Mão zirconia nguyên khối', '/phuc-hinh/mao-full-zirconia/'], ['Cách gửi ca', '/gui-ca/']],
    qs: [
      [142, 'Răng đã chữa tuỷ có cần bọc mão không?',
        `${short('Răng sau (răng cối nhỏ, răng cối lớn) đã chữa tuỷ thường nên được phủ múi bằng mão, onlay hoặc overlay. Răng trước còn gần đủ mô, chỉ có lỗ mở tuỷ, có thể chỉ cần trám.')}
<p>Trong nghiên cứu hồi cứu của Aquilino và Caplan (2002, <em>J Prosthet Dent</em>) trên 203 răng chữa tuỷ, sau khi hiệu chỉnh theo loại răng và tình trạng sâu răng, răng không được làm mão bị mất với tỉ lệ cao gấp khoảng <strong>6 lần</strong> răng có mão. Đây là nghiên cứu hồi cứu nên chỉ cho thấy mối liên quan, không chứng minh nhân quả.</p>
<ul>
<li><strong>Răng sau:</strong> chịu lực nhai lớn, múi mỏng sau khi mở tuỷ dễ nứt. Khi thành răng còn dày, cân nhắc <a href="/hoi-dap/inlay-onlay-overlay/#cau-149">onlay hoặc overlay</a> phủ múi để giữ mô răng.</li>
<li><strong>Răng trước:</strong> quyết định theo lượng mô còn lại, màu răng và yêu cầu thẩm mỹ.</li>
<li><strong>Thời điểm:</strong> răng đã chữa tuỷ chờ lâu không có phục hình phủ múi dễ nứt và dễ rò rỉ vào ống tuỷ; lễ tân nên xếp lịch làm phục hình sớm sau khi chữa tuỷ xong.</li>
</ul>`],
      [143, 'Khi nào cần chốt, khi nào chỉ cần tái tạo cùi?',
        `${short('Chốt chỉ dùng để giữ khối tái tạo cùi khi thân răng còn lại quá ít; chốt không làm chân răng chắc hơn. Răng còn đủ thành để giữ vật liệu tái tạo thì không cần chốt.')}
<p>Theo tổng quan của Mamoun (2017, <em>J Adv Prosthodont</em>), yếu tố quyết định khả năng chống gãy của răng là lượng mô răng thật còn lại phía trên đường hoàn tất, không phải chốt. Mỗi lần khoan ống tuỷ để đặt chốt lại lấy thêm ngà chân răng.</p>
<ul>
<li><strong>Thường không cần chốt:</strong> răng sau còn từ hai thành trở lên đủ dày, buồng tuỷ đủ sâu để giữ vật liệu tái tạo.</li>
<li><strong>Thường cần chốt:</strong> thân răng mất gần hết, còn ít hoặc không còn thành, nhất là răng trước chịu lực cắt ngang.</li>
<li>Dù có chốt hay không, mài cùi vẫn phải giữ tối đa mô răng thật ở vùng đai — xem <a href="#cau-145">câu 145</a>.</li>
</ul>`],
      [144, 'Nên dùng chốt sợi (fiber post) hay chốt kim loại?',
        `${short('Với răng chỉ còn từ hai thành trở xuống, các thử nghiệm ngẫu nhiên hiện có nghiêng về chốt sợi về tỉ lệ tồn tại; tỉ lệ gãy chân răng giữa hai loại không khác biệt.')}
<p>Phân tích gộp của Wang và cộng sự (2019, <em>Quintessence International</em>) chỉ gồm <strong>4 thử nghiệm ngẫu nhiên</strong>, theo dõi 3 – 7 năm, trên răng còn không quá hai thành: chốt sợi có tỉ lệ tồn tại cao hơn chốt kim loại (RR 0,57; KTC 95%: 0,33 – 0,97); không khác biệt về tỉ lệ thành công, bong chốt và gãy chân răng. Số nghiên cứu còn ít nên kết luận chưa chắc chắn.</p>
<div class="table-wrap"><table><thead><tr><th></th><th>Chốt sợi + tái tạo cùi trực tiếp</th><th>Cùi giả đúc (chốt và cùi liền khối)</th></tr></thead><tbody>
<tr><td>Làm ở đâu</td><td>Trên ghế, một lần hẹn</td><td>Labo đúc theo dấu ống tuỷ</td></tr>
<tr><td>Phù hợp</td><td>Ống tuỷ hình dạng bình thường, còn một phần thành răng</td><td>Ống tuỷ loe rộng, thân răng mất gần hết, cần cùi chắc dưới mão sứ – kim loại</td></tr>
<tr><td>Màu</td><td>Trắng, hợp mão toàn sứ</td><td>Kim loại; có lựa chọn cùi zirconia cho vùng thẩm mỹ</td></tr>
</tbody></table></div>
<p>Răng sau có hai ống tuỷ chếch nhau mà cần cùi đúc: dùng <a href="/phuc-hinh/cui-gia/">chốt gài</a> để không phải mài rộng ống tuỷ cho chung một hướng vào.</p>`],
      [145, 'Vùng đai (ferrule) bao nhiêu là đủ? Không đủ thì làm gì?',
        `${short('Vùng đai nên cao khoảng 1,5 – 2,0 mm mô răng thật, ôm quanh răng phía trên đường hoàn tất. Thiếu vùng đai thì cần tạo thêm mô răng trên lợi trước khi làm mão, hoặc cân nhắc lại khả năng giữ răng.')}
<p>Con số 1,5 – 2,0 mm theo tổng quan của Mamoun (2017). Vùng đai giúp mão ôm lấy mô răng thật, nên lực nhai truyền qua răng chứ không dồn vào chốt và chân răng.</p>
<ul>
<li><strong>Khi vùng đai thiếu:</strong> bác sĩ cân nhắc làm dài thân răng bằng phẫu thuật hoặc kéo trồi răng bằng chỉnh nha để có thêm mô răng trên lợi; đánh giá tỉ lệ thân – chân răng sau khi làm.</li>
<li><strong>Khi không tạo được:</strong> mão vẫn làm được nhưng nguy cơ bong, gãy cao hơn. Ghi rõ tình trạng trên phiếu để labo thiết kế bờ mão ôm hết phần mô răng còn lại.</li>
<li>Đừng mài vát vùng đai thành dạng thuôn nhọn để "dễ làm mão": mỗi phần mô mất ở đây làm vùng đai thấp thêm.</li>
</ul>`],
      [146, 'Răng chữa tuỷ mất nhiều mô: làm cùi giả rồi mão, hay làm onlay, overlay?',
        `${short('Còn thành răng đủ dày và vùng đai tốt: onlay hoặc overlay phủ múi giữ được nhiều mô hơn. Thân răng mất nhiều, thành mỏng hoặc cần thay đổi trục răng: cùi giả rồi mão toàn phần.')}
<ul>
<li><strong>Onlay, overlay:</strong> đường hoàn tất thường trên lợi, dễ kiểm soát khi dán; phụ thuộc lớp dán — xem <a href="/hoi-dap/inlay-onlay-overlay/#cau-153">gắn inlay, onlay, overlay zirconia</a>.</li>
<li><strong>Cùi giả + mão:</strong> khi thân răng không còn đủ để giữ phục hình bán phần, hoặc là răng trụ cầu cần lưu giữ cơ học.</li>
<li>Cả hai lựa chọn đều cần phủ múi chịu lực. Trám composite đơn thuần cho răng sau mất nhiều mô sau chữa tuỷ thường không bảo vệ được múi.</li>
</ul>`],
      [147, 'Lấy dấu ống tuỷ để làm cùi giả đúc thế nào cho đạt?',
        `${short('Dấu phải ghi rõ toàn bộ chiều dài ống tuỷ đã sửa soạn, không bọt, không rách ở đầu chốt, cùng vùng cùi, răng kế cận, hàm đối diện và khớp cắn.')}
<ul>
<li><strong>Sửa soạn:</strong> giữ lại phần gutta-percha chóp theo chỉ định nội nha; thành ống tuỷ không lẹm để cùi đúc vào được theo một hướng.</li>
<li><strong>Lấy dấu:</strong> dùng vật liệu chảy bơm vào ống tuỷ, có thể đặt chốt nhựa hoặc chốt lấy dấu để dấu không bị đứt khi lấy ra. Kiểm tra đầu dấu phần chốt có đủ dài, không tròn đầu hoặc rách.</li>
<li><strong>Scan trong miệng:</strong> ống tuỷ hẹp và sâu khó ghi trọn bằng máy scan; khi labo không thấy rõ hết chiều dài chốt trên file, an toàn hơn là lấy dấu.</li>
<li><strong>Chốt gài:</strong> lấy dấu đủ các ống tuỷ sẽ đặt chốt.</li>
<li><strong>Phiếu chỉ định:</strong> ghi loại cùi (kim loại, chốt gài, zirconia) và loại mão sẽ làm trên cùi để labo chừa đủ khoảng.</li>
</ul>
<p>Cách đóng gói, khử khuẩn dấu: <a href="/hoi-dap/lay-dau-gui-labo/">lấy dấu và gửi dấu cho labo</a>.</p>`],
      [148, 'Gắn cùi giả đúc xong có lấy dấu mão luôn được không?',
        `${short('Được, nếu cùi đã ngồi hết, xi măng đã đông và bác sĩ đã mài chỉnh lại đường hoàn tất trên mô răng thật. Nhiều phòng khám gộp gắn cùi và lấy dấu mão vào cùng một lần hẹn.')}
<ul>
<li>Kiểm tra cùi ngồi hết trên phim trước khi mài chỉnh.</li>
<li>Đường hoàn tất của mão nên nằm trên mô răng thật, bên dưới mối nối giữa cùi giả và răng, để mão tạo được vùng đai.</li>
<li>Ghi trên phiếu: răng có cùi kim loại hay zirconia, để labo chọn vật liệu mão che được màu cùi — xem <a href="/hoi-dap/chon-vat-lieu-zirconia/#cau-9">chọn zirconia che màu cùi, chốt kim loại</a>.</li>
</ul>`],
    ],
    sources: ['aquilino', 'mamoun', 'wang2019'] },

  /* ===================== 17. Inlay, onlay, overlay ===================== */
  { slug: 'inlay-onlay-overlay', name: 'Inlay, onlay, overlay: chỉ định, mài và gắn',
    title: 'Inlay, onlay, overlay: khác nhau thế nào, mài lỗ hàn, gắn dán zirconia',
    lead: 'Inlay, onlay, overlay khác nhau thế nào, dùng được bao lâu, mài lỗ hàn ra sao, chọn zirconia hay kim loại, gắn dán, khi nào nên làm mão và gửi ca cho labo.',
    published: '2026-10-15', updated: '2026-10-15',
    links: [['Inlay, onlay kim loại và zirconia', '/phuc-hinh/inlay-onlay/'], ['Overlay zirconia', '/phuc-hinh/overlay/'], ['Xoi mòn Zircos-E (miễn phí)', '/dich-vu/xoi-mon-zirconia-zircos-e/'], ['Phiếu chỉ định online', '/phieu-chi-dinh/']],
    qs: [
      [149, 'Inlay, onlay và overlay khác nhau thế nào, chọn loại nào?',
        `${short('Inlay nằm gọn giữa các múi; onlay phủ một hoặc vài múi; overlay phủ toàn bộ mặt nhai. Múi càng yếu thì càng cần phủ nhiều; thành răng hỏng thì chuyển sang mão toàn phần.')}
<div class="table-wrap"><table><thead><tr><th></th><th>Inlay</th><th>Onlay</th><th>Overlay</th></tr></thead><tbody>
<tr><td>Phủ</td><td>Không phủ múi</td><td>Một hoặc vài múi</td><td>Toàn bộ mặt nhai</td></tr>
<tr><td>Khi nào</td><td>Lỗ sâu, miếng trám cũ lớn nhưng các múi còn chắc</td><td>Múi yếu hoặc mất một phần</td><td>Mặt nhai mòn, nhiều miếng trám cũ, răng chữa tuỷ còn thành tốt</td></tr>
<tr><td>Lưu giữ</td><td colspan="3">Chủ yếu nhờ dán, ít lưu giữ cơ học hơn mão</td></tr>
</tbody></table></div>
<p>Inlay không bảo vệ múi; với răng đã chữa tuỷ hoặc múi mỏng, nên chọn onlay hoặc overlay phủ múi — xem <a href="/hoi-dap/rang-chua-tuy-chot-cui-gia/#cau-142">răng chữa tuỷ có cần bọc mão</a>.</p>`],
      [150, 'Inlay, onlay dùng được bao lâu và thường hỏng vì đâu?',
        `${short('Với inlay, onlay, overlay bằng sứ, tổng quan hệ thống ghi nhận tỉ lệ tồn tại khoảng 92 – 95% sau 5 năm và 91% sau 10 năm. Hỏng thường gặp nhất là gãy, mẻ.')}
<p>Tổng quan và phân tích gộp của Morimoto và cộng sự (2016, <em>J Dent Res</em>) trên phục hình gốm thuỷ tinh và sứ fenspat: tỉ lệ tồn tại <strong>92 – 95% sau 5 năm</strong> (5.811 phục hình) và <strong>91% sau 10 năm</strong> (2.154 phục hình). Nguyên nhân hỏng: gãy, mẻ (4%), biến chứng nội nha (3%), sâu răng thứ phát (1%), bong (1%).</p>
<ul>
<li>Số liệu này của gốm thuỷ tinh và sứ fenspat, không phải zirconia hay kim loại; dữ liệu dài hạn cho inlay, onlay zirconia còn ít.</li>
<li>Biến chứng nội nha đứng thứ hai: kiểm tra tuỷ trước khi làm và ghi nhận trên hồ sơ, để khi răng đau sau gắn còn có mốc so sánh.</li>
</ul>`],
      [151, 'Mài lỗ hàn inlay, onlay cần lưu ý gì?',
        `${short('Thành lỗ hàn hơi loe ra phía mặt nhai, không lẹm; góc trong bo tròn; đường hoàn tất rõ, liên tục; đủ độ dày vật liệu theo hướng dẫn của dòng phôi hoặc hợp kim.')}
<ul>
<li><strong>Hướng vào:</strong> một hướng vào duy nhất; các vùng lẹm nhỏ nên được đắp lấp trước khi lấy dấu hoặc scan, thay vì mài thêm mô răng.</li>
<li><strong>Góc trong bo tròn:</strong> góc nhọn khó ghi bằng scan và khó phay chính xác; zirconia cũng dễ tập trung ứng suất ở góc nhọn.</li>
<li><strong>Độ dày:</strong> theo hướng dẫn của hãng phôi. Ví dụ với Katana YML, vùng răng sau cần tối thiểu 0,5 mm khi phục hình nằm ở nửa dưới phôi — xem <a href="/hoi-dap/mai-cui-zirconia/#cau-12">độ dày tối thiểu của zirconia</a>. Vùng chịu lực, bệnh nhân nghiến răng nên dày hơn mức tối thiểu.</li>
<li><strong>Mặt nhai của overlay:</strong> mài theo hình thể giải phẫu để độ dày phục hình đều.</li>
<li><strong>Đường hoàn tất:</strong> đặt rõ ràng, tránh kết thúc ngay tại điểm chạm khớp cắn của răng đối diện.</li>
</ul>`],
      [152, 'Inlay, onlay nên làm zirconia hay kim loại?',
        `${short('Zirconia khi cần màu răng hoặc bệnh nhân không muốn kim loại; kim loại (Ni-Cr, Co-Cr) ở vùng răng sau không cần thẩm mỹ, khi khoảng mài hạn chế hoặc chi phí là ưu tiên.')}
<div class="table-wrap"><table><thead><tr><th></th><th>Zirconia</th><th>Kim loại (Ni-Cr, Co-Cr)</th></tr></thead><tbody>
<tr><td>Màu</td><td>Màu răng</td><td>Màu kim loại</td></tr>
<tr><td>Gắn</td><td>Dán: thổi cát + primer MDP + xi măng nhựa</td><td>Gắn thông thường hoặc dán theo khả năng lưu giữ</td></tr>
<tr><td>Bệnh nhân dị ứng nickel</td><td>Phù hợp</td><td>Chọn Co-Cr — xem <a href="/vat-lieu/co-cr/">Co-Cr</a></td></tr>
</tbody></table></div>
<p>KTV Dental Lab làm inlay, onlay bằng zirconia và kim loại; overlay bằng zirconia — xem <a href="/phuc-hinh/inlay-onlay/">inlay, onlay</a> và <a href="/phuc-hinh/overlay/">overlay</a>. Labo không làm lithium disilicate (E.max).</p>`],
      [153, 'Gắn inlay, onlay, overlay zirconia thế nào?',
        `${short('Dán bằng xi măng nhựa theo quy trình thổi cát – primer MDP – xi măng nhựa, có cô lập tốt. Gắn thông thường không phù hợp vì phục hình bán phần ít lưu giữ cơ học.')}
<p>Blatz (2024) khuyến nghị dán (APC: thổi cát, primer, xi măng nhựa) cho inlay, onlay và các phục hình ít lưu giữ. Các bước chính:</p>
<ol>
<li><strong>Thử:</strong> kiểm tra khít bờ và tiếp xúc bên trước, khớp cắn sau khi dán (phục hình mỏng dễ vỡ khi cho bệnh nhân cắn thử lúc chưa dán).</li>
<li><strong>Làm sạch mặt dán sau khi thử:</strong> nước bọt nhiễm vào làm giảm độ dán — xem <a href="/hoi-dap/gan-mao-zirconia/#cau-28">làm sạch zirconia sau thử</a>.</li>
<li><strong>Xử lý zirconia:</strong> thổi cát Al₂O₃ hoặc dùng mặt dán đã được labo <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">xoi mòn Zircos-E</a>, sau đó primer chứa MDP.</li>
<li><strong>Xử lý răng:</strong> theo hệ dán của xi măng; cô lập bằng đê cao su khi được.</li>
<li><strong>Xi măng:</strong> trùng hợp kép hoặc tự trùng hợp, vì ánh sáng đèn bị giảm khi đi qua zirconia.</li>
</ol>`],
      [154, 'Khi nào nên làm mão toàn phần thay vì onlay, overlay?',
        `${short('Khi thành răng còn lại quá mỏng hoặc có đường nứt lan xuống, sâu răng lan dưới lợi sâu, răng cần thay đổi hình thể hoặc trục lớn, hoặc là răng trụ cầu.')}
<ul>
<li><strong>Thành răng mỏng, nứt:</strong> phục hình bán phần không ôm được răng; mão toàn phần bảo vệ tốt hơn.</li>
<li><strong>Bờ dưới lợi sâu:</strong> khó cô lập để dán; mão gắn thông thường ít nhạy cảm với độ ẩm hơn.</li>
<li><strong>Thay đổi hình thể, màu lớn:</strong> overlay không che được thành răng ngoài.</li>
<li><strong>Răng trụ cầu:</strong> cần lưu giữ cơ học của mão — xem <a href="/hoi-dap/cau-rang-thu-suon/#cau-117">cầu răng cần bao nhiêu răng trụ</a>.</li>
</ul>
<p>Ngược lại, khi thành răng còn tốt, onlay, overlay giữ lại được mô răng mà mão toàn phần phải mài bỏ.</p>`],
      [155, 'Gửi ca inlay, onlay, overlay cho labo cần những gì?',
        `${short('Dấu hoặc file scan rõ toàn bộ đường hoàn tất và tiếp xúc bên, hàm đối diện, khớp cắn, màu, vật liệu, và yêu cầu xoi mòn mặt dán nếu là zirconia.')}
<ul>
<li><strong>Bờ hoàn tất:</strong> phục hình bán phần có bờ dài, nhiều góc; scan thiếu một đoạn bờ là phải đoán — xem <a href="/hoi-dap/scan-trong-mieng/#cau-63">scan mất đoạn margin</a>.</li>
<li><strong>Tiếp xúc bên:</strong> ghi mức mong muốn (chặt, vừa) nếu phòng khám có thói quen riêng.</li>
<li><strong>Khớp cắn:</strong> overlay nâng khớp cắn cần kèm kế hoạch và ghi khớp ở kích thước dọc mới.</li>
<li><strong>Màu:</strong> màu răng và màu vùng mô răng quanh bờ, vì bờ inlay, onlay thường nằm trên mặt răng thấy được — xem <a href="/hoi-dap/so-mau-rang-su/">so màu răng sứ</a>.</li>
<li><strong>Xoi mòn Zircos-E:</strong> ghi trên phiếu; hiện miễn phí, không làm ca chậm hơn.</li>
</ul>
<p>Điền phiếu: <a href="/phieu-chi-dinh/">phiếu chỉ định online</a>.</p>`],
    ],
    sources: ['morimoto', 'blatz', 'katanaYML', 'zircosE'] },

  /* ===================== 18. Cầu răng trên implant ===================== */
  { slug: 'cau-rang-tren-implant', name: 'Cầu răng trên implant',
    title: 'Cầu răng trên implant: tuổi thọ, nối với răng thật, cầu với, bắt vít',
    lead: 'Cầu răng trên implant dùng được bao lâu, có nên nối implant với răng thật, cầu với trên implant, nối mão hay để riêng, bắt vít hay gắn xi măng, scan và gửi ca.',
    published: '2026-10-15', updated: '2026-10-15',
    links: [['Phục hình trên implant', '/phuc-hinh/phuc-hinh-tren-implant/'], ['So sánh các dòng zirconia', '/vat-lieu/so-sanh-zirconia/'], ['Bảo hành theo dòng vật liệu', '/bao-hanh/'], ['Cách gửi ca', '/gui-ca/']],
    qs: [
      [156, 'Cầu răng trên implant dùng được bao lâu?',
        `${short('Theo tổng quan hệ thống, implant mang cầu tồn tại khoảng 93% sau 10 năm; cầu sứ – kim loại trên implant khoảng 94% sau 10 năm. Nhưng biến chứng nhỏ thường gặp: chỉ khoảng hai phần ba bệnh nhân không có biến chứng nào sau 5 năm.')}
<p>Pjetursson và cộng sự (2012, <em>Clin Oral Implants Res</em>), tổng hợp 32 nghiên cứu:</p>
<ul>
<li>Implant mang cầu: tồn tại <strong>95,6% sau 5 năm</strong> và <strong>93,1% sau 10 năm</strong>.</li>
<li>Cầu sứ – kim loại trên implant: <strong>96,4% sau 5 năm</strong> và <strong>93,9% sau 10 năm</strong>.</li>
<li>Chỉ <strong>66,4%</strong> bệnh nhân không có biến chứng nào sau 5 năm — thường là mẻ sứ, lỏng vít, bong, viêm quanh implant.</li>
</ul>
<p>Vì vậy cầu trên implant cần tái khám định kỳ và nên thiết kế để tháo ra được khi cần — xem <a href="#cau-160">câu 160</a>. Lỏng vít: <a href="/hoi-dap/thiet-ke-tren-implant/#cau-90">câu 90</a>.</p>`],
      [157, 'Có nên làm cầu nối implant với răng thật không?',
        `${short('Nên tránh khi có thể làm cầu chỉ trên implant. Cầu nối implant với răng thật có tỉ lệ tồn tại thấp hơn, và răng trụ có thể bị lún, nhất là khi dùng khớp nối không cứng.')}
<p>Tổng quan của Lang và cộng sự (2004, <em>Clin Oral Implants Res</em>), 13 nghiên cứu: cầu nối răng thật – implant tồn tại <strong>94,1% sau 5 năm</strong> nhưng chỉ <strong>77,8% sau 10 năm</strong>, thấp hơn cầu chỉ trên implant. Sau 5 năm, <strong>5,2%</strong> răng trụ bị lún (intrusion), gần như chỉ gặp ở cầu có khớp nối không cứng. Số nghiên cứu ít và khoảng tin cậy 10 năm rộng.</p>
<ul>
<li>Răng thật có dây chằng nha chu nên lún được, implant thì gần như không; cầu nối hai loại trụ chịu lực không đều.</li>
<li>Nếu bắt buộc phải nối, ghi rõ trên phiếu và trao đổi với labo về kiểu nối; khớp nối không cứng liên quan đến lún răng trụ trong tổng quan trên.</li>
</ul>`],
      [158, 'Cầu với (cantilever) trên implant có dùng được không?',
        `${short('Dùng được cho nhịp ngắn, khi khớp cắn trên nhịp được kiểm soát. Tổng quan hệ thống ghi nhận tỉ lệ tồn tại khoảng 94% sau 5 năm và 89% sau 10 năm.')}
<p>Aglietta và cộng sự (2009, <em>Clin Oral Implants Res</em>), 5 nghiên cứu, theo dõi ít nhất 5 năm: cầu với trên implant tồn tại <strong>94,3% sau 5 năm</strong> và <strong>88,9% sau 10 năm</strong>; mức xương quanh implant không khác biệt có ý nghĩa so với cầu có trụ hai đầu. Viêm quanh implant sau 5 năm: <strong>5,4%</strong> tính theo implant, <strong>9,4%</strong> tính theo phục hình. Số nghiên cứu ít nên kết luận còn hạn chế.</p>
<ul>
<li>Ghi trên phiếu: nhịp với nhỏ hơn răng thật, giảm tiếp xúc khớp cắn trên nhịp, không chạm trong vận động sang bên.</li>
<li>Cầu với trên răng thật: <a href="/hoi-dap/cau-rang-thu-suon/#cau-118">câu 118</a>.</li>
</ul>`],
      [159, 'Nhiều implant kề nhau: nối mão thành cầu hay làm mão riêng?',
        `${short('Chưa có kết luận thống nhất. Mão riêng dễ vệ sinh bằng chỉ nha khoa và dễ sửa từng chiếc; nối thành khối giúp chia lực khi implant ngắn, hẹp hoặc mật độ xương kém, nhưng đòi hỏi độ khít thụ động cao hơn.')}
<ul>
<li><strong>Mão riêng:</strong> phù hợp khi implant đủ dài, đủ đường kính, trục song song; tiếp xúc bên giữa các mão cần chuẩn như răng thật.</li>
<li><strong>Nối thành cầu:</strong> khi bác sĩ đánh giá cần chia lực, hoặc có nhịp giữa hai implant. Khối càng dài, sai số dấu hoặc scan càng ảnh hưởng độ khít — xem <a href="/hoi-dap/scan-body-implant/#cau-79">khoảng cách implant và sai số scan</a>.</li>
<li>Khi nối, chừa chỗ cho bàn chải kẽ dưới vùng nối và hướng dẫn bệnh nhân làm sạch.</li>
</ul>
<p>Ghi rõ lựa chọn trên phiếu; nếu không ghi, labo sẽ hỏi lại trước khi thiết kế.</p>`],
      [160, 'Cầu trên implant nên bắt vít hay gắn xi măng?',
        `${short('Cầu trên implant thường nên bắt vít khi vị trí implant cho phép: tháo ra được để sửa, vệ sinh, và không có xi măng thừa dưới niêm mạc.')}
<ul>
<li>Nobel Biocare khuyến nghị bắt vít khi có thể; đặc biệt phù hợp với cầu dài, cầu với, vùng thẩm mỹ và khoảng liên hàm hẹp — xem <a href="/phuc-hinh/phuc-hinh-tren-implant/">phục hình trên implant</a>.</li>
<li>Lỗ vít lệch ra mặt ngoài: xem <a href="/hoi-dap/thiet-ke-tren-implant/#cau-83">xử lý lỗ vít mặt ngoài</a>.</li>
<li>Nếu gắn xi măng: đặt bờ abutment gần niêm mạc để lấy xi măng thừa — xem <a href="/hoi-dap/nhan-thu-gan-phuc-hinh/#cau-130">lấy xi măng thừa trên implant</a>.</li>
</ul>
<p>So sánh chi tiết hai cách lưu giữ: <a href="/hoi-dap/thiet-ke-tren-implant/#cau-81">câu 81</a>.</p>`],
      [161, 'Scan, lấy dấu cầu nhiều implant cần lưu ý gì?',
        `${short('Sai số tăng theo số implant và khoảng cách giữa chúng. Với cầu dài, toàn hàm, nên kiểm tra độ khít thụ động bằng khung thử hoặc mẫu kiểm tra trước khi hoàn thiện.')}
<ul>
<li><strong>Scan body:</strong> đúng hãng, siết đúng lực, ngồi hết — xem <a href="/hoi-dap/scan-body-implant/#cau-71">siết scan body</a>, <a href="/hoi-dap/scan-body-implant/#cau-73">nhận biết scan body lắp sai</a>.</li>
<li><strong>Nhiều implant:</strong> nối scan body hoặc dùng thiết bị hỗ trợ có thể cải thiện độ chính xác — xem <a href="/hoi-dap/scan-body-implant/#cau-78">câu 78</a>.</li>
<li><strong>Toàn hàm:</strong> độ chính xác của scan còn phụ thuộc máy và quy trình — xem <a href="/hoi-dap/scan-body-implant/#cau-77">câu 77</a>.</li>
<li><strong>Khung thử:</strong> khung bắt vít ngồi khít không cần ép là dấu hiệu dữ liệu đạt; bập bênh hoặc chỉ khít khi siết một vít thì cần lấy dấu hoặc scan lại.</li>
</ul>`],
      [162, 'Gửi ca cầu trên implant cho labo cần những thông tin gì?',
        `${short('Hệ implant, đường kính, kiểu kết nối của từng implant; loại abutment; bắt vít hay gắn xi măng; nối hay mão riêng; dữ liệu scan hoặc dấu có scan body, hàm đối diện, khớp cắn, màu.')}
<ul>
<li>Ghi vị trí từng implant và vị trí nhịp cầu trên sơ đồ răng của phiếu.</li>
<li>Kiểu nhịp mong muốn ở vùng mất răng — xem <a href="/hoi-dap/cau-rang-thu-suon/#cau-119">kiểu nhịp cầu</a>.</li>
<li>Có muốn thử khung trước khi hoàn thiện hay không — xem <a href="/hoi-dap/cau-rang-thu-suon/#cau-120">khi nào nên thử sườn</a>.</li>
<li>Ảnh mô mềm và nụ cười nếu cầu ở vùng thẩm mỹ.</li>
</ul>
<p>Phục hình trên implant được bảo hành như phục hình trên răng thật cùng dòng vật liệu — xem <a href="/bao-hanh/">bảng bảo hành</a>. Điền phiếu: <a href="/phieu-chi-dinh/">phiếu chỉ định online</a>.</p>`],
    ],
    sources: ['pjet2012', 'lang2004', 'aglietta', 'nobel', 'linkev2011', 'shetty2025'] },
];
