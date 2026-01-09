# LeetCode AI Task Board (DeepSeek Supervised)

## Rules
- Complete ALL tasks with Status: TODO; do NOT touch DONE.
- Use real newlines (no literal "\\n" in files).
- Tests must use node:assert/strict and no test runner (no describe/it/test/expect).
- solution.ts must export the required function/class and include time/space complexity comments.
- README must include a "Files" section listing solution.ts and solution.test.ts.

## Example (Must Follow)

### solution.test.ts
```
import assert from 'node:assert/strict';
import { twoSum } from './solution';

function runTest(name: string, input: [number[], number], expected: number[]): void {
  const result = twoSum(...input);
  assert.deepStrictEqual(result, expected, name);
  console.log(`✓ ${name}`);
}

runTest('sample', [[2, 7, 11, 15], 9], [0, 1]);
```

---

## Tasks

### LC-001 Two Sum
- Status: TODO
- Path: problems/001-two-sum
- Requirements:
  - TypeScript
  - Use a hash map for O(n) time
  - Return indices of the two numbers that add up to target
  - Handle duplicate values correctly
  - Include time & space complexity comments
  - Add at least 4 test cases (including duplicates, no solution, negatives, minimal length)
  - For the "no solution" case, return [] (do not throw)

---

### LC-021 Merge Two Sorted Lists
- Status: TODO
- Path: problems/021-merge-two-sorted-lists
- Requirements:
  - TypeScript
  - Iterative or recursive merge of two sorted linked lists
  - O(n+m) time, O(1) space for iterative (O(n+m) space for recursive due to call stack)
  - Problem: Merge two sorted linked lists and return it as a sorted list
  - Reuse or define ListNode class/interface
  - Use dummy node technique for clean implementation
  - Include time & space complexity comments
  - Add at least 4 test cases (including edge cases: both empty, one empty, equal length, different lengths)

<!-- Trigger workflow (5) -->
