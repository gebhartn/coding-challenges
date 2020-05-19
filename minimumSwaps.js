// function minimumSwaps(arr, current = 0, count = 0) {
//   const len = arr.length;
//   for (let i = current; i < len; i++) {
//     if (arr[i] - (i + 1) !== 0) {
//       let index = arr[i] === 1 ? 0 : arr.indexOf(i + 1);
//       let temp = arr[i];
//       arr[i] = arr[index];
//       arr[index] = temp;
//       // This is useless to me
//       return minimumSwaps(arr, current + 1, count + 1);
//     }
//   }
//   return count;
// }

// function minimumSwaps(arr) {
//   const len = arr.length;
//   let count = 0;
//   let current = 0;
//   for (let i = current; i < len; i++) {
//     if (arr[i] - (i + 1) !== 0) {
//       let index = arr[i] === 1 ? 0 : arr.indexOf(i + 1);
//       let temp = arr[i];
//       arr[i] = arr[index];
//       arr[index] = temp;
//       count++;
//       current++;
//     }
//   }
//   return count;
// }

function minimumSwaps(arr) {
  let count = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    while (arr[i] !== i + 1) {
      let current = arr[i];
      arr[i] = arr[current - 1];
      arr[current - 1] = current;
      count++;
    }
  }
  return count;
}

console.log(minimumSwaps([4, 3, 1, 2])); // 3
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); // 5
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // 3
console.log(
  minimumSwaps([
    2,
    31,
    1,
    38,
    29,
    5,
    44,
    6,
    12,
    18,
    39,
    9,
    48,
    49,
    13,
    11,
    7,
    27,
    14,
    33,
    50,
    21,
    46,
    23,
    15,
    26,
    8,
    47,
    40,
    3,
    32,
    22,
    34,
    42,
    16,
    41,
    24,
    10,
    4,
    28,
    36,
    30,
    37,
    35,
    20,
    17,
    45,
    43,
    25,
    19,
  ])
);
