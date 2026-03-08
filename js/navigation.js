// ═══════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════
let currentPage = 'home';
function nav(page) {
  if (page === currentPage) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
  currentPage = page;
  window.scrollTo({top:0,behavior:'smooth'});
  if (page === 'characters') buildChars();
  if (page === 'about') buildAbout();
  if (page === 'kwento') buildKwento();
  if (page === 'game') initGame();
  if (page === 'video') buildVideo();
}

function toggleMobileNav() {
  const mn = document.getElementById('mobileNav');
  const hb = document.getElementById('hamburger');
  mn.classList.toggle('open');
  hb.classList.toggle('open');
  document.body.style.overflow = mn.classList.contains('open') ? 'hidden' : '';
}
