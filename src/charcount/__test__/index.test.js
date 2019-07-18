const { charCount_A } = require('../');

describe('charCount_A()', () => {

  test('should return object with charCount', () => {
    const str = 'aabbbccc!@#$% zxrt';
    expect(charCount_A(str)).toEqual({
      a: 2,
      b: 3,
      c: 3,
      z: 1,
      x: 1,
      r: 1,
      t: 1
    });
  });

  test('should not consider special chars or spaces', () => {
    const str = '!@#@#$#@%$%^&^&*&*(*(  {}:"?><+-=';
    const result = charCount_A(str);
    expect(Object.keys(result).length).toEqual(0);
  });

});