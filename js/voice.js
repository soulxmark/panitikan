// ═══════════════════════════════════════════════════
// VOICE — WEB SPEECH API (TTS)
// ═══════════════════════════════════════════════════
function speakClue(){
  if(!window.speechSynthesis)return alert('Hindi sinusuportahan ng iyong browser ang Text-to-Speech.');
  const text=document.getElementById('clueDisplay').textContent;
  if(!text)return;
  if(isSpeaking){window.speechSynthesis.cancel();isSpeaking=false;document.getElementById('voiceBtn').classList.remove('speaking');return}
  const utt=new SpeechSynthesisUtterance(text);
  // Try to find Filipino or Spanish voice
  const voices=window.speechSynthesis.getVoices();
  const filVoice=voices.find(v=>v.lang.includes('fil')||v.lang.includes('tl')||v.lang.includes('es'));
  if(filVoice)utt.voice=filVoice;
  utt.lang='fil-PH';utt.rate=0.88;utt.pitch=1;utt.volume=1;
  utt.onstart=()=>{isSpeaking=true;document.getElementById('voiceBtn').classList.add('speaking');document.getElementById('voiceBtn').innerHTML='<span class="voice-icon">🔊</span> TITIGIL'};
  utt.onend=utt.onerror=()=>{isSpeaking=false;document.getElementById('voiceBtn').classList.remove('speaking');document.getElementById('voiceBtn').innerHTML='<span class="voice-icon">🔊</span> BASAHIN'};
  window.speechSynthesis.speak(utt);
}
