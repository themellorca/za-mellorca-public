(function(){
  const current=document.body.dataset.current||'';
  const header=document.querySelector('[data-site-header]');
  const toggle=document.querySelector('[data-nav-toggle]');
  const links=document.querySelector('[data-nav-links]');
  if(header&&toggle&&links){
    const mobile=window.matchMedia('(max-width: 900px)');
    function closeMenu(returnFocus=false){
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
      if(returnFocus) toggle.focus();
    }
    toggle.addEventListener('click',()=>{
      const open=links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    header.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&links.classList.contains('is-open')){
        closeMenu(true);
        event.preventDefault();
      }
    });
    header.addEventListener('focusout',event=>{
      if(!header.contains(event.relatedTarget)) closeMenu();
    });
    document.addEventListener('click',event=>{
      if(!header.contains(event.target)) closeMenu(links.contains(document.activeElement));
    });
    links.addEventListener('click',event=>{
      if(event.target.closest('a')&&mobile.matches) closeMenu(true);
    });
    mobile.addEventListener('change',()=>{
      if(mobile.matches) closeMenu(links.contains(document.activeElement));
      else {
        closeMenu();
        if(document.activeElement===toggle) links.querySelector('a').focus();
      }
    });
    header.classList.add('is-enhanced');
  }

  document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=String(new Date().getFullYear());});

  if(current==='insights'){
    document.querySelectorAll('.detail-meta').forEach(meta=>{
      const byline=meta.querySelector('span');
      if(byline) byline.textContent='Mellorca Insights';
    });
  }

  // Article libraries: keyword search and topic filter over the static card list.
  const hubPath=/^\/(insights|impact|patterns|discovery|moments)\/$/.test(window.location.pathname||'');
  const hubCards=hubPath?[...document.querySelectorAll('main .card-link')]:[];
  if(hubCards.length>12){
    const topicOf=card=>(card.querySelector('.kicker')?.textContent||'').trim();
    const counts=new Map();
    hubCards.forEach(card=>{const t=topicOf(card);if(t) counts.set(t,(counts.get(t)||0)+1);});
    const bar=document.createElement('div');
    bar.className='hub-filter';
    bar.innerHTML='<div class="field"><label for="hub-search">Search this library</label><input id="hub-search" type="search" placeholder="Try invoices, onboarding or reporting" autocomplete="off"></div><div class="field"><label for="hub-topic">Topic</label><select id="hub-topic"><option value="">All topics</option></select></div><p class="hub-count" aria-live="polite"></p>';
    const select=bar.querySelector('#hub-topic');
    [...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).forEach(([topic,n])=>{
      const option=document.createElement('option');
      option.value=topic;option.textContent=topic+' ('+n+')';
      select.appendChild(option);
    });
    const search=bar.querySelector('#hub-search');
    const count=bar.querySelector('.hub-count');
    const apply=()=>{
      const words=search.value.toLowerCase().split(/\s+/).filter(Boolean);
      const topic=select.value;
      let shown=0;
      hubCards.forEach(card=>{
        const text=card.textContent.toLowerCase();
        const match=(!topic||topicOf(card)===topic)&&words.every(w=>text.includes(w));
        card.hidden=!match;
        if(match) shown++;
      });
      count.textContent=shown===hubCards.length?hubCards.length+' articles':'Showing '+shown+' of '+hubCards.length+' articles';
    };
    search.addEventListener('input',apply);
    select.addEventListener('change',apply);
    hubCards[0].parentElement.before(bar);
    // ?q= and ?topic= let emails and other pages link to a filtered view.
    const preset=new URLSearchParams(window.location.search);
    search.value=preset.get('q')||'';
    if(counts.has(preset.get('topic'))) select.value=preset.get('topic');
    apply();
  }

  const params=new URLSearchParams(window.location.search);
  const intent=params.get('intent');
  const intentSelect=document.querySelector('[name="intent"]');
  if(intent&&intentSelect){
    const match=[...intentSelect.options].find(o=>o.value===intent);
    if(match) intentSelect.value=intent;
  }

  // Readiness checklist: live score and a print button.
  const readiness=document.querySelector('[data-readiness]');
  if(readiness){
    const boxes=[...readiness.querySelectorAll('input[type="checkbox"]')];
    const score=readiness.querySelector('[data-readiness-score]');
    const note=readiness.querySelector('[data-readiness-note]');
    function update(){
      const n=boxes.filter(b=>b.checked).length;
      if(score) score.textContent=String(n);
      const d=readiness.dataset;
      if(note) note.textContent=n>=17?(d.noteHigh||'A strong foundation. Automation is likely to pay off quickly.'):n>=11?(d.noteMid||'Some gaps worth fixing before you automate.'):n>0?(d.noteLow||'Your systems are probably costing time every week. A diagnosis will show where to start.'):'Tick each statement that is true for your business today.';
    }
    readiness.addEventListener('change',update);
    readiness.addEventListener('submit',e=>e.preventDefault());
    const print=readiness.querySelector('[data-print]');
    if(print) print.addEventListener('click',()=>window.print());
  }

  document.querySelectorAll('[data-signup-form]').forEach(signup=>{
    const note=signup.querySelector('[data-form-status]');
    const button=signup.querySelector('button[type="submit"]');
    const page=signup.querySelector('[name="page"]');
    if(page) page.value=window.location.pathname||page.value;
    let busy=false;
    signup.addEventListener('submit',async(event)=>{
      event.preventDefault();
      if(busy||!signup.reportValidity()) return;
      busy=true;
      if(button){button.disabled=true;button.textContent='Signing up…';}
      try{
        const response=await fetch('/api/subscribe',{method:'POST',headers:{'content-type':'application/json','accept':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(signup).entries()))});
        const data=await response.json().catch(()=>({}));
        if(!response.ok||data?.ok!==true) throw new Error(data?.message||'Sign-up could not be confirmed. Please try again later.');
        signup.reset();
        if(note){note.textContent='Thank you. You are signed up for The Mellorca Briefing.';note.className='form-status is-visible success';}
      }catch(error){
        if(note){note.textContent=error instanceof TypeError ? 'Sign-up could not be confirmed. Please try again later.' : error.message;note.className='form-status is-visible error';}
      }finally{
        busy=false;
        if(button){button.disabled=false;button.textContent='Get the briefing';}
      }
    });
  });

  const form=document.querySelector('[data-contact-form]');
  if(!form) return;
  const status=form.querySelector('[data-form-status]');
  const submit=form.querySelector('button[type="submit"]');
  let sending=false;
  const unconfirmed='Delivery could not be confirmed. Your enquiry is still in the form. Please check for a response before sending again to avoid a duplicate enquiry.';

  function show(message,type){
    if(!status) return;
    status.textContent=message;
    status.className='form-status is-visible '+type;
  }

  form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    if(sending||!form.reportValidity()) return;
    sending=true;
    form.setAttribute('aria-busy','true');
    if(submit){submit.disabled=true;submit.textContent='Sending…';}
    if(status){status.className='form-status';status.textContent='';}
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),30000);
    try{
      const payload=JSON.stringify(Object.fromEntries(new FormData(form).entries()));
      const response=await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json','accept':'application/json'},body:payload,signal:controller.signal});
      const data=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(data?.message||'The enquiry could not be sent.');
      if(data?.ok!==true) throw new Error(unconfirmed);
      const edited=JSON.stringify(Object.fromEntries(new FormData(form).entries()))!==payload;
      if(!edited) form.reset();
      show(edited ? 'Your submitted enquiry has been sent. Changes made while sending remain in the form and have not been sent.' : 'Your enquiry has been sent. Mellorca will review the context and respond through the contact details you provided.','success');
    }catch(error){
      show(controller.signal.aborted||error instanceof TypeError ? unconfirmed : error.message||'The enquiry could not be sent. Please try again later.','error');
    }finally{
      clearTimeout(timeout);
      sending=false;
      form.removeAttribute('aria-busy');
      if(submit){submit.disabled=false;submit.textContent='Send enquiry';}
    }
  });
})();
