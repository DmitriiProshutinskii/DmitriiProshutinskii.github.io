// Match the Figma contact-sheet crop at every responsive gallery size.
const observer = new ResizeObserver(entries => {
  for (const {target:slot} of entries) {
    const {width,height}=slot.getBoundingClientRect();
    const cellWidth=Math.max(width,height*384/(1024/3));
    const cellHeight=cellWidth*(1024/3)/384;
    const image=slot.querySelector('img');
    image.style.setProperty('--iw',`${cellWidth*4}px`);
    image.style.setProperty('--ih',`${cellHeight*3}px`);
    image.style.setProperty('--ix',`${-Number(slot.dataset.col)*cellWidth-(cellWidth-width)/2}px`);
    image.style.setProperty('--iy',`${-Number(slot.dataset.row)*cellHeight-(cellHeight-height)/2}px`);
  }
});
document.querySelectorAll('.photo[data-col]').forEach(slot=>observer.observe(slot));
