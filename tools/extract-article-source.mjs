// W2 slice 3b: extracts an article source (editorial/articles/<hub>/<slug>.md)
// from an existing hand-authored page (website/<hub>/<slug>/index.html).
// An extraction is "clean" only when the Markdown body renders back to the
// same body structure and text as the page, every front-matter value parses
// back unchanged and the source passes validateArticle. Anything else is
// reported as a problem and no source is written for that page.
//
//   node tools/extract-article-source.mjs [hub ...]          report only
//   node tools/extract-article-source.mjs --write <hub ...>  write clean sources
//   node tools/extract-article-source.mjs --adopt <page ...>  write clean sources for
//        the given website/<hub>/<slug>/index.html pages only and print a JSON
//        report; the controller uses it for each new daily batch page (C-03)
//   node tools/extract-article-source.mjs --from-articles < articles.json
//        print a source for each synthesized article, built without a page
//        (C-03 slice 2); the controller's synthesis step uses it
//
// After --write, run `node tools/render-articles.mjs --migrate` so the
// generated pages replace the hand-authored ones at the same URLs.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { HUBS, PROVENANCE_FIELDS, SOURCES_MARKER, parseFrontMatter, renderCallout, renderArticlePage, renderMarkdown, renderSideCard, validateArticle } from './article-source.mjs';

const VOID = new Set(['br', 'hr', 'img', 'meta', 'link', 'input', 'wbr']);
const INLINE = { strong: ['**', '**'], b: ['**', '**'], em: ['*', '*'], i: ['*', '*'], code: ['`', '`'] };
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// Moments record IDs have a two-word prefix (STORY-ANGLE-000001).
const ID = /^[A-Z]{2,5}(?:-[A-Z]{2,10})?-\d+$/;

export function decodeEntities(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    if (code[0] === '#') return String.fromCodePoint(code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : Number(code.slice(1)));
    return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', mdash: '—', ndash: '–', hellip: '…' }[code.toLowerCase()] ?? entity;
  });
}

// Minimal tree builder for the site's own generated markup.
export function parseHtml(html) {
  const root = { tag: '#root', attrs: '', children: [] };
  const stack = [root];
  const problems = [];
  for (const match of html.matchAll(/<!--[\s\S]*?-->|<\/([a-zA-Z0-9]+)\s*>|<([a-zA-Z0-9]+)([^>]*)>|[^<]+|</g)) {
    const [token, close, open, attrs] = match;
    const parent = stack[stack.length - 1];
    if (token.startsWith('<!--')) parent.children.push({ tag: '#comment', text: token.slice(4, -3) });
    else if (close) {
      const tag = close.toLowerCase();
      const index = stack.map(node => node.tag).lastIndexOf(tag);
      if (index <= 0) { problems.push(`stray </${tag}>`); continue; }
      if (index !== stack.length - 1) problems.push(`unclosed <${stack[stack.length - 1].tag}> before </${tag}>`);
      stack.length = index;
    } else if (open) {
      const node = { tag: open.toLowerCase(), attrs, children: [] };
      parent.children.push(node);
      if (!VOID.has(node.tag) && !attrs.trim().endsWith('/')) stack.push(node);
    } else parent.children.push({ tag: '#text', text: token });
  }
  if (stack.length > 1) problems.push(`unclosed <${stack[stack.length - 1].tag}>`);
  return { root, problems };
}

const attr = (node, name) => decodeEntities(node.attrs?.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? '');
const hasClass = (node, name) => attr(node, 'class').split(/\s+/).includes(name);
const textOf = node => node.tag === '#text' ? decodeEntities(node.text) : (node.children || []).map(textOf).join('');
const clean = text => text.replace(/\s+/g, ' ').trim();

function find(node, test) {
  if (test(node)) return node;
  for (const child of node.children || []) {
    const found = find(child, test);
    if (found) return found;
  }
  return null;
}

