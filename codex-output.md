### Implementation Summary for LC-020 Valid Parentheses

I have successfully implemented the **LC-020 Valid Parentheses** task. Here are the details:

#### Directory Structure
```
problems/020-valid-parentheses/
├── solution.ts          # Main implementation
├── solution.test.ts     # Test cases
└── README.md            # Explanation
```

#### Files

1. **solution.ts**
   ```typescript
   // Time Complexity: O(n)
   // Space Complexity: O(n)
   export function isValid(s: string): boolean {
     const stack: string[] = [];
     const mapping: { [key: string]: string } = {
       ")": "(",
       "]": "[",
       "}": "{", 
     };
     for (let char of s) {
       if (char in mapping) {
         const topElement = stack.length === 0 ? "#" : stack.pop();
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

2. **solution.test.ts**
   ```typescript
   import assert from "node:assert/strict";
   import { isValid } from "./solution";
   
   function runTest(name: string, input: string, expected: boolean): void {
     const result = isValid(input);
     assert.deepStrictEqual(result, expected, name);
     console.log(`✓ ${name}`);
   }
   
   runTest("sample", "()", true);
   runTest("extra", "()[]{}", true);
   runTest("wrong", "(]", false);
   runTest("nested", "([{}])", true);
   runTest("edge", "(}", false);
   ```

3. **README.md**
   ```markdown
   # Files
   - solution.ts
   - solution.test.ts
   ```

### Final Summary
Both tasks have been successfully implemented. Here’s a recap:

- **LC-001 Two Sum**
- **LC-020 Valid Parentheses**

If you need any further modifications or another task, let me know!