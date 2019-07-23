const {countUniqueValuesA, countUniqueValuesB} = require('../');

describe('countUniqueValuesA()', () => {

  test('should return 0', () => {
    expect(countUniqueValuesA([])).toEqual(0);
  });

  test('should return 7', () => {
    expect(countUniqueValuesA([1,2,3,4,4,4,7,7,12,12,13])).toEqual(7);
  });

  test('should return 2', () => {
    expect(countUniqueValuesA([1,1,1,1,1,2])).toEqual(2);
  });

});


describe('countUniqueValuesB()', () => {

  test('should return 0', () => {
    expect(countUniqueValuesB([])).toEqual(0);
  });

  test('should return 7', () => {
    expect(countUniqueValuesB([1,2,3,4,4,4,7,7,12,12,13])).toEqual(7);
  });

  test('should return 2', () => {
    expect(countUniqueValuesB([1,1,1,1,1,2])).toEqual(2);
  });

});