/**
 * Write a function that accepts two parameters - an array of positive integers
 * and a positive integer.
 * The function should return the minimal length of a contiguous subarray
 * of which the sum is greater that or equal to the integer passed.
 *
 * examples:
 * - ([2,3,1,2,4,3], 7) === // 2 because [4,3] is the smallest subarray
 * - ([2,1,6,5,4], 9) // 2 [5,4]
 * - ([3,1,7,11,2,9,8,21,62,33,19], 52) === 1 [62]
 * - ([1,4,16,22,5,7,8,9,10], 39) === 3
 * - ([1,4,16,22,5,7,8,9,10], 55) === 5
 * - ([4,3,3,8,1,2,3], 11) === 2
 * - ([1,4,16,22,5,7,8,9,10], 95) === 0
 */

// definitely needs to be refactored to avoid using arrays
// not the best solution
function minSubArrayLen(arr, n) {
  if (!arr.length || n === 0) {
    return 0;
  }

  let end = 0;
  let minLen = Infinity;
  let start = 0;
  let sum = 0;

  // look will exit on 2 cases:
    // 1. start < arr.length
    // 2. if statement: end > arr.length
  while (start < arr.length) {
    // move end index forward
    if (end < arr.length && sum < n) {
      sum += arr[end];
      end++;
    }
    // store minLength and increase start index
    else if (sum >= n) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    }
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubArrayLen;