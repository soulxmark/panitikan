// ═══════════════════════════════════════════════════
// SPARKS
// ═══════════════════════════════════════════════════
function sparks(x,y,n=7) {
  for(let i=0;i<n;i++){
    const s=document.createElement('div');s.className='spark';
    const a=(i/n)*Math.PI*2,d=30+Math.random()*55;
    s.style.cssText=`left:${x}px;top:${y}px;--sx:${(Math.cos(a)*d).toFixed(0)}px;--sy:${(Math.sin(a)*d).toFixed(0)}px;width:${(2+Math.random()*4).toFixed(0)}px;height:${(2+Math.random()*4).toFixed(0)}px;background:hsl(${38+Math.random()*18},90%,${58+Math.random()*18}%)`;
    document.body.appendChild(s);setTimeout(()=>s.remove(),600);
  }
}
document.addEventListener('click',e=>{if(!e.target.closest('.modal')&&!e.target.closest('#mobileNav'))sparks(e.clientX,e.clientY,5)});
document.addEventListener('touchend',e=>{const t=e.changedTouches[0];sparks(t.clientX,t.clientY,4)},{passive:true});

// ═══════════════════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════════════════
(function(){const w=document.getElementById('particles');for(let i=0;i<45;i++){const p=document.createElement('div');p.className='ptcl';const sz=(Math.random()*4+1.5).toFixed(1)+'px';p.style.cssText=`--size:${sz};--dur:${(Math.random()*10+7).toFixed(1)}s;--delay:${(Math.random()*12).toFixed(1)}s;--left:${(Math.random()*100).toFixed(1)}%;--dx:${(Math.random()*80-40).toFixed(0)}px`;w.appendChild(p)}})();
