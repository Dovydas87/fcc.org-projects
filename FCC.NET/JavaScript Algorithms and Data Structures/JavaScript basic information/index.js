// This is an in-line comment

/* This is a multi-
line comment */

/* JavaScript provides eight different data types:
undefined, null, boolean, string, symbol, bigint, number, object. */

// Variable names can be made up of numbers, letters and $ or _, but may not contain spaces or start with a number.

// assignment operator (=)

/* var a; - When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined. */

/* One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations.
 A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. 
 So unlike var, when you use let, a variable with the same name can only be declared once.

 Example: 

 var myName = "my name";
 var myName = "my new name";
 console.log(myName); // output => "my new name"

 let myName = "my name";
 let myName = "my new name";
 console.log(myName); // output =>  SyntaxError: redeclaration of let myName

 let myName = "my name";
 myName = "my new name";
 console.log(myName); // output =>  "my new name"

 const myName = "my name";
 myName = "my new name";
 console.log(myName); //output => TypeError: invalid assignment to const 'myName' */

/* let myVar = 87;
  myVar = myVar + 1; ==> myVar++; */

// % - remainder;

//multi-dimensional array:
const teams = [["Bulls", 23], ["White Sox", 45]];

/* Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code. */

/* The push() method takes one or more arguments and appends them to the end of the array, in the order in which they appear. It returns the new length of the array. */
const arr1 = [1, 2, 3];
arr1.push(4, 5);
// arr1 now has the value [1, 2, 3, 4, 5] 

//pop() removes last element of an array;
//shift() removes first element of an array;
//unshift() add elements in front of the array;

const myArray = [50, 60, 70];

let myData = myArray[2];
console.log(myData);

/* == The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left. */

/* Strict equality (===) does not perform a type conversion:
3 ===  3  // true
3 === '3' // false */

/* In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
typeof 3 => returns "number"
typeof '3' => returns "string" */

// The inequality operator (!=);

// The strict inequality operator (!==);

//The greater than operator (>), will also convert data types;

//The greater than or equal to operator (>=), also converts data types;

//The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

//The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

/* In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain:

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

*/

/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
[] bracket is used to access object properties which have space in it's name. */


/* Add new properties to JavaScript Object: 
ourDog.bark = "bow-wow";
or
ourDog["bark"] = "bow-wow";

Delete properties from objects:
delete ourDog.bark; */

ACESS NESTED ARRAYS

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];


ACCESS NESTED OBJECTS

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;


-----------------LOOPS--------------------

WHILE LOOP 

const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

FOR LOOP

/* For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where 
a is the initialization statement, 
b is the condition statement, and 
c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable. */

DO ... WHILE LOOP

/* It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true. */

RECURSION

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

-------Math.random()----- Math.floor()------

Math.random() - generates random decimal numbers;
Math.floor() - rounds it's value to the nearest whole number;

To generate random number between two given min and max values:
Math.floor(Math.random() * (max - min + 1)) + min

parseInt() function parses a string and returns an integer.


----------CONDITIONAL (TERNARY) OPERATOR --------------

The syntax is
 a ? b : c, 
 where a is the condition, 
 b is the code to run when the condition returns true, 
 and c is the code to run when the condition returns false.