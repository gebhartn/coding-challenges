// There are N rectangular buildings standing along the road next to each other.
// The K-th building is of size H[K] × 1.

// Because a renovation of all of the buildings is planned, we want to cover them with rectangular banners
// until the renovations are finished. Of course, to cover a building, the banner has to be at least as high as the building.
// We can cover more than one building with a banner if it is wider than 1.

// What is the minimum total area of at most two banners which cover all of the buildings?

function solution(arr) {
  let min = Infinity

  if (arr.length === 1) return arr[0]

  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i + 1)
    const right = arr.slice(i + 1, arr.length)

    const leftMax = Math.max(...left)
    const rightMax = right.length && Math.max(...right)

    const leftBanner = leftMax * left.length
    const rightBanner = rightMax ? rightMax * right.length : Infinity

    if (leftBanner + rightBanner < min) {
      min = leftBanner + rightBanner
    }
  }
  return min
}

console.log(solution([4]))
// 4 x 1         = 4

console.log(solution([3, 1, 4])) // 10
// 3 x 1 + 4 x 2 = 11
// 3 x 2 + 4 x 1 = 10
// 4 x 3         = 12

console.log(solution([5, 3, 2, 4])) // 17
// 5 x 1 + 4 x 3 = 17
// 5 x 2 + 4 x 2 = 18
// 5 x 3 + 4 x 1 = 19
// 5 x 4         = 20

console.log(solution([5, 3, 5, 2, 1])) // 19
// 5 x 1 + 5 x 4 = 25
// 5 x 2 + 5 x 3 = 25
// 5 x 3 + 2 x 2 = 19
// 5 x 4 + 1     = 20
// 5 x 5         = 25

console.log(solution([7, 7, 3, 7, 7])) // 35
// 7 x 1 + 7 x 4 = 35
// 7 x 2 + 7 x 3 = 35
// 7 x 3 + 7 x 2 = 35
// 7 x 4 + 7 x 1 = 35
// 7 x 5         = 35
