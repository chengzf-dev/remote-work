// solution.ts

function twoSum(nums: number[], target: number): number[] {
    const numMap: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            // Return the indices of the two numbers
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    // No solution found
    return [];
}

// Time Complexity: O(n)
// Space Complexity: O(n)

