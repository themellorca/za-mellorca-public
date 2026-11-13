import { validateSiteQuality } from './site-quality.mjs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  readFileSync,
  rmSync,
} from 'node:fs';
import { relative, resolve } from 'node:path';
import process from 'node:process';
import {
  GTM_CONTAINER_ID,
  GTM_CSP_HASH,
  FEED_HUBS,
  listFiles,
} from './build-site.mjs';

const source = resolve('website');
const output = resolve('dist');
const verificationOutput = resolve('.build-verify');

function fail(message) {
  throw new Error(message);
}

function count(text, marker) {
  return text.split(marker).length - 1;
}

function relativeFiles(root, extension = null) {
  return listFiles(root)
    .filter((file) => !extension || file.toLowerCase().endsWith(extension))
    .map((file) => relative(root, file))
    .sort();
}

function assertEqualLists(label, a, b) {
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    fail(`${label} differs between source and build output`);
  }
}

function validateSourceAndBuiltHtml() {
  const sourceHtml = relativeFiles(source, '.html');
  const builtHtml = relativeFiles(output, '.html');
  assertEqualLists('HTML file set', sourceHtml, builtHtml);

  for (const rel of sourceHtml) {
    const sourceText = readFileSync(resolve(source, rel), 'utf8');
    const builtText = readFileSync(resolve(output, rel), 'utf8');

    if (/googletagmanager\.com\/(?:gtm\.js|ns\.html)/i.test(sourceText) || /GTM-[A-Z0-9]+/.test(sourceText)) {
      fail(`${rel}: canonical source contains GTM; GTM must exist only in generated build output`);
    }

    const checks = [
      [GTM_CONTAINER_ID, 2],
      ['https://www.googletagmanager.com/gtm.js', 1],
      ['https://www.googletagmanager.com/ns.html', 1],
      ['<!-- Google Tag Manager -->', 1],
      ['<!-- Google Tag Manager (noscript) -->', 1],
    ];
    for (const [marker, expected] of checks) {
      const actual = count(builtText, marker);
      if (actual !== expected) fail(`${rel}: ${marker} expected ${expected}, found ${actual}`);
    }

    if (!/<head\b[^>]*>\s*<!-- Google Tag Manager -->/i.test(builtText)) {
      fail(`${rel}: GTM bootstrap is not first inside <head>`);
    }
    if (!/<body\b[^>]*>\s*<!-- Google Tag Manager \(noscript\) -->/i.test(builtText)) {
      fail(`${rel}: GTM noscript block is not first inside <body>`);
    }
  }

  return sourceHtml.length;
}

function parseCspDirectives(cspLine) {
  const policy = cspLine.replace(/^\s*Content-Security-Policy:\s*/, '');
  const directives = new Map();
  for (const part of policy.split(';').map((value) => value.trim()).filter(Boolean)) {
    const [name, ...values] = part.split(/\s+/);
    directives.set(name, values);
  }
  return directives;
}

function requireDirectiveTokens(directives, name, tokens) {
  const values = directives.get(name);
  if (!values) fail(`website/_headers: CSP directive ${name} is missing`);
  for (const token of tokens) {
    if (!values.includes(token)) fail(`website/_headers: ${name} is missing ${token}`);
  }
  return values;
}

function validateCsp() {
  const headers = readFileSync(resolve(source, '_headers'), 'utf8');
  const cspLine = headers.split(/\r?\n/).find((line) => line.includes('Content-Security-Policy:'));
  if (!cspLine) fail('website/_headers: Content-Security-Policy header is missing');

  const directives = parseCspDirectives(cspLine);
  const gtmHash = `'${GTM_CSP_HASH}'`;

  const scriptTokens = [
    "'self'",
    gtmHash,
    'https://www.googletagmanager.com',
    'https://tagmanager.google.com',
  ];
  const scriptDirective = requireDirectiveTokens(directives, 'script-src', scriptTokens);
  const scriptElementDirective = requireDirectiveTokens(directives, 'script-src-elem', scriptTokens);

  for (const [name, values] of [
    ['script-src', scriptDirective],
    ['script-src-elem', scriptElementDirective],
  ]) {
    if (values.includes("'unsafe-inline'")) {
      fail(`website/_headers: ${name} must not use 'unsafe-inline' for GTM`);
    }
    if (values.includes("'unsafe-eval'")) {
      fail(`website/_headers: ${name} must not use 'unsafe-eval' for GTM Preview Mode`);
    }
  }

  requireDirectiveTokens(directives, 'frame-src', [
    'https://www.googletagmanager.com',
  ]);
  requireDirectiveTokens(directives, 'style-src', [
    "'self'",
    'https://www.googletagmanager.com',
    'https://tagmanager.google.com',
    'https://fonts.googleapis.com',
  ]);
  requireDirectiveTokens(directives, 'img-src', [
    "'self'",
    'data:',
    'https://www.googletagmanager.com',
    'https://ssl.gstatic.com',
    'https://www.gstatic.com',
    'https://fonts.gstatic.com',
    'https://*.google-analytics.com',
  ]);
  requireDirectiveTokens(directives, 'font-src', [
    'https://fonts.gstatic.com',
    'data:',
  ]);
  requireDirectiveTokens(directives, 'connect-src', [
    "'self'",
    'https://www.googletagmanager.com',
    'https://www.google.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
  ]);
}

function validateFunctionRouting() {
  if (existsSync(resolve('functions/_middleware.js'))) {
    fail('functions/_middleware.js must not exist; GTM must not require runtime middleware');
  }

  const routes = JSON.parse(readFileSync(resolve(source, '_routes.json'), 'utf8'));
  if (JSON.stringify(routes.include) !== JSON.stringify(['/api/*'])) {
    fail('website/_routes.json must route only /api/* through Pages Functions');
  }
}

function manifest(root) {
  return relativeFiles(root).map((rel) => {
    const digest = createHash('sha256').update(readFileSync(resolve(root, rel))).digest('hex');
    return `${digest}  ${rel}`;
  });
}

function validateDeterminism() {
  rmSync(verificationOutput, { recursive: true, force: true });
  const run = spawnSync(process.execPath, ['tools/build-site.mjs', '--output', verificationOutput], {
    encoding: 'utf8',
  });
  if (run.status !== 0) {
    process.stderr.write(run.stderr || '');
    fail('Second deterministic build failed');
  }

  const first = manifest(output);
  const second = manifest(verificationOutput);
  rmSync(verificationOutput, { recursive: true, force: true });
  assertEqualLists('Build manifest', first, second);
}

if (!existsSync(source)) fail('website source directory is missing');
if (!existsSync(output)) fail('dist build output is missing; run npm run build first');

const htmlCount = validateSourceAndBuiltHtml();
validateCsp();
validateFunctionRouting();
validateDeterminism();
// The site feed and one feed per hub must exist and be well-formed XML.
function assertWellFormedXml(label, xml) {
  if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) fail(`${label}: missing XML declaration`);
  const stack = [];
  const body = xml.replace(/^<\?xml[^>]*\?>/, '');
  if (/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-f]+);)/i.test(body)) fail(`${label}: unescaped ampersand`);
  for (const [, close, name, selfClosing] of body.matchAll(/<(\/?)([A-Za-z][\w:.-]*)(?:\s+[\w:.-]+="[^"<]*")*\s*(\/?)>/g)) {
    if (selfClosing) continue;
    if (!close) stack.push(name);
    else if (stack.pop() !== name) fail(`${label}: mismatched </${name}>`);
  }
  if (stack.length) fail(`${label}: unclosed <${stack.at(-1)}>`);
  const stray = body.replace(/<(\/?)([A-Za-z][\w:.-]*)(?:\s+[\w:.-]+="[^"<]*")*\s*(\/?)>/g, '');
  if (/[<>]/.test(stray)) fail(`${label}: stray markup character`);
}

for (const feed of ['feed.xml', ...Object.keys(FEED_HUBS).map(hub => `${hub}/feed.xml`)]) {
  const file = resolve(output, feed);
  if (!existsSync(file)) fail(`${feed}: feed missing from build output`);
  const xml = readFileSync(file, 'utf8');
  assertWellFormedXml(feed, xml);
  if (!/<rss version="2.0"/.test(xml) || count(xml, '<item>') === 0) fail(`${feed}: not an RSS 2.0 feed with items`);
}

const quality = validateSiteQuality(output);
console.log(`Front-end quality: ${quality.pages} pages, ${quality.indexable} sitemap URLs, ${quality.redirects} redirects; local links/fragments/assets, metadata, landmarks, Contact intents and identity checked.`);

console.log(`Validated ${htmlCount} generated HTML files: one GTM container per page, strict CSP with Tag Assistant Preview and GA4 support, API-only Functions routing, deterministic build.`);
