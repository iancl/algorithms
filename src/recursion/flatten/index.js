/**
 * write a recursive function that takes a matrix and returns a new array
 * with all the values flattened
 * examples:
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) // [1,2,3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */
function flattenA(oldArr) {
  let newArr = [];

  for (let item of oldArr) {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flattenA(item));
    }
    else {
      newArr.push(item);
    }
  }

  return newArr;
}

module.exports = { flattenA };