const {anagramA, anagramB, anagramC} = require('../')

describe('anagramA', () => {

  test('should return true', () => {
    const str1 = 'Discriminator';
    const str2 = 'Doctrinairism';

    expect(anagramA(str1, str2)).toBeTruthy();
  });

  test('should return false', () => {
    const str1 = 'Discriminator';
    const str2 = 'Doctrinairismasdf';

    expect(anagramA(str1, str2)).toBeFalsy();
  });

});

describe('anagramB', () => {

  test('should return true', () => {
    const str1 = 'Discriminator';
    const str2 = 'Doctrinairism';

    expect(anagramB(str1, str2)).toBeTruthy();
  });

  test('should return false', () => {
    const str1 = 'Discriminator';
    const str2 = 'Doctrinairismasdf';

    expect(anagramB(str1, str2)).toBeFalsy();
  });

});

describe('anagramC', () => {

  test('should return true', () => {
    const str1 = 'Discriminator';
    const str2 = 'Doctrinairism';

    expect(anagramC(str1, str2)).toBeTruthy();
  });

  test('should return false', () => {
    const str1 = 'Discriminator';
    const str2 = 'Doctrinairismasdf';

    expect(anagramC(str1, str2)).toBeFalsy();
  });

});