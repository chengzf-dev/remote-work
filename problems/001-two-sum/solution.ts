// Function to find two indices of numbers that add up to the target
export function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>(); // Store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate complement
        if (map.has(complement)) {
            return [map.get(complement)!, i]; // Return indices
        }
        map.set(nums[i], i); // Store number with its index
    }
    return []; // Return empty array if no solution
}

// Time Complexity: O(n) - Each element is processed once.
// Space Complexity: O(n) - In the worst case, all elements are stored in the map.
