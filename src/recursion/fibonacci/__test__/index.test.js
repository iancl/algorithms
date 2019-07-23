const { fibonacciA, fibonacciB } = require('../');

describe('fibonacciA', () => {
  test('should return right result', () => {
    expect(fibonacciA(15)).toEqual(610);
    expect(fibonacciA(5)).toEqual(5);
    expect(fibonacciA(1)).toEqual(1);
    expect(fibonacciA(0)).toEqual(0);
    expect(fibonacciA(10)).toEqual(55);
  });
});

describe('fibonacciB', () => {
  test('should return right result', () => {
    expect(fibonacciB(15)).toEqual(610);
    expect(fibonacciB(5)).toEqual(5);
    expect(fibonacciB(1)).toEqual(1);
    expect(fibonacciB(0)).toEqual(0);
    expect(fibonacciB(10)).toEqual(55);
  });
});