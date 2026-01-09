import assert from 'node:assert/strict';
import { twoSum } from './solution';

function runTest(name: string, input: [number[], number], expected: number[]): void {
  const result = twoSum(...input);
  assert.deepStrictEqual(result, expected, name);
  console.log(`✓ ${name}`);
}

runTest('Sample Test 1', [[2, 7, 11, 15], 9], [0, 1]);
runTest('Sample Test 2', [[3, 2, 4], 6], [1, 2]);
runTest('Sample Test 3', [[3, 3], 6], [0, 1]);
