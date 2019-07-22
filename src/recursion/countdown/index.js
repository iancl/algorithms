/**
 * write a recursive function that counts down from n
 */
function countdown(n) {
  if (n < 0) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

module.exports = countdown;