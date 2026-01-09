# LeetCode AI Task Board (DeepSeek Supervised)

## Rules
- Codex must complete ALL tasks with status TODO
- Codex must NOT touch tasks marked DONE
- Use real newlines (no literal "\\n" in files).
- Tests must use node:assert/strict and no test runner (no describe/it/test/expect).
- solution.ts must export the required function/class and include time/space complexity comments.
- README must include a "Files" section listing solution.ts and solution.test.ts.

## Example (Must Follow)

### solution.ts
```
// Time Complexity: O(n)
// Space Complexity: O(n)
export function twoSum(nums: number[], target: number): number[] {
  // ...
  return [];
}
```

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
- Completed: 2026-01-07
- Notes: Hash map O(n) solution with corrected test cases
- Fix: Use real newlines (no literal "\\n") in solution.ts, solution.test.ts, README.md; ensure README.md includes a "Files" section listing solution.ts and solution.test.ts

---

### LC-020 Valid Parentheses
- Status: TODO
- Path: problems/020-valid-parentheses
- Completed: 2026-01-07
- Notes: Stack-based O(n) solution with 5 comprehensive test cases
- Fix: Use real newlines (no literal "\\n") in solution.ts, solution.test.ts, README.md; ensure solution.ts exports isValid; include 5 comprehensive test cases

<!-- Trigger workflow (15) -->   
