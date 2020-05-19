// Fix one element, i

const countTriplets = (arr, r) => {
  const two = {}
  const three = {}
  let count = 0
  for (let x of arr) {
    count += three[x]
    three[x * r] += two[x]
    two[x * r] += 1
  }
  return count
}

console.log(countTriplets([1, 4, 16, 64], 4)) // 2
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)) // 6
console.log(countTriplets([1, 5, 5, 25, 125], 5)) // 4
