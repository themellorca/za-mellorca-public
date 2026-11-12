import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFrontMatter } from './article-source.mjs';
import { pickRelated, withRelated, words } from './related-links.mjs';

const article = (hub, slug, title, category, body = '') => ({ hub, category, title, body, url: `/${hub}/${slug}/`, words: words({ title, category, description: '' }) });

test('related links prefer shared topic words and the same hub, skip self and links already in the body', () => {
  const self = article('insights', 'cash', 'Cash flow forecasting for owners', 'Finance', 'See [x](/impact/cash-gap/).');
  const pool = [
    self,
    article('insights', 'forecast', 'Forecasting cash flow weekly', 'Finance'),
    article('impact', 'cash-gap', 'The cash flow gap', 'Finance'),
    article('patterns', 'cash-late', 'Cash flow arrives late', 'Finance'),
    article('insights', 'hiring', 'Hiring your first manager', 'People'),
    article('moments', 'invoice', 'The invoice that never came', 'Finance'),
  ];
  const picked = pickRelated(self, pool);
  assert.equal(picked.length, 3);
  assert.equal(picked[0], 'Forecasting cash flow weekly | /insights/forecast/');
  assert.ok(!picked.some(entry => entry.endsWith('/insights/cash/') || entry.endsWith('/impact/cash-gap/')));
});

test('related block is inserted before summary and parses back', () => {
  const text = '---\nhub: insights\ntitle: T\nsummary: S\n---\nBody';
  const out = withRelated(text, ['A | /insights/a/', 'B | /impact/b/']);
  assert.equal(out, '---\nhub: insights\ntitle: T\nrelated:\n  - A | /insights/a/\n  - B | /impact/b/\nsummary: S\n---\nBody');
  assert.deepEqual(parseFrontMatter(out).meta.related, ['A | /insights/a/', 'B | /impact/b/']);
  assert.match(withRelated('---\nhub: x\n---\n', ['A | /a/']), /hub: x\nrelated:\n  - A \| \/a\/\n---/);
});
