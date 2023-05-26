/**
 * 2404. Most Frequent Even Element

Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.

 

Example 1:

Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.
Example 2:

Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.
Example 3:

Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element.
 

Constraints:

1 <= nums.length <= 2000
0 <= nums[i] <= 105
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  const frec = {};
  let num = -1;

  for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      if (nums[i] % 2 === 0) {

          frec[nums[i]] ? frec[nums[i]]++ : frec[nums[i]] = 1;
          const cf = frec[current];
          if (cf > num) {
              num = cf;
          }
      }
  }

  if (num > -1) { num = Math.min(...Object.keys(frec).filter((key) => frec[key] === num)); }
  return num;
};