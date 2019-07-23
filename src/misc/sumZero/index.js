/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined
 * if a pair does not exist.
 * examples:
 * sumZero([-3, -2, -1, 0, 1, 2, 3])  // [-3, 3]
 * sumZero([-2, 0, 1, 3])             // undefined
 * sumZero([1, 2, 3])                 // undefined
 */
// O(n)
function sumZeroA(list) {
  let leftIndex = 0;
  let rightIndex = list.length - 1;
  let result;

  while (leftIndex < rightIndex) {
    let rightValue = list[rightIndex];
    let leftValue = list[leftIndex];
    let sum = leftValue + rightValue;

    if (sum > 0) {
      rightIndex--;
    }
    else if (sum < 0) {
      leftIndex++;
    }
    else {
      result = [leftValue, rightValue];
      break;
    }
  }

  return result;
}

module.exports = { sumZeroA }
