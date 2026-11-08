// Dotted 3D globe drawn on a 2D canvas. Land comes from the site's own Natural Earth paths
// (x = (lon + 180) * 3, y = (85 - lat) * 3, same projection as the travel map), rasterized once
// and sampled with a Fibonacci sphere. Visited countries are drawn pink.
import {cssColor, rgb, mix, onTheme, loopWhileVisible, fitCanvas, calm} from './util.js';

const D = Math.PI / 180;
// One shared land mask for every globe on the page.
let land = null;
const loadLand = visited => (land ??= landMask(visited));
async function landMask(visited) {
  const countries = await fetch('/assets/world-countries.json').then(r => r.json());
  const c = document.createElement('canvas');
  c.width = 1080; c.height = 480;
  const g = c.getContext('2d', {willReadFrequently: true});
  for (const k of countries) { g.fillStyle = visited.has(k.code) ? '#ff0000' : '#00ff00'; g.fill(new Path2D(k.path)); }
  return g.getImageData(0, 0, 1080, 480).data;
}

export const places = {
  tbilisi: [44.8, 41.7], georgia: [43.3, 41.4], kamchatka: [158.65, 53.05], vietnam: [108.2, 16.05], china: [121.47, 31.23], singapore: [103.82, 1.35],
};

// Arcs fly from Tbilisi to the journal entries abroad.
export const arcs = ['kamchatka', 'vietnam', 'china', 'singapore'].map(k => [places.tbilisi, places[k]]);

export async function globe(canvas, {points = 22000, focus = [60, 25], tilt = 25, markers = [], arcs = [], interactive = true, labels = true, speed = 6, onPick, visited = []} = {}) {
  const mask = await loadLand(new Set(visited));
  if (calm) speed = 0;
  // Fibonacci sphere → keep only land samples.
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < points; i++) {
    const y = 1 - (i / (points - 1)) * 2, lat = Math.asin(y) / D, lon = ((((i * golden) / D) % 360) + 360) % 360 - 180;
    const px = Math.floor((lon + 180) * 3), py = Math.floor((85 - lat) * 3);
    if (py < 0 || py >= 480) continue;
    const k = (py * 1080 + Math.min(1079, px)) * 4;
    if (mask[k] > 120) pts.push(lat * D, lon * D, 1);
    else if (mask[k + 1] > 120) pts.push(lat * D, lon * D, 0);
  }
  const P = new Float32Array(pts);
  const ctx = canvas.getContext('2d');
  let W = 1, H = 1, dpr = 1;
  fitCanvas(canvas, (w, h, d) => { W = w; H = h; dpr = d; });

  let yaw = -focus[0] * D, pitch = tilt * D, vyaw = 0, vpitch = 0;
  let dragging = false, lastX = 0, lastY = 0, idle = 0, moved = 0;
  if (interactive) {
    canvas.style.touchAction = 'pan-y';
    canvas.addEventListener('pointerdown', e => { dragging = true; moved = 0; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => {
      hover = {x: e.offsetX, y: e.offsetY};
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY; moved += Math.abs(dx) + Math.abs(dy);
      lastX = e.clientX; lastY = e.clientY;
      vyaw = dx * 0.005; vpitch = dy * 0.004;
      yaw += vyaw; pitch = Math.max(-1.2, Math.min(1.2, pitch + vpitch)); idle = 0;
    });
    canvas.addEventListener('pointerup', e => {
      dragging = false;
      if (moved < 6 && onPick && hit) onPick(hit);
    });
    canvas.addEventListener('pointerleave', () => { hover = null; });
    canvas.addEventListener('keydown', e => {
      const step = {ArrowLeft: [-0.15, 0], ArrowRight: [0.15, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1]}[e.key];
      if (!step) return;
      e.preventDefault();
      yaw -= step[0]; pitch = Math.max(-1.2, Math.min(1.2, pitch + step[1])); idle = 0;
    });
  }
  let hover = null, hit = null;

  let C = {};
  const colors = () => {
    const ink = cssColor('--ink'), paper = cssColor('--paper'), panel = cssColor('--panel'), pink = cssColor('--pink'), line = cssColor('--line');
    C = {ink: rgb(ink), land: rgb(mix(ink, paper, 0.25)), back: rgb(mix(panel, ink, 0.18)), pink: rgb(pink), pinkBack: rgb(mix(panel, pink, 0.45)), ocean: rgb(panel), oceanHi: rgb(mix(panel, paper, 0.7)), line: rgb(line), paper: rgb(paper)};
  };
  colors(); onTheme(colors);

  // Project lat/lon (radians) with the current rotation. Returns [sx, sy, z].
  const proj = (lat, lon, R, cx, cy, alt = 1) => {
    const cl = Math.cos(lat), x = cl * Math.sin(lon + yaw), y = Math.sin(lat), z = cl * Math.cos(lon + yaw);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    const y2 = y * cp - z * sp, z2 = y * sp + z * cp;
    return [cx + x * R * alt, cy - y2 * R * alt, z2];
  };
  const slerp = (a, b, t) => {
    const v = ([lon, lat]) => [Math.cos(lat * D) * Math.cos(lon * D), Math.cos(lat * D) * Math.sin(lon * D), Math.sin(lat * D)];
    const A = v(a), B = v(b), dot = Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2]), om = Math.acos(dot), s = Math.sin(om) || 1;
    const k1 = Math.sin((1 - t) * om) / s, k2 = Math.sin(t * om) / s;
    const p = A.map((c, i) => c * k1 + B[i] * k2);
    return [Math.asin(p[2]), Math.atan2(p[1], p[0])];
  };

  loopWhileVisible(canvas, (t, dt) => {
    if (!dragging) {
      idle += dt;
      vyaw *= calm ? 0 : Math.pow(0.05, dt); vpitch *= calm ? 0 : Math.pow(0.05, dt);
      yaw += vyaw + (idle > 1.2 ? speed * D * dt : 0);
      pitch += vpitch; pitch += (tilt * D - pitch) * (idle > 2 ? 0.5 * dt : 0);
    }
    const R = Math.min(W, H) * 0.44, cx = W / 2, cy = H / 2;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    // Ocean sphere with a soft highlight.
    const g = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
    g.addColorStop(0, C.oceanHi); g.addColorStop(1, C.ocean);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill();
    ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.stroke();

    const s = Math.max(1.2, R / 150);
    const back = new Path2D(), backV = new Path2D(), front = new Path2D(), frontV = new Path2D();
    for (let i = 0; i < P.length; i += 3) {
      const [x, y, z] = proj(P[i], P[i + 1], R, cx, cy);
      const vis = P[i + 2] === 1;
      if (z < 0) { const r = s * 0.7; (vis ? backV : back).rect(x - r / 2, y - r / 2, r, r); }
      else { const r = s * (0.55 + 0.6 * z) * (vis ? 1.45 : 1); (vis ? frontV : front).rect(x - r / 2, y - r / 2, r, r); }
    }
    ctx.globalAlpha = 0.55; ctx.fillStyle = C.back; ctx.fill(back); ctx.fillStyle = C.pinkBack; ctx.fill(backV);
    ctx.globalAlpha = 1; ctx.fillStyle = C.land; ctx.fill(front); ctx.fillStyle = C.pink; ctx.fill(frontV);

    // Flight arcs, animated dash; hidden where they pass behind the sphere.
    ctx.lineWidth = Math.max(1.2, R / 220); ctx.strokeStyle = C.ink; ctx.lineCap = 'round';
    arcs.forEach(([a, b], n) => {
      const steps = 64, phase = calm ? 1 : ((t * 0.35 + n * 0.21) % 1.6);
      ctx.beginPath();
      let pen = false;
      for (let k = 0; k <= steps; k++) {
        const u = k / steps;
        if (u > phase) break;
        const [lat, lon] = slerp(a, b, u);
        const [x, y, z] = proj(lat, lon, R, cx, cy, 1 + Math.sin(Math.PI * u) * 0.18);
        const hidden = z < 0 && Math.hypot(x - cx, y - cy) < R;
        if (hidden) { pen = false; continue; }
        pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true;
      }
      ctx.globalAlpha = phase > 1 ? Math.max(0, 1 - (phase - 1) / 0.6) : 1;
      ctx.stroke(); ctx.globalAlpha = 1;
    });

    // Markers + labels.
    hit = null;
    ctx.font = `${Math.max(10, Math.round(R / 26))}px 'IBM Plex Mono', monospace`;
    for (const m of markers) {
      const [x, y, z] = proj(m.lat * D, m.lon * D, R, cx, cy);
      if (z < 0.05) continue;
      const near = hover && Math.hypot(hover.x - x, hover.y - y) < 16;
      if (near) hit = m;
      if (!calm) {
        const pulse = 4 + ((t * 1.2 + m.lon) % 1) * 10;
        ctx.globalAlpha = 1 - ((t * 1.2 + m.lon) % 1);
        ctx.strokeStyle = C.ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x, y, pulse, 0, 7); ctx.stroke();
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = near ? C.pink : C.ink; ctx.strokeStyle = C.paper; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x, y, near ? 6 : 4.5, 0, 7); ctx.fill(); ctx.stroke();
      if (labels) {
        ctx.globalAlpha = Math.min(1, z * 3);
        ctx.lineWidth = 4; ctx.strokeStyle = C.ocean; ctx.strokeText(m.label, x + 10, y - 8);
        ctx.fillStyle = C.ink; ctx.fillText(m.label, x + 10, y - 8);
        ctx.globalAlpha = 1;
      }
    }
    canvas.style.cursor = dragging ? 'grabbing' : hit ? 'pointer' : interactive ? 'grab' : '';
  });
}
