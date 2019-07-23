/**
 * Write a function that returns a mapping of how many times each character
 * on a string appears on the string.
 */
// O(n)
function charCount_A(str) {
  const strArr = str.toLowerCase().match(/\w/ig);

  if (!strArr) {
    return {};
  }

  return strArr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
    return accumulator;
  }, {});
}

module.exports = { charCount_A };