(() => {
  const controls=document.querySelector('.travel-view-controls');
  const map=document.querySelector('.travel-map-panel');
  const entries=[...document.querySelectorAll('[data-trip-entry]')];
  if(!controls||!map||!entries.length)return;
  const index=document.querySelector('.trip-index');
  const valid=id=>entries.some(entry=>entry.dataset.tripEntry===id);
  let selected=valid(location.hash.slice(1))?location.hash.slice(1):entries[0].dataset.tripEntry;
  let mode='list';
  try{if(localStorage.getItem('portfolio-travel-view')==='map')mode='map';}catch{}
  const update=()=>{
    const wasHidden=map.hidden;
    map.hidden=mode!=='map';
    if(mode==='map'&&wasHidden){const canvas=map.querySelector('.map-canvas');canvas.scrollLeft=canvas.scrollWidth-canvas.clientWidth;}
    index.hidden=mode==='map';
    document.querySelectorAll('.map-return').forEach(link=>{link.hidden=mode!=='map';});
    entries.forEach(entry=>{entry.hidden=mode==='map'&&entry.dataset.tripEntry!==selected;});
    controls.querySelectorAll('[data-travel-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.travelView===mode)));
    map.querySelectorAll('[data-map-trip]').forEach(link=>{
      if(link.dataset.mapTrip===selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
    });
  };
  controls.querySelectorAll('[data-travel-view]').forEach(button=>button.addEventListener('click',()=>{
    mode=button.dataset.travelView;
    try{localStorage.setItem('portfolio-travel-view',mode);}catch{}
    update();
  }));
  map.querySelectorAll('[data-map-trip]').forEach(link=>link.addEventListener('click',event=>{
    if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    selected=link.dataset.mapTrip;
    // Reveal the target before normal anchor navigation; keyboard and pointer use the same links.
    update();
  }));
  window.addEventListener('hashchange',()=>{
    if(valid(location.hash.slice(1))){selected=location.hash.slice(1);update();}
  });
  controls.hidden=false;
  update();
})();
