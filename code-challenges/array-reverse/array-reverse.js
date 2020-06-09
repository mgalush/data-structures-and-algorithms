'use strict';

function reverse(arr) {
  let result = [];
  let length = arr.length - 1;
  for (length; length >= 0; length--) {
    result.push(arr[length]);
  }
  return result;
}

module.exports = reverse;