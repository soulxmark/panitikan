// ═══════════════════════════════════════════════════
// STORY PAGE BUILD
// ═══════════════════════════════════════════════════
let kwentoBuilt = false;
function buildKwento() {
  if (kwentoBuilt) return; kwentoBuilt = true;
  const list = document.getElementById('chapterList');
  const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV'];
  CHAPTERS.forEach((ch, i) => {
    const item = document.createElement('div');
    item.className = 'chapter-item';
    item.dataset.idx = i;
    const charTags = (ch.chars||[]).map(id => {
      const c = CHARS.find(x=>x.id===id);
      return c ? `<span class="ch-char-tag"><img src="${c.imgSrc||c.img||''}"" style="width:16px;height:16px;object-fit:cover;border-radius:50%;vertical-align:middle" onerror="this.remove()"> ${c.name}</span>` : '';
    }).join('');
    item.innerHTML = `
      <div class="ch-num-col">
        <div class="ch-roman">${ch.roman||ROMAN[i]||i+1}</div>
        <div class="ch-num">KAB. ${ch.num||i+1}</div>
      </div>
      <div class="ch-content">
        <div class="ch-emoji" style="overflow:hidden;border-radius:6px"><img src="${ch.imgSrc||''}" alt="" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.display='none'"></div>
        <div class="ch-info">
          <div class="ch-title">${ch.title}</div>
          <div class="ch-preview">${ch.story.substring(0,80)}...</div>
          <div class="ch-chars">${charTags}</div>
        </div>
        <div class="ch-arrow">›</div>
      </div>`;
    item.addEventListener('click', () => openScene(i));
    list.appendChild(item);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.style.animation = 'card-reveal .5s var(--ease-expo) forwards', idx * 40);
        e.target.style.opacity = '0';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  list.querySelectorAll('.chapter-item').forEach(el => { el.style.opacity='0'; obs.observe(el); });
}
