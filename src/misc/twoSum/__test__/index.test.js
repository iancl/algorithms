const twoSum = require('../');

describe('twoSum()', () => {
  test('should return [1,2]', () => {
    const arr = [1,2,7,11,15];
    const expected = [1,2]
    expect(twoSum(arr, 9)).toEqual(expected);
  });

  test('should return [1,4]', () => {
    const arr = [1,7,11,15, 2];
    const expected = [1,4]
    expect(twoSum(arr, 9)).toEqual(expected);
  });
});