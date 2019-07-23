const {reverseA, reverseB} = require('../');

describe('reverseA()', () => {
  test('should return edcba', () => {
    expect(reverseA('abcde')).toEqual('edcba');
  });
});

describe('reverseB()', () => {
  test('should return edcba', () => {
    expect(reverseB('abcde')).toEqual('edcba');
  });
});