// Topic landing pages: one page per business problem area, gathering the
// articles from every hub (Insights, Impact, Patterns, Discovery, Moments) that
// deal with it. The hubs are organised by kind of article; these pages are
// organised by the problem a visitor is searching for, and give every article
// more than one route in. Run `npm run topics:render` after publishing articles;
// `--check` fails when the pages on disk are out of date.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

export const HUBS = [['insights', 'Insights'], ['impact', 'Impact'], ['patterns', 'Patterns'], ['discovery', 'Discovery'], ['moments', 'Mellorca Moments']];

// `kicker` matches the card's category label; `text` is the fallback over title and summary.
export const TOPICS = [
  {
    slug: 'ai-and-automation',
    name: 'AI and Automation',
    title: 'Business Automation and AI Agents',
    description: 'Practical articles on business automation and AI agents: what to automate, how to keep automations reliable, and how to govern what AI is allowed to do.',
    intro: 'Automation pays off when it follows a sound process and someone owns it after launch. These articles cover deciding what to automate, building for exceptions, monitoring what runs, and setting clear limits for AI agents.',
    kicker: /automat|\bAI\b|agent|bot\b|robotic/i,
    text: /automat|\bAI\b|AI agent|\bbots?\b|machine learning/i,
  },
  {
    slug: 'integration-and-disconnected-systems',
    name: 'Integration and Disconnected Systems',
    title: 'Systems Integration and Disconnected Systems',
    description: 'Why business systems stop talking to each other, what disconnected tools cost, and how to integrate applications, APIs and data so work flows without re-keying.',
    intro: 'When systems do not share information, people carry it between them by hand. These articles explain how integrations fail, what point-to-point connections cost over time, and how to make data move reliably between the tools a business runs on.',
    kicker: /integrat|\bAPI\b|disconnected/i,
    text: /integrat|\bAPIs?\b|disconnected|re-?key|sync(?:ing|hronis)/i,
  },
  {
    slug: 'data-reporting-and-visibility',
    name: 'Data, Reporting and Visibility',
    title: 'Business Data, Reporting and Management Visibility',
    description: 'How to get trustworthy numbers: data quality, reports rebuilt by hand, conflicting dashboards and the systems behind clear management visibility.',
    intro: 'Decisions are only as good as the numbers behind them. These articles look at why reports disagree, why someone rebuilds the same spreadsheet every week, and how to give managers a view of the business they can trust.',
    kicker: /data|report|visibility|decision/i,
    text: /report|dashboard|data quality|spreadsheet|visibility|metrics?\b/i,
  },
  {
    slug: 'finance-and-revenue-operations',
    name: 'Finance and Revenue Operations',
    title: 'Finance, Billing and Quote-to-Cash Operations',
    description: 'Where money leaks between quote, order, invoice and payment, and how better finance and revenue operations shorten cash cycles and cut manual reconciliation.',
    intro: 'Revenue moves through many hands between the first quote and the final payment. These articles trace where it slows down or slips away, from unbilled work and manual invoicing to reconciliation and collections.',
    kicker: /quote-to-cash|revenue|finance|accounts|collections|billing|payroll/i,
    text: /invoice|billing|quote|payment|cash flow|reconcil|payroll|revenue|collections/i,
  },
  {
    slug: 'sales-and-customer-operations',
    name: 'Sales and Customer Operations',
    title: 'Sales, CRM and Customer Operations',
    description: 'How CRM, sales handoffs and customer service systems shape the customer experience, and how to stop customers chasing updates or getting different answers.',
    intro: 'Customers feel every gap between sales, service and delivery. These articles cover CRM records that drift, handoffs that lose context, and the systems that let a business give one clear answer every time.',
    kicker: /sales|customer|crm/i,
    text: /\bCRM\b|customer|sales|prospect|lead\b|onboarding/i,
  },
  {
    slug: 'inventory-and-order-operations',
    name: 'Inventory and Order Operations',
    title: 'Inventory, Orders and Fulfilment Operations',
    description: 'Why stock numbers disagree across systems, how orders fall between sales and fulfilment, and what reliable inventory and order operations look like.',
    intro: 'Selling stock you do not have, or holding stock nobody can see, usually starts with systems that disagree. These articles cover inventory accuracy, order handoffs and fulfilment across channels.',
    kicker: /inventory|order|fulfil|supply/i,
    text: /inventory|stock\b|stock levels|orders?\b|fulfil|warehouse|supplier/i,
  },
  {
    slug: 'security-access-and-compliance',
    name: 'Security, Access and Compliance',
    title: 'Security, Access Control and Compliance Operations',
    description: 'Practical security and compliance operations: who has access to what, audit evidence, risk exceptions, and keeping controls working as systems change.',
    intro: 'Most security problems in growing businesses are operational: old accounts nobody removed, shared passwords, evidence that cannot be found when an auditor asks. These articles cover access, audit readiness and day-to-day risk.',
    kicker: /security|compliance|access|risk|governance/i,
    text: /securit|complian|access|password|audit|privacy|risk/i,
  },
  {
    slug: 'cloud-infrastructure-and-software',
    name: 'Cloud, Infrastructure and Software',
    title: 'Cloud, IT Infrastructure and Software Portfolio',
    description: 'Managing cloud costs, IT infrastructure and the growing pile of SaaS applications: renewals, ownership, licences, backups and platform reliability.',
    intro: 'Software and cloud services accumulate faster than anyone reviews them. These articles cover application sprawl, unexplained cloud bills, renewals nobody owns, and the infrastructure decisions that keep a business running.',
    kicker: /cloud|infrastructure|platform|saas|application|software/i,
    text: /cloud|SaaS|software|licen[cs]e|renewal|subscription|server|backup|infrastructure/i,
  },
  {
    slug: 'manual-work-and-admin',
    name: 'Manual Work and Admin',
    title: 'Manual Work, Admin Load and Operational Friction',
    description: 'The hidden cost of manual work and admin: re-keying, chasing approvals, copy-and-paste processes and the operational friction that slows a growing business.',
    intro: 'Small manual steps add up to whole roles spent moving information around. These articles measure that load, explain where it comes from, and show which work is worth redesigning and which is better left alone.',
    kicker: /manual|admin|friction|efficien|workflow|process/i,
    text: /manual|by hand|admin|approval|copy|paste|chasing|friction|workaround/i,
  },
  {
    slug: 'resilience-and-key-person-risk',
    name: 'Resilience and Key-Person Risk',
    title: 'Business Continuity, Resilience and Key-Person Risk',
    description: 'What happens when a key person is away or a system fails: business continuity, documentation, recovery and building operations that do not depend on one person.',
    intro: 'A business is fragile when only one person knows how something works or when nobody has tested recovery. These articles cover key-person dependency, documentation, continuity planning and operations that keep running.',
    kicker: /continuity|resilien|knowledge|documentation|key-person|operating model/i,
    text: /key[- ]person|only one person|continuity|recover|resilien|documentation|single point|outage|founder/i,
  },
  {
    slug: 'systems-strategy-and-growth',
    name: 'Systems Strategy and Growth',
    title: 'Systems Strategy, Architecture and Scaling Operations',
    description: 'How to plan the systems a business runs on: architecture, replacing or reconfiguring tools, finding the real bottleneck and preparing operations for growth.',
    intro: 'Growth exposes the weak points in how a business is put together. These articles help leaders see their operation as a whole, find what to fix first, and make sound decisions about architecture, implementation and change.',
    kicker: /architecture|strategy|implementation|growth|scaling|operating model/i,
    text: /architect|strategy|growth|scal(?:e|ing)|bottleneck|roadmap|business case|outgrown|current-state/i,
  },
  {
    slug: 'people-time-and-wellbeing',
    name: 'People, Time and Wellbeing',
    title: 'How Better Systems Affect People at Work',
    description: 'What better systems and operations mean for people: time and attention returned, autonomy at work, wellbeing, and the human cost of poor processes.',
    intro: 'Systems are the means; the test is what they change for the people who live with them. These articles look at time, attention, autonomy and wellbeing, and at the trade-offs better operations can bring.',
    kicker: /human|time|attention|dignity|wellbeing|agency|autonomy|people|connection|meaning|trust|inclusion|life|economic|relief|presence|optionality|predictab/i,
    text: /burnout|wellbeing|evening|weekend|family|stress|anxiety|dignity/i,
  },
];

