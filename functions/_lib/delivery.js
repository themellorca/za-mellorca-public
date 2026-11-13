// Delivery for site form submissions (enquiries and Briefing sign-ups).
//
// A submission counts as received only when at least one channel accepted it:
//   1. DB      - Cloudflare D1 binding: every submission is stored (the record of truth).
//   2. MAILER  - service binding to the mailer Worker, which emails the owner a notification.
//   3. webhook - CONTACT_WEBHOOK_URL / SUBSCRIBE_WEBHOOK_URL, kept for compatibility.
// Nothing is acknowledged to the visitor unless one of them succeeded.

const SCHEMA = `CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  kind TEXT NOT NULL,
  email TEXT NOT NULL,
  page TEXT,
  payload TEXT NOT NULL,
  received_at TEXT NOT NULL,
  unsubscribed_at TEXT
)`;

async function store(db, kind, payload) {
  await db.prepare(SCHEMA).run();
  await db
    .prepare('INSERT INTO submissions (kind, email, page, payload, received_at) VALUES (?, ?, ?, ?, ?)')
    .bind(kind, payload.email, payload.page || '', JSON.stringify(payload), payload.receivedAt)
    .run();
}

async function postJson(url, body, auth, fetcher = fetch) {
  const headers = { 'content-type': 'application/json', accept: 'application/json' };
  if (auth) headers.authorization = auth;
  const response = await fetcher(url, { method: 'POST', headers, body: JSON.stringify(body) });
  return response.ok;
}

// Returns { configured, delivered }.
export async function deliver(env, kind, payload, { webhook, webhookAuth, notify = true } = {}) {
  const channels = [];
  if (env.DB) channels.push(() => store(env.DB, kind, payload).then(() => true));
  if (notify && env.MAILER) {
    channels.push(() => postJson('https://mailer/notify', { kind, ...payload }, env.MAILER_AUTH, (url, init) => env.MAILER.fetch(url, init)));
  }
  if (webhook) channels.push(() => postJson(webhook, payload, webhookAuth));
  if (!channels.length) return { configured: false, delivered: false };
  const results = await Promise.all(channels.map(run => run().catch(() => false)));
  return { configured: true, delivered: results.some(Boolean) };
}
