// KTV Dental Lab — procedural 3D ceramic crown (three.js)
import {
  WebGLRenderer, Scene, BufferAttribute, PerspectiveCamera, Group, Mesh, Color, Vector3, MathUtils,
  MeshPhysicalMaterial, MeshStandardMaterial, MeshBasicMaterial, PMREMGenerator,
  ACESFilmicToneMapping, SRGBColorSpace, DirectionalLight, AmbientLight,
  RingGeometry, CircleGeometry, PlaneGeometry, SphereGeometry, CanvasTexture, DoubleSide, Plane, BufferGeometry, TextureLoader,
} from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const H = 0.55;       // occlusal rim height
const BOTTOM = -0.95; // cervical margin height
const N = 2.6;        // superellipse exponent → rounded-square molar outline

function outline(theta) {
  const c = Math.cos(theta), s = Math.sin(theta);
  const r = Math.pow(Math.pow(Math.abs(c), N) + Math.pow(Math.abs(s), N), -1 / N);
  return [1.08 * r * c, 0.94 * r * s];
}

// occlusal anatomy: four cusps, a central fossa and two fissures
function cuspField(x, z) {
  const g = (cx, cz, a, s) => a * Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / s);
  let f = g(0.42, 0.34, 0.34, 0.075) + g(-0.42, 0.36, 0.29, 0.08) + g(0.44, -0.33, 0.3, 0.075) + g(-0.42, -0.34, 0.25, 0.08);
  f -= 0.2 * Math.exp(-(x * x + z * z) / 0.035);
  f -= 0.1 * Math.exp(-(z * z) / 0.006) * Math.exp(-(x * x) / 0.45);
  f -= 0.08 * Math.exp(-(x * x) / 0.006) * Math.exp(-(z * z) / 0.35);
  return f;
}

function crownSurface(scale = 1) {
  return (u, v, target) => {
    const theta = u * Math.PI * 2;
    const [ox, oz] = outline(theta);
    let x, y, z;
    if (v < 0.12) {                       // intaglio (inside of the crown, seen from below)
      const t = v / 0.12;
      const r = 0.72 * t;
      x = ox * r; z = oz * r;
      y = BOTTOM + 0.55 * (1 - t * t);
    } else if (v < 0.78) {                // axial walls
      const s = (v - 0.12) / 0.66;
      y = MathUtils.lerp(BOTTOM, H, s);
      let r;
      if (s < 0.55) r = 0.72 + 0.28 * Math.pow(Math.sin((Math.PI / 2) * (s / 0.55)), 1.15);
      else r = 1.0 - 0.07 * ((s - 0.55) / 0.45) ** 2;
      x = ox * r; z = oz * r;
    } else {                              // occlusal table
      const t = (v - 0.78) / 0.22;
      const r = 0.93 * (1 - t);
      x = ox * r; z = oz * r;
      const ridge = 0.1 * Math.sin((Math.PI / 2) * Math.min(t / 0.22, 1));
      const k = MathUtils.smoothstep(t, 0.08, 0.42);
      y = H + ridge + k * cuspField(x, z);
    }
    target.set(x * scale, y * scale, z * scale);
  };
}

function buildCrownGeometry(scale = 1, seg = [160, 140]) {
  let g = new ParametricGeometry(crownSurface(scale), seg[0], seg[1]);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  g = mergeVertices(g, 1e-4);
  const idx = g.index.array;               // flip winding so normals face outward
  for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
  g.computeVertexNormals();
  const pos = g.attributes.position, col = new Float32Array(pos.count * 3);
  const neck = new Color('#e9d6bb'), mid = new Color('#f6efe4'), top = new Color('#fbfdff'), c = new Color();
  for (let i = 0; i < pos.count; i++) {
    const t = MathUtils.clamp((pos.getY(i) / scale - BOTTOM) / (H + 0.35 - BOTTOM), 0, 1);
    if (t < 0.5) c.copy(neck).lerp(mid, t / 0.5); else c.copy(mid).lerp(top, (t - 0.5) / 0.5);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  return g;
}

function shadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  const gr = x.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, 'rgba(10,30,70,0.42)');
  gr.addColorStop(0.45, 'rgba(10,30,70,0.16)');
  gr.addColorStop(1, 'rgba(10,30,70,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 256, 256);
  return new CanvasTexture(c);
}

