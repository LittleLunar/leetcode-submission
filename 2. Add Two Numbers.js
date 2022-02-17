/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val ?? 0
  this.next = next ?? null
}

var addTwoNumbers = function(l1, l2) {
  let n1 = l1
  let n2 = l2
  const returner = new ListNode()
  let cur = returner
  let remainder = 0

  while (true) {
    if (n1) {
      cur.val += n1.val
      n1 = n1.next
    }
    if (n2) {
      cur.val += n2.val
      n2 = n2.next
    }
    cur.val += remainder
    remainder = Math.floor(cur.val / 10)
    cur.val %= 10

    if (n1 || n2 || remainder !== 0) {
      cur.next = new ListNode()
      cur = cur.next
    } else {
      return returner
    }
  }
};

l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
l2 = new ListNode(5, new ListNode(6, new ListNode(7)))

console.log(addTwoNumbers(l1, l2))