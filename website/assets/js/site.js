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

  const params=new URLSearchParams(window.location.search);
  const intent=params.get('intent');
  const intentSelect=document.querySelector('[name="intent"]');
  if(intent&&intentSelect){
    const match=[...intentSelect.options].find(o=>o.value===intent);
    if(match) intentSelect.value=intent;
  }

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
