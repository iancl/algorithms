const { findLongestSubstring } = require('../');

describe('findLongestString', () => {
  test('should return 0', () => {
    const str = ''
    const expectedLen = 0;
    expect(findLongestSubstring(str)).toEqual(expectedLen);
  });

  test('should return 7', () => {
    const str = 'thecatinthehat'
    const expectedLen = 7;
    expect(findLongestSubstring(str)).toEqual(expectedLen);
  });

  test('should return 1', () => {
    const str = 'bbbb'
    const expectedLen = 1;
    expect(findLongestSubstring(str)).toEqual(expectedLen);
  });
});