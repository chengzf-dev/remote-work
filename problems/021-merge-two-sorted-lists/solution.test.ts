import assert from 'node:assert';
import { mergeTwoLists, ListNode } from './solution';

// Test cases for LC-021 Merge Two Sorted Lists
const createList = (values) => {
    let dummy = new ListNode(0);
    let current = dummy;
    values.forEach(value => {
        current.next = new ListNode(value);
        current = current.next;
    });
    return dummy.next;
};

const testCases = [
    { input: [createList([]), createList([])], expected: [] }, // both lists empty
    { input: [createList([1, 2, 4]), createList([])], expected: [1, 2, 4] }, // one list empty
    { input: [createList([1, 2, 4]), createList([1, 3, 4])], expected: [1, 1, 2, 3, 4, 4] }, // standard case
    { input: [createList([1]), createList([2]), createList([3])], expected: [1, 2, 3] } // lists with different lengths
];

testCases.forEach((tc, index) => {
    const result = mergeTwoLists(tc.input[0], tc.input[1]);
    const resultArray = [];
    let current = result;
    while (current !== null) {
        resultArray.push(current.value);
        current = current.next;
    }
    assert.deepStrictEqual(resultArray, tc.expected, `Test case ${index + 1} failed: expected ${tc.expected}, got ${resultArray}`);
});

console.log('All tests passed!');
