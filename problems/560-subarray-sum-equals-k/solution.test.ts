import { strict as assert } from 'assert';
import { subarraySum } from './solution';

// Test cases
function runTests() {
    assert.equal(subarraySum([1,1,1], 2), 2, 'Test Case 1 Failed'); // [1,1], [1,1]
    assert.equal(subarraySum([1,2,3], 3), 2, 'Test Case 2 Failed'); // [1,2], [3]
    assert.equal(subarraySum([1,-1,0], 0), 3, 'Test Case 3 Failed'); // [1,-1], [0], [1,-1,0]
    assert.equal(subarraySum([], 0), 0, 'Test Case 4 Failed'); // Empty array
    assert.equal(subarraySum([2,-1,2,-1], 2), 3, 'Test Case 5 Failed'); // [2], [2,-1,2], [-1,2]
    console.log('All test cases passed!');
}
runTests();

