import assert from 'node:assert/strict';
import { test } from 'node:test';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validateSiteQuality } from './site-quality.mjs';
import { renderLayout } from './site-layout.mjs';

// Corrupt the built copy, never canonical content, to prove the gate rejects defects.
const cases = [
  ['broken local link', 'index.html', html => html.replace('href="/services/"', 'href="/missing-service/"'), /missing local target/],
  ['broken fragment', 'index.html', html => html.replace('href="#main"', 'href="#missing-main"'), /missing fragment/],
  ['duplicate IDs', 'index.html', html => html.replace('<main id="main"', '<main id="main-navigation"'), /duplicate IDs/],
  ['missing static header', 'index.html', html => html.replace('<header ', '<div ').replace('</header>', '</div>'), /built shared landmarks/],
  ['missing shared styles', 'index.html', html => html.replace(/<link rel="stylesheet" href="\/assets\/css\/site.css\?v=[a-f0-9]+">/, ''), /shared screen stylesheet required/],
  ['print-only shared styles', 'index.html', html => html.replace('rel="stylesheet"', 'rel="stylesheet" media="print"'), /shared screen stylesheet required/],
  ['missing shared interactions', 'contact/index.html', html => html.replace(/<script src="\/assets\/js\/site.js\?v=[a-f0-9]+" defer><\/script>/, ''), /deferred shared interaction script required/],
  ['racy async shared interactions', 'contact/index.html', html => html.replace(/(src="\/assets\/js\/site.js\?v=[a-f0-9]+") defer/, '$1 async'), /deferred shared interaction script required/],
  ['duplicate shared interactions', 'contact/index.html', html => html.replace('</body>', '<script src="/assets/js/site.js" defer></script></body>'), /deferred shared interaction script required/],
  ['stale stylesheet version', 'index.html', html => html.replace(/site.css\?v=[a-f0-9]+/, 'site.css?v=old'), /versioned shared screen stylesheet required/],
  ['unversioned interactions', 'contact/index.html', html => html.replace(/site.js\?v=[a-f0-9]+/, 'site.js'), /versioned deferred shared interaction script required/],
  ['asset changed without URL refresh', 'assets/js/site.js', script => script + '\n// changed asset\n', /versioned deferred shared interaction script required/],
  ['incorrect canonical', 'index.html', html => html.replace('rel="canonical" href="https://mellorca.com/"', 'rel="canonical" href="https://mellorca.com/services/"'), /self canonical/],
  ['unrecognised Contact intent', 'index.html', html => html.replace('href="/contact/"', 'href="/contact/?intent=unknown-offer"'), /unsupported Contact intent/],
  ['missing form label', 'contact/index.html', html => html.replace('for="email"', 'for="missing-email"'), /needs a label/],
  ['skipped core heading level', 'contact/index.html', html => html.replace('<h2>Useful context</h2>', '<h3>Useful context</h3>'), /core-page heading level skipped/],
  ['obsolete public identity', 'about/index.html', html => html.replaceAll('Qwaname Kenobisan', 'Aba Radebe'), /obsolete public identity/],
  ['sitemap drift', 'sitemap.xml', html => html.replace('<loc>https://mellorca.com/</loc>', '<loc>https://mellorca.com/missing/</loc>'), /exactly the indexable/],
  ['missing redirect destination', '_redirects', html => html.replace('/pages/what-i-do.html /services/ 301', '/pages/what-i-do.html /missing-destination/ 301'), /missing direct destination/],
  ['redirect cycle', '_redirects', html => html.replace('/pages/what-i-do.html /services/ 301', '/pages/what-i-do.html /pages/what-i-do 301').replace('/pages/what-i-do /services/ 301', '/pages/what-i-do /pages/what-i-do.html 301'), /missing direct destination/],
  ['redirect chain', '_redirects', html => html.replace('/pages/what-i-do.html /services/ 301', '/pages/what-i-do.html /pages/what-i-do 301'), /missing direct destination/],
  ['lost identity migration', '_redirects', html => html.replace('/about/aba-radebe/ /about/qwaname-kenobisan/ 301', ''), /Identity migration missing/],
];
for (const [label, file, mutate, expected] of cases) {
  test(`quality gate rejects ${label}`, () => {
    const root = mkdtempSync(join(tmpdir(), 'mellorca-quality-'));
    try {
      cpSync('dist', root, { recursive: true });
      const path = join(root, file);
      const before = readFileSync(path, 'utf8');
      const after = mutate(before);
      assert.notEqual(before, after, 'fixture must actually change');
      writeFileSync(path, after);
      assert.throws(() => validateSiteQuality(root), expected);
    } finally { rmSync(root, { recursive: true, force: true }); }
  });
}

test('layout preserves page content and distinguishes section from exact current page', () => {
  const source = '<body data-current="services"><div data-site-header></div><main id="main"><h1>Original meaning</h1></main><div data-site-footer></div></body>';
  const built = renderLayout(source, '/services/digital-systems-audit/');
  assert.match(built, /href="\/services\/" aria-current="location"/);
  assert.match(built, /<main id="main" tabindex="-1"><h1>Original meaning<\/h1><\/main>/);
  assert.match(renderLayout(source, '/services/'), /href="\/services\/" aria-current="page"/);
  assert.throws(() => renderLayout(built, '/services/'), /expected one empty shared header/);
});
