// solution.test.ts
import { maxSubArray } from './solution';

describe('maxSubArray', () => {
    test('example cases', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
        expect(maxSubArray([1])).toBe(1);
        expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
        expect(maxSubArray([-1, -2, -3, -4])).toBe(-1);
    });
});

