/**
 * 1721. Swapping Nodes in a Linked List
Medium
4.8K
160
Companies
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
Accepted
280.7K
Submissions
408.5K
Acceptance Rate
68.7%
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {

  let len = 0;
  let c = head;

  while (c) {
      len++;
      c = c.next;
  }

  let first = null;
  let second = null;
  let count = 0;
  c = head;

  while (c) {
      if (count === k-1) {
          first = c;
      }
      if (count === len - k) {
          second = c;
      }
      count++;
      c = c.next;
  }

  const vf = first.val;
  const vs = second.val;

  second.val = vf;
  first.val = vs;
  return head;
};