// KTV Dental Lab — site interactions
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
const root = document.documentElement;

/* ---------- mobile menu ---------- */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  const close = () => { root.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = !root.classList.contains('menu-open');
    root.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------- popup "Nhận bảng giá qua Zalo" ---------- */
const quoteTpl = document.getElementById('quote-tpl');
if (quoteTpl && typeof HTMLDialogElement === 'function') {
  let dlg = null;
  const openQuote = (e) => {
    e.preventDefault();
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.className = 'quote-dlg';
      dlg.setAttribute('aria-labelledby', 'quote-h');
      dlg.append(quoteTpl.content.cloneNode(true));
      document.body.append(dlg);
      dlg.addEventListener('click', (ev) => { if (ev.target === dlg || ev.target.closest('[data-close]')) dlg.close(); });
    }
    dlg.showModal();
  };
  document.querySelectorAll('[data-quote]').forEach((a) => a.addEventListener('click', openQuote));
}

/* ---------- header state ---------- */
const header = document.querySelector('.site-header');
const onScrollHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

/* ---------- materials panel ---------- */
const steps = [...document.querySelectorAll('.mat-step')];
const panel = document.querySelector('.mat-panel');
const matScroll = document.querySelector('.mat-scroll');
const idxLinks = [...document.querySelectorAll('.mat-index a')];
let activeMat = -1;
function showMaterial(i, crown) {
  if (i === activeMat || !steps[i]) return;
  activeMat = i;
  const d = steps[i].dataset;
  // empty data-years = warranty by agreement (metal-ceramic): no number, no ring
  const hasWar = d.years !== undefined && d.years.trim() !== '';
  if (panel) {
    panel.querySelector('[data-f="group"]').textContent = d.group;
    panel.querySelector('[data-f="name"]').textContent = d.name;
    panel.querySelector('[data-f="country"]').textContent = d.country;
    panel.querySelector('[data-f="maker"]').textContent = d.maker;
    panel.querySelector('[data-f="note"]').textContent = d.note || '';
    const link = panel.querySelector('[data-f="link"]');
    if (link && d.slug) { link.href = `/vat-lieu/${d.slug}/`; link.querySelector('[data-f="lname"]').textContent = d.name; }
    if (matScroll) matScroll.classList.toggle('no-war', !hasWar);
    if (hasWar) {
      const yEl = panel.querySelector('[data-f="years"]');
      const target = +d.years;
      if (reduced) yEl.textContent = String(target).padStart(2, '0');
      else {
        const from = parseInt(yEl.textContent, 10) || 0; const t0 = performance.now();
        const run = (t) => { const p = Math.min(1, (t - t0) / 600); yEl.textContent = String(Math.round(from + (target - from) * p)).padStart(2, '0'); if (p < 1) requestAnimationFrame(run); };
        requestAnimationFrame(run);
      }
      panel.querySelector('[data-f="bar"]').style.setProperty('--p', (target / 15).toFixed(3));
    }
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
  }
  idxLinks.forEach((a, j) => a.classList.toggle('on', j === i));
  if (crown) crown.setMaterial({ look: d.look, years: hasWar ? +d.years : null, tone: d.tone, coping: d.coping });
}
idxLinks.forEach((a, j) => a.addEventListener('click', (e) => {
  e.preventDefault();
  steps[j].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
}));

/* ---------- materials: one wheel notch = one material ----------
   While the material panel is pinned, a mouse-wheel notch moves exactly one material up or down.
   Past the first or last material the page scrolls normally again. Touch and keyboard scrolling are untouched. */
const stepTarget = (i) => {
  const mid = window.innerHeight * 0.5;
  const top = steps[i].getBoundingClientRect().top + window.scrollY;
  // step 0: panel just pinned; others: that step has just crossed the middle of the screen
  return i === 0 ? matScroll.getBoundingClientRect().top + window.scrollY : Math.ceil(top - mid + 12);
};
const currentStep = () => {
  const mid = window.innerHeight * 0.5; let idx = 0;
  steps.forEach((st, i) => { if (st.getBoundingClientRect().top < mid) idx = i; });
  return idx;
};
if (matScroll && steps.length && window.matchMedia('(pointer: fine)').matches) {
  let goal = -1, lastWheel = 0, lockUntil = 0, moveUntil = 0, acc = 0;
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX) || !e.deltaY) return;
    const r = matScroll.getBoundingClientRect();
    if (!(r.top <= 2 && r.bottom >= window.innerHeight - 2)) return;   // panel not pinned
    const now = performance.now();
    if (now - lastWheel > 700) { goal = currentStep(); acc = 0; }      // new gesture: start from what is on screen
    lastWheel = now;
    const dir = Math.sign(e.deltaY);
    if ((dir > 0 && goal >= steps.length - 1) || (dir < 0 && goal <= 0)) {
      if (now < moveUntil) e.preventDefault();   // let the move to the first/last material finish first
      return;                                     // then leave the section normally
    }
    e.preventDefault();
    // a mouse notch (large delta) always moves one material, even while the previous move is still running;
    // a trackpad (many small deltas) moves one material per ~60px of swipe, at most one per 450 ms
    const notch = Math.abs(e.deltaY) >= 40 && e.deltaMode === 0 || e.deltaMode === 1;
    if (!notch) {
      acc += e.deltaY;
      if (Math.abs(acc) < 60 || now < lockUntil) return;
      acc = 0; lockUntil = now + 450;
    }
    goal += dir;
    moveUntil = now + 600;
    window.scrollTo({ top: stepTarget(goal), behavior: reduced ? 'auto' : 'smooth' });
  }, { passive: false });
}

