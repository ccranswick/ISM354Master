# TABLE OF CONTENTS
* [Chapter 3](Chapter 3)
* Chapter 4
* Chapter 5
* Chapter 6
* Chapter 7

## Chapter 3
## Literals, Variables, Constants, and Data Types
### Variables and Constants
#### There are currently 3 methods in which to declare a variable or constant:
* const (only immutable declaration available to ES6)
* var
* let (recent ES6 term)

These methods all differ in scope, and mutablility.

#### There are 3 levels of scope:
* Global level
    * Accessible from anywhere within the script
* Function level
    * Limited to within the function from which it was declared
* Block level
    * limited further to the statement or expression of which the variable was declared. Or in simple terms, anywhere between an opening and closing curly brace {}
> Note: Block level is also Global if defined at the beginning of your JS file.
```
var one = 1; //Declared at global level

function doSomething(){
  var two = 2; //Declared at function level
  if( true ){
    var three = 3; //Declared at block level
  }
}

if( true ){
  var four = 4; //Also declared at block level
}
```
Variable scopes:
* const
    * Block level scope
* var
    * Global or Function level scope
* let
    * Block level scope

```
var one = 1; //Global level scope
let two = 2;

if( one === 1 ){ //Function level scope
  var one = 10; 
  let two = 20;
  console.log(one);
  console.log(two);
}
console.log(one);
console.log(two);

------ Console Output ------
10
20
10
2
```
Similarily
```
if( true ){ //Block level scope
  var one = 1;
  let two = 2;
}

console.log(one);
console.log(two);

------ Console Output ------
1
Uncaught ReferenceError: two is not defined
```
### Primitive Data Types and Objects
Primitive types
* Number
* String
* Boolean
* Null
* Undefined
* Symbol

Primitive Objects
* Array
* Date
* RegExp (Regular Expression)
* Map and WeakMap
* Set and WeakSet

#### Numbers
> Note: numbers are always stored as doubles (double-precision floating-point numbers) but can be displayed without a decimal point
```
let count = 10; // integer literal; count is still a double
const blue = 0x0000ff; // hexadecimal (hex ff = decimal 255)
const umask = 0o0022; // octal (octal 22 = decimal 18)
const roomTemp = 21.5; // decimal
const c = 3.0e6; // exponential (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19; // exponential (-1.6 × 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; // "not a number"
```

#### Strings
> Note: string literals are represented with single quotes(''), double quotes(""), or
backticks(``). (In ES6 Backticks, or grave accent marks, enabled the use of template strings)
``` 
// Template String
let user_name = "Al E. Gator";
console.log(`See you later, $(user_name)`!);

------ Console Output ------
See you later, Al E. Gator!
```
One must be use caution when dealing with multiple quotes, backticks and apostrophes within a string.
```
// this is fine
const dialog = 'Sam said "Hello, old friend!"';
const shout = "Don't do that!";

// this will produce an error
const dialog = "Sam said "Hello, old friend!"";
const shout = 'Don't do that!'
```
To fix these errors, one needs to escape the erroneously used quotation marks.
```
const dialog = "Sam said \"Hello, old friend!\"";
const shout = 'Don\'t do that!'
```
This brings us to our next topic under strings, Escaping and Special Characters.
| Code | Description | Example |
|:------:|:-----------------:|:----------------------:|
| \n | Newline | "Hello\nWorld" |
| \r | Return Carriage | "Line1\rLine2 |
| \t | Tab | "Hello\tWorld" |
| \' | Single Quotation | 'Don\'t clap!' |
| \"" | Double Quotation | "Say, \"Hello.\"" |
| \$ | Dollar Sign | `Hey ${user_name}!' |
| \\ | Backslash | "5\\5 === 1" |
| \uXXXX | Unicode Point | "Alpha Symbol: \u03B1" |
| \xXX | Latin-1 Character | "Mu Symbol: \xDF" |
| \0 | NUL Character | "ASCII NUL: \o" |
| \v | Vertical Tab | "Vertical Tab: \v" |
| \b | Backspace | "Backspace: \b" |
| \f | Form Feed | "Form Feed: \f" |
Numbers in Strings
```
const result1 = 3 + '30';
const result2 = 3 * '30';
console.log(result1);
console.log(result2);

------ Console Output ------
330
303030
```

#### Booleans
Booleans have two values:
* true
* false
> Note: considerations must be made when dealing with "truthy" or "falsy" values. See Chapter 5.

#### Symbols
Symbols are new data types that are used like unique tokens; no symbol matches another.
> Symbols are created using the Symbol() constructor
```
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
console.log(RED === ORANGE);

