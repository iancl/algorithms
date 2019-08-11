// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain
// a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.
// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


function addTwoNumbers(l1, l2) {
  const response = new ListNode(null);
  let list1 = l1;
  let list2 = l2;
  let carry = 0;
  let temp = response;

  while (list1 || list2) {
    const val1 = list1 ? list1.val : 0;
    const val2 = list2 ? list2.val : 0;
    const sum = val1 + val2 + carry;

    carry = parseInt(sum / 10);
    temp.next = new ListNode(sum % 10);

    temp = temp.next;
    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }

  if (carry) {
    temp.next = new ListNode(carry);
  }

  return response.next;
}

module.exports = addTwoNumbers;
