const swap = (head, k) => {
  if (!head) return null

  let fast = head
  let slow = head

  for (let i = 0; i < k; i++) {
    fast = fast.next
  }

  if (!fast) {
    return head.next
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
}
