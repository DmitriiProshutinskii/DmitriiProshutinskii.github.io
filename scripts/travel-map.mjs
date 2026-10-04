import {visitedPlaces} from '../website/content/travel-places.mjs';
import {readFile} from 'node:fs/promises';
const countries=JSON.parse(await readFile(new URL('../website/content/world-countries.json',import.meta.url),'utf8'));
// Natural Earth country boundaries, projected to a compact equirectangular SVG at build time.
const markers=[
 {code:'GEO',id:'georgia',label:'Georgia',point:[44,41.5],offset:[-20,-22],anchor:'end'},
 {code:'RUS',id:'kamchatka',label:'Russia',point:[158.65,53.05],offset:[-15,-17],anchor:'end'},
 {code:'CHN',id:'china',label:'China',point:[105,35],offset:[0,-22],anchor:'middle'},
 {code:'VNM',id:'vietnam',label:'Vietnam',point:[108,16],offset:[15,0],anchor:'start'},
 {code:'SGP',id:'singapore',label:'Singapore',point:[103.82,1.35],offset:[-16,23],anchor:'end'}
];
const destinations=visitedPlaces;
export const travelMap=`<div class="travel-map-panel stack" id="travel-map" hidden><div class="row spread"><p class="mono">VISITED COUNTRIES</p><p class="small muted">Choose a highlighted country to see its places and notes.</p></div><div class="map-canvas"><svg class="travel-map" viewBox="0 0 1080 480" role="group" aria-label="Visited countries map"><g class="map-grid" aria-hidden="true">${[-60,-30,0,30,60].map(lat=>`<path d="M0 ${(85-lat)*3}H1080"/>`).join('')}${[-120,-60,0,60,120].map(lon=>`<path d="M${(lon+180)*3} 0V480"/>`).join('')}</g><g aria-hidden="true">${countries.filter(c=>!destinations.some(d=>d.code===c.code)).map(c=>`<path class="map-country" d="${c.path}"/>`).join('')}</g>${destinations.map(d=>{const c=countries.find(c=>c.code===d.code);return `<a href="#${d.id}" data-map-trip="${d.id}" class="map-destination" aria-label="${d.label}"><path class="map-country visited" d="${c.path}"/></a>`}).join('')}${markers.map(d=>{const x=(d.point[0]+180)*3,y=(85-d.point[1])*3;return `<a href="#${d.id}" data-map-trip="${d.id}" class="map-marker" aria-label="${d.label}"><circle class="map-target" cx="${x}" cy="${y}" r="14"/><circle class="map-dot" cx="${x}" cy="${y}" r="4"/><text x="${x+d.offset[0]}" y="${y+d.offset[1]}" text-anchor="${d.anchor}" class="map-label">${d.label}</text></a>`}).join('')}</svg></div><div class="map-destination-links mono" aria-label="Travel destinations">${destinations.map(d=>`<a href="#${d.id}" data-map-trip="${d.id}">${d.label}</a>`).join('')}</div><div class="row spread small muted"><p><span class="map-swatch" aria-hidden="true"></span> Highlighted countries are places I have visited.</p><a href="https://www.naturalearthdata.com/">Map data: Natural Earth ↗</a></div></div>`;
