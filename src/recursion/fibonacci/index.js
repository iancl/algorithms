/**
 * write a function that returns the last fibonaci number up to n
 * implement an iterative and recursive solution
 */
// O(n)
function fibonacciA(n) {
  if (n < 2) {
    return n;
  }

  let previousPreviousNumber = null;
  let previousNumber = 0;
  let currentNumber = 1;

  for (let i = 1; i < n; i++) {
    previousPreviousNumber = previousNumber;
    previousNumber = currentNumber;
    currentNumber = previousNumber + previousPreviousNumber;
  }

  return currentNumber;
}

// O(1)
function fibonacciB(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciB(n - 1) + fibonacciB(n - 2);
}

// is necessary to memoize the fibonacci recursive function to greatly improve
// performance
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(null, args);

    cache[args] = result;
    return result;
  }
}

// override fibonacci function with recursive function
fibonacciB = memoize(fibonacciB);

module.exports = { fibonacciA, fibonacciB };