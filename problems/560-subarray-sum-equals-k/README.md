# Subarray Sum Equals K

This function returns the total number of continuous subarrays whose sum equals to k.

## Usage

You can call this function with an array and a target sum like so:

```
const count = subarraySum([1, 1, 1], 2);
console.log(count); // Outputs: 2
```

## Time Complexity
- O(n) - we iterate through the array once.

## Space Complexity
- O(n) - we use a hash map to store sums.

