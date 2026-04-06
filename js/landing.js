// ═══════════════════════════════════════════════════
// LANDING PAGE
// ═══════════════════════════════════════════════════
// Hero rings
(function(){const w=document.getElementById('lheroRings');for(let i=1;i<=6;i++){const r=document.createElement('div');r.className='lhero-ring';const s=i*185;r.style.cssText=`width:${s}px;height:${s}px;animation-delay:${(i-1)*.75}s`;w.appendChild(r)}})();

// Candles
(function(){const row=document.getElementById('candleRow');const delays=[0,.35,.7,.35,0];for(let i=0;i<5;i++){const c=document.createElement('div');c.className='candle';c.innerHTML=`<div class="candle-flame" style="animation-delay:${delays[i]}s"></div><div class="candle-wick"></div><div class="candle-body"></div><div class="candle-base"></div><div class="candle-smoke" style="animation-delay:${i*.4}s"></div>`;c.addEventListener('click',e=>sparks(e.clientX,e.clientY,14));row.appendChild(c)}})();

// Featured grid
(function(){
  const featured=[CHARS[0],CHARS[2],CHARS[3],CHARS[1],CHARS[4],CHARS[7]];
  const g=document.getElementById('featGrid');
  featured.forEach((c,i)=>{
    const card=document.createElement('div');card.className='feat-card';
    card.style.animationDelay=`${i*.07}s`;
    card.innerHTML=`<div class="feat-emoji" style="background:${c.bg};overflow:hidden;padding:0"><img src="${c.imgSrc||c.img||''}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;object-position:top" onerror="this.parentElement.textContent='👤'"></div><div class="feat-name">${c.name}</div>`;
    card.addEventListener('click',e=>{sparks(e.clientX,e.clientY,8);openModal(c)});
    g.appendChild(card);
  });
  const obs=new IntersectionObserver(ents=>{ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1});
  g.querySelectorAll('.feat-card').forEach(c=>obs.observe(c));
})();
