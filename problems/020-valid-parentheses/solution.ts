// Time Complexity: O(n)
// Space Complexity: O(n)
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (const char of s) {
    if (map[char]) {
      stack.push(char);
    } else if (char in map) {
      if (map[stack.pop()!] !== char) return false;
    }
  }
  return stack.length === 0;
}
