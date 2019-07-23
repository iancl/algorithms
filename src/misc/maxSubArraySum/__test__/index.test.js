const { maxSubArraySumA, maxSubArraySumB } = require('../');

describe('maxSubArraySumA()', () => {

  test('should return 10', () => {
    expect(maxSubArraySumA([1,2,5,2,8,1,5], 2)).toEqual(10);
  });

  test('should return null on empty arrays', () => {
    expect(maxSubArraySumA([], 2)).toBeNull();
  });

  test('should return 17', () => {
    expect(maxSubArraySumA([1,2,5,2,8,1,5], 4)).toEqual(17);
  });

});

describe('maxSubArraySumB()', () => {

  test('should return 10', () => {
    expect(maxSubArraySumB([1,2,5,2,8,1,5], 2)).toEqual(10);
  });

  test('should return null on empty arrays', () => {
    expect(maxSubArraySumB([], 2)).toBeNull();
  });

  test('should return 17', () => {
    expect(maxSubArraySumB([1,2,5,2,8,1,5], 4)).toEqual(17);
  });

});