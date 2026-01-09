import { strict as assert } from 'assert';
import { twoSum } from './solution';

// Test cases
function runTests() {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1], 'Test Case 1 Failed'); // Simple case
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2], 'Test Case 2 Failed'); // Found in the end
    assert.deepEqual(twoSum([2, 5, 5, 11], 10), [1, 2], 'Test Case 3 Failed'); // Duplicates
    assert.deepEqual(twoSum([1, 2, 3], 7), [], 'Test Case 4 Failed'); // No solution
    console.log('All test cases passed!');
}
runTests();

