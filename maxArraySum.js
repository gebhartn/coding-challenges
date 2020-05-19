// Given an array of integers, find the subset of non-adjacent elements
// with the maximum sum, and return the sum of that subset
// [jjjjjjjjj] <- Input
// [-2, 3, 5]
// [-2, 3]
// [-2, -4]
// [-2, 5]
// [1, -4]
// [1, 5]
// [3, 5] // Largest sum = 8 <- output

function maxSubsetSum(arr) {
  let incl = 0;
  let excl = 0;
  for (let i = 0; i < arr.length; i++) {
    let newExcl = excl > incl ? excl : incl;
    incl = excl + arr[i];
    excl = newExcl;
  }
  return excl > incl ? excl : incl;
}

// Test case
const testOne = [3, 7, 4, 6, 5, -15, -30, -100, 200];
console.log(maxSubsetSum(testOne)); // 13
