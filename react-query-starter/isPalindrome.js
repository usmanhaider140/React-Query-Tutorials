/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  var slow = head;
  var fast = head;
  var prev = null;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    var temp = slow;
    slow = slow.next;
    temp.next = prev;
    prev = temp;
  }
  if (fast !== null) {
    slow = slow.next;
  }
  while (slow !== null) {
    if (slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }
  return true;
};
