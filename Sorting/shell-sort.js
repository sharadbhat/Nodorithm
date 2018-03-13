/**
 * Performs shell sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const shellSort = function (array) {
  var increment = array.length / 2;
  while (increment > 0) {
      for (i = increment; i < array.length; i++) {
          var j = i;
          var temp = array[i];

          while (j >= increment && array[j-increment] > temp) {
              array[j] = array[j-increment];
              j = j - increment;
          }

          array[j] = temp;
      }

      if (increment == 2) {
          increment = 1;
      }
      else {
          increment = parseInt(increment*5 / 11);
      }
  }
  return array;
}

module.exports = shellSort;
