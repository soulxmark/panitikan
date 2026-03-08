// ═══════════════════════════════════════════════════
// AUDIO ENGINE
// ═══════════════════════════════════════════════════
let audioCtx = null, musicPlaying = false, musicNodes = [];

function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function buildScore() {
  if (!audioCtx) return;
  musicNodes.forEach(n => { try{n.stop()}catch(e){} });
  musicNodes = [];
  const master = audioCtx.createGain();
  master.gain.setValueAtTime(0, audioCtx.currentTime);
  master.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 3);
  master.connect(audioCtx.destination);
  // Reverb
  const rev = audioCtx.createConvolver();
  const rl = audioCtx.sampleRate * 3.5;
  const rb = audioCtx.createBuffer(2, rl, audioCtx.sampleRate);
  for(let c=0;c<2;c++){const d=rb.getChannelData(c);for(let i=0;i<rl;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/rl,2.5)}
  rev.buffer = rb;
  const rg = audioCtx.createGain(); rg.gain.value = 0.32;
  rev.connect(rg); rg.connect(master);
  const lpf = audioCtx.createBiquadFilter(); lpf.type='lowpass'; lpf.frequency.value=1800;
  lpf.connect(master); lpf.connect(rev);
  const hpf = audioCtx.createBiquadFilter(); hpf.type='highpass'; hpf.frequency.value=65;
  hpf.connect(lpf);
  const chords=[[130.81,164.81,196],[110,138.59,164.81],[146.83,185,220],[123.47,155.56,185]];
  const melody=[{f:392,t:0,d:1.2},{f:349.23,t:1.3,d:.8},{f:329.63,t:2.2,d:1},{f:293.66,t:3.4,d:1.4},{f:261.63,t:5,d:1.8},{f:293.66,t:7,d:1},{f:329.63,t:8.2,d:.8},{f:349.23,t:9.2,d:1},{f:392,t:10.4,d:2.2},{f:440,t:13,d:1},{f:415.3,t:14.2,d:.7},{f:392,t:15.1,d:1.5},{f:349.23,t:17,d:2.5},{f:329.63,t:20,d:1},{f:293.66,t:21.2,d:1.3},{f:261.63,t:22.8,d:3.5}];
  function chord(t,ch,dur){ch.forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=i===0?'sawtooth':'triangle';o.frequency.value=f;o.detune.value=(Math.random()-.5)*8;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.05-i*.01,t+1.2);g.gain.setValueAtTime(.05-i*.01,t+dur-1.5);g.gain.linearRampToValueAtTime(0,t+dur);o.connect(g);g.connect(hpf);o.start(t);o.stop(t+dur+.1);musicNodes.push(o)})}
  function bass(t,f,dur){const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=f/2;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.065,t+2);g.gain.setValueAtTime(.065,t+dur-2);g.gain.linearRampToValueAtTime(0,t+dur);o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.1);musicNodes.push(o)}
  function mel(off){melody.forEach(n=>{const t=audioCtx.currentTime+off+n.t,o=audioCtx.createOscillator(),g=audioCtx.createGain(),lfo=audioCtx.createOscillator(),lfog=audioCtx.createGain();lfo.frequency.value=5.5;lfog.gain.value=4;lfo.connect(lfog);lfog.connect(o.frequency);o.type='sine';o.frequency.value=n.f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.08,t+.18);g.gain.setValueAtTime(.07,t+n.d-.15);g.gain.linearRampToValueAtTime(0,t+n.d);o.connect(g);g.connect(hpf);o.start(t);lfo.start(t);o.stop(t+n.d+.05);lfo.stop(t+n.d+.05);musicNodes.push(o,lfo)})}
  const prog=[{c:chords[0],b:130.81},{c:chords[1],b:110},{c:chords[2],b:146.83},{c:chords[3],b:123.47}];
  let t=audioCtx.currentTime+.2;
  for(let loop=0;loop<4;loop++){prog.forEach(p=>{chord(t,p.c,6.5);bass(t,p.b,6.5);t+=6.5})}
  mel(2);mel(28);mel(54);mel(80);
  musicNodes.push(master,hpf,lpf,rev,rg);
}

function toggleMusic() {
  initAudio();
  if (!musicPlaying) {
    if (audioCtx.state==='suspended') audioCtx.resume();
    buildScore();
    musicPlaying = true;
    document.getElementById('navMusicBtn').textContent = '⏸';
    document.querySelectorAll('.nav-eq-bar').forEach(b => b.classList.remove('paused'));
  } else {
    audioCtx.suspend();
    musicPlaying = false;
    document.getElementById('navMusicBtn').textContent = '▶';
    document.querySelectorAll('.nav-eq-bar').forEach(b => b.classList.add('paused'));
  }
}
