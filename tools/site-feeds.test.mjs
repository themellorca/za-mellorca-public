import { test } from 'node:test';
import assert from 'node:assert/strict';
import { feedItem, renderFeed } from './build-site.mjs';

test('feed items come from the page title, description and datePublished', () => {
  const html = '<title>Cash &amp; Flow | Mellorca Insights</title><meta name="description" content="Why &quot;late&quot; invoices hurt"><script>{"datePublished":"2026-10-03"}</script>';
  assert.deepEqual(feedItem(html, 'https://mellorca.com/insights/a/'), { title: 'Cash & Flow', description: 'Why "late" invoices hurt', date: '2026-10-03', url: 'https://mellorca.com/insights/a/' });
  assert.equal(feedItem('<title>No date</title>', 'x'), null);
});

test('feeds list newest first, escape text and cap at 50 items', () => {
  const items = Array.from({ length: 60 }, (_, i) => ({ title: `A <${i}> & B`, description: 'd', date: `2026-09-${String((i % 28) + 1).padStart(2, '0')}`, url: `https://mellorca.com/x/${i}/` }));
  const xml = renderFeed({ title: 'Mellorca', link: 'https://mellorca.com/', description: 'All' }, items);
  assert.equal(xml.split('<item>').length - 1, 50);
  assert.match(xml, /<title>A &lt;\d+&gt; &amp; B<\/title>/);
  assert.match(xml, /<lastBuildDate>Mon, 28 Sep 2026 06:00:00 GMT<\/lastBuildDate>/);
  assert.equal(xml, renderFeed({ title: 'Mellorca', link: 'https://mellorca.com/', description: 'All' }, [...items].reverse()));
});
