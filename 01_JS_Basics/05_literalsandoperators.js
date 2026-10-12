/**
 * Literals and Operators: 
 * variable value is literal
 * let a = 10; // 10 is literal
 * let b = "Hello"; // "Hello" is literal
 * let c = true; // true is literal
 */
// use typeof operator to check the type of variable
let a=10;
let pname="John";
console.log(typeof a); // number
console.log(typeof pname); // string
let empty=null;
console.log(typeof empty); // object
let negative=-10;
console.log(typeof negative); // number
let floting=10.5;
console.log(typeof floting); // number

/**
 * Undefined and Null:
 * Undefined: variable is declared but not assigned a value
 * Null: variable is assigned a value of null/empty (absent of any value)
 */

// Arithmatic Operators: +, -, *, /, %, ++, --
// logical Operators: &&, ||, !
// comparison Operators: ==, !=, ===, !==, <, >, <=, >=
// assignment Operators: =, +=, -=, *=, /=, %=
//== and === difference is == checks for value only, === checks for value and type
// example for == and ===
// let x = 5;
// let y = "5";
// console.log(x == y);  // true
// console.log(x === y); // false

console.log(10=="10");