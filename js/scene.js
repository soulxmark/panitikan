// ═══════════════════════════════════════════════════
// SCENE VIEWER ENGINE
// ═══════════════════════════════════════════════════
let sceneIdx = 0, sceneAnimFrame = null, sceneAutoTimer = null;
let sceneIsAuto = false, sceneIsSpeaking = false;

// Canvas scene state
let cvs, ctx2d, stageW, stageH;
// Parallax layers
let bgParticles = [], sceneEmbers = [], sceneCharLayers = [];
// Animated values
let bgOffset = {x:0, y:0}, mouseInfluence = {x:0, y:0};
let targetBgOffset = {x:0, y:0};

function openScene(idx) {
  sceneIdx = idx;
  document.getElementById('sceneViewer').classList.add('open');
  document.body.style.overflow = 'hidden';
  buildSceneUI();
  initSceneCanvas();
  renderScene(idx);
  buildProgDots();
  document.querySelectorAll('.chapter-item').forEach((el,i) => el.classList.toggle('active-ch', i===idx));
}

function closeScene() {
  cancelAnimationFrame(sceneAnimFrame);
  clearTimeout(sceneAutoTimer);
  if (sceneIsSpeaking) { window.speechSynthesis?.cancel(); sceneIsSpeaking = false; }
  document.getElementById('sceneViewer').classList.remove('open');
  document.body.style.overflow = '';
  sceneIsAuto = false;
  document.getElementById('sceneAutoBtn').classList.remove('active');
  document.getElementById('sceneAutoBtn').textContent = '▶ AUTO';
}

function initSceneCanvas() {
  cvs = document.getElementById('sceneCanvas');
  ctx2d = cvs.getContext('2d');
  resizeScene();
  window.addEventListener('resize', resizeScene);
  // Mouse parallax
  document.getElementById('sceneStage').addEventListener('mousemove', e => {
    const r = cvs.getBoundingClientRect();
    mouseInfluence.x = (e.clientX - r.width/2) / r.width;
    mouseInfluence.y = (e.clientY - r.height/2) / r.height;
  });
  document.getElementById('sceneStage').addEventListener('touchmove', e => {
    const t = e.touches[0];
    const r = cvs.getBoundingClientRect();
    mouseInfluence.x = (t.clientX - r.width/2) / r.width;
    mouseInfluence.y = (t.clientY - r.height/2) / r.height;
  }, {passive:true});
}

function resizeScene() {
  if (!cvs) return;
  stageW = cvs.width  = cvs.parentElement.offsetWidth;
  stageH = cvs.height = cvs.parentElement.offsetHeight;
}

