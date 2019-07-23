const someRecursive = require('../');

function isOdd(n) {
  return n % 2 !== 0;
}

function isEven(n) {
  return n % 2 === 0;
}

describe('someRecursive()', () => {

  test('should return true', () => {
    expect(someRecursive([1,3,5,8,7,9], isEven)).toBeTruthy();
  });

  test('should return false', () => {
    expect(someRecursive([1,3,5,7,9], isEven)).toBeFalsy();
  });

});