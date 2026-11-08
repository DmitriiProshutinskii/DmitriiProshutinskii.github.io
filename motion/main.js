// Motion layer entry. Typography and reveals follow the page; the background, flow field, liquid button
// and decoding labels stay quiet. With prefers-reduced-motion everything renders in its final, still state.
import {ready, calm} from './util.js';
import {heroIntro, scrollFill, countUp, reveals, scrollLinked} from './type.js';
import {flowField, gooButton, decodeLabels, dotGrid} from './effects.js';
import {globe, arcs} from './globe.js';

const root = document.documentElement;

function globes() {
  const cell = document.querySelector('.proof-globe canvas');
  if (cell) globe(cell, {points: 9000, focus: [80, 30], tilt: 28, interactive: false, labels: false, arcs, speed: 14, visited: cell.dataset.visited.split(',')});

  const section = document.querySelector('.globe-section');
  const stage = section?.querySelector('canvas');
  if (!stage) return;
  section.hidden = false;
  // Marker labels come from the (translated) links next to the globe.
  const markers = [...section.querySelectorAll('[data-lon]')].map(a => ({
    id: a.hash.slice(1), label: a.textContent.replace(/^\d+\s*\/\s*/, '').trim(), lon: Number(a.dataset.lon), lat: Number(a.dataset.lat),
  }));
  globe(stage, {points: innerWidth < 700 ? 16000 : 30000, focus: [90, 30], tilt: 28, markers, arcs, speed: 5, visited: stage.dataset.visited.split(','), onPick: m => { location.hash = m.id; }});
}

ready(() => {
  globes();
  dotGrid();
  if (!calm) {
    heroIntro();
    scrollFill();
    countUp();
    reveals();
    scrollLinked();
    flowField();
    gooButton();
    decodeLabels();
  }
  // From here the effects own the hero's visibility (see the pre-hide rule in styles.css).
  root.classList.add('motion-ready');
});
