import assert from 'node:assert/strict';
import { test } from 'node:test';
import { onRequest, onRequestPost } from '../functions/api/subscribe.js';

// All upstream requests are intercepted. These fixtures never prove delivery.
const signup = { email: 'reader@example.test', industry: 'healthcare', role: 'operations', page: '/insights/' };
const env = { CONTACT_WEBHOOK_URL: 'https://provider.example.test/enquiries' };
function request(body = JSON.stringify(signup), type = 'application/json', accept = 'application/json', headers = {}) {
  return new Request('https://mellorca.example.test/api/subscribe', { method: 'POST', headers: { 'content-type': type, accept, ...headers }, body });
}
const intercept = (t, implementation = async () => new Response(null, { status: 204 })) => t.mock.method(globalThis, 'fetch', implementation);

test('invalid payloads and emails reject without upstream calls', async t => {
  const upstream = intercept(t);
  for (const body of ['{', 'null', '[]', JSON.stringify({ ...signup, email: 'nope' })]) {
    assert.equal((await onRequestPost({ request: request(body), env })).status, 400);
  }
  assert.equal(upstream.mock.callCount(), 0);
});

test('missing delivery configuration cannot acknowledge a sign-up', async t => {
  const upstream = intercept(t);
  assert.equal((await onRequestPost({ request: request(), env: {} })).status, 503);
  assert.equal(upstream.mock.callCount(), 0);
});

test('honeypot is discarded without forwarding', async t => {
  const upstream = intercept(t);
  const response = await onRequestPost({ request: request(JSON.stringify({ ...signup, company_site: 'x' })), env });
  assert.equal(response.status, 200);
  assert.equal(upstream.mock.callCount(), 0);
});

test('accepted sign-up forwards buyer context and page', async t => {
  const upstream = intercept(t);
  const response = await onRequestPost({ request: request(), env });
  assert.deepEqual(await response.json(), { ok: true });
  const payload = JSON.parse(upstream.mock.calls[0].arguments[1].body);
  assert.equal(payload.type, 'briefing-signup');
  assert.equal(payload.industry, 'healthcare');
  assert.equal(payload.role, 'operations');
  assert.equal(payload.page, '/insights/');
});

test('a separate sign-up webhook wins over the enquiry webhook', async t => {
  const upstream = intercept(t);
  await onRequestPost({ request: request(), env: { ...env, SUBSCRIBE_WEBHOOK_URL: 'https://list.example.test/add' } });
  assert.equal(upstream.mock.calls[0].arguments[0], 'https://list.example.test/add');
});

test('page falls back to a same-origin referer, never a foreign one', async t => {
  const upstream = intercept(t);
  const body = JSON.stringify({ email: signup.email });
  await onRequestPost({ request: request(body, 'application/json', 'application/json', { referer: 'https://mellorca.example.test/discovery/x/' }), env });
  await onRequestPost({ request: request(body, 'application/json', 'application/json', { referer: 'https://elsewhere.example.test/y/' }), env });
  assert.equal(JSON.parse(upstream.mock.calls[0].arguments[1].body).page, '/discovery/x/');
  assert.equal(JSON.parse(upstream.mock.calls[1].arguments[1].body).page, '');
});

test('native form posts redirect to the thank-you page; upstream failure does not', async t => {
  const upstream = intercept(t);
  const ok = await onRequestPost({ request: request(new URLSearchParams(signup), 'application/x-www-form-urlencoded', 'text/html'), env });
  assert.equal(ok.status, 303);
  assert.equal(ok.headers.get('location'), 'https://mellorca.example.test/briefing/thank-you/');
  upstream.mock.mockImplementation(async () => new Response(null, { status: 500 }));
  assert.equal((await onRequestPost({ request: request(), env })).status, 502);
});

test('non-POST fallback rejects', () => {
  assert.equal(onRequest().status, 405);
});
