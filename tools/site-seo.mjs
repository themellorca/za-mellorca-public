// Build-time search and sharing metadata. Every page already carries a title,
// description and canonical URL in its source; this derives Open Graph, Twitter
// card and schema.org breadcrumb/organisation data from them so 900+ source
// pages never have to repeat it, and new articles get it automatically.
export const SITE_URL = 'https://mellorca.com';
export const SITE_NAME = 'Mellorca';
export const SHARE_IMAGE = { url: `${SITE_URL}/assets/img/share-default.png`, width: 1200, height: 630, alt: 'Mellorca: the digital systems businesses depend on to operate.' };

export const SECTION_NAMES = {
  services: 'Services',
  solutions: 'Solutions',
  insights: 'Insights',
  impact: 'Impact',
  patterns: 'Patterns',
  discovery: 'Discovery',
  moments: 'Mellorca Moments',
  about: 'About',
  contact: 'Contact',
  briefing: 'The Mellorca Briefing',
  topics: 'Topics',
  legal: 'Legal',
};

const COLLECTIONS = new Set(['/services/', '/solutions/', '/insights/', '/impact/', '/patterns/', '/discovery/', '/moments/']);

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description: 'Mellorca designs, improves and automates the digital systems businesses depend on to operate.',
  knowsAbout: ['Digital infrastructure', 'Digital operations', 'Business automation', 'AI workflows', 'Systems integration'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', url: `${SITE_URL}/contact/` },
};

