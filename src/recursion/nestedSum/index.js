/**
 * write a function that returns the sum of all even numbers in an object that
 * that contains nested numbers;
 */

// Asumes there aren't any arrays
function nestedEvenSum(obj) {
  let sum = 0;

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === 'object') {
      sum += nestedEvenSum(val);
    }
    else if (typeof val === 'number' && val % 2 === 0) {
      sum += val;
    }
  }

  return sum;
}

module.exports = nestedEvenSum;