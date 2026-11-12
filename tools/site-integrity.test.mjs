import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkSiteIntegrity } from './site-integrity.mjs';

const page = (route, title, body = '') => `<!doctype html><html lang="en"><head><title>${title}</title><link rel="canonical" href="https://mellorca.com${route}"></head><body>${body}</body></html>`;

function fixture(build) {
  const root = mkdtempSync(join(tmpdir(), 'site-integrity-'));
  const site = join(root, 'website');
  const sources = join(root, 'articles');
  const write = (path, text) => { mkdirSync(join(path, '..'), { recursive: true }); writeFileSync(path, text); };
  write(join(site, 'index.html'), page('/', 'Home', '<a href="/insights/">Insights</a> <a href="/assets/css/site.css">css</a> <a href="/old">old</a> <a href="/api/contact">api</a> <a href="https://example.com/">ext</a>'));
  write(join(site, 'insights/index.html'), page('/insights/', 'Insights', '<a href="/#main">home</a>'));
  write(join(site, 'assets/css/site.css'), 'body{}');
  write(join(site, '404.html'), '<title>Not found</title><a href="/">home</a>');
  write(join(site, '_redirects'), '/old /insights/ 301\n');
  write(join(site, 'sitemap.xml'), '<urlset><url><loc>https://mellorca.com/</loc></url><url><loc>https://mellorca.com/insights/</loc></url></urlset>');
  build({ site, sources, write });
  try { return checkSiteIntegrity({ siteRoot: site, sourceRoot: sources }); } finally { rmSync(root, { recursive: true, force: true }); }
}

const article = (id, hub, slug) => `---\nhub: ${hub}\nrecord_id: ${id}\nslug: ${slug}\n---\nBody\n`;

test('a consistent site has no problems', () => {
  assert.deepEqual(fixture(() => {}).problems, []);
});

test('the live website tree passes', () => {
  assert.deepEqual(checkSiteIntegrity().problems, []);
});

test('a link to a missing page fails', () => {
  const { problems } = fixture(({ site, write }) => write(join(site, 'insights/index.html'), page('/insights/', 'Insights', '<a href="/insights/deleted-article/">gone</a>')));
  assert.match(problems.join('\n'), /internal link \/insights\/deleted-article\/ does not resolve/);
});

test('sitemap gaps, extras and duplicates fail', () => {
  const { problems } = fixture(({ site, write }) => write(join(site, 'sitemap.xml'), '<urlset><url><loc>https://mellorca.com/</loc></url><url><loc>https://mellorca.com/</loc></url><url><loc>https://mellorca.com/gone/</loc></url></urlset>'));
  const text = problems.join('\n');
  assert.match(text, /listed more than once/);
  assert.match(text, /\/gone\/ is not an indexable page/);
  assert.match(text, /indexable page https:\/\/mellorca.com\/insights\/ is missing/);
});

test('a wrong canonical fails and a duplicate title warns', () => {
  const { problems, warnings } = fixture(({ site, write }) => write(join(site, 'insights/index.html'), page('/patterns/', 'Home')));
  assert.match(problems.join('\n'), /canonical https:\/\/mellorca.com\/patterns\/ should be https:\/\/mellorca.com\/insights\//);
  assert.match(warnings.join('\n'), /<title> "Home" also used by/);
  assert.doesNotMatch(problems.join('\n'), /<title>/);
});

test('duplicate record_ids and slugs in article sources fail', () => {
  const { problems } = fixture(({ sources, write }) => {
    write(join(sources, 'insights/a.md'), article('INS-1', 'insights', 'same-slug'));
    write(join(sources, 'insights/b.md'), article('INS-1', 'insights', 'same-slug'));
  });
  const text = problems.join('\n');
  assert.match(text, /record_id INS-1 also used by/);
  assert.match(text, /insights\/same-slug also used by/);
});
