'use strict';

const reverse = require('./array-reverse.js');

describe('testing reverse function', () => {
  it('can reverse an array', () => {
    let test = [1, 2, 3, 4, 5];
    let expected = reverse(test);
    expect(test).not.toEqual(expected);
    expect([5, 4, 3, 2, 1]).toEqual(expected);
  });
});