function renderScene(idx) {
  cancelAnimationFrame(sceneAnimFrame);
  const ch = CHAPTERS[idx];
  if (!ch) return;

  // Build canvas particles
  bgParticles = [];
  for (let i = 0; i < 60; i++) {
    bgParticles.push({
      x: Math.random(), y: Math.random() + .5,
      vx: (Math.random()-.5)*.0003, vy: -(Math.random()*.001+.0003),
      r: Math.random()*2.5+.8,
      alpha: Math.random()*.5+.2,
      hue: 38+Math.random()*16,
      life:0, maxLife: 200+Math.random()*400
    });
  }

  // Scene embers
  sceneEmbers = [];
  for (let i = 0; i < 12; i++) {
    sceneEmbers.push({
      x: Math.random(), y: .6+Math.random()*.4,
      vy: -(Math.random()*.0015+.0005),
      vx: (Math.random()-.5)*.0008,
      r: Math.random()*4+2,
      alpha:0, life:0, maxLife: 120+Math.random()*200,
      delay: Math.random()*100
    });
  }

  // Character emoji layers (parallax floating)
  sceneCharLayers = [];
  const charsForScene = (ch.chars||[]).slice(0,3).map(id => CHARS.find(c=>c.id===id)).filter(Boolean);
  charsForScene.forEach((c, i) => {
    sceneCharLayers.push({
      emoji: c.imgSrc||c.img||'',
      image: (() => { const img = new Image(); img.src = c.imgSrc||c.img||''; return img; })(),
      x: 0.15 + i * 0.32 + (Math.random()-.5)*.1,
      y: 0.25 + (Math.random()-.5)*.15,
      floatOffset: Math.random()*Math.PI*2,
      floatSpeed: 0.6+Math.random()*.4,
      floatAmp: 12+Math.random()*10,
      swayAmp: 6+Math.random()*6,
      swaySpeed: 0.4+Math.random()*.3,
      swayOffset: Math.random()*Math.PI*2,
      scale: 1,
      alpha: 0,
      targetAlpha: 1,
      size: Math.min(stageW*.12, 80),
    });
  });

  bgOffset = {x:0, y:0}; mouseInfluence = {x:0,y:0};
  let t = 0;

  function draw() {
    if (!cvs || !ctx2d) return;
    t++;
    const W = stageW, H = stageH;
    ctx2d.clearRect(0,0,W,H);

    // Kasaysayan gradient (Ken Burns pan)
    const panX = Math.sin(t*0.004)*30 + mouseInfluence.x*25;
    const panY = Math.cos(t*0.003)*15 + mouseInfluence.y*18;
    const grd = ctx2d.createRadialGradient(W/2+panX, H*.35+panY, 0, W/2+panX, H/2, W*.85);
    const [c1,c2,c3] = parseBg(ch.bg);
    grd.addColorStop(0, c1);
    grd.addColorStop(0.5, c2);
    grd.addColorStop(1, c3);
    ctx2d.fillStyle = grd;
    ctx2d.fillRect(0,0,W,H);

    // Subtle vignette
    const vig = ctx2d.createRadialGradient(W/2,H/2,H*.25,W/2,H/2,H*.8);
    vig.addColorStop(0,'rgba(0,0,0,0)');
    vig.addColorStop(1,'rgba(0,0,0,.6)');
    ctx2d.fillStyle = vig;
    ctx2d.fillRect(0,0,W,H);

    // Bokeh / floating light orbs
    bgParticles.forEach(p => {
      p.life++;
      if (p.life > p.maxLife) {
        p.x=Math.random(); p.y=1+Math.random()*.1;
        p.life=0; p.maxLife=200+Math.random()*400;
        p.alpha=0;
      }
      const lifeT = p.life/p.maxLife;
      const a = lifeT < .15 ? (lifeT/.15)*p.alpha : lifeT > .8 ? ((1-lifeT)/.2)*p.alpha : p.alpha;
      p.x += p.vx + Math.sin(t*.012+p.x*10)*.00015;
      p.y += p.vy;
      const px = p.x*W + panX*.3, py = p.y*H + panY*.2;
      const grad = ctx2d.createRadialGradient(px,py,0,px,py,p.r*3);
      grad.addColorStop(0,`hsla(${p.hue},75%,65%,${a})`);
      grad.addColorStop(1,`hsla(${p.hue},75%,65%,0)`);
      ctx2d.fillStyle = grad;
      ctx2d.beginPath(); ctx2d.arc(px,py,p.r*3,0,Math.PI*2); ctx2d.fill();
    });

    // Ember particles from bottom
    sceneEmbers.forEach(e => {
      if (t < e.delay) return;
      e.life++;
      if (e.life > e.maxLife) {
        e.x=Math.random(); e.y=.75+Math.random()*.25; e.life=0;
        e.maxLife=120+Math.random()*200; e.delay=t+Math.random()*50;
      }
      const lt = e.life/e.maxLife;
      const a = lt<.1?(lt/.1)*.9:lt>.75?((1-lt)/.25)*.9:.9;
      e.x+=e.vx; e.y+=e.vy;
      const ex=e.x*W+panX*.5, ey=e.y*H+panY*.4;
      const hue=25+Math.random()*20;
      ctx2d.save();
      ctx2d.globalAlpha=a*0.85;
      ctx2d.fillStyle=`hsl(${hue},90%,65%)`;
      ctx2d.shadowBlur=e.r*3; ctx2d.shadowColor=`hsl(${hue},90%,65%)`;
      ctx2d.beginPath(); ctx2d.arc(ex,ey,e.r,0,Math.PI*2); ctx2d.fill();
      ctx2d.restore();
    });

    // Character emoji layers with parallax float
    sceneCharLayers.forEach((layer, i) => {
      layer.alpha += (layer.targetAlpha - layer.alpha) * .04;
      const floatY = Math.sin(t*.02*layer.floatSpeed + layer.floatOffset) * layer.floatAmp;
      const swayX = Math.sin(t*.015*layer.swaySpeed + layer.swayOffset) * layer.swayAmp;
      const px = layer.x*W + swayX + mouseInfluence.x*(-20*(i+1));
      const py = layer.y*H + floatY + mouseInfluence.y*(-10*(i+1));
      const sz = Math.min(W*.13, 90);
      ctx2d.save();
      ctx2d.globalAlpha = layer.alpha;
      // Draw character image on canvas
      if (layer.image && layer.image.complete && layer.image.naturalWidth > 0) {
        const imgH = Math.min(W * .38, 260);
        const imgW = imgH * (layer.image.naturalWidth / layer.image.naturalHeight);
        // Glow behind character
        ctx2d.shadowBlur = 50; ctx2d.shadowColor = ch.color || '#c9a84c';
        ctx2d.drawImage(layer.image, px - imgW/2, py - imgH/2, imgW, imgH);
        ctx2d.shadowBlur = 0;
      } else {
        // Fallback: glowing circle placeholder
        ctx2d.beginPath();
        ctx2d.arc(px, py, sz/2, 0, Math.PI*2);
        ctx2d.fillStyle = 'rgba(201,168,76,0.15)';
        ctx2d.shadowBlur = 30; ctx2d.shadowColor = ch.color || '#c9a84c';
        ctx2d.fill();
        ctx2d.shadowBlur = 0;
      }
      ctx2d.restore();
    });

    // Horizontal light rays
    if (t % 180 < 90) {
      ctx2d.save();
      ctx2d.globalAlpha = .025 * (1 - Math.abs(t%180-45)/45);
      ctx2d.fillStyle = ch.color || '#c9a84c';
      for (let r = 0; r < 5; r++) {
        const rx = W*(.1+r*.2)+panX, ry = -50;
        ctx2d.beginPath();
        ctx2d.moveTo(rx,ry); ctx2d.lineTo(rx-80,H+50); ctx2d.lineTo(rx+80,H+50); ctx2d.closePath();
        ctx2d.fill();
      }
      ctx2d.restore();
    }

    sceneAnimFrame = requestAnimationFrame(draw);
  }
  draw();
}

