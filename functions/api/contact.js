const jsonHeaders={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};
const respond=(status,body)=>new Response(JSON.stringify(body),{status,headers:jsonHeaders});
const text=(value,max)=>typeof value==='string'?value.trim().slice(0,max):'';
const validEmail=value=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function readInput(request){
  const type=request.headers.get('content-type')||'';
  if(type.includes('application/json')) return await request.json();
  if(type.includes('application/x-www-form-urlencoded')||type.includes('multipart/form-data')) return Object.fromEntries((await request.formData()).entries());
  throw new Error('unsupported-content-type');
}

export async function onRequestPost({request,env}){
  let input;
  try{input=await readInput(request);}catch{return respond(400,{message:'The enquiry payload could not be read.'});}
  if(!input||typeof input!=='object'||Array.isArray(input)) return respond(400,{message:'The enquiry payload could not be read.'});
  if(text(input.company_site,200)) return respond(200,{ok:true});
  const payload={name:text(input.name,120),email:text(input.email,160),organisation:text(input.organisation,160),website:text(input.website,300),intent:text(input.intent,120),message:text(input.message,4000),source:'mellorca.com',receivedAt:new Date().toISOString()};
  if(!payload.name||!validEmail(payload.email)||!payload.organisation||!payload.intent||!payload.message){return respond(400,{message:'Please complete the required fields with a valid work email address.'});}
  if(!env.CONTACT_WEBHOOK_URL){return respond(503,{message:'Online enquiry delivery is not configured yet. Mellorca has not received this submission.'});}
  const headers={"content-type":"application/json","accept":"application/json"};
  if(env.CONTACT_WEBHOOK_AUTH) headers.authorization=env.CONTACT_WEBHOOK_AUTH;
  let upstream;
  try{upstream=await fetch(env.CONTACT_WEBHOOK_URL,{method:'POST',headers,body:JSON.stringify(payload)});}catch{return respond(502,{message:'The enquiry service is temporarily unavailable. Please try again later.'});}
  if(!upstream.ok){return respond(502,{message:'The enquiry service did not accept the submission. Please try again later.'});}
  const accepts=request.headers.get('accept')||'';
  if(!accepts.includes('application/json')) return Response.redirect(new URL('/contact/thank-you/',request.url),303);
  return respond(200,{ok:true});
}

export function onRequest(){return respond(405,{message:'Method not allowed.'});}
