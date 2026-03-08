// ═══════════════════════════════════════════════════
// GOOGLE SHEETS CONFIG — paste your Web App URL below
// ═══════════════════════════════════════════════════
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxyzcWIbkZjA22Arsr97DxnkVPYxr3E353Xd30d681ZkgUWjI2oTgjEPou_ZJoglqW7/exec';

// ═══════════════════════════════════════════════════
// PLAYER DATA
// ═══════════════════════════════════════════════════
let gPlayer = null;

function loadPlayer() {
  try { const p = localStorage.getItem('elfili_player'); if (p) gPlayer = JSON.parse(p); } catch(e) {}
}
function savePlayer(p) {
  gPlayer = p;
  localStorage.setItem('elfili_player', JSON.stringify(p));
}

// ── Show / Hide reg screen ──
function showReg() {
  document.getElementById('regScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (gPlayer) {
    document.getElementById('regName').value    = gPlayer.name    || '';
    document.getElementById('regAge').value     = gPlayer.age     || '';
    document.getElementById('regGender').value  = gPlayer.gender  || '';
    document.getElementById('regSection').value = gPlayer.section || '';
    document.getElementById('regSchool').value  = gPlayer.school  || '';
    document.getElementById('regRegion').value  = gPlayer.region  || '';
  }
  setTimeout(() => document.getElementById('regName').focus(), 300);
}
function hideReg() {
  document.getElementById('regScreen').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Submit reg ──
async function submitReg() {
  const name    = document.getElementById('regName').value.trim();
  const age     = parseInt(document.getElementById('regAge').value);
  const gender  = document.getElementById('regGender').value;
  const section = document.getElementById('regSection').value.trim();
  const school  = document.getElementById('regSchool').value.trim();
  const region  = document.getElementById('regRegion').value;

  let ok = true;
  document.getElementById('regNameErr').classList.remove('show');
  document.getElementById('regAgeErr').classList.remove('show');
  if (!name)              { document.getElementById('regNameErr').classList.add('show'); ok = false; }
  if (!age||age<5||age>99){ document.getElementById('regAgeErr').classList.add('show');  ok = false; }
  if (!ok) return;

  savePlayer({ name, age, gender, section, school, region });
  updatePlayerBadge();

  // confetti
  for (let i = 0; i < 18; i++) setTimeout(() => {
    const d = document.createElement('div'); d.className = 'confetti-dot';
    d.style.cssText = `left:${window.innerWidth/2+(Math.random()-.5)*300}px;top:${window.innerHeight/2+(Math.random()-.5)*200}px;background:hsl(${Math.random()*60+30},90%,65%)`;
    document.body.appendChild(d); setTimeout(()=>d.remove(), 900);
  }, i * 40);

  hideReg();
  setTimeout(() => { startFreshGame(); loadGlobalBoard(); }, 200);
}

function updatePlayerBadge() {
  if (!gPlayer) return;
  document.getElementById('playerBadge').style.display = 'flex';
  document.getElementById('playerAvatar').textContent  = gPlayer.name.charAt(0).toUpperCase();
  document.getElementById('playerName').textContent    = gPlayer.name;
  const meta = [gPlayer.age && gPlayer.age+' taong gulang', gPlayer.section, gPlayer.region].filter(Boolean).join(' · ');
  document.getElementById('playerMeta').textContent = meta || gPlayer.school || '';
}

// ── startFreshGame: delegates to core (defined above) ──
function startFreshGame() {
  startFreshGame_core();
}

// ── initGame: check player first, then start ──
function initGame() {
  loadPlayer();
  if (!gPlayer) { showReg(); return; }
  updatePlayerBadge();
  startFreshGame();
  loadGlobalBoard();
}

// ═══════════════════════════════════════════════════
// GOOGLE SHEETS — Push & Fetch
// ═══════════════════════════════════════════════════

// Called at end of game (replaces/extends original saveScore)
function saveScore() {
  if (gScore === 0) return;
  // Local storage
  let scores = [];
  try { scores = JSON.parse(localStorage.getItem('elfili_scores')||'[]'); } catch(e) {}
  scores.push({ score: gScore, date: new Date().toLocaleDateString('fil-PH') });
  scores.sort((a,b) => b.score - a.score);
  scores = scores.slice(0, 5);
  localStorage.setItem('elfili_scores', JSON.stringify(scores));
  // Remote
  if (gPlayer) pushToSheet();
}

async function pushToSheet() {
  if (!gPlayer || !SHEET_URL || SHEET_URL.includes('PASTE_YOUR')) return;

  const params = new URLSearchParams({
    action:  'addScore',
    name:    gPlayer.name,
    age:     gPlayer.age     || '',
    gender:  gPlayer.gender  || '',
    section: gPlayer.section || '',
    school:  gPlayer.school  || '',
    region:  gPlayer.region  || '',
    score:   gScore,
    streak:  gStreak,
    diff:    gDiff,
    date:    new Date().toLocaleString('fil-PH'),
  });

  const url = SHEET_URL + '?' + params.toString();

  // Method 1: fetch with no-cors (fire-and-forget, always works cross-origin)
  try {
    await fetch(url, { method: 'GET', mode: 'no-cors' });
    console.log('Score pushed via fetch (no-cors)');
  } catch(e) {
    // Method 2: image ping fallback (works even when fetch is blocked)
    try {
      const img = new Image();
      img.src = url;
      console.log('Score pushed via image ping');
    } catch(e2) { console.warn('Push failed:', e2); }
  }

  // Reload leaderboard after a short delay to let sheet process
  setTimeout(loadGlobalBoard, 3000);
}

async function loadGlobalBoard() {
  const body = document.getElementById('glbBody');
  const btn  = document.getElementById('glbRefreshBtn');
  if (!body) return;

  if (!SHEET_URL || SHEET_URL.includes('PASTE_YOUR')) {
    body.innerHTML = '<div class="glb-error" style="text-align:center;padding:1.5rem">⚠ I-setup muna ang Google Sheets URL.</div>';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Nilo-load...';
  body.innerHTML = '<div class="glb-loading"><div class="glb-loading-spin"></div>Nilo-load ang leaderboard...</div>';

  // Use JSONP to bypass CORS — Apps Script returns callback(json)
  const cbName = 'elfili_lb_' + Date.now();
  const url = SHEET_URL + '?action=getScores&limit=20&callback=' + cbName + '&t=' + Date.now();

  await new Promise((resolve) => {
    const timeout = setTimeout(() => {
      cleanup(); renderLocalFallback(); resolve();
    }, 8000);

    window[cbName] = (data) => {
      cleanup();
      renderGlobalBoard(Array.isArray(data) ? data : []);
      resolve();
    };

    function cleanup() {
      clearTimeout(timeout);
      delete window[cbName];
      const s = document.getElementById('elfili_jsonp_script');
      if (s) s.remove();
    }

    const script = document.createElement('script');
    script.id  = 'elfili_jsonp_script';
    script.src = url;
    script.onerror = () => { cleanup(); renderLocalFallback(); resolve(); };
    document.head.appendChild(script);
  });

  btn.disabled = false;
  btn.textContent = '↺ I-refresh';
}

function renderGlobalBoard(rows) {
  const body = document.getElementById('glbBody');
  if (!rows.length) {
    body.innerHTML = '<div class="glb-empty">Wala pang naitala. Ikaw ang maging una!</div>';
    return;
  }
  const medals  = ['🥇','🥈','🥉'];
  const topCls  = ['top1','top2','top3'];
  body.innerHTML = rows.map((r, i) => {
    const isMe  = gPlayer && r.name === gPlayer.name;
    const info  = [r.age && r.age+'y', r.section, r.region].filter(Boolean).join(' · ');
    const diff  = { easy:'Madali', medium:'Katamtaman', hard:'Mahirap' }[r.diff] || r.diff || '';
    return `<div class="glb-row ${isMe?'me':''}">
      <div class="glb-rank ${topCls[i]||''}">${medals[i]||i+1}</div>
      <div class="glb-player">
        <div class="glb-player-name">${escHtml(r.name)}${isMe?' <span style="color:var(--gold);font-size:.6rem">(Ikaw)</span>':''}</div>
        <div class="glb-player-info">${escHtml(info||r.school||'')}</div>
      </div>
      <div class="glb-score">${r.score}<small>${escHtml(diff)}</small></div>
    </div>`;
  }).join('');
}

function renderLocalFallback() {
  const body   = document.getElementById('glbBody');
  let scores   = [];
  try { scores = JSON.parse(localStorage.getItem('elfili_scores')||'[]'); } catch(e) {}
  const medals = ['🥇','🥈','🥉'];
  body.innerHTML =
    '<div style="text-align:center;padding:.4rem 1rem .2rem;font-size:.7rem;color:rgba(201,168,76,.4);font-style:italic">⚠ Hindi ma-connect — nagpapakita ng lokal na datos</div>' +
    (scores.length
      ? scores.map((s,i) => `<div class="glb-row">
          <div class="glb-rank ${['top1','top2','top3'][i]||''}">${medals[i]||i+1}</div>
          <div class="glb-player">
            <div class="glb-player-name">${escHtml(gPlayer?.name||'Ikaw')}</div>
            <div class="glb-player-info">${s.date}</div>
          </div>
          <div class="glb-score">${s.score}</div>
        </div>`).join('')
      : '<div class="glb-empty">Wala pang naitala sa lokal.</div>');
}

function escHtml(s) {
  return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Enter = submit · Escape = close (only if already registered) · backdrop click = close
document.getElementById('regScreen').addEventListener('keydown', e => {
  if (e.key === 'Enter') submitReg();
  if (e.key === 'Escape' && gPlayer) hideReg();
});
document.getElementById('regScreen').addEventListener('click', e => {
  if (e.target === document.getElementById('regScreen') && gPlayer) hideReg();
});

window.addEventListener('load',()=>{
  // voices may need a moment to load
  window.speechSynthesis&&window.speechSynthesis.getVoices();
  setTimeout(()=>window.speechSynthesis&&window.speechSynthesis.getVoices(),500);
});
