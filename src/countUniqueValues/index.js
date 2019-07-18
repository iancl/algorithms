/**
 * Implement a function which accepts a sorted array, and counts the unique
 * values in the array, there can be negative numbers in the array, but it
 * will always be sorted.
 * examples:
 * - [1,1,1,1,1,2] = 2
 * - [1,2,3,4,4,4,7,7,12,12,13] = 7
 * - [] = 0
 * - [-2, -1, -1, 0, 1] = 4
 */

 // O(n) using an array to store unique values
function countUniqueValuesA(sortedArray) {
  if (!sortedArray.length) {
    return 0;
  }

  let list = [];

  for (let item of sortedArray) {
    if (list[list.length - 1] !== item) {
      list.push(item)
    }
  }

  return list.length;
}

//O(n) solution using two pointers
function countUniqueValuesB(sortedArray) {
  let counter = 0;
  let prevValue;

  for (let i = 0; i < sortedArray.length; i++) {
    if (prevValue !== sortedArray[i]) {
      prevValue = sortedArray[i];
      counter++;
    }
  }


  return counter;
}

module.exports = { countUniqueValuesA, countUniqueValuesB };
