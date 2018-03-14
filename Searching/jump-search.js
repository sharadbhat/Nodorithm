/**
 * Performs jump search.
 * @param {number[]} array - The array to be searched.
 * @param {number} key - The value to be searched.
 * @returns {number} - Index of key in the array, -1 if not present.
 */
const jumpSearch = (array, key) => {
  step = parseInt(Math.sqrt(array.length));
  previous = 0;

  while (array[Math.min(step, array.length) - 1] < key) {
    previous = step;
    step *= 2;
    if (previous >= array.length) {
      return -1;
    }
  }

  while (array[previous] < key) {
    previous++;
    if (previous == Math.min(step, array.length)) {
      return -1;
    }
  }

  if (array[previous] === key) {
    return previous;
  }

  return -1;
}

module.exports = jumpSearch;
