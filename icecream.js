// costs, an array of costs for each ice cream
// money, the amount of money that they have to spend

// Create a hash map to store seen values
// Iterate the values in costs
// subtract current from the target costs
// if the result is in the map, return the map[result] and index + 1
// * NOTE: solution wants 1-based index
// else store the seen value with a 1-based index

function whatFlavors(costs, money) {
  const map = {};
  for (let i = 0; i < costs.length; i++) {
    let current = costs[i];
    let result = money - current;
    if (map[result]) {
      console.log(map[result], i + 1);
    }
    if (!map[current]) {
      map[current] = i + 1;
    }
  }
}

console.log(whatFlavors([2, 2, 4, 3], 4)); // 1, 2
console.log(whatFlavors([4, 3, 2, 5, 7], 8)); // 2, 4
console.log(whatFlavors([7, 2, 5, 4, 11], 12)); // 1, 3
