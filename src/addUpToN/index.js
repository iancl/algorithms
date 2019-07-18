/**
 * Returns the sum of all the numbers from 0 to n by using a loop
 * Time complexity: O(n) Linear
 * @param {Integer} n
 * @returns {Integer}
 */
function addUpToSlow(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

/**
 * Returns the sum of all the numbers from 0 to n
 * Time complexity: O(1) Constant
 * @param {Integer} n
 * @returns {Integer}
 */
function addUpToFast(n) {
  return n * (n + 1) / 2;
}

module.exports = { addUpToSlow, addUpToFast };