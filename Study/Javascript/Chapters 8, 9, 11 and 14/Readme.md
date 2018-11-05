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

push and pop add and remove, respectively, elements to the end of the array (in place). shift and unshift remove and add, respectively, elements to the beginning of the array (in place). Push and unshift return the new length of the array after the new element has been added, and pop and shift return the element that was removed. Here are examples of these methods in action:
```
const arr = ["b", "c", "d"];
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
arr.shift(); // returns "a"; arr is now ["b", "c", "d"]
```

#### Adding MULTIPLE elements at the end
The *concat* method adds multiple elements to the array and returns a copy.
> Note: **this means that the referenced array remains unchanged!**
```
const arr = [1, 2, 3];
arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified
console.log(arr) // [1, 2 ,3]
```

#### Getting a Subarray
Similar to concat, *slice* returns a copy leaving the original untouched.
```
// slice("subarray begins", "subarray ends")
const arr = [1, 2, 3, 4, 5];
arr.slice(3); // returns [4, 5]; arr unmodified
arr.slice(2, 4); // returns [3, 4]; arr unmodified
arr.slice(-2); // returns [4, 5]; arr unmodified
arr.slice(1, -2); // returns [2, 3]; arr unmodified
arr.slice(-2, -1); // returns [4]; arr unmodified
```
As can be seen from above, one can use (-) negatives to count from the end of the array.

> Note: .slice(x, y) //x is inclusive and y is exclusive
```
const arr = [0, "inclusive", 2, "exclusive", 4]
// inclusive @ index 1
// exclusive @ index 3
arr.slice(1,3); // ["inclusive", 2]
```

#### Adding or Removing elements at ANY position
splice allows you to do in-place modification of the string, adding and/or removing elements from any index. The first argument is the index you want to start modifying; the second argument is the number of elements to remove (use 0 if you don’t want to remove any elements), and the remaining arguments are the elements to be added. Examples:
> Note: the array **does** get modified using .splice
```
// splice("modify from", "no. chars", "elements to be added"...)
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]
```

#### Cutting and Replacing within an array
copyWithin, that takes a sequence of elements from an array and copies them, in place, to a different part of the array, overwriting whatever elements are there. The first argument is where to copy to (the target), the second argument is where to start copying from, and the final (optional) argument is where to stop copying from. As with slice, you can use negative numbers for the start and end indexes, and they count backward from the end of the array. Examples:
```
// .copyWithin("copy to", "copy from", "copy from end")
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // arr is now [1, 3, 4, 4]
arr.copyWithin(2, 0, 2); // arr is now [1, 3, 1, 3]
arr.copyWithin(0, -3, -1); // arr is now [3, 1, 1, 3]
```

#### Filling an array with specific value
*fill*, which allows you to set any number of elements with a fixed value (in place). This is particularly useful when used with the Array constructor (which allows you to specify the initial size of the array). You can optionally specify a start and end index if you only want to fill part of the array (negative indexes work as expected). Examples:
```
const arr = new Array(5).fill(1); // arr initialized to [1, 1, 1, 1, 1]
arr.fill("a"); // arr is now ["a", "a", "a", "a", "a"]
arr.fill("b", 1); // arr is now ["a", "b", "b", "b", "b"]
arr.fill("c", 2, 4); // arr is now ["a", "b", "c", "c", "b"]
arr.fill(5.5, -4); // arr is now ["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); // arr is now ["a", 5.5, 0, 0, 5.5]
```

#### Reversing and Sorting arrays
*reverse* is as simple as it gets; it reverses the order of the array in place:
```
const arr = [1, 2, 3, 4, 5];
arr.reverse(); // arr is now [5, 4, 3, 2, 1]
```
*sort* sorts an array in place:
```
const arr = [5, 3, 2, 4, 1];
arr.sort(); // arr is now [1, 2, 3, 4, 5]
```
sort also allows you to specify a sort function, which can come in quite handy. For
example, there’s no meaningful way to sort objects:
```
const arr = [{ name: "Suzanne" }, { name: "Jim" },
             { name: "Trevor" }, { name: "Amanda" }];
arr.sort(); // arr unchanged
arr.sort((a, b) => a.name > b.name); // arr sorted alphabetically by name property
arr.sort((a, b) => a.name[1] < b.name[1]); // arr sorted reverse alphabetically by second letter of name property
```
> Note: I highly reccomend going and doing some examples on .sort() and a sort function. It seems like something easily examinable.

#### Array Searching
If you're trying to find something, you have a good number of options:
* indexOf / lastIndexOf
* findIndex / find
* some / every

**indexOf** simply returns the index of the first element it finds that is strictly equal to what you’re looking for (there is a corresponding **lastIndexOf** that searches in the other direction, and returns the last index that matches what you’re looking for). If you only want to search a portion of an array, you can specify an optional start index. If indexOf (or lastIndexOf) returns –1, it wasn’t able to find a match:
```
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
arr.indexOf(5); // returns 1
arr.lastIndexOf(5); // returns 5
arr.indexOf("a"); // returns 2
arr.lastIndexOf("a"); // returns 2
arr.indexOf({ name: "Jerry" }); // returns -1
arr.indexOf(o); // returns 3
arr.indexOf([1, 2]); // returns -1
arr.indexOf("9"); // returns 7
arr.indexOf(9); // returns -1

arr.indexOf("a", 5); // returns -1
arr.indexOf(5, 5); // returns 5
arr.lastIndexOf(5, 4); // returns 1
arr.lastIndexOf(true, 3); // returns -1
```
Next up is **findIndex**, which is similar to indexOf in that it returns an index (or –1 if there’s no match). findIndex is more flexible, though, in that you can provide a function that determines if an element is a match (findIndex doesn’t have an option to start at an arbitrary index, nor is there a corresponding findLastIndex):
```
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
arr.findIndex(o => o.id === 5); // returns 0
arr.findIndex(o => o.name === "Francis"); // returns 1
arr.findIndex(o => o === 3); // returns -1
arr.findIndex(o => o.id === 17); // returns -1
```
indexOf and findIndex are great if you’re looking for the index of an element. But what if you don’t care about the index of the element, but just want the element itself? **find** is like findIndex in that it allows you to specify a function to find what you’re looking for, but it returns the element itself instead of the index (or null if no such element was found):
```
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" }
arr.find(o => o.id === 2); // returns null
```
find and findIndex, in addition to receiving each element as their first argument, also receive the index of the current element and the whole array itself as arguments. 
```
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // returns 4
```
find and findIndex also allow you to specify what to use for the this variable during the function invocation. This can be handy if you want to invoke a function as if it were a method of an object. Consider the following equivalent techniques for searching for a Person object by ID:
```
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
      juliet = new Person("Juliet"),
      peter = new Person("Peter"),
      jay = new Person("Jay");
const arr = [jamie, juliet, peter, jay];

// option 1: direct comparison of ID:
arr.find(p => p.id === juliet.id); // returns juliet object

// option 2: using "this" arg:
arr.find(p => p.id === this.id, juliet); // returns juliet object
```
Just as we don’t always care about the index of an element within an array, sometimes we don’t care about the index or the element itself: we just want to know if it’s there or isn’t.

**some** returns true if it finds an element that meets the criteria (all it needs is one; it’ll
stop looking after it finds the first one), and false otherwise. Example:
```
const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2===0); // true; 12 is even
arr.some(x => Number.isInteger(Math.sqrt(x))); // false; no squares
```

**every** returns true if every element in the array passes the criteria, and false other‐
wise. every will stop looking and return false if it finds an element that doesn’t
match the criteria; otherwise, it will have to scan the entire array:
```
const arr = [4, 6, 16, 36];
arr.every(x => x%2===0); // true; no odd numbers
arr.every(x => Number.isInteger(Math.sqrt(x))); // false; 6 is not square
```
>> Note: *some* can be considered as *or*, *every* can be considered as *and*.

### Fundamental Array Operations
#### Map and Filter



## <a name="chapter9"></a>Chapter 9 - [Top](#Top)
## <a name="chapter11"></a>Chapter 11 - [Top](#Top)
## <a name="chapter14"></a>Chapter 14 - [Top](#Top)