/**
 * Write a function that takes an array of numbers and returns the product of
 * them all.
 */

// function that uses custom parameters
function productOfArrayA(nums, index = 0, product = 1) {
  if (index >= nums.length) {
    return product;
  }

  return productOfArrayA(nums, index + 1, product * nums[index]);
}

// recursive function with helper
function productOfArrayB(arr) {
  let product = 1;

  function next(index) {
    if (index >= arr.length) {
      return 1;
    }

    product *= arr[index];
    next(index + 1)
  }

  next(0);

  return product;
}


function productOfArrayC(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArrayC(arr.slice(1));
}

module.exports = { productOfArrayA, productOfArrayB, productOfArrayC };