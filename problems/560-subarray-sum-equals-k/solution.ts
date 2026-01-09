// Function to count subarrays that sum to k using prefix sum and hash map
function subarraySum(nums: number[], k: number): number {
    const prefixSumCounts = new Map<number, number>(); // Store prefix sums and their counts
    prefixSumCounts.set(0, 1); // Initialize count for sum = 0
    let count = 0, currentSum = 0;

    for (const num of nums) {
        currentSum += num; // Update the prefix sum
        if (prefixSumCounts.has(currentSum - k)) {
            count += prefixSumCounts.get(currentSum - k)!; // Count valid subarrays
        }
        prefixSumCounts.set(currentSum, (prefixSumCounts.get(currentSum) || 0) + 1); // Update counts
    }

    return count; // Total number of subarrays
}

export { subarraySum };

