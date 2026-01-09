import { strict as assert } from 'assert';
import { maxSubArray } from './solution';

// Test cases
function runTests() {
    assert.equal(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6, 'Test Case 1 Failed'); // [4,-1,2,1]
    assert.equal(maxSubArray([1]), 1, 'Test Case 2 Failed'); // Single element
    assert.equal(maxSubArray([5,4,-1,7,8]), 23, 'Test Case 3 Failed'); // Whole array
    assert.equal(maxSubArray([-1,-2,-3,-4]), -1, 'Test Case 4 Failed'); // All negative
    console.log('All test cases passed!');
}
runTests();

