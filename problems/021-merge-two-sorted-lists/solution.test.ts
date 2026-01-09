import { strict as assert } from 'assert';
import { ListNode, mergeTwoLists } from './solution';

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

// Test cases
function runTests() {
    // Merging two sorted linked lists
    let l1 = createLinkedList([1, 2, 4]);
    let l2 = createLinkedList([1, 3, 4]);
    let merged = mergeTwoLists(l1, l2);

    let result = [];
    while (merged !== null) {
        result.push(merged.val);
        merged = merged.next;
    }
    assert.deepEqual(result, [1, 1, 2, 3, 4, 4], 'Test Case 1 Failed'); // Merged output

    // Testing with one empty list
    l1 = createLinkedList([]);
    l2 = createLinkedList([0]);
    merged = mergeTwoLists(l1, l2);
    result = [];
    while (merged !== null) {
        result.push(merged.val);
        merged = merged.next;
    }
    assert.deepEqual(result, [0], 'Test Case 2 Failed'); // Expected output: [0]

    console.log('All test cases passed!');
}
runTests();

