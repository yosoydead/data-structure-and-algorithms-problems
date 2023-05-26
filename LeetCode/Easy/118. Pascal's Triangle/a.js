/**
 * 118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) { return [ [1] ]; }
  if (numRows === 2) { return [ [1], [1, 1] ]; }

  const result = [ [1], [1, 1] ];

  for (let i = 2; i < numRows; i++) {
      const a = [];

      for (let j = 0; j <= i; j++) {
          if (j === 0 || j === i) {
              a[j] = 1;
          }
          const left = result[i-1][j-1];
          const right = result[i-1][j];
          if (left && right) {
              a[j] = left + right;
          }
      }
      result.push(a);
  }

  return result;
};