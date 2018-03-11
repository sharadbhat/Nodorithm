# Nodorithm

An NPM package for commonly used algorithms.

[GitHub repository](https://github.com/sharadbhat/nodorithm)

### Get started
To install,
```sh
npm install nodorithm
```

### Algorithms
##### Sorting
- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Selection Sort

##### Searching
- Binary Search
- Interpolation Search
- Jump Search
- Linear Search

#### Usage
To use the package,
```javascript
const nodorithm = require('nodorithm');
```

##### Sorting
Each algorithm takes 2 arguments.
###### Binary Search
```javascript
var result = (nodorithm.search.binarySearch(array=[1,2,3,4], key=3));
console.log(result);
```

###### Interpolation Search
```javascript
var result = (nodorithm.search.interpolationSearch(array=[1,2,3,4], key=3));
console.log(result);
```

###### Jump Search
```javascript
var result = (nodorithm.search.jumpSearch(array=[1,2,3,4], key=3));
console.log(result);
```

###### Linear Search
```javascript
var result = (nodorithm.search.linearSearch(array=[1,2,3,4], key=3));
console.log(result);
```

##### Sorting
Each algorithm takes 1 argument.
###### Bubble Sort
```javascript
var result = (nodorithm.sort.bubbleSort(array=[1,2,3,4]));
console.log(result);
```

###### Insertion Sort
```javascript
var result = (nodorithm.sort.insertionSort(array=[1,2,3,4]));
console.log(result);
```

###### Merge Sort
```javascript
var result = (nodorithm.sort.mergeSort(array=[1,2,3,4]));
console.log(result);
```

###### Quick Sort
```javascript
var result = (nodorithm.sort.quickSort(array=[1,2,3,4]));
console.log(result);
```

###### Selection Sort
```javascript
var result = (nodorithm.sort.selectionSort(array=[1,2,3,4]));
console.log(result);
```
