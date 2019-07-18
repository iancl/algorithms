const { sameA, sameB } = require('../');

describe('sameA', () => {

  test('should return true', () => {
    expect(sameA([1,2,3], [4,1,9])).toBeTruthy();
  });

  test('should return false if lengths of arrays are different', () => {
    expect(sameA([1,2,3], [1,0])).toBeFalsy();
  });

  test('should return false if frequency is different', () => {
    expect(sameA([1,2,1], [4,4,1])).toBeFalsy();
  });

});

describe('sameB', () => {

  test('should return true', () => {
    expect(sameB([1,2,3], [4,1,9])).toBeTruthy();
  });

  test('should return false if lengths of arrays are different', () => {
    expect(sameB([1,2,3], [1,0])).toBeFalsy();
  });

  test('should return false if frequency is different', () => {
    expect(sameB([1,2,1], [4,4,1])).toBeFalsy();
  });

});