import assert from 'node:assert/strict';
import { test } from 'node:test';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { renderArticleSource, renderMarkdown } from './article-source.mjs';
import { renderArticles } from './render-articles.mjs';
import { buildSite } from './build-site.mjs';
import { canonicalBody, extractArticle, extractHub, parseHtml, parseProvenance } from './extract-article-source.mjs';
import { validateSiteQuality } from './site-quality.mjs';

const fixture = `---
hub: discovery
record_id: DISC-900
slug: why-test-articles-render-from-markdown
title: Why Test Articles Render From Markdown
description: A fixture proving that Markdown article sources render into canonical hub pages.
lead: Article sources keep content as data so hubs, sitemaps and structured data can be generated.
category: Integration & API Operations
published_date: 2026-10-01
updated_date: 2026-10-01
tags:
  - Fixtures
cta_label: Systems Integration
cta_href: /services/systems-implementation-integration/
sources:
  - IETF RFC 6585 | https://www.rfc-editor.org/rfc/rfc6585.html#section-4
  - https://www.rfc-editor.org/rfc/rfc9110.html
---
## The problem in plain language

An integration **works** most of the time, then *fails* under load. See [RFC 6585](https://www.rfc-editor.org/rfc/rfc6585.html) and \`429\`.

- Map the limits.
- Pace the retries.

1. Measure.
2. Queue.

<script>alert(1)</script>
`;

function withTemp(run) {
  const root = mkdtempSync(join(tmpdir(), 'mellorca-articles-'));
  try { return run(root); } finally { rmSync(root, { recursive: true, force: true }); }
}

test('article source renders the canonical hub page with metadata and JSON-LD', () => {
  const { meta, html } = renderArticleSource(fixture, 'fixture.md');
  assert.equal(meta.slug, 'why-test-articles-render-from-markdown');
  assert.match(html, /<link rel="canonical" href="https:\/\/mellorca.com\/discovery\/why-test-articles-render-from-markdown\/">/);
  assert.match(html, /<body data-current="discovery"><div data-site-header><\/div><main id="main">/);
  assert.match(html, /<div class="eyebrow">Integration &amp; API Operations · Discovery<\/div>/);
  assert.doesNotMatch(html.replace(/<!--[\s\S]*?-->/g, ''), /DISC-900/);
  assert.match(html, /<span>1 October 2026<\/span>/);
  assert.match(html, /<h2>The problem in plain language<\/h2>/);
  assert.match(html, /<strong>works<\/strong>.*<em>fails<\/em>.*<a href="https:\/\/www.rfc-editor.org\/rfc\/rfc6585.html">RFC 6585<\/a>.*<code>429<\/code>/);
  assert.match(html, /<ul><li>Map the limits.<\/li><li>Pace the retries.<\/li><\/ul><ol><li>Measure.<\/li><li>Queue.<\/li><\/ol>/);
  assert.match(html, /<li><a href="https:\/\/www.rfc-editor.org\/rfc\/rfc6585.html#section-4">IETF RFC 6585<\/a><\/li>/);
  assert.match(html, /"@type":"Article".*"datePublished":"2026-10-01"/);
  assert.doesNotMatch(html, /<script>alert/);
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
});

for (const [label, mutate, expected] of [
  ['missing sources', text => text.replace(/sources:\n(  - .*\n)+/, ''), /missing required front-matter key: sources/],
  ['unknown key', text => text.replace('hub: discovery', 'hub: discovery\nauthor: x'), /unknown front-matter key: author/],
  ['unknown hub', text => text.replace('hub: discovery', 'hub: blog'), /hub must be one of/],
  ['bad slug', text => text.replace('slug: why-test', 'slug: Why_test'), /slug must be lowercase/],
  ['bare source domain', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'example.com'), /source must be an https URL/],
  ['malformed source URL', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'https://[broken/'), /well-formed https URL/],
  ['invalid source escape', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'https://example.com/%zz'), /well-formed https URL/],
  ['source credentials', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'https://user:password@example.com/source'), /without credentials/],
  ['duplicate labelled source', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'Other label | https://www.rfc-editor.org/rfc/rfc6585.html#section-4'), /duplicate source URL/],
  ['normalised duplicate source', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'https://WWW.RFC-EDITOR.ORG:443/rfc/rfc6585.html#section-4'), /duplicate source URL/],
  ['http source', text => text.replace('https://www.rfc-editor.org/rfc/rfc9110.html', 'http://example.com'), /source must be an https URL/],
  ['updated before published', text => text.replace('updated_date: 2026-10-01', 'updated_date: 2026-09-01'), /updated_date must not be before/],
  ['body h1', text => text.replace('## The problem', '# The problem'), /only ## and ### headings/],
  ['javascript link', text => text.replace('(https://www.rfc-editor.org/rfc/rfc6585.html)', '(javascript:alert(1))'), /unsafe link target/],
  ['body sources heading', text => `${text}\n## Sources\n\nDuplicate.\n`, /sources are rendered from front-matter/],
  ['another hub provenance field', text => text.replace('hub: discovery', 'hub: discovery\npattern_family: Integration'), /pattern_family is a provenance field for another hub, not discovery/],
  ['closing title without text', text => text.replace('hub: discovery', 'hub: discovery\nclosing_title: Next step'), /closing_title and closing_text must be given together/],
  ['unsafe closing link', text => text.replace('hub: discovery', 'hub: discovery\nclosing_title: Next\nclosing_text: [x](javascript:alert(1))'), /unsafe link target/],
  ['absolute related link', text => text.replace('sources:', 'related:\n  - Elsewhere | https://example.com/x/\nsources:'), /related link must be a site-relative path/],
]) {
  test(`article source rejects ${label}`, () => {
    const changed = mutate(fixture);
    assert.notEqual(changed, fixture, 'fixture must actually change');
    assert.throws(() => renderArticleSource(changed, 'fixture.md'), expected);
  });
}

