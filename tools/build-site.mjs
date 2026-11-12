import {
  cpSync,
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { resolve, relative, join, sep } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { renderLayout } from './site-layout.mjs';
import { createHash } from 'node:crypto';

export function sharedAssetUrls(directory) {
  return new Map(['/assets/css/site.css', '/assets/js/site.js'].map(path => {
    const digest = createHash('sha256').update(readFileSync(join(directory, path.slice(1)))).digest('hex').slice(0, 16);
    return [path, `${path}?v=${digest}`];
  }));
}

export const GTM_CONTAINER_ID = 'GTM-KQHLHG8L';
export const GTM_CSP_HASH = 'sha256-luc3+syfE+DupLYucTD+e8fuBDRvbFbnKCUvX1HVey8=';

export const GTM_HEAD = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQHLHG8L');</script>
<!-- End Google Tag Manager -->`;

export const GTM_BODY = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQHLHG8L"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

export function listFiles(root) {
  const files = [];
  for (const name of readdirSync(root)) {
    const absolute = join(root, name);
    const info = statSync(absolute);
    if (info.isDirectory()) files.push(...listFiles(absolute));
    else files.push(absolute);
  }
  return files;
}

function countMatches(text, expression) {
  return [...text.matchAll(expression)].length;
}

function assertSourceIsClean(file, html) {
  const forbidden = [
    /googletagmanager\.com\/gtm\.js/gi,
    /googletagmanager\.com\/ns\.html/gi,
    /<!--\s*Google Tag Manager/gi,
    /GTM-[A-Z0-9]+/g,
  ];
  for (const expression of forbidden) {
    if (expression.test(html)) {
      throw new Error(`${file}: source HTML already contains a Tag Manager marker; refusing duplicate injection`);
    }
  }

  const headCount = countMatches(html, /<head\b[^>]*>/gi);
  const bodyCount = countMatches(html, /<body\b[^>]*>/gi);
  if (headCount !== 1 || bodyCount !== 1) {
    throw new Error(`${file}: expected exactly one opening <head> and one opening <body>; found head=${headCount}, body=${bodyCount}`);
  }
}

function inject(html) {
  return html
    .replace(/<head\b[^>]*>/i, (tag) => `${tag}\n${GTM_HEAD}`)
    .replace(/<body\b[^>]*>/i, (tag) => `${tag}\n${GTM_BODY}`);
}

function assertBuiltPage(file, html) {
  const checks = [
    [GTM_CONTAINER_ID, 2],
    ['https://www.googletagmanager.com/gtm.js', 1],
    ['https://www.googletagmanager.com/ns.html', 1],
    ['<!-- Google Tag Manager -->', 1],
    ['<!-- Google Tag Manager (noscript) -->', 1],
  ];

  for (const [marker, expected] of checks) {
    const actual = html.split(marker).length - 1;
    if (actual !== expected) {
      throw new Error(`${file}: expected ${expected} occurrence(s) of ${marker}; found ${actual}`);
    }
  }

  if (!/<head\b[^>]*>\s*<!-- Google Tag Manager -->/i.test(html)) {
    throw new Error(`${file}: GTM bootstrap is not immediately after the opening <head>`);
  }
  if (!/<body\b[^>]*>\s*<!-- Google Tag Manager \(noscript\) -->/i.test(html)) {
    throw new Error(`${file}: GTM noscript block is not immediately after the opening <body>`);
  }
}

// IMPROVEMENTS #258: give every sitemap URL a <lastmod> taken from the page's own
// updated_date (provenance comment or front-matter render), at build time only,
// so the source sitemap that batch PRs edit stays a plain list of URLs.
export function sitemapWithLastmod(sitemapXml, pageFor) {
  return sitemapXml.replace(/<url><loc>([^<]+)<\/loc><\/url>/g, (whole, loc) => {
    const html = pageFor(loc);
    const date = html && (html.match(/updated_date"?:\s*"?(\d{4}-\d{2}-\d{2})/) || [])[1];
    return date ? `<url><loc>${loc}</loc><lastmod>${date}</lastmod></url>` : whole;
  });
}

// IMPROVEMENTS #259: RSS 2.0 feeds per hub and site-wide, built from each article's
// own title, description and datePublished. Dates come from the pages, so two builds
// of the same source produce identical feeds.
export const FEED_HUBS = { insights: 'Insights', impact: 'Impact', patterns: 'Patterns', discovery: 'Discovery', moments: 'Moments' };
const SITE_URL = 'https://mellorca.com';
const FEED_LIMIT = 50;

function xmlEscape(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function htmlUnescape(text) {
  return String(text).replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

export function feedItem(html, url) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const date = (html.match(/"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})/) || html.match(/published_date:\s*(\d{4}-\d{2}-\d{2})/) || [])[1];
  if (!title || !date) return null;
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  return { title: htmlUnescape(title.replace(/\s*\|\s*Mellorca[^|]*$/, '')), description: htmlUnescape(description), date, url };
}

export function renderFeed({ title, link, description }, items) {
  const newest = [...items].sort((a, b) => b.date.localeCompare(a.date) || a.url.localeCompare(b.url)).slice(0, FEED_LIMIT);
  const rfc822 = date => new Date(`${date}T06:00:00Z`).toUTCString();
  const entries = newest.map(item => [
    '    <item>',
    `      <title>${xmlEscape(item.title)}</title>`,
    `      <link>${xmlEscape(item.url)}</link>`,
    `      <guid isPermaLink="true">${xmlEscape(item.url)}</guid>`,
    `      <pubDate>${rfc822(item.date)}</pubDate>`,
    `      <description>${xmlEscape(item.description)}</description>`,
    '    </item>',
  ].join('\n'));
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${xmlEscape(title)}</title>`,
    `    <link>${xmlEscape(link)}</link>`,
    `    <atom:link href="${xmlEscape(link)}feed.xml" rel="self" type="application/rss+xml"/>`,
    `    <description>${xmlEscape(description)}</description>`,
    '    <language>en-ZA</language>',
    ...(newest.length ? [`    <lastBuildDate>${rfc822(newest[0].date)}</lastBuildDate>`] : []),
    ...entries,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
}

