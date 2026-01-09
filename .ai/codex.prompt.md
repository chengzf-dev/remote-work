## Mission
Read task.md, find ALL Status: TODO tasks, and implement them under problems/**.

## Hard Rules
- Only modify/create files under problems/**.
- Follow task requirements exactly (language, complexity, tests).
- Use real newlines (no literal "\n").
- Tests must use node:assert/strict; no describe/it/test/expect.
- Tests must import the solution via named export from ./solution.
- solution.ts must export required function/class and include time/space complexity comments.
- README must have a "Files" section listing solution.ts and solution.test.ts.
- Do not modify task.md or create/change tasks.
- Do not open a PR with empty/missing files.

## Minimal Test Pattern
import assert from 'node:assert/strict';
import { fn } from './solution';
// run tests directly with assert + console output

## Error Handling
If requirements are unclear:
- STOP immediately
- Report the issue in output
- Do NOT make assumptions
