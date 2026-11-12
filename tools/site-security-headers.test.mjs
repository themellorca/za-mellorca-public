import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

// Require the all-pages rule: an assets-only declaration cannot protect HTML.
const text = readFileSync(new URL('../website/_headers', import.meta.url), 'utf8');
const globalRules = [];
let current;
for (const line of text.split(/\r?\n/)) {
  if (!line.trim() || line.trimStart().startsWith('#')) continue;
  if (!/^\s/.test(line)) {
    current = line.trim() === '/*' ? new Map() : undefined;
    if (current) globalRules.push(current);
    continue;
  }
  const header = line.match(/^\s+([^:]+):\s*(.*)$/);
  if (current && header) current.set(header[1].toLowerCase(), header[2].trim());
}

test('security headers have one all-pages rule', () => {
  assert.equal(globalRules.length, 1, 'website/_headers must contain one /* rule');
});

test('all pages retain an enforcing Content-Security-Policy', () => {
  const value = globalRules[0]?.get('content-security-policy');
  assert.ok(value, '/* must declare Content-Security-Policy');
  const directives = new Map(value.split(';').map(part => {
    const [name, ...sources] = part.trim().split(/\s+/);
    return [name, sources];
  }));
  assert.deepEqual(directives.get('default-src'), ["'self'"], 'CSP default-src must stay self-only');
  assert.deepEqual(directives.get('object-src'), ["'none'"], 'CSP must block plugin objects');
  assert.deepEqual(directives.get('frame-ancestors'), ["'none'"], 'CSP must block framing');
});

for (const [name, expected] of [
  ['X-Frame-Options', 'DENY'],
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
]) {
  test(`all pages retain ${name}: ${expected}`, () => {
    assert.equal(globalRules[0]?.get(name.toLowerCase()), expected, `/* must retain ${name}: ${expected}`);
  });
}
