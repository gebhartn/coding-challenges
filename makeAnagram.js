// a: string, b: string, output: integer
// Given two strings, a and b, that may or may not be the same length
// determine the minimum number of character deletions required to make
// a and b anagrams.

// Initialize a buffer for each character in the dictionary (a-z lowercase)
// If the character exists in string a, increment the buffer at the character index
// If the character exists in string b, decrement the buffer at the character index
//
// Return the absolute sum of the array

function makeAnagram(a, b) {
  const buffer = new Array(26).fill(0)

  for (let char of a) {
    buffer[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
  }

  for (let char of b) {
    buffer[char.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1
  }

  return buffer.map(Math.abs).reduce((a, b) => a + b)
}

console.log(
  makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'),
)
// console.log(makeAnagram("aab", "aabc"));
