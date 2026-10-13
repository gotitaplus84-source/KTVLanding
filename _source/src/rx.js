// Phiếu chỉ định online (/phieu-chi-dinh/): sơ đồ răng FDI → hạng mục phục hình → phiếu dạng chữ
// để dán Zalo, gửi email hoặc in. Không gửi dữ liệu đi đâu.
// Chỉ thông tin phòng khám (tên, bác sĩ, điện thoại, cách gửi dấu) được nhớ lâu dài (localStorage);
// dữ liệu ca — bệnh nhân, hạng mục, ghi chú — chỉ giữ trong thẻ đang mở (sessionStorage), để máy dùng chung
// ở phòng khám không lộ ca của bệnh nhân trước.
const KEY = 'ktv-rx-v1';
const KEEP = ['clinic', 'doctor', 'phone', 'imp'];
const QUADS = [
  { q: 1, name: 'Hàm trên, bên phải', rev: true },
  { q: 2, name: 'Hàm trên, bên trái', rev: false },
  { q: 4, name: 'Hàm dưới, bên phải', rev: true },
  { q: 3, name: 'Hàm dưới, bên trái', rev: false },
];
// thứ tự đọc trên phiếu: hàm trên 18 → 28, hàm dưới 48 → 38
const ORDER = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];
const sortTeeth = (a) => [...a].sort((x, y) => ORDER.indexOf(x) - ORDER.indexOf(y));
const upper = (t) => t < 30;

