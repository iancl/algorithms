/**
 * Given a sorted array of integers, write a function that accepts a value
 * and returns the index where the value passed to the function is located.
 * If the value is not found, it returns -1
 * examples:
 * - ([1,2,3,4,5,6], 4) === 3
 * - ([1,2,3,4,5,6], 6) === 5
 * - ([1,2,3,4,5,6], 11) === -1
 */
// O(log(n));
function binarySearchA(sortedArr, n) {
  let min = 0;
  let max = sortedArr.length - 1;
  let result = -1;

  while (min <= max) {
    let middle = Math.floor( (min + max) / 2 );

    if (sortedArr[middle] < n) {
      min = middle + 1;
    }
    else if (sortedArr[middle] > n) {
      max = middle - 1;
    }
    else {
      result = middle;
      break;
    }
  }

  return result;
}

console.log('-------------------', binarySearchA([1], 1));
module.exports = { binarySearchA }