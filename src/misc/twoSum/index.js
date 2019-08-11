/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // build an object that contains the array values as keys and the indexes as
  // values
  // {number: index, ...}
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }


  for (let i = 0; i < nums.length; i++) {

    // the complement is the value that is needed for the sum of the current
    // number to reach the target
    let complement = target - nums[i];

    // the number has to exist in the map and can't be the same number so
    // we want to make sure that its index is not the same as the current
    // we're using
    if (map[complement] != null && map[complement] !== i) {
      return [i, map[complement]];
    }
  }

}

module.exports = twoSum;