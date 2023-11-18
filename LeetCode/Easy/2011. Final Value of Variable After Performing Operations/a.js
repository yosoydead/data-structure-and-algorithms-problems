/**
 * 2011. Final Value of Variable After Performing Operations
Easy
1.5K
163
Companies
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
 

Constraints:

1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".
 */
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let i = 0;
  let j = operations.length - 1;

  const obj = {
    "+": 0,
    "-": 0
  };

  let res = 0;

  while (i < j) {
      // eval(operations[i]);
      // eval(operations[j]);
      if (operations[i] === "X++" || operations[i] === "++X") {
          res++;
      } else {
          res--;
      }
    if (operations[j] === "X++" || operations[j] === "++X") {
          res++;
      } else {
          res--;
      }

    //   const len = operations[i].length - 1;
    //   obj[operations[i][0]]++
    //   obj[operations[i][len]]++

    //   obj[operations[j][0]]++
    //   obj[operations[j][len]]++
      i++;
      j--;
  }

  if (i === j) {
    if (operations[i] === "X++" || operations[i] === "++X") {
          res++;
      } else {
          res--;
      }
  }

    return res;
  return obj["+"] - obj["-"];
};