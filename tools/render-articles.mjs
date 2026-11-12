// Renders editorial/articles/<hub>/<slug>.md into website/<hub>/<slug>/index.html.
// --check fails on drift; --migrate allows replacing an existing hand-authored
// page at the same URL (the only way a source may take over a live page).
// Each source's canonical URL is also kept in website/sitemap.xml, and each
// source has a listing card on its hub page (website/<hub>/index.html).
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { GENERATOR, HUBS, SITE_ORIGIN, escapeHtml, renderArticleSource, setSourceVerification } from './article-source.mjs';

const MARKER = `<meta name="generator" content="${GENERATOR}">`;

function sourceFiles(sourceRoot) {
  if (!existsSync(sourceRoot)) return [];
  const files = [];
  for (const hub of readdirSync(sourceRoot).sort()) {
    const directory = join(sourceRoot, hub);
    if (!statSync(directory).isDirectory()) continue;
    if (!HUBS[hub]) throw new Error(`${relative(process.cwd(), directory)}: unknown hub directory`);
    for (const name of readdirSync(directory).sort()) {
      if (name.endsWith('.md')) files.push(join(directory, name));
    }
  }
  return files;
}

function generatedPages(siteRoot) {
  const pages = [];
  for (const hub of Object.keys(HUBS)) {
    const directory = join(siteRoot, hub);
    if (!existsSync(directory)) continue;
    for (const slug of readdirSync(directory)) {
      const page = join(directory, slug, 'index.html');
      if (existsSync(page) && readFileSync(page, 'utf8').includes(MARKER)) pages.push(page);
    }
  }
  return pages;
}

// Appends a <url> entry for every source URL the sitemap lacks. Existing
// entries and their order are left alone, so hand-maintained URLs are safe.
function syncSitemap(file, urls, check, problems) {
  if (!urls.length) return false;
  if (!existsSync(file)) {
    problems.push(`${relative(process.cwd(), file)} is missing; article URLs need a sitemap`);
    return false;
  }
  const sitemap = readFileSync(file, 'utf8');
  if (sitemap.split('</urlset>').length !== 2) throw new Error(`${relative(process.cwd(), file)}: expected exactly one </urlset>`);
  const listed = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]));
  const missing = urls.filter(url => !listed.has(url));
  if (!missing.length) return false;
  if (check) {
    for (const url of missing) problems.push(`${relative(process.cwd(), file)} lacks ${url}; run npm run articles:render`);
    return false;
  }
  writeFileSync(file, sitemap.replace('</urlset>', `${missing.map(url => `<url><loc>${url}</loc></url>\n`).join('')}</urlset>`), 'utf8');
  return true;
}

const HUB_GRID = '<div class="grid grid-2">';

// Same card markup the controller batch writer inserts on hub pages.
export function hubCard(meta) {
  return `<a class="card card-link" href="/${meta.hub}/${meta.slug}/"><span class="kicker">${escapeHtml(meta.category)}</span>`
    + `<h3>${escapeHtml(meta.title)}</h3><p>${escapeHtml(meta.description)}</p></a>`;
}

// Inserts a listing card at the top of the hub grid for every source the hub
// page does not link yet, newest first. Existing cards and their order are
// left alone, so hand-maintained listings are safe.
function syncHubListings(site, metas, check, problems) {
  const byHub = new Map();
  for (const meta of metas) byHub.set(meta.hub, [...(byHub.get(meta.hub) || []), meta]);
  let updated = 0;
  for (const [hub, entries] of [...byHub].sort(([a], [b]) => a.localeCompare(b))) {
    const file = join(site, hub, 'index.html');
    const label = relative(process.cwd(), file);
    if (!existsSync(file)) {
      problems.push(`${label} is missing; ${hub} articles need a hub listing page`);
      continue;
    }
    const page = readFileSync(file, 'utf8');
    if (page.split(HUB_GRID).length !== 2) throw new Error(`${label}: expected exactly one ${HUB_GRID} listing grid`);
    const missing = entries.filter(meta => !page.includes(`href="/${hub}/${meta.slug}/"`))
      .sort((a, b) => b.published_date.localeCompare(a.published_date) || a.slug.localeCompare(b.slug));
    if (!missing.length) continue;
    if (check) {
      for (const meta of missing) problems.push(`${label} lacks a listing card for /${hub}/${meta.slug}/; run npm run articles:render`);
      continue;
    }
    writeFileSync(file, page.replace(HUB_GRID, HUB_GRID + missing.map(hubCard).join('')), 'utf8');
    updated += 1;
  }
  return updated;
}

export function renderArticles({ sourceRoot = 'editorial/articles', siteRoot = 'website', check = false, migrate = false } = {}) {
  const sources = resolve(sourceRoot);
  const site = resolve(siteRoot);
  const problems = [];
  const expected = new Set();
  const urls = [];
  const metas = [];
  let written = 0;

  const verificationFile = join(dirname(sources), 'source-verification.json');
  setSourceVerification(existsSync(verificationFile) ? JSON.parse(readFileSync(verificationFile, 'utf8')).sources : {});

  for (const file of sourceFiles(sources)) {
    const label = relative(process.cwd(), file);
    const { meta, html } = renderArticleSource(readFileSync(file, 'utf8'), label);
    const hubDirectory = relative(sources, file).split(/[\\/]/)[0];
    if (meta.hub !== hubDirectory || `${meta.slug}.md` !== file.split(/[\\/]/).pop()) {
      throw new Error(`${label}: path must be ${sourceRoot}/${meta.hub}/${meta.slug}.md`);
    }
    const target = join(site, meta.hub, meta.slug, 'index.html');
    expected.add(target);
    urls.push(`${SITE_ORIGIN}/${meta.hub}/${meta.slug}/`);
    metas.push(meta);
    const current = existsSync(target) ? readFileSync(target, 'utf8') : null;
    if (current === html) continue;
    if (check) {
      problems.push(`${relative(process.cwd(), target)} is ${current === null ? 'missing' : 'out of date'}; run npm run articles:render`);
      continue;
    }
    if (current !== null && !current.includes(MARKER) && !migrate) {
      throw new Error(`${relative(process.cwd(), target)} is a hand-authored page; re-run with --migrate to replace it from ${label}`);
    }
    mkdirSync(join(site, meta.hub, meta.slug), { recursive: true });
    writeFileSync(target, html, 'utf8');
    written += 1;
  }

  for (const page of generatedPages(site)) {
    if (!expected.has(page)) problems.push(`${relative(process.cwd(), page)} was generated from a source that no longer exists`);
  }
  const sitemapUpdated = syncSitemap(join(site, 'sitemap.xml'), urls, check, problems);
  const hubsUpdated = syncHubListings(site, metas, check, problems);
  if (problems.length) throw new Error(`Article sources and website pages differ:\n- ${problems.join('\n- ')}`);
  return { sources: expected.size, written, sitemapUpdated, hubsUpdated };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const check = process.argv.includes('--check');
  const result = renderArticles({ check, migrate: process.argv.includes('--migrate') });
  console.log(check
    ? `Article sources: ${result.sources} checked; website pages match.`
    : `Article sources: ${result.sources} rendered; ${result.written} page(s) written${result.sitemapUpdated ? '; sitemap updated' : ''}${result.hubsUpdated ? `; ${result.hubsUpdated} hub listing(s) updated` : ''}.`);
}