// Visual presets. Zirconia lines differ only by a subtle tone; metal-ceramic shows the metal coping.
export const LOOKS = {
  zirconia: { color: '#f8f4ee', transmission: 0.32, roughness: 0.3, coping: 0 },
  metal:    { color: '#f6f1e9', transmission: 0.32, roughness: 0.28, coping: 1 },
};

/* ---------- real crown from the lab's CAD files (see _source/tools/stl_to_bin.py) ---------- */
const C_NECK = new Color('#e2c49c'), C_BODY = new Color('#f1e4cd'), C_TOP = new Color('#f8f2e7'), C_STAIN = new Color('#8a6340');

function decodeBin(buf, shade) {
  const dv = new DataView(buf);
  if (dv.getUint32(0, true) !== 0x3156544b) throw new Error('bad model file');   // 'KTV1'
  const n = dv.getUint32(4, true), m = dv.getUint32(8, true);
  const lo = [0, 1, 2].map((i) => dv.getFloat32(12 + i * 4, true));
  const st = [0, 1, 2].map((i) => dv.getFloat32(24 + i * 4, true));
  const q = new Uint16Array(buf, 36, n * 3);
  const idx = new Uint16Array(buf, 36 + n * 6, m);
  const cav = new Uint8Array(buf, 36 + n * 6 + m * 2, n);
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i++) pos[i] = lo[i % 3] + q[i] * st[i % 3];
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setIndex(new BufferAttribute(idx, 1));
  g.computeVertexNormals();
  g.computeBoundingBox();
  // design meshes show faint facet ripples under a glossy glaze; relax the normals (not the shape)
  {
    const nr = g.attributes.normal.array, acc = new Float32Array(n * 3), cnt = new Uint16Array(n);
    for (let pass = 0; pass < 4; pass++) {
      acc.fill(0); cnt.fill(0);
      for (let t = 0; t < m; t += 3) {
        const a = idx[t], b = idx[t + 1], c3 = idx[t + 2];
        for (const [i, j, k] of [[a, b, c3], [b, c3, a], [c3, a, b]]) {
          acc[i * 3] += nr[j * 3] + nr[k * 3]; acc[i * 3 + 1] += nr[j * 3 + 1] + nr[k * 3 + 1]; acc[i * 3 + 2] += nr[j * 3 + 2] + nr[k * 3 + 2]; cnt[i] += 2;
        }
      }
      for (let i = 0; i < n; i++) {
        let x = nr[i * 3] + 0.5 * acc[i * 3] / cnt[i], y = nr[i * 3 + 1] + 0.5 * acc[i * 3 + 1] / cnt[i], z = nr[i * 3 + 2] + 0.5 * acc[i * 3 + 2] / cnt[i];
        const L = Math.hypot(x, y, z) || 1; nr[i * 3] = x / L; nr[i * 3 + 1] = y / L; nr[i * 3 + 2] = z / L;
      }
    }
  }
  if (shade) {
    // chroma at the neck → lighter body → bright occlusal; light stain in fissures and pits
    const y0 = g.boundingBox.min.y, y1 = g.boundingBox.max.y, col = new Float32Array(n * 3), c = new Color();
    for (let i = 0; i < n; i++) {
      const t = (pos[i * 3 + 1] - y0) / (y1 - y0);
      if (t < 0.5) c.copy(C_NECK).lerp(C_BODY, MathUtils.smoothstep(t, 0, 0.5));
      else c.copy(C_BODY).lerp(C_TOP, MathUtils.smoothstep(t, 0.5, 1));
      c.lerp(C_STAIN, 0.7 * MathUtils.smoothstep(cav[i] / 255, 0.14, 0.7));
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new BufferAttribute(col, 3));
  }
  return g;
}

