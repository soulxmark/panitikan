// ═══════════════════════════════════════════════════
// GAME ENGINE
// ═══════════════════════════════════════════════════
let gScore=0,gStreak=0,gHigh=0,gQ=0,gTotal=10,gDiff='easy',gAnswered=false,gTimer=null,gTimeLeft=30,gQuestions=[];
let isSpeaking=false;

function setDiff(d,btn){
  gDiff=d;
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  gTimeLeft=d==='easy'?40:d==='medium'?30:20;
}

/* initGame defined below in the Sheets/Player section */
function startFreshGame_core() {
  gScore=0;gStreak=0;gQ=0;gAnswered=false;
  // Restore gameCard structure (endGame replaces it with score screen)
  const gc = document.getElementById('gameCard');
  if (gc) gc.innerHTML = `<div class="clue-number" id="clueNumber">PAHIWATIG #1</div>
      <div class="clue-text" id="clueText"><span id="clueDisplay"></span><span class="clue-cursor" id="clueCursor"></span></div>
      <div class="voice-row">
        <button class="voice-btn" id="voiceBtn" onclick="speakClue()"><span class="voice-icon">🔊</span> BASAHIN</button>
        <button class="ai-btn"    id="aiBtn"    onclick="getAIClue()"><span>✦</span> <span id="aiBtnText">AI PAHIWATIG</span> <span class="ai-loading" id="aiLoading"></span></button>
      </div>
      <div class="countdown-wrap" id="countdownWrap">
        <svg class="countdown-svg" width="46" height="46" viewBox="0 0 46 46">
          <circle class="countdown-bg"  cx="23" cy="23" r="20"/>
          <circle class="countdown-arc" id="countdownArc" cx="23" cy="23" r="20"/>
        </svg>
        <div class="countdown-num" id="countdownNum">30</div>
      </div>`;
  // Reset UI controls
  const nb = document.getElementById('nextBtn');
  if (nb) nb.style.display = 'none';
  const rf = document.getElementById('resultFb');
  if (rf) rf.classList.remove('show');
  const cg = document.getElementById('choicesGrid');
  if (cg) cg.innerHTML = '';
  loadHighScores();
  buildQuestions();
  showQuestion();
}

function buildQuestions() {
  const shuffled=[...CHARS].sort(()=>Math.random()-.5);
  gQuestions=shuffled.slice(0,Math.min(gTotal,CHARS.length)).map(c=>{
    const clueArr=c.clues[gDiff];
    const clue=clueArr[Math.floor(Math.random()*clueArr.length)];
    // Wrong choices
    const wrong=CHARS.filter(x=>x.id!==c.id).sort(()=>Math.random()-.5).slice(0,3);
    const choices=[c,...wrong].sort(()=>Math.random()-.5);
    return {char:c,clue,choices};
  });
  gTotal=gQuestions.length;
}

function showQuestion() {
  if(gQ>=gTotal){endGame();return}
  const q=gQuestions[gQ];
  gAnswered=false;
  document.getElementById('qNumVal').textContent=`${gQ+1}/${gTotal}`;
  document.getElementById('clueNumber').textContent=`PAHIWATIG #${gQ+1}`;
  document.getElementById('resultFb').classList.remove('show','correct-fb','wrong-fb');
  document.getElementById('nextBtn').style.display='none';
  // Typewriter effect
  typewriterEffect(q.clue);
  // Choices
  const cg=document.getElementById('choicesGrid');cg.innerHTML='';
  q.choices.forEach(c=>{
    const btn=document.createElement('button');btn.className='choice-btn';
    btn.innerHTML=`<span class="choice-emoji">${c.emoji}</span>${c.name}`;
    btn.addEventListener('click',()=>answer(c,q.char,btn));
    cg.appendChild(btn);
  });
  // Start timer
  startTimer();
}

function typewriterEffect(text) {
  const display=document.getElementById('clueDisplay');
  const cursor=document.getElementById('clueCursor');
  display.textContent='';cursor.style.display='inline-block';
  let i=0;
  const iv=setInterval(()=>{
    display.textContent+=text[i]||'';
    i++;
    if(i>=text.length){clearInterval(iv);setTimeout(()=>cursor.style.display='none',800)}
  },28);
}

function startTimer() {
  clearInterval(gTimer);
  const maxTime=gDiff==='easy'?40:gDiff==='medium'?30:20;
  gTimeLeft=maxTime;
  const arc=document.getElementById('countdownArc');
  const num=document.getElementById('countdownNum');
  const circ=2*Math.PI*20;
  arc.style.strokeDasharray=circ;arc.classList.remove('urgent');
  gTimer=setInterval(()=>{
    gTimeLeft--;
    num.textContent=gTimeLeft;
    arc.style.strokeDashoffset=circ*(1-gTimeLeft/maxTime);
    if(gTimeLeft<=8)arc.classList.add('urgent');
    if(gTimeLeft<=0){clearInterval(gTimer);timeUp()}
  },1000);
}

