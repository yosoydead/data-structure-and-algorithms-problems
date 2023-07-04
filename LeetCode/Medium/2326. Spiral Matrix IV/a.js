/**
 * 2326. Spiral Matrix IV
Medium
597
21
Companies
You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

 

Example 1:


Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
Example 2:


Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.
 

Constraints:

1 <= m, n <= 105
1 <= m * n <= 105
The number of nodes in the list is in the range [1, m * n].
0 <= Node.val <= 1000
Accepted
30.1K
Submissions
40.1K
Acceptance Rate
75.0%
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(row, col, head) {
  const arr = Array.from({length: row}, () => Array.from({length: col}, () => -1));
  let c = head;
  let i, startRow = 0, startCol = 0;
  let m = arr.length;
  let n = arr[0].length;
  /*
      startRow - starting row index
      m - ending row index
      startCol - starting column index
      n - ending column index
      i - iterator 
  */

  while (c && startRow < m && startCol < n) {
      // print the first row from the remaining rows
      for (i = startCol; i < n; ++i) {
          if (!c) { break; }
          arr[startRow][i] = c.val;
          c = c.next;
      }
      startRow++;

      // print the last column from the remaining columns
      for (i = startRow; i < m; ++i) {
          if (!c) { break; }
          arr[i][n-1] = c.val;
          c = c.next;
      }
      n--;

      // print the last row from the remaining rows
      if (startRow < m) {
          for (i = n - 1; i >= startCol; --i) {
              if (!c) { break; }
              arr[m-1][i] = c.val;
              c = c.next;
          }
          m--;
      }

      // print the first column from the remaining columns
      if (startCol < n) {
          for (i = m - 1; i >= startRow; --i) {
              if (!c) { break; }
              arr[i][startCol] = c.val;
              c = c.next;
          }
          startCol++;
      }
  }

  return arr;
};