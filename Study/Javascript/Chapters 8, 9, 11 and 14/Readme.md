# <a name="Top"></a>TABLE OF CONTENTS
* [Chapter 8](#chapter8)
    * [Quick Overview](#ch8ov)
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
    [{ name: "Susan", type: "object" },{ name: "Anthony", type: "object" }],
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
> Note: *some* can be considered as *or*, *every* can be considered as *and*.

### Fundamental Array Operations
#### Map and Filter
**Map**
* The map() method creates a new array with the results of calling a provided function on every element in the calling array. So .map will loop through every element of the provided array. 

**.map((a, b, c) => ...)**
* a - array ITEM
* b - array INDEX
* c - array ITSELF
```
const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map((item,index,array) =>
    console.log(`
        {${Object.values(item)}}:
        ${index}:
        [{${Object.values(array[0])}},
        {${Object.values(array[1])}}]
    `));

------ Console Output ------
{Widget,9.95}:0:[{Widget,9.95},{Gadget,22.95}]
{Gadget,22.95}:1:[{Widget,9.95},{Gadget,22.95}]
```
> Note: java returns object Object if you try to display an enumerable object. I used *Object.values()* to get the values out of the array.
```
// Without Object.values()
console.log(`
    ${item}:
    ${index}:
    ${array}
`));

------ Console Output ------
[object Object]:0:[object Object],[object Object]
[object Object]:1:[object Object],[object Object]
```
See more examples.
```
const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name); // ["Widget", "Gadget"]
const prices = cart.map(x => x.price); // [9.95, 22.95]
const discountPrices = prices.map(x => x*0.8); // [7.96, 18.36]
```
While all the other functions use the arrow notation to denote an anonymous function:
```
const lcNames = names.map(String.toLowerCase); // ["widget", "gadget"]
```
The above simply uses a function 

**Filter**
* As the name implies, is designed to remove unwanted things from an array. Like map, it returns a new array with elements removed. One has to provide a function to determine which elements to remove.
```
// create a deck of playing cards
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) { // hearts, clubs, diamonds, spades
    for(let value=1; value<=13; value++) {
    cards.push({ suit, value }); 
    }
}

// get all cards with value 2:
cards.filter(c => c.value === 2); // [
        // { suit: 'H', value: 2 },
        // { suit: 'C', value: 2 },
        // { suit: 'D', value: 2 },
        // { suit: 'S', value: 2 }
        // ]

// (for the following, we will just list length, for compactness)
// get all diamonds:
cards.filter(c => c.suit === 'D'); // length: 13
// get all face cards
cards.filter(c => c.value > 10); // length: 12
// get all face cards that are hearts
cards.filter(c => c.value > 10 && c.suit === 'H'); // length: 3
```
Hopefully you can start to see how map and filter can be combined 

#### Reduce
Where map transforms each element in the array, **reduce** transforms the entire array. Like map and filter, *reduce* allows you to provide a function that controls the outcome. In the callbacks we’ve dealt with heretofore, the first element passed into the callback is always the current array element.  


In addition to taking a callback, **reduce** takes an (optional) initial value for the accumulator.


**.reduce((a, b, c, d) => ... , e)**
* a - array accumulator (eg. arr[0])
* b - array ITEM
* c - array INDEX
* d - array ITSELF
* e - array accumulator initial value
```
const arr = [1,2,3,4];
var sum = arr.reduce((a,b,c,d) => {console.log(`
initial value:${a}\narray item:${b}\narray index:${c}\narray itself:${d}`);});

sum = arr.reduce((a,b)=>a+=b);
console.log(sum);

------ Console Output ------
initial value:1
array item:2
array index:1
array itself:1,2,3,4

initial value:undefined
array item:3
array index:2
array itself:1,2,3,4

initial value:undefined
array item:4
array index:3
array itself:1,2,3,4
10
```
> Note: the initial value (a) should change, however in the *console.log()* it never changes and therefore results in the *undefined*.
Another simpler example:
```
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);

console.log(sum);

------ Console Output ------
18
```

### Array Methods and Deleted or Never-Defined Elements
One behavior of the Array methods that often trips people up is the way they treat elements that have never been defined or have been deleted. map, filter, and reduce do not invoke the function for elements that have never been assigned or have been deleted.
```
const arr = Array(10).map(function(x) { return 5 });
```
> Note: this will fail.
arr would still be an array with 10 elements, all undefined. Similarly, if you delete an element from the middle of an array, and then call map, you’ll get an array with a “hole” in it:
```
const arr = [1, 2, 3, 4, 5];
delete arr[2];
arr.map(x => 0); // [0, 0, <1 empty slot>, 0, 0]
```
In practice, this is seldom a problem because you’re normally working with arrays whose elements have been explicitly set (and unless you explicitly want a gap in an array, which is rare, you won’t use delete on an array), but it’s good to be aware of.

#### String Joining
Very often, you simply want to join the (string) value of the elements in an array together with some separator.

Use:
* (array).*join*()

You can parse a separator into the *join()* function, this can be anything you like.
```
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --"
```
If used cleverly—and combined with string concatenation.
```
const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";
```

#### <a name="ch8ov"></a>Table Summaries - [Top](#Top)
Array Function Arguments.

| Method | Description |
|:-----------:|:---------------------------------------------------------------:|
| Reduce Only | Accumulator (initial value, or return value of last invocation) |
| All | Element (value of current element) |
| All | Index of current element |
| All | Array itself (rarely useful) |


Array Content Manipulation.

| When you need | Use | In-place or new array |
|:--------------------------------------:|:--------------:|:---------------------:|
| Create an array (last in, first out) | push, pop | in-place |
| Create a queue (first in, first out) | unshift, shift | in-place |
| Add multiple elements at end | concat | new array |
| Get subarray | slice | new array |
| Add or remove elements at any position | splice | in-place |
| Cut and replace within array | copyWithin | in-place |
| Fill an array | fill | in-place |
| Reverse an array | reverse | in-place |
| Sort an array | sort | in-place |


Array Searching

| When you want to know/find | Use |
|:--------------------------------------:|:------------------:|
| The index of an item | indexOf, findIndex |
| The last index of an item | lasIndexOf |
| The item itself | find |
| Whether the array matches any criteria | some |
| Whether the array matches all criteria | every |


Array Transformation

| When you want to | Use | In-place or new array |
|:--------------------------------------------:|:------:|:---------------------:|
| Transform every element | map | new array |
| Eliminates elements based on criteria | filter | new array |
| Transform entire array to another data type | reduce | new array |
| Convert elements to string and join together | join | new array |

## <a name="chapter9"></a>Chapter 9 - [Top](#Top)
### Property Enumeration
In general, if you want to list out the contents of the container (called enumeration), you probably want an array, not an object. But objects are containers, and do support property enumeration; you just need to be aware of the special complexities involved.
> Note: property enumeration order isn’t guaranteed! Don’t be lulled into a false sense of security by anecdotal testing: never assume a given order of enumeration for properties.

#### for ...in
The traditional way to enumerate the properties of an object is *for...in.*
```
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4, d:5 };
for(let prop in o) {
    if(!o.hasOwnProperty(prop)) { 
        continue; 
    }
    console.log(`${prop}: ${o[prop]}`);
}

console.log(o[SYM])

------ Console Output ------
a: 1
b: 2
c: 3
4
```
There's 3 things to note here:
1. You may omit o.hasOwnProperty()
2. o.hasOwnProperty() solves the issue of inheritence
3. Symbols do not get iterated through

#### Object.keys
Object.keys gives us a way to get all of the enumerable string properties of an object as an array, while simultaneously solving the issue of *hasOwnProperty()*.

Example:
```
const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
Object.keys(o)
    .filter(prop => (prop[0]==='x')) //where the first letter is 'x'
    .forEach(prop => console.log(`${prop}: ${o[prop]}`));
```
> Note: see how the *filter* returns an iterable array that can then be *logged* using the *forEach* method.

### Object-Oriented Programming (OOP)
The basic idea is simple and intuitive: an object is a logically related collection of data and functionality. It’s designed to reflect our natural understanding of the world. A car is an object that has data (make, model, number of doors, VIN, etc.) and functionality (accelerate, shift, open doors, turn on headlights, etc.). Furthermore, OOP makes it possible to think about things abstractly (a car) and concretely (a specific car).


Before we dive in, let’s cover the basic vocabulary of OOP. A *class* refers to a generic thing (a car). An *instance* (or object instance) refers to a specific thing (a specific car, such as “My Car”). A piece of functionality (accelerate) is called a *method*. A piece of functionality that is related to the class, but doesn’t refer to a specific instance, is called a *class method* (for example, “create new VIN” might be a class method: it doesn’t yet refer to a specific new car, and certainly we don’t expect a specific car to have the knowledge or ability to create a new, valid VIN). When an instance is *first created*, its *constructor* runs. The constructor initializes the object instance.

#### Class and Instance Creation
```
class Car {
    constructor() {
    }
}
```

## <a name="chapter11"></a>Chapter 11 - [Top](#Top)
## <a name="chapter14"></a>Chapter 14 - [Top](#Top)