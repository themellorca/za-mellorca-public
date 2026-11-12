import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sitemapWithLastmod } from './build-site.mjs';

test('sitemap URLs gain lastmod from the page updated_date, existing entries are kept', () => {
  const xml = '<urlset>\n<url><loc>https://mellorca.com/a/</loc></url>\n<url><loc>https://mellorca.com/b/</loc></url>\n<url><loc>https://mellorca.com/c/</loc><lastmod>2026-01-01</lastmod></url>\n</urlset>';
  const pages = {
    'https://mellorca.com/a/': '<!--\nupdated_date: 2026-10-03\n-->',
    'https://mellorca.com/b/': '<p>no date</p>',
  };
  const out = sitemapWithLastmod(xml, loc => pages[loc] || null);
  assert.match(out, /<url><loc>https:\/\/mellorca.com\/a\/<\/loc><lastmod>2026-10-03<\/lastmod><\/url>/);
  assert.match(out, /<url><loc>https:\/\/mellorca.com\/b\/<\/loc><\/url>/);
  assert.match(out, /<loc>https:\/\/mellorca.com\/c\/<\/loc><lastmod>2026-01-01<\/lastmod>/);
  assert.equal(sitemapWithLastmod(xml.replace('2026-10-03', 'x'), () => '"updated_date": "2026-09-08"').match(/lastmod>2026-09-08/g).length, 2);
});
