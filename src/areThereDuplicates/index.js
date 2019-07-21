/**
 * Implement a function called areThereDuplicates which accepts a variable
 * number of arguments and checks wether there are any duplicates among
 * the arguments passed in. You can solve this by using the frequency
 * counter pattern or multiple pointers pattern.
 *
 * examples:
 * - (1,2,3) === false
 * - (1,2,2) === false
 * - ('a','b','c', 'a') === true
 */
function areThereDuplicatesA(...args) {
  let charMap = {};
  let sortedArgs = args.sort((a, b) => a > b);

  // if there's a duplicate just exit the loop immediately
  for (let char of sortedArgs) {
    if (!charMap[char]) {
      charMap[char] = true;
    }
    else {
      return true;
    }
  }

  return false;
}


function areThereDuplicatesB(...args) {
  let sortedArgs = args.sort((a, b) => a > b);

  let start = 0;
  let end = 1;

  while (end < args.length) {
    if (sortedArgs[start] === sortedArgs[end]) {
      return true;
    }

    start++;
    end++;
  }

  return false;
}

module.exports = { areThereDuplicatesA, areThereDuplicatesB };