// Atmosphere: a quiet flow field behind "Three independent products", the liquid CTA button,
// mono labels that decode from random glyphs, and a fine dot grid behind the whole page that
// brightens around the cursor while a faint diagonal shimmer passes now and then.
import {cssColor, rgb, mix, onTheme, finePointer, calm, loopWhileVisible, fitCanvas} from './util.js';

export function flowField() {
  const host = document.querySelector('.full-dark');
  if (!host) return;
  host.classList.add('fx-flow-host');
  const canvas = Object.assign(document.createElement('canvas'), {className: 'fx-particles-canvas'});
  canvas.setAttribute('aria-hidden', 'true');
  host.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W = 1, H = 1, dpr = 1;
  const N = 1000;
  const P = Array.from({length: N}, () => ({x: Math.random(), y: Math.random(), life: Math.random() * 6, pink: Math.random() < 0.12}));
  fitCanvas(canvas, (w, h, d) => { W = w; H = h; dpr = d; P.forEach(p => { p.x = Math.random() * W; p.y = Math.random() * H; }); });
  let bg, fg, pk;
  const colors = () => {
    const b = getComputedStyle(host).backgroundColor.match(/[\d.]+/g).slice(0, 3).map(v => v / 255);
    bg = b; fg = rgb(mix(b, cssColor('--paper', host.firstElementChild), 0.7)); pk = rgb(cssColor('--pink'));
  };
  colors(); onTheme(() => setTimeout(colors));
  const m = {x: -1e4, y: -1e4};
  host.addEventListener('pointermove', e => { const b = host.getBoundingClientRect(); m.x = e.clientX - b.left; m.y = e.clientY - b.top; });
  host.addEventListener('pointerleave', () => { m.x = m.y = -1e4; });
  loopWhileVisible(host, (t, dt) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = `rgba(${bg.map(v => Math.round(v * 255)).join(',')},0.035)`;
    ctx.fillRect(0, 0, W, H);
    ctx.lineWidth = 1.1;
    const paths = [new Path2D(), new Path2D()];
    for (const p of P) {
      const a = Math.sin(p.x * 0.0032 + t * 0.15) * 1.8 + Math.cos(p.y * 0.0041 - t * 0.11) * 1.6 + Math.sin((p.x + p.y) * 0.0015) * 1.2;
      let vx = Math.cos(a) * 70, vy = Math.sin(a) * 70;
      const dx = p.x - m.x, dy = p.y - m.y, d2 = dx * dx + dy * dy;
      if (d2 < 220 * 220) { const d = Math.sqrt(d2) + 1, f = (1 - d / 220) * 260; vx += (-dy / d) * f + (dx / d) * f * 0.25; vy += (dx / d) * f + (dy / d) * f * 0.25; }
      const nx = p.x + vx * dt, ny = p.y + vy * dt;
      const path = paths[p.pink ? 1 : 0];
      path.moveTo(p.x, p.y); path.lineTo(nx, ny);
      p.x = nx; p.y = ny; p.life -= dt;
      if (p.life < 0 || p.x < -10 || p.x > W + 10 || p.y < -10 || p.y > H + 10) { p.x = Math.random() * W; p.y = Math.random() * H; p.life = 3 + Math.random() * 5; }
    }
    ctx.strokeStyle = fg; ctx.stroke(paths[0]);
    ctx.strokeStyle = pk; ctx.stroke(paths[1]);
  });
}

