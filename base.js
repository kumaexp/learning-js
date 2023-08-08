// How to make a variable
var a = 'a';
let b = 'b';
const c = 'c';

// You could also make a statement like
let x, y, z;
x = 1;
y = 2;
z = x + y;
console.log(z);

// Variable can store data like string (text), integer / number, boolean, array, object.
let name = "Chien"; // String
let age = 17; // Number
let isTrue = true; // Boolean
let money = 90000.0; // Number with comma

// Arithmethic Operators
let number1 = 10;
let number2 = 20;
console.log(number1 + number2, "Addition");
console.log(number1 - number2, "Substraction");
console.log(number1 * number2, "Multiplication");
console.log(number1 / number2, "Division");
console.log(number1 % number2, "Modulus");


// Learning how to assign a variable
let tempMathResult = number1 + number2;
console.log(tempMathResult, "temp result");

tempMathResult = number1 - number2;
console.log(tempMathResult, "temp result");

tempMathResult = number1 * number2;
console.log(tempMathResult, "temp result");

tempMathResult = number1 / number2;
console.log(tempMathResult, "temp result");

tempMathResult = number1 % number2;
console.log(tempMathResult, "temp result");

// String can be added with other string, but you cannot substract it
let firstName = "Chien";
let lastName = "Massas";
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName);
console.log(firstName - lastName); // NaN

// To read a code, it start with left to right or top to bottom
// Example

let number = 20;
console.log(number + 10); // 30
number = 10; // Because it's below the first one, it override the value
console.log(number + 10); // 20
number = false;
console.log(number - 10);

// Why false - 10 = -10? Because False = 0, True = 1;
// For example
console.log(true + 10); // 11

// Error example
// Error is a part of code, you don't fear about it, the only thing that you need to be aware is
// if there's a bug in a program, but there's no error.
// const animal = 'Giraffe';
// console.log(animal);
// animal = 'Crocodile';
// Why ? Because const is constant, and you cannot change it, except if it's like "let" or so.

// Tips : Need to be precise and cautions, if there's an error, don't be afraid and try to solve it, it's the part of programming.