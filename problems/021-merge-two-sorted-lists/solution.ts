// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Merges two sorted linked lists into one sorted linked list
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0); // Dummy node to simplify merging
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1; // Attach l1
            l1 = l1.next;
        } else {
            current.next = l2; // Attach l2
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 === null ? l2 : l1; // Attach remaining nodes
    return dummy.next; // Return merged list, excluding dummy node
}

// Time Complexity: O(n + m) where n and m are the lengths of the two lists.
// Space Complexity: O(1) for the iterative approach due to dummy node.
