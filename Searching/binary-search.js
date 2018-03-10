/**
 * Performs binary search.
 * @param {number[]} array - The array to be searched.
 * @param {number} key - The value to be searched.
 * @returns {number} - Index of key in the array, -1 if not present.
 */
const binarySearch = function (array, key) {
  low = 0;
  high = array.length - 1;
  while (low <= high) {
    mid = (low + high) / 2;
    if (array[mid] === key) {
      return mid;
    }
    else if (array[mid] > key) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
