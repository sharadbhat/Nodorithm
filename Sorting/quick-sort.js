/**
 * Performs quick sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  else {
    var left = [];
    var right = [];
    var result = [];
    var pivot = array.pop();
    var length = array.length;

    for (var i = 0; i < length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      }
      else {
        right.push(array[i]);
      }
    }

    return result.concat(quickSort(left), pivot, quickSort(right));
  }
}

module.exports = quickSort;
