/**
 * Performs merge sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const mergeSort = function (array) {
  if (array.length < 2) {
      return array;
  }

  let middle = parseInt(array.length / 2);
  let left   = array.slice(0, middle);
  let right  = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      }
      else {
        result.push(right.shift());
      }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

module.exports = mergeSort;
