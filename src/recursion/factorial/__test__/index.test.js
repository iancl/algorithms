const factorial = require('../');

describe('factorial()', () => {
  test('should return 24', () => {
    expect(factorial(4)).toEqual(24);
  });

  test('should return 40320', () => {
    expect(factorial(8)).toEqual(40320);
  });
});