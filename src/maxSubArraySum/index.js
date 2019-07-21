/**
 * Write a function called maxSubArraySum which accepts an array of integers
 * and an int called n.
 * The function should calculate the maximun sum of n consecutive items in
 * the array.
 * examples:
 * - ([1,2,5,2,8,1,5], 2) // 10
 * - ([1,2,5,2,8,1,5], 4) // 17
 * - ([4,2,1,6], 1)       // 6
 * - ([4,2,1,6,2], 4)     // 14
 */

/**
 * Gets an Array of integers and calculates the sum of n consecutive items in
 * the array.
 *
 * Notes:
 * - this doesn't use nested loops but it sums every group of n of the array
 *   which is not too eficient
 * - this is also hard to read
 *
 * @param {Array<Integer>} arr
 * @param {Integer} n
 * @returns {Integer}
 */
function maxSubArraySumA(arr, n) {
  if (!arr.length || arr.length < n) {
    return null;
  }

  let startIndex = 0;
  let endIndex = n - 1;
  let currentIndex = startIndex;

  let max = 0;
  let currentSum = 0;

  while (endIndex < arr.length) {
    if (currentIndex > endIndex) {
      startIndex++;
      endIndex++;
      currentIndex = startIndex;

      max = Math.max(max, currentSum);
      currentSum = 0;
    }

    currentSum += arr[currentIndex];
    currentIndex++;
  }

  return max;
}

/**
 * Best Solution!!!
 * Gets an Array of integers and calculates the sum of n consecutive items in
 * the array.
 * @param {Array<Integer>} arr
 * @param {Integer} n
 * @returns {Integer}
 */
// O(n)
function maxSubArraySumB(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let max = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }

  max = tempSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    max = Math.max(max, tempSum);
  }

  return max;
}

module.exports = { maxSubArraySumA, maxSubArraySumB };