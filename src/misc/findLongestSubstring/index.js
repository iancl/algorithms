/**
 * Write a function that accepts a string and returns the length of the longest
 * substring with all distinct characters
 *
 * examples:
 * - ('') === 0
 * - ('rithmschool') === 7
 * - ('thisisawesome') === 6
 * - ('thecatinthehat') === 7
 * - ('bbbb') === 1
 * - ('longestsubstring') === 8
 * - ('thisishowwedoit') === 6
 */

 function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}


module.exports = { findLongestSubstring };