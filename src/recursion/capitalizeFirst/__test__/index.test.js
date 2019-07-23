const capitalizeWords = require('../');

describe('capitalizeWords()', () => {
  test('should capitalize all words', () => {
    const words = ['one', 'two', 'three', 'four', 'five', 'six'];
    const expected = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    expect(capitalizeWords(words)).toEqual(expected);
  });
});