const { sameFrequencyA } = require('../');

describe('sameFrequencyA', () => {
  test('should return true', () => {
    expect(sameFrequencyA(3589578, 5879385)).toBeTruthy();
    expect(sameFrequencyA(182, 281)).toBeTruthy();
  });

  test('should return false', () => {
    expect(sameFrequencyA(35895781, 5879385)).toBeFalsy();
    expect(sameFrequencyA(1812332, 281)).toBeFalsy();
  });
});