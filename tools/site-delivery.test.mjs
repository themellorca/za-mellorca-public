import assert from 'node:assert/strict';
import { test } from 'node:test';
import { onRequestPost as contact } from '../functions/api/contact.js';
import { onRequestPost as subscribe } from '../functions/api/subscribe.js';

function fakeDb({ fail = false } = {}) {
  const rows = [];
  return {
    rows,
    prepare(sql) {
      return {
        bind: (...args) => ({ run: async () => { if (fail) throw new Error('db down'); rows.push({ sql, args }); } }),
        run: async () => { if (fail) throw new Error('db down'); },
      };
    },
  };
}

function fakeMailer(status = 200) {
  const calls = [];
  return { calls, fetch: async (url, init) => { calls.push({ url, body: JSON.parse(init.body) }); return new Response(null, { status }); } };
}

const enquiry = () => new Request('https://mellorca.com/api/contact', {
  method: 'POST',
  headers: { 'content-type': 'application/json', accept: 'application/json' },
  body: JSON.stringify({ name: 'Ann', email: 'ann@example.co.za', organisation: 'Acme', intent: 'audit', message: 'Hello' }),
});
const signup = () => new Request('https://mellorca.com/api/subscribe', {
  method: 'POST',
  headers: { 'content-type': 'application/json', accept: 'application/json' },
  body: JSON.stringify({ email: 'ann@example.co.za', industry: 'other', page: '/briefing/' }),
});

test('an enquiry stored in D1 is acknowledged and the owner is notified', async () => {
  const DB = fakeDb(); const MAILER = fakeMailer();
  const response = await contact({ request: enquiry(), env: { DB, MAILER } });
  assert.equal(response.status, 200);
  assert.equal(DB.rows.length, 1);
  assert.equal(DB.rows[0].args[0], 'enquiry');
  assert.equal(MAILER.calls.length, 1);
  assert.equal(MAILER.calls[0].body.kind, 'enquiry');
  assert.equal(MAILER.calls[0].body.email, 'ann@example.co.za');
});

test('an enquiry is acknowledged when only the mailer accepts it', async () => {
  const response = await contact({ request: enquiry(), env: { DB: fakeDb({ fail: true }), MAILER: fakeMailer() } });
  assert.equal(response.status, 200);
});

test('an enquiry is not acknowledged when every configured channel fails', async () => {
  const response = await contact({ request: enquiry(), env: { DB: fakeDb({ fail: true }), MAILER: fakeMailer(500) } });
  assert.equal(response.status, 502);
});

test('a sign-up is stored without emailing the owner unless NOTIFY_SIGNUPS is set', async () => {
  const DB = fakeDb(); const MAILER = fakeMailer();
  assert.equal((await subscribe({ request: signup(), env: { DB, MAILER } })).status, 200);
  assert.equal(DB.rows.length, 1);
  assert.equal(DB.rows[0].args[0], 'briefing-signup');
  assert.equal(MAILER.calls.length, 0);
  await subscribe({ request: signup(), env: { DB, MAILER, NOTIFY_SIGNUPS: '1' } });
  assert.equal(MAILER.calls.length, 1);
});

test('a sign-up with only a failing database is not acknowledged', async () => {
  assert.equal((await subscribe({ request: signup(), env: { DB: fakeDb({ fail: true }) } })).status, 502);
});
