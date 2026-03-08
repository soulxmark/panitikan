// ═══════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════
const overlay=document.getElementById('modalOverlay');
function openModal(c){
  document.getElementById('mEmoji').textContent=c.emoji;
  document.getElementById('mName').textContent=c.name;
  document.getElementById('mAlias').textContent=c.alias;
  document.getElementById('mRole').textContent=c.role;
  document.getElementById('mDesc').textContent=c.desc;
  document.getElementById('mQuote').textContent=c.quote;
  document.getElementById('mAttrs').innerHTML=c.attrs.map(a=>`<div class="modal-attr"><span class="modal-attr-label">${a.label}</span><span class="modal-attr-val">${a.value}</span></div>`).join('');
  overlay.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){overlay.classList.remove('open');document.body.style.overflow=''}
document.getElementById('modalClose').addEventListener('click',closeModal);
overlay.addEventListener('click',e=>{if(e.target===overlay)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
