import { strict as assert } from "node:assert";
import { twoSum } from "./solution";

// Test cases for the twoSum function
const testCases = [
    { input: [[2, 7, 11, 15], 9], expected: [0, 1] }, // Regular case
    { input: [[3, 2, 4], 6], expected: [1, 2] }, // Regular case
    { input: [[3, 3], 6], expected: [0, 1] }, // Duplicate values
    { input: [[1, 2, 3], 7], expected: [] }, // No solution
    { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] }, // Negative numbers
];

// Test runner
testCases.forEach(({ input, expected }, index) => {
    const result = twoSum(...input);
    assert.deepEqual(result, expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
});
console.log("All tests passed!");
