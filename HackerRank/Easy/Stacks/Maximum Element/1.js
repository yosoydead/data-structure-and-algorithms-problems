/**
 * You have an empty sequence, and you will be given  queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.
Function Description

Complete the getMax function in the editor below.

getMax has the following parameters:
- string operations[n]: operations as strings

Returns
- int[]: the answers to each type 3 query

Input Format

The first line of input contains an integer, . The next  lines each contain an above mentioned query.

Constraints

Constraints



All queries are valid.

Sample Input

STDIN   Function
-----   --------
10      operations[] size n = 10
1 97    operations = ['1 97', '2', '1 20', ....]
2
1 20
2
1 26
1 20
2
3
1 91
3
Sample Output

26
91
 */
function getMax(operations) {
  // Write your code here
  // console.log(operations)
  const stack = [];
  const b = [];

  for (let i = 0; i < operations.length; i++) {
    const ops = operations[i].split(" ");
    if (ops[0] === "1") {
      stack.push(+ops[1]);
    }
    if (ops[0] === "2") {
      stack.pop();
    }
    if (ops[0] === "3") {
      let biggest = -9999999;
      for (let i = 0; i < stack.length; i++) {
        if (stack[i] > biggest) {
          biggest = stack[i];
        }
      }
      b.push(biggest);
    }
  }
  return b;
}
getMax(["1 97", "2", "1 20", "2", "1 26", "1 20", "2", "3", "1 91", "3"]);
