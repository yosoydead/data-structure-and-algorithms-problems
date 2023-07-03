/**
 * 876. Middle of the Linked List
Easy
9.5K
281
Companies
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
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
var middleNode = function (head) {
  if (head.next === null) {
    return head;
  }

  let iter = head;
  let count = 0;

  while (iter) {
    count++;
    iter = iter.next;
  }

  let i = 0;
  count % 2 === 0 ? (count = count / 2) + 1 : (count = Math.floor(count / 2));
  while (i < count) {
    head = head.next;
    i++;
  }
  return head;
};
