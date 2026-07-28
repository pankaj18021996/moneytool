const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const targets = [
  'app/car-loan-calculator/CarLoanCalculatorClient.tsx',
  'app/business-loan-calculator/page.tsx',
  'app/education-loan-calculator/EducationLoanClient.tsx',
];

test('loan pages render the shared calculator component', () => {
  for (const relPath of targets) {
    const absolutePath = path.join(process.cwd(), relPath);
    const source = fs.readFileSync(absolutePath, 'utf8');
    assert.match(source, /LoanCalculator/, `${relPath} should render the shared loan calculator`);
  }
});
