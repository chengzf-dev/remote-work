## Your Mission
1. Read task.md from the repository root
2. Identify ALL tasks with Status: TODO
3. Implement each TODO task sequentially
4. Create solution files under problems/** directory

## Rules
- ONLY modify or create files under problems/**
- Follow the exact requirements in each task (language, complexity, etc.)
- Use clear variable names and add comments for time/space complexity
- Always write real, non-empty implementations and tests. Empty files or only updating codex-output.md is a failure.
- Do NOT modify task.md or task descriptions
- Do NOT create new tasks or change requirements
- Do NOT write literal "\n" escape sequences into files. Use real newlines only.
- Tests MUST use plain Node with node:assert/strict. Do NOT use describe/it/test/expect or any test runner.
- Tests MUST import the solution with named exports (e.g., `import { twoSum } from './solution';`).
- README MUST include a "Files" section listing `solution.ts` and `solution.test.ts` explicitly.

## Output Structure
For each task (e.g., LC-001 Two Sum):
```
problems/001-two-sum/
├── solution.ts          # Main implementation
├── solution.test.ts     # Test cases (if needed)
└── README.md           # Explanation (optional)
```

## Completion Requirements (Must Pass)
- Every TODO task must have a non-empty `solution.ts`.
- Every TODO task must have a non-empty `solution.test.ts` with real tests.
- Every `solution.ts` must export the required function/class and include time/space complexity comments.
- Every `solution.test.ts` must import from `node:assert/strict` and run tests directly (no test runner).
- Every `README.md` must list the files by name (solution.ts, solution.test.ts).
- If you cannot implement a task, explain why and stop; do not open a PR with empty or missing files.

## Required Test Template (Example)
```
import assert from 'node:assert/strict';
import { twoSum } from './solution';

function runTest(name, input, expected) {
  const result = twoSum(...input);
  assert.deepStrictEqual(result, expected, name);
  console.log(`✓ ${name}`);
}

runTest('sample', [[2,7,11,15], 9], [0,1]);
```

## Error Handling
If requirements are unclear:
- STOP immediately
- Report the issue in output
- Do NOT make assumptions
