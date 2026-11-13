import assert from 'node:assert/strict';
import { test } from 'node:test';
import { onRequest, onRequestPost } from '../functions/api/contact.js';

// All upstream requests are intercepted. These fixtures never prove delivery.
const enquiry = { name: 'Test visitor', email: 'visitor@example.test', organisation: 'Test organisation', intent: 'Digital Systems Audit', message: 'Synthetic enquiry' };
const env = { CONTACT_WEBHOOK_URL: 'https://provider.example.test/enquiries' };
function request(body = JSON.stringify(enquiry), type = 'application/json', accept = 'application/json') {
  return new Request('https://mellorca.example.test/api/contact', {
    method: 'POST', headers: { 'content-type': type, accept }, body,
  });
}
function intercept(t, implementation = async () => new Response(null, { status: 204 })) {
  return t.mock.method(globalThis, 'fetch', implementation);
}
async function rejection(response, status) {
  assert.equal(response.status, status);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.match(response.headers.get('content-type'), /application\/json/);
  const body = await response.json();
  assert.notEqual(body.ok, true);
  assert.equal(typeof body.message, 'string');
}

test('malformed JSON, non-object JSON and unsupported bodies reject without upstream calls', async t => {
  const upstream = intercept(t);
  for (const body of ['{', 'null', '[]', 'true', '42', '"text"']) {
    await rejection(await onRequestPost({ request: request(body), env }), 400);
  }
  await rejection(await onRequestPost({ request: request('text', 'text/plain'), env }), 400);
  assert.equal(upstream.mock.callCount(), 0);
});

test('missing required fields and invalid email reject without upstream calls', async t => {
  const upstream = intercept(t);
  for (const field of ['name', 'email', 'organisation', 'intent', 'message']) {
    await rejection(await onRequestPost({ request: request(JSON.stringify({ ...enquiry, [field]: ' ' })), env }), 400);
  }
  await rejection(await onRequestPost({ request: request(JSON.stringify({ ...enquiry, email: 'invalid' })), env }), 400);
  assert.equal(upstream.mock.callCount(), 0);
});

test('missing provider configuration cannot acknowledge receipt', async t => {
  const upstream = intercept(t);
  await rejection(await onRequestPost({ request: request(), env: {} }), 503);
  assert.equal(upstream.mock.callCount(), 0);
});

test('honeypot is discarded without forwarding an enquiry', async t => {
  const upstream = intercept(t);
  const response = await onRequestPost({ request: request(JSON.stringify({ company_site: 'bot.example.test' })), env });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(upstream.mock.callCount(), 0);
});

test('upstream rejection and transport failure cannot acknowledge success', async t => {
  const upstream = intercept(t, async () => new Response(null, { status: 503 }));
  await rejection(await onRequestPost({ request: request(), env }), 502);
  upstream.mock.mockImplementation(async () => { throw new TypeError('Synthetic transport failure'); });
  await rejection(await onRequestPost({ request: request(), env }), 502);
  assert.equal(upstream.mock.callCount(), 2);
});

test('JSON acknowledgement follows upstream acceptance and forwards normalized fields', async t => {
  const upstream = intercept(t);
  const response = await onRequestPost({ request: request(JSON.stringify({ ...enquiry, name: ' Test visitor ', message: 'x'.repeat(4100), extra: 'not forwarded' })), env });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(upstream.mock.callCount(), 1);
  const [url, options] = upstream.mock.calls[0].arguments;
  assert.equal(url, env.CONTACT_WEBHOOK_URL);
  assert.equal(options.method, 'POST');
  const payload = JSON.parse(options.body);
  assert.equal(payload.name, enquiry.name);
  assert.equal(payload.message.length, 4000);
  assert.equal(payload.email, enquiry.email);
  assert.equal(payload.source, 'mellorca.com');
  assert.equal('extra' in payload, false);
  assert.equal('company_site' in payload, false);
  assert.ok(Number.isFinite(Date.parse(payload.receivedAt)));
});

test('buyer context fields are forwarded, trimmed and optional', async t => {
  const upstream = intercept(t);
  const context = { industry: ' logistics-transport ', company_size: '51-200', role: 'operations', referral: 'article', briefing: 'yes' };
  await onRequestPost({ request: request(JSON.stringify({ ...enquiry, ...context })), env });
  const payload = JSON.parse(upstream.mock.calls[0].arguments[1].body);
  assert.equal(payload.industry, 'logistics-transport');
  assert.equal(payload.companySize, '51-200');
  assert.equal(payload.role, 'operations');
  assert.equal(payload.referral, 'article');
  assert.equal(payload.briefing, true);
  await onRequestPost({ request: request(), env });
  const bare = JSON.parse(upstream.mock.calls[1].arguments[1].body);
  assert.equal(bare.industry, '');
  assert.equal(bare.briefing, false);
});

test('native URL-encoded and multipart forms redirect only after upstream acceptance', async t => {
  const upstream = intercept(t);
  const encoded = request(new URLSearchParams(enquiry), 'application/x-www-form-urlencoded', 'text/html');
  const form = new FormData();
  for (const [key, value] of Object.entries(enquiry)) form.set(key, value);
  const multipart = new Request('https://mellorca.example.test/api/contact', { method: 'POST', headers: { accept: 'text/html' }, body: form });
  for (const native of [encoded, multipart]) {
    const response = await onRequestPost({ request: native, env });
    assert.equal(response.status, 303);
    assert.equal(response.headers.get('location'), 'https://mellorca.example.test/contact/thank-you/');
  }
  assert.equal(upstream.mock.callCount(), 2);
  upstream.mock.mockImplementation(async () => new Response(null, { status: 500 }));
  const response = await onRequestPost({ request: request(new URLSearchParams(enquiry), 'application/x-www-form-urlencoded', 'text/html'), env });
  await rejection(response, 502);
  assert.equal(response.headers.has('location'), false);
});

test('non-POST fallback rejects instead of acknowledging an enquiry', async t => {
  const upstream = intercept(t);
  await rejection(onRequest(), 405);
  assert.equal(upstream.mock.callCount(), 0);
});
