// ═══════════════════════════════════════════════════
// SCROLL EFFECTS
// ═══════════════════════════════════════════════════
window.addEventListener('scroll',()=>{
  document.getElementById('readProg').style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);
},{passive:true});
