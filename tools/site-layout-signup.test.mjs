import assert from 'node:assert/strict';
import { test } from 'node:test';
import { renderLayout } from './site-layout.mjs';

const page = (main = '<p>Body</p>') => `<html><head></head><body><div data-site-header></div><main id="main">${main}</main><div data-site-footer></div></body></html>`;
const count = (html, marker) => html.split(marker).length - 1;

test('briefing sign-up band appears once on ordinary pages, with the route recorded', () => {
  const html = renderLayout(page(), '/services/');
  assert.equal(count(html, 'data-signup-band'), 1);
  assert.match(html, /name="page" value="\/services\/"/);
  assert.ok(html.indexOf('data-signup-band') < html.indexOf('data-site-footer'));
});

test('pages with their own form or no purpose for it skip the band', () => {
  for (const route of ['/contact/', '/contact/thank-you/', '/briefing/', '/briefing/thank-you/', '/404.html']) {
    assert.equal(count(renderLayout(page(), route), 'data-signup-band'), 0, route);
  }
});

test('articles without a closing Contact button get one call to action inside main', () => {
  const html = renderLayout(page(), '/discovery/some-article/');
  assert.equal(count(html, 'data-article-cta'), 1);
  assert.ok(html.indexOf('data-article-cta') < html.indexOf('</main>'));
});

test('articles that already close with a primary Contact button are left alone', () => {
  const html = renderLayout(page('<a class="btn btn-primary" href="/contact/">Start a conversation</a>'), '/insights/some-article/');
  assert.equal(count(html, 'data-article-cta'), 0);
});

test('hub index pages and core pages do not get the article call to action', () => {
  for (const route of ['/insights/', '/', '/services/digital-systems-audit/']) {
    assert.equal(count(renderLayout(page(), route), 'data-article-cta'), 0, route);
  }
});
