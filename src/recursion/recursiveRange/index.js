/**
 * Write a function which accepts and adds up all the numbers from 0 to the
 * number passed to the function
 * examples:
 * // recursiveRange(6) // 21
 * // recursiveRange(10) // 55
 */
function recursiveRange(n) {
  if (n === 1) {
    return 1;
  }

  return n + recursiveRange(n - 1)
}

module.exports = recursiveRange;