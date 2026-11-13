// Give every article source without a `related` list three
// "Related Mellorca reading" links, chosen from the other article sources by
// shared words in title, category, tags and description, preferring the same
// hub and category. Sources that already have `related` are left alone, so
// hand-picked lists are safe. Run before `npm run articles:render`.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { parseFrontMatter } from './article-source.mjs';

const RELATED_COUNT = 3;
const STOPWORDS = new Set('a an and are as at be but by can do does for from has have how in into is it its more not of on or our that the their them they this to what when where which who why will with without you your business businesses'.split(' '));

export function words(meta) {
  const text = [meta.title, meta.category, ...(meta.tags || []), meta.description].join(' ').toLowerCase();
  return new Set(text.split(/[^a-z0-9]+/).filter(word => word.length > 2 && !STOPWORDS.has(word)));
}

export function score(a, b) {
  let shared = 0;
  for (const word of a.words) if (b.words.has(word)) shared += 1;
  const overlap = shared / (a.words.size + b.words.size - shared || 1);
  return overlap + (a.hub === b.hub ? 0.2 : 0) + (a.category === b.category ? 0.15 : 0);
}

export function pickRelated(article, pool, count = RELATED_COUNT) {
  const linked = new Set([...(article.body || '').matchAll(/\]\((\/[a-z0-9/-]+\/)\)/g)].map(match => match[1]));
  return pool
    .filter(other => other.url !== article.url && !linked.has(other.url))
    .map(other => ({ other, value: score(article, other) }))
    .sort((x, y) => y.value - x.value || x.other.url.localeCompare(y.other.url))
    .slice(0, count)
    .map(({ other }) => `${other.title.replace(/\.$/, "")} | ${other.url}`);
}

export function withRelated(text, entries) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const end = lines.indexOf('---', 1);
  const block = ['related:', ...entries.map(entry => `  - ${entry}`)];
  const summary = lines.findIndex((line, index) => index > 0 && index < end && line.startsWith('summary:'));
  lines.splice(summary > 0 ? summary : end, 0, ...block);
  return lines.join('\n');
}

export function loadArticles(root) {
  const articles = [];
  for (const hub of readdirSync(root).sort()) {
    for (const name of readdirSync(join(root, hub)).filter(file => file.endsWith('.md')).sort()) {
      const file = join(root, hub, name);
      const text = readFileSync(file, 'utf8');
      const { meta, body } = parseFrontMatter(text, file);
      articles.push({ file, text, body, hub: meta.hub, category: meta.category, title: meta.title, related: meta.related, url: `/${meta.hub}/${meta.slug}/`, words: words(meta) });
    }
  }
  return articles;
}

export function addRelatedLinks(root = 'editorial/articles') {
  const articles = loadArticles(resolve(root));
  let updated = 0;
  for (const article of articles) {
    if (article.related) continue;
    const entries = pickRelated(article, articles);
    if (entries.length < RELATED_COUNT) continue;
    writeFileSync(article.file, withRelated(article.text, entries), 'utf8');
    updated += 1;
  }
  return { articles: articles.length, updated };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const { articles, updated } = addRelatedLinks(process.argv[2] || 'editorial/articles');
  console.log(`Related links: ${updated} of ${articles} article sources gained ${RELATED_COUNT} related links.`);
}
