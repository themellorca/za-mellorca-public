import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const script = readFileSync('website/assets/js/site.js', 'utf8');
function fixture(response = { ok: true, json: async () => ({ ok: true }) }, { hasSubmit = true } = {}) {
  const listeners = new Map();
  const document = { body: { dataset: {} }, activeElement: null };
  function element(name) {
    const classes = new Set();
    return {
      name, attrs: {}, disabled: false, textContent: '',
      classList: { add: x => classes.add(x), remove: x => classes.delete(x), contains: x => classes.has(x), toggle(x) { if (classes.has(x)) { classes.delete(x); return false; } classes.add(x); return true; } },
      setAttribute(key, value) { this.attrs[key] = value; },
      removeAttribute(key) { delete this.attrs[key]; },
      focus() { document.activeElement = this; },
      addEventListener(event, handler) { listeners.set(name + ':' + event, handler); },
    };
  }
  const header = element('header'), toggle = element('toggle'), links = element('links'), anchor = element('anchor');
  const form = element('form'), status = element('status'), submit = element('submit');
  let resets = 0, requests = 0;
  const fields = { message: 'Preserve this enquiry' };
  const timers = new Map();
  let requestOptions;
  const mobile = { matches: true, addEventListener(event, handler) { listeners.set('mobile:' + event, handler); } };
  header.contains = target => [header, toggle, links, anchor].includes(target);
  links.contains = target => [links, anchor].includes(target);
  links.querySelector = () => anchor;
  form.reportValidity = () => true;
  form.reset = () => { resets++; };
  form.querySelector = selector => selector === '[data-form-status]' ? status : hasSubmit ? submit : null;
  document.querySelector = selector => ({ '[data-site-header]': header, '[data-nav-toggle]': toggle, '[data-nav-links]': links, '[data-contact-form]': form })[selector] || null;
  document.querySelectorAll = () => [];
  document.addEventListener = (event, handler) => listeners.set('document:' + event, handler);
  const context = {
    document, window: { location: { search: '' }, matchMedia: () => mobile }, URLSearchParams,
    FormData: class { entries() { return Object.entries(fields); } },
    AbortController,
    setTimeout(callback, delay) { timers.set(1, { callback, delay }); return 1; },
    clearTimeout(id) { timers.delete(id); },
    fetch: async (url, options) => { requests++; requestOptions = options; if (typeof response === 'function') return response(options); return response; }, TypeError,
  };
  runInNewContext(script, context);
  return { header, toggle, links, anchor, document, form, status, submit, mobile, fields, timers,
    requestOptions: () => requestOptions,
    fire: (name, event = {}) => listeners.get(name)?.(event), resets: () => resets, requests: () => requests };
}

test('mobile Escape closes the menu and returns focus to its control', () => {
  const f = fixture(); f.fire('toggle:click'); f.anchor.focus();
  assert.equal(f.toggle.attrs['aria-expanded'], 'true');
  let prevented = false;
  f.fire('header:keydown', { key: 'Escape', preventDefault() { prevented = true; } });
  assert.equal(f.toggle.attrs['aria-expanded'], 'false');
  assert.equal(f.links.classList.contains('is-open'), false);
  assert.equal(f.document.activeElement, f.toggle); assert.equal(prevented, true);
});

test('menu stays open during internal focus and closes when focus leaves', () => {
  const f = fixture(); f.fire('toggle:click');
  f.fire('header:focusout', { relatedTarget: f.anchor });
  assert.equal(f.toggle.attrs['aria-expanded'], 'true');
  f.fire('header:focusout', { relatedTarget: {} });
  assert.equal(f.toggle.attrs['aria-expanded'], 'false');
});

test('viewport transitions never strand focus in a hidden control', () => {
  const f = fixture(); f.toggle.focus(); f.mobile.matches = false; f.fire('mobile:change');
  assert.equal(f.document.activeElement, f.anchor);
  f.mobile.matches = true; f.fire('mobile:change');
  assert.equal(f.document.activeElement, f.toggle);
});

