/**
 * write a recursive function that takes a string and returns a new string in
 * reverse
 */
function reverseA(str) {
  let tmpStr = '';

  if (!str.length) {
    return tmpStr;
  }

  tmpStr = str[str.length - 1] + tmpStr;

  return tmpStr += reverseA(str.slice(0, str.length - 1));
}

function reverseB(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseB(str.slice(1)) + str[0];
}

module.exports = { reverseA, reverseB };