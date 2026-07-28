const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const files = [
  'app/car-loan-calculator/CarLoanCalculatorClient.tsx',
  'app/education-loan-calculator/EducationLoanClient.tsx',
  'app/emi-calculator/EMIClient.tsx',
  'app/fd-calculator/FDCalculatorClient.tsx',
  'app/gst-calculator/GSTCalculatorClient.tsx',
];

test('calculator files do not import themselves', () => {
  for (const relPath of files) {
    const absolutePath = path.join(process.cwd(), relPath);
    const source = fs.readFileSync(absolutePath, 'utf8');
    const basename = path.basename(relPath, path.extname(relPath));
    const selfImportPattern = new RegExp(`import\\s+.+\\s+from\\s+"\\./${basename}"`);
    assert.equal(selfImportPattern.test(source), false, `${relPath} should not import itself`);
  }
});
