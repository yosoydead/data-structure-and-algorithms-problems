/**
 * 566. Reshape the Matrix
Easy
3.3K
377
Companies
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
 */
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  const res = Array(r)
    .fill(null)
    .map(() => Array(c).fill(null));

  let mi = 0;
  let mj = 0;

  const maxj = mat[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      res[i][j] = mat[mi][mj];
      mj++;
      if (mj === maxj) {
        mj = 0;
        mi++;
      }
    }
  }

  return res;
};
