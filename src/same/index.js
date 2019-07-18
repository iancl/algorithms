/**
 * write a function called same, which accepts 2 arrays.
 * The function should return true if every value in the array has it's
 * corresponding value squared in the second array. The frequency of values
 * must be the same.
 * examples:
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,0]) // false
 * same([1,2,1], [4,4,1]) // false because must be same frequency
 */

 // ============================================================================
 // Solution A *preferred*
 // ============================================================================
 // O(n)
function sameA(arr1, arr2) {
  // lengths of two arrays must be the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedA = arr1.sort();
  const sortedB = arr2.sort();

  result = sortedA.every((item, index) => {
    return Math.pow(item, 2) === sortedB[index];
  });

  return result;
}

// ============================================================================
 // Solution B *using frequency maps*
 // ============================================================================
// O(n)
function sameB(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // build a frequencyMap for each array
  let frequencyCounterA = buildFrequencyMap(arr1);
  let frequencyCounterB = buildFrequencyMap(arr2);

  for (let key in frequencyCounterA) {
    let squaredKey = Math.pow(key, 2);

    if (!squaredKey in frequencyCounterB) {
      return false;
    }
    else {
      if (frequencyCounterA[key] !== frequencyCounterB[squaredKey]) {
        return false;
      }
    }
  }

  return true;
}

// helper function used in sameB()
// O(n)
function buildFrequencyMap(arr) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
    return accumulator;
  }, {});
}

module.exports = { sameA, sameB };