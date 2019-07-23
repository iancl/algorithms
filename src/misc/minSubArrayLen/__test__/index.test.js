const minSubArrayLen = require('../');

describe('minSubArrayLen()', () => {
  test('should return 2', () => {
    expect(minSubArrayLen([2,3,1,2,4,3], 7)).toEqual(2);
  });

  test('should return 1', () => {
    expect(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)).toEqual(1);
  });

  test('should return 3', () => {
    expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)).toEqual(3);
  });

  test('should return 5', () => {
    expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)).toEqual(5);
  });

  test('should return 0', () => {
    expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)).toEqual(0);
  });
});