import assert from "node:assert/strict";
import { twoSum } from "./solution";
function runTest(name: string, input: [number[], number], expected: number[]): void {
  const result = twoSum(...input);
  assert.deepStrictEqual(result, expected, name);
  console.log(`✓ ${name}`);
}
runTest("sample", [[2, 7, 11, 15], 9], [0, 1]);