function findAll(node, test, out = []) {
  if (test(node)) out.push(node);
  for (const child of node.children || []) findAll(child, test, out);
  return out;
}

// Provenance comments are JSON on some pages and YAML-style lines on others.
export function parseProvenance(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith('{')) {
    try { return JSON.parse(trimmed); } catch { /* retried below without trailing commas */ }
    // Some older comments have a trailing comma before a closing bracket, which JSON.parse refuses.
    try { return JSON.parse(trimmed.replace(/,(\s*[\]}])/g, '$1')); } catch { return null; }
  }
  const data = {};
  let listKey = null;
  for (const line of trimmed.split('\n')) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) { data[listKey].push(item[1].trim()); continue; }
    const pair = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!pair) { listKey = null; continue; }
    const [, key, value] = pair;
    if (!value) { data[key] = []; listKey = key; } else { data[key] = value === '[]' ? [] : value; listKey = null; }
  }
  return data;
}

function inlineMarkdown(nodes, problems) {
  return nodes.map(node => {
    if (node.tag === '#text') return decodeEntities(node.text).replace(/\*/g, '\\*');
    if (node.tag === '#comment') return '';
    if (INLINE[node.tag]) {
      const [open, close] = INLINE[node.tag];
      return `${open}${inlineMarkdown(node.children, problems)}${close}`;
    }
    if (node.tag === 'a') return `[${inlineMarkdown(node.children, problems)}](${attr(node, 'href')})`;
    problems.push(`unsupported <${node.tag}> inside text`);
    return textOf(node);
  }).join('').replace(/\s+/g, ' ');
}

const elements = nodes => nodes.filter(node => node.tag !== '#comment' && (node.tag !== '#text' || node.text.trim()));

// Inline content split into lines at <br>, as used inside blockquotes.
function inlineLines(nodes, problems) {
  const lines = [[]];
  for (const node of nodes) {
    if (node.tag === 'br') lines.push([]); else lines[lines.length - 1].push(node);
  }
  return lines.map(line => inlineMarkdown(line, problems).trim());
}

function blockquoteMarkdown(node, problems) {
  const children = elements(node.children);
  if (children.length && children.every(child => child.tag === 'p' && !child.attrs.trim())) {
    return children.map(child => inlineLines(child.children, problems).map(line => `> ${line}`).join('\n')).join('\n>\n')
      + (children.length === 1 ? '\n>' : '');
  }
  if (children.some(child => child.tag === 'p')) problems.push('blockquote mixes paragraphs and text');
  return inlineLines(node.children, problems).map(line => `> ${line}`).join('\n');
}

function tableMarkdown(node, problems) {
  const sections = elements(node.children);
  const [head, body] = sections;
  const rowsOf = (section, cell) => {
    const rows = elements(section?.children || []);
    if (!rows.length || rows.some(row => row.tag !== 'tr' || row.attrs.trim())) return null;
    const cells = rows.map(row => elements(row.children));
    if (cells.some(row => !row.length || row.some(child => child.tag !== cell || child.attrs.trim()))) return null;
    return cells.map(row => `| ${row.map(child => inlineMarkdown(child.children, problems).trim().replace(/\|/g, '\\|')).join(' | ')} |`);
  };
  const headRows = sections.length === 2 && head.tag === 'thead' && body.tag === 'tbody' && !head.attrs.trim() && !body.attrs.trim() ? rowsOf(head, 'th') : null;
  const bodyRows = headRows ? rowsOf(body, 'td') : null;
  if (!headRows || headRows.length !== 1 || !bodyRows) {
    problems.push('unsupported table structure (needs one <thead> row of <th> and a <tbody> of <td> rows)');
    return '';
  }
  const columns = elements(elements(head.children)[0].children).length;
  if (bodyRows.some((_, index) => elements(elements(body.children)[index].children).length !== columns)) problems.push('table rows have different cell counts');
  return [headRows[0], `|${' --- |'.repeat(columns)}`, ...bodyRows].join('\n');
}

