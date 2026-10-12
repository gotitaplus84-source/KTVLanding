// Hỏi đáp kỹ thuật — đợt 2 (câu 51–100). Cùng quy ước với qa.mjs.
// Các câu cần cách làm riêng của KTV Dental Lab đang viết theo hướng dẫn chung; khi labo trả lời
// (tài liệu "Hỏi đáp kỹ thuật — câu cần KTV trả lời"), bổ sung đoạn "Tại KTV Dental Lab".

const table = (head, rows) => `<div class="table-wrap"><table>
<thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('\n')}
</tbody></table></div>`;
const short = (t) => `<p class="qa-short">${t}</p>`;

export const QA_TOPICS_2 = [
  /* ===================== 6. Sát khít, tiếp xúc và hình thể ===================== */
  { slug: 'sat-khit-tiep-xuc-hinh-the', name: 'Sát khít, tiếp xúc và hình thể',
    title: 'Mão hở bờ, khe xi măng, điểm tiếp xúc, emergence profile',
    lead: 'Vì sao mão CAD/CAM vẫn hở bờ, khe xi măng bao nhiêu, mão không xuống hết, điểm tiếp xúc quá chặt hay lỏng, hình thể vùng cổ và khi nào cần scan lại.',
    qs: [
      [51, 'Vì sao mão CAD/CAM vẫn có thể bị hở đường hoàn tất?',
        `${short('Thường do dữ liệu đường hoàn tất không rõ (dưới nướu, có nước bọt, máu), vẽ sai đường hoàn tất khi thiết kế, khe xi măng không phù hợp, hoặc mão không xuống hết vì tiếp xúc bên chặt hay vướng mặt trong.')}
<ul>
<li><strong>Dữ liệu scan:</strong> An và cộng sự (2024) — đường hoàn tất dưới nướu 0,5 – 1,0 mm được scan kém chính xác hơn đường hoàn tất ngang nướu; nước bọt làm sai lệch tăng, rõ nhất với đường hoàn tất dưới nướu.</li>
<li><strong>Thiết kế:</strong> vẽ đường hoàn tất sai chỗ khi dữ liệu bờ không liên tục.</li>
<li><strong>Khe xi măng:</strong> khe quá nhỏ khiến mão kênh lên khi gắn — xem <a href="#cau-53">câu 53</a>.</li>
<li><strong>Lắp mão:</strong> tiếp xúc bên chặt, góc sắc trên cùi mà mũi phay không tái tạo được.</li>
</ul>
<p>Ngưỡng hở bờ thường được dẫn là 120 µm (McLean & von Fraunhofer, theo tổng quan của Al-shalan và cộng sự, 2019).</p>`],
      [52, 'Khoảng cement gap trong thiết kế mão zirconia nên để bao nhiêu?',
        `${short('Không có một giá trị duy nhất cho mọi trường hợp. Khe xi măng được điều chỉnh theo từng vùng của phục hình, hình thể cùi, độ lưu giữ và cách gắn; mục tiêu là mão xuống đúng vị trí, bờ sát và vẫn đủ chỗ cho lớp xi măng.')}
<p>Phần mềm thiết kế thường cho khe nhỏ ở vùng bờ và khe lớn hơn từ khoảng 1 mm phía trên đường hoàn tất. Kale và cộng sự (2016) thử mão zirconia nguyên khối với khe 25 µm ở bờ và khe bổ sung 30, 40, 50 µm: sai lệch bờ trung bình lần lượt 85, 68 và 53 µm. Khe quá lớn lại làm mão lỏng, giảm lưu giữ, nhất là khi gắn bằng xi măng thông thường.</p>
<p><strong>Tại KTV Dental Lab:</strong> thông số khe xi măng được thiết lập theo phần mềm thiết kế, máy gia công, vật liệu và kinh nghiệm sản xuất của labo, điều chỉnh theo hình thể cùi và chỉ định gắn của từng ca.</p>`],
      [53, 'Cement gap quá nhỏ có thể làm mão không xuống hết không?',
        `${short('Có. Khe xi măng quá nhỏ không đủ chỗ cho xi măng thoát ra, áp lực thuỷ lực đẩy mão lên, làm hở bờ và cao khớp sau khi gắn.')}
<p>Trong thử nghiệm của Kale và cộng sự (2016), nhóm khe bổ sung nhỏ nhất (30 µm) có sai lệch bờ lớn nhất (85 µm). Khi thử mão thấy khít nhưng sau gắn bị cao, nên nghĩ đến nguyên nhân này cùng với xi măng quá đặc hoặc ấn mão không đủ lực.</p>`],
      [54, 'Vì sao mão thử trên model vừa nhưng vào miệng lại không xuống?',
        `${short('Vì model hoặc file scan khác với miệng tại thời điểm thử: dấu/scan bị sai lệch, răng kế bên di chuyển sau khi mài, còn xi măng tạm hoặc mô mềm chen vào, hoặc tiếp xúc bên trên model khác với răng thật.')}
<p>Kiểm tra theo thứ tự: tiếp xúc bên (chỉ nha khoa, giấy cắn mỏng); mặt trong (silicone kiểm tra độ khít) để tìm điểm vướng; làm sạch hết xi măng tạm trên cùi; nướu có phủ lên đường hoàn tất không. Nếu răng kế bên đã di chuyển do làm tạm không có tiếp xúc, cần lấy lại dấu hoặc scan.</p>`],
      [55, 'Tiếp xúc bên quá chặt có làm mão không xuống hết không?',
        `${short('Có — đây là nguyên nhân thường gặp nhất khi mão không xuống hết mà mặt trong vẫn khít.')}
<p>Dấu hiệu: chỉ nha khoa không qua được hoặc đứt sợi, bờ mão hở đều ở một phía. Chỉnh điểm tiếp xúc trên mão từng chút, dùng giấy cắn mỏng để tìm điểm chạm, sau đó đánh bóng lại vùng đã chỉnh. Điểm tiếp xúc đạt khi chỉ nha khoa đi qua với lực cản nhẹ.</p>`],
      [56, 'Labo nên chỉnh contact point như thế nào để bác sĩ dễ kiểm soát khi gắn?',
        `${short('Điểm tiếp xúc cần đủ chắc để hạn chế nhét thức ăn nhưng không quá chặt đến mức cản mão xuống hết; đặt đúng vị trí giải phẫu, gần gờ bên phía mặt nhai.')}
<p>Trên lâm sàng, điểm tiếp xúc đạt khi chỉ nha khoa đi qua với lực cản nhẹ. Bề mặt vùng tiếp xúc được đánh bóng hoặc glaze để bác sĩ dễ chỉnh thêm nếu cần.</p>
<p><strong>Tại KTV Dental Lab:</strong> vùng tiếp xúc được kiểm soát trong quá trình thiết kế và hoàn thiện, và kiểm tra trong bước kiểm soát chất lượng trước khi giao.</p>`],
      [57, 'Contact quá lỏng sau khi gắn mão thường do nguyên nhân nào?',
        `${short('Tiếp xúc lỏng có thể liên quan đến dữ liệu dấu hoặc scan, vị trí răng kế bên, sai lệch mẫu hàm, việc chỉnh sửa trước khi giao, hoặc răng thay đổi vị trí sau thời điểm lấy dấu.')}
<p>Răng kế bên dễ di chuyển khi phục hình tạm không có tiếp xúc. Tiếp xúc lỏng gây nhét thức ăn — xem <a href="/hoi-dap/tinh-huong-lam-sang/#cau-93">câu 93</a>.</p>
<p><strong>Tại KTV Dental Lab:</strong> nếu phát hiện tiếp xúc lỏng trước khi gắn, phòng khám gửi lại để labo đánh giá và chỉnh sửa phục hình. Nếu phát hiện sau khi gắn, nên kiểm tra lại toàn bộ tình trạng lâm sàng trước khi kết luận nguyên nhân.</p>`],
      [58, 'Làm sao thiết kế emergence profile của mão răng thật để không ép lợi quá mức?',
        `${short('Giữ hình thể vùng cổ thẳng hoặc hơi phẳng theo bề mặt chân răng, tránh phình quá mức ở phần ba cổ; độ phồng tự nhiên đặt ở vị trí giải phẫu, không đẩy vào nướu.')}
<p>Mão phình ở vùng cổ khó làm sạch, dễ tích mảng bám và viêm nướu. Gửi ảnh hoặc scan trước mài khi muốn giữ hình thể răng cũ; ghi chú nếu nướu mỏng hoặc có tụt nướu.</p>`],
      [59, 'Khi đường hoàn tất nằm sâu dưới lợi thì scan và làm phục hình có khó chính xác hơn không?',
        `${short('Có. Máy scan chỉ ghi được bề mặt nhìn thấy; đường hoàn tất dưới nướu dễ bị nướu che, máu và nước bọt làm mờ.')}
<p>An và cộng sự (2024): đường hoàn tất dưới nướu 0,5 – 1,0 mm có sai lệch lớn hơn đường hoàn tất ngang nướu với cả hai máy scan thử nghiệm; nước bọt làm sai lệch tăng nhiều hơn ở nhóm dưới nướu. Cần co nướu, kiểm soát chảy máu và giữ khô khi scan — xem <a href="/hoi-dap/scan-trong-mieng/#cau-68">câu 68</a>.</p>`],
      [60, 'Khi nào bác sĩ nên gửi lại scan thay vì để labo cố sửa file?',
        `${short('Khi dữ liệu bị thiếu ở những vùng quyết định độ chính xác — đường hoàn tất, tiếp xúc, khớp cắn, scan body — hoặc khi mô mềm, máu, nước bọt che mất thông tin cần cho thiết kế.')}
<ul>
<li>Lỗ trống hoặc vùng mờ ở đường hoàn tất.</li>
<li>Thiếu vùng tiếp xúc với răng kế bên.</li>
<li>Khớp cắn lệch giữa hai bên, răng xuyên vào nhau trên file.</li>
<li>Scan body bị che, thiếu bề mặt hoặc nhoè.</li>
<li>Mô mềm, máu, nước bọt che bờ.</li>
</ul>
<p><strong>Tại KTV Dental Lab:</strong> labo làm sạch và tối ưu được một số lỗi nhỏ của file, nhưng không "đoán" dữ liệu ở những vùng quyết định độ chính xác của phục hình — khi đó labo đề nghị scan lại.</p>`],
    ],
    sources: ['an2024', 'alshalan', 'kale', 'iowa'] },

  /* ===================== 7. Scan trong miệng ===================== */
  { slug: 'scan-trong-mieng', name: 'Scan trong miệng và quy trình số',
    title: 'Scan trong miệng: độ chính xác, khớp cắn, co nướu',
    lead: 'Scan trong miệng chính xác đến đâu, cầu dài, vùng cần scan, hàm đối diện, khớp cắn sai, co nướu, máu – nước bọt và khi nào nên lấy dấu truyền thống.',
    qs: [
      [61, 'Scan trong miệng chính xác đến mức nào so với lấy dấu truyền thống?',
        `${short('Với phục hình đơn lẻ và vùng ngắn, dấu kỹ thuật số được xem là tương đương dấu truyền thống; độ chính xác giảm khi phạm vi scan dài ra.')}
<p>Hội nghị đồng thuận ITI 2018: dấu kỹ thuật số cho implant đơn lẻ hoặc implant kề nhau chính xác tương đương dấu thường và được khuyến nghị dùng thường quy; độ chính xác giảm khi khoảng cách giữa các implant tăng. Ngoài phòng thí nghiệm, nước bọt, máu và độ há miệng ảnh hưởng thêm đến chất lượng scan (Al-shalan và cộng sự, 2019).</p>`],
      [62, 'Scan cầu dài có chính xác bằng scan một mão đơn không?',
        `${short('Thường kém hơn. Sai số ghép ảnh tích luỹ theo chiều dài vùng scan.')}
<p>Theo ITI 2018, độ chính xác của dấu kỹ thuật số giảm khi khoảng cách giữa các trụ tăng. Với cầu dài: scan liên tục theo một đường, tránh bỏ sót rồi quay lại; giữ khô; kiểm tra lại vùng trụ xa nhất; khi nghi ngờ, thử sườn hoặc thử cầu trước khi hoàn thiện.</p>`],
      [63, 'Khi scan mất một đoạn margin nhỏ, labo có thể tự sửa được không?',
        `${short('Chỉ khi đoạn thiếu rất nhỏ và đường hoàn tất xung quanh vẫn rõ; nếu phải suy đoán vị trí thật của bờ — nhất là dưới nướu hoặc đoạn thiếu dài — nên scan lại.')}
<p>Phần mềm có thể lấp lỗ, nhưng phần lấp là bề mặt suy đoán, không phải bờ răng thật; bờ mão thiết kế trên phần suy đoán dễ hở hoặc dư.</p>
<p><strong>Tại KTV Dental Lab:</strong> kỹ thuật viên đánh giá dữ liệu còn đủ tin cậy để tiếp tục hay không. Nguyên tắc: xử lý dữ liệu được, nhưng không dựng lại một đường hoàn tất không có đủ thông tin lâm sàng — khi đó labo ưu tiên yêu cầu scan lại.</p>`],
      [64, 'Bác sĩ cần scan những vùng nào để labo làm một mão zirconia chính xác?',
        `${short('Cùi răng với toàn bộ đường hoàn tất, răng kế bên hai phía, phần hàm đủ để định vị, hàm đối diện, và khớp cắn hai bên.')}
<ul>
<li><strong>Hàm làm việc:</strong> cùi với đường hoàn tất liên tục, ít nhất các răng kế bên và mô nướu quanh cùi.</li>
<li><strong>Hàm đối diện:</strong> ít nhất vùng tương ứng.</li>
<li><strong>Khớp cắn:</strong> scan má ở cả hai bên, bệnh nhân cắn ở lồng múi tối đa.</li>
<li><strong>Nên có:</strong> scan trước khi mài (để giữ hình thể răng cũ), ảnh với cây so màu.</li>
</ul>`],
      [65, 'Có nhất thiết phải scan hàm đối diện khi làm một mão đơn không?',
        `${short('Có. Không có hàm đối diện, labo không biết khoảng phục hình và điểm chạm khớp — mão dễ cao hoặc thấp khớp.')}
<p>Hàm đối diện còn cho biết độ dày zirconia thực tế có đạt mức tối thiểu không. Với mão đơn, scan vùng tương ứng ở hàm đối diện cùng vài răng hai bên là đủ.</p>`],
      [66, 'Scan khớp cắn sai sẽ ảnh hưởng phục hình như thế nào?',
        `${short('Mão sẽ cao hoặc thấp khớp, sai điểm chạm, phải mài chỉnh nhiều trong miệng — làm mất glaze, mỏng zirconia và tốn thời gian.')}
<p>Nguyên nhân hay gặp: bệnh nhân không cắn đúng lồng múi tối đa khi scan; chỉ scan khớp cắn một bên; scan khớp cắn khi còn bông gòn hoặc dụng cụ trong miệng. Trên file, răng hai hàm xuyên vào nhau hoặc hở đều một bên là dấu hiệu sai.</p>`],
      [67, 'Vì sao file scan nhìn đẹp nhưng mão làm ra vẫn bị cao khớp?',
        `${short('Thường do khớp cắn trên file khác lúc gắn: scan khớp cắn khi bệnh nhân cắn nhẹ, răng hai hàm xuyên vào nhau trên phần mềm, hàm đối diện scan chưa đủ, hoặc mão chưa xuống hết khi gắn.')}
<p>Khi cắn mạnh, răng thật lún nhẹ trong dây chằng nha chu, nên khớp cắn lúc scan và lúc nhai có thể khác nhau. Kiểm tra mão đã xuống hết chưa (bờ khít) trước khi mài chỉnh khớp; nếu bờ hở, nguyên nhân là lắp mão, không phải khớp cắn.</p>`],
      [68, 'Có nên scan trước hay sau khi đặt chỉ co lợi?',
        `${short('Đặt chỉ co nướu trước, lấy chỉ ra (hoặc lấy sợi trên cùng nếu dùng hai sợi) ngay trước khi scan vùng cùi, rồi scan nhanh khi bờ còn lộ và khô.')}
<p>Máy scan chỉ ghi được bề mặt nhìn thấy. An và cộng sự (2024) dùng kỹ thuật một sợi co nướu và vẫn ghi nhận đường hoàn tất dưới nướu bị scan kém chính xác — co nướu đủ và giữ khô là điều kiện để bờ được ghi đúng.</p>`],
      [69, 'Máu và nước bọt ảnh hưởng đến độ chính xác của scan margin như thế nào?',
        `${short('Làm giảm rõ rệt độ chính xác, nhất là với đường hoàn tất dưới nướu: máu, nước bọt che bề mặt và tạo phản xạ giả.')}
<p>An và cộng sự (2024): nước bọt làm tăng đáng kể sai lệch bờ ở mọi vị trí đường hoàn tất; mức tăng lớn hơn ở nhóm dưới nướu. Cầm máu, thổi khô và scan ngay sau khi lấy chỉ co nướu.</p>`],
      [70, 'Khi nào nên lấy dấu truyền thống thay vì scan digital?',
        `${short('Khi không thể làm lộ và giữ khô đường hoàn tất (sâu dưới nướu, chảy máu khó cầm), khi scan nhiều implant trên hàm mất răng toàn bộ mà không có giải pháp hỗ trợ, hoặc bệnh nhân há miệng hạn chế.')}
<p>ITI 2018 không khuyến nghị dùng thường quy dấu kỹ thuật số cho hàm mất răng toàn bộ. KTV Dental Lab nhận dấu theo mọi phương thức — dấu, mẫu hàm hoặc file scan — xem <a href="/gui-ca/">cách gửi ca</a>.</p>`],
    ],
    sources: ['iti2018', 'an2024', 'alshalan'] },

  /* ===================== 8. Implant và scan body ===================== */
  { slug: 'scan-body-implant', name: 'Implant và scan body',
    title: 'Scan body implant: lực siết, lắp sai, khác hãng',
    lead: 'Siết scan body bao nhiêu, scan body không ngồi hết gây sai lệch thế nào, dùng scan body khác hãng, hình dạng scan body, scan nhiều implant và toàn hàm, có cần nối scan body.',
    qs: [
      [71, 'Scan body phải siết chặt đến mức nào trước khi scan implant?',
        `${short('Theo lực siết hãng quy định; nếu hãng không ghi, nên dùng cờ lê lực ở mức thấp (khoảng 5 Ncm) thay vì siết tay.')}
<p>Nghiên cứu in vitro trên J Adv Prosthodont (2020) so sánh siết 5 Ncm, 10 Ncm và siết tay: siết tay làm một số scan body PEEK lún theo chiều đứng trên 100 µm; các tác giả khuyến nghị siết 5 Ncm. Tổng quan của Wan và cộng sự (2024) cũng xếp lực siết vào các yếu tố ảnh hưởng độ chính xác scan.</p>`],
      [72, 'Scan body không ngồi hết có thể gây sai lệch phục hình bao nhiêu?',
        `${short('Đủ để làm mão không khít: chỉ riêng việc siết không đúng lực đã có thể làm scan body lệch trên 100 µm theo chiều đứng; scan body không ngồi hết còn lệch cả góc.')}
<p>Sai lệch vị trí implant chuyển nguyên sang phục hình: mão cao, kết nối không khít, tiếp xúc bên sai. Với cầu trên nhiều implant, sai lệch ở một trụ làm cả cầu không thụ động.</p>`],
      [73, 'Làm sao nhận biết scan body đang lắp sai vị trí?',
        `${short('Scan body xoay hoặc lắc được, có khe giữa scan body và implant, chiều cao lộ ra khác bình thường, hoặc mặt vát định hướng không đúng vị trí đã ghi.')}
<ul>
<li>Kiểm tra bằng tay: scan body không xoay, không lắc sau khi siết.</li>
<li>Phim X-quang khi nghi ngờ (với implant đặt sâu dưới niêm mạc).</li>
<li>Trên phần mềm thiết kế: thư viện scan body ghép không khớp với dữ liệu scan là dấu hiệu sai lắp hoặc sai loại scan body.</li>
</ul>`],
      [74, 'Có thể dùng scan body khác hãng nhưng cùng connection implant không?',
        `${short('Không nên mặc định cùng kiểu kết nối là dùng thay được. Scan body phải khớp đúng thư viện thiết kế và linh kiện phục hình tương ứng (Ti-base, abutment, vít).')}
<p>Labo xác định vị trí implant bằng cách ghép mô hình số của scan body (thư viện) vào dữ liệu scan. Scan body không có thư viện, hoặc thư viện sai phiên bản, sẽ cho vị trí implant sai. Ghi rõ hãng, model scan body và hệ implant trên phiếu chỉ định.</p>
<p><strong>Tại KTV Dental Lab:</strong> kỹ thuật viên kiểm tra hệ implant, platform, scan body và linh kiện trước khi thiết kế.</p>`],
      [75, 'Hình dạng scan body có ảnh hưởng đến độ chính xác của scan không?',
        `${short('Có. Hình dạng, vật liệu, hướng mặt vát và cách lắp scan body đều ảnh hưởng độ chính xác.')}
<p>Tổng quan của Wan và cộng sự (2024) trên 16 nghiên cứu: hướng mặt vát, lực siết và thiết bị hình học hỗ trợ đều ảnh hưởng độ chính xác scan implant. Nghiên cứu năm 2020 trên J Adv Prosthodont: các loại scan body khác nhau lún khác nhau đáng kể khi siết.</p>`],
      [76, 'Scan một implant đơn có đáng tin cậy hơn scan nhiều implant không?',
        `${short('Có. Implant đơn lẻ hoặc implant kề nhau là tình huống scan kỹ thuật số tin cậy nhất.')}
<p>ITI 2018 khuyến nghị dùng thường quy dấu kỹ thuật số cho phục hình trên implant đơn lẻ; độ chính xác giảm khi khoảng cách giữa các implant tăng.</p>`],
      [77, 'Scan toàn hàm implant có đủ chính xác để làm phục hình cố định không?',
        `${short('Còn phụ thuộc nhiều vào máy scan, quy trình và giải pháp hỗ trợ; ITI 2018 không khuyến nghị dùng thường quy dấu kỹ thuật số cho hàm mất răng toàn bộ.')}
<p>Các giải pháp tăng độ chính xác: thiết bị hình học hỗ trợ gắn trên scan body phủ sống hàm (Wan và cộng sự, 2024); nối scan body (Shetty và cộng sự, 2025). Với phục hình cố định toàn hàm, nên kiểm tra độ khít thụ động bằng khung thử hoặc mẫu kiểm tra trước khi hoàn thiện.</p>`],
      [78, 'Có cần splint scan body khi scan nhiều implant không?',
        `${short('Nối scan body nhìn chung giúp tăng độ chính xác, nhất là toàn hàm, nhưng kết quả không đồng nhất và phụ thuộc cách nối.')}
<p>Tổng quan của Shetty và cộng sự (2025): nối scan body nhìn chung cải thiện độ chính xác, rõ nhất ở hàm mất răng toàn bộ; một số nghiên cứu không thấy cải thiện. Wan và cộng sự (2024): 2 nghiên cứu nối bằng chỉ không cải thiện độ chính xác; gắn thiết bị hình học hỗ trợ phủ sống hàm thì cải thiện.</p>`],
      [79, 'Khoảng cách giữa các implant ảnh hưởng đến sai số scan như thế nào?',
        `${short('Khoảng cách càng lớn, sai số càng tăng — vùng sống hàm trơn giữa các implant ít điểm mốc để phần mềm ghép ảnh.')}
<p>ITI 2018: độ chính xác của dấu kỹ thuật số giảm khi khoảng cách giữa các implant tăng. Thiết bị hình học hỗ trợ đặt trên vùng sống hàm giúp tạo điểm mốc (Wan và cộng sự, 2024).</p>`],
      [80, 'Nếu gửi sai loại scan body cho labo thì có phải scan lại bệnh nhân không?',
        `${short('Không phải lúc nào cũng phải scan lại ngay. Labo kiểm tra hình dạng scan body, thông tin hệ implant, mã linh kiện và dữ liệu kèm theo; nếu không xác định chắc chắn được, hoặc scan body không khớp thư viện cần dùng, bác sĩ nên scan lại bằng đúng linh kiện.')}
<p>Ghi rõ hãng và model scan body, hệ implant, đường kính, kiểu kết nối trên phiếu chỉ định; ảnh chụp scan body trong miệng trước khi scan cũng giúp nhận diện.</p>
<p><strong>Tại KTV Dental Lab:</strong> khi thông tin scan body chưa rõ, labo đối chiếu hình dạng, mã linh kiện và hệ implant trước; chỉ đề nghị scan lại khi không thể nhận diện chính xác, để tránh sai lệch phục hình.</p>`],
    ],
    sources: ['iti2018', 'scanTorque', 'wan2024', 'shetty2025'] },

  /* ===================== 9. Thiết kế phục hình trên implant ===================== */
  { slug: 'thiet-ke-tren-implant', name: 'Thiết kế phục hình trên implant',
    title: 'Mão implant: bắt vít, abutment, Ti-base, emergence',
    lead: 'Bắt vít hay gắn xi măng, lỗ vít mặt ngoài, abutment cá nhân hoá, abutment zirconia, Ti-base, emergence profile và lỏng vít.',
    qs: [
      [81, 'Mão implant nên bắt vít hay gắn cement?',
        `${short('Bắt vít được khuyến nghị khi có thể, vì tháo lắp được và không có xi măng thừa; gắn xi măng phù hợp với phục hình ngắn có đường hoàn tất ngang hoặc trên niêm mạc.')}
<p>Theo Nobel Biocare, nhược điểm chính của gắn xi măng là khó lấy hết xi măng thừa — liên quan đến viêm niêm mạc và viêm quanh implant. So sánh chi tiết: <a href="/phuc-hinh/phuc-hinh-tren-implant/">phục hình trên implant</a>.</p>`],
      [82, 'Khi nào nên chọn screw-retained thay vì cement-retained?',
        `${short('Khi khoảng liên hàm hẹp (tối thiểu 4 mm), cầu dài, cầu đèo, vùng thẩm mỹ, phục hình tạm, hoặc khi cần tháo ra để vệ sinh, sửa chữa.')}
<p>Theo Nobel Biocare. Thêm vào đó: đường hoàn tất sâu dưới niêm mạc (khó lấy xi măng thừa) cũng là lý do nên chọn bắt vít.</p>`],
      [83, 'Lỗ vít nằm ở mặt ngoài thì nên xử lý thiết kế như thế nào?',
        `${short('Cân nhắc kênh vít nghiêng (angled screw channel) để dời lỗ vít về mặt trong hoặc mặt nhai — khi hệ implant và bộ linh kiện tương ứng có hỗ trợ; nếu không, chuyển sang giải pháp khác như abutment cá nhân hoá kèm mão gắn xi măng.')}
<p>Theo Nobel Biocare, kênh vít nghiêng cho phép đặt lỗ vít ở góc 0 – 25° theo mọi hướng. Khả năng làm kênh vít nghiêng phụ thuộc platform, Ti-base / abutment, vít và cây vặn vít của hệ implant, không chỉ phụ thuộc vào thiết kế CAD. Với abutment cá nhân hoá gắn xi măng, cần đặt đường hoàn tất đủ nông để lấy hết xi măng thừa.</p>
<p><strong>Tại KTV Dental Lab:</strong> khi hệ implant không hỗ trợ kênh vít nghiêng, labo trao đổi với bác sĩ để chọn giải pháp phục hình phù hợp hơn.</p>`],
      [84, 'Abutment cá nhân hóa có ưu điểm gì so với abutment stock?',
        `${short('Abutment cá nhân hoá kiểm soát tốt hơn hình thể mô mềm, emergence profile và hướng phục hình; đường hoàn tất đi theo viền niêm mạc nên dễ lấy xi măng thừa.')}
<p>Abutment làm sẵn có hình dạng chuẩn, đường hoàn tất đồng mức quanh chu vi — ở vùng niêm mạc cong, một phía có thể nằm quá sâu, khó lấy xi măng thừa. Abutment cá nhân hoá được thiết kế theo dữ liệu niêm mạc của chính bệnh nhân và chỉnh được trục khi implant nghiêng.</p>
<p><strong>Tại KTV Dental Lab:</strong> chỉ định abutment cá nhân hoá phụ thuộc vị trí răng, mô mềm, khoảng phục hình và hệ implant của từng ca.</p>`],
      [85, 'Zirconia abutment nên dùng trong trường hợp nào?',
        `${short('Vùng răng trước, yêu cầu thẩm mỹ niêm mạc cao, lực nhai thấp — và nên có phần kết nối bằng kim loại.')}
<p>Tổng quan của Totou và cộng sự (2021, 23 thử nghiệm ngẫu nhiên): abutment zirconia cho màu niêm mạc tự nhiên hơn titan; thất bại abutment ít gặp nhưng chủ yếu ở abutment sứ. Kinzer (2016) dùng abutment zirconia cá nhân hoá chủ yếu ở vùng lực thấp (răng trước), tránh thành abutment quá mỏng, và khuyến nghị phần kết nối bằng kim loại.</p>`],
      [86, 'Ti-base và zirconia abutment khác nhau thế nào?',
        `${short('Với Ti-base + zirconia, phần titan đảm nhiệm kết nối cơ học với implant, phần zirconia tạo hình thể phục hình và vùng chuyển tiếp mô mềm. Abutment zirconia nguyên khối kết nối trực tiếp zirconia vào implant — vùng kết nối là điểm yếu nhất.')}
${table(['', 'Ti-base + zirconia', 'Abutment zirconia nguyên khối'], [
  ['Kết nối với implant', 'Titan', 'Zirconia'],
  ['Điểm yếu', 'Lớp dán giữa zirconia và Ti-base', 'Vùng kết nối trong'],
  ['Mòn implant', '—', 'Có báo cáo mòn titan ở implant nhiều hơn'],
  ['Thẩm mỹ niêm mạc', 'Tốt (phần lộ ra là zirconia)', 'Tốt'],
])}
<p>Theo Kinzer (2016): hai ca gãy abutment của tác giả đều là abutment zirconia hoàn toàn; tác giả khuyến nghị kết nối qua thành phần kim loại. Chỉ định cụ thể phụ thuộc vị trí răng, mô mềm, khoảng phục hình và hệ implant.</p>`],
      [87, 'Chiều cao Ti-base ảnh hưởng đến độ bám của zirconia như thế nào?',
        `${short('Ti-base càng cao, diện dán càng lớn, mão zirconia càng khó bong. Nên chọn Ti-base cao nhất mà khoảng phục hình cho phép.')}
<p>Kendirli và cộng sự (2026) thử mão zirconia nguyên khối trên Ti-base cao 5,5 mm và 3,5 mm, implant thẳng và nghiêng 15°: Ti-base 5,5 mm làm tăng đáng kể lưu giữ; các tác giả khuyến nghị chọn Ti-base cao nhất có thể để giảm nguy cơ bong.</p>`],
      [88, 'Emergence profile của mão implant nên lồi hay lõm?',
        `${short('Với implant đặt ngang xương (bone-level), tránh hình thể lồi kèm góc thoát lớn; thường chọn hình thẳng hoặc hơi lõm ở phần xuyên niêm mạc.')}
<p>Katafuchi và cộng sự (2018, 96 bệnh nhân, 225 implant, theo dõi trên 10 năm): góc thoát trên 30° là yếu tố nguy cơ viêm quanh implant; hình thể lồi làm tăng nguy cơ ở implant ngang xương nhưng không ở implant ngang mô (tissue-level).</p>`],
      [89, 'Emergence angle quá lớn có ảnh hưởng đến mô quanh implant không?',
        `${short('Có. Góc thoát trên 30° được ghi nhận là yếu tố nguy cơ viêm quanh implant.')}
<p>Theo Katafuchi và cộng sự (2018). Giá trị tối ưu tuyệt đối vẫn đang được tranh luận, nhưng tránh góc thoát lớn và hình thể phình ở vùng xuyên niêm mạc giúp bệnh nhân dễ vệ sinh. Khi gửi ca, cho labo biết loại implant (ngang xương hay ngang mô) và độ dày niêm mạc.</p>`],
      [90, 'Vì sao mão implant thường xuyên bị lỏng vít?',
        `${short('Lỏng vít có nhiều nguyên nhân cùng lúc: siết thiếu lực hoặc không siết lại, kết nối không khít thụ động, quá tải khớp cắn (nhịp đèo, mặt nhai rộng, nghiến răng), và thiết kế kết nối – vít.')}
<p>Tổng quan của Pardal-Peláez và cộng sự (2018): các biện pháp giảm mất lực siết gồm siết lại sau khoảng 10 phút và dùng đúng lực theo hãng; thiết kế kết nối, vật liệu và lớp phủ vít cũng góp phần. Không có một biện pháp duy nhất giải quyết được. Kiểm tra thêm khớp cắn (tiếp xúc nặng trên mão implant) và độ khít của phục hình.</p>`],
    ],
    sources: ['nobel', 'totou', 'kinzer', 'kendirli', 'katafuchi', 'pardal', 'pjet'] },

  /* ===================== 10. Tình huống lâm sàng ===================== */
  { slug: 'tinh-huong-lam-sang', name: 'Tình huống lâm sàng thường gặp',
    title: 'Cao khớp, đau sau gắn, nhét thức ăn, lệch màu',
    lead: 'Mão cao 0,2 mm, đau khi cắn sau gắn, nhét thức ăn dù sát khít, lệch màu 11 – 21, răng đổi màu nặng, khoảng mất răng rộng – hẹp, đường cười cao, cắn đối đầu – cắn sâu.',
    qs: [
      [91, 'Mão zirconia bị cao khớp nhưng chỉ cao khoảng 0,2 mm thì nên chỉnh ở đâu?',
        `${short('Chỉnh trên mão, đúng điểm chạm sớm (giấy cắn mỏng ở lồng múi tối đa và các vận động), bằng mũi kim cương hạt mịn có nước — rồi đánh bóng lại vùng đã chỉnh.')}
<p>Trước khi chỉnh, kiểm tra mão đã xuống hết (bờ khít) — mão chưa xuống hết cũng biểu hiện như cao khớp. Chỉ chỉnh răng đối diện khi răng đó có múi trồi, lệch rõ, và có sự đồng ý của bệnh nhân. Xem thêm <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-44">câu 44</a> và <a href="/hoi-dap/khop-can-me-gay-zirconia/#cau-45">câu 45</a>.</p>`],
      [92, 'Mão mới gắn nhưng bệnh nhân đau khi cắn thì nguyên nhân có thể là gì?',
        `${short('Hay gặp nhất là cao khớp; ngoài ra là xi măng thừa dưới nướu, viêm tuỷ sau mài (răng sống), nứt răng hoặc chân răng, và với implant là xi măng thừa quanh implant.')}
<ul>
<li><strong>Cao khớp:</strong> kiểm tra bằng giấy cắn ở mọi vận động.</li>
<li><strong>Xi măng thừa:</strong> nướu sưng, đau khi chạm — kiểm tra bằng thám trâm, phim X-quang.</li>
<li><strong>Tuỷ:</strong> đau kéo dài, nhạy cảm nóng lạnh ở răng sống.</li>
<li><strong>Nứt:</strong> đau khi nhả cắn, đau khu trú một múi.</li>
</ul>`],
      [93, 'Mão zirconia sát khít nhưng thức ăn vẫn nhét vào kẽ thì do đâu?',
        `${short('Thường do điểm tiếp xúc lỏng, sai vị trí (quá thấp về phía nướu hoặc quá cao), gờ bên không ngang với răng kế bên, hoặc kẽ răng phía mặt nhai quá mở.')}
<p>Kiểm tra bằng chỉ nha khoa và so sánh chiều cao gờ bên hai răng. Răng kế bên di chuyển sau khi làm mão cũng làm tiếp xúc mở dần. Phát hiện trước khi gắn: gửi lại labo để đánh giá và chỉnh sửa — xem <a href="/hoi-dap/sat-khit-tiep-xuc-hinh-the/#cau-57">câu 57</a>.</p>`],
      [94, 'Răng 11 và 21 có màu khác nhau thì labo cần những hình ảnh gì để chỉnh màu?',
        `${short('Ảnh chính diện toàn vùng răng trước, ảnh cận răng cần phục hình và răng đối xứng, ảnh có cây so màu đặt cùng mặt phẳng với răng, ảnh nghiêng để thấy độ trong vùng rìa cắn; nếu cùi đổi màu, thêm ảnh cùi sau khi mài.')}
<ul>
<li>Chụp dưới ánh sáng trung tính (nguồn sáng chuẩn màu khoảng 5.500 K), không dùng filter, không flash trực diện làm cháy sáng.</li>
<li>Cây so màu đặt cạnh răng, cùng mặt phẳng và góc, rìa cắn sát rìa cắn, thấy rõ mã màu.</li>
<li>Chụp trước khi mài, khi răng chưa mất nước.</li>
</ul>
<p>Hướng dẫn so màu: <a href="/gui-ca/#so-mau">so màu đúng cách</a>.</p>`],
      [95, 'Một răng cửa bị đổi màu nặng thì làm sao để zirconia không bị đục?',
        `${short('Cân bằng giữa che màu và độ trong: mài đủ khoảng để có độ dày che màu, dùng lõi zirconia ít trong hơn ở vùng ngà kết hợp lớp men trong (đắp sứ hoặc cut-back), và chọn xi măng có độ đục phù hợp.')}
<p>Binici Aygün và cộng sự (2025): phục hình dày hơn che màu nền tốt hơn nhưng giảm độ trong; với nền tối màu, độ đục của xi măng càng quan trọng. Dùng zirconia rất đục và mỏng để che màu dễ làm răng trông "chết". Gửi ảnh cùi răng với cây so màu cùi để labo chọn lõi và độ dày.</p>`],
      [96, 'Khoảng mất răng quá rộng thì nên chia hình thể các răng như thế nào cho tự nhiên?',
        `${short('Không cố làm răng to hơn: phân bổ thêm chiều rộng vào vùng ít nhìn thấy, dùng đường viền và gờ bên để tạo ảo giác răng hẹp hơn, hoặc cân nhắc kẽ nhỏ, chỉnh nha trước phục hình.')}
<p>Gửi kèm ảnh mặt cười, ảnh trong miệng và mẫu thử (mock-up) nếu có, để labo đề xuất phương án chia khoảng trước khi làm phục hình chính thức.</p>`],
      [97, 'Khoảng mất răng quá hẹp có thể làm răng sứ nhỏ lại đến mức nào?',
        `${short('Đến mức còn đủ tiết diện vùng nối và độ dày tối thiểu của vật liệu; khi khoảng quá hẹp, nhịp cầu có thể làm nhỏ hoặc chồng nhẹ về phía trong, hoặc cân nhắc chỉnh nha mở khoảng.')}
<p>Ví dụ với Katana STML, UTML, cầu 2 – 3 đơn vị vẫn cần vùng nối tối thiểu 12 mm² (răng trước) / 16 mm² (răng sau) — khoảng hẹp làm khó đạt được tiết diện này. Báo labo kích thước khoảng và yêu cầu thẩm mỹ để được đề xuất thiết kế.</p>`],
      [98, 'Đường cười cao thì labo cần lưu ý gì khi thiết kế răng trước?',
        `${short('Đường cười cao để lộ nướu và vùng cổ răng: cần chú ý viền nướu, vị trí đường hoàn tất, hình thể vùng cổ và màu vùng cổ — sai lệch nhỏ cũng dễ thấy.')}
<p>Gửi ảnh mặt cười tự nhiên, ảnh cười rộng nhất và ảnh trong miệng. Với vùng thẩm mỹ, sườn hoặc lõi zirconia không lộ viền xám ở cổ răng — xem <a href="/phuc-hinh/mao-su-dap-su/">sườn kim loại hay sườn zirconia</a>.</p>`],
      [99, 'Bệnh nhân cắn đối đầu hoặc cắn sâu thì thiết kế zirconia cần thay đổi gì?',
        `${short('Cắn sâu: cần đủ khoảng mặt trong răng trên, kiểm tra khoảng trong vận động ra trước. Cắn đối đầu: rìa cắn chịu lực trực tiếp — chọn zirconia độ bền cao, đủ độ dày rìa cắn, tránh dòng độ trong cao quá mỏng.')}
<p>Gửi kèm scan hoặc mẫu hàm đối diện và khớp cắn chính xác; ghi chú khớp cắn sâu, cắn đối đầu hoặc nghiến răng trên phiếu chỉ định. Mài rìa cắn răng trước cho zirconia nguyên khối khoảng 1,8 – 2,0 mm (giáo trình Iowa).</p>`],
      [100, 'Khi bác sĩ và labo không thống nhất về hình thể hoặc khớp cắn, cần gửi những dữ liệu gì để labo chỉnh chính xác?',
        `${short('Ảnh phục hình đang thử trong miệng, ảnh vùng cần chỉnh, mô tả cụ thể muốn tăng hoặc giảm ở đâu, ảnh giấy cắn nếu liên quan khớp cắn, và scan mới nếu tình trạng trong miệng đã thay đổi.')}
<ul>
<li>Ảnh thẳng, chéo, mặt cười có phục hình thử; với ca thẩm mỹ, đánh dấu trực tiếp lên ảnh.</li>
<li>Ảnh dấu giấy cắn trên phục hình khi vấn đề là khớp cắn.</li>
<li>Mô tả bằng vị trí và mức độ, ví dụ "giảm 0,5 mm rìa cắn 11", "tăng tiếp xúc xa 46".</li>
<li>Scan mới khi răng hoặc mô mềm đã thay đổi.</li>
</ul>
<p><strong>Tại KTV Dental Lab:</strong> labo chỉnh dựa trên dữ liệu cụ thể thay vì yêu cầu chung như "làm nhỏ lại" hay "hạ thêm", và kiểm soát lại phục hình sau khi sửa trước khi giao.</p>`],
    ],
    sources: ['shade', 'binici', 'katanaGuide', 'iowa'] },
];
