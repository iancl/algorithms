const balancedParenthesis = require('../');

describe('parenthesisMatching()', () => {
  test('should return true', () => {
    const str1 = "[()]{}{[()()]()}";
    const str2 = "()";

    expect(balancedParenthesis(str1)).toBeTruthy();
    expect(balancedParenthesis(str2)).toBeTruthy();
  });

  test('should return false', () => {
    const str1 = "[(])";
    const str2 = "[()]{}{[())()]()}";
    const str3 = "[()]{}{[()()]()}{";

    expect(balancedParenthesis(str1)).toBeFalsy();
    expect(balancedParenthesis(str2)).toBeFalsy();
    expect(balancedParenthesis(str3)).toBeFalsy();
  });
});