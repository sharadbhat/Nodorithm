/**
 * Performs heap sort.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const heapSort = (array) => {
  buildMaxHeap(array);

  lastElement = array.length - 1;

  while (lastElement > 0) {
    temporary = array[0];
    array[0] = array[lastElement];
    array[lastElement] = temporary

    heapify(array, 0, lastElement);

    lastElement -= 1
  }

  return array;
}

function buildMaxHeap(array) {
  var i;
  i = array.length / 2 - 1;
  i = Math.floor(i);

  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  }
}

function heapify(heap, i, max) {
  var index, leftChild, righChild;

  while (i < max) {
    index = i;

    leftChild = 2*i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }

    if (index == i) {
      return;
    }

    temporary = heap[i];
    heap[i] = heap[index];
    heap[index] = temporary;

    i = index;
  }
}

module.exports = heapSort;