// Liquid CTA: an SVG goo filter merges the button with two drops that trail the pointer nearby.
export function gooButton() {
  const button = document.querySelector('.hero-copy .button');
  if (!button) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0';
  svg.innerHTML = '<filter id="fx-goo"><feGaussianBlur in="SourceGraphic" stdDeviation="7"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9"/></filter>';
  document.body.append(svg);
  const layer = document.createElement('span');
  layer.className = 'fx-goo-layer';
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = '<span class="fx-goo-body"></span><span class="fx-goo-drop"></span><span class="fx-goo-drop small"></span>';
  button.prepend(layer);
  button.classList.add('fx-goo-button');
  const drops = [...layer.querySelectorAll('.fx-goo-drop')].map((el, i) => ({el, x: 0, y: 0, k: i ? 0.22 : 0.12}));
  let tx = 0, ty = 0, raf = 0, active = false;
  const PAD = 70;
  const tick = () => {
    let moving = false;
    for (const d of drops) {
      d.x += (tx - d.x) * d.k; d.y += (ty - d.y) * d.k;
      d.el.style.transform = `translate(${d.x}px, ${d.y}px)`;
      if (Math.abs(tx - d.x) + Math.abs(ty - d.y) > 0.3) moving = true;
    }
    raf = moving || active ? requestAnimationFrame(tick) : 0;
  };
  const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
  addEventListener('pointermove', e => {
    const r = button.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const dx = e.clientX - cx, dy = e.clientY - cy;
    const near = Math.abs(dx) < r.width / 2 + PAD * 1.6 && Math.abs(dy) < r.height / 2 + PAD * 1.6;
    // The drop follows the pointer but stays tethered to the button.
    const lim = (v, m) => Math.max(-m, Math.min(m, v));
    tx = near ? lim(dx, r.width / 2 + PAD * 0.55) : 0;
    ty = near ? lim(dy, r.height / 2 + PAD * 0.55) : 0;
    active = near;
    start();
  }, {passive: true});
}

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_-+*#<>';
const GLYPHS_RU = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ0123456789/_-+*#<>';
export function scramble(el, dur = 700) {
  if (el._scrambling) return;
  const nodes = [];
  const walk = n => n.childNodes.forEach(c => (c.nodeType === 3 ? c.textContent.trim() && nodes.push(c) : c.nodeType === 1 && !c.classList.contains('link-arrow') && walk(c)));
  walk(el);
  if (!nodes.length) return;
  if (!el.getAttribute('aria-label') && el.tagName !== 'A') el.setAttribute('aria-label', el.textContent.trim());
  const orig = nodes.map(n => n._orig ?? (n._orig = n.textContent));
  const total = orig.join('').length;
  const glyphs = document.documentElement.lang === 'ru' ? GLYPHS_RU : GLYPHS;
  const t0 = performance.now();
  el._scrambling = true;
  const tick = now => {
    const k = Math.min(1, (now - t0) / dur);
    let seen = 0;
    nodes.forEach((n, j) => {
      n.textContent = [...orig[j]].map(ch => {
        const pos = seen++ / total;
        if (ch === ' ' || pos < k * 1.15 - 0.15) return ch;
        return pos < k * 1.15 + 0.1 ? glyphs[(Math.random() * glyphs.length) | 0] : '·';
      }).join('');
    });
    if (k < 1) requestAnimationFrame(tick);
    else { nodes.forEach((n, j) => { n.textContent = orig[j]; }); el._scrambling = false; }
  };
  requestAnimationFrame(tick);
}

export function decodeLabels() {
  const labels = [...document.querySelectorAll('main p.mono, main .mono > p, .footer-wrap p.mono, .cv-sidebar h2, figcaption.mono')].filter(el => el.textContent.trim().length < 80);
  const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); scramble(e.target, 500 + e.target.textContent.length * 12); } }), {threshold: 0.6});
  labels.forEach(el => io.observe(el));
  if (finePointer) document.querySelectorAll('a.mono, .mono a, .button, nav a').forEach(a => a.addEventListener('pointerenter', () => scramble(a, 420)));
}

// Fixed canvas under the content; the page colour still comes from <body>.
export function dotGrid() {
  const canvas = Object.assign(document.createElement('canvas'), {className: 'fx-bg'});
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W = 1, H = 1, dpr = 1;
  const fit = () => { dpr = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight; canvas.width = W * dpr; canvas.height = H * dpr; };
  addEventListener('resize', fit); fit();
  let base, hot, pink;
  const colors = () => { const paper = cssColor('--paper'), ink = cssColor('--ink'); base = mix(paper, ink, 0.24); hot = mix(paper, ink, 0.55); pink = cssColor('--pink'); };
  colors(); onTheme(colors);
  const m = {x: -1e4, y: -1e4, tx: -1e4, ty: -1e4};
  if (finePointer && !calm) addEventListener('pointermove', e => { m.tx = e.clientX; m.ty = e.clientY; if (m.x < -1e3) { m.x = m.tx; m.y = m.ty; } }, {passive: true});
  document.addEventListener('pointerleave', () => { m.tx = m.ty = -1e4; m.x = m.y = -1e4; });
  const G = 24, R = 170, levels = 6;
  const frame = now => {
    const t = calm ? 0 : now / 1000;
    m.x += (m.tx - m.x) * 0.18; m.y += (m.ty - m.y) * 0.18;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const off = -(scrollY % G);
    const buckets = Array.from({length: levels}, () => new Path2D());
    const sweep = calm ? -9 : ((t * 0.06) % 1.6) - 0.3; // diagonal shimmer position (0..1 across the screen)
    for (let y = off; y < H + G; y += G) for (let x = G / 2; x < W; x += G) {
      const dx = x - m.x, dy = y - m.y, d = Math.sqrt(dx * dx + dy * dy);
      let k = d < R ? (1 - d / R) ** 2 : 0;
      const diag = (x / W + (y - off) / H) / 2;
      k = Math.max(k, Math.max(0, 1 - Math.abs(diag - sweep) * 14) * 0.25);
      const lvl = Math.min(levels - 1, Math.floor(k * levels));
      const r = 1.2 + k * 1.6;
      buckets[lvl].rect(x - r / 2, y - r / 2, r, r);
    }
    buckets.forEach((p, i) => { ctx.fillStyle = rgb(mix(base, i === levels - 1 ? pink : hot, i / (levels - 1))); ctx.fill(p); });
    if (!calm) requestAnimationFrame(frame);
  };
  if (calm) {
    // Still grid: redraw only when the page moves, resizes or changes theme.
    const draw = () => requestAnimationFrame(frame);
    addEventListener('scroll', draw, {passive: true}); addEventListener('resize', draw); onTheme(draw);
  }
  requestAnimationFrame(frame);
}
