/**
 * Given 2 positive integers, find out if the two numbers have the same
 * frequency of digits
 * examples:
 * - (182, 281) // true
 * - (34, 14)  / false
 * - (3589578, 5879385) true
 * - (22, 222) // false
 */
function sameFrequencyA(n1, n2) {
  let sortedNum1 = n1.toString();
  let sortedNum2 = n2.toString();

  if (sortedNum1.length !== sortedNum2.length) {
    return false;
  }

  sortedNum1 = sortedNum1.split('').sort();
  sortedNum2 = sortedNum2.split('').sort();

  return sortedNum1.every((item, index) => {
    return item === sortedNum2[index];
  });
}

module.exports = { sameFrequencyA };