------ Console Output ------
false
```

#### Objects
Objects are a mutable data type that act like a container, and are defined using const. The "container" may have properties that may be added, changed or removed.
```
const obj = {};
```
Properties (or members) consist of a name (or key) and value. Propery names/keys must be strings or symbols.
```
obj["colour"] = "black";
obj["size"] = 3;
console.log(obj.colour);
console.log(obj.size);
obj["colour"] = "white"
delete obj.size;
console.log(obj.colour);
console.log(obj.size);
obj.colour = "black";
console.log(obj["colour"])

------ Console Output ------
black
3
white
undefined
black
```
Another example
```
const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4 }; // declaration on one line

const sam3 = {
    name: 'Sam',
    classification: { // property values can
    kingdom: 'Anamalia', // be objects themselves
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
    },
};

sam3.classification.family; // "Felinae"
sam3["classification"].family; // "Felinae"
sam3.classification["family"]; // "Felinae"
sam3["classification"]["family"]; // "Felinae"
```
One can also add functions to an object and delete "trees"
```
sam3.speak = function() { return "Meow!"; };
sam3.speak(); // "Meow!"
delete sam3.classification; // the whole classification tree is removed
delete sam3.speak; // the speak function is removed
```

#### Arrays
Unlike regular objects, array contents have a natural order (element 0 will always come before element 1), and keys are numeric and sequential.
Arrays in JS have the following properties:
* Array size is not fixed
* Arrays are not homogeneous; each individual element can be of any type.
* An Array's index begins at 0.

Arrays are created using square brackets [], with elements separated by commas
```
const a1 = [1, 2, 3, 4]; // array containing numbers
const a2 = [1, 'two', 3, null]; // array containing mixed types

const a3 = [ // array on multiple lines
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?",
];

const a4 = [ // array containing objects
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];

const a5 = [ // array containing arrays
    [1, 3, 5],
    [2, 4, 6],
];
```
You can attain the length of any array by using the .length function
```
const arr = ["one", "two", "three"];
console.log(arr.length);

------ Console Output ------
3
```

#### Dates
Dates are represented by the built-in Date object.
To create a date, one uses "new Date();"
```
const now = new Date();
now; // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)
//To create a date that’s initialized to a specific date (at 12:00 a.m.):
const halloween = new Date(2016, 9, 31); // note that months are zero-based: 9=October
//To create a date that’s initialized to a specific date and time:
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
Once you have a date object, you can retrieve its components:
halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0
```

#### Regular Expressions
A regular expression (or regex or regexp) is something of a sublanguage of JavaScript. It is a common language extension offered by many different programming languages, and it represents a compact way to perform complex search and replace operations on strings.

Examples:
```
// extremely simple email recognizer
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// US phone number recognizer
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
```

#### Maps and Sets
ES6 introduces the data types Map and Set, and their “weak” counterparts, WeakMap and WeakSet. Maps, like objects, map keys to values, but offer some advantages over objects in certain situations. Sets are similar to arrays, except they can’t contain duplicates. The weak counterparts function similarly, but they make functionality tradeoffs in exchange for more performance in certain situations.

#### Data Type Conversion
##### Converting to Number
Using Number(), parseInt(), parseFloat() and .valueOf()
> Note: parse...() can take a radix (base) for the number (By deafult 10), however it is NOT required.
```
const numStr = "33.3";
const num = Number(numStr); // this creates a number value, not an instance of the Number object
```
If the string can’t be converted to a number, NaN will be returned.
```
const a = parseInt("16 volts"); // the " volts" is ignored, 16 is parsed
const b = parseInt("3a", 16); // parse hexadecimal 3a with base 16; result is 58
const c = parseFloat("15.5 kph"); // the " kph" is ignored;
```
A Date object can be converted to a number that represents the number of millisec‐
onds since midnight, January 1, 1970, UTC, using its valueOf() method:
```
const d = new Date(); // current date
const ts = d.valueOf(); // numeric value: milliseconds since [midnight, January 1, 1970 UTC]
```
##### Converting to String
One can use either the toString() method or a very simple string concatenation method
```
const a = 33.5;
const b = a.toString();
const c = 33.5 + "";
console.log(typeof(a));
console.log(typeof(b) +":"+ b);
console.log(typeof(c) +":"+ c);

------ Console Output ------
number
string:33.5
string:33.5
```
toString() can be applied to arrays as well
```
const arr = [1, true, "hello"];
arr.toString();

------ Console Output ------
1,true,hello
```

##### Converting to Boolean
Uses the Boolean() or double-"not" operator(!!)
> Note: truthy and falsy values are covered in Chapter 5
```
const n = 0; //falsy value i.e. false
const b1 = !!n; // false
const b2 = Boolean(n); // false
```