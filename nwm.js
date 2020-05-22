// // Iterate the array, if the input at i + 1 matches i
// // Swap the value at i and increment a counter

// // Helper function to swap the value
// const flip = n => (n === 0 ? 1 : 0)

// // Doesn't handle alternative results, fails some test cases:

// // console.log(solution([1, 1, 0, 1, 1]))

// // const solution = A => {
// //   // Store total number of swaps
// //   let total = 0

// //   for (let i = 0; i < A.length; i++) {
// //     if (A[i] !== 1 && A[i] !== 0) {
// //       throw new Error('Invalid input, expected 0 or 1')
// //     }
// //     if (A[i + 1] === A[i]) {
// //       // Swap the value so the comparison continues to be valid
// //       A[i + 1] = flip(A[i])
// //       total++
// //     }
// //   }
// //   return total
// // }

// // Create two "result arrays" and track the number of flips that are incorrect
// // Determine which count is lower and return the lowest possible flip

// const buildIdeal = n => {
//   const targetOne = new Array(n).fill(0)
//   const targetTwo = new Array(n).fill(0)

//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       targetOne[i] = 1
//     } else {
//       targetTwo[i] = 1
//     }
//   }

//   console.log(targetOne, targetTwo)

//   return [targetOne, targetTwo]
// }

// function solution(A) {
//   const [targetOne, targetTwo] = buildIdeal(A.length)

//   let errorOne = 0
//   for (let el in A) {
//     if (A[el] !== targetOne[el]) {
//       errorOne++
//     }
//   }

//   let errorTwo = 0
//   for (let el in A) {
//     if (A[el] !== targetTwo[el]) {
//       errorTwo++
//     }
//   }

//   return errorOne < errorTwo ? errorOne : errorTwo
// }

// // console.log(solution([1, 1, 1]))
// console.log(solution([1, 0, 1, 0, 1, 1]))
// // console.log(solution([1, 1, 0, 1, 1]))
// // console.log(solution([]))
//

// const findDistance = (p1, p2) => {
//   const result = Math.sqrt((p1[0] - p1[1]) ** 2 + (p2[0] - p2[1]) ** 2)

//   return result
// }

// function solution(blocks) {
//   const matrix = blocks.map((element, index) => [index, element])
//   const ideal = [0, 2]
//   const distances = matrix.map(spot => findDistance(ideal, spot))

//   return distances
// }

// function solution(blocks) {
//   let max = 0
//   let run = 1
//   for (let i = 0; i < blocks.length; i++) {
//     if (blocks[i + 1] >= blocks[i]) {
//       run++
//       max = run
//     } else if (blocks[i + 1] < blocks[i]) {
//       run = 0
//     }

//     if (run > max) {
//       max = run
//     }
//   }

//   return max
// }

// Iterate over the blocks
// for each i, check if elements before i are less than left pointer
// for each i, check if elements after i are greater than right pointer

function solution(blocks) {
  let max = 0
  for (let i = 0; i < blocks.length; i++) {
    let low = i
    let high = i

    let lowResult = []
    let highResult = []

    while (blocks[low - 1] >= blocks[low]) {
      lowResult.push(blocks[low - 1])
      low--
    }

    while (blocks[high + 1] >= blocks[high]) {
      highResult.push(blocks[high + 1])
      high++
    }

    let current = [...lowResult, blocks[i], ...highResult]

    if (current.length > max) {
      max = current.length
    }
  }
  return max
}

console.log(solution([2, 6, 8, 5])) // 3
console.log(solution([1, 5, 5, 2, 6])) // 4c
console.log(solution([1, 1])) // 2

