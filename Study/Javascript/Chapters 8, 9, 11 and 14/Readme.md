# <a name="Top"></a>TABLE OF CONTENTS
* [Chapter 8](#chapter8)
* [Chapter 9](#chapter9)
* [Chapter 11](#chapter11)
* [Chapter 14](#chapter14)

## <a name="chapter8"></a>Chapter 8 - [Top](#Top)
### Arrays and Array Processing
#### Array basics
We're just gonna go ahead and dive into examples.
```
// array literals
const arr1 = [1, 2, 3]; // array of numbers
const arr2 = ["one", 2, "three"]; // nonhomogeneous array
const arr3 = [[1, 2, 3], ["one", 2, "three"]]; // array containing arrays
const arr4 = [ // nonhomogeneous array
 { name: "Fred", type: "object", luckyNumbers = [5, 7, 13] },
 [
 { name: "Susan", type: "object" },
 { name: "Anthony", type: "object" },
 ],
 1,
 function() { return "arrays can contain functions too"; },
 "three",
];

// accessing elements
arr1[0]; // 1
arr1[2]; // 3
arr3[1]; // ["one", 2, "three"]
arr4[1][0]; // { name: "Susan", type: "object" }

// array length
arr1.length; // 3
arr4.length; // 5
arr4[1].length; // 2

// increasing array size
arr1[4] = 5;
arr1; // [1, 2, 3, undefined, 5]
arr1.length; // 5

// accessing (not assigning) an index larger than the array does NOT change the size of the array
arr2[10]; // undefined
arr2.length; // 3

// Array constructor (rarely used)
const arr5 = new Array(); // empty array
const arr6 = new Array(1, 2, 3); // [1, 2, 3]
const arr7 = new Array(2); // array of length 2 (all elements undefined)
const arr8 = new Array("2"); // ["2"]
```
### Array Content Manipulation
#### Adding or Removing a SINGLE element at beginning or end
This can be achieved by using the following methods:
* .push();
* .pop();
* .unshift();
* .shift();

push and pop add and remove, respectively, ele‐
ments to the end of the array (in place). shift and unshift remove and add, respectively, elements to the beginning of the array (in place). Push and unshift return the new length of the array after the new element has been added, and pop and shift return the element that was removed. Here are examples of these methods in action:
```
const arr = ["b", "c", "d"];
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
arr.shift(); // returns "a"; arr is now ["b", "c", "d"]
```

#### Adding MULTIPLE elements at the end



## <a name="chapter9"></a>Chapter 9 - [Top](#Top)
## <a name="chapter11"></a>Chapter 11 - [Top](#Top)
## <a name="chapter14"></a>Chapter 14 - [Top](#Top)