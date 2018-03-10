/**
 * Performs selection search.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const selectionSort = function (array) {
  for (var i = 0; i < array.length - 1; i++) {
    minimum = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) {
        minimum = j;
      }
    }
    temporary = array[i];
    array[i] = array[minimum];
    array[minimum] = temporary;
  }
  return array;
}

module.exports = selectionSort;
