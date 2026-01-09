// solution.test.ts
import { twoSum } from './solution';

describe('twoSum', () => {
    test('example cases', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });
    test('no solution', () => {
        expect(twoSum([1, 2, 3], 7)).toEqual([]);
    });
});

