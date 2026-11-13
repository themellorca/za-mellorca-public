import {deliver} from '../_lib/delivery.js';
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
  const payload={name:text(input.name,120),email:text(input.email,160),organisation:text(input.organisation,160),website:text(input.website,300),intent:text(input.intent,120),message:text(input.message,4000),industry:text(input.industry,120),companySize:text(input.company_size,60),role:text(input.role,120),referral:text(input.referral,120),briefing:text(input.briefing,10)==='yes',source:'mellorca.com',receivedAt:new Date().toISOString()};
  if(!payload.name||!validEmail(payload.email)||!payload.organisation||!payload.intent||!payload.message){return respond(400,{message:'Please complete the required fields with a valid work email address.'});}
  const result=await deliver(env,'enquiry',payload,{webhook:env.CONTACT_WEBHOOK_URL,webhookAuth:env.CONTACT_WEBHOOK_AUTH});
  if(!result.configured){return respond(503,{message:'Online enquiry delivery is not configured yet. Mellorca has not received this submission.'});}
  if(!result.delivered){return respond(502,{message:'The enquiry service is temporarily unavailable. Please try again later.'});}
  const accepts=request.headers.get('accept')||'';
  if(!accepts.includes('application/json')) return Response.redirect(new URL('/contact/thank-you/',request.url),303);
  return respond(200,{ok:true});
}

export function onRequest(){return respond(405,{message:'Method not allowed.'});}
