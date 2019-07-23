/**
 * write a recursive function that returns true if the string passed is
 * palindrome
 */
function isPalindromeA(str) {
  let reversed = '';

  function next(index) {
    if (index >= str.length) {
      return;
    }

    reversed = str[index] + reversed;
    next(index + 1);
  }

  next(0);

  return reversed.toLocaleLowerCase() === str.toLowerCase();
}

function isPalindromeB(str){
  if (str.length === 1) {
    return true;
  }

  if (str.length === 2) {
    return str[0] === str[1];
  }

  if (str[0] === str.slice(-1)) {
    return isPalindromeB(str.slice(1, -1));
  }

  return false;
}


module.exports = { isPalindromeA, isPalindromeB };