/**
 * Write a function that takes a string containing parenthesis and
 * returns true if all parenthesis have a closing parenthesis
 *
 * i.e:
 * - ("[()]{}{[()()]()}") === true
 * - "[(])" === false
 * - ("[()]{}{[())()]()}") === false
 * - ("[()]{}{[()()]()}{") === false
 */
function balancedParenthesis(str) {
  let isBalanced = true;
  let stack = [];
  let map = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  let opening = Object.keys(map);

  for (let char of str) {
    if (opening.includes(char)) {
      stack.push(char);
    }
    else {
      let last = stack.pop();

      if (char !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}

module.exports = balancedParenthesis;