export async function loadToothModels(base = '/assets/models/') {
  const get = (name) => fetch(base + name + '.bin').then((r) => { if (!r.ok) throw new Error(name + ' ' + r.status); return r.arrayBuffer(); });
  const [crown, coping] = await Promise.all([get('crown'), get('coping')]);
  return { crown: decodeBin(crown, true), coping: decodeBin(coping, false) };
}

// anchor points for the DOM annotations, picked on the real surface
function anchorsFrom(g) {
  const p = g.attributes.position, bb = g.boundingBox, h = bb.max.y - bb.min.y;
  const best = (score) => { let bi = 0, bs = -Infinity; for (let i = 0; i < p.count; i++) { const s = score(p.getX(i), p.getY(i), p.getZ(i)); if (s > bs) { bs = s; bi = i; } } return new Vector3(p.getX(bi), p.getY(bi), p.getZ(bi)); };
  const dir = (x, z) => { const L = Math.hypot(x, z); return [x / L, z / L]; };
  const [mx, mz] = dir(-0.62, 0.45), [cx, cz] = dir(-1, 0.3);
  const occlusal = best((x, y) => y).add(new Vector3(0, 0.02, 0));
  const margin = best((x, y, z) => (y < bb.min.y + 0.05 * h ? x * mx + z * mz : -Infinity));
  const contour = best((x, y, z) => (y > bb.min.y + 0.3 * h && y < bb.min.y + 0.6 * h ? x * cx + z * cz : -Infinity));
  margin.x += mx * 0.03; margin.z += mz * 0.03; contour.x += cx * 0.03; contour.z += cz * 0.03;
  return { occlusal, margin, contour };
}

export function makeCeramic() {
  return new MeshPhysicalMaterial({
    color: new Color(LOOKS.zirconia.color), roughness: 0.3, metalness: 0, vertexColors: true,
    transmission: 0.32, thickness: 1.4, ior: 1.55,
    attenuationColor: new Color('#f1e3cf'), attenuationDistance: 2.2,
    clearcoat: 0.85, clearcoatRoughness: 0.12, sheen: 0.35, sheenColor: new Color('#ffffff'),
    specularIntensity: 0.7, side: DoubleSide,
  });
}

export function initCrown(canvas, { bg = '#F3F5F9', reducedMotion = false, models = null } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  const mobile = window.matchMedia('(max-width: 760px)').matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(new Color(bg), 1);
  renderer.localClippingEnabled = true;

  const scene = new Scene();
  scene.background = new Color(bg);
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.62;

  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 1.1, 7.2);
  camera.lookAt(0, 0, 0);

  const key = new DirectionalLight('#ffffff', 1.5); key.position.set(3, 5, 4); scene.add(key);
  const rim = new DirectionalLight('#7fa8ff', 1.1); rim.position.set(-4, 2, -3); scene.add(rim);
  const warm = new DirectionalLight('#ffd9c2', 0.5); warm.position.set(2, -3, 3); scene.add(warm);
  scene.add(new AmbientLight('#ffffff', 0.25));

  const stage = new Group();   // moves around the screen
  const spin = new Group();    // rotates the tooth
  stage.add(spin);
  scene.add(stage);

  const ceramic = makeCeramic();
  const cut = new Plane(new Vector3(-1, 0, 0.35).normalize(), 100);
  ceramic.clippingPlanes = [cut];
  // the real crown + coping from the lab's CAD files; procedural crown only as a fallback
  const crown = new Mesh(models ? models.crown : buildCrownGeometry(1), ceramic);
  spin.add(crown);

  const metalMat = new MeshStandardMaterial({ color: '#a7adb6', metalness: 1, roughness: 0.28 });
  let coping;
  if (models) {
    const cg = models.coping, c = new Vector3();
    cg.boundingBox.getCenter(c);
    cg.translate(-c.x, -c.y, -c.z);               // grow the coping from its own centre
    coping = new Mesh(cg, metalMat);
    coping.position.copy(c);
  } else {
    coping = new Mesh(buildCrownGeometry(0.82, [96, 80]), metalMat);
    coping.geometry.deleteAttribute('color');
    coping.position.y = -0.06;
  }
  coping.scale.setScalar(0.001);
  spin.add(coping);

  // warranty ring: track + progress + 16 ticks (0–15 years)
  const ringGroup = new Group();
  ringGroup.rotation.x = -Math.PI / 2 + 0.28;
  ringGroup.position.y = -0.2;
  stage.add(ringGroup);
  const R0 = 1.72, R1 = 1.745;
  const trackMat = new MeshBasicMaterial({ color: '#9fb6d8', transparent: true, opacity: 0, side: DoubleSide, depthWrite: false });
  ringGroup.add(new Mesh(new RingGeometry(R0, R1, 256), trackMat));
  const progMat = new MeshBasicMaterial({ color: '#064CA1', transparent: true, opacity: 0, side: DoubleSide, depthWrite: false });
  const prog = new Mesh(new RingGeometry(R0 - 0.03, R1 + 0.03, 4, 1, Math.PI / 2, 0.001), progMat);
  ringGroup.add(prog);
  const tickMat = new MeshBasicMaterial({ color: '#064CA1', transparent: true, opacity: 0, side: DoubleSide, depthWrite: false });
  for (let i = 0; i <= 15; i++) {
    const a = Math.PI / 2 - (i / 15) * Math.PI * 2 * 0.999;
    const len = i % 5 === 0 ? 0.14 : 0.07;
    const t = new Mesh(new PlaneGeometry(0.012, len), tickMat);
    const rr = R1 + 0.06 + len / 2;
    t.position.set(Math.cos(a) * rr, Math.sin(a) * rr, 0);
    t.rotation.z = a - Math.PI / 2;
    ringGroup.add(t);
  }
  const dotMat = new MeshBasicMaterial({ color: '#ED1C24', transparent: true, opacity: 0, depthWrite: false });
  const dot = new Mesh(new SphereGeometry(0.055, 24, 16), dotMat);
  ringGroup.add(dot);

  const shadow = new Mesh(new CircleGeometry(1.7, 48), new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.32;
  shadow.scale.set(1, 0.75, 1);
  stage.add(shadow);

  // product photo (box + blank) behind the crown — up and to the right so the label stays readable;
  // two planes so one can fade into the next
  const BLANK_X = 0.5, BLANK_Y = 0.78;
  const blankLoader = new TextureLoader(), blankCache = new Map();
  const blankMats = [0, 1].map(() => new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
  const blanks = blankMats.map((m) => {
    const p = new Mesh(new PlaneGeometry(1, 1), m);
    p.position.set(BLANK_X, BLANK_Y, -2.0);
    p.rotation.x = -Math.atan2(camera.position.y, camera.position.z);   // face the camera
    p.visible = false;
    stage.add(p);
    return p;
  });
  const blankFade = [{ a: 0, t: 0 }, { a: 0, t: 0 }];
  let blankFront = 0, blankUrl = null;
  function showBlank(url) {
    if (url === blankUrl) return;
    blankUrl = url;
    if (!url) { blankFade[0].t = blankFade[1].t = 0; return; }
    const apply = (tex) => {
      if (blankUrl !== url) return;                 // user already scrolled on
      const n = 1 - blankFront, img = tex.image, asp = img.width / img.height;
      blankMats[n].map = tex; blankMats[n].needsUpdate = true;
      // fit inside S wide × HMAX tall so square disc photos don't climb into the header
      const S = W < 760 ? 2.9 : 3.6, HMAX = W < 760 ? 2.2 : 2.7;
      const w = Math.min(S, HMAX * asp);
      blanks[n].scale.set(w, w / asp, 1);
      blankFade[n].t = 1; blankFade[blankFront].t = 0; blankFront = n;
    };
    if (blankCache.has(url)) apply(blankCache.get(url));
    else blankLoader.load(url, (tex) => { tex.colorSpace = SRGBColorSpace; tex.anisotropy = 4; blankCache.set(url, tex); apply(tex); },
      undefined, () => { if (blankUrl === url) blankFade[0].t = blankFade[1].t = 0; });
  }

  // anchors for DOM annotations (local to `spin`)
  const anchors = models ? anchorsFrom(models.crown) : {
    occlusal: new Vector3(0.18, H + 0.32, 0.2),
    margin: new Vector3(-0.62, BOTTOM + 0.12, 0.45),
    contour: new Vector3(-1.02, 0.0, 0.3),
  };

  // state with targets for smooth easing
  const st = {
    x: 0.9, y: 0, s: 1, op: 1, ring: 0, years: 0, war: 1,
    tx: 0.9, ty: 0, ts: 1, top: 1, tring: 0, tyears: 0, twar: 1,
    mx: 0, my: 0, tmx: 0, tmy: 0,
    rot: 0.6, scrollVel: 0,
    trans: LOOKS.zirconia.transmission, ttrans: LOOKS.zirconia.transmission,
    cop: 0, tcop: 0, color: new Color(LOOKS.zirconia.color), tcolor: new Color(LOOKS.zirconia.color),
    rough: 0.3, trough: 0.3, copColor: new Color('#a7adb6'), tcopColor: new Color('#a7adb6'),
  };

  let W = 1, Hh = 1;
  function resize() {
    W = window.innerWidth; Hh = window.innerHeight;
    renderer.setSize(W, Hh, false);
    camera.aspect = W / Hh;
    camera.fov = W < 760 ? 38 : 30;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // convert a horizontal screen fraction (-1..1) to world x at the stage depth
  function worldHalfWidth() {
    const dist = camera.position.z;
    return Math.tan(MathUtils.degToRad(camera.fov / 2)) * dist * camera.aspect;
  }
  function worldHalfHeight() {
    return Math.tan(MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
  }

  window.addEventListener('pointermove', (e) => {
    st.tmx = (e.clientX / W) * 2 - 1;
    st.tmy = (e.clientY / Hh) * 2 - 1;
  }, { passive: true });
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    st.scrollVel += (y - lastY) * 0.0016;
    lastY = y;
  }, { passive: true });

  const v = new Vector3();
  let onFrame = null;
  let running = true;
  document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) loop(); });

  let last = performance.now();
  let lastFrac = -1, wasHidden = false;
  function loop() {
    if (!running) return;
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const k = 1 - Math.pow(0.0025, dt);     // frame-rate independent easing
    const ks = 1 - Math.pow(0.02, dt);

    st.x += (st.tx - st.x) * k; st.y += (st.ty - st.y) * k;
    st.s += (st.ts - st.s) * k; st.op += (st.top - st.op) * k;
    st.ring += (st.tring - st.ring) * k;
    st.war += (st.twar - st.war) * k;
    st.years += (st.tyears - st.years) * ks;
    st.mx += (st.tmx - st.mx) * k; st.my += (st.tmy - st.my) * k;
    st.trans += (st.ttrans - st.trans) * k; st.cop += (st.tcop - st.cop) * k; st.rough += (st.trough - st.rough) * k;
    st.color.lerp(st.tcolor, k); st.copColor.lerp(st.tcopColor, k);

    if (!reducedMotion) st.rot += dt * 0.32 + st.scrollVel;
    st.scrollVel *= Math.pow(0.02, dt);

    const hw = worldHalfWidth(), hh = worldHalfHeight();
    stage.position.set(st.x * hw, -st.y * hh, 0);
    const sc = 0.74 * st.s * Math.min(1, (hw * 2) / 5.2) * (W < 760 ? 1.05 : 1);
    stage.scale.setScalar(sc * (0.2 + 0.8 * st.op));
    spin.rotation.y = st.rot + st.mx * 0.35;
    spin.rotation.x = 0.5 + st.my * 0.16;
    spin.rotation.z = -0.08;

    ceramic.transmission = st.trans;
    ceramic.roughness = st.rough;
    ceramic.color.copy(st.color);
    metalMat.color.copy(st.copColor);
    coping.visible = st.cop > 0.01;
    coping.scale.setScalar(Math.max(0.001, st.cop));
    // cutaway: slice the porcelain to reveal the metal coping
    stage.updateMatrixWorld();
    const cx = stage.position.x, cz = stage.position.z;
    cut.constant = -(cut.normal.x * cx + cut.normal.z * cz) + (1 - st.cop) * 6 + st.cop * 0.02;
    shadow.material.opacity = st.op;
    stage.visible = st.op > 0.02;
    const kb = 1 - Math.pow(0.004, dt);
    for (let i = 0; i < 2; i++) {
      const f = blankFade[i];
      f.a += (f.t - f.a) * kb;
      blankMats[i].opacity = f.a * st.op;
      blanks[i].visible = blankMats[i].opacity > 0.01;
      blanks[i].position.x = BLANK_X - st.mx * 0.12;                     // slight parallax against the crown
      blanks[i].position.y = BLANK_Y + st.my * 0.06;
    }

    const ro = st.ring * st.op * st.war;
    trackMat.opacity = 0.55 * ro; progMat.opacity = ro; tickMat.opacity = 0.5 * ro; dotMat.opacity = ro;
    const frac = Math.max(0.001, Math.min(1, st.years / 15));
    if (Math.abs(frac - lastFrac) > 0.0015) {
      lastFrac = frac;
      prog.geometry.dispose();
      prog.geometry = new RingGeometry(R0 - 0.03, R1 + 0.03, Math.max(4, Math.round(frac * 200)), 1, Math.PI / 2 - frac * Math.PI * 2, frac * Math.PI * 2);
    }
    const ea = Math.PI / 2 - frac * Math.PI * 2;
    dot.position.set(Math.cos(ea) * (R0 + R1) / 2, Math.sin(ea) * (R0 + R1) / 2, 0.01);
    ringGroup.rotation.z = st.mx * 0.08;

    const hidden = st.op < 0.02 && st.top === 0;
    if (!hidden || !wasHidden) renderer.render(scene, camera);
    wasHidden = hidden;

    if (onFrame) {
      const pts = {};
      stage.updateWorldMatrix(true, false);
      for (const [name, p] of Object.entries(anchors)) {
        v.copy(p).applyMatrix4(stage.matrixWorld).project(camera);
        pts[name] = { x: (v.x * 0.5 + 0.5) * W, y: (-v.y * 0.5 + 0.5) * Hh, z: v.z };
      }
      const c = new Vector3().applyMatrix4(stage.matrixWorld).project(camera);
      onFrame({ points: pts, center: { x: (c.x * 0.5 + 0.5) * W, y: (-c.y * 0.5 + 0.5) * Hh }, opacity: st.op, years: st.years, ring: st.ring });
    }
    requestAnimationFrame(loop);
  }
  loop();

  return {
    setStage({ x, y, s, o, ring }) {
      if (x !== undefined) st.tx = x;
      if (y !== undefined) st.ty = y;
      if (s !== undefined) st.ts = s;
      if (o !== undefined) st.top = o;
      if (ring !== undefined) st.tring = ring;
    },
    setMaterial({ look = 'zirconia', years = 0, tone, coping: copColor } = {}) {
      const L = LOOKS[look] || LOOKS.zirconia;
      st.ttrans = L.transmission; st.tcop = L.coping; st.trough = L.roughness;
      st.tcolor.set(tone || L.color);
      if (copColor) st.tcopColor.set(copColor);
      // years === null → warranty by agreement: fade the ring out, keep its last value while fading
      if (years === null || years === undefined) st.twar = 0;
      else { st.twar = 1; st.tyears = years; }
      st.scrollVel += 0.35; // a little spin on change
    },
    // photo of the material blank behind the crown; null hides it
    setBlank(url) { showBlank(url || null); },
    onFrame(fn) { onFrame = fn; },
  };
}
