// Function to find two indices of numbers that add up to target
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>(); // Store number and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate complement
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i]; // Return indices if complement found
        }
        numMap.set(nums[i], i); // Store index
    }
    return []; // Return empty if no solution found
}

// Example Usage
// console.log(twoSum([2, 7, 11, 15], 9)); // Outputs: [0, 1]

export { twoSum };