for (const [label, response] of [
  ['malformed success JSON', { ok: true, json: async () => { throw new SyntaxError(); } }],
  ['missing acknowledgement', { ok: true, json: async () => ({}) }],
  ['null acknowledgement', { ok: true, json: async () => null }],
  ['unconfigured provider', { ok: false, json: async () => ({ message: 'Mellorca has not received this submission.' }) }],
  ['network failure', () => { throw new TypeError('Failed to fetch'); }],
]) {
  test(`Contact preserves enquiry after ${label}`, async () => {
    const f = fixture(response);
    await f.fire('form:submit', { preventDefault() {} });
    assert.equal(f.resets(), 0); assert.equal(f.submit.disabled, false);
    assert.equal(f.form.attrs['aria-busy'], undefined);
    assert.equal(f.timers.size, 0);
    assert.match(f.status.className, /error/);
    assert.doesNotMatch(f.status.textContent, /Your enquiry has been sent/);
  });
}

test('Contact resets only after explicit receipt acknowledgement', async () => {
  const f = fixture(); await f.fire('form:submit', { preventDefault() {} });
  assert.equal(f.resets(), 1); assert.match(f.status.className, /success/);
  assert.equal(f.timers.size, 0);
});

test('Contact preserves edits made while an acknowledged enquiry was sending', async () => {
  let finish;
  const response = new Promise(resolve => { finish = resolve; });
  const f = fixture(() => response);
  const pending = f.fire('form:submit', { preventDefault() {} });
  f.fields.message = 'New unsent context';
  assert.equal(JSON.parse(f.requestOptions().body).message, 'Preserve this enquiry');
  finish({ ok: true, json: async () => ({ ok: true }) }); await pending;
  assert.equal(f.resets(), 0);
  assert.equal(f.fields.message, 'New unsent context');
  assert.match(f.status.textContent, /have not been sent/);
  assert.match(f.status.className, /success/);
});

for (const phase of ['request', 'response body']) {
  test(`Contact releases a stalled ${phase} without claiming nonreceipt or retrying`, async () => {
    const f = fixture(({ signal }) => {
      const pending = new Promise((resolve, reject) => {
        signal.addEventListener('abort', () => reject(new Error('aborted')));
      });
      return phase === 'request' ? pending : { ok: true, json: () => pending };
    });
    const pending = f.fire('form:submit', { preventDefault() {} });
    // Advance the deterministic timer; no actual wait or external request.
    await Promise.resolve();
    const timer = f.timers.get(1);
    assert.equal(timer.delay, 30000); timer.callback();
    await pending;
    assert.equal(f.requestOptions().signal.aborted, true);
    assert.equal(f.resets(), 0); assert.equal(f.requests(), 1);
    assert.equal(f.submit.disabled, false); assert.equal(f.timers.size, 0);
    assert.equal(f.form.attrs['aria-busy'], undefined);
    assert.match(f.status.textContent, /Delivery could not be confirmed/);
    assert.match(f.status.textContent, /avoid a duplicate/);
  });
}

test('Contact pending guard does not depend on a submit button being present', async () => {
  let finish;
  const f = fixture(() => new Promise(resolve => { finish = resolve; }), { hasSubmit: false });
  const pending = f.fire('form:submit', { preventDefault() {} });
  await f.fire('form:submit', { preventDefault() {} });
  assert.equal(f.requests(), 1);
  finish({ ok: true, json: async () => ({ ok: true }) }); await pending;
  assert.equal(f.resets(), 1);
});

test('Contact suppresses concurrent submits and clears stale status while sending', async () => {
  let finish;
  const response = new Promise(resolve => { finish = resolve; });
  const f = fixture(() => response); f.status.textContent = 'Previous result';
  const pending = f.fire('form:submit', { preventDefault() {} });
  assert.equal(f.status.textContent, ''); assert.equal(f.form.attrs['aria-busy'], 'true');
  await f.fire('form:submit', { preventDefault() {} }); assert.equal(f.requests(), 1);
  finish({ ok: true, json: async () => ({ ok: true }) }); await pending;
  assert.equal(f.resets(), 1); assert.equal(f.submit.disabled, false);
});

test('outside click does not leave focus inside the collapsed menu', () => {
  const f = fixture(); f.fire('toggle:click'); f.anchor.focus();
  f.fire('document:click', { target: {} });
  assert.equal(f.toggle.attrs['aria-expanded'], 'false');
  assert.equal(f.document.activeElement, f.toggle);
});
