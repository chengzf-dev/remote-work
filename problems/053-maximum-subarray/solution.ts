// Function to find the maximum subarray using Kadane's algorithm
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0]; // Initialize max sum
    let currentSum = nums[0]; // Initialize current sum

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // Max of current num or sum
        maxSum = Math.max(maxSum, currentSum); // Update max sum
    }

    return maxSum; // Return the maximum subarray sum
}

export { maxSubArray };

