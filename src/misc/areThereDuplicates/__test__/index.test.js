const {areThereDuplicatesA, areThereDuplicatesB } = require('../');

describe('areThereDuplicatesA()', () => {
  test('should return true', () => {
    expect(areThereDuplicatesA('a','b','c','a')).toBeTruthy();
    expect(areThereDuplicatesA(1,2,3,4,5,6,7,8,9,10,20,1)).toBeTruthy();
  });

  test('should return false', () => {
    expect(areThereDuplicatesA('a','b','c')).toBeFalsy();
    expect(areThereDuplicatesA(1,2,3,4,5,6,7,8,9,10,20)).toBeFalsy();
  });
});

describe('areThereDuplicatesB()', () => {
  test('should return true', () => {
    expect(areThereDuplicatesB('a','b','c','a')).toBeTruthy();
    expect(areThereDuplicatesB(1,2,3,4,5,6,7,8,9,10,20,1)).toBeTruthy();
  });

  test('should return false', () => {
    expect(areThereDuplicatesB('a','b','c')).toBeFalsy();
    expect(areThereDuplicatesB(1,2,3,4,5,6,7,8,9,10,20)).toBeFalsy();
  });
});