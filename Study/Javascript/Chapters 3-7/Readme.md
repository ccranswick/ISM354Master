# <a name="Top"></a>TABLE OF CONTENTS
* [Chapter 3](#chapter3)
* [Chapter 4](#chapter4)
* [Chapter 5](#chapter5)
* [Chapter 6](#chapter6)
* [Chapter 7](#chapter7)

## <a name="chapter3"></a>Chapter 3 - [Top](#Top)
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
One must use caution when dealing with multiple quotes, backticks and apostrophes within a string.
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
| \r | Return Carriage | "Line1\rLine2" |
| \t | Tab | "Hello\tWorld" |
| \\' | Single Quotation | 'Don\\'t clap!' |
| \\" | Double Quotation | "Say, \\"Hello.\\"" |
| \\$ | Dollar Sign | \`Hey ${user_name}!\` |
| \\\ | Backslash | "5\\\5 equals 1" |
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

## <a name="chapter4"></a>Chapter 4 - [Top](#Top)
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
    * Requires all results to be true to pass
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

## <a name="chapter5"></a>Chapter 5 - [Top](#Top)
## Expressions and Operators
### Operators
One can think of operators as the metaphorical "verbs" of programming languages

#### Arithmetic Operators
| Operator | Description | Example |
|:--------:|:-----------------------------:|:------------------------------------------:|
| + | Addition/String Concatenation | 3+2 // 5 |
| - | Subtraction | 3-2 // 1 |
| / | Division | 3/2 // 1.5 |
| * | Multiplication | 3*2 // 6 |
| % | Remainder | 3%2 // 1 |
| - | Unary Negation | -x // Negative x |
| + | Unary Plus | x+ // converts to number |
| ++() | Pre-Increment | ++x // increment by 1, evaluates new value |
| ()++ | Post-Increment | x++ // increment by 1, evaluates old value |
| --() | Pre-Decrement | --x // decrement by 1, evaluates new value |
| ()-- | Post-Decrement | x-- // decrement by 1, evaluates old value |

#### Operator Precedence
* Follows PEMDAS - “Please Excuse My Dear Aunt
Sally.”
    * Parenthesis
    * Exponents
    * Multiplication
    * Division
    * Addition
    * Subtraction
Consider:
```
console.log(8 ÷ 2 + 3 × ( 4 × 2 − 1 ));
//(8 ÷ 2 + 3 × ( 4 × 2 − 1 ))
//(8 ÷ 2 + 3 × ( 8 − 1 ))
//(8 ÷ 2 + 3 × ( 7 ))
//(4 + 3 × ( 7 ))
//(4 + 21 )
//(25 )

------ Console Output ------
25
```

#### Comparison Operators
There are three types of equality:
* Strict equality (===)
* abstract equality (==)
* relational
```
const n = 5;
const s = "5";
n === s; // false -- different types
n !== s; // true
n === Number(s); // true -- "5" converted to numeric 5
n !== Number(s); // false
n == s; // true; not recommended
n != s; // false; not recommended


//Relational Operators
3 > 5; // false
3 >= 5; // false
3 < 5; // true
3 <= 5; // true
5 > 5; // false
5 >= 5; // true
5 < 5; // false
5 <= 5; // true
```
#### String Concatenation
There are two cases of concatenation, see below:
```
console.log(3 + 5 + "8"); //case 1
console.log("3" + 5 + 8); //case 2

------ Console Output ------
88
358
```
Case 1:
* 3 + 5 = 8
* 8 + "8"
* "88"

Case 2:
* "3" + 5 = "35"
* "35" + 8
* "358"

#### Truthy and Falsy Values
* Truthy Values
    * Any object
    * Any array
    * Any non-empty string
    * The string "false"
    * Any integer (besides 0)
* Falsy Values
    * undefined
    * null
    * 0
    * NaN
    * '' (an empty string)

#### Short-circuit evaluation is on pg91 if you're interested, but I don't think it will be examinable. Comma operator, grouping operator, bitwise operators, typeof Operator, void operator.

#### Assignment Operators
| Operator | Equivalent |
|:--------:|:----------:|
| x+=y | x = x + y |
| x-=y | x = x - y |
| x*=y | x = x * y |
| x/=y | x = x / y |
| x%=y | x = x % y |
| x^=y | x = x ^ y |
| x&=y | x = x & y |
| x|=y | x = x | y |

#### Destructuring Assignment
Allows you to take an object or an array and destructure it into individual variables.
```
//example1
// a normal object
const obj = { b: 2, c: 3, d: 4 };
// object destructuring assignment
const {a, b, c} = obj;
a; // undefined: there was no property "a" in obj
b; // 2
c; // 3
d; // reference error: "d" is not defined

//example2
const obj = { b: 2, c: 3, d: 4 };
let a, b, c;
({a, b, c} = obj);
a; // undefined
b; // 2
c; // 3

//example3
// a normal array
const arr = [1, 2, 3];
// array destructuring assignment
let [x, y] = arr;
x; // 1
y; // 2

//example4 - catching the rest of the array using (...) operator
const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
x; // 1
y; // 2
rest; // [3, 4, 5]

//example5 - swopping numbers
let a = 5, b = 10;
[a, b] = [b, a];
a; // 10
b; // 5
```

## <a name="chapter6"></a>Chapter 6 - [Top](#Top)
## Functions
selfcontained collection of statements that runs as a single unit

Function declaration
```
function function_name() {
    //this is the body; starts with a curly brace
    console.log(""Hello, World!");
    //ends with a curly brace
}
```
Function calling
```
function_name();
```

#### Return Values
A function with a return value is an expression that resolves to a value. This is how we can retrieve an output from a function.

Example:
```
function getString() {
    return "Hello, World!";
}

console.log(getString());

------ Console Output ------
Hello, World!
```

#### Calling Versus Referencing
It is important to note that you may CALL or REFERENCE a function.
* functionName() --> call
* functionName --> reference
```
function getString() {
    return "Hello, World!";
}
getString(); // "Hello, World!"
getString; // function getString(): returns the function

//assign function to VARIABLE
const f = getString;
f(); // "Hello, World!"
//assign function to object property
const o = {};
o.f = getString;
o.f(); // "Hello, World!"

//assign function to ARRAY
const arr = [1, 2, 3];
arr[1] = getString; // arr = [1, function getString(), 2]
arr[1](); // "Hello, World!"
```

### Function Arguments
You can parse arguements through a function as well, this allows us to give our functions input.
```
function avg(a, b) {
    return((a+b)/2);
}

avg(5, 10); // 7.5
```
As mentioned in [Chapter 3](#chapter3), scope limits your ability to change certain variables from within a function. This, however, is not true for objects.
```
function f(o) {
    o.message = o.message + ", World!";
}
let o = {
    message: "Hello";
}
console.log(o.message);
f(o);
console.log(o.message);

------ Console Output ------
Hello
Hello, World!
```
As can be seen, an object parsed into a function is able to be changed.

#### Destructuring Arguments
One can also parse destructured arguements. This means one can parse an object or array directly into a function.
```
// object
function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};
getSentence(o); // "I love JavaScript"
// array
function getSentence([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`;
}
const arr = [ "I", "love", "JavaScript" ];
getSentence(arr); // "I love JavaScript"
```

#### Default Arguments
In ES6 one can now specify default values as well.
```
function f(a, b = "2", c = "3") {
    return `${a} - ${b} - ${c}`;
}
f(5); // "5 - 2 - 3" 
f(5, 6); // "5 - 6 - 3"
```

#### Functions as Properties of Objects
Objects may possess a function as an attribute.
```
const dog = {
    name: "Henry",
    age: 3,
    bark: function () {return 'Woof!';}
}

dog.bark; // function() {return 'Woof!';}
dog.bark(); // Woof!
```
> Note: keep in mind that the property becomes a function and if you don't call it properly it will merely  reference the function.

#### The this Keyword
The "this" keyword relates to functions that are properties of objects. When methods are called, the "this" keyword takes on the value of the specific object it was called on.
```
const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; },
}

o.speak(); // My name is Wallace!
```

#### Function Expressions and Anonymous Functions
As per the textbook:
> So far, we’ve been dealing exclusively with function declarations, which give functions both a body (which defines what the function does) and an identifier (so we can call it later). JavaScript also supports anonymous functions, which don’t necessarily have an identifier.
This brings us to the next point, Anonymous Functions.
```
var i = 6;
const g = function f(stop) {
    if (stop === false) {
        return;
    } else if (i===10) { 
        f(false); 
    } else {
        console.log(i);
        i++;
        f(true);
    }
};
g(true);

------ Console Output ------
6
7
8
9
```
As can be seen from above, the identifier for the function is not the f() but rather the g(). This means we have the ability to call the f() function from within the f() function itself. 
> This allows us to establish a, what is called, Recursive Function.

### Arrow Notation
> also called "Fat Arrow"

Arrow Notation allows us to do a number of different things.
* You can omit the word "Function"
* If the function takes a single arugment, you can omit the parentheses.
    * Wanderer => \`Hello, ${Wanderer}!\`
* If the function body is a single expression, you can omit curly braces and the return statement.
```
const f1 = function() { return "Hello"; }
// OR
const f1 = () => "Hello";
const f2 = function(name) { return `Hello, ${name}!`; }
// OR
const f2 = name => `Hello, ${name}!`;
const f3 = function(a, b) { return a + b; }
// OR
const f3 = (a,b) => a + b;
```
#### call, apply, and bind
These concepts are unfortunately not easy to explain and understand through basic descriptions. Thus, an example is the best way to go.

Call
```
const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
    return `Hello, I'm ${this.name}!`;
}
greet(); // "Hello, I'm !" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'
```
As can be seen from above, the function greet() takes no argument but uses "this" within itself. Therefore one can see that call allows us to call a function as if it were a method.
> Note: call allows us to provide an object to bind "this" to.
```
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
    // bruce is now { name: "Bruce", birthYear: 1949,
    // occupation: "singer" }
update.call(madeline, 1942, 'actress');
    // madeline is now { name: "Madeline", birthYear: 1942,
    // occupation: "actress" }
```
Apply is pretty identical to Call, however it takes an Array as arguments instead.
```
update.apply(bruce, [1955, "actor"]);
    // bruce is now { name: "Bruce", birthYear: 1955,
    // occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
    // madeline is now { name: "Mad
// OR
const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15
```
There’s one final function that allows you to specify the value for "this": bind. Bind allows you to permanently associate a value for "this" with a function.
```
const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
    // bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce.call(madeline, 1274, "king");
    // bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
    // madeline is unchanged
// OR
const updateBruce1949 = update.bind(bruce, 1949);

updateBruce1949("singer, songwriter");
    // bruce is now { name: "Bruce", birthYear: 1949,
    // occupation: "singer, songwriter" }
```

## <a name="chapter7"></a>Chapter 7 - [Top](#Top)
> Note: pretty theoretical chapter, hard to summarise so I suggest that one should read through chapter 7

## Scope
Scope determines when and where variables, constants, and arguments are considered to be defined. We've already explored this concept somewhat in [Chapter 3](#chapter3). As a reminder, consider the following.
```
function f(x) {
    return x + 3;
}
f(5); // 8
x; // ReferenceError: x is not defined
```
> Note: a function may be called multiple times: each time the function is called, its arguments come into existence, and then go out of scope when the function returns

#### Scope Versus Existence
It’s intuitively obvious that if a variable doesn’t exist, it’s not in scope. Conversely, if a variable is not in scope, does that mean it doesn’t exist? Not necessarily, and this is where we must make a distinction between scope and existence.


Scope (or visibility) refers to the identifiers that are currently visible and accessible by the currently executing part of the program (called the execution context). Existence, on the other hand, refers to identifiers that hold something for which memory has been allocated (reserved). 


When something ceases to exist, JavaScript doesn’t necessarily reclaim the memory right away: it simply notes that the item no longer needs to be kept around, and the memory is periodically reclaimed in a process called garbage collection. Garbage collection in JavaScript is automatic, and outside of certain highly demanding applications, isn’t something you’ll need to concern yourself with.

#### Lexical Versus Dynamic Scoping
When you look at the source code for a program, you are looking at its lexical structure.


Lexical scoping means whatever variables are in scope where you define a function from (as opposed to when you call it) are in scope in the function. Consider this example:
```
const x = 3;
function f() {
    console.log(x); // this will work
    console.log(y); // this will cause a crash
}

const y = 3;
f();
```
The variable x exists when we define the function f, but y doesn’t. Then we declare y and call f, and see that x is in scope inside the body of f when it’s called, but y isn’t. This is an example of lexical scoping: the function f has access to the identifiers that were available when it was defined, not when it was called.
> Note: lexical scoping in JavaScript applies to global scope, block scope, and function scope.


#### Global Scope, Block Scope (pg.119) - I reccomend reading over this if you don't understand what Global and Block Scope is yet.


#### Variable Masking
A common source of confusion is variables or constants with the same name in different scopes.
```
{
    // outer block
    let x = { color: "blue" };
    let y = x; // y and x refer to the same object
    let z = 3;
    {
        // inner block
        let x = 5; // outer x now masked
        console.log(x); // logs 5
        console.log(y.color); // logs "blue"; object pointed to by
        // y (and x in the outer scope) is
        // still in scope
        y.color = "red";
        console.log(z); // logs 3; z has not been masked
    }
    console.log(x.color); // logs "red"; object modified in inner scope
    console.log(y.color); // logs "red"; x and y point to the same object
    console.log(z); // logs 3
}
```
> Note: variable masking is sometimes called variable shadowing (that is, a variable with the same name will shadow the variable in the outer scope).

By now, it should be clear that scope is hierarchical: you can enter a new scope without leaving the old one. This establishes a SCOPE CHAIN that determines what variables are in scope: all variables in the current scope chain are in scope, and (as long as they’re not masked), can be accessed.

#### Functions, Closures, and Lexical Scope
Closure

It’s quite common to intentionally define a function in a specific scope so that it explicitly has access to that scope. This is usually called a *closure* (you can think of closing the scope around the function). Let’s look at an example of a closure.
```
let globalFunc; // undefined global function
{
    let blockVar = 'a'; // block-scoped variable
    globalFunc = function() {
        console.log(blockVar);
    }
}
globalFunc(); // logs "a"
```
globalFunc is assigned a value within a block: that block (and its parent scope, the global scope) form a closure. No matter where you call globalFunc from, it will have access to the identifiers in that closure. Consider the important implications of this: when we call globalFunc, it has access to blockVar despite the fact that we’ve exited that scope. Normally, when a scope is exited, the variables declared in that scope can safely cease to exist. 


So defining a function within a closure can affect the closure’s lifetime; it also allows
us to access things we wouldn’t normally have access to. Consider this example:
```
let f; // undefined function
{
    let o = { note: 'Safe' };
    f = function() {
    return o;
    }
}
let oRef = f();
oRef.note = "Not so safe after all!";
```
Normally, things that are out of scope are strictly inaccessible. Functions are special in that they allow us a window into scopes that are otherwise inaccessible. 

#### Immediately Invoked Function Expressions (IIFE)
An IIFE declares an anonymous (has no identifier) function and then runs it immediately, they follow this pattern:
```
(function() {
    // this is the IIFE body
})();

// Turning a function into an IIFE
// Normal
function f() {
    console.log("Hello, World!");
}
f(); // Hello, World!
// IIFE
(function(){console.log("Hello, World!");})(); // Hello, World!
```
> (f)(); === (function(){})();

An example of an IIFE that you've already seen is the async function in the React project.
> Note: one can see the use of arrow notation and IIFE
```
(async () => {
    console.log(await api.get('/clients'));
})();
```

#### Function Scope and Hoisting
When you declare a variable with *let*, it doesn’t spring into existence until you declare it. When you declare a variable with var, it’s available everywhere in the current scope, EVEN BEFORE it’s declared. 

Let
```
x; // ReferenceError: x is not defined
let x = 3; // we'll never get here -- the error stops execution
```
Var
```
x; // undefined
var x = 3;
x; // 3
```
This is called *Hoisting*. JS scans the entire scope of the program and any variables declared with *var* are *hoisted* to the top.
> Note: only the declaration is hoisted, NOT the assignment.
```
// what you write           // how JavaScript interprets it
                            var x;
                            var y;
if(x !== 3) {               if(x !== 3) {
 console.log(y);                console.log(y);
 var y = 5;                     y = 5;
 if(y === 5) {                  if(y === 5) {
 var x = 3;                         x = 3;
 }                              }
 console.log(y);                console.log(y);
}                           }
if(x === 3) {               if(x === 3) {
 console.log(y);                console.log(y);
}                           }
```

#### Function Hoisting
Similarily, functions can be *hoisted*.
```
f(); // logs "f"

function f() {
    console.log('f');
}
```
> Note: function expressions that are assigned to variables are not hoisted; rather, they are subject to the scoping rules of variables. 
```
f(); // TypeError: f is not a function

let f = function() {
    console.log('f');
}
```

#### The Temporal Dead Zone
The temporal dead zone (TDZ) is a dramatic expression for the intuitive concept that variables declared with let don’t exist until you declare them. Within a scope, the TDZ for a variable is the code before the variable is declared.
> Note: this will only conceptually confuse those who are familiar with JS prior to ES6.

#### Strict Mode
The syntax of ES5 allowed for something called implicit globals, which have been the
source of many frustrating programming errors. In short, if you forgot to declare a
variable with var, JavaScript would merrily assume you were referring to a global
variable. If no such global variable existed, it would create one! You can imagine the
problems this caused.


For this (and other) reasons, JavaScript introduced the concept of strict mode, which
would prevent implicit globals. Strict mode is enabled with the string "use strict"
(you can use single or double quotes) on a line by itself, before any other code. If you
do this in global scope, the entire script will execute in strict mode, and if you do it in
a function, the function will execute in strict mode.


Because strict mode applies to the entire script if used in the global scope, you should
use it with caution. Many modern websites combine various scripts together, and
strict mode in the global scope of one will enable strict mode in all of them. While it
would be nice if all scripts worked correctly in strict mode, not all of them do. So it’s
generally inadvisable to use strict mode in global scope. If you don’t want to enable
strict mode in every single function you write (and who would?), you can wrap all of
your code in one function that’s executed immediately.
```
(function() {
    'use strict';
    // all of your code goes here...it
    // is executed in strict mode, but
    // the strict mode won't contaminate
    // any other scripts that are combined
    // with this one
})();

```
Strict mode is generally considered a good thing.


Useful links:

https://jsbin.com/

https://www.tablesgenerator.com/markdown_tables#