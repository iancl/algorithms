const binarySearch = require('../');
describe('binarySearch()', () => {
  test('should find item', () => {
    expect(binarySearch([1,2,3,4,5,6], 4)).toEqual(3);
    expect(binarySearch([1,2,3,4,5,6], 6)).toEqual(5);
  });

  test('should not find item', () => {
    expect(binarySearch([1,2,3,4,5,6], 11)).toEqual(-1);
  });
});