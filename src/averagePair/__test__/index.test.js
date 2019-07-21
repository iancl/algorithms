const { averagePairA } = require('../');

describe('averagePairA()', () => {
  test('should return true', () => {
    expect(averagePairA([1,2,3], 2.5)).toBeTruthy();
    expect(averagePairA([1,3,3,5,6,7,10,12,19], 8)).toBeTruthy();
  });

  test('should return false', () => {
    expect(averagePairA([-1,0,3,4,5,6], 4.1)).toBeFalsy();
    expect(averagePairA([], 4)).toBeFalsy();
  });
});