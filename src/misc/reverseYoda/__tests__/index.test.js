const reverseYoda = require('../');

describe('reverseYoda()', () => {
  test('should reverse strings', () => {
    const str1 = 'Rejected me, my crush has. Ketamine, I need.';
    const str2 = 'An alien, I am. Holding me captive in Area 51, the government is.';
    const expected1 = 'My crush has rejected me. I need ketamine.';
    const expected2 = 'I am an alien. The government is holding me captive in Area 51.'

    expect(reverseYoda(str1)).toEqual(expected1);
    expect(reverseYoda(str2)).toEqual(expected2);
  });
});