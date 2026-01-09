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

