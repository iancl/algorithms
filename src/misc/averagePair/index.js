/**
 * Write a function that given a sorted array of integers and a target average,
 * determines if there is a pair of values in the array where the average of
 * the pair equals the target average.
 * There may be more than one pair that matches the average target.
 * (they don't have to be consecutive values)
 *
 * examples:
 * ([1,2,3], 2.5)  === true
 * ([1,3,3,5,6,7,10,12,19], 8) === true
 * ([-1,0,3,4,5,6], 4.1) === false
 * ([], 4) === false
 */
// O(log n)
function averagePairA(sortedArr, average) {
  if (!sortedArr.length) {
    return false;
  }

  let start = 0;
  let end = sortedArr.length - 1;

  while (start < end) {
    let tmpAvg = (sortedArr[start] + sortedArr[end]) / 2

    if (tmpAvg < average) {
      start++;
    }
    else if (tmpAvg > average) {
      end--;
    }
    else {
      return true;
    }
  }

  return false;
}

module.exports = { averagePairA }