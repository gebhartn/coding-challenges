// Brute force was too slow
// initialize a new buffer array
// track our max, and current value
//

function arrayManipulation(n, queries) {
  const arr = new Array(n).fill(0);
  let max = 0;
  let current = 0;

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    arr[query[0] - 1] += query[2];
    arr[query[1]] -= query[2];
  }
  for (let q of arr) {
    current += q;
    if (current > max) {
      max = current;
    }
  }

  return max;
}

const maxQueries = (n, queries) => {
  const arr = new Array(n).fill(0);
  let max = 0;
  let current = 0;

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    arr[query[0] - 1] += query[2];
    arr[query[1]] -= query[2];
  }
  for (let q of arr) {
    current += q;
    if (current > max) {
      max = current;
    }
  }

  return max;
};

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
); // 200
