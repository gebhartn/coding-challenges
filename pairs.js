// Take in an array if integers, arr, and a target integer, k
// Find all the combinations of values in arr such that their difference is k

// Create a map to store seen values
// iterate array, if current + k in map, total ++
// return total

function pairs(arr, k) {
  const map = {};
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    !map[arr[i]] ? (map[arr[i]] = 1) : map[arr[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let target = current + k;
    if (map[target]) {
      total++;
    }
    if (!map[current]) {
      map[current] = i + 1;
    }
  }
  return total;
}

console.log(pairs([1, 5, 3, 4, 2], 2)); // 3

