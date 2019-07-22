const { collectOddsA, collectOddsB, collectOddsC } = require('../');

describe('collectOddsA()', () => {
  test('should return right values', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1,3,5,7,9];
    expect(collectOddsA(arr)).toEqual(expected);
  });

  test('should return right values', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1,3,5,7,9];
    expect(collectOddsA(arr)).toEqual(expected);
  });
});

describe('collectOddsB()', () => {
  test('should return right values', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1,3,5,7,9];
    expect(collectOddsB(arr)).toEqual(expected);
  });

  test('should return right values', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1,3,5,7,9];
    expect(collectOddsB(arr)).toEqual(expected);
  });
});

describe('collectOddsC()', () => {
  test('should return right values', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1,3,5,7,9];
    expect(collectOddsC(arr)).toEqual(expected);
  });

  test('should return right values', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const expected = [1,3,5,7,9];
    expect(collectOddsC(arr)).toEqual(expected);
  });
});