// ═══════════════════════════════════════════════════
// CURSOR
// ═══════════════════════════════════════════════════
const cDot = document.getElementById('cDot');
const cRing = document.getElementById('cRing');
let mx=0,my=0,rx=0,ry=0,trailT=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cDot.style.transform=`translate(${mx}px,${my}px)`;
  if(Date.now()-trailT>42){
    trailT=Date.now();
    const t=document.createElement('div');
    t.style.cssText=`position:fixed;width:5px;height:5px;border-radius:50%;background:rgba(201,168,76,.4);left:${mx}px;top:${my}px;pointer-events:none;z-index:9996;animation:spark-a .7s ease-out forwards;transform:translate(-50%,-50%)`;
    document.body.appendChild(t);setTimeout(()=>t.remove(),700);
  }
});
(function rafC(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;cRing.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(rafC)})();
document.querySelectorAll('button,a,.char-card,.feat-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cRing.classList.add('hov'));
  el.addEventListener('mouseleave',()=>cRing.classList.remove('hov'));
});
