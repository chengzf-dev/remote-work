# LeetCode AI Task Board (DeepSeek Supervised)

## Rules
- Codex must complete ALL tasks with status TODO
- Codex must NOT touch tasks marked DONE
- DeepSeek supervisor (this project) is responsible for reviewing Codex PRs
- Fix required: previous PR only added codex-output.md; you must generate solution files under problems/** for every TODO task
- Fix required: PR #3 still only added codex-output.md; do not open a PR without problems/** solutions
- Fix required: PR #4 added empty 0-byte solution files. Implement real code + tests; empty files are not acceptable.
- Fix required: PR #7 wrote literal "\\n" characters into files. Use real newlines; files must be valid TypeScript.
- Fix required: Tests must run with plain Node (use node:assert/strict). Do not use Jest unless you add the runner (not allowed here).
- Fix required: Correct test case for LC-560: nums [2,-1,2,-1], k=2 should return 3, not 4.
- Fix required: Do not use describe/it/test/expect; write standalone Node tests with assert and console output.
- Fix required: Ensure all solutions export the required functions/classes so tests can import them.
- Fix required: LC-001 twoSum must return [] when no solution; do not throw.
- Fix required: README file lists must name actual files (solution.ts, solution.test.ts), not placeholders.
- Fix required: solution.ts must include time/space complexity comments per task requirements.

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

<!-- Trigger workflow (2) -->