function attribute(text) {
  return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function unescapeHtml(text) {
  return String(text).replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function jsonLd(data) {
  // "<" is escaped so no value can close the script element early.
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(/</g, '\\u003c')}</script>`;
}

export function pageFacts(html) {
  const title = unescapeHtml((html.match(/<title>([^<]*)<\/title>/i) || [])[1] || '').trim();
  const description = unescapeHtml((html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || '').trim();
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1] || '';
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html);
  const article = /"@type"\s*:\s*"(Article|BlogPosting|NewsArticle|Report)"/.test(html);
  const h1 = unescapeHtml(((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '').replace(/<[^>]+>/g, '')).trim();
  return { title, description, canonical, noindex, article, h1 };
}

// "How X Works | Mellorca Insights" -> "How X Works"; "Mellorca | Digital ..." stays whole.
export function shareTitle(title) {
  const stripped = title.replace(/\s*\|\s*(Mellorca|Human Dividend)[^|]*$/, '').trim();
  return stripped && stripped !== SITE_NAME ? stripped : title;
}

export function breadcrumbs(route, facts) {
  const segments = route.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  const items = [{ name: 'Home', url: `${SITE_URL}/` }];
  let path = '/';
  segments.forEach((segment, index) => {
    path += `${segment}/`;
    const last = index === segments.length - 1;
    const leaf = shareTitle(facts.title).includes('|') && facts.h1 ? facts.h1 : shareTitle(facts.title) || facts.h1;
    const name = last && index > 0 ? leaf : (SECTION_NAMES[segment] || leaf);
    items.push({ name, url: `${SITE_URL}${path}` });
  });
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })),
  };
}

export function seoHead(html, route) {
  const facts = pageFacts(html);
  if (!facts.title || facts.noindex || !facts.canonical) return '';
  const tags = [];
  if (!/property="og:title"/i.test(html)) {
    const meta = [
      ['og:site_name', SITE_NAME],
      ['og:locale', 'en_ZA'],
      ['og:type', facts.article ? 'article' : 'website'],
      ['og:title', shareTitle(facts.title)],
      ...(facts.description ? [['og:description', facts.description]] : []),
      ['og:url', facts.canonical],
      ['og:image', SHARE_IMAGE.url],
      ['og:image:width', String(SHARE_IMAGE.width)],
      ['og:image:height', String(SHARE_IMAGE.height)],
      ['og:image:alt', SHARE_IMAGE.alt],
    ];
    tags.push(...meta.map(([property, content]) => `<meta property="${property}" content="${attribute(content)}">`));
    tags.push(`<meta name="twitter:card" content="summary_large_image">`);
    tags.push(`<meta name="twitter:image" content="${SHARE_IMAGE.url}">`);
    tags.push(`<meta name="twitter:title" content="${attribute(shareTitle(facts.title))}">`);
    if (facts.description) tags.push(`<meta name="twitter:description" content="${attribute(facts.description)}">`);
  }
  if (route === '/' && !/"@type"\s*:\s*"WebSite"/.test(html)) {
    tags.push(jsonLd({ '@graph': [ORGANIZATION, { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/`, inLanguage: 'en-ZA', publisher: { '@id': `${SITE_URL}/#organization` } }] }));
  }
  if (COLLECTIONS.has(route) && !/application\/ld\+json/.test(html)) {
    tags.push(jsonLd({ '@type': 'CollectionPage', name: shareTitle(facts.title), description: facts.description || undefined, url: facts.canonical, inLanguage: 'en-ZA', isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/` }, publisher: ORGANIZATION }));
  }
  if (/^\/services\/[^/]+\/$/.test(route) && !/"@type"\s*:\s*"Service"/.test(html)) {
    // No offers or prices: pricing is only discussed after a discovery conversation.
    tags.push(jsonLd({ '@type': 'Service', name: shareTitle(facts.title), description: facts.description || undefined, url: facts.canonical, serviceType: shareTitle(facts.title), provider: { '@id': `${SITE_URL}/#organization`, '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` }, potentialAction: { '@type': 'CommunicateAction', target: `${SITE_URL}/contact/`, name: 'Talk to Mellorca' } }));
  }
  if (route === '/about/' && !/application\/ld\+json/.test(html)) {
    tags.push(jsonLd({ '@type': 'AboutPage', name: shareTitle(facts.title), url: facts.canonical, mainEntity: ORGANIZATION }));
  }
  if (route === '/contact/' && !/application\/ld\+json/.test(html)) {
    tags.push(jsonLd({ '@type': 'ContactPage', name: shareTitle(facts.title), url: facts.canonical, about: { '@id': `${SITE_URL}/#organization`, '@type': 'Organization', name: SITE_NAME } }));
  }
  if (route.startsWith('/about/') && route !== '/about/' && !/application\/ld\+json/.test(html)) {
    tags.push(jsonLd({ '@type': 'ProfilePage', name: shareTitle(facts.title), url: facts.canonical, mainEntity: { '@type': 'Person', name: facts.h1 || shareTitle(facts.title), worksFor: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME } } }));
  }
  if (!/"@type"\s*:\s*"BreadcrumbList"/.test(html)) {
    const trail = breadcrumbs(route, facts);
    if (trail) tags.push(jsonLd(trail));
  }
  return tags.join('');
}

// Articles carry their own Article data from the renderer; give it the author
// and image fields search engines expect, without touching the source pages.
export function completeArticleData(html) {
  return html.replace(/<script type="application\/ld\+json">(\{[^<]*"@type":"(?:Article|BlogPosting|Report)"[^<]*\})<\/script>/, (whole, json) => {
    let data;
    try { data = JSON.parse(json); } catch { return whole; }
    if (!data.author) data.author = { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` };
    if (!data.image) data.image = SHARE_IMAGE.url;
    if (data.publisher && !data.publisher.logo) data.publisher = { ...data.publisher, logo: { '@type': 'ImageObject', url: SHARE_IMAGE.url } };
    return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
  });
}

export function renderSeo(html, route) {
  html = completeArticleData(html);
  const head = seoHead(html, route);
  if (!head) return html;
  const closing = html.search(/<\/head>/i);
  if (closing < 0) return html;
  return `${html.slice(0, closing)}${head}${html.slice(closing)}`;
}
