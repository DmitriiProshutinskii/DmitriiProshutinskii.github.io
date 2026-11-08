// Shared helpers for the site's motion layer.
export const ready = fn => (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once: true}) : fn());

// True when the visitor asked the system for less motion: every effect then renders its final, still state.
export const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

const probe = document.createElement('canvas').getContext('2d');
// Reads a CSS custom property and returns [r, g, b] in 0..1.
export const cssColor = (name, el = document.documentElement) => {
  probe.fillStyle = '#000';
  probe.fillStyle = getComputedStyle(el).getPropertyValue(name).trim() || '#000';
  const c = probe.fillStyle;
  if (c.startsWith('#')) return [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16) / 255);
  return (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(v => v / 255);
};
export const rgb = c => `rgb(${c.map(v => Math.round(v * 255)).join(',')})`;
export const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

// Calls fn whenever the light/dark theme flips (preferences.js sets data-theme on <html>).
export const onTheme = fn => new MutationObserver(fn).observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});

// Runs a rAF loop only while `el` is on screen. frame(seconds, dt).
export const loopWhileVisible = (el, frame) => {
  let raf = 0, visible = false, last = performance.now();
  const tick = now => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    frame(now / 1000, dt);
    if (visible) raf = requestAnimationFrame(tick);
  };
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) { last = performance.now(); raf = requestAnimationFrame(tick); }
  }).observe(el);
};

// Adds `cls` once each element scrolls into view.
export const revealOnView = (els, cls = 'is-in', opts = {threshold: 0.2}) => {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add(cls); io.unobserve(e.target); }
  }), opts);
  els.forEach(el => io.observe(el));
};

// Keeps a canvas sized to its CSS box at device pixel ratio; onResize(w, h, dpr) gets CSS pixels.
export const fitCanvas = (canvas, onResize) => {
  const fit = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const {width, height} = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    onResize?.(width, height, dpr);
  };
  new ResizeObserver(fit).observe(canvas);
  fit();
};
