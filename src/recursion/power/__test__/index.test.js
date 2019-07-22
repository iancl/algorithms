const power = require('../');

describe('power()', () => {
  test('should return 16', () => {
    expect(power(2,4)).toEqual(16);
    expect(power(2,10)).toEqual(1024);
    expect(power(5,5)).toEqual(3125);
  });
});