const test = require('node:test');
const assert = require('node:assert/strict');
const { buildCanonicalUrl } = require('../app/lib/seo.js');

test('buildCanonicalUrl maps legacy calculators paths to live routes', () => {
  assert.equal(buildCanonicalUrl('/calculators/fd-calculator'), 'https://www.moneytool.in/fd-calculator');
  assert.equal(buildCanonicalUrl('/calculators/salary-calculator'), 'https://www.moneytool.in/salary-calculator');
});

test('buildCanonicalUrl keeps the canonical route for live pages', () => {
  assert.equal(buildCanonicalUrl('/emi-calculator'), 'https://www.moneytool.in/emi-calculator');
});
