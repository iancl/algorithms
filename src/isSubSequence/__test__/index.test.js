const { isSubsequenceA, isSubsequenceB } = require('../');

describe('isSubSequenceA', () => {
  test('should return true', () => {
    expect(isSubsequenceA('hello', 'hello world')).toBeTruthy();
    expect(isSubsequenceA('abc', 'abracadabra')).toBeTruthy();
  });

  test('should return false', () => {
    expect(isSubsequenceA('was', 'abracadabra')).toBeFalsy();
  });
});

describe('isSubSequenceB', () => {
  test('should return true', () => {
    expect(isSubsequenceB('hello', 'hello world')).toBeTruthy();
    expect(isSubsequenceB('abc', 'abracadabra')).toBeTruthy();
  });

  test('should return false', () => {
    expect(isSubsequenceB('was', 'abracadabra')).toBeFalsy();
  });
});