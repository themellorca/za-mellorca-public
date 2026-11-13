// Shared layout. Rendered into deploy HTML; browser JS only enhances it.
const navigation = [
  ['services', '/services/', 'Services'],
  ['solutions', '/solutions/', 'Solutions'],
  ['insights', '/insights/', 'Insights'],
  ['impact', '/impact/', 'Impact'],
  ['patterns', '/patterns/', 'Patterns'],
  ['discovery', '/discovery/', 'Discovery'],
  ['moments', '/moments/', 'Moments'],
  ['about', '/about/', 'About'],
  ['contact', '/contact/', 'Contact'],
];

// Shared buyer-context choices, used by the briefing sign-up and the Contact form.
export const INDUSTRIES = [
  ['professional-services', 'Professional services (legal, accounting, consulting)'],
  ['financial-services', 'Financial services and insurance'],
  ['healthcare', 'Healthcare and medical'],
  ['retail-ecommerce', 'Retail and e-commerce'],
  ['manufacturing-distribution', 'Manufacturing and distribution'],
  ['logistics-transport', 'Logistics and transport'],
  ['property-construction', 'Property, construction and real estate'],
  ['education', 'Education and training'],
  ['technology', 'Technology and software'],
  ['media-marketing', 'Media, marketing and creative'],
  ['hospitality-travel', 'Hospitality, travel and leisure'],
  ['energy-mining-utilities', 'Energy, mining and utilities'],
  ['agriculture-food', 'Agriculture and food'],
  ['public-nonprofit', 'Public sector and non-profit'],
  ['other', 'Other'],
];
export const ROLES = [
  ['owner-founder', 'Owner or founder'],
  ['executive', 'Executive or managing director'],
  ['operations', 'Operations'],
  ['finance', 'Finance'],
  ['technology', 'IT or technology'],
  ['manager', 'Manager or team lead'],
  ['other', 'Other'],
];
export const options = list => list.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');

// Routes where the sign-up band would compete with the page's own form.
const noSignup = /^\/(?:contact|briefing|readiness-checklist|data-trust-check|infrastructure-review)\/|^\/404\.html$/;

export function signupBand(route) {
  return `<section class="signup-band" data-signup-band aria-labelledby="signup-title"><div class="shell signup-grid"><div><div class="eyebrow">The Mellorca Briefing</div><h2 id="signup-title">Practical notes on systems, operations and automation.</h2><p class="section-intro">New articles and field notes on fixing disconnected systems and manual work, sent when there is something worth reading. No sales sequence.</p></div><form class="form signup-form" data-signup-form method="post" action="/api/subscribe"><div class="form-grid"><div class="field field-full"><label for="signup-email">Work email</label><input id="signup-email" name="email" type="email" autocomplete="email" required maxlength="160"></div><div class="field"><label for="signup-industry">Your industry</label><select id="signup-industry" name="industry" required><option value="">Select one</option>${options(INDUSTRIES)}</select></div><div class="field"><label for="signup-role">Your role <span class="muted">(optional)</span></label><select id="signup-role" name="role"><option value="">Select one</option>${options(ROLES)}</select></div></div><input type="hidden" name="page" value="${route}"><div class="honeypot" aria-hidden="true"><label>Leave this field empty<input name="company_site" tabindex="-1" autocomplete="off"></label></div><button class="btn btn-primary" type="submit">Get the briefing</button><p class="small muted signup-note">Unsubscribe at any time. See our <a href="/legal/privacy/">privacy notice</a>.</p><div class="form-status" data-form-status role="status" aria-live="polite"></div></form></div></section>`;
}

// Every article ends with a direct route to a conversation, not only the sign-up.
const articleRoute = /^\/(?:insights|impact|patterns|discovery|moments)\/[^/]+\/$/;
export const articleCta = `<section class="section-tight" data-article-cta><div class="shell"><div class="article-cta"><div><h2>Recognise this in your business?</h2><p>Tell us what is happening in your own words. We will suggest the right starting point, whether that is a diagnosis or a defined project.</p></div><div class="actions"><a class="btn btn-primary" href="/contact/">Talk to Mellorca</a><a class="btn btn-secondary" href="/services/">Explore services</a></div></div></div></section>`;

export function renderLayout(html, route) {
  const current = html.match(/<body\b[^>]*data-current="([^"]*)"/i)?.[1] || '';
  const links = navigation.map(([key, href, label]) => {
    const active = current === key ? ` aria-current="${route === href ? 'page' : 'location'}"` : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }).join('');
  const header = `<header class="site-header" data-site-header><a class="skip-link" href="#main">Skip to content</a><div class="shell nav"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">M</span><span>MELLORCA</span></a><button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="main-navigation">Menu</button><nav id="main-navigation" class="nav-links" data-nav-links aria-label="Primary">${links}</nav><a class="nav-cta" href="/contact/">Talk to Mellorca</a></div></header>`;
  const footer = `<footer class="site-footer" data-site-footer><div class="shell"><div class="footer-grid"><div><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">M</span><span>MELLORCA</span></a><p class="footer-brand">Mellorca designs, improves and automates the digital systems businesses depend on to operate.</p><a class="btn btn-primary footer-cta" href="/contact/">Talk to Mellorca</a></div><div><div class="footer-title">Services</div><div class="footer-links"><a href="/services/digital-systems-audit/">Digital Systems Audit</a><a href="/services/systems-implementation-integration/">Implementation & Integration</a><a href="/services/digital-operations-improvement/">Operations Improvement</a><a href="/services/business-automation-ai-workflows/">Automation & AI Workflows</a><a href="/services/managed-digital-operations/">Managed Digital Operations</a><a href="/services/">All Services</a></div></div><div><div class="footer-title">Explore</div><div class="footer-links"><a href="/solutions/">Solutions</a><a href="/insights/">Insights</a><a href="/impact/">Impact</a><a href="/patterns/">Patterns</a><a href="/discovery/">Discovery</a><a href="/moments/">Mellorca Moments</a><a href="/resources/">Resources</a><a href="/topics/">Topics</a><a href="/briefing/">The Mellorca Briefing</a><a href="/about/">About Mellorca</a><a href="/how-we-work/">How We Work</a><a href="/where-we-work/">Where We Work</a><a href="/about/qwaname-kenobisan/">Qwaname Kenobisan</a><a href="/contact/">Contact</a></div></div><div><div class="footer-title">Legal</div><div class="footer-links"><a href="/legal/privacy/">Privacy</a><a href="/legal/terms/">Terms</a><a href="/legal/data-handling/">Data Handling</a><a href="/legal/">Legal Hub</a></div></div></div><div class="footer-bottom"><span>© <span data-year></span> Mellorca. All rights reserved.</span><span>Digital Infrastructure · Digital Operations · Business Automation</span></div></div></footer>`;
  for (const marker of ['header', 'footer']) {
    const placeholder = `<div data-site-${marker}></div>`;
    if (html.split(placeholder).length !== 2) {
      throw new Error(`${route}: expected one empty shared ${marker} placeholder`);
    }
    const band = marker === 'footer' && !noSignup.test(route) ? signupBand(route) : '';
    html = html.replace(placeholder, marker === 'header' ? header : band + footer);
  }
  // Skip articles whose own template already closes with a primary Contact button.
  const hasPrimaryContact = /class="btn btn-primary" href="\/contact\//.test(html);
  if (articleRoute.test(route) && !hasPrimaryContact && html.split('</main>').length === 2) html = html.replace('</main>', articleCta + '</main>');
  return html.replace('<main id="main">', '<main id="main" tabindex="-1">');
}
