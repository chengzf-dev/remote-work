// solution.test.ts
import { mergeTwoLists, ListNode } from './solution';

describe('mergeTwoLists', () => {
    test('merge two sorted lists', () => {
        const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const merged = mergeTwoLists(l1, l2);
        expect(merged).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
    });
    test('one list empty', () => {
        const l1 = null;
        const l2 = new ListNode(0);
        const merged = mergeTwoLists(l1, l2);
        expect(merged).toEqual(l2);
    });
    test('both lists empty', () => {
        const l1 = null;
        const l2 = null;
        const merged = mergeTwoLists(l1, l2);
        expect(merged).toBeNull();
    });
    test('lists of different lengths', () => {
        const l1 = new ListNode(1);
        const l2 = new ListNode(2, new ListNode(3));
        const merged = mergeTwoLists(l1, l2);
        expect(merged).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    });
});