const TYPES = {
  mao: { name: 'Mão', mats: ['zr', 'ml', 'zrpfm', 'pfm', 'metal'] },
  cau: { name: 'Cầu răng', mats: ['zr', 'ml', 'zrpfm', 'pfm', 'metal'] },
  implant: { name: 'Mão trên implant', mats: ['zr', 'ml', 'zrpfm', 'pfm', 'metal'] },
  inlay: { name: 'Inlay', mats: ['zr', 'ml', 'metal'] },
  onlay: { name: 'Onlay', mats: ['zr', 'ml', 'metal'] },
  overlay: { name: 'Overlay', mats: ['zr', 'ml'] },
  cui: { name: 'Cùi giả', mats: ['metal', 'zr'] },
};
const MATS = {
  zr: 'Zirconia nguyên khối',
  ml: 'Zirconia Multilayer',
  zrpfm: 'Sứ đắp trên sườn zirconia',
  pfm: 'Sứ trên sườn kim loại',
  metal: 'Toàn kim loại',
};
const SHADES = ['A1', 'A2', 'A3', 'A3.5', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D2', 'D3', 'D4'];
const SUGGEST = 'Labo đề xuất';
const OTHER = 'Dòng khác (ghi chú)';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const read = (area) => { try { return JSON.parse(window[area].getItem(KEY)) || {}; } catch { return {}; } };
const write = (area, v) => { try { window[area].setItem(KEY, JSON.stringify(v)); } catch { /* chế độ riêng tư: bỏ qua */ } };
const store = {
  get() {
    const keep = read('localStorage');
    return { ...read('sessionStorage'), ...Object.fromEntries(KEEP.filter((k) => k in keep).map((k) => [k, keep[k]])) };
  },
  set(v) {
    write('localStorage', Object.fromEntries(KEEP.map((k) => [k, v[k]])));
    write('sessionStorage', v);
  },
};

export function initRx(root) {
  const D = JSON.parse(document.getElementById('rx-data').textContent);
  const zrNames = D.zirconia.map((m) => m.name);
  const brandsFor = (mat) => {
    if (mat === 'pfm' || mat === 'metal') return [...D.metal, SUGGEST];
    if (mat === 'ml') return [...D.zirconia.filter((m) => m.ml).map((m) => m.name), SUGGEST, OTHER];
    return [...zrNames, SUGGEST, OTHER];
  };
  const years = (brand) => (D.zirconia.find((m) => m.name === brand) || {}).years || null;
  const hasShade = (it) => it.mat !== 'metal' && it.type !== 'cui';

  const blank = () => ({ clinic: '', doctor: '', phone: '', patient: '', due: '', imp: 'scan', opp: true, bite: true, photo: false, etch: false, note: '', items: [] });
  const saved = store.get();
  const S = Object.assign(blank(), saved);
  const sel = new Set();
  const draft = { type: 'mao', mat: 'zr', brand: zrNames[0] || SUGGEST, shade: 'A2', sys: '', abut: SUGGEST, ret: SUGGEST, note: '' };

  /* ---------- khung ---------- */
  const quad = ({ q, name, rev }) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => q * 10 + n);
    if (rev) nums.reverse();
    return `<div class="rx-q rx-q${q}"><p class="rx-qname">${name}</p><div class="rx-teeth">${nums.map((t) => {
      const n = t % 10; const k = n >= 6 ? 'm' : n >= 4 ? 'p' : n === 3 ? 'c' : 'i';
      return `<button type="button" class="rx-t rx-${k}" data-t="${t}" aria-pressed="false" aria-label="Răng ${t}"><i aria-hidden="true"></i><span>${t}</span><b class="rx-badge" aria-hidden="true"></b></button>`;
    }).join('')}</div></div>`;
  };
  const opt = (v, cur, label = v) => `<option value="${esc(v)}"${v === cur ? ' selected' : ''}>${esc(label)}</option>`;
  root.innerHTML = `
<div class="rx-grid">
  <div class="rx-main">
    <section class="rx-card" aria-labelledby="rx-h1">
      <div class="rx-card-head"><h2 id="rx-h1">Chọn răng</h2><p class="rx-hint">Ký hiệu FDI, nhìn từ phía bác sĩ. Bấm để chọn, bấm lần nữa để bỏ.</p></div>
      <div class="rx-chart">${QUADS.map(quad).join('')}</div>
      <div class="rx-selbar"><p data-sel>Chưa chọn răng nào.</p><button type="button" class="rx-mini" data-clear hidden>Bỏ chọn</button></div>
    </section>

    <section class="rx-card" aria-labelledby="rx-h2">
      <div class="rx-card-head"><h2 id="rx-h2">Phục hình cho răng đã chọn</h2></div>
      <fieldset class="rx-chips" data-types><legend>Loại phục hình</legend>
        ${Object.entries(TYPES).map(([k, t]) => `<label><input type="radio" name="rx-type" value="${k}"${k === draft.type ? ' checked' : ''}><span>${t.name}</span></label>`).join('')}
      </fieldset>
      <div class="rx-row">
        <label class="rx-f"><span>Vật liệu</span><select data-mat></select></label>
        <label class="rx-f"><span>Dòng phôi, hợp kim</span><select data-brand></select></label>
      </div>
      <p class="rx-war" data-war></p>
      <fieldset class="rx-chips rx-shades" data-shades><legend>Màu (VITA classical)</legend>
        ${[...SHADES, 'Theo ảnh gửi kèm'].map((s) => `<label><input type="radio" name="rx-shade" value="${s}"${s === draft.shade ? ' checked' : ''}><span>${s}</span></label>`).join('')}
      </fieldset>
      <div class="rx-implant" data-implant hidden>
        <div class="rx-row">
          <label class="rx-f"><span>Hệ implant, đường kính</span><input data-sys type="text" placeholder="Ví dụ: Osstem TS III, 4.5"></label>
          <label class="rx-f"><span>Abutment</span><select data-abut>${[SUGGEST, 'Ti-base', 'Abutment cá nhân hoá', 'Abutment có sẵn của phòng khám'].map((v) => opt(v, draft.abut)).join('')}</select></label>
          <label class="rx-f"><span>Lưu giữ</span><select data-ret>${[SUGGEST, 'Bắt vít', 'Gắn xi măng'].map((v) => opt(v, draft.ret)).join('')}</select></label>
        </div>
      </div>
      <label class="rx-f"><span>Ghi chú cho hạng mục này <em>(không bắt buộc)</em></span><input data-inote type="text" placeholder="Ví dụ: khoảng phục hình thấp, nghiến răng, cắt lớp mặt ngoài"></label>
      <p class="rx-err" data-err role="alert"></p>
      <button type="button" class="btn btn-red rx-add" data-add>Thêm vào phiếu</button>
    </section>

    <section class="rx-card" aria-labelledby="rx-h3">
      <div class="rx-card-head"><h2 id="rx-h3">Các hạng mục</h2></div>
      <ol class="rx-items" data-items></ol>
      <p class="rx-empty" data-empty>Chưa có hạng mục. Chọn răng ở trên rồi bấm “Thêm vào phiếu”.</p>
    </section>

    <section class="rx-card" aria-labelledby="rx-h4">
      <div class="rx-card-head"><h2 id="rx-h4">Thông tin ca</h2></div>
      <div class="rx-row">
        <label class="rx-f"><span>Phòng khám</span><input data-k="clinic" type="text" autocomplete="organization"></label>
        <label class="rx-f"><span>Bác sĩ</span><input data-k="doctor" type="text" autocomplete="name"></label>
        <label class="rx-f"><span>Điện thoại</span><input data-k="phone" type="tel" autocomplete="tel" inputmode="tel"></label>
      </div>
      <div class="rx-row">
        <label class="rx-f"><span>Mã hoặc tên bệnh nhân</span><input data-k="patient" type="text" autocomplete="off"></label>
        <label class="rx-f"><span>Ngày hẹn bệnh nhân</span><input data-k="due" type="date"></label>
      </div>
      <fieldset class="rx-chips"><legend>Dấu gửi labo</legend>
        ${[['scan', 'File scan trong miệng'], ['dau', 'Dấu'], ['mau', 'Mẫu hàm']].map(([v, l]) => `<label><input type="radio" name="rx-imp" value="${v}" data-k="imp"><span>${l}</span></label>`).join('')}
      </fieldset>
      <fieldset class="rx-checks"><legend>Gửi kèm</legend>
        <label><input type="checkbox" data-k="opp"> Hàm đối diện</label>
        <label><input type="checkbox" data-k="bite"> Khớp cắn</label>
        <label><input type="checkbox" data-k="photo"> Ảnh so màu</label>
      </fieldset>
      <label class="rx-check-etch"><input type="checkbox" data-k="etch"> <span><strong>Xoi mòn Zircos-E</strong> mặt dán zirconia (miễn phí, cho inlay, onlay, overlay). <a href="/dich-vu/xoi-mon-zirconia-zircos-e/">Tìm hiểu</a></span></label>
      <label class="rx-f"><span>Ghi chú chung</span><textarea data-k="note" rows="3"></textarea></label>
    </section>
  </div>

  <aside class="rx-out" aria-labelledby="rx-oh">
    <div class="rx-out-in">
      <div class="rx-out-head"><h2 id="rx-oh">Phiếu</h2><button type="button" class="rx-mini" data-new>Phiếu mới</button></div>
      <dl class="rx-sum">
        <div><dt>Số đơn vị</dt><dd data-units>0</dd></div>
        <div><dt>Thời gian sản xuất dự kiến</dt><dd data-eta>—</dd></div>
      </dl>
      <pre class="rx-text" data-text aria-live="polite"></pre>
      <div class="rx-actions">
        <button type="button" class="btn btn-red" data-zalo>Sao chép, mở Zalo</button>
        <button type="button" class="btn btn-line" data-copy>Sao chép</button>
        <a class="btn btn-line" data-mail href="#">Gửi email</a>
        <button type="button" class="btn btn-line" data-print>In, lưu PDF</button>
      </div>
      <p class="rx-toast" data-toast role="status"></p>
      <p class="rx-fine">Zalo labo: ${esc(D.zalo.label)}. Thời gian sản xuất tính từ lúc labo nhận hàng; labo xác nhận khi nhận ca.</p>
    </div>
  </aside>
</div>`;

  const $ = (s) => root.querySelector(s);
  const teethBtns = [...root.querySelectorAll('.rx-t')];
  const matSel = $('[data-mat]'), brandSel = $('[data-brand]');

  /* ---------- tính toán ---------- */
  const units = () => S.items.filter((it) => it.type !== 'cui').reduce((n, it) => n + it.teeth.length, 0);
  const eta = () => {
    const n = units();
    if (!n) return null;
    const T = D.turnaround;
    const t = n <= 3 ? T[0] : n <= 8 ? T[1] : S.items.some((it) => it.teeth.some(upper)) && S.items.some((it) => it.teeth.some((x) => !upper(x))) ? T[3] : T[2];
    return `${t.time}${t.max ? ` (${t.max})` : ''}`;
  };
  const itemLine = (it, i) => {
    const t = sortTeeth(it.teeth);
    const pon = new Set(it.pontic || []);
    const teeth = it.type === 'cau' ? t.map((x) => (pon.has(x) ? `${x} (nhịp)` : String(x))).join(' – ') : t.join(', ');
    const head = it.type === 'cau' ? `Cầu ${t.length} đơn vị: răng ${teeth}`
      : t.length > 1 ? `${TYPES[it.type].name} × ${t.length}: răng ${teeth}` : `${TYPES[it.type].name}: răng ${teeth}`;
    const y = years(it.brand);
    const lines = [`${i + 1}. ${head}`, `   Vật liệu: ${MATS[it.mat]}, ${it.brand}${y ? ` (bảo hành ${y} năm)` : ''}`];
    if (hasShade(it)) lines.push(`   Màu: ${it.shade}`);
    if (it.type === 'implant') lines.push(`   Implant: ${it.sys || 'chưa ghi hệ implant'}; abutment: ${it.abut}; lưu giữ: ${it.ret}`);
    if (it.note) lines.push(`   Ghi chú: ${it.note}`);
    return lines.join('\n');
  };
  const fmtDate = (d) => (d ? d.split('-').reverse().join('/') : '');
  const text = () => {
    const imp = { scan: 'File scan trong miệng', dau: 'Dấu', mau: 'Mẫu hàm' }[S.imp];
    const att = [S.opp && 'hàm đối diện', S.bite && 'khớp cắn', S.photo && 'ảnh so màu'].filter(Boolean);
    const L = ['PHIẾU CHỈ ĐỊNH — KTV Dental Lab'];
    L.push(`Phòng khám: ${S.clinic || '…'}`);
    L.push(`Bác sĩ: ${S.doctor || '…'}${S.phone ? `, ĐT ${S.phone}` : ''}`);
    L.push(`Bệnh nhân: ${S.patient || '…'}`);
    if (S.due) L.push(`Ngày hẹn bệnh nhân: ${fmtDate(S.due)}`);
    L.push(`Dấu: ${imp}${att.length ? `, kèm ${att.join(', ')}` : ''}`);
    L.push('');
    if (S.items.length) S.items.forEach((it, i) => L.push(itemLine(it, i)));
    else L.push('(chưa có hạng mục)');
    L.push('');
    const extra = [S.etch && 'Xoi mòn Zircos-E mặt dán zirconia'].filter(Boolean);
    if (extra.length) L.push(`Yêu cầu thêm: ${extra.join('; ')}`);
    if (S.note.trim()) L.push(`Ghi chú: ${S.note.trim()}`);
    const n = units();
    if (n) L.push(`Tổng: ${n} đơn vị${S.items.some((it) => it.type === 'cui') ? ' (chưa tính cùi giả)' : ''}`);
    return L.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  };

  /* ---------- vẽ lại ---------- */
  const fillMat = () => {
    const allowed = TYPES[draft.type].mats;
    if (!allowed.includes(draft.mat)) draft.mat = allowed[0];
    matSel.innerHTML = allowed.map((m) => opt(m, draft.mat, MATS[m])).join('');
    const bs = brandsFor(draft.mat);
    if (!bs.includes(draft.brand)) draft.brand = bs[0];
    brandSel.innerHTML = bs.map((b) => opt(b, draft.brand)).join('');
    const y = years(draft.brand);
    $('[data-war]').textContent = y ? `${draft.brand}: bảo hành ${y} năm.` : draft.mat === 'pfm' || draft.mat === 'metal' ? 'Răng sứ kim loại: bảo hành theo thỏa thuận.' : '';
    const showShade = draft.mat !== 'metal' && draft.type !== 'cui';
    $('[data-shades]').hidden = !showShade;
    $('[data-implant]').hidden = draft.type !== 'implant';
  };
  const drawChart = () => {
    const used = new Map();
    S.items.forEach((it, i) => it.teeth.forEach((t) => used.set(t, [...(used.get(t) || []), i + 1])));
    teethBtns.forEach((b) => {
      const t = +b.dataset.t; const on = sel.has(t); const u = used.get(t);
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('used', !!u);
      b.querySelector('.rx-badge').textContent = u ? u.join(',') : '';
      b.setAttribute('aria-label', `Răng ${t}${u ? `, đã có trong hạng mục ${u.join(', ')}` : ''}`);
    });
    const s = sortTeeth(sel);
    $('[data-sel]').innerHTML = s.length ? `Đã chọn <strong>${s.length}</strong> răng: ${s.join(', ')}` : 'Chưa chọn răng nào.';
    $('[data-clear]').hidden = !s.length;
  };
  const drawItems = () => {
    $('[data-items]').innerHTML = S.items.map((it, i) => {
      const t = sortTeeth(it.teeth); const pon = new Set(it.pontic || []);
      return `<li><div class="rx-it-body"><p class="rx-it-head">${esc(itemLine(it, i).split('\n')[0].replace(/^\d+\.\s*/, ''))}</p>
<p class="rx-it-sub">${esc(MATS[it.mat])}, ${esc(it.brand)}${hasShade(it) ? `, màu ${esc(it.shade)}` : ''}${it.type === 'implant' && it.sys ? `, ${esc(it.sys)}` : ''}</p>
${it.type === 'cau' ? `<p class="rx-pon"><span>Bấm để đổi trụ / nhịp:</span>${t.map((x) => `<button type="button" class="rx-mini${pon.has(x) ? ' is-pon' : ''}" data-pon="${i}:${x}" aria-pressed="${pon.has(x)}">${x} ${pon.has(x) ? 'nhịp' : 'trụ'}</button>`).join('')}</p>` : ''}</div>
<button type="button" class="rx-del" data-del="${i}" aria-label="Xoá hạng mục ${i + 1}">×</button></li>`;
    }).join('');
    $('[data-empty]').hidden = S.items.length > 0;
  };
  const drawOut = () => {
    const tx = text();
    $('[data-text]').textContent = tx;
    $('[data-units]').textContent = String(units());
    $('[data-eta]').textContent = eta() || '—';
    const subj = `Phiếu chỉ định${S.clinic ? ` — ${S.clinic}` : ''}${S.patient ? ` — ${S.patient}` : ''}`;
    $('[data-mail]').href = `mailto:${D.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(tx)}`;
    const etchFit = S.items.some((it) => ['inlay', 'onlay', 'overlay'].includes(it.type) && (it.mat === 'zr' || it.mat === 'ml'));
    root.querySelector('.rx-check-etch').classList.toggle('suggest', etchFit && !S.etch);
    store.set(S);
  };
  const drawAll = () => { fillMat(); drawChart(); drawItems(); drawOut(); };

  /* ---------- thông tin ca: gán giá trị đã lưu, lắng nghe thay đổi ---------- */
  root.querySelectorAll('[data-k]').forEach((el) => {
    const k = el.dataset.k;
    if (el.type === 'checkbox') el.checked = !!S[k];
    else if (el.type === 'radio') el.checked = S[k] === el.value;
    else el.value = S[k] || '';
    el.addEventListener(el.type === 'checkbox' || el.type === 'radio' || el.type === 'date' ? 'change' : 'input', () => {
      S[k] = el.type === 'checkbox' ? el.checked : el.value;
      drawOut();
    });
  });

  /* ---------- chọn răng ---------- */
  teethBtns.forEach((b) => b.addEventListener('click', () => {
    const t = +b.dataset.t;
    if (sel.has(t)) sel.delete(t); else sel.add(t);
    $('[data-err]').textContent = '';
    drawChart();
  }));
  $('[data-clear]').addEventListener('click', () => { sel.clear(); drawChart(); });

  /* ---------- hạng mục đang soạn ---------- */
  root.querySelectorAll('input[name="rx-type"]').forEach((r) => r.addEventListener('change', () => { draft.type = r.value; fillMat(); }));
  root.querySelectorAll('input[name="rx-shade"]').forEach((r) => r.addEventListener('change', () => { draft.shade = r.value; }));
  matSel.addEventListener('change', () => { draft.mat = matSel.value; fillMat(); });
  brandSel.addEventListener('change', () => { draft.brand = brandSel.value; fillMat(); });
  $('[data-sys]').addEventListener('input', (e) => { draft.sys = e.target.value; });
  $('[data-abut]').addEventListener('change', (e) => { draft.abut = e.target.value; });
  $('[data-ret]').addEventListener('change', (e) => { draft.ret = e.target.value; });
  $('[data-inote]').addEventListener('input', (e) => { draft.note = e.target.value; });

  $('[data-add]').addEventListener('click', () => {
    const err = $('[data-err]');
    const teeth = sortTeeth(sel);
    if (!teeth.length) { err.textContent = 'Chọn ít nhất một răng trên sơ đồ.'; return; }
    if (draft.type === 'cau') {
      if (teeth.length < 2) { err.textContent = 'Cầu răng cần từ 2 răng trở lên.'; return; }
      if (teeth.some(upper) && teeth.some((t) => !upper(t))) { err.textContent = 'Một cầu răng chỉ nằm trên một hàm. Tách thành hai hạng mục.'; return; }
    }
    S.items.push({
      teeth, type: draft.type, mat: draft.mat, brand: draft.brand, shade: draft.shade, note: draft.note.trim(),
      ...(draft.type === 'cau' ? { pontic: [] } : {}),
      ...(draft.type === 'implant' ? { sys: draft.sys.trim(), abut: draft.abut, ret: draft.ret } : {}),
    });
    sel.clear(); draft.note = ''; $('[data-inote]').value = ''; err.textContent = '';
    drawChart(); drawItems(); drawOut();
    toast(`Đã thêm hạng mục ${S.items.length}.`);
  });

  $('[data-items]').addEventListener('click', (e) => {
    const del = e.target.closest('[data-del]'); const pon = e.target.closest('[data-pon]');
    if (del) S.items.splice(+del.dataset.del, 1);
    else if (pon) {
      const [i, t] = pon.dataset.pon.split(':').map(Number); const it = S.items[i];
      it.pontic = it.pontic && it.pontic.includes(t) ? it.pontic.filter((x) => x !== t) : [...(it.pontic || []), t];
    } else return;
    drawChart(); drawItems(); drawOut();
  });

  $('[data-new]').addEventListener('click', () => {
    if (S.items.length && !window.confirm('Xoá các hạng mục và thông tin bệnh nhân để soạn phiếu mới? Tên phòng khám, bác sĩ được giữ lại.')) return;
    const keep = { clinic: S.clinic, doctor: S.doctor, phone: S.phone, imp: S.imp };
    Object.assign(S, blank(), keep);
    root.querySelectorAll('[data-k]').forEach((el) => {
      const k = el.dataset.k;
      if (el.type === 'checkbox') el.checked = !!S[k]; else if (el.type === 'radio') el.checked = S[k] === el.value; else el.value = S[k] || '';
    });
    sel.clear(); drawAll();
  });

  /* ---------- gửi ---------- */
  const tEl = $('[data-toast]'); let tTimer = 0;
  function toast(msg) { tEl.textContent = msg; tEl.classList.add('show'); clearTimeout(tTimer); tTimer = setTimeout(() => tEl.classList.remove('show'), 3200); }
  const copy = async () => {
    const tx = text();
    try { await navigator.clipboard.writeText(tx); return true; } catch { /* trình duyệt cũ */ }
    const ta = document.createElement('textarea'); ta.value = tx; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0';
    document.body.append(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove(); return ok;
  };
  const needItems = () => { if (S.items.length) return false; toast('Phiếu chưa có hạng mục nào.'); return true; };
  $('[data-copy]').addEventListener('click', async () => { if (needItems()) return; toast((await copy()) ? 'Đã sao chép phiếu.' : 'Không sao chép được, hãy chọn và sao chép phần chữ của phiếu.'); });
  $('[data-zalo]').addEventListener('click', async () => {
    if (needItems()) return;
    const ok = await copy();
    toast(ok ? `Đã sao chép. Dán vào khung chat Zalo ${D.zalo.label}.` : 'Không sao chép được, hãy chọn và sao chép phần chữ của phiếu.');
    window.open(D.zalo.url, '_blank', 'noopener');
  });
  $('[data-mail]').addEventListener('click', (e) => { if (needItems()) e.preventDefault(); });
  $('[data-print]').addEventListener('click', () => {
    if (needItems()) return;
    let sheet = document.querySelector('.rx-print');
    if (!sheet) { sheet = document.createElement('div'); sheet.className = 'rx-print'; document.body.append(sheet); }
    const logo = document.querySelector('.brand img');
    sheet.innerHTML = `${logo ? `<img src="${logo.getAttribute('src')}" alt="" width="70">` : ''}<pre></pre><p>KTV Dental Lab, Zalo ${esc(D.zalo.label)}, ${esc(D.email)}. Giờ làm việc: ${esc(D.hours)}</p>`;
    sheet.querySelector('pre').textContent = text();
    window.print();
  });

  drawAll();
}
