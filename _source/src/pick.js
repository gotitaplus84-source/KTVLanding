// Chọn nhanh dòng zirconia (/vat-lieu/so-sanh-zirconia/#chon-dong): 3 câu hỏi → 1 – 2 dòng phôi gợi ý,
// mỗi dòng có nút mở phiếu chỉ định đã điền sẵn loại phục hình, vật liệu và dòng phôi.
// Luật gợi ý nằm ở pages/content.mjs (PICK_RULES), nhúng vào trang dưới dạng JSON.
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function initPick(root) {
  const R = JSON.parse(document.getElementById('pick-data').textContent);
  const form = root.querySelector('form');
  const out = root.querySelector('[data-pick-out]');
  const val = (n) => form.querySelector(`input[name="${n}"]:checked`).value;

  const draw = () => {
    const long = val('pk-len') === 'dai';
    // cầu dài: chỉ định của hãng quyết định trước, nên không tách răng trước / răng sau
    form.querySelector('input[name="pk-pos"]').closest('fieldset').classList.toggle('is-off', long);
    const list = R[long ? 'dai' : val('pk-pos')][val('pk-pri')];
    out.innerHTML = `<ol class="pick-list">${list.map((m) => {
      const full = m.line ? `${m.name} ${m.line}` : m.name;
      const q = new URLSearchParams({ type: long ? 'cau' : 'mao', mat: m.mat, brand: m.name, note: `Dòng gợi ý: ${full}` });
      return `<li>
  <p class="pick-name"><a href="/vat-lieu/${m.slug}/">${esc(full)}</a><span>${m.years ? `Bảo hành ${m.years} năm` : 'Bảo hành theo thỏa thuận'}</span></p>
  <p>${esc(m.why)}</p>
  <a class="btn btn-line pick-go" href="/phieu-chi-dinh/?${q}">Lên phiếu với ${esc(m.name)}</a>
</li>`;
    }).join('')}</ol>${long && val('pk-pri') === 'chi-phi' ? '<p class="note">Upcera và UNC phù hợp mão đơn lẻ, cầu ngắn; với cầu dài, labo khuyên dùng các dòng hãng chỉ định rõ cho nhiều đơn vị như trên.</p>' : ''}`;
  };
  form.addEventListener('change', draw);
  draw();
  root.hidden = false;
}
