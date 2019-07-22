const { productOfArrayA, productOfArrayB, productOfArrayC } = require('../');

describe('productOfArrayA', () => {
  test('should return 24', () => {
    expect(productOfArrayA([1,2,3,4])).toEqual(24);
  });
  test('should return 1', () => {
    expect(productOfArrayA([1])).toEqual(1);
  });
  test('should return 240', () => {
    expect(productOfArrayA([1, 10, 24])).toEqual(240);
  });
});

describe('productOfArrayB', () => {
  test('should return 24', () => {
    expect(productOfArrayB([1,2,3,4])).toEqual(24);
  });
  test('should return 1', () => {
    expect(productOfArrayB([1])).toEqual(1);
  });
  test('should return 240', () => {
    expect(productOfArrayB([1, 10, 24])).toEqual(240);
  });
});

describe('productOfArrayC', () => {
  test('should return 24', () => {
    expect(productOfArrayC([1,2,3,4])).toEqual(24);
  });
  test('should return 1', () => {
    expect(productOfArrayC([1])).toEqual(1);
  });
  test('should return 240', () => {
    expect(productOfArrayC([1, 10, 24])).toEqual(240);
  });
});