import assert from 'node:assert/strict';
import { test } from 'node:test';
import { stripProvenance } from './build-site.mjs';

test('YAML-style provenance comments are removed from deploy HTML', () => {
  const html = '<head><title>x</title>\n<!--\ncontent_type: discovery\nrecord_id: DISC-461\nsource_file: editorial/articles/discovery/x.md\n--><p>Body</p></head>';
  const out = stripProvenance(html);
  assert.equal(out.includes('DISC-461'), false);
  assert.equal(out.includes('source_file'), false);
  assert.match(out, /<p>Body<\/p>/);
});

test('JSON-style provenance comments are removed from deploy HTML', () => {
  const html = '<p>a</p><!--\n  {\n   "content_type": "impact",\n   "editorial_system": "x"\n  }\n--><p>b</p>';
  assert.equal(stripProvenance(html), '<p>a</p><p>b</p>');
});

test('unrelated comments and neighbouring comments survive', () => {
  const html = '<!-- keep me --><p>a</p><!--\ncontent_type: moment\n--><!-- keep too -->';
  assert.equal(stripProvenance(html), '<!-- keep me --><p>a</p><!-- keep too -->');
});
