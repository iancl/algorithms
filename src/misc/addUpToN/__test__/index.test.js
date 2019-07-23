const {
  addUpToA,
  addUpToB
} = require('../');

describe('addUpTo()', () => {

  describe('addUpToA()', () => {
    test('should add up to 10', () => {
      expect(addUpToA(10)).toEqual(55);
    });
  });

  describe('addUpToB()', () => {
    test('should add up to 10', () => {
      expect(addUpToB(10)).toEqual(55);
    });
  });

});