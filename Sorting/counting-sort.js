/**
 * Performs counting sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const countingSort = (array) => {
  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var i, z = 0, count = [];

  for (i = min; i <= max; i++) {
      count[i] = 0;
  }

  for (i=0; i < array.length; i++) {
      count[array[i]]++;
  }

   for (i = min; i <= max; i++) {
      while (count[i]-- > 0) {
          array[z++] = i;
      }
  }
  return array;
}

module.exports = countingSort;
