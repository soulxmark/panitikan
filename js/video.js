// ═══════════════════════════════════════════════════
// VIDEO PAGE
// ═══════════════════════════════════════════════════
const VIDEOS = [
  // ── Documentaries ──
  { id:'dXefBvqHJlg', cat:'dokumentaryo', badge:'doc', badgeLabel:'DOC',
    title:'Jose Rizal: The Movie (1998) Full Film',
    desc:'Ang opisyal na pelikula ni Jose Rizal na ginawa ni Marilou Diaz-Abaya — ang buhay at kamatayan ng bayaning Pilipino.',
    source:'YouTube', lang:'Filipino/English', dur:'2h 15m' },
  { id:'fLeE-PnFMlc', cat:'dokumentaryo', badge:'doc', badgeLabel:'DOC',
    title:'Noli Me Tangere at El Filibusterismo — Explainer',
    desc:'Isang malalim na pagsusuri ng dalawang dakilang nobela ni Rizal at ang kanilang papel sa Rebolusyong Pilipino.',
    source:'YouTube', lang:'Filipino', dur:'18m' },
  { id:'gGe9bm9ESVE', cat:'dokumentaryo', badge:'doc', badgeLabel:'DOC',
    title:'El Filibusterismo: Buod at Pagsusuri',
    desc:'Kompletong buod ng El Filibusterismo na may pagsusuri ng mga pangunahing tema at tauhan.',
    source:'YouTube', lang:'Filipino', dur:'22m' },
  { id:'JVqzDbkOFPo', cat:'dokumentaryo', badge:'doc', badgeLabel:'DOC',
    title:'Rizal sa Dapitan — Dokumentaryo',
    desc:'Ang buhay ni Rizal sa kanyang mga taon ng pagkatapon sa Dapitan, Mindanao — isang panahon ng paglikha at pag-aaral.',
    source:'YouTube', lang:'Filipino', dur:'45m' },

  // ── Lectures / Educational ──
  { id:'Ox-fDDtoggI', cat:'lektura', badge:'lec', badgeLabel:'LEKTURA',
    title:'El Filibusterismo — Mga Pangunahing Tema',
    desc:'Propesyonal na lektura tungkol sa mga pangunahing temang panlipunan at pampolitika sa El Filibusterismo.',
    source:'YouTube', lang:'Filipino', dur:'35m' },
  { id:'T6kPPMz8sTE', cat:'lektura', badge:'lec', badgeLabel:'LEKTURA',
    title:'Talambuhay ni Jose Rizal — Kumpletong Kasaysayan',
    desc:'Mula sa kanyang pagsilang hanggang sa kanyang kamatayan sa Luneta — ang buong kwento ng pambansang bayani.',
    source:'YouTube', lang:'Filipino', dur:'1h 2m' },
  { id:'s9JBbG-VNuc', cat:'lektura', badge:'lec', badgeLabel:'LEKTURA',
    title:'Ang Kahulugan ng El Filibusterismo Ngayon',
    desc:'Isang modernong pagtingin sa kaugnayan ng nobela sa kasalukuyang lipunang Pilipino.',
    source:'YouTube', lang:'Filipino', dur:'28m' },
  { id:'dBGpixiX9L4', cat:'lektura', badge:'lec', badgeLabel:'LEKTURA',
    title:'Rizal Course — Lecture Series',
    desc:'Serye ng mga lektura tungkol sa buhay, mga akda, at pamana ni Jose Rizal para sa mga estudyante.',
    source:'YouTube', lang:'Filipino/English', dur:'55m' },

  // ── Film Adaptasyons ──
  { id:'Bks_0sTFMkQ', cat:'pelikula', badge:'film', badgeLabel:'PELIKULA',
    title:'Ilustrado (El Filibusterismo Adaptasyon)',
    desc:'Isang makabagong interpretasyon ng El Filibusterismo sa pamamagitan ng visual storytelling at sining.',
    source:'YouTube', lang:'Filipino', dur:'1h 30m' },
  { id:'7Kp_bAmaVY8', cat:'pelikula', badge:'film', badgeLabel:'PELIKULA',
    title:'Noli at Fili — Animated Short',
    desc:'Animated na maikling pelikula na nagpapakita ng mga pangunahing eksena ng dalawang nobela ni Rizal.',
    source:'YouTube', lang:'Filipino', dur:'12m' },

  // ── Animated / Summary ──
  { id:'_Hk3kxcjmmc', cat:'animated', badge:'ani', badgeLabel:'ANIMATED',
    title:'El Filibusterismo — Kabanata Summary (Animated)',
    desc:'Animated na buod ng bawat kabanata ng El Filibusterismo — perpekto para sa mabilis na pag-aaral.',
    source:'YouTube', lang:'Filipino', dur:'20m' },
  { id:'ueZ1lGajkHE', cat:'animated', badge:'ani', badgeLabel:'ANIMATED',
    title:'Sino si Simoun? — Character Deep Dive',
    desc:'Isang malalim na pagsusuri ng character ni Simoun — ang kanyang motivasyon, trahedya, at kahulugan.',
    source:'YouTube', lang:'Filipino', dur:'15m' },
];

const VID_CATS = [
  { key:'lahat', label:'Lahat' },
  { key:'dokumentaryo', label:'Dokumentaryo' },
  { key:'lektura', label:'Lektura' },
  { key:'pelikula', label:'Pelikula' },
  { key:'animated', label:'Animated' },
];

let videoBuilt = false;
function buildVideo() {
  if (videoBuilt) return; videoBuilt = true;

  // Tabs
  const tabs = document.getElementById('vidTabs');
  VID_CATS.forEach((c,i) => {
    const btn = document.createElement('button');
    btn.classPangalan = 'vid-tab' + (i===0?' active':'');
    btn.textContent = c.label; btn.dataset.cat = c.key;
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('.vid-tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); filterVids(c.key);
    });
    tabs.appendChild(btn);
  });

  // Cards
  const grid = document.getElementById('vidGrid');
  VIDEOS.forEach((v,i) => {
    const card = document.createElement('div');
    card.classPangalan = 'vid-card'; card.dataset.cat = v.cat;
    card.style.animationDelay = i*.055+'s';
    card.innerHTML = `
      <div class="vid-thumb">
        <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg"
             alt="${v.title}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="vid-thumb-placeholder" style="display:none">🎬</div>
        <div class="vid-play-icon">
          <div class="vid-play-circle"><div class="vid-play-triangle"></div></div>
        </div>
        <span class="vid-duration">${v.dur}</span>
        <span class="vid-badge badge-${v.badge}">${v.badgeLabel}</span>
      </div>
      <div class="vid-info">
        <div class="vid-cat">${v.cat.toUpperCase()}</div>
        <div class="vid-title">${v.title}</div>
        <div class="vid-desc">${v.desc}</div>
        <div class="vid-meta">
          <span class="vid-source">${v.source}</span>
          <span class="vid-lang">${v.lang}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => openLightbox(v));
    grid.appendChild(card);
  });

  // Observe
  const obs = new IntersectionObserver(ents => {
    ents.forEach(e => { if(e.isIntersecting){ e.target.classList.add('vis'); obs.unobserve(e.target); } });
  }, {threshold:.08});
  grid.querySelectorAll('.vid-card').forEach(c=>obs.observe(c));
}

function filterVids(cat) {
  document.querySelectorAll('.vid-card').forEach(c => {
    c.style.display = (cat==='lahat'||c.dataset.cat===cat) ? '' : 'none';
  });
}

function openLightbox(v) {
  document.getElementById('vidLbFrame').src =
    'https://www.youtube.com/embed/' + v.id + '?autoplay=1&rel=0&modestbranding=1';
  document.getElementById('vidLbTitle').textContent = v.title;
  document.getElementById('vidLightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('vidLbFrame').src = '';
  document.getElementById('vidLightbox').classList.remove('open');
  document.body.style.overflow = '';
}
// Isara on backdrop click
document.getElementById('vidLightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('vidLightbox')) closeLightbox();
});