function calloutMarkdown(node, problems) {
  const [title, text, ...rest] = elements(node.children);
  if (attr(node, 'class') !== 'callout' || rest.length || title?.tag !== 'strong' || title.attrs.trim()
    || text?.tag !== 'span' || attr(text, 'class') !== 'muted') {
    problems.push('unsupported <div class="callout"> layout (needs <strong> title and <span class="muted"> text)');
    return '';
  }
  return `:::callout ${inlineMarkdown(title.children, problems).trim()}\n${inlineMarkdown(text.children, problems).trim()}\n:::`;
}

function blockMarkdown(nodes, problems) {
  const blocks = [];
  for (const node of nodes) {
    if (node.tag === '#comment') continue;
    if (node.tag === '#text') {
      if (node.text.trim()) problems.push('text outside a block element');
      continue;
    }
    if (node.tag === 'h2' || node.tag === 'h3') blocks.push(`${node.tag === 'h2' ? '##' : '###'} ${inlineMarkdown(node.children, problems).trim()}`);
    else if (node.tag === 'p') blocks.push(inlineMarkdown(node.children, problems).trim());
    else if (node.tag === 'ul' || node.tag === 'ol') {
      const items = node.children.filter(child => child.tag !== '#text' || child.text.trim());
      if (items.some(child => child.tag !== 'li')) problems.push(`unsupported content inside <${node.tag}>`);
      blocks.push(items.filter(child => child.tag === 'li')
        .map((child, index) => `${node.tag === 'ul' ? '-' : `${index + 1}.`} ${inlineMarkdown(child.children, problems).trim()}`).join('\n'));
    } else if (node.tag === 'blockquote' && !node.attrs.trim()) blocks.push(blockquoteMarkdown(node, problems));
    else if (node.tag === 'table' && !node.attrs.trim()) blocks.push(tableMarkdown(node, problems));
    else if (node.tag === 'div' && hasClass(node, 'callout')) blocks.push(calloutMarkdown(node, problems));
    else problems.push(`unsupported <${node.tag}${hasClass(node, 'callout') ? ' class="callout"' : ''}> block`);
  }
  return blocks.join('\n\n');
}

// Structure-and-text fingerprint used to prove a conversion lost nothing:
// block and inline tags (links keep their href) plus whitespace-collapsed text.
export function canonicalBody(nodes) {
  const walk = node => {
    if (node.tag === '#text') return decodeEntities(node.text).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    if (node.tag === '#comment') return '';
    const tag = node.tag === 'b' ? 'strong' : node.tag === 'i' ? 'em' : node.tag;
    const open = tag === 'a' ? `<a href="${attr(node, 'href')}">` : `<${tag}>`;
    return `${open}${node.children.map(walk).join('')}</${tag}>`;
  };
  return nodes.map(walk).join('').replace(/\s+/g, ' ')
    .replace(/\s*(<\/?(?:h1|h2|h3|p|ul|ol|li|blockquote|br|table|thead|tbody|tr|th|td|div|section|aside)>)\s*/g, '$1').trim();
}

function parseDisplayDate(text) {
  const iso = text.match(/\b(\d{4}-\d{2}-\d{2})\b/);
  if (iso) return iso[1];
  const long = text.match(/\b(\d{1,2}) ([A-Za-z]+) (\d{4})\b/);
  const month = long ? MONTHS.indexOf(long[2].toLowerCase()) : -1;
  return month >= 0 ? `${long[3]}-${String(month + 1).padStart(2, '0')}-${long[1].padStart(2, '0')}` : null;
}

// Each list item must be one link, optionally followed by a full stop (which
// the generated lists do not repeat). A label is kept unless it equals the
// default label the renderer derives from the URL.
function listLinks(list, problems) {
  return elements(list.children).map(item => {
    const parts = item.tag === 'li' ? elements(item.children).filter(part => !(part.tag === 'span' && hasClass(part, 'muted') && /^\(last verified /.test(clean(textOf(part))))) : [];
    const link = parts[0]?.tag === 'a' ? parts[0] : null;
    if (!link || parts.length > 2 || (parts[1] && !(parts[1].tag === '#text' && parts[1].text.trim() === '.'))) {
      problems.push('a source or related list item is not a single link');
      return null;
    }
    const href = attr(link, 'href');
    const label = clean(textOf(link));
    return label && label !== href.replace(/^https:\/\//, '') ? `${label} | ${href}` : href;
  }).filter(Boolean);
}

function scalar(value) {
  if (Array.isArray(value)) return value.length ? value.join(', ') : null;
  if (value === null || value === undefined) return null;
  return clean(String(value)) || null;
}

export function serializeSource(meta, body) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(meta)) {
    if (Array.isArray(value)) lines.push(`${key}:`, ...value.map(item => `  - ${item}`));
    else lines.push(`${key}: ${value}`);
  }
  return `${lines.join('\n')}\n---\n${body}\n`;
}

// Record IDs for pages whose markup does not carry one, from the hubs'
// priority usage ledgers (record ID -> public_path).
export function ledgerRecordIds(ledgerFiles = readdirSync('editorial').map(name => join('editorial', name, 'PRIORITY_USAGE_LEDGER.json')).filter(existsSync)) {
  const ids = new Map();
  for (const file of ledgerFiles) {
    for (const [id, record] of Object.entries(JSON.parse(readFileSync(file, 'utf8')).records || {})) {
      const path = record?.public_path?.match(/^website\/([a-z]+\/[a-z0-9-]+)\/index\.html$/)?.[1];
      if (path && ID.test(id)) ids.set(path, id);
    }
  }
  return ids;
}

