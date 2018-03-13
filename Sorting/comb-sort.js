/**
 * Performs comb sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const combSort = function (array) {
  var interval = Math.floor(array.length/1.3);
  while (interval > 0) {
    for(var i=0; i+interval<array.length; i+=1) {
      if (array[i] > array[i+interval]) {
        var small = array[i+interval];
        array[i+interval] = array[i];
        array[i] = small;
      }
    }
    interval = Math.floor(interval/1.3);
  }
  return array;
}

module.exports = combSort;
