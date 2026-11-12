import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { listFiles, sharedAssetUrls } from './build-site.mjs';

const origin = 'https://mellorca.com';
const decode = value => value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, entity => {
  const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
  if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
  return String.fromCodePoint(entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10));
});

// Bounded static-HTML inspection, not a browser DOM or accessibility conformance test.
export function tags(html) {
  const markup = html.replace(/<!--[\s\S]*?-->/g, '')
    .replace(/(<(?:script|style)\b[^>]*>)[\s\S]*?<\/(?:script|style)>/gi, '$1');
  return [...markup.matchAll(/<([a-z][\w:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map(match => {
    const attrs = {};
    for (const attr of match[2].matchAll(/([^\s=/'">]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attrs[attr[1].toLowerCase()] = decode(attr[2] ?? attr[3] ?? attr[4] ?? '');
    }
    return { name: match[1].toLowerCase(), attrs };
  });
}

export function validateSiteQuality(directory = 'dist') {
  const root = resolve(directory);
  const assets = sharedAssetUrls(root);
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(message); };
  const pages = new Map();
  const titles = new Set();
  for (const file of listFiles(root).filter(file => file.endsWith('.html'))) {
    const rel = relative(root, file).replaceAll('\\', '/');
    const route = '/' + rel.replace(/index\.html$/, '');
    const html = readFileSync(file, 'utf8');
    const elements = tags(html);
    const find = (name, predicate = () => true) => elements.filter(tag => tag.name === name && predicate(tag.attrs));
    const noindex = find('meta', a => a.name === 'robots' && /\bnoindex\b/i.test(a.content)).length > 0;
    const ids = elements.filter(tag => tag.attrs.id).map(tag => tag.attrs.id);
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
    check(find('html', a => a.lang === 'en').length === 1, `${route}: English document language required`);
    check(find('h1').length === 1 && find('main', a => a.id === 'main' && a.tabindex === '-1').length === 1, `${route}: one h1 and main landmark required`);
    // Core-page semantics are out of scope here. Editorial bodies
    // retain their owners' heading structures and need separate owner follow-up.
    if (route === '/' || /^\/(?:services|solutions|about|contact|legal)\//.test(route)) {
      const levels = elements.filter(tag => /^h[1-6]$/.test(tag.name)).map(tag => Number(tag.name[1]));
      check(levels.every((level, index) => index === 0 || level <= levels[index - 1] + 1), `${route}: core-page heading level skipped`);
    }
    check(ids.length === new Set(ids).size, `${route}: duplicate IDs`);
    check(title && !titles.has(title), `${route}: missing or duplicate title`);
    titles.add(title);
    check(find('meta', a => a.name === 'viewport' && /width=device-width/.test(a.content) && !/user-scalable\s*=\s*no|maximum-scale\s*=\s*1(?:\D|$)/.test(a.content)).length === 1, `${route}: zoomable viewport required`);
    if (!noindex) {
      check(find('meta', a => a.name === 'description' && a.content?.trim()).length === 1, `${route}: description required`);
      check(find('link', a => a.rel === 'canonical' && a.href === origin + route).length === 1, `${route}: self canonical required`);
    }
    check(find('header', a => 'data-site-header' in a).length === 1 && find('footer', a => 'data-site-footer' in a).length === 1, `${route}: built shared landmarks required`);
    check(find('nav', a => a.id === 'main-navigation' && a['aria-label'] === 'Primary').length === 1, `${route}: static primary navigation required`);
    check(find('a', a => a.href === '#main' && a.class === 'skip-link').length === 1, `${route}: skip link required`);
    check(find('button', a => 'data-nav-toggle' in a && a.type === 'button' && a['aria-controls'] === 'main-navigation' && a['aria-expanded'] === 'false').length === 1, `${route}: disclosure control contract required`);
    check(find('link', a => a.rel === 'stylesheet' && a.href === assets.get('/assets/css/site.css') && !('disabled' in a) && (!a.media || a.media === 'all')).length === 1, `${route}: versioned shared screen stylesheet required`);
    const sharedScripts = find('script', a => a.src?.split('?')[0] === '/assets/js/site.js');
    check(sharedScripts.length === 1 && sharedScripts[0].attrs.src === assets.get('/assets/js/site.js') && 'defer' in sharedScripts[0].attrs && !('async' in sharedScripts[0].attrs), `${route}: one versioned deferred shared interaction script required`);
    for (const hub of ['services', 'solutions', 'insights', 'impact', 'patterns', 'discovery', 'moments', 'about', 'contact']) {
      check(find('a', a => a.href === `/${hub}/`).length > 0, `${route}: missing shared route ${hub}`);
    }
    check(!/\b(?:Qwan Kenobisan|Aba Radebe|Aba Radede)\b/i.test(html), `${route}: obsolete public identity`);
    for (const image of find('img')) check('alt' in image.attrs, `${route}: image missing alt`);
    pages.set(route, { html, elements, ids: new Set(ids), noindex, find });
  }

  const contact = pages.get('/contact/');
  check(Boolean(contact), 'Contact route required');
  const intents = new Set(contact?.find('option').map(tag => tag.attrs.value).filter(Boolean));
  if (contact) {
    check(contact.find('form', a => 'data-contact-form' in a && a.method === 'post' && a.action === '/api/contact').length === 1, 'Contact: POST fallback required');
    check(contact.find('div', a => 'data-form-status' in a && a.role === 'status' && a['aria-live'] === 'polite').length === 1, 'Contact: live status required');
    for (const { name, attrs } of contact.elements.filter(tag => ['input', 'select', 'textarea'].includes(tag.name))) {
      if (attrs.name === 'company_site') continue; // Deliberately hidden, labelled anti-spam field.
      check(attrs.id && contact.find('label', a => a.for === attrs.id).length === 1, `Contact: ${name} ${attrs.name} needs a label`);
    }
  }

  for (const [route, page] of pages) {
    for (const { attrs } of page.elements) {
      for (const key of ['href', 'src']) {
        if (!(key in attrs)) continue;
        const value = attrs[key];
        check(value.trim() && !/^javascript:/i.test(value), `${route}: empty or unsafe ${key}`);
        let url;
        try { url = new URL(value, origin + route); } catch { errors.push(`${route}: invalid URL ${value}`); continue; }
        if (url.origin !== origin) continue; // External availability needs provider/browser evidence.
        const destination = pages.get(url.pathname);
        const local = resolve(root, '.' + decodeURIComponent(url.pathname));
        check(Boolean(destination) || (local.startsWith(root + '/') && existsSync(local) && statSync(local).isFile()), `${route}: missing local target ${value}`);
        if (url.hash && destination) check(destination.ids.has(decodeURIComponent(url.hash.slice(1))), `${route}: missing fragment ${value}`);
        if (url.pathname === '/contact/' && url.searchParams.has('intent')) check(intents.has(url.searchParams.get('intent')), `${route}: unsupported Contact intent ${value}`);
      }
    }
  }

  const sitemap = [...readFileSync(resolve(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
  check(new Set(sitemap).size === sitemap.length, 'Sitemap: duplicate URLs');
  const expected = [...pages].filter(([, page]) => !page.noindex).map(([route]) => origin + route).sort();
  check(JSON.stringify([...sitemap].sort()) === JSON.stringify(expected), 'Sitemap: must contain exactly the indexable canonical pages');
  check(readFileSync(resolve(root, 'robots.txt'), 'utf8').includes(`Sitemap: ${origin}/sitemap.xml`), 'Robots: canonical sitemap required');
  const redirects = new Map();
  for (const line of readFileSync(resolve(root, '_redirects'), 'utf8').split(/\r?\n/).map(line => line.trim()).filter(line => line && !line.startsWith('#'))) {
    const [from, to, status, ...extra] = line.split(/\s+/);
    check(!redirects.has(from) && !pages.has(from), `Redirect: duplicate or live source ${from}`);
    check(status === '301' && extra.length === 0, `Redirect: expected permanent migration ${from}`);
    const target = new URL(to, origin);
    check(target.origin === origin && pages.has(target.pathname), `Redirect: missing direct destination ${to}`);
    if (target.searchParams.has('intent')) check(intents.has(target.searchParams.get('intent')), `Redirect: unsupported intent ${to}`);
    redirects.set(from, to);
  }
  for (const identity of ['qwan-kenobisan', 'aba-radebe', 'aba-radede']) {
    for (const prefix of ['/about/', '/']) for (const suffix of ['/', '', '.html']) {
      check(redirects.get(prefix + identity + suffix) === '/about/qwaname-kenobisan/', `Identity migration missing: ${prefix}${identity}${suffix}`);
    }
  }
  if (errors.length) throw new Error(`Front-end quality contract failed:\n${errors.join('\n')}`);
  return { pages: pages.size, indexable: expected.length, redirects: redirects.size };
}
