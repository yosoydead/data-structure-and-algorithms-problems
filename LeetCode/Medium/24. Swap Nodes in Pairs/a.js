/**
 * 24. Swap Nodes in Pairs
Medium
10.8K
391
Companies
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
Accepted
1.2M
Submissions
1.9M
Acceptance Rate
62.7%
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) { return null; }
  if (!head.next) { return head; }

  let c = head;

while (c && c.next) {
  const n = c.next.next;
  const next = c.next.val;
  const t = c.val;

  c.val = next;
  c.next.val = t;
  c = n;
}

return head;
};