const SITE_URL = 'https://mellorca.com';

function decode(text) {
  return text.replace(/&amp;/g, '&');
}

export function readCards(source) {
  const cards = [];
  const seen = new Set();
  for (const [hub, hubName] of HUBS) {
    const file = join(source, hub, 'index.html');
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    for (const [, href, inner] of html.matchAll(/<a class="card card-link" href="(\/[a-z]+\/[^"]+\/)">([\s\S]*?)<\/a>/g)) {
      if (seen.has(href) || !href.startsWith(`/${hub}/`)) continue;
      if (!existsSync(join(source, href.slice(1), 'index.html'))) continue;
      seen.add(href);
      const kicker = (inner.match(/<span class="kicker">([^<]*)<\/span>/) || [])[1] || '';
      const heading = (inner.match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || '';
      const summary = (inner.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || '';
      cards.push({ hub, hubName, href, kicker: kicker.split(' · ')[0], heading, summary });
    }
  }
  return cards;
}

export function topicsFor(card) {
  const label = decode(card.kicker);
  const text = decode(`${card.heading} ${card.summary}`);
  const byKicker = TOPICS.filter(topic => topic.kicker.test(label));
  if (byKicker.length) return byKicker;
  const byText = TOPICS.filter(topic => topic.text.test(text)).slice(0, 2);
  // Every article belongs somewhere; general operations pieces sit under strategy.
  return byText.length ? byText : TOPICS.filter(topic => topic.slug === 'systems-strategy-and-growth');
}

export function groupByTopic(cards) {
  const groups = new Map(TOPICS.map(topic => [topic.slug, []]));
  for (const card of cards) for (const topic of topicsFor(card)) groups.get(topic.slug).push(card);
  return groups;
}

function attr(text) {
  return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function html(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function card(item) {
  return `<a class="card card-link" href="${item.href}"><span class="kicker">${item.kicker || item.hubName}</span><h3>${item.heading}</h3><p>${item.summary}</p></a>`;
}

function page({ title, description, canonical, current = 'topics', body }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${html(title)}</title><meta name="description" content="${attr(description)}"><link rel="canonical" href="${canonical}"><link rel="stylesheet" href="/assets/css/site.css"></head><body data-current="${current}"><div data-site-header></div><main id="main">${body}</main><div data-site-footer></div><script src="/assets/js/site.js" defer></script></body></html>`;
}

export function topicPage(topic, items) {
  const others = TOPICS.filter(other => other.slug !== topic.slug).map(other => `<a class="tag" href="/topics/${other.slug}/">${html(other.name)}</a>`).join('');
  const sections = HUBS.map(([hub, hubName]) => {
    const list = items.filter(item => item.hub === hub);
    if (!list.length) return '';
    return `<section class="section"><div class="shell"><div class="section-head"><div><div class="eyebrow">${hubName}</div><h2>${list.length} ${list.length === 1 ? 'article' : 'articles'} from ${hubName}</h2></div></div><div class="grid grid-2">${list.map(card).join('')}</div></div></section>`;
  }).join('');
  const body = `<section class="detail-hero"><div class="shell"><div class="eyebrow"><a href="/topics/">Topics</a></div><h1>${html(topic.title)}</h1><p class="lead">${html(topic.intro)}</p></div></section>${sections}<section class="section"><div class="shell"><div class="section-head"><div><div class="eyebrow">More topics</div><h2>Explore another problem area.</h2></div><p class="section-intro">Facing something specific in your own business? <a href="/contact/">Tell Mellorca what is happening</a> and we will point you to the right starting point.</p></div><div class="tag-row">${others}</div></div></section>`;
  return page({ title: `${topic.title} | Mellorca`, description: topic.description, canonical: `${SITE_URL}/topics/${topic.slug}/`, body });
}

export function topicsIndex(groups) {
  const cards = TOPICS.map(topic => `<a class="card card-link" href="/topics/${topic.slug}/"><span class="kicker">${groups.get(topic.slug).length} articles</span><h3>${html(topic.title)}</h3><p>${html(topic.description)}</p></a>`).join('');
  const body = `<section class="detail-hero"><div class="shell"><div class="eyebrow">Topics</div><h1>Browse Mellorca by the problem you are facing.</h1><p class="lead">Every Mellorca article, grouped by the business problem it deals with. Each topic brings together practical guides, cost analysis, warning signs, problem explainers and human stories in one place.</p></div></section><section class="section"><div class="shell"><div class="grid grid-2">${cards}</div></div></section>`;
  return page({ title: 'Topics: Digital Operations Problems by Area | Mellorca', description: 'Browse Mellorca articles by business problem: automation and AI, integration, data and reporting, finance, sales, inventory, security, cloud, manual work, resilience and people.', canonical: `${SITE_URL}/topics/`, body });
}

export function renderTopicPages(source) {
  const groups = groupByTopic(readCards(source));
  const files = new Map([['topics/index.html', topicsIndex(groups)]]);
  for (const topic of TOPICS) files.set(`topics/${topic.slug}/index.html`, topicPage(topic, groups.get(topic.slug)));
  return files;
}

export function sitemapWithTopics(xml) {
  const wanted = ['/topics/', ...TOPICS.map(topic => `/topics/${topic.slug}/`)].map(path => `${SITE_URL}${path}`);
  const missing = wanted.filter(url => !xml.includes(`<loc>${url}</loc>`));
  if (!missing.length) return xml;
  return xml.replace('</urlset>', `${missing.map(url => `<url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`);
}

// Build-time links into the topic pages: a "browse by topic" row on each hub
// page, and a "topics" row at the end of each article, so the topic pages and
// the articles they gather link to each other without editing article sources.
export function topicLinker(source) {
  if (!existsSync(join(source, 'topics', 'index.html'))) return html => html;
  const byHref = new Map(readCards(source).map(item => [item.href, topicsFor(item)]));
  const tags = topics => topics.map(topic => `<a class="tag" href="/topics/${topic.slug}/">${html(topic.name)}</a>`).join('');
  const hubs = new Set(HUBS.map(([hub]) => `/${hub}/`));
  return (page, route) => {
    if (hubs.has(route)) {
      const row = `<section class="section"><div class="shell"><div class="section-head"><div><div class="eyebrow">Browse by topic</div><h2>Looking for a specific problem?</h2></div><p class="section-intro">Every Mellorca article is also grouped by business problem, across all five hubs. <a href="/topics/">See all topics</a>.</p></div><div class="tag-row">${tags(TOPICS)}</div></div></section>`;
      return page.replace(/(<main id="main"[^>]*>[\s\S]*?<\/section>)/, `$1${row}`);
    }
    const topics = byHref.get(route);
    if (!topics || !page.includes('<div class="callout">')) return page;
    const row = `<div class="tag-row" aria-label="Topics"><span class="muted">Topics:</span>${tags(topics)}</div>`;
    const at = page.lastIndexOf('<div class="callout">');
    return `${page.slice(0, at)}${row}${page.slice(at)}`;
  };
}

function main() {
  const source = resolve(process.argv.includes('--source') ? process.argv[process.argv.indexOf('--source') + 1] : 'website');
  const check = process.argv.includes('--check');
  const files = renderTopicPages(source);
  const stale = [];
  for (const [rel, content] of files) {
    const target = join(source, rel);
    if (existsSync(target) && readFileSync(target, 'utf8') === content) continue;
    stale.push(rel);
    if (!check) {
      mkdirSync(join(target, '..'), { recursive: true });
      writeFileSync(target, content, 'utf8');
    }
  }
  const known = new Set(TOPICS.map(topic => topic.slug));
  const topicsDir = join(source, 'topics');
  for (const entry of existsSync(topicsDir) ? readdirSync(topicsDir, { withFileTypes: true }) : []) {
    if (entry.isDirectory() && !known.has(entry.name)) {
      stale.push(`topics/${entry.name}/`);
      if (!check) rmSync(join(topicsDir, entry.name), { recursive: true, force: true });
    }
  }
  const sitemapFile = join(source, 'sitemap.xml');
  const sitemap = readFileSync(sitemapFile, 'utf8');
  const updated = sitemapWithTopics(sitemap);
  if (updated !== sitemap) {
    stale.push('sitemap.xml');
    if (!check) writeFileSync(sitemapFile, updated, 'utf8');
  }
  if (check && stale.length) {
    console.error(`Topic pages are out of date: ${stale.join(', ')}. Run npm run topics:render.`);
    process.exit(1);
  }
  console.log(check ? 'Topic pages are up to date.' : `Topic pages written (${stale.length} changed).`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) main();
