/**
 * Write a recursive function which accepts an array and a callback.
 * the function returns true if a single value in the  array returns
 * true when passed to the callback. Otherwise it returns false.
 *
 * examples:
 * someRecursive([1,2,3,4], isOdd) // true
 * someRecursive([4,6,8,9], isOdd) // true
 * someRecursive([4,6,8], isOdd) // false
 * someRecursive([4,6,8], val => val > 10); // false
 */

function someRecursive(arr, fn) {
  if (!arr.length) {
    return false;
  }

  if (fn.call(null, arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), fn);
}

module.exports = someRecursive;
