/**
 * Performs interpolation search.
 * @param {number[]} array - The array to be searched.
 * @param {number} key - The value to be searched.
 * @returns {number} - Index of key in the array, -1 if not present.
 */
const interpolationSearch = function (array, key) {
  low = 0;
  high = array.length - 1;

  while (low <= high && key >= array[low] && key <= array[high]) {
    position = parseInt(low + (((high - low) / (array[high] - array[low])) * (key - array[low])));

    if (array[position] === key) {
      return position;
    }
    else if (array[position] < key) {
      low = position + 1;
    }
    else {
      high = position - 1;
    }
  }
  return -1;
}

module.exports = interpolationSearch;
