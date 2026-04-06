// ═══════════════════════════════════════════════════
// CLAUDE AI — Dynamic Clue Generation
// ═══════════════════════════════════════════════════
async function getAIClue(){
  if(gAnswered)return;
  const q=gTanongs[gQ];
  if(!q)return;
  const btn=document.getElementById('aiBtn');
  const loading=document.getElementById('aiLoading');
  const btnText=document.getElementById('aiBtnText');
  btn.disabled=true;loading.style.display='inline-block';btnText.textContent='GUMAGAWA...';
  try{
    const resp=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:200,
        system:'Ikaw ay isang Filipino literature expert. Gumawa ng isang pahiwatig (clue) tungkol sa isang tauhan mula sa El Filibusterismo ni Jose Rizal. Ang pahiwatig ay dapat sa wikang Filipino, 1-2 pangungusap lamang, hindi dapat sabihin ang pangalan ng tauhan, at dapat ay angkop sa kaalaman ng mga estudyante. Tumugon ng pahiwatig lamang, walang paliwanag o introduksyon.',
        messages:[{role:'user',content:`Gumawa ng pahiwatig para sa tauhang ito mula El Filibusterismo: ${q.char.name} (${q.char.alias}). Ang kanyang papel sa nobela: ${q.char.shortDesc}. Gumawa ng bagong pahiwatig na hindi direktang nagsasabi ng pangalan.`}]
      })
    });
    const data=await resp.json();
    if(data.content&&data.content[0]){
      const newClue=data.content[0].text.trim();
      gTanongs[gQ].clue=newClue;
      typewriterEffect(newClue);
    }
  }catch(e){
    // Fallback to next preset clue
    const arr=q.char.clues[gDiff];
    const newClue=arr[Math.floor(Math.random()*arr.length)];
    gTanongs[gQ].clue=newClue;
    typewriterEffect(newClue);
  }finally{
    btn.disabled=false;loading.style.display='none';btnText.textContent='AI PAHIWATIG';
  }
}
