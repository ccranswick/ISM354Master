## Chapter 3
## Literals, Variables, Constants, and Data Types
### Variables and Constants
There are currently 3 methods in which to declare a variable or constant:
* const (only immutable declaration available to ES6)
* var
* let (recent ES6 term)

These methods all differ in scope, and mutablility.

There are 3 levels of scope:
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
> Note: numbers are always stored as doubles but can be displayed without a decimal point
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
backticks(``)
>> backticks enabled the use of template strings e.g. `Good Afternoon $(user_name)`

