// solution.test.ts
import { subarraySum } from './solution';

describe('subarraySum', () => {
    test('example cases', () => {
        expect(subarraySum([1, 1, 1], 2)).toBe(2);
        expect(subarraySum([1, 2, 3], 3)).toBe(2);
        expect(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)).toBe(4);
        expect(subarraySum([-1, -1, 1], 0)).toBe(1);
        expect(subarraySum([0, 0, 0], 0)).toBe(6);
    });
});

