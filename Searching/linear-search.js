/**
 * Performs linear search.
 * @param {number[]} array - The array to be searched.
 * @param {number} key - The value to be searched.
 * @returns {number} - Index of key in the array, -1 if not present.
 */
const linearSearch = (array, key) => {
  for (i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
}

module.exports = linearSearch;