/* ---------- scroll stages (run immediately; the 3D crown joins later) ---------- */
let crown = null;
const stageEls = [...document.querySelectorAll('[data-stage]')];

function pickStage() {
  const mid = window.innerHeight * 0.5;
  let best = null;
  for (const el of stageEls) {            // deepest (last) element spanning the middle wins
    const r = el.getBoundingClientRect();
    if (r.top <= mid && r.bottom >= mid) best = el;
  }
  if (!best) return;
  const cfg = JSON.parse(isMobile() ? (best.dataset.stageM || best.dataset.stage) : best.dataset.stage);
  crown && crown.setStage(cfg);
  if (best.classList.contains('mat-scroll')) {
    // which step crosses the middle?
    let idx = 0;
    steps.forEach((s, i) => { const r = s.getBoundingClientRect(); if (r.top < mid) idx = i; });
    showMaterial(idx, crown);
    if (crown) crown.setBlank(steps[idx].dataset.blank);   // photo of that material's blank, if any
  } else {
    if (crown) crown.setBlank(null);
    if (crown && activeMat !== -1 && best.id === 'top') {
      activeMat = -1;
      crown.setMaterial({ look: 'zirconia', years: 0 });
    }
  }
}
if (stageEls.length) {
  window.addEventListener('scroll', pickStage, { passive: true });
  window.addEventListener('resize', pickStage);
  pickStage();
  if (activeMat === -1) showMaterial(0, null);
}

/* ---------- 3D crown: loaded only once the page has painted and the browser is idle ----------
   Until then (and on devices without WebGL) a still render of the same crown sits in the hero. */
async function loadCrown() {
  const canvas = document.getElementById('stage3d');
  if (!canvas) return;
  // data saver or a 2G link: keep the still render rather than download three.js and the tooth models (~0.9 MB)
  const net = navigator.connection;
  if (net && (net.saveData || /2g/.test(net.effectiveType || ''))) { root.classList.add('no-webgl'); return; }
  const ok = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } })();
  if (!ok) { root.classList.add('no-webgl'); return; }
  try {
    const { initCrown, loadToothModels } = await import('./crown.js');
    let models = null;
    try { models = await loadToothModels(); } catch (err) { console.warn('real crown model unavailable, using fallback', err); }
    crown = initCrown(canvas, { reducedMotion: reduced, models });
    root.classList.add('webgl');
    activeMat = -1;                        // re-apply the current section/material to the crown
    pickStage();
  } catch (err) { console.warn('3D disabled', err); root.classList.add('no-webgl'); }
}
const whenIdle = (fn) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 1500));
if (document.readyState === 'complete') whenIdle(loadCrown);
else window.addEventListener('load', () => whenIdle(loadCrown), { once: true });

/* ---------- year in footer ---------- */
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

/* ---------- mobile quick-contact dock: appears once the page's own call buttons have scrolled away ----------
   Not on the order-slip page, which has its own send buttons and needs the bottom of the screen. */
if (document.querySelector('.dock') && !document.querySelector('[data-rx]')) {
  const onDock = () => root.classList.toggle('dock-on', window.scrollY > 560);
  window.addEventListener('scroll', onDock, { passive: true });
  onDock();
}

/* ---------- phiếu chỉ định online (/phieu-chi-dinh/) ---------- */
const rxRoot = document.querySelector('[data-rx]');
if (rxRoot) import('./rx.js').then(({ initRx }) => initRx(rxRoot)).catch((err) => console.warn('rx tool unavailable', err));

/* ---------- chọn nhanh dòng zirconia (/vat-lieu/so-sanh-zirconia/) ---------- */
const pickRoot = document.querySelector('[data-pick]');
if (pickRoot) import('./pick.js').then(({ initPick }) => initPick(pickRoot)).catch((err) => console.warn('pick tool unavailable', err));