// Helper: parse bg gradient to 3 colors
function parseBg(bg) {
  // Extract colors from linear-gradient string
  const matches = bg.match(/#[0-9a-f]{6}/gi) || [];
  if (matches.length >= 2) return [matches[0]+'cc', matches[0]+'88', matches[1]+'ff'];
  return ['#1a0a02', '#0a0501', '#020100'];
}

function buildSceneUI() {
  const ch = CHAPTERS[sceneIdx];
  if (!ch) return;
  // Flash transition
  const flash = document.getElementById('sceneFlash');
  flash.classList.add('flash-out');
  setTimeout(()=>flash.classList.remove('flash-out'),350);
  // Text
  document.getElementById('sceneChTag').textContent = `Kabanata ${ch.num||sceneIdx+1} — ${ch.roman||''}`;
  document.getElementById('sceneTitle').textContent = ch.title;
  document.getElementById('sceneBody').textContent = ch.scene;
  // Char pills
  const row = document.getElementById('sceneCharsRow'); row.innerHTML='';
  (ch.chars||[]).forEach(id => {
    const c = CHARS.find(x=>x.id===id);
    if (!c) return;
    const pill = document.createElement('div'); pill.className='scene-char-pill';
    pill.innerHTML=`<img class="scene-char-pill-emoji" src="${c.imgSrc||c.img||''}"" style="width:28px;height:28px;object-fit:cover;object-position:top;border-radius:50%" onerror="this.style.display='none'"><span class="scene-char-pill-name">${c.name}</span>`;
    pill.addEventListener('click', ()=>{ closeScene(); openModal(c); });
    row.appendChild(pill);
  });
  // Nav buttons
  document.getElementById('scenePrevBtn').disabled = sceneIdx === 0;
  document.getElementById('sceneSusunodBtn').disabled = sceneIdx === CHAPTERS.length-1;
  // Animate text in
  ['sceneChTag','sceneTitle','sceneBody'].forEach((id,i) => {
    const el=document.getElementById(id);
    el.style.animation='none'; void el.offsetWidth;
    el.style.animation=`scene-text-in .6s ${i*.12}s var(--ease-expo) both`;
  });
  // Update active dot
  document.querySelectorAll('.scene-prog-dot').forEach((d,i)=>d.classList.toggle('active',i===sceneIdx));
  document.querySelectorAll('.chapter-item').forEach((el,i)=>el.classList.toggle('active-ch',i===sceneIdx));
}

function buildProgDots() {
  const wrap = document.getElementById('sceneProgDots'); wrap.innerHTML='';
  CHAPTERS.forEach((_,i) => {
    const d=document.createElement('div'); d.className='scene-prog-dot'+(i===sceneIdx?' active':'');
    d.addEventListener('click',()=>sceneNav(i-sceneIdx));
    wrap.appendChild(d);
  });
}

function sceneNav(delta) {
  const next = sceneIdx + delta;
  if (next<0||next>=CHAPTERS.length) return;
  sceneIdx = next;
  buildSceneUI();
  renderScene(sceneIdx);
}

function toggleAutoPlay() {
  sceneIsAuto = !sceneIsAuto;
  const btn = document.getElementById('sceneAutoBtn');
  if (sceneIsAuto) {
    btn.classList.add('active'); btn.textContent='⏸ AUTO';
    autoAdvance();
  } else {
    btn.classList.remove('active'); btn.textContent='▶ AUTO';
    clearTimeout(sceneAutoTimer);
  }
}

function autoAdvance() {
  if (!sceneIsAuto) return;
  sceneAutoTimer = setTimeout(()=>{
    if (sceneIdx < CHAPTERS.length-1) { sceneIdx++; buildSceneUI(); renderScene(sceneIdx); autoAdvance(); }
    else { sceneIsAuto=false; document.getElementById('sceneAutoBtn').classList.remove('active'); document.getElementById('sceneAutoBtn').textContent='▶ AUTO'; }
  }, 7000);
}

function sceneSpeak() {
  if (!window.speechSynthesis) return;
  const text = CHAPTERS[sceneIdx]?.scene || '';
  if (!text) return;
  if (sceneIsSpeaking) { window.speechSynthesis.cancel(); sceneIsSpeaking=false; document.getElementById('sceneVoiceBtn').classList.remove('active'); document.getElementById('sceneVoiceBtn').textContent='🔊 BOSES'; return; }
  const utt = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find(v=>v.lang.includes('fil')||v.lang.includes('tl')||v.lang.includes('es'));
  if (v) utt.voice=v;
  utt.lang='fil-PH'; utt.rate=.88; utt.pitch=1;
  utt.onstart=()=>{ sceneIsSpeaking=true; document.getElementById('sceneVoiceBtn').classList.add('active'); document.getElementById('sceneVoiceBtn').textContent='⏹ TITIGIL'; };
  utt.onend=utt.onerror=()=>{ sceneIsSpeaking=false; document.getElementById('sceneVoiceBtn').classList.remove('active'); document.getElementById('sceneVoiceBtn').textContent='🔊 BOSES'; };
  window.speechSynthesis.speak(utt);
}
