// Print an integer denoting the number of swaps to get the queue into a given order
// If it's not possible within the constraits, print "Too chaotic"

// A person can, at most, swap two times

// [1, 2, 3, 4, 5]; // Init
// [1, 2, 3, 5, 4]; // One swap
// [1, 2, 5, 3, 4]; // Two swaps
// [2, 1, 5, 3, 4]; // Three swaps

// A value cannot move more than two places
// If an integer minus the index is gte 3, it's too chaotic
//
// From one index before the original position to where it currently is
// check if any values are greater, then increment
//
// return the count

function minimumBribes(q) {
  let count = 0
  const len = q.length
  for (let i = len - 1; i >= 0; i--) {
    if (q[i] - (i + 1) >= 3) {
      return 'Too chaotic'
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        count++
      }
    }
  }
  return count
}

console.log(minimumBribes([2, 1, 5, 3, 4])) // 3
console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])) // Too chaotic
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])) // 7
