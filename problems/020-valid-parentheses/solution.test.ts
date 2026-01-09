import assert from 'node:assert/strict';
import { isValid } from './solution';

function runTest(name: string, input: string, expected: boolean): void {
  const result = isValid(input);
  assert.strictEqual(result, expected, name);
  console.log(`✓ ${name}`);
}

runTest('Sample Test 1', '()', true);
runTest('Sample Test 2', '()[]{}', true);
runTest('Sample Test 3', '(]', false);
runTest('Sample Test 4', '([)]', false);
runTest('Sample Test 5', '{[]}', true);
