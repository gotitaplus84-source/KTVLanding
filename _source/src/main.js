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

/* ---------- header state ---------- */
const header = document.querySelector('.site-header');
const onScrollHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { rootMargin: '0px 0px -12% 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

/* ---------- count-up numbers ---------- */
const countIO = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target; countIO.unobserve(el);
    const to = parseFloat(el.dataset.count); const pad = el.dataset.pad ? +el.dataset.pad : 0;
    if (reduced) { el.textContent = String(to).padStart(pad, '0'); continue; }
    const t0 = performance.now(), dur = 1200;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur); const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(to * eased)).padStart(pad, '0');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

/* ---------- custom cursor (fine pointers only) ---------- */
if (window.matchMedia('(pointer: fine)').matches && !reduced) {
  const dot = document.createElement('div'); dot.className = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);
  let x = -100, y = -100, rx = -100, ry = -100;
  window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; root.classList.add('has-cursor'); }, { passive: true });
  document.addEventListener('pointerleave', () => root.classList.remove('has-cursor'));
  document.addEventListener('pointerover', (e) => {
    const hot = e.target.closest('a, button, [data-hot]');
    ring.classList.toggle('hot', !!hot);
  });
  const tick = () => {
    rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(tick);
  };
  tick();
}

/* ---------- live clock in the hero (Asia/Ho_Chi_Minh) ---------- */
const clock = document.querySelector('[data-clock]');
if (clock) {
  const fmt = new Intl.DateTimeFormat('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Ho_Chi_Minh' });
  const upd = () => { clock.textContent = fmt.format(new Date()); };
  upd(); setInterval(upd, 1000);
}

/* ---------- materials panel ---------- */
const steps = [...document.querySelectorAll('.mat-step')];
const panel = document.querySelector('.mat-panel');
const idxLinks = [...document.querySelectorAll('.mat-index a')];
let activeMat = -1;
function showMaterial(i, crown) {
  if (i === activeMat || !steps[i]) return;
  activeMat = i;
  const d = steps[i].dataset;
  if (panel) {
    panel.querySelector('[data-f="group"]').textContent = d.group;
    panel.querySelector('[data-f="name"]').textContent = d.name;
    panel.querySelector('[data-f="country"]').textContent = d.country;
    panel.querySelector('[data-f="maker"]').textContent = d.maker;
    panel.querySelector('[data-f="note"]').textContent = d.note || '';
    const yEl = panel.querySelector('[data-f="years"]');
    const target = +d.years;
    if (reduced) yEl.textContent = String(target).padStart(2, '0');
    else {
      const from = parseInt(yEl.textContent, 10) || 0; const t0 = performance.now();
      const run = (t) => { const p = Math.min(1, (t - t0) / 600); yEl.textContent = String(Math.round(from + (target - from) * p)).padStart(2, '0'); if (p < 1) requestAnimationFrame(run); };
      requestAnimationFrame(run);
    }
    panel.querySelector('[data-f="bar"]').style.setProperty('--p', (target / 15).toFixed(3));
    panel.querySelector('[data-f="num"]').textContent = String(i + 1).padStart(2, '0');
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
  }
  idxLinks.forEach((a, j) => a.classList.toggle('on', j === i));
  if (crown) crown.setMaterial({ look: d.look, years: +d.years, tone: d.tone, coping: d.coping });
}
idxLinks.forEach((a, j) => a.addEventListener('click', (e) => {
  e.preventDefault();
  steps[j].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
}));

/* ---------- 3D crown ---------- */
async function boot() {
  const canvas = document.getElementById('stage3d');
  let crown = null;
  const ok = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } })();
  if (canvas && ok) {
    try {
      const { initCrown } = await import('./crown.js');
      crown = initCrown(canvas, { reducedMotion: reduced });
      root.classList.add('webgl');
    } catch (err) { console.warn('3D disabled', err); root.classList.add('no-webgl'); }
  } else root.classList.add('no-webgl');

  // stage per section
  const stageEls = [...document.querySelectorAll('[data-stage]')];
  const annos = [...document.querySelectorAll('.anno')];
  const annoWrap = document.querySelector('.annos');
  let annoOpacity = 0;

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
    annoOpacity = best.dataset.annos ? 1 : 0;
    if (best.classList.contains('mat-scroll')) {
      // which step crosses the middle?
      let idx = 0;
      steps.forEach((s, i) => { const r = s.getBoundingClientRect(); if (r.top < mid) idx = i; });
      showMaterial(idx, crown);
    } else if (crown && activeMat !== -1 && best.id === 'top') {
      activeMat = -1;
      crown.setMaterial({ look: 'zirconia', years: 0 });
    }
  }
  window.addEventListener('scroll', pickStage, { passive: true });
  window.addEventListener('resize', pickStage);
  pickStage();
  if (!crown) showMaterial(0, null);

  if (crown && annoWrap) {
    crown.onFrame(({ points, opacity }) => {
      annoWrap.style.opacity = String(annoOpacity * Math.min(1, opacity * 1.2));
      for (const a of annos) {
        const p = points[a.dataset.anchor];
        if (!p) continue;
        a.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`;
      }
    });
  }
}
boot();

/* ---------- year in footer ---------- */
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
