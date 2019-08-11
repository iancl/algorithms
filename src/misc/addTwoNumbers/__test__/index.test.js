const addTwoNumbers = require('../');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('addTwoNumbers()', () => {
  test('should return 7 -> 0 -> 8', () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3)

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4)

    const response = addTwoNumbers(l1, l2);

    const digit1 = response.val;
    const digit2 = response.next.val;
    const digit3 = response.next.next.val;

    expect(digit1).toEqual(7);
    expect(digit2).toEqual(0);
    expect(digit3).toEqual(8);

  });

  test('should return 0 -> 1', () => {
    const l1 = new ListNode(5);
    const l2 = new ListNode(5);

    const response = addTwoNumbers(l1, l2);
    const digit1 = response.val;
    const digit2 = response.next.val;

    expect(digit1).toEqual(0);
    expect(digit2).toEqual(1);
  });
});