# Merge Two Sorted Lists

This function merges two sorted linked lists into one sorted linked list.

## Usage

Create instances of ListNode and pass them to the function:

```typescript
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const merged = mergeTwoLists(l1, l2);
```

## Time Complexity
- O(n + m) - where n and m are the lengths of the two lists.

## Space Complexity
- O(1) - we only use a constant amount of space for pointers.

