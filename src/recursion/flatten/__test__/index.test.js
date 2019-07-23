const { flattenA } = require('../');

describe('flattenA()', () => {
  test('should nested flatten array', () => {
    const arr = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]], [4,5,[6,[7,[8, 9, 10]]]]];
    const expected = [1,2,3,4,5,6,7,8,9,10];

    expect(flattenA(arr)).toEqual(expected);
  });
});