/**
 * 35. Search Insert Position
Easy
13.3K
583
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[j] === target) {
      return j;
    }
    let m = Math.floor((i + j) / 2);

    if (nums[m] < target) {
      i = m + 1;
    } else if (nums[m] > target) {
      j = m - 1;
    } else {
      return m;
    }
  }

  return i;
};