export function extractArticle(html, { hub, slug, ledgerId = null }) {
  const { root, problems } = parseHtml(html);
  const article = find(root, node => node.tag === 'article' && hasClass(node, 'prose'));
  if (!article) return { problems: [...problems, 'no <article class="prose"> element'] };
  const comment = find(root, node => node.tag === '#comment' && /record_id|topic_id|content_type/.test(node.text));
  const provenance = comment ? parseProvenance(comment.text) : {};
  if (comment && !provenance) problems.push('provenance comment is not valid JSON');
  const data = provenance || {};

  // Split the article into body, generated sections and the summary callout.
  const children = article.children.filter(node => !(node.tag === '#comment' && node === comment));
  let sources = [];
  let related = [];
  let summary = null;
  let closing = null;
  let afterSources = false;
  let sourcesHeading = null;
  let relatedFirst = false;
  const body = [];
  const after = [];
  for (let index = 0; index < children.length; index += 1) {
    const node = children[index];
    if (node.tag === 'h2' && /^(Sources|Related Mellorca reading)\b/i.test(clean(textOf(node)))) {
      const next = children.slice(index + 1).find(child => child.tag !== '#text' || child.text.trim());
      // A Sources heading over prose ("Sources and method") is body text, not the sources list.
      if (next?.tag !== 'ul' && /^Sources/i.test(clean(textOf(node)))) { (afterSources ? after : body).push(node); continue; }
      if (next?.tag !== 'ul') { problems.push(`"${clean(textOf(node))}" is not followed by a list`); continue; }
      if (after.length) problems.push('the sources section is split by other content');
      afterSources = true;
      if (/^Sources/i.test(clean(textOf(node)))) {
        // Related reading before the sources is kept as related_position: before_sources.
        if (related.length) relatedFirst = true;
        // Any other heading than the generated one is kept as sources_heading.
        if (clean(textOf(node)) !== 'Sources and further reading') sourcesHeading = clean(textOf(node));
        sources = sources.concat(listLinks(next, problems));
      } else related = related.concat(listLinks(next, problems));
      index = children.indexOf(next);
      continue;
    }
    if (node.tag === 'div' && hasClass(node, 'callout') && /^Article summary/i.test(clean(textOf(node)))) {
      const text = find(node, child => (child.tag === 'span' && hasClass(child, 'muted')) || child.tag === 'p');
      summary = text ? clean(textOf(text)) : null;
      if (!summary) problems.push('article summary callout has no text');
      continue;
    }
    if (afterSources) {
      if (node.tag !== '#text' || node.text.trim()) after.push(node);
      continue;
    }
    body.push(node);
  }

  // A single callout after the sources becomes closing_title/closing_text. Any other
  // content there is kept as body text after a ":::sources" marker (W2 slice 5e).
  let tail = [];
  const closingMarkdown = after.length === 1 && after[0].tag === 'div' && hasClass(after[0], 'callout') ? calloutMarkdown(after[0], problems).split('\n') : null;
  if (closingMarkdown?.length === 3) {
    closing = { title: closingMarkdown[0].replace(/^:::callout /, ''), text: closingMarkdown[1] };
    try {
      if (canonicalBody(parseHtml(renderCallout(closing.title, closing.text)).root.children) !== canonicalBody(after)) problems.push('closing callout does not render back identically');
    } catch (error) {
      problems.push(error.message);
    }
  } else tail = after;

  const bodyProblems = [];
  const parts = [body, ...(tail.length ? [tail] : [])].map(nodes => ({ nodes, markdown: blockMarkdown(nodes, bodyProblems) }));
  const markdown = parts.map(part => part.markdown).join(`\n\n${SOURCES_MARKER}\n\n`);
  problems.push(...new Set(bodyProblems));
  if (!bodyProblems.length) {
    for (const part of parts) {
      try {
        const { root: rendered } = parseHtml(renderMarkdown(part.markdown, `${hub}/${slug}`));
        if (canonicalBody(rendered.children) !== canonicalBody(part.nodes)) problems.push('body does not render back identically');
      } catch (error) {
        problems.push(error.message);
      }
    }
  }

  const h1 = find(root, node => node.tag === 'h1');
  const lead = find(root, node => node.tag === 'p' && hasClass(node, 'lead'));
  const eyebrow = find(root, node => hasClass(node, 'eyebrow'));
  const crumbs = find(root, node => hasClass(node, 'breadcrumbs'));
  const detail = find(root, node => hasClass(node, 'detail-meta'));
  const description = find(root, node => node.tag === 'meta' && attr(node, 'name') === 'description');
  const aside = find(root, node => node.tag === 'aside' && hasClass(node, 'side-card'));
  const eyebrowText = eyebrow ? clean(textOf(eyebrow)) : '';
  const eyebrowId = eyebrowText.match(/^([A-Z]{2,5}-\d+)\b/)?.[1];
  const crumbLink = crumbs ? find(crumbs, node => node.tag === 'a') : null;
  const crumbCategory = crumbs ? clean(crumbs.children.filter(node => node.tag === '#text').map(textOf).join(' ')) : '';
  const shownDate = detail ? parseDisplayDate(textOf(detail)) : null;

  const meta = {
    hub,
    record_id: [data.record_id, data.topic_id, data.content_id, eyebrowId, ledgerId].map(scalar).find(value => value && ID.test(value)),
    slug,
    title: h1 ? clean(textOf(h1)) : null,
    description: description ? clean(attr(description, 'content')) : null,
    lead: lead ? clean(textOf(lead)) : null,
    category: crumbCategory || scalar(data.category) || scalar(data.pattern_family) || scalar(data.commercial_domain)
      || scalar(data.problem_domain) || (eyebrowText && !eyebrowId ? eyebrowText : null),
    published_date: scalar(data.published_date) || shownDate,
    updated_date: scalar(data.updated_date) || scalar(data.published_date) || shownDate,
  };
  for (const key of Object.keys(meta)) if (!meta[key]) problems.push(`could not determine ${key}`);
  if (eyebrowText && eyebrowText !== `${meta.category} · ${HUBS[hub].label}`) meta.eyebrow = eyebrowText;
  if (crumbLink && clean(textOf(crumbLink)) !== HUBS[hub].label) meta.breadcrumb_label = clean(textOf(crumbLink));
  // Some pages (older Impact ones) show a fuller category in the byline than in the breadcrumbs.
  const bylineSpans = detail ? elements(detail.children).filter(node => node.tag === 'span').map(node => clean(textOf(node))) : [];
  if (bylineSpans.length === 5 && bylineSpans[2] && bylineSpans[2] !== meta.category) meta.byline_category = bylineSpans[2];
  const pageTitle = clean(textOf(find(root, node => node.tag === 'title') || { tag: '#text', text: '' }));
  if (pageTitle && pageTitle !== `${meta.title} | ${HUBS[hub].publisher}`) meta.page_title = pageTitle;
  const tags = aside ? findAll(aside, node => node.tag === 'span' && hasClass(node, 'tag')).map(node => clean(textOf(node))) : [];
  if (tags.length) meta.tags = tags;
  const cta = aside ? find(aside, node => node.tag === 'a' && hasClass(node, 'btn')) : null;
  if (cta) { meta.cta_label = clean(textOf(cta)); meta.cta_href = attr(cta, 'href'); }
  // A side card other than the default record card keeps its heading and note.
  const sideHeading = aside ? find(aside, node => node.tag === 'h3') : null;
  // The default card shows the hub and the category (record IDs are never shown to readers).
  const sideNotes = aside ? elements(aside.children).filter(node => node.tag === 'p' && !/^[A-Z]{2,5}-\d+$/.test(clean(textOf(node))) && clean(textOf(node)) !== meta.category) : [];
  if (sideHeading && ![HUBS[hub].label, `${HUBS[hub].label} record`].includes(clean(textOf(sideHeading)))) {
    meta.side_title = clean(textOf(sideHeading));
    if (sideNotes.length === 1) {
      meta.side_text = inlineMarkdown(sideNotes[0].children, problems).trim();
      const cardParts = elements(aside.children);
      if (cardParts.indexOf(sideNotes[0]) < cardParts.findIndex(node => hasClass(node, 'tag-row'))) meta.side_text_position = 'above_tags';
    }
  } else if (sideNotes.length) {
    meta.side_notes = sideNotes.map(node => inlineMarkdown(node.children, problems).trim());
  }
  for (const key of [...PROVENANCE_FIELDS.common, ...PROVENANCE_FIELDS[hub]]) {
    const value = scalar(data[key]);
    if (value && !(key === 'topic_id' && value === meta.record_id)) meta[key] = value;
  }
  // Sources that exist only in the provenance comment would become a new visible list.
  if (!sources.length && Array.isArray(data.sources) && data.sources.length) problems.push('sources are only listed in the provenance comment');
  meta.sources = sources;
  if (related.length) meta.related = related;
  if (relatedFirst) meta.related_position = 'before_sources';
  if (sourcesHeading) meta.sources_heading = sourcesHeading;
  if (closing) { meta.closing_title = closing.title; meta.closing_text = closing.text; }
  if (summary) meta.summary = summary;
  // Older pages have no side card; they use the plain layout, whose hero is checked below.
  if (!aside) meta.layout = 'plain';
  else if (meta.record_id && canonicalBody(parseHtml(renderSideCard(meta)).root.children) !== canonicalBody([aside])) {
    problems.push('side card does not render back identically');
  }
  // The generated hero (breadcrumbs, eyebrow, title, lead, byline and date) must match the page's.
  const hero = find(root, node => node.tag === 'section' && hasClass(node, 'detail-hero'));
  if (!hero) problems.push('page has no detail-hero section');
  else if (Object.keys(meta).every(key => meta[key]) && meta.sources.length) {
    try {
      const renderedHero = find(parseHtml(renderArticlePage(meta, '')).root, node => node.tag === 'section' && hasClass(node, 'detail-hero'));
      if (canonicalBody([renderedHero]) !== canonicalBody([hero])) problems.push('hero does not render back identically');
    } catch (error) {
      problems.push(error.message);
    }
  }

  return finishSource(meta, markdown, { hub, slug, problems });
}

// Serializes a source and proves every front-matter value parses back unchanged
// and the source passes the same validation as any other source.
function finishSource(meta, markdown, { hub, slug, problems }) {
  const text = serializeSource(Object.fromEntries(Object.entries(meta).filter(([, value]) => value)), markdown);
  try {
    const parsed = parseFrontMatter(text, `${hub}/${slug}.md`);
    validateArticle(parsed.meta, `${hub}/${slug}.md`);
    for (const [key, value] of Object.entries(meta)) {
      if (value && JSON.stringify(parsed.meta[key]) !== JSON.stringify(value)) problems.push(`${key} does not survive a front-matter round trip`);
    }
  } catch (error) {
    problems.push(error.message.replace(/^[^:]+: /, ''));
  }
  return { meta, body: markdown, text, problems };
}

// C-03 slice 2: builds the source for a new daily batch article straight from the
// synthesized article (its fields and provider body), with no page in between.
// The source is the one extractArticle would derive from the controller's own
// page: the plain layout, the category as eyebrow and the description as lead
// and summary. The body must render back to the same structure and text.
export function articleSource(article) {
  const problems = [];
  const { hub, slug } = article;
  if (!HUBS[hub]) return { problems: [`unknown hub: ${hub}`] };
  const data = article.provenance || {};
  const meta = {
    hub,
    record_id: scalar(article.record_id),
    slug,
    title: scalar(article.title),
    description: scalar(article.description),
    lead: scalar(article.description),
    category: scalar(article.category),
    published_date: scalar(article.published_date),
    updated_date: scalar(article.published_date),
  };
  for (const key of Object.keys(meta)) if (!meta[key]) problems.push(`could not determine ${key}`);
  if (meta.record_id && !ID.test(meta.record_id)) problems.push(`record_id is not a record ID: ${meta.record_id}`);
  // The controller's page shows the category as its eyebrow, not '<record_id> · <Hub>'.
  if (meta.category) meta.eyebrow = meta.category;
  for (const key of [...PROVENANCE_FIELDS.common, ...PROVENANCE_FIELDS[hub]]) {
    const value = scalar(data[key]);
    if (value && !(key === 'topic_id' && value === meta.record_id)) meta[key] = value;
  }
  // The controller's page lists each source as a link labelled with its full URL.
  meta.sources = (article.sources || []).map(url => `${url} | ${url}`);
  meta.summary = meta.description;
  meta.layout = 'plain';
  const { root, problems: parseProblems } = parseHtml(String(article.body_html || ''));
  problems.push(...parseProblems);
  const bodyProblems = [];
  const markdown = blockMarkdown(root.children, bodyProblems);
  problems.push(...new Set(bodyProblems));
  if (!markdown.trim()) problems.push('article body is empty');
  if (!bodyProblems.length) {
    try {
      const { root: rendered } = parseHtml(renderMarkdown(markdown, `${hub}/${slug}`));
      if (canonicalBody(rendered.children) !== canonicalBody(root.children)) problems.push('body does not render back identically');
    } catch (error) {
      problems.push(error.message);
    }
  }
  return finishSource(meta, markdown, { hub, slug, problems });
}

