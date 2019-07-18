/**
 * this module is used to decorate any functions and time how much it took
 * to execute
 */
let startTime = 0;

function reset() {
  startTime = 0;
}

function timeStart() {
  startTime = process.hrtime();
}

function timeEnd() {
  let hrend = process.hrtime(startTime);
  reset();
  return [hrend[0], hrend[1] / 1000000];
}

function timerDecorator(fn) {
  return function (...args) {
    timeStart();
    fn.apply(null, args)
    let duration = timeEnd();
    console.log(`${fn.name} took ${duration[0]}s and ${duration[1]}ms seconds to complete`);
  }
}

module.exports = timerDecorator;