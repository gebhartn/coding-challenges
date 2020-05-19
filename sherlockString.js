// String is valid if all the character appear the same number of times
// String is also valid if he can remove just 1 character at 1 index in the string
// and the remaining characters will occur the same number of times.
//
// Given a string, s, determine if it is valid

// Input: string
// Output: "YES" or "NO"
//
// if s = abc, it is a valid string because:
// s = {a: 1, b: 1, c: 1}
// so is s = abcc
// since you can remove 1 c and have a valid string
// abccc is not valid, because you cannot remove a single character

function isValid(str) {
  const buffer = new Array(26).fill(0)

  for (let char of str) {
    let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
    buffer[index] += 1
  }
  const filtered = buffer.filter(x => x)
  const max = Math.max(...filtered)
  const min = Math.min(...filtered)
  console.log(min, max)
}

// console.log(isValid("abccc")); // NO
console.log(isValid('aabbcd')) // NO
console.log(isValid('aabbcdefgzzzzz')) // NO
// console.log(isValid("abcc")); // YES
// console.log(isValid("aabbccdd")); // YES
// console.log(isValid("aabbccd")); // YES
