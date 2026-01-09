import assert from 'node:assert';
import twoSum from './solution';

// Test cases for LC-001 Two Sum
const testCases = [
    { input: [[2, 7, 11, 15], 9], expected: [0, 1] }, // standard case
    { input: [[3, 2, 4], 6], expected: [1, 2] }, // standard case
    { input: [[3, 3], 6], expected: [0, 1] }, // duplicate case
    { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] }, // negative numbers
    { input: [[1], 2], expected: [] }, // minimal length, no solution
];

testCases.forEach((tc, index) => {
    const result = twoSum(...tc.input);
    assert.deepStrictEqual(result, tc.expected, `Test case ${index + 1} failed: expected ${tc.expected}, got ${result}`);
});

console.log('All tests passed!');
