// ═══════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════
let aboutBuilt = false;
function buildAbout() {
  if (aboutBuilt) return; aboutBuilt = true;
  const tl=document.getElementById('timeline');
  TIMELINE.forEach(item=>{
    const d=document.createElement('div');d.className='tl-item';
    d.innerHTML=`<div class="tl-dot"></div><div class="tl-year">${item.year}</div><div class="tl-text">${item.text}</div>`;
    tl.appendChild(d);
  });
  const obs=new IntersectionObserver(ents=>{ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})},{threshold:.1});
  tl.querySelectorAll('.tl-item').forEach((el,i)=>{el.style.transitionDelay=`${i*.1}s`;obs.observe(el)});
}
