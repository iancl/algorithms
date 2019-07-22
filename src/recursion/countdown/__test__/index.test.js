const countdown = require('../');

describe('countdown()', () => {
  console.log = jest.fn();
  test('console.log should be invoked 0...10 times [11 times]', () => {
    countdown(10);
    expect(console.log).toHaveBeenCalledTimes(11);
  });
});