export function extractHub(hub, { siteRoot = 'website', ledgerIds = ledgerRecordIds() } = {}) {
  const directory = join(resolve(siteRoot), hub);
  const results = [];
  for (const slug of readdirSync(directory).sort()) {
    const page = join(directory, slug, 'index.html');
    if (!existsSync(page)) continue;
    const html = readFileSync(page, 'utf8');
    if (html.includes('<meta name="generator" content="mellorca-article-source/')) continue;
    results.push({ slug, ...extractArticle(html, { hub, slug, ledgerId: ledgerIds.get(`${hub}/${slug}`) }) });
  }
  return results;
}

// Writes a source for each given hand-authored page that extracts cleanly and
// reports the rest, which stay hand-authored. Used by the controller batch
// writer so new daily pages are source-backed from the day they publish.
export function adoptPages(pages, { sourceRoot = 'editorial/articles', ledgerIds = ledgerRecordIds() } = {}) {
  const adopted = [];
  const skipped = [];
  for (const page of pages) {
    const match = page.replace(/\\/g, '/').match(/^website\/([a-z]+)\/([a-z0-9-]+)\/index\.html$/);
    if (!match || !HUBS[match[1]]) { skipped.push({ page, problems: ['not a website/<hub>/<slug>/index.html article page'] }); continue; }
    const [, hub, slug] = match;
    const source = join(sourceRoot, hub, `${slug}.md`);
    if (!existsSync(page)) { skipped.push({ page, problems: ['page does not exist'] }); continue; }
    if (existsSync(source)) { skipped.push({ page, problems: [`${source} already exists`] }); continue; }
    const html = readFileSync(page, 'utf8');
    if (html.includes('<meta name="generator" content="mellorca-article-source/')) { skipped.push({ page, problems: ['page is already generated'] }); continue; }
    const result = extractArticle(html, { hub, slug, ledgerId: ledgerIds.get(`${hub}/${slug}`) });
    if (result.problems.length) { skipped.push({ page, problems: [...new Set(result.problems)] }); continue; }
    mkdirSync(join(sourceRoot, hub), { recursive: true });
    writeFileSync(source, result.text, 'utf8');
    adopted.push({ page, source: source.replace(/\\/g, '/') });
  }
  return { adopted, skipped };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url)) && process.argv[2] === '--from-articles') {
  // Reads a JSON array of synthesized articles on stdin and prints, per article,
  // its source text (or null) and any problems. Writes nothing.
  // Read stdin as a stream: readFileSync(0) fails with EAGAIN on a large pipe.
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  const articles = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  console.log(JSON.stringify(articles.map(item => {
    const result = articleSource(item);
    const problems = [...new Set(result.problems)];
    return { slug: item.slug, text: problems.length ? null : result.text, problems };
  })));
} else if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url)) && process.argv[2] === '--adopt') {
  console.log(JSON.stringify(adoptPages(process.argv.slice(3))));
} else if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const write = process.argv.includes('--write');
  const hubs = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
  for (const hub of hubs) if (!HUBS[hub]) throw new Error(`unknown hub: ${hub}`);
  if (write && !hubs.length) throw new Error('--write needs at least one hub');
  for (const hub of hubs.length ? hubs : Object.keys(HUBS).filter(name => existsSync(join('website', name)))) {
    const results = extractHub(hub);
    const cleanPages = results.filter(result => !result.problems.length);
    const reasons = new Map();
    for (const result of results) for (const problem of new Set(result.problems)) reasons.set(problem, (reasons.get(problem) || 0) + 1);
    console.log(`${hub}: ${cleanPages.length} of ${results.length} hand-authored pages extract cleanly`);
    for (const [reason, count] of [...reasons].sort((a, b) => b[1] - a[1])) console.log(`  ${count} × ${reason}`);
    if (write) {
      mkdirSync(join('editorial/articles', hub), { recursive: true });
      for (const result of cleanPages) writeFileSync(join('editorial/articles', hub, `${result.slug}.md`), result.text, 'utf8');
      console.log(`  wrote ${cleanPages.length} source(s) to editorial/articles/${hub}/`);
    }
  }
}
