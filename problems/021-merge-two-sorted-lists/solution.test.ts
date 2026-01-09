import { strict as assert } from "node:assert";
import { mergeTwoLists, ListNode } from "./solution";

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Test cases for the mergeTwoLists function
const testCases = [
    { l1: [1, 2, 4], l2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] }, // Regular case
    { l1: [], l2: [], expected: [] }, // Both lists empty
    { l1: [1], l2: [], expected: [1] }, // One list empty
    { l1: [], l2: [0], expected: [0] }, // Other list empty
    { l1: [1, 3], l2: [2], expected: [1, 2, 3] }, // Different lengths
];

// Test runner
testCases.forEach(({ l1, l2, expected }, index) => {
    const mergedList = mergeTwoLists(createLinkedList(l1), createLinkedList(l2));
    const result = []; // To collect values from the merged list
    let current = mergedList;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    assert.deepEqual(result, expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
});
console.log("All tests passed!");