const migratedFixture = fixture.replace('hub: discovery', 'hub: discovery\neditorial_system: commercial-problem-intelligence\nproblem_owner: Integration Lead')
  .replace('sources:', 'related:\n  - Rate limits in practice | /patterns/signs-your-business-needs-an-operating-system-not-another-app/\n  - /services/systems-implementation-integration/\nsummary: Rate limits cause intermittent failures; pace and queue requests.\nsources:');

test('provenance fields, related reading and summary callout carry over from existing pages', () => {
  const { html } = renderArticleSource(migratedFixture, 'fixture.md');
  assert.match(html, /category: Integration & API Operations\nsources:/);
  assert.doesNotMatch(html, /editorial_system|problem_owner|status: published|source_file/);
  assert.match(html, /related:\n  - \/patterns\/signs-your-business-needs-an-operating-system-not-another-app\/\n  - \/services\/systems-implementation-integration\/\n-->/);
  assert.match(html, /<\/ul><h2>Related Mellorca reading<\/h2><ul><li><a href="\/patterns\/signs-your-business-needs-an-operating-system-not-another-app\/">Rate limits in practice<\/a><\/li><li><a href="\/services\/systems-implementation-integration\/">\/services\/systems-implementation-integration\/<\/a><\/li><\/ul>/);
  assert.match(html, /<div class="callout"><strong>Article summary<\/strong><span class="muted">Rate limits cause intermittent failures; pace and queue requests.<\/span><div class="tag-row"><a class="btn btn-secondary" href="\/solutions\/">Explore our solutions<\/a><a class="btn btn-primary" href="\/contact\/">Start a conversation<\/a><\/div><\/div><\/article>/);
  const plain = renderArticleSource(fixture, 'fixture.md').html;
  assert.doesNotMatch(plain, /Related Mellorca reading|class="callout"|related:/);
});

test('empty Markdown body is rejected', () => {
  assert.throws(() => renderMarkdown('\n\n', 'empty.md'), /article body is empty/);
});

const fixtureUrl = 'https://mellorca.com/discovery/why-test-articles-render-from-markdown/';
const emptyHub = '<!doctype html><main><div class="grid grid-2"><a class="card card-link" href="/discovery/older/"><h3>Older</h3></a></div></main>';
function writeHub(siteRoot, html = emptyHub) {
  mkdirSync(join(siteRoot, 'discovery'), { recursive: true });
  writeFileSync(join(siteRoot, 'discovery', 'index.html'), html);
}
const emptySitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>https://mellorca.com/</loc></url>\n</urlset>\n';

test('render writes pages, check detects drift and orphans, hand-authored pages need --migrate', () => withTemp(root => {
  const sourceRoot = join(root, 'articles');
  const siteRoot = join(root, 'website');
  mkdirSync(join(sourceRoot, 'discovery'), { recursive: true });
  mkdirSync(siteRoot, { recursive: true });
  writeFileSync(join(siteRoot, 'sitemap.xml'), emptySitemap);
  writeHub(siteRoot);
  const source = join(sourceRoot, 'discovery', 'why-test-articles-render-from-markdown.md');
  writeFileSync(source, fixture);
  const page = join(siteRoot, 'discovery', 'why-test-articles-render-from-markdown', 'index.html');

  assert.throws(() => renderArticles({ sourceRoot, siteRoot, check: true }), /is missing/);
  assert.deepEqual(renderArticles({ sourceRoot, siteRoot }), { sources: 1, written: 1, sitemapUpdated: true, hubsUpdated: 1 });
  assert.deepEqual(renderArticles({ sourceRoot, siteRoot, check: true }), { sources: 1, written: 0, sitemapUpdated: false, hubsUpdated: 0 });

  writeFileSync(page, readFileSync(page, 'utf8').replace('Map the limits.', 'Edited by hand.'));
  assert.throws(() => renderArticles({ sourceRoot, siteRoot, check: true }), /out of date/);

  writeFileSync(page, '<!doctype html><p>hand-authored</p>');
  assert.throws(() => renderArticles({ sourceRoot, siteRoot }), /hand-authored page; re-run with --migrate/);
  assert.equal(renderArticles({ sourceRoot, siteRoot, migrate: true }).written, 1);

  writeFileSync(source.replace('why-test', 'renamed-test'), fixture);
  assert.throws(() => renderArticles({ sourceRoot, siteRoot }), /path must be/);
  rmSync(source.replace('why-test', 'renamed-test'));

  rmSync(source);
  assert.throws(() => renderArticles({ sourceRoot, siteRoot, check: true }), /no longer exists/);
}));

test('render adds missing sitemap entries once and check fails while one is missing', () => withTemp(root => {
  const sourceRoot = join(root, 'articles');
  const siteRoot = join(root, 'website');
  const sitemap = join(siteRoot, 'sitemap.xml');
  mkdirSync(join(sourceRoot, 'discovery'), { recursive: true });
  mkdirSync(siteRoot, { recursive: true });
  writeHub(siteRoot);
  writeFileSync(join(sourceRoot, 'discovery', 'why-test-articles-render-from-markdown.md'), fixture);

  assert.throws(() => renderArticles({ sourceRoot, siteRoot }), /sitemap.xml is missing/);
  writeFileSync(sitemap, emptySitemap);
  renderArticles({ sourceRoot, siteRoot });
  const once = readFileSync(sitemap, 'utf8');
  assert.equal(once.split(fixtureUrl).length, 2, 'entry is added exactly once');
  assert.match(once, /<url><loc>https:\/\/mellorca.com\/<\/loc><\/url>\n<url><loc>https:\/\/mellorca.com\/discovery\//);
  assert.equal(renderArticles({ sourceRoot, siteRoot }).sitemapUpdated, false);
  assert.equal(readFileSync(sitemap, 'utf8'), once);

  writeFileSync(sitemap, emptySitemap);
  assert.throws(() => renderArticles({ sourceRoot, siteRoot, check: true }), /sitemap.xml lacks https:\/\/mellorca.com\/discovery\/why-test/);
  writeFileSync(sitemap, emptySitemap.replace('</urlset>\n', ''));
  assert.throws(() => renderArticles({ sourceRoot, siteRoot }), /expected exactly one <\/urlset>/);
}));

test('render adds hub listing cards newest first, once, and check fails while one is missing', () => withTemp(root => {
  const sourceRoot = join(root, 'articles');
  const siteRoot = join(root, 'website');
  const hub = join(siteRoot, 'discovery', 'index.html');
  mkdirSync(join(sourceRoot, 'discovery'), { recursive: true });
  mkdirSync(siteRoot, { recursive: true });
  writeFileSync(join(siteRoot, 'sitemap.xml'), emptySitemap);
  writeFileSync(join(sourceRoot, 'discovery', 'why-test-articles-render-from-markdown.md'), fixture);
  const newer = fixture.replace(/why-test-articles-render-from-markdown/g, 'newer-test-article')
    .replace(/2026-10-01/g, '2026-10-02').replace('Integration & API Operations', 'Data & <Reporting>');
  writeFileSync(join(sourceRoot, 'discovery', 'newer-test-article.md'), newer);

  assert.throws(() => renderArticles({ sourceRoot, siteRoot }), /discovery[\\/]index.html is missing/);
  writeHub(siteRoot);
  assert.equal(renderArticles({ sourceRoot, siteRoot }).hubsUpdated, 1);
  const once = readFileSync(hub, 'utf8');
  assert.match(once, /<div class="grid grid-2"><a class="card card-link" href="\/discovery\/newer-test-article\/"><span class="kicker">Data &amp; &lt;Reporting&gt;<\/span><h3>Why Test Articles Render From Markdown<\/h3><p>A fixture proving/);
  assert.ok(once.indexOf('/discovery/newer-test-article/') < once.indexOf('/discovery/why-test-articles-render-from-markdown/'), 'newest first');
  assert.ok(once.indexOf('/discovery/why-test-articles-render-from-markdown/') < once.indexOf('/discovery/older/'), 'existing cards stay below');
  assert.equal(renderArticles({ sourceRoot, siteRoot }).hubsUpdated, 0);
  assert.equal(readFileSync(hub, 'utf8'), once);

  writeHub(siteRoot);
  assert.throws(() => renderArticles({ sourceRoot, siteRoot, check: true }), /lacks a listing card for \/discovery\/newer-test-article\//);
  writeHub(siteRoot, emptyHub.replace('grid grid-2', 'grid'));
  assert.throws(() => renderArticles({ sourceRoot, siteRoot }), /expected exactly one <div class="grid grid-2"> listing grid/);
}));

test('a rendered article passes the production build and front-end quality gate', () => withTemp(root => {
  const siteRoot = join(root, 'website');
  const sourceRoot = join(root, 'articles');
  cpSync('website', siteRoot, { recursive: true });
  // Pages already migrated to sources need their sources alongside the copied site.
  if (existsSync(join('editorial', 'articles'))) cpSync(join('editorial', 'articles'), sourceRoot, { recursive: true });
  mkdirSync(join(sourceRoot, 'discovery'), { recursive: true });
  writeFileSync(join(sourceRoot, 'discovery', 'why-test-articles-render-from-markdown.md'), migratedFixture);
  const result = renderArticles({ sourceRoot, siteRoot });
  assert.equal(result.sitemapUpdated, true);
  assert.equal(result.hubsUpdated, 1);
  assert.match(readFileSync(join(siteRoot, 'discovery', 'index.html'), 'utf8'), /href="\/discovery\/why-test-articles-render-from-markdown\/"/);
  const output = join(root, 'dist');
  buildSite({ sourceDirectory: siteRoot, outputDirectory: output });
  assert.doesNotThrow(() => validateSiteQuality(output));
}));

const handAuthored = body => '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Signs Of A Test Pattern | Mellorca Patterns</title>'
  + '<meta name="description" content="A hand-authored fixture page &amp; its metadata."></head><body data-current="patterns"><!--\n'
  + 'content_type: pattern\neditorial_system: mellorca-pattern-engine\ntopic_id: PAT-901\npattern_family: Data & Reporting\n'
  + 'published_date: 2026-09-01\nupdated_date: 2026-09-02\nsources:\n  - https://example.org/a\nrelated_impact: []\n-->'
  + '<main id="main"><section class="detail-hero"><div class="shell"><div class="breadcrumbs"><a href="/patterns/">Patterns</a><span>›</span>Data &amp; Reporting</div>'
  + '<div class="eyebrow">PAT-901 · Pattern</div><h1>Signs Of A Test Pattern</h1><p class="lead">The standfirst.</p>'
  + '<div class="detail-meta"><span>Mellorca Patterns</span><span>·</span><span>Data &amp; Reporting</span><span>·</span><span>1 September 2026</span></div></div></section>'
  + `<article class="prose">${body}<h2>Sources and further reading</h2><ul><li><a href="https://example.org/a">Example &amp; Co — A</a></li></ul>`
  + '<h2>Related Mellorca reading</h2><ul><li><a href="/insights/some-article/">Some Article</a></li></ul>'
  + '<div class="callout"><strong>Article summary</strong><span class="muted">The summary.</span><div class="tag-row"><a class="btn" href="/solutions/">Explore</a></div></div></article>'
  + '<aside class="side-card"><h3>Commercial value</h3><div class="tag-row"><span class="tag">Margin</span></div><a class="btn btn-secondary" href="/services/x/">Service X</a></aside></main></body></html>';

const extractableBody = '<h2>Observable condition</h2>\n<p>Reports <strong>disagree</strong>, see <a href="/insights/x/">this</a> and <em>that</em> &amp; <code>429</code>.</p>'
  + '<ul><li>One</li><li>Two</li></ul><ol><li>First</li></ol><h3>Detail</h3><p>Done.</p>';

test('a hand-authored page extracts to a source that renders the same body', () => {
  const result = extractArticle(handAuthored(extractableBody), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.record_id, 'PAT-901');
  assert.equal(result.meta.category, 'Data & Reporting');
  assert.equal(result.meta.description, 'A hand-authored fixture page & its metadata.');
  assert.equal(result.meta.updated_date, '2026-09-02');
  assert.equal(result.meta.eyebrow, 'PAT-901 · Pattern');
  assert.equal(result.meta.page_title, undefined, 'default page title is not repeated');
  assert.deepEqual(result.meta.sources, ['Example & Co — A | https://example.org/a']);
  assert.deepEqual(result.meta.related, ['Some Article | /insights/some-article/']);
  assert.deepEqual(result.meta.tags, ['Margin']);
  assert.equal(result.meta.cta_href, '/services/x/');
  assert.equal(result.meta.summary, 'The summary.');
  assert.equal(result.meta.pattern_family, 'Data & Reporting');
  assert.equal(result.meta.side_title, 'Commercial value');
  assert.equal(result.meta.side_text, undefined);
  const { html } = renderArticleSource(result.text, 'fixture');
  assert.match(html, /<aside class="side-card"><h3>Commercial value<\/h3><div class="tag-row"><span class="tag">Margin<\/span><\/div><a class="btn btn-secondary" href="\/services\/x\/">Service X<\/a><\/aside>/);
  const article = html.match(/<article class="prose"><!--[\s\S]*?-->([\s\S]*?)<h2>Sources and further reading/)[1];
  assert.equal(canonicalBody(parseHtml(article).root.children), canonicalBody(parseHtml(extractableBody).root.children));
});

test('a side card note survives extraction and rendering', () => {
  const page = handAuthored(extractableBody).replace('</div><a class="btn btn-secondary"', '</div><p>Related service: <a href="/services/y/">Service Y</a>.</p><a class="btn btn-secondary"');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.side_text, 'Related service: [Service Y](/services/y/).');
  assert.match(renderArticleSource(result.text, 'fixture').html, /<p>Related service: <a href="\/services\/y\/">Service Y<\/a>\.<\/p><a class="btn btn-secondary"/);
});

test('record card notes survive extraction and rendering', () => {
  const page = handAuthored(extractableBody)
    .replace('<h3>Commercial value</h3>', '<h3>Patterns</h3><p><strong>Data &amp; Reporting</strong></p>')
    .replace('</div><a class="btn btn-secondary"', '</div><p>Problem owner: COO / CFO</p><p>Budget owner: <a href="/services/y/">CIO</a></p><a class="btn btn-secondary"');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.side_title, undefined);
  assert.deepEqual(result.meta.side_notes, ['Problem owner: COO / CFO', 'Budget owner: [CIO](/services/y/)']);
  assert.match(renderArticleSource(result.text, 'fixture').html, /<aside class="side-card"><h3>Patterns<\/h3><p><strong>Data &amp; Reporting<\/strong><\/p><div class="tag-row"><span class="tag">Margin<\/span><\/div><p>Problem owner: COO \/ CFO<\/p><p>Budget owner: <a href="\/services\/y\/">CIO<\/a><\/p><a class="btn btn-secondary"/);
});

test('a side card note above the tag row survives extraction and rendering', () => {
  const page = handAuthored(extractableBody).replace('<h3>Commercial value</h3>', '<h3>Commercial value</h3><p>Chasing labour.</p>');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.side_text_position, 'above_tags');
  assert.match(renderArticleSource(result.text, 'fixture').html, /<h3>Commercial value<\/h3><p>Chasing labour\.<\/p><div class="tag-row">/);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'side_text_position: above_tags\ntags:'), 'fixture'), /side_text_position needs side_text/);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'side_title: T\nside_text: N\nside_text_position: below\ntags:'), 'fixture'), /side_text_position must be above_tags/);
});

test('a byline category that differs from the breadcrumb survives extraction and rendering', () => {
  const page = handAuthored(extractableBody).replace('<span>Data &amp; Reporting</span><span>·</span><span>1 September', '<span>Data, Reporting &amp; BI</span><span>·</span><span>1 September');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.category, 'Data & Reporting');
  assert.equal(result.meta.byline_category, 'Data, Reporting & BI');
  const { html } = renderArticleSource(result.text, 'fixture');
  assert.match(html, /<span>›<\/span>Data &amp; Reporting<\/div>/);
  assert.match(html, /<span>·<\/span><span>Data, Reporting &amp; BI<\/span><span>·<\/span>/);
  assert.equal(extractArticle(handAuthored(extractableBody), { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).meta.byline_category, undefined);
});

test('a renamed sources heading and related reading before the sources survive extraction and rendering', () => {
  const page = handAuthored(extractableBody)
    .replace(/(<h2>Sources[\s\S]*?<\/ul>)(<h2>Related[\s\S]*?<\/ul>)/, '$2$1')
    .replace('<h2>Sources and further reading</h2>', '<h2>Sources</h2>');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.related_position, 'before_sources');
  assert.equal(result.meta.sources_heading, 'Sources');
  assert.match(renderArticleSource(result.text, 'fixture').html, /<h2>Related Mellorca reading<\/h2><ul>[^]*?<\/ul><h2>Sources<\/h2><ul><li><a href="https:\/\/example\.org\/a">/);
  const standard = extractArticle(handAuthored(extractableBody), { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).meta;
  assert.equal(standard.related_position, undefined);
  assert.equal(standard.sources_heading, undefined);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'related_position: before_sources\ntags:'), 'fixture'), /related_position needs related/);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'related:\n  - /x/\nrelated_position: after\ntags:'), 'fixture'), /related_position must be before_sources/);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'sources_heading: Further reading\ntags:'), 'fixture'), /sources_heading must start with "Sources"/);
});

test('body content after the sources and a "Sources and method" note survive extraction and rendering', () => {
  const method = '<h2>Sources and method</h2><p>Illustrative figures only.</p>';
  const tail = '<div class="callout"><strong>Signal</strong><span class="muted">Test it.</span></div><h2>Bottom line</h2><p>Done.</p>';
  const page = handAuthored(`${extractableBody}${method}`).replace('</ul><div class="callout"><strong>Article summary', `</ul>${tail}<div class="callout"><strong>Article summary`);
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.closing_title, undefined);
  assert.match(result.body, /## Sources and method\n\nIllustrative figures only\.\n\n:::sources\n\n:::callout Signal/);
  const { html } = renderArticleSource(result.text, 'fixture');
  assert.match(html, /<h2>Sources and method<\/h2><p>Illustrative figures only.<\/p><h2>Sources and further reading<\/h2>/);
  assert.match(html, /<h2>Related Mellorca reading<\/h2><ul>[^]*?<\/ul><div class="callout"><strong>Signal<\/strong>[^]*?<h2>Bottom line<\/h2><p>Done.<\/p><div class="callout"><strong>Article summary/);
  assert.throws(() => renderArticleSource(fixture.replace(/\n---\n([^]*)$/, '\n---\n$1\n:::sources\n'), 'fixture'), /article body is empty/);
  assert.throws(() => renderMarkdown('Text.\n\n:::sources\n', 'f.md'), /:::sources may appear only once/);
  assert.throws(() => renderMarkdown('## Sources\n\n- [a](https://a.example/)', 'f.md'), /remove the Sources heading/);
  assert.equal(renderMarkdown('## Sources and method\n\nText.'), '<h2>Sources and method</h2><p>Text.</p>');
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'sources_heading: Sources and method\ntags:').replace(/\n---\n/, '\n---\n## Sources and method\n\nText.\n'), 'fixture'), /repeats the sources heading/);
});

test('a hub breadcrumb label and a two-part Moments record ID survive extraction and rendering', () => {
  const page = handAuthored(extractableBody).replace(/topic_id: PAT-901\n/, '').replace('PAT-901 · Pattern', 'Pattern')
    .replace('<a href="/patterns/">Patterns</a>', '<a href="/patterns/">Mellorca Patterns</a>');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern', ledgerId: 'STORY-ANGLE-000001' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.record_id, 'STORY-ANGLE-000001');
  assert.equal(result.meta.breadcrumb_label, 'Mellorca Patterns');
  assert.match(renderArticleSource(result.text, 'fixture').html, /<div class="breadcrumbs"><a href="\/patterns\/">Mellorca Patterns<\/a><span>›<\/span>/);
  assert.equal(extractArticle(handAuthored(extractableBody), { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).meta.breadcrumb_label, undefined);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'breadcrumb_label: <b>x</b>\ntags:'), 'fixture'), /breadcrumb_label must be/);
});

test('a provenance comment with a trailing comma still parses', () => {
  assert.deepEqual(parseProvenance('{"topic_id": "INS-001", "sources": ["https://a.example/",]}'), { topic_id: 'INS-001', sources: ['https://a.example/'] });
  assert.equal(parseProvenance('{"topic_id": INS-001}'), null);
});

test('the plain layout renders the older hero with no side card and survives extraction', () => {
  const plain = fixture.replace(/tags:\n  - Fixtures\ncta_label: .*\ncta_href: .*\n/, 'layout: plain\neyebrow: Operations\n');
  const { html } = renderArticleSource(plain, 'fixture');
  assert.match(html, /<div class="breadcrumbs"><a href="\/discovery\/">Discovery<\/a><\/div><p class="eyebrow">Operations<\/p><h1>/);
  assert.match(html, /<div class="detail-meta"><span>Mellorca Discovery<\/span><span>2026-10-01<\/span><\/div>/);
  assert.doesNotMatch(html, /<aside/);
  const result = extractArticle(html, { hub: 'discovery', slug: 'why-test-articles-render-from-markdown' });
  assert.deepEqual(result.problems, []);
  assert.equal(result.meta.layout, 'plain');
  assert.equal(result.meta.eyebrow, 'Operations');
  assert.throws(() => renderArticleSource(plain.replace('layout: plain', 'layout: wide'), 'fixture'), /layout must be plain/);
  assert.throws(() => renderArticleSource(fixture.replace('tags:', 'layout: plain\ntags:'), 'fixture'), /layout: plain has no side card or byline category, so it cannot take tags, cta_label, cta_href/);
});

test('side_notes are refused on a custom side card', () => {
  const source = fixture.replace('tags:', 'side_title: Custom\nside_notes:\n  - A note\ntags:');
  assert.throws(() => renderArticleSource(source, 'fixture'), /side_notes belong to the default record card/);
});

test('extraction refuses pages it cannot convert without loss', () => {
  const table = extractArticle(handAuthored(`${extractableBody}<table><tr><td>1</td></tr></table>`), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(table.problems.includes('unsupported table structure (needs one <thead> row of <th> and a <tbody> of <td> rows)'));
  const styled = extractArticle(handAuthored('<blockquote class="pull">Quote</blockquote>'), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(styled.problems.includes('unsupported <blockquote> block'));
  const callout = extractArticle(handAuthored('<div class="callout"><h3>Title</h3><p>Text</p></div>'), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(callout.problems.some(problem => problem.startsWith('unsupported <div class="callout"> layout')));
  const dated = extractArticle(handAuthored(extractableBody).replace('Example &amp; Co — A</a>', 'Example &amp; Co — A</a> (2026)'), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(dated.problems.includes('a source or related list item is not a single link'));
  const spliced = extractArticle(handAuthored(extractableBody).replace('</ul><h2>Related', '</ul><h2>Late section</h2><p>Text.</p><h2>Related'), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(spliced.problems.includes('the sources section is split by other content'));
  const nested = extractArticle(handAuthored('<ul><li><p>Nested</p></li></ul>'), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(nested.problems.includes('unsupported <p> inside text'));
  const markdownLike = extractArticle(handAuthored('<p>1. Not a list</p>'), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.ok(markdownLike.problems.includes('body does not render back identically'));
  const twoNotes = handAuthored(extractableBody).replace('</div><a class="btn btn-secondary"', '</div><p>One.</p><p>Two.</p><a class="btn btn-secondary"');
  assert.ok(extractArticle(twoNotes, { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).problems.includes('side card does not render back identically'));
  const noAside = handAuthored(extractableBody).replace(/<aside[\s\S]*<\/aside>/, '');
  // A page without a side card is read as the plain layout, so its full hero no longer matches.
  assert.ok(extractArticle(noAside, { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).problems.includes('hero does not render back identically'));
  const isoDate = handAuthored(extractableBody).replace('<span>1 September 2026</span>', '<span>2026-09-01</span>');
  assert.ok(extractArticle(isoDate, { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).problems.includes('hero does not render back identically'));
  const hiddenSources = handAuthored(extractableBody).replace(/<h2>Sources[\s\S]*?<\/ul>/, '');
  assert.ok(extractArticle(hiddenSources, { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).problems.includes('sources are only listed in the provenance comment'));
  const noId = handAuthored(extractableBody).replace(/topic_id: PAT-901\n/, '').replace('PAT-901 · Pattern', 'Pattern');
  assert.ok(extractArticle(noId, { hub: 'patterns', slug: 'signs-of-a-test-pattern' }).problems.includes('could not determine record_id'));
  assert.equal(extractArticle(noId, { hub: 'patterns', slug: 'signs-of-a-test-pattern', ledgerId: 'PAT-902' }).meta.record_id, 'PAT-902');
});

test('blockquotes, tables and callouts render from Markdown', () => {
  assert.equal(renderMarkdown('> **Cost**\n> people × hours'), '<blockquote><strong>Cost</strong><br>people × hours</blockquote>');
  assert.equal(renderMarkdown('> One\n>'), '<blockquote><p>One</p></blockquote>');
  assert.equal(renderMarkdown('> One\n>\n> Two\n> lines'), '<blockquote><p>One</p><p>Two<br>lines</p></blockquote>');
  assert.equal(renderMarkdown('| A | B |\n| --- | --- |\n| x \\| y | **1** |\n|  | 2 |'),
    '<table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>x | y</td><td><strong>1</strong></td></tr><tr><td></td><td>2</td></tr></tbody></table>');
  assert.equal(renderMarkdown(':::callout The signal\nSee [this](/contact/)\nnow.\n:::'),
    '<div class="callout"><strong>The signal</strong><span class="muted">See <a href="/contact/">this</a> now.</span></div>');
  for (const [markdown, expected] of [
    ['| A |\n| --- |', /needs a header row/],
    ['| A | B |\n| --- | --- |\n| x |', /must have 2 cells/],
    [':::callout T\ntext', /not closed/],
    [':::callout T\n:::', /has no text/],
    [':::', /closes nothing/],
    [':::callout T\n[x](javascript:alert(1))\n:::', /unsafe link target/],
  ]) assert.throws(() => renderMarkdown(markdown, 'f.md'), expected);
});

test('blockquotes, tables, callouts and a closing callout extract without loss', () => {
  const body = '<p>Intro.</p><blockquote><strong>Cost</strong><br>people × hours</blockquote><blockquote><p><strong>Prompt:</strong> who owns it?</p></blockquote>'
    + '<table><thead><tr><th>Item</th><th>Value</th></tr></thead><tbody><tr><td>A | B</td><td>1</td></tr><tr><td><strong>Total</strong></td><td></td></tr></tbody></table>'
    + '<div class="callout"><strong>Signal</strong><span class="muted">Text with <a href="/contact/">a link</a>.</span></div>';
  const page = handAuthored(body)
    .replace('<a href="https://example.org/a">Example &amp; Co — A</a></li>', '<a href="https://example.org/a">https://example.org/a</a>.</li>')
    .replace('<div class="callout"><strong>Article summary', '<div class="callout"><strong>Next step</strong><span class="muted"><a href="/solutions/">Explore</a>.</span></div><div class="callout"><strong>Article summary');
  const result = extractArticle(page, { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.deepEqual(result.meta.sources, ['https://example.org/a | https://example.org/a']);
  assert.equal(result.meta.closing_title, 'Next step');
  assert.equal(result.meta.closing_text, '[Explore](/solutions/).');
  const { html } = renderArticleSource(result.text, 'fixture');
  const article = html.match(/<article class="prose"><!--[\s\S]*?-->([\s\S]*?)<h2>Sources and further reading/)[1];
  assert.equal(canonicalBody(parseHtml(article).root.children), canonicalBody(parseHtml(body).root.children));
  assert.match(html, /<li><a href="https:\/\/example.org\/a">https:\/\/example.org\/a<\/a><\/li>/);
  assert.match(html, /<\/ul><div class="callout"><strong>Next step<\/strong><span class="muted"><a href="\/solutions\/">Explore<\/a>.<\/span><\/div><div class="callout"><strong>Article summary/);
});

test('every live page that extracts cleanly renders as a valid source', () => {
  for (const hub of ['insights', 'impact', 'patterns', 'discovery', 'moments']) {
    for (const result of extractHub(hub).filter(entry => !entry.problems.length)) {
      assert.doesNotThrow(() => renderArticleSource(result.text, `${hub}/${result.slug}.md`));
    }
  }
});

test('a first paragraph that repeats the lead fails the render (IMPROVEMENTS #13)', async () => {
  const { leadOverlap } = await import('./article-source.mjs');
  const lead = 'Late invoices drain cash before anyone notices the pattern.';
  assert.ok(leadOverlap(lead, `${lead}\n\nSecond paragraph.`) > 0.7);
  assert.ok(leadOverlap(lead, 'Most owners first see the problem in the bank balance on a Friday afternoon.\n\nMore.') <= 0.7);
});

test('lead overlap skips headings and ignores very short text', async () => {
  const { leadOverlap } = await import('./article-source.mjs');
  assert.equal(leadOverlap('A short description of the problem.', '## The problem\n\nTeams wait on approvals.'), 0);
  assert.ok(leadOverlap('Late invoices drain cash before anyone notices the pattern.', '## Why\n\nLate invoices drain cash before anyone notices the pattern.') > 0.7);
});

test('emphasis inside link text and a literal asterisk render and survive extraction', () => {
  assert.equal(renderMarkdown('See [*Will AI Fix Work?*](https://example.org/w) and [`a`](https://example.org/a).'),
    '<p>See <a href="https://example.org/w"><em>Will AI Fix Work?</em></a> and <a href="https://example.org/a"><code>a</code></a>.</p>');
  assert.equal(renderMarkdown('Files named *prices_\\*.csv* or 2 \\* 3.'),
    '<p>Files named <em>prices_*.csv</em> or 2 * 3.</p>');
  const body = '<p>See <a href="https://example.org/w"><em>Will AI Fix Work?</em></a>, then load <em>prices_*.csv</em>; 2 * 3 is 6.</p>';
  const result = extractArticle(handAuthored(body), { hub: 'patterns', slug: 'signs-of-a-test-pattern' });
  assert.deepEqual(result.problems, []);
  assert.match(result.text, /\[\*Will AI Fix Work\?\*\]\(https:\/\/example\.org\/w\)/);
  assert.match(result.text, /\*prices_\\\*\.csv\*; 2 \\\* 3 is 6\./);
});

test('front-matter diagnostics locate missing fields and malformed values', () => {
  const cases = [
    [fixture.replace(/^description:.*\n/m, ''), 'description', '---', /missing required front-matter key/],
    [fixture.replace('hub: discovery', 'hub: unknown'), 'hub', 'hub:', /hub must be one of/],
    [fixture.replace('published_date: 2026-10-01', 'published_date: yesterday'), 'published_date', 'published_date:', /YYYY-MM-DD/],
    [fixture.replace('description: A fixture', 'description:').replace(' proving that Markdown article sources render into canonical hub pages.', ''), 'description', 'description:', /must not be empty/],
  ];
  for (const [text, field, marker, reason] of cases) {
    const lines = text.split('\n');
    const line = marker === '---' ? lines.indexOf('---', 1) + 1 : lines.findIndex(value => value.startsWith(marker)) + 1;
    assert.throws(() => renderArticleSource(text, 'broken.md'), error => {
      assert.ok(error.message.startsWith(`broken.md:${line}: [${field}] `), error.message);
      assert.match(error.message, reason);
      assert.equal(error.message.split('\n').length, 1);
      return true;
    });
  }
});

test('sources show a last verified date only when the audit recorded one, and extraction ignores it', async () => {
  const { renderArticlePage, setSourceVerification } = await import('./article-source.mjs');
  const meta = { hub: 'insights', record_id: 'INS-1', slug: 's', title: 'T', description: 'D', lead: 'L', category: 'C', published_date: '2026-10-01', updated_date: '2026-10-01',
    sources: ['One | https://example.org/one', 'Two | https://example.org/two'] };
  try {
    setSourceVerification({ 'https://example.org/one': '2026-10-10' });
    const html = renderArticlePage(meta, '<p>Body.</p>');
    assert.match(html, /<li><a href="https:\/\/example.org\/one">One<\/a> <span class="muted">\(last verified 10 October 2026\)<\/span><\/li>/);
    assert.match(html, /<li><a href="https:\/\/example.org\/two">Two<\/a><\/li>/);
    const { extractArticle } = await import('./extract-article-source.mjs');
    const page = `<!doctype html><html><head><title>T | Mellorca Insights</title></head><body>${html}</body></html>`;
    const result = extractArticle(page, { hub: 'insights', slug: 's' });
    assert.ok(!result.problems.some(problem => /not a single link/.test(problem)), result.problems.join('; '));
  } finally {
    setSourceVerification({});
  }
});
