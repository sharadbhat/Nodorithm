# Nodorithm

An NPM package for commonly used algorithms.

[GitHub repository](https://github.com/sharadbhat/nodorithm)

### Get started
To install,
```sh
npm install nodorithm
```

### Algorithms
##### Searching
- Binary Search
- Interpolation Search
- Jump Search
- Linear Search

##### Sorting
- Bubble Sort
- Comb Sort
- Counting Sort
- Heap Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Selection Sort
- Shell Sort

##### String
- Capitalize First Letter

##### Math 
- GCD
- LCM
- Fast Exponentiation
- Mod Inverse
#### Usage
To use the package,
```javascript
const nodorithm = require('nodorithm');
```

##### Searching
Each algorithm takes 2 arguments.
###### Binary Search
```javascript
var result = (nodorithm.search.binarySearch([1,2,3,4],3));
console.log(result);
```

###### Interpolation Search
```javascript
var result = (nodorithm.search.interpolationSearch([1,2,3,4],3));
console.log(result);
```

###### Jump Search
```javascript
var result = (nodorithm.search.jumpSearch([1,2,3,4],3));
console.log(result);
```

###### Linear Search
```javascript
var result = (nodorithm.search.linearSearch([1,2,3,4], 3));
console.log(result);
```

##### Sorting
Each algorithm takes 1 argument.
###### Bubble Sort
```javascript
var result = (nodorithm.sort.bubbleSort([4,2,3,1]));
console.log(result);
```

###### Comb Sort
```javascript
var result = (nodorithm.sort.combSort([4,2,3,1]));
console.log(result);
```

###### Counting Sort
```javascript
var result = (nodorithm.sort.countingSort([4,2,3,1]));
console.log(result);
```

###### Heap Sort
```javascript
var result = (nodorithm.sort.heapSort([4,2,3,1]));
console.log(result);
```

###### Insertion Sort
```javascript
var result = (nodorithm.sort.insertionSort([4,2,3,1]));
console.log(result);
```

###### Merge Sort
```javascript
var result = (nodorithm.sort.mergeSort([4,2,3,1]));
console.log(result);
```

###### Quick Sort
```javascript
var result = (nodorithm.sort.quickSort([4,2,3,1]));
console.log(result);
```

###### Selection Sort
```javascript
var result = (nodorithm.sort.selectionSort([4,2,3,1]));
console.log(result);
```

###### Shell Sort
```javascript
var result = (nodorithm.sort.shellSort([4,2,3,1]));
console.log(result);
```

##### String
Each algorithm takes 1 argument.
###### Capitalize First Letter
```javascript
var result = (nodorithm.string.capitalizeFirstLetter(string="abcd efgh"));
console.log(result);
```

##### Math 

###### GCD

```javascript
var result = (nodorithm.math.gcd(2,4));
console.log(result);
```
###### LCM

```javascript
var result = (nodorithm.math.lcm(2,4));
console.log(result);
```
###### Fast Exponentiation

```javascript
var result = (nodorithm.fastPower.gcd(2,4,mod=Infinity));
console.log(result);
```
###### Mod Inverse

```javascript
var result = (nodorithm.math.modInverse(3,11));
console.log(result);
```