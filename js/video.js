// ═══════════════════════════════════════════════════
// VIDEO PAGE
// ═══════════════════════════════════════════════════
const VIDEOS = [
  // ── Animated (El Fili Kabanata 1–39, NoypiTV) ──
  { id: 'a96N5T-nW0k', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 1: Sa Kubyerta',
    desc: 'Buod ng unang kabanata — ang pagsakay sa Bapor Tabo at ang pagkilala kay Simoun.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '1elMkwbVVgQ', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 2: Sa Ilalim ng Kubyerta',
    desc: 'Buod ng ikalawang kabanata — ang mga pasahero sa ilalim ng kubyerta ng Bapor Tabo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '08Ahi2L_Ugg', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 3',
    desc: 'Buod ng ikatlong kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'JZ9BUrAMn3I', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 4',
    desc: 'Buod ng ikaapat na kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '6jGO9B6yIKs', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 5',
    desc: 'Buod ng ikalimang kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'kHy2IUokXsA', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 6',
    desc: 'Buod ng ikaanim na kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'LhJVvITkOxg', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 7',
    desc: 'Buod ng ikapitong kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '8b_eG1E01tc', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 8',
    desc: 'Buod ng ikawalong kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'mBePaSQ70ww', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 9',
    desc: 'Buod ng ikasiyam na kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'h5752ryBbNM', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 10',
    desc: 'Buod ng ikasampung kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'e5PuYNIRlcE', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 11',
    desc: 'Buod ng ika-11 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'zELm27T99kg', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 12',
    desc: 'Buod ng ika-12 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'vjhfiuHPqkI', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 13',
    desc: 'Buod ng ika-13 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'E6ECFSM5yUY', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 14',
    desc: 'Buod ng ika-14 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'UA9qHAKWqcw', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 15',
    desc: 'Buod ng ika-15 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'tYaAIcS9ggs', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 16',
    desc: 'Buod ng ika-16 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'CGOqMMVlwAY', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 17',
    desc: 'Buod ng ika-17 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'j5QtNmewkIQ', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 18: Mga Pandaraya',
    desc: 'Si Mr. Leeds, ang Amerikanong salamangkero, at ang pagbubunyag ng kasalanan ni Padre Salvi.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'cmVFexT8C5o', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 19',
    desc: 'Buod ng ika-19 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '5VKsBJnLHoE', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 20',
    desc: 'Buod ng ika-20 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'lwbegNV31qw', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 21',
    desc: 'Buod ng ika-21 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '-WEoJ2HxwoI', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 22',
    desc: 'Buod ng ika-22 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'iT3q9-AKu9Q', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 23',
    desc: 'Buod ng ika-23 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'pCjFvPh5UqA', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 24',
    desc: 'Buod ng ika-24 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'PpUU1toN3-E', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 25',
    desc: 'Buod ng ika-25 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '9J_MRqse1XQ', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 26',
    desc: 'Buod ng ika-26 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'Z8no4j9kz6E', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 27',
    desc: 'Buod ng ika-27 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'YRsK4TF0w2k', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 28',
    desc: 'Buod ng ika-28 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'IrmMYqfaPOY', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 29',
    desc: 'Buod ng ika-29 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: '-IfRV9i7j-4', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 30',
    desc: 'Buod ng ika-30 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'b6fzmrCzWyU', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 31',
    desc: 'Buod ng ika-31 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'cNSueORmx1U', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 32',
    desc: 'Buod ng ika-32 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'M8HzjsTer-E', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 33',
    desc: 'Buod ng ika-33 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'fuUhWrn-KJg', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 34',
    desc: 'Buod ng ika-34 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'uVDlnjKKJWU', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 35',
    desc: 'Buod ng ika-35 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'CAHoqvCQR3s', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 36',
    desc: 'Buod ng ika-36 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'mDtZhIKDA4M', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 37',
    desc: 'Buod ng ika-37 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'Qv3i0HRUWhM', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 38',
    desc: 'Buod ng ika-38 kabanata ng El Filibusterismo.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },
  { id: 'ZjX6OC-Yg0E', cat: 'animated', badge: 'ani', badgeLabel: 'ANIMATED',
    title: 'El Filibusterismo | Kabanata 39',
    desc: 'Buod ng huling kabanata ng El Filibusterismo — ang katapusan ni Simoun at ang mensahe ni Padre Florentino.',
    source: 'YouTube', lang: 'Filipino', dur: '~8m' },

  // ── Dokumentaryo ──
  { id:'gGe9bm9ESVE', cat:'dokumentaryo', badge:'doc', badgeLabel:'DOC',
    title:'El Filibusterismo: Buod at Pagsusuri',
    desc:'Kompletong buod ng El Filibusterismo na may pagsusuri ng mga pangunahing tema at tauhan.',
    source:'YouTube', lang:'Filipino', dur:'22m' },
  { id:'JVqzDbkOFPo', cat:'dokumentaryo', badge:'doc', badgeLabel:'DOC',
    title:'Rizal sa Dapitan — Dokumentaryo',
    desc:'Ang buhay ni Rizal sa kanyang mga taon ng pagkatapon sa Dapitan, Mindanao — isang panahon ng paglikha at pag-aaral.',
    source:'YouTube', lang:'Filipino', dur:'45m' },

  // ── Lektura ──
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

  // ── Pelikula ──
  { id:'Bks_0sTFMkQ', cat:'pelikula', badge:'film', badgeLabel:'PELIKULA',
    title:'Ilustrado (El Filibusterismo Adaptasyon)',
    desc:'Isang makabagong interpretasyon ng El Filibusterismo sa pamamagitan ng visual storytelling at sining.',
    source:'YouTube', lang:'Filipino', dur:'1h 30m' },
  { id:'7Kp_bAmaVY8', cat:'pelikula', badge:'film', badgeLabel:'PELIKULA',
    title:'Noli at Fili — Animated Short',
    desc:'Animated na maikling pelikula na nagpapakita ng mga pangunahing eksena ng dalawang nobela ni Rizal.',
    source:'YouTube', lang:'Filipino', dur:'12m' },
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
    btn.className = 'vid-tab' + (i===0?' active':'');
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
    card.className = 'vid-card'; card.dataset.cat = v.cat;
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
