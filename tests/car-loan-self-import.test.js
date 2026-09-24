const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const pagePath = path.join(__dirname, '../app/car-loan-calculator/page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

test('car loan page imports the calculator component directly without self-referential dynamic import', () => {
  assert.ok(pageContent.includes('import CarLoanCalculatorClient from "./CarLoanCalculatorClient";'));
  assert.ok(!pageContent.includes('dynamic(() => import("./CarLoanCalculatorClient")'));
});
