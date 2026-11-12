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

export function renderLayout(html, route) {
  const current = html.match(/<body\b[^>]*data-current="([^"]*)"/i)?.[1] || '';
  const links = navigation.map(([key, href, label]) => {
    const active = current === key ? ` aria-current="${route === href ? 'page' : 'location'}"` : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }).join('');
  const header = `<header class="site-header" data-site-header><a class="skip-link" href="#main">Skip to content</a><div class="shell nav"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">M</span><span>MELLORCA</span></a><button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="main-navigation">Menu</button><nav id="main-navigation" class="nav-links" data-nav-links aria-label="Primary">${links}</nav><a class="nav-cta" href="/contact/">Talk to Mellorca</a></div></header>`;
  const footer = `<footer class="site-footer" data-site-footer><div class="shell"><div class="footer-grid"><div><a class="brand" href="/"><span class="brand-mark">M</span><span>MELLORCA</span></a><p class="footer-brand">Mellorca designs, improves and automates the digital systems businesses depend on to operate.</p></div><div><div class="footer-title">Services</div><div class="footer-links"><a href="/services/digital-systems-audit/">Digital Systems Audit</a><a href="/services/systems-implementation-integration/">Implementation & Integration</a><a href="/services/digital-operations-improvement/">Operations Improvement</a><a href="/services/business-automation-ai-workflows/">Automation & AI Workflows</a><a href="/services/managed-digital-operations/">Managed Digital Operations</a><a href="/services/">All Services</a></div></div><div><div class="footer-title">Explore</div><div class="footer-links"><a href="/solutions/">Solutions</a><a href="/insights/">Insights</a><a href="/impact/">Impact</a><a href="/patterns/">Patterns</a><a href="/discovery/">Discovery</a><a href="/moments/">Mellorca Moments</a><a href="/about/">About Mellorca</a><a href="/about/qwaname-kenobisan/">Qwaname Kenobisan</a><a href="/contact/">Contact</a></div></div><div><div class="footer-title">Legal</div><div class="footer-links"><a href="/legal/privacy/">Privacy</a><a href="/legal/terms/">Terms</a><a href="/legal/data-handling/">Data Handling</a><a href="/legal/">Legal Hub</a></div></div></div><div class="footer-bottom"><span>© <span data-year></span> Mellorca. All rights reserved.</span><span>Digital Infrastructure · Digital Operations · Business Automation</span></div></div></footer>`;
  for (const marker of ['header', 'footer']) {
    const placeholder = `<div data-site-${marker}></div>`;
    if (html.split(placeholder).length !== 2) {
      throw new Error(`${route}: expected one empty shared ${marker} placeholder`);
    }
    html = html.replace(placeholder, marker === 'header' ? header : footer);
  }
  return html.replace('<main id="main">', '<main id="main" tabindex="-1">');
}