function writeFeeds(source, output) {
  const all = [];
  for (const [hub, name] of Object.entries(FEED_HUBS)) {
    const hubDir = join(source, hub);
    if (!existsSync(hubDir)) continue;
    const items = readdirSync(hubDir, { withFileTypes: true })
      .filter(entry => entry.isDirectory() && existsSync(join(hubDir, entry.name, 'index.html')))
      .map(entry => feedItem(readFileSync(join(hubDir, entry.name, 'index.html'), 'utf8'), `${SITE_URL}/${hub}/${entry.name}/`))
      .filter(Boolean);
    all.push(...items);
    writeFileSync(join(output, hub, 'feed.xml'), renderFeed({ title: `Mellorca ${name}`, link: `${SITE_URL}/${hub}/`, description: `New ${name} articles from Mellorca.` }, items), 'utf8');
  }
  writeFileSync(join(output, 'feed.xml'), renderFeed({ title: 'Mellorca', link: `${SITE_URL}/`, description: 'New articles from Mellorca across Insights, Impact, Patterns, Discovery and Moments.' }, all), 'utf8');
}

export function buildSite({ sourceDirectory = 'website', outputDirectory = 'dist' } = {}) {
  const source = resolve(sourceDirectory);
  const output = resolve(outputDirectory);

  if (!existsSync(source)) throw new Error(`Source directory does not exist: ${source}`);
  if (source === output || output.startsWith(`${source}${sep}`)) {
    throw new Error('Output directory must be separate from the canonical website source directory');
  }

  rmSync(output, { recursive: true, force: true });
  cpSync(source, output, { recursive: true });

  const sourceHtmlFiles = listFiles(source).filter((file) => file.toLowerCase().endsWith('.html'));
  if (sourceHtmlFiles.length === 0) throw new Error('No HTML files found in website source');
  const assets = sharedAssetUrls(source);

  for (const sourceFile of sourceHtmlFiles) {
    const rel = relative(source, sourceFile);
    const outputFile = join(output, rel);
    const html = readFileSync(sourceFile, 'utf8');
    assertSourceIsClean(rel, html);
    const route = '/' + rel.split(sep).join('/').replace(/index\.html$/, '');
    let built = inject(renderLayout(html, route));
    for (const [path, versioned] of assets) {
      built = built.replaceAll(`"${path}"`, `"${versioned}"`);
    }
    assertBuiltPage(rel, built);
    writeFileSync(outputFile, built, 'utf8');
  }

  const sitemapFile = join(output, 'sitemap.xml');
  if (existsSync(sitemapFile)) {
    const pageFor = loc => {
      const path = new URL(loc).pathname.replace(/^\//, '');
      const file = join(source, path, 'index.html');
      return existsSync(file) ? readFileSync(file, 'utf8') : null;
    };
    writeFileSync(sitemapFile, sitemapWithLastmod(readFileSync(sitemapFile, 'utf8'), pageFor), 'utf8');
  }

  writeFeeds(source, output);

  console.log(`Built ${sourceHtmlFiles.length} HTML files from ${sourceDirectory} into ${outputDirectory} with ${GTM_CONTAINER_ID}.`);
  return { source, output, htmlCount: sourceHtmlFiles.length };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  buildSite({
    sourceDirectory: option('--source', 'website'),
    outputDirectory: option('--output', 'dist'),
  });
}
