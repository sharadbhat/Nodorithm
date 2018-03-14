/**
 * Performs insertion sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const insertionSort = (array) => {
  for (var i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

module.exports = insertionSort;
