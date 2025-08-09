(function(){
  const f=document.getElementById('searchForm');
  const q=document.getElementById('q');
  const btn=document.getElementById('searchBtn');
  const msg=document.getElementById('msg');
  const year=document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  function sanitize(s){
    return s.replace(/\s+/g,' ').trim();
  }

  f.addEventListener('submit',function(e){
    e.preventDefault();
    const term = sanitize(q.value);
    if(!term){ msg.textContent = 'Please enter a novel title or author.'; return; }
    btn.disabled = true;
    msg.textContent = 'Opening results on urdunovelbank.org …';
    const target = 'https://urdunovelbank.org/?s=' + encodeURIComponent(term) + '&utm_source=github&utm_medium=referral';
    window.location.href = target; // same tab as requested
  });

  // quick-fill chips
  document.querySelectorAll('.chips button').forEach(b=>{
    b.addEventListener('click', ()=>{ q.value = b.getAttribute('data-fill'); q.focus(); });
  });
})();