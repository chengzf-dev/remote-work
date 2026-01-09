# Two Sum

The twoSum function takes an array of integers and a target integer as inputs. It returns the indices of the two numbers such that they add up to the target. This solution uses a hash map to achieve O(n) time complexity.

## Function Signature

function twoSum(nums: number[], target: number): number[]

## Complexity
- **Time Complexity:** O(n) - We traverse the list containing n elements only once.
- **Space Complexity:** O(n) - The space used by the hash map is directly proportional to the number of elements.

## Test Cases
1. `twoSum([2, 7, 11, 15], 9)` should return `[0, 1]`.
2. `twoSum([3, 2, 4], 6)` should return `[1, 2]`.
3. `twoSum([3, 3], 6)` should return `[0, 1]`.
4. `twoSum([1, 2, 3], 7)` should throw an error since no two numbers add up to 7.
