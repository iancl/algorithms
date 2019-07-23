const recursiveRange = require('../');

describe('recursiveRange()', () => {
  test('should return 10', () => {
    expect(recursiveRange(4)).toEqual(10);
  });

  test('should return 21', () => {
    expect(recursiveRange(6)).toEqual(21);
  });

  test('should return 55', () => {
    expect(recursiveRange(10)).toEqual(55);
  });
});