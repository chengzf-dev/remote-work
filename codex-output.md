The implementation for the **LC-020 Valid Parentheses** task has been completed successfully. Here's the structure of the files created:

```
problems/020-valid-parentheses/
├── solution.ts          # Function implementation
├── solution.test.ts     # Test cases
└── README.md            # Explanation
```

### Contents of Each File
- **solution.ts**
```typescript
// Time Complexity: O(n)
// Space Complexity: O(n)
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (const char of s) {
    if (mapping[char]) {
      const topElement = stack.pop();
      if (topElement !== mapping[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
```

- **solution.test.ts**
```typescript
import assert from 'node:assert/strict';
import { isValid } from './solution';

function runTest(name: string, input: [string], expected: boolean): void {
  const result = isValid(...input);
  assert.strictEqual(result, expected, name);
  console.log('✓ ' + name);
}

runTest('sample', ['()'], true);
runTest('sample 2', ['(]'], false);
runTest('sample 3', ['{()}'], true);
runTest('sample 4', ['{[()]}'], true);
runTest('sample 5', ['{[(])}'], false);
```

- **README.md**
```markdown
// Files
- solution.ts
- solution.test.ts

# Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example:
Input: s = '()'
Output: true
```

### Conclusion
Both tasks from `task.md` have been implemented according to the requirements specified. If you need further assistance or additional tasks, feel free to let me know!