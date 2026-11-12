// Site integrity checks over the canonical website/ tree and article sources:
// - every internal link resolves to a page, a file or a _redirects rule;
// - sitemap.xml lists every indexable page exactly once and nothing else;
// - no two pages share a canonical URL;
// - no two pages share a <title> (a warning only, so one duplicate headline
//   never stops a daily content period);
// - no two article sources share a record_id or a hub/slug.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { SITE_ORIGIN, parseFrontMatter } from './article-source.mjs';

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out); else out.push(path);
  }
  return out;
}

function routeOf(siteRoot, file) {
  const rel = relative(siteRoot, file).split('\\').join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

function redirectSources(siteRoot) {
  const file = join(siteRoot, '_redirects');
  if (!existsSync(file)) return new Set();
  return new Set(readFileSync(file, 'utf8').split(/\r?\n/)
    .map(line => line.trim()).filter(line => line && !line.startsWith('#'))
    .map(line => line.split(/\s+/)[0]));
}

function resolves(path, routes, files, redirects) {
  if (routes.has(path) || files.has(path) || redirects.has(path)) return true;
  if (!path.endsWith('/') && (routes.has(`${path}/`) || redirects.has(`${path}/`))) return true;
  if (path.startsWith('/api/')) return true; // Pages Functions under functions/api/
  return false;
}

export function checkSiteIntegrity({ siteRoot = 'website', sourceRoot = 'editorial/articles' } = {}) {
  const site = resolve(siteRoot);
  const problems = [];
  const warnings = [];
  const all = walk(site);
  const pages = all.filter(file => file.endsWith('.html'));
  const routes = new Set(pages.map(file => routeOf(site, file)));
  const files = new Set(all.map(file => `/${relative(site, file).split('\\').join('/')}`));
  const redirects = redirectSources(site);

  const canonicals = new Map();
  const titles = new Map();
  const indexable = new Set();
  for (const file of pages) {
    const rel = relative(process.cwd(), file);
    const html = readFileSync(file, 'utf8');
    const text = html.replace(/<!--[\s\S]*?-->/g, '');
    for (const match of text.matchAll(/\shref="([^"]*)"/g)) {
      const href = match[1];
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const path = decodeURI(href.split('#')[0].split('?')[0]);
      if (path && !resolves(path, routes, files, redirects)) problems.push(`${rel}: internal link ${href} does not resolve`);
    }
    if (routeOf(site, file) === '/404.html' || /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(text)) continue;
    const canonical = text.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (!canonical) { problems.push(`${rel}: missing canonical link`); continue; }
    const expected = `${SITE_ORIGIN}${routeOf(site, file)}`;
    if (canonical !== expected) problems.push(`${rel}: canonical ${canonical} should be ${expected}`);
    if (canonicals.has(canonical)) problems.push(`${rel}: canonical ${canonical} also used by ${canonicals.get(canonical)}`);
    canonicals.set(canonical, rel);
    indexable.add(canonical);
    const title = text.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
    if (!title) problems.push(`${rel}: missing <title>`);
    else if (titles.has(title)) warnings.push(`${rel}: <title> "${title}" also used by ${titles.get(title)}`);
    else titles.set(title, rel);
  }

  const sitemapFile = join(site, 'sitemap.xml');
  if (!existsSync(sitemapFile)) problems.push('website/sitemap.xml is missing');
  else {
    const locs = [...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    const seen = new Set();
    for (const loc of locs) {
      if (seen.has(loc)) problems.push(`sitemap.xml: ${loc} is listed more than once`);
      seen.add(loc);
      if (!indexable.has(loc)) problems.push(`sitemap.xml: ${loc} is not an indexable page`);
    }
    for (const url of indexable) if (!seen.has(url)) problems.push(`sitemap.xml: indexable page ${url} is missing`);
  }

  const source = resolve(sourceRoot);
  if (existsSync(source)) {
    const ids = new Map();
    const slugs = new Map();
    for (const file of walk(source).filter(path => path.endsWith('.md'))) {
      const rel = relative(process.cwd(), file);
      const { meta } = parseFrontMatter(readFileSync(file, 'utf8'), rel);
      if (ids.has(meta.record_id)) problems.push(`${rel}: record_id ${meta.record_id} also used by ${ids.get(meta.record_id)}`);
      ids.set(meta.record_id, rel);
      const key = `${meta.hub}/${meta.slug}`;
      if (slugs.has(key)) problems.push(`${rel}: ${key} also used by ${slugs.get(key)}`);
      slugs.set(key, rel);
    }
  }

  return { pages: pages.length, indexable: indexable.size, problems, warnings };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const result = checkSiteIntegrity();
  for (const warning of result.warnings) console.warn(`warning: ${warning}`);
  for (const problem of result.problems) console.error(problem);
  console.log(`Site integrity: ${result.pages} pages, ${result.indexable} indexable, ${result.problems.length} problem(s), ${result.warnings.length} warning(s).`);
  process.exit(result.problems.length ? 1 : 0);
}
