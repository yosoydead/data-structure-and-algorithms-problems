/**
 * 203. Remove Linked List Elements
Easy
7.4K
209
Companies
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
Accepted
952.9K
Submissions
2M
Acceptance Rate
46.6%
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) { return null; }
  
  while (head && head.val === val) {
      head = head.next;
  }

  let c = head;
  let prev = null;

  while (c) {
      if (c.val === val) {
          const n = c.next;
          prev.next = n;
          c = n;
          continue;
      }
      prev = c;
      c = c.next;
  }

  return head;
};