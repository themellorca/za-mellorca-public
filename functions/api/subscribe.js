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

function pagePath(input,request){
  const given=text(input.page,300);
  if(given.startsWith('/')) return given;
  try{
    const referer=new URL(request.headers.get('referer')||'');
    if(referer.origin===new URL(request.url).origin) return referer.pathname.slice(0,300);
  }catch{}
  return '';
}

export async function onRequestPost({request,env}){
  let input;
  try{input=await readInput(request);}catch{return respond(400,{message:'The sign-up could not be read.'});}
  if(!input||typeof input!=='object'||Array.isArray(input)) return respond(400,{message:'The sign-up could not be read.'});
  if(text(input.company_site,200)) return respond(200,{ok:true});
  const payload={type:'briefing-signup',email:text(input.email,160),industry:text(input.industry,120),role:text(input.role,120),page:pagePath(input,request),source:'mellorca.com',receivedAt:new Date().toISOString()};
  if(!validEmail(payload.email)) return respond(400,{message:'Please enter a valid email address.'});
  const webhook=env.SUBSCRIBE_WEBHOOK_URL||env.CONTACT_WEBHOOK_URL;
  const webhookAuth=env.SUBSCRIBE_WEBHOOK_URL?env.SUBSCRIBE_WEBHOOK_AUTH:env.CONTACT_WEBHOOK_AUTH;
  // Sign-ups are stored; the owner is emailed per sign-up only when NOTIFY_SIGNUPS is set.
  const result=await deliver(env,'briefing-signup',payload,{webhook,webhookAuth,notify:Boolean(env.NOTIFY_SIGNUPS)});
  if(!result.configured) return respond(503,{message:'Sign-up is not available yet. Your email has not been saved.'});
  if(!result.delivered) return respond(502,{message:'Sign-up is temporarily unavailable. Please try again later.'});
  const accepts=request.headers.get('accept')||'';
  if(!accepts.includes('application/json')) return Response.redirect(new URL('/briefing/thank-you/',request.url),303);
  return respond(200,{ok:true});
}

export function onRequest(){return respond(405,{message:'Method not allowed.'});}
