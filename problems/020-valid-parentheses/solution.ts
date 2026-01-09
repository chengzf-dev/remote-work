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
