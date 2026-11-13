// Article source format: Markdown with YAML-style front-matter.
// Sources live in editorial/articles/<hub>/<slug>.md and render to the
// canonical website/<hub>/<slug>/index.html, so public URLs do not change.

export const GENERATOR = 'mellorca-article-source/1';
export const SITE_ORIGIN = 'https://mellorca.com';

export const HUBS = {
  insights: { label: 'Insights', publisher: 'Mellorca Insights', contentType: 'insight' },
  impact: { label: 'Impact', publisher: 'Mellorca Impact', contentType: 'impact' },
  patterns: { label: 'Patterns', publisher: 'Mellorca Patterns', contentType: 'pattern' },
  discovery: { label: 'Discovery', publisher: 'Mellorca Discovery', contentType: 'discovery' },
  moments: { label: 'Moments', publisher: 'Mellorca Moments', contentType: 'moment' },
};

const REQUIRED = ['hub', 'record_id', 'slug', 'title', 'description', 'lead', 'category', 'published_date', 'updated_date', 'sources'];
// Keep diagnostic locations outside metadata so serialization and rendering stay unchanged.
const FRONT_MATTER_LOCATIONS = new WeakMap();
const LISTS = new Set(['sources', 'tags', 'related', 'side_notes']);
// Provenance fields that existing pages already carry. They are copied verbatim
// into the provenance comment so migrating a page to a source loses nothing.
// Hub-scoped fields are only accepted on their own hub.
export const PROVENANCE_FIELDS = {
  common: ['editorial_system', 'topic_id', 'content_id'],
  insights: [],
  impact: ['commercial_domain', 'primary_pain', 'primary_cost_mechanism', 'evidence_basis'],
  patterns: ['pattern_family', 'observable_condition', 'primary_identification', 'commercial_value_dimensions'],
  discovery: ['problem_domain', 'problem_owner', 'budget_owner', 'next_content_opportunity'],
  // The second group is the batch writer record metadata.
  moments: ['dividend_id', 'human_situation_id', 'story_angle_id', 'tension_id',
    'thematic_domain', 'human_situation', 'human_dividend', 'trade_off', 'epistemic_state'],
};
const PROVENANCE = new Set(Object.values(PROVENANCE_FIELDS).flat());
const KNOWN = new Set([...REQUIRED, ...PROVENANCE, 'eyebrow', 'page_title', 'tags', 'related', 'summary', 'cta_label', 'cta_href', 'closing_title', 'closing_text', 'side_title', 'side_text', 'side_notes', 'byline_category', 'side_text_position', 'layout', 'related_position', 'sources_heading', 'breadcrumb_label', 'status']);
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function unquote(value) {
  const match = value.match(/^"(.*)"$/) || value.match(/^'(.*)'$/);
  return match ? match[1] : value;
}

export function parseFrontMatter(text, file = 'article') {
  let lineNumber = 1;
  let field = 'front-matter';
  const fail = message => { throw new Error(`${file}:${lineNumber}: [${field}] ${message.replace(/[\r\n]+/g, ' ')}`); };
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  if (lines[0] !== '---') fail('must start with a --- front-matter line');
  const end = lines.indexOf('---', 1);
  if (end < 0) fail('front-matter is not closed with ---');

  const meta = {};
  const locations = { end: end + 1, fields: {} };
  let listKey = null;
  for (let index = 1; index < end; index++) {
    const line = lines[index];
    lineNumber = index + 1;
    field = listKey || 'front-matter';
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const item = line.match(/^\s+-\s+(.+)$/);
    if (item) {
      if (!listKey) fail(`list item without a list key: ${line.trim()}`);
      meta[listKey].push(unquote(item[1].trim()));
      continue;
    }
    const pair = line.match(/^([a-z_]+):(?:\s+(.*))?$/);
    if (!pair) fail(`unsupported front-matter line: ${line}`);
    const [, key, raw = ''] = pair;
    field = key;
    locations.fields[key] = lineNumber;
    if (!KNOWN.has(key)) fail(`unknown front-matter key: ${key}`);
    if (key in meta) fail(`duplicate front-matter key: ${key}`);
    if (LISTS.has(key)) {
      if (raw.trim()) fail(`${key} must be a list of "- item" lines`);
      meta[key] = [];
      listKey = key;
    } else {
      if (!raw.trim()) fail(`${key} must not be empty`);
      meta[key] = unquote(raw.trim());
      listKey = null;
    }
  }
  FRONT_MATTER_LOCATIONS.set(meta, locations);
  return { meta, body: lines.slice(end + 1).join('\n') };
}

export function parseSource(entry) {
  const separator = entry.lastIndexOf(' | ');
  const label = separator >= 0 ? entry.slice(0, separator).trim() : '';
  const url = separator >= 0 ? entry.slice(separator + 3).trim() : entry.trim();
  return { label: label || url.replace(/^https:\/\//, ''), url };
}

function safeHref(href) {
  return /^https:\/\/[^\s"<>]+$/.test(href) || /^\/[^\s"<>]*$/.test(href) || /^#[A-Za-z][\w-]*$/.test(href);
}

export function validateArticle(meta, file = 'article') {
  const locations = FRONT_MATTER_LOCATIONS.get(meta);
  const fail = (message, field = message.split(' ')[0]) => {
    const line = locations?.fields[field] || locations?.end || 1;
    throw new Error(`${file}:${line}: [${field}] ${message.replace(/[\r\n]+/g, ' ')}`);
  };
  for (const key of REQUIRED) if (!(key in meta)) fail(`missing required front-matter key: ${key}`, key);
  if (!HUBS[meta.hub]) fail(`hub must be one of ${Object.keys(HUBS).join(', ')}`);
  if (!SLUG.test(meta.slug)) fail('slug must be lowercase words joined by single hyphens');
  for (const key of ['published_date', 'updated_date']) {
    if (!DATE.test(meta[key]) || Number.isNaN(Date.parse(`${meta[key]}T00:00:00Z`))) fail(`${key} must be a YYYY-MM-DD date`);
  }
  if (meta.updated_date < meta.published_date) fail('updated_date must not be before published_date');
  if (meta.status && meta.status !== 'published') fail('status must be published when present');
  if (meta.sources.length === 0) fail('at least one source is required');
  const sourceUrls = new Set();
  for (const entry of meta.sources) {
    const raw = parseSource(entry).url;
    if (!/^https:\/\/[^\s"<>]+$/.test(raw)) fail(`source must be an https URL: ${entry}`);
    let url;
    try { url = new URL(raw); } catch { fail(`source must be a well-formed https URL: ${entry}`); }
    if (url.protocol !== 'https:' || !url.hostname || url.username || url.password || raw.includes('\\') || /%(?![0-9a-f]{2})/i.test(raw)) {
      fail(`source must be a well-formed https URL without credentials: ${entry}`);
    }
    if (sourceUrls.has(url.href)) fail(`duplicate source URL: ${raw}`);
    sourceUrls.add(url.href);
  }
  for (const key of Object.keys(meta)) {
    if (PROVENANCE.has(key) && !PROVENANCE_FIELDS.common.includes(key) && !PROVENANCE_FIELDS[meta.hub].includes(key)) {
      fail(`${key} is a provenance field for another hub, not ${meta.hub}`);
    }
  }
  for (const entry of meta.related || []) {
    const { url } = parseSource(entry);
    if (!/^\/[a-z0-9-]+\/(?:[a-z0-9-]+\/)*$/.test(url)) fail(`related link must be a site-relative path ending in /: ${entry}`);
  }
  if (meta.cta_href && !safeHref(meta.cta_href)) fail('cta_href must be https, site-relative or a fragment');
  if (Boolean(meta.cta_href) !== Boolean(meta.cta_label)) fail('cta_label and cta_href must be given together');
  if (Boolean(meta.closing_title) !== Boolean(meta.closing_text)) fail('closing_title and closing_text must be given together');
  if (meta.closing_title) renderCallout(meta.closing_title, meta.closing_text, file);
  if (meta.side_text && !meta.side_title) fail('side_text needs side_title');
  if (meta.side_text) renderInline(meta.side_text, file);
  if (meta.side_text_position && meta.side_text_position !== 'above_tags') fail('side_text_position must be above_tags when present');
  if (meta.side_text_position && !meta.side_text) fail('side_text_position needs side_text');
  if (meta.side_notes && meta.side_title) fail('side_notes belong to the default record card; use side_text with side_title');
  for (const note of meta.side_notes || []) renderInline(note, file);
  if (meta.related_position && meta.related_position !== 'before_sources') fail('related_position must be before_sources when present');
  if (meta.related_position && !meta.related) fail('related_position needs related');
  if (meta.sources_heading !== undefined && !/^Sources\b[^<>]{0,60}$/.test(meta.sources_heading)) fail('sources_heading must start with "Sources" and be at most 67 characters of plain text');
  if (meta.breadcrumb_label !== undefined && !/^[^<>]{1,60}$/.test(meta.breadcrumb_label)) fail('breadcrumb_label must be at most 60 characters of plain text');
  if (meta.layout && meta.layout !== 'plain') fail('layout must be plain when present');
  if (meta.layout) {
    const cardKeys = PLAIN_EXCLUDES.filter(key => key in meta);
    if (cardKeys.length) fail(`layout: plain has no side card or byline category, so it cannot take ${cardKeys.join(', ')}`);
  }
}

// Mirrors COMMON_WORDS and title_case_word() in tools/mellorca-controller/editorial_synthesis.py.
const DESCRIPTION_CHARS = 160;
const COMMON_WORDS = new Set(`a about after all an and are as at be because before between but by can cannot cost costs do does
every for from get gets has have how in into is it its keep keeps make makes more no nobody not of on one only or
other own same should still than that the their them they this through to too up what when where which while who
why will with without work works you your`.split(/\s+/));

export function titleCaseWord(title) {
  let start = true;
  for (const token of title.split(/\s+/).filter(Boolean)) {
    const word = token.replace(/[^A-Za-z]/g, '');
    if (/^["“‘]/.test(token)) start = true; // a quoted phrase starts with a capital
    if (!start && /^[A-Z]/.test(word) && COMMON_WORDS.has(word.toLowerCase()) && word !== word.toUpperCase()) return word;
    start = /[:?!]["”’)]?$/.test(token);
  }
  return '';
}

// layout: plain (W2 slice 5c) is the older page layout: no side card, a hub-only
// breadcrumb, a <p> eyebrow and a byline of the publisher and the ISO date.
const PLAIN_EXCLUDES = ['tags', 'cta_label', 'cta_href', 'side_title', 'side_text', 'side_notes', 'side_text_position', 'byline_category'];

// Emphasis and code; link labels take the same formatting as the text around them.
const formatInline = html => html
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<em>$1</em>');

// "\*" is a literal asterisk: it is held back until emphasis has been applied.
function renderInline(text, file) {
  const links = [];
  let html = escapeHtml(text).replace(/\\\*/g, '\u0001').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const target = href.replace(/&amp;/g, '&');
    if (!safeHref(target)) throw new Error(`${file}: unsafe link target: ${target}`);
    links.push(`<a href="${escapeHtml(target)}">${formatInline(label)}</a>`);
    return `\u0000${links.length - 1}\u0000`;
  });
  html = formatInline(html);
  return html.replace(/\u0000(\d+)\u0000/g, (_, index) => links[Number(index)]).replace(/\u0001/g, '*');
}

export function renderCallout(title, text, file = 'article') {
  return `<div class="callout"><strong>${renderInline(title, file)}</strong><span class="muted">${renderInline(text, file)}</span></div>`;
}

// Table cells are split on unescaped pipes; "\|" stands for a literal pipe.
function tableCells(line, file) {
  if (!/^\|.*\|$/.test(line)) throw new Error(`${file}: table rows must start and end with |: ${line}`);
  return line.slice(1, -1).split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, '|'));
}

// Supported Markdown: ## and ### headings, paragraphs, "- " and "1. " lists,
// **bold**, *italic*, `code` and [links](https://...); "\*" is a literal asterisk.
// Link labels may carry emphasis. Raw HTML is escaped.
// Block extras used by the existing pages:
//   > lines        a blockquote; consecutive lines are joined with <br>. A bare
//                  ">" line anywhere in the block switches it to paragraphs.
//   | a | b |      a table: header row, a |---| separator row, then body rows.
//   :::callout T   a callout titled T; text lines up to a closing ":::".
export function renderMarkdown(markdown, file = 'article') {
  const blocks = [];
  let paragraph = [];
  let list = null;
  const flushParagraph = () => {
    if (paragraph.length) blocks.push(`<p>${renderInline(paragraph.join(' '), file)}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (list) blocks.push(`<${list.tag}>${list.items.map(item => `<li>${renderInline(item, file)}</li>`).join('')}</${list.tag}>`);
    list = null;
  };
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const takeWhile = (index, test) => {
    const taken = [];
    while (index < lines.length && test(lines[index].trim())) taken.push(lines[index++].trim());
    return taken;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index].trim();
    if (!trimmed) { flushParagraph(); flushList(); continue; }
    const callout = trimmed.match(/^:::callout\s+(.+)$/);
    if (callout || trimmed.startsWith('>') || trimmed.startsWith('|')) { flushParagraph(); flushList(); }
    if (callout) {
      const text = takeWhile(index + 1, line => line !== ':::');
      index += text.length + 1;
      if (index >= lines.length) throw new Error(`${file}: callout "${callout[1]}" is not closed with :::`);
      if (!text.some(Boolean)) throw new Error(`${file}: callout "${callout[1]}" has no text`);
      blocks.push(renderCallout(callout[1], text.filter(Boolean).join(' '), file));
      continue;
    }
    if (trimmed.startsWith('>')) {
      const quoted = takeWhile(index, line => line.startsWith('>')).map(line => line.replace(/^>\s?/, '').trim());
      index += quoted.length - 1;
      const groups = quoted.join('\n').split(/\n{2,}|^\n+|\n+$/).filter(Boolean).map(group => group.split('\n'));
      if (!groups.length) throw new Error(`${file}: blockquote is empty`);
      const inline = group => group.map(line => renderInline(line, file)).join('<br>');
      blocks.push(quoted.includes('')
        ? `<blockquote>${groups.map(group => `<p>${inline(group)}</p>`).join('')}</blockquote>`
        : `<blockquote>${inline(groups[0])}</blockquote>`);
      continue;
    }
    if (trimmed.startsWith('|')) {
      const rows = takeWhile(index, line => line.startsWith('|'));
      index += rows.length - 1;
      if (rows.length < 3 || !/^\|(?:\s*:?-+:?\s*\|)+$/.test(rows[1])) {
        throw new Error(`${file}: a table needs a header row, a |---| separator row and at least one body row`);
      }
      const [head, , ...body] = rows.map(row => tableCells(row, file));
      if (head.length !== tableCells(rows[1], file).length || body.some(row => row.length !== head.length)) {
        throw new Error(`${file}: every table row must have ${head.length} cells`);
      }
      const cells = (row, tag) => `<tr>${row.map(cell => `<${tag}>${renderInline(cell, file)}</${tag}>`).join('')}</tr>`;
      blocks.push(`<table><thead>${cells(head, 'th')}</thead><tbody>${body.map(row => cells(row, 'td')).join('')}</tbody></table>`);
      continue;
    }
    if (trimmed === ':::') throw new Error(`${file}: ::: closes nothing`);
    if (trimmed === SOURCES_MARKER) throw new Error(`${file}: ${SOURCES_MARKER} may appear only once, on its own line`);
    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      if (heading[1].length < 2 || heading[1].length > 3) throw new Error(`${file}: only ## and ### headings are allowed in the body`);
      flushParagraph(); flushList();
      blocks.push(`<h${heading[1].length}>${renderInline(heading[2], file)}</h${heading[1].length}>`);
      continue;
    }
    const bullet = trimmed.match(/^-\s+(.+)$/);
    const numbered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (bullet || numbered) {
      flushParagraph();
      const tag = bullet ? 'ul' : 'ol';
      if (list && list.tag !== tag) flushList();
      if (!list) list = { tag, items: [] };
      list.items.push((bullet || numbered)[1]);
      continue;
    }
    flushList();
    paragraph.push(trimmed);
  }
  flushParagraph();
  flushList();
  if (!blocks.length) throw new Error(`${file}: article body is empty`);
  // A Sources heading over a list, or named like the generated one, would duplicate the
  // generated section. Another one over prose (an older Impact page's "Sources and
  // method" note) is ordinary body text.
  if (blocks.some((block, index) => /^<h2>Sources(?: and further reading)?<\/h2>$/i.test(block)
    || (/^<h2>Sources\b/i.test(block) && /^<[ou]l>/.test(blocks[index + 1] || '')))) {
    throw new Error(`${file}: sources are rendered from front-matter; remove the Sources heading from the body`);
  }
  return blocks.join('');
}

// A ":::sources" line (W2 slice 5e) marks where the generated sources section
// goes when an older page has body content after it; the rest is the tail.
export const SOURCES_MARKER = ':::sources';

export function splitAtSources(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const index = lines.findIndex(line => line.trim() === SOURCES_MARKER);
  if (index < 0) return { body: markdown, tail: null };
  return { body: lines.slice(0, index).join('\n'), tail: lines.slice(index + 1).join('\n') };
}

export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

function jsonLd(meta, url) {
  const hub = HUBS[meta.hub];
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.published_date,
    dateModified: meta.updated_date,
    mainEntityOfPage: url,
    articleSection: meta.category,
    publisher: { '@type': 'Organization', name: 'Mellorca', url: `${SITE_ORIGIN}/` },
    isPartOf: { '@type': 'CollectionPage', name: hub.publisher, url: `${SITE_ORIGIN}/${meta.hub}/` },
    citation: meta.sources.map(entry => parseSource(entry).url),
  };
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function provenance(meta) {
  const lines = [
    `content_type: ${HUBS[meta.hub].contentType}`,
    `record_id: ${meta.record_id}`,
    `title: ${meta.title}`,
    `slug: ${meta.slug}`,
    `published_date: ${meta.published_date}`,
    `updated_date: ${meta.updated_date}`,
    `category: ${meta.category}`,
    'sources:',
    ...meta.sources.map(entry => `  - ${parseSource(entry).url}`),
    ...(meta.related ? ['related:', ...meta.related.map(entry => `  - ${parseSource(entry).url}`)] : []),
  ];
  return `<!--\n${lines.join('\n').replace(/--/g, '- -')}\n-->`;
}

// side_title keeps an existing page's own side card (heading, tag row, note)
// in place of the default record card, so migrating a page loses no text.
// side_text_position: above_tags puts that note before the tag row (older Impact cards).
// side_notes are paragraphs the default record card shows after its tag row
// (Discovery pages list the problem and budget owners there).
export function renderSideCard(meta) {
  const tags = (meta.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  const cta = meta.cta_href ? `<a class="btn btn-secondary" href="${escapeHtml(meta.cta_href)}">${escapeHtml(meta.cta_label)}</a>` : '';
  if (meta.side_title) {
    const note = meta.side_text ? `<p>${renderInline(meta.side_text)}</p>` : '';
    const row = `<div class="tag-row">${tags}</div>`;
    const middle = meta.side_text_position === 'above_tags' ? `${note}${row}` : `${row}${note}`;
    return `<aside class="side-card"><h3>${escapeHtml(meta.side_title)}</h3>${middle}${cta}</aside>`;
  }
  const notes = (meta.side_notes || []).map(note => `<p>${renderInline(note)}</p>`).join('');
  return `<aside class="side-card"><h3>${escapeHtml(HUBS[meta.hub].label)}</h3><p><strong>${escapeHtml(meta.category)}</strong></p>${tags ? `<div class="tag-row">${tags}</div>` : ''}${notes}${cta}</aside>`;
}

// Last time each cited source was confirmed to resolve (editorial/source-verification.json, written by the
// monthly link audit). Sources without an entry show no date, so the page never claims more than was checked.
let sourceVerification = {};

export function setSourceVerification(map) {
  sourceVerification = map || {};
}

function verifiedNote(href) {
  const iso = sourceVerification[href];
  return /^\d{4}-\d{2}-\d{2}$/.test(iso || '') ? ` <span class="muted">(last verified ${formatDate(iso)})</span>` : '';
}

export function renderArticlePage(meta, bodyHtml, tailHtml = '') {
  const hub = HUBS[meta.hub];
  const url = `${SITE_ORIGIN}/${meta.hub}/${meta.slug}/`;
  const pageTitle = meta.page_title || `${meta.title} | ${hub.publisher}`;
  const eyebrow = meta.eyebrow || `${meta.category} · ${hub.label}`; // record IDs are internal and never shown to readers
  const sources = meta.sources.map(parseSource)
    .map(({ label, url: href }) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a>${verifiedNote(href)}</li>`).join('');
  const related = meta.related
    ? `<h2>Related Mellorca reading</h2><ul>${meta.related.map(parseSource).map(({ label, url: href }) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`).join('')}</ul>`
    : '';
  // The summary text only shows when it says something the lead under the headline does not; most sources repeat
  // the lead word for word, and then the box keeps only its two calls to action.
  const sameText = (a, b) => String(a || '').replace(/\s+/g, ' ').trim().toLowerCase() === String(b || '').replace(/\s+/g, ' ').trim().toLowerCase();
  const summaryText = meta.summary && !sameText(meta.summary, meta.lead)
    ? `<strong>Article summary</strong><span class="muted">${escapeHtml(meta.summary)}</span>` : '';
  const summary = meta.summary
    ? `<div class="callout">${summaryText}<div class="tag-row">`
      + '<a class="btn btn-secondary" href="/solutions/">Explore our solutions</a><a class="btn btn-primary" href="/contact/">Start a conversation</a></div></div>'
    : '';
  // sources_heading keeps an older page's own heading (W2 slice 5d); related_position: before_sources
  // keeps related reading ahead of the sources, as older Patterns pages have it.
  const sourceList = `<h2>${escapeHtml(meta.sources_heading || 'Sources and further reading')}</h2><ul>${sources}</ul>`;
  // A closing call to action that existing pages place after the sources.
  const closing = meta.closing_title ? renderCallout(meta.closing_title, meta.closing_text) : '';
  const plain = meta.layout === 'plain';
  // breadcrumb_label (W2 slice 5e) keeps an older page's own hub link text ("Mellorca Moments").
  const crumb = `<a href="/${meta.hub}/">${escapeHtml(meta.breadcrumb_label || hub.label)}</a>`;
  const aside = plain ? '' : renderSideCard(meta);
  const hero = plain
    ? `<div class="breadcrumbs">${crumb}</div>`
      + `<p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(meta.title)}</h1><p class="lead">${escapeHtml(meta.lead)}</p>`
      + `<div class="detail-meta"><span>${escapeHtml(hub.publisher)}</span><span>${meta.published_date}</span></div>`
    : `<div class="breadcrumbs">${crumb}<span>›</span>${escapeHtml(meta.category)}</div>`
      + `<div class="eyebrow">${escapeHtml(eyebrow)}</div><h1>${escapeHtml(meta.title)}</h1><p class="lead">${escapeHtml(meta.lead)}</p>`
      + `<div class="detail-meta"><span>${escapeHtml(hub.publisher)}</span><span>·</span><span>${escapeHtml(meta.byline_category || meta.category)}</span><span>·</span><span>${formatDate(meta.published_date)}</span></div>`;

  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    + `<title>${escapeHtml(pageTitle)}</title><meta name="description" content="${escapeHtml(meta.description)}">`
    + `<meta name="generator" content="${GENERATOR}"><link rel="canonical" href="${url}"><link rel="stylesheet" href="/assets/css/site.css">`
    + `<script type="application/ld+json">${jsonLd(meta, url)}</script></head>`
    + `<body data-current="${meta.hub}"><div data-site-header></div><main id="main">`
    + `<section class="detail-hero"><div class="shell">${hero}</div></section>`
    + `<section class="section"><div class="shell content-grid"><article class="prose">${provenance(meta)}${bodyHtml}`
    + `${meta.related_position === 'before_sources' ? `${related}${sourceList}` : `${sourceList}${related}`}${tailHtml}${closing}${summary}</article>${aside}</div></section>`
    + '</main><div data-site-footer></div><script src="/assets/js/site.js" defer></script></body></html>\n';
}

// The lead sits directly above the body, so a first paragraph that
// restates it reads as a stutter. Overlap is the share of the smaller word set found in the other.
export function leadOverlap(lead, body) {
  const firstParagraph = body.trim().split(/\n\s*\n/).find(block => !/^\s*([#>|*-]|\d+\.)/.test(block)) || '';
  const words = text => new Set(text.toLowerCase().match(/[a-z0-9']+/g) || []);
  const a = words(lead);
  const b = words(firstParagraph.replace(/\]\([^)]*\)/g, ']'));
  let shared = 0;
  for (const word of a) if (b.has(word)) shared += 1;
  if (Math.min(a.size, b.size) < 6) return 0; // too short to call a repeat
  return shared / Math.min(a.size, b.size);
}

export function renderArticleSource(text, file = 'article') {
  const { meta, body } = parseFrontMatter(text, file);
  validateArticle(meta, file);
  if (leadOverlap(meta.lead, body) > 0.7) throw new Error(`${file}: the first paragraph repeats the lead`);
  const parts = splitAtSources(body);
  const tail = parts.tail === null ? '' : renderMarkdown(parts.tail, `${file} (after ${SOURCES_MARKER})`);
  const bodyHtml = renderMarkdown(parts.body, file);
  if (meta.sources_heading && `${bodyHtml}${tail}`.includes(`<h2>${escapeHtml(meta.sources_heading)}</h2>`)) {
    throw new Error(`${file}: the body repeats the sources heading "${meta.sources_heading}"`);
  }
  return { meta, html: renderArticlePage(meta, bodyHtml, tail) };
}
