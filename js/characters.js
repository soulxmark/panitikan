// ═══════════════════════════════════════════════════
// CHARACTERS PAGE
// ═══════════════════════════════════════════════════
let charsBuilt = false;
function buildChars() {
  if (charsBuilt) return; charsBuilt = true;
  // Cards
  const grid=document.getElementById('cardsGrid');
  CHARS.forEach((c,i)=>{
    const card=document.createElement('div');
    card.className='char-card';card.dataset.filter=c.filter;
    card.style.animationDelay=`${i*.07}s`;
    card.innerHTML=`<span class="card-role-tag">${c.role}</span><div class="card-portrait"><div class="card-portrait-bg" style="background:${c.bg}"></div><img class="card-img" src="${c.imgSrc||c.img||''}"" alt="${c.name}" loading="lazy" onerror="this.style.display='none'"></div><div class="shimmer-l"></div><div class="card-body"><div class="card-name">${c.name}</div><div class="card-alias">${c.alias}</div><p class="card-desc">${c.shortDesc}</p></div>`;
    card.addEventListener('click',e=>{sparks(e.clientX,e.clientY,10);openModal(c)});
    if(window.matchMedia('(min-width:769px)').matches){
      card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const dx=(e.clientX-r.left-r.width/2)/(r.width/2);const dy=(e.clientY-r.top-r.height/2)/(r.height/2);card.style.transform=`perspective(900px) rotateY(${dx*9}deg) rotateX(${-dy*7}deg) translateY(-8px) scale(1.015)`});
      card.addEventListener('mouseenter',()=>{card.style.transition='transform .1s,box-shadow .3s,border-color .4s'});
      card.addEventListener('mouseleave',()=>{card.style.transform='';card.style.transition='transform .6s var(--ease-expo),box-shadow .5s,border-color .4s'});
    }
    card.addEventListener('touchstart',()=>card.style.transform='scale(.97)',{passive:true});
    card.addEventListener('touchend',()=>card.style.transform='',{passive:true});
    grid.appendChild(card);
  });
  const obs=new IntersectionObserver(ents=>{ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.08});
  document.querySelectorAll('.char-card').forEach(c=>obs.observe(c));
}