const { isPalindromeA, isPalindromeB } = require('../');

describe('isPalindromeA()', () => {
  test('should return true', () => {
    expect(isPalindromeA('racecar')).toBeTruthy();
  });
  test('should return true', () => {
    expect(isPalindromeA('10000000000001')).toBeTruthy();
  });

  test('should return false', () => {
    expect(isPalindromeA('thisisnotapalindrome')).toBeFalsy();
  });
});

describe('isPalindromeB()', () => {
  test('should return true', () => {
    expect(isPalindromeB('racecar')).toBeTruthy();
  });
  test('should return true', () => {
    expect(isPalindromeB('10000000000001')).toBeTruthy();
  });

  test('should return false', () => {
    expect(isPalindromeB('thisisnotapalindrome')).toBeFalsy();
  });
});