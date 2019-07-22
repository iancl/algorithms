/**
 * Write a function called power which accepts a base and an exponent.
 * This should mimic the functionality of math.pow()
 */
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

module.exports = power;