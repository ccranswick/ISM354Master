# <a name="Top"></a>TABLE OF CONTENTS
* [Chapter 3](Chapter3)
* [Chapter 4](Chapter4)
* [Chapter 5](Chapter5)
* [Chapter 6](Chapter6)
* [Chapter 7](Chapter7)

## <a name="Chapter3"></a>Chapter 3 - [Top](#Top)
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
#### Primitive types
* Number
* String
* Boolean
* Null
* Undefined
* Symbol

#### Primitive Objects
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
| \' | Single Quotation | 'Don\\'t clap!' |
| \"" | Double Quotation | "Say, \\"Hello.\\"" |
| \$ | Dollar Sign | `Hey ${user_name}!' |
| \\\ | Backslash | "5\\\5 === 1" |
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
> Note: considerations must be made when dealing with "truthy" or "falsy" values. See [Chapter 5](#Chapter5).

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
> Note: truthy and falsy values are covered in [Chapter 5](#Chapter5)
```
const n = 0; //falsy value i.e. false
const b1 = !!n; // false
const b2 = Boolean(n); // false
```

## <a name="Chapter4"></a>Chapter 4 - [Top](#Top)
## Control Flow
### Simple Control Flows
#### While Loops
The while loop begins with its condition. If the condition is true it will run through its "Block Statement". Once its Block Statement is finished it will check the condition again. Essentially, while the condition is true, a while loop will run.
```
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

------ Console Output ------
0
1
2
3
4
```
You can also make an infinite loop that will conditonally stop using a Control Flow Exception.
```
let i = 0;
while (true){
    console.log(i);
    i++;
    if (i === 5) {
        break;
    }
}
```

#### Block Statements
Block Statements (sometimes called Compound Statements) is just a series of statements enclosed in curly braces.
```
{ // start block statement
    console.log("statement 1");
    console.log("statement 2");
} // end block statement
console.log("statement 3");
```
While exceedingly common in JS, a Block Statement is not necessarily required for single line functions/methods.
```
let i = 2;
while(i < 500)
    i = i + 2;
```
> Note: One may omit the curly braces but one must remember than only the first function/method is performed within the conditional statement.
```
let i = 2;
while (i < 5)
    console.log(i);
    i++;
    console.log("Hello, World!");

------ Console Output ------
2
3
4
Hello, World!
```


#### Whitespace
For the most part, JS doesn't care about whitespace, including new lines.
For Example:
```
while(i < 500)


    i = i + 2; //this is still valid
```
> Note: it is generally frowned upon to leave unnecessary whitespace

#### if Statements
An if Statement only runs should the condition be true.
```
let i = 5;
if (i < 6){
    console.log(i);
}
```
if...else Statements are fairly straight forward, if the if Statement's condition fails, the else statement runs.
```
let i = 5;
if (i > 100) {
    console.log("greater than 100");
} else {
    console.log("smaller than 100");
}

------ Console Output ------
smaller than 100
```
if...else if Statements are fairly straight forward as well, one may just give a condition to an else statement.
```
let i = 5;
if (i > 100) {
    console.log("greater than 100");
} else if (i < 50) {
    console.log("smaller than 50");
} else {
    console.log("between 50 and 100");
}

------ Console Output ------
smaller than 50
```
One can add as many conditions to any statement as one likes. Similarily, one can use comparison or logical operators as well.
* AND operator - &&
    * Requires two true results to pass
* OR operator - ||
    * Require one true result to pass
* NOT operator - !
    * flips the boolean result
        * true --> false
        * false --> true
```
let i = 10;
if ( (i > 0 && i < 100) || !(i === 10) ) {
    //true     true        false
    console.log(i);
}

------ Console Output ------
10
```
A different kind of if Statement is a Conditional Operator and functions as follows.
* (condition) ? result_if_true : result_if_false;
```
let i = 6;
(i>10)?console.log("greater than 10"):console.log("smaller than 10");

------ Console Output ------
smaller than 10
```

#### Switch Statements
Switch Statements function similarily to a if...else Statement or Conditional Operator. However, it allows you to have a condition more varied than simply true or false.
```
const money = 50;
switch(money) {
    case 10:
        console.log("You've got 10")
        break;
    case 20:
        console.log("You've got 20")
        break;
    case 50:
        console.log("You've got half a hundred");
        return money;
}

------ Console Output ------
You've got half a hundred
```

#### do...while Loop
do...while Loops function the same way as while Loops, but do...while Loops first run their block statement and then check the condition.
```
let i = 5;
do {
    i++;
    console.log(i);
} while (i > 10)

------ Console Output ------
6
```

#### for Loops
The for Loop is able to replace both the while or do...while Loop. It is usually needed when you need to repeat a function a fixed number of times. What's special about the for Loop is that you can define your incrementing variable inside the for Loop. There are also a number of variations on the for Loop.
```
for (var i = 0; i < 3; i++) {
    console.log(i);
}

------ Console Output ------
0
1
2
```
> Note: remember you can ONLY retrieve the value i after the for loop IF you used VAR and NOT LET
```
for(var i = 0;i<5;i++){
  continue;
}
console.log(i);

for(let i = 0;i<5;i++){
  continue;
}
console.log(i);

------ Console Output ------
5
ReferenceError: i is not defined
```
for...in Loop
* Designed to loop over the property keys of an object
```
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for(let prop in player) {
    console.log(prop + ': ' + player[prop]);
}

------ Console Output ------
name: Thomas
rank: midshipman
age: 25
```
for...of Loop
* Designed to loop through iterable objects such as arrays
```
const numberArray = [1,3,5];
for(let singleNumber of numberArray) {
    console.log(singleNumber);
}

------ Console Output ------
1
3
5
```

Variation:
```
for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp) {
    console.log(j);
}

for(;;) console.log("I will repeat forever!");

let s = '3'; // string containing a number
for(; s.length<10; s = ' ' + s); // zero pad string; note that we must include a semicolon to terminate this for loop!
for(let x=0.2; x<3.0; x += 0.2) { // increment using noninteger
    console.log(x);
}
for(; !user.isBroke;) { //use object property as conditional
    console.log("User is still broke!");
}
```

### Control Flow Exceptions
There are a number of control flow exceptions:
* break
    * breaks out of the loop early
* continue
    * skips to the next step in the loop
* return
    * exits the current function
    * can be given an argument to return upon exit
* throw
    * indicates an exception that must be caught by a handler
```
let i = 5;

function shout(string) {
    return string+"!";
    console.log("I won't be run.");
}

while (i < 50) {
    i++;
    if (i === 15) {
        console.log(i);
        continue;
    } else if (i === 20) {
        break;
    }
}

console.log(shout(i));

------ Console Output ------
15
20!
```

## <a name="Chapter5"></a>Chapter 5 - [Top](#Top)
## Expressions and Operators
### Operators
#### Arithmetic Operators
#### Operator Precedence
#### Comparison Operators
#### String Concatenation
#### Logical Operators
#### Truthy and Falsy Values
#### Comma Operator

### Expressions