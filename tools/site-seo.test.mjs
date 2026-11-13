import assert from 'node:assert/strict';
import { test } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { breadcrumbs, pageFacts, renderSeo, shareTitle } from './site-seo.mjs';
import { TOPICS, readCards, renderTopicPages, sitemapWithTopics, topicLinker, topicsFor } from './topic-pages.mjs';

const head = extra => `<!doctype html><html><head><title>Cash &amp; Flow | Mellorca Insights</title><meta name="description" content="Why &quot;late&quot; invoices hurt"><link rel="canonical" href="https://mellorca.com/insights/cash-flow/">${extra}</head><body><h1>Cash &amp; Flow</h1></body></html>`;
const ld = html => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(match => JSON.parse(match[1]));

test('share titles drop the brand suffix but keep brand-only titles whole', () => {
  assert.equal(shareTitle('Cash Flow | Mellorca Insights'), 'Cash Flow');
  assert.equal(shareTitle('Mellorca Moments | Human Dividend'), 'Mellorca Moments');
  assert.equal(shareTitle('Mellorca | Digital Infrastructure'), 'Mellorca | Digital Infrastructure');
});

test('article pages get Open Graph, Twitter and a breadcrumb trail, escaped', () => {
  const out = renderSeo(head('<script type="application/ld+json">{"@type":"Article"}</script>'), '/insights/cash-flow/');
  assert.match(out, /<meta property="og:type" content="article">/);
  assert.match(out, /<meta property="og:title" content="Cash &amp; Flow">/);
  assert.match(out, /<meta property="og:description" content="Why &quot;late&quot; invoices hurt">/);
  assert.match(out, /<meta property="og:url" content="https:\/\/mellorca.com\/insights\/cash-flow\/">/);
  assert.match(out, /<meta name="twitter:card" content="summary_large_image">/);
  assert.match(out, /<meta property="og:image" content="https:\/\/mellorca.com\/assets\/img\/share-default.png">/);
  assert.ok(existsSync('website/assets/img/share-default.png'));
  const article = ld(out).find(item => item['@type'] === 'Article');
  assert.equal(article.author.name, 'Mellorca');
  assert.equal(article.image, 'https://mellorca.com/assets/img/share-default.png');
  const trail = ld(out).find(item => item['@type'] === 'BreadcrumbList');
  assert.deepEqual(trail.itemListElement.map(item => item.name), ['Home', 'Insights', 'Cash & Flow']);
  assert.ok(out.indexOf('og:title') < out.indexOf('</head>'));
});

test('existing tags are not duplicated and noindex pages are left alone', () => {
  const once = renderSeo(head(''), '/insights/cash-flow/');
  assert.equal(renderSeo(once, '/insights/cash-flow/'), once);
  const hidden = head('<meta name="robots" content="noindex">');
  assert.equal(renderSeo(hidden, '/contact/thank-you/'), hidden);
});

test('home, hub and service pages get organisation, collection and service data without prices', () => {
  const home = ld(renderSeo(head('').replace('/insights/cash-flow/', '/'), '/'));
  assert.ok(home[0]['@graph'].some(node => node['@type'] === 'WebSite'));
  const hub = ld(renderSeo(head(''), '/insights/'));
  assert.ok(hub.some(node => node['@type'] === 'CollectionPage'));
  const service = renderSeo(head(''), '/services/digital-systems-audit/');
  assert.ok(ld(service).some(node => node['@type'] === 'Service'));
  assert.doesNotMatch(service, /"offers"|"price"/);
});

test('a value containing </script> cannot break out of structured data', () => {
  const out = renderSeo(head('').replace('Cash &amp; Flow |', '</script><script>x</script> |'), '/insights/cash-flow/');
  assert.equal(out.split('<script').length - 1, 1);
});

test('breadcrumbs use section names and the page heading when the title has extra parts', () => {
  const facts = pageFacts('<title>Jane Doe | Role, Mellorca</title><h1>Jane Doe</h1>');
  assert.deepEqual(breadcrumbs('/about/jane/', facts).itemListElement.map(item => item.name), ['Home', 'About', 'Jane Doe']);
  assert.equal(breadcrumbs('/', facts), null);
});

test('every article lands in at least one topic and unmatched ones fall back to strategy', () => {
  const card = (kicker, heading) => ({ kicker, heading, summary: '' });
  assert.deepEqual(topicsFor(card('AI Governance', 'x')).map(topic => topic.slug).includes('ai-and-automation'), true);
  assert.deepEqual(topicsFor(card('Operations', 'Why work gets lost')).map(topic => topic.slug), ['systems-strategy-and-growth']);
});

test('topic pages on disk match the generator and every listed article exists', () => {
  const files = renderTopicPages('website');
  for (const [rel, content] of files) {
    assert.ok(existsSync(`website/${rel}`), `${rel} missing; run npm run topics:render`);
    for (const [, href] of content.matchAll(/href="(\/(?:insights|impact|patterns|discovery|moments)\/[^"]+\/)"/g)) {
      assert.ok(existsSync(`website${href}index.html`), `${rel} links to missing ${href}`);
    }
  }
  assert.equal(files.size, TOPICS.length + 1);
  const sitemap = readFileSync('website/sitemap.xml', 'utf8');
  assert.equal(sitemapWithTopics(sitemap), sitemap);
  const covered = new Set([...files.values()].flatMap(content => [...content.matchAll(/class="card card-link" href="([^"]+)"/g)].map(match => match[1])));
  for (const item of readCards('website')) assert.ok(covered.has(item.href), `${item.href} is on no topic page`);
});

test('build-time topic links reach hub pages and article endings', () => {
  const link = topicLinker('website');
  const hub = link('<main id="main" tabindex="-1"><section class="detail-hero">hero</section><section>list</section></main>', '/insights/');
  assert.match(hub, /hero<\/section><section class="section">.*Browse by topic/);
  const first = readCards('website')[0];
  const article = link('<article><p>Body</p><div class="callout">Summary</div></article>', first.href);
  assert.match(article, /Topics:<\/span><a class="tag" href="\/topics\/[a-z-]+\/">.*<div class="callout">/);
});