function timeUp(){
  if(gAnswered)return;
  gAnswered=true;gStreak=0;
  showFeedback(false,'⏰ Naubos ang oras!');
  highlightAnswer();
  updateDisplay();
  document.getElementById('nextBtn').style.display='';
}

function answer(chosen,correct,btn){
  if(gAnswered)return;
  gAnswered=true;clearInterval(gTimer);
  const isRight=chosen.id===correct.id;
  if(isRight){
    gStreak++;
    const pts=gDiff==='easy'?10:gDiff==='medium'?20:35;
    const bonus=Math.floor(gTimeLeft/5)*2;
    gScore+=pts+bonus;
    btn.classList.add('correct');
    showFeedback(true,`✦ Tama! +${pts+bonus} puntos (${bonus} bonus para sa bilis)`);
    sparks(btn.getBoundingClientRect().left+btn.offsetWidth/2,btn.getBoundingClientRect().top,14);
  } else {
    gStreak=0;
    btn.classList.add('wrong');
    showFeedback(false,`✕ Mali. Ang tamang sagot ay ${correct.emoji} ${correct.name}`);
    highlightAnswer(correct);
  }
  document.getElementById('nextBtn').style.display='';
  updateDisplay();
  if(gScore>gHigh){gHigh=gScore;document.getElementById('highVal').textContent=gHigh}
}

function highlightAnswer(correct=null){
  const cg=document.getElementById('choicesGrid');
  if(correct){
    cg.querySelectorAll('.choice-btn').forEach(btn=>{
      if(btn.textContent.includes(correct.name))btn.classList.add('correct');
      btn.disabled=true;
    });
  } else {
    cg.querySelectorAll('.choice-btn').forEach(btn=>btn.disabled=true);
  }
}

function showFeedback(ok,msg){
  const fb=document.getElementById('resultFb');
  fb.textContent=msg;
  fb.className='result-feedback show '+(ok?'correct-fb':'wrong-fb');
}

function updateDisplay(){
  const sv=document.getElementById('scoreVal');sv.textContent=gScore;sv.classList.remove('pop');void sv.offsetWidth;sv.classList.add('pop');
  document.getElementById('streakVal').textContent=gStreak+(gStreak>=3?'🔥':'');
}

function nextQuestion(){gQ++;showQuestion()}

function endGame(){
  clearInterval(gTimer);
  const gc=document.getElementById('gameCard');
  gc.innerHTML=`<div style="text-align:center;padding:1rem">
    <div style="font-family:'Cinzel Decorative',serif;font-size:clamp(1.2rem,4vw,2rem);color:var(--gold-light);margin-bottom:1rem">Tapos na ang Laro!</div>
    <div style="font-size:3rem;margin-bottom:1rem">🎉</div>
    <div style="font-family:'Cinzel',serif;font-size:.8rem;letter-spacing:.3em;color:var(--gold);margin-bottom:.5rem">IYONG PUNTOS</div>
    <div style="font-family:'Cinzel Decorative',serif;font-size:3rem;color:var(--gold-light);margin-bottom:1.5rem">${gScore}</div>
    <div style="font-size:.95rem;color:rgba(245,234,208,.7);font-style:italic">${gScore>=150?'"Ikaw ay tunay na maalam tungkol sa El Filibusterismo!"':gScore>=80?'"Magaling! Matuto pa tungkol sa mga tauhan."':'"Subukan ulit! Marami pa kayong maaaring matutunan."'}</div>
  </div>`;
  document.getElementById('choicesGrid').innerHTML='';
  document.getElementById('resultFb').classList.remove('show');
  document.getElementById('nextBtn').style.display='none';
  saveScore();
  loadHighScores();
}

/* resetGame and saveScore defined in Sheets/Player section below */
function resetGame(){initGame()}
function loadHighScores(){
  let scores=[];
  try{scores=JSON.parse(localStorage.getItem('elfili_scores')||'[]')}catch(e){}
  const list=document.getElementById('hsList');list.innerHTML='';
  if(!scores.length){list.innerHTML='<li class="hs-item"><span class="hs-name" style="opacity:.5;font-style:italic">Wala pang naitala</span></li>';return}
  const medals=['🥇','🥈','🥉','4️⃣','5️⃣'];
  scores.forEach((s,i)=>{
    const li=document.createElement('li');li.className='hs-item';
    li.innerHTML=`<span class="hs-rank">${medals[i]||i+1}</span><span class="hs-name">${s.date}</span><span class="hs-score">${s.score}</span>`;
    list.appendChild(li);
  });
  if(scores.length)gHigh=scores[0].score;
  document.getElementById('highVal').textContent=gHigh;
}
