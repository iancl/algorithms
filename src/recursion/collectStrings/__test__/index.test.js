const collectStrings = require('../');

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
};

describe('collectStrings()', () => {
  test('should return ["foo", "bar", "baz"]', () => {
    expect(collectStrings(obj)).toEqual(['foo', 'bar', 'baz']);
  });
});