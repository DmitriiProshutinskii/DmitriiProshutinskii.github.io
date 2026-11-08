// Typography motion: word-by-word headline intro, scroll-filled statements, counting metrics,
// masked heading reveals and a couple of scroll-linked touches. Only runs when motion is allowed.
import {revealOnView} from './util.js';

const splitWords = (el, cls) => {
  if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  const words = [];
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(part); return; }
          const s = document.createElement('span');
          s.className = cls; s.textContent = part; s.setAttribute('aria-hidden', 'true');
          words.push(s); frag.append(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
    });
  };
  walk(el);
  return words;
};

export function heroIntro() {
  document.querySelectorAll('main h1').forEach(h1 => {
    const words = splitWords(h1, 'fx-word');
    words.forEach((w, i) => w.style.setProperty('--i', i));
    h1.classList.add('fx-intro');
    requestAnimationFrame(() => requestAnimationFrame(() => h1.classList.add('is-in')));
  });
  document.querySelectorAll('.hero-copy > :not(h1), .experience-hero > :not(h1), .travel-hero-copy > :not(h1)').forEach((el, i) => {
    el.classList.add('fx-rise'); el.style.setProperty('--d', `${0.55 + i * 0.08}s`);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')));
  });
  document.querySelector('.portrait')?.classList.add('fx-portrait-in');
}

// Words go from faint to full ink as the block scrolls through the viewport.
export function scrollFill() {
  const blocks = [...document.querySelectorAll('.about h2, .about .stack > p.muted:first-of-type, .projects > p, .feature h2, .travel-intro h2, .travel-intro-grid p.muted, .experience-hero .summary')];
  const items = blocks.map(el => ({el, words: splitWords(el, 'fx-fill')}));
  const update = () => {
    const vh = innerHeight;
    for (const {el, words} of items) {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (vh * 0.45 + r.height * 0.6)));
      const lit = p * words.length;
      words.forEach((w, i) => { w.style.opacity = (0.16 + 0.84 * Math.min(1, Math.max(0, lit - i))).toFixed(3); });
    }
  };
  addEventListener('scroll', () => requestAnimationFrame(update), {passive: true});
  addEventListener('resize', update);
  update();
}

// Animates every number inside .metric from 0 when it scrolls into view.
export function countUp() {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target, text = el.dataset.final;
    const t0 = performance.now(), dur = 1400;
    const tick = now => {
      const k = Math.min(1, (now - t0) / dur), ease = 1 - Math.pow(1 - k, 4);
      el.textContent = text.replace(/\d+/g, n => String(Math.round(Number(n) * ease)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), {threshold: 0.6});
  document.querySelectorAll('.metric').forEach(el => {
    el.dataset.final = el.textContent;
    el.setAttribute('aria-label', el.textContent);
    el.textContent = el.textContent.replace(/\d+/g, '0');
    io.observe(el);
  });
}

export function reveals() {
  const heads = [...document.querySelectorAll('main h2, main h3, .footer-wrap h2')].filter(h => !h.closest('.about, .feature, .travel-intro') || h.tagName === 'H3');
  heads.forEach(h => h.classList.add('fx-mask'));
  // Observe the parent: a clip-path on the heading itself would hide it from IntersectionObserver.
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    heads.filter(h => h.parentElement === e.target && h.getBoundingClientRect().top < innerHeight - 30).forEach(h => h.classList.add('is-in'));
    if (heads.every(h => h.parentElement !== e.target || h.classList.contains('is-in'))) io.unobserve(e.target);
  }), {threshold: [0, 0.25, 0.5, 0.75, 1]});
  new Set(heads.map(h => h.parentElement)).forEach(p => io.observe(p));
  addEventListener('scroll', () => heads.forEach(h => { if (!h.classList.contains('is-in') && h.getBoundingClientRect().top < innerHeight - 30) h.classList.add('is-in'); }), {passive: true});
  const cards = [...document.querySelectorAll('.card, .proof > *, .gallery figure, .role, .place-card')];
  cards.forEach(c => {
    c.classList.add('fx-rise');
    const sib = [...c.parentElement.children].indexOf(c);
    c.style.setProperty('--d', `${(c.parentElement.matches('.proof') ? sib : sib % 3) * 0.09}s`);
  });
  revealOnView(cards, 'is-in', {threshold: 0.15});
  const bars = [...document.querySelectorAll('.bar')];
  bars.forEach(b => b.classList.add('fx-bar'));
  revealOnView(bars, 'is-in', {threshold: 0.8});
}

// Scroll-linked: travel hero zoom, footer headline tightening into place.
export function scrollLinked() {
  const heroImg = document.querySelector('.travel-hero > img');
  const heroCopy = document.querySelector('.travel-hero-copy');
  const footerHead = document.querySelector('.footer-wrap h2');
  const update = () => {
    const vh = innerHeight;
    if (heroImg) {
      const p = Math.min(1, scrollY / (vh * 0.9));
      heroImg.style.transform = `scale(${1.12 - p * 0.12})`;
      heroCopy.style.transform = `translateY(${p * -60}px)`;
      heroCopy.style.opacity = String(1 - p * 1.1);
    }
    if (footerHead) {
      const r = footerHead.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.32)));
      footerHead.style.letterSpacing = `${(0.12 - p * 0.16).toFixed(3)}em`;
      footerHead.style.fontVariationSettings = `'wght' ${Math.round(250 + p * 380)}, 'opsz' 32`;
    }
  };
  addEventListener('scroll', () => requestAnimationFrame(update), {passive: true});
  update();
}
