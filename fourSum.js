const fourSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j)
    }
  }
}

const data = [1, 0, -1, 0, -2, 2]

console.log(fourSum(data, 0))
