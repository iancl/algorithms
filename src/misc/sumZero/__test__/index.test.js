const { sumZeroA } = require('../');

describe('sumZeroA()', () => {

  test('should return undefined', () => {
    expect(sumZeroA([-2, 0, 1, 3])).toBeUndefined();
  });

  test('should return valid response', () => {
    const result = sumZeroA([-200, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
    expect(result).toEqual([-3, 3]);
  });

});