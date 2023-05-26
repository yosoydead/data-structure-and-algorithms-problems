/**
 * 83. Remove Duplicates from Sorted List
Easy
7.3K
248
Companies
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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
var deleteDuplicates = function(head) {
  // let copy = head.next;
  if (!head) { return null; }
  const result = new ListNode();
  result.val = head.val;
  head = head.next;
  let h = result;
  // console.log(result);

  while (head) {
      if (head.val !== h.val) {
          const newNode = new ListNode(head.val);
          h.next = newNode;
          h = h.next;
      }
      head = head.next;
  }

  return result;
};