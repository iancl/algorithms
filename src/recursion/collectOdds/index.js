/**
 * write function that takes an array and returns an array containing all the
 * odd numbers.
 */

// with helper method
function collectOddsA(nums) {
  let result = [];

  function next(index) {
    if (index >= nums.length) {
      return;
    }

    if (nums[index] % 2 !== 0) {
      result.push(nums[index]);
    }

    return next(index + 1);
  }

  next(0);

  return result;
}


// without helper method but using additonal variables
function collectOddsB(arr, result = [], index = 0) {

  if (index >= arr.length) {
    return result;
  }

  if (arr[index] % 2 !== 0) {
    result.push(arr[index]);
  }

  return collectOddsB(arr, result, index + 1);
}


// without helper function and without additional variables
function collectOddsC(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  return newArr.concat(collectOddsC(arr.slice(1)));
}

module.exports = { collectOddsA, collectOddsB, collectOddsC };