# LeetCode AI Task Board (DeepSeek Supervised)

## Rules
- Codex must complete ALL tasks with status TODO
- Codex must NOT touch tasks marked DONE
- DeepSeek supervisor (this project) is responsible for reviewing Codex PRs
- Fix required: previous PR only added codex-output.md; you must generate solution files under problems/** for every TODO task

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

---

### LC-053 Maximum Subarray
- Status: TODO
- Path: problems/053-maximum-subarray
- Requirements:
  - TypeScript
  - Implement Kadane's algorithm to find the contiguous subarray with the largest sum
  - Time complexity: O(n), Space complexity: O(1)
  - Handle all-negative arrays correctly (return the largest negative number)
  - Include time & space complexity comments
  - Add at least 4 test cases (including: all negative, all positive, mix, single element)

---

### LC-560 Subarray Sum Equals K
- Status: TODO
- Path: problems/560-subarray-sum-equals-k
- Requirements:
  - TypeScript
  - Given an integer array nums and an integer k, return the total number of subarrays whose sum equals to k
  - Implement the optimal solution using prefix sum + hash map
  - Time complexity: O(n), Space complexity: O(n)
  - Do not use brute force O(n^2) solution
  - Include time & space complexity comments
  - Add at least 5 test cases (including negative numbers, k=0, empty-like edge cases)

<!-- Trigger workflow (2) -->
