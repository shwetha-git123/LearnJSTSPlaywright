//Functions
//type1 : No parameters and no return value
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
greet(); // Calling the function to execute it

//type2 : With parameters and no return value
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript!`);
}
greetUser("Alice"); // Calling the function with an argument

//type3 : No parameters and with return value
function getGreeting() {
    return "Hello, welcome to JavaScript!";
}
console.log(getGreeting()); // Calling the function and logging its return value

//type4 : With parameters and with return value
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 10); // Calling the function with arguments and storing the return value
console.log(`The sum is: ${sum}`); // Logging the return value

//Arrow Functions
const multiplyNumbers = (a, b) => a*b; // Arrow function with parameters and return value
let product = multiplyNumbers(5, 10);

console.log(`The product is: ${product}`); // Logging the return value of the arrow function

//Anonymous Functions
const divideNumbers = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }       
return a / b;
};

let quotient = divideNumbers(10, 2);

console.log(`The quotient is: ${quotient}`); // Logging the return value of the anonymous function  

// var, let, and const
var x = 5; // Function-scoped 
let y = 10; // Block-scoped
const z = 15; // Block-scoped and cannot be reassigned

//example of block scope
if (true) {
    let blockScopedVariable = "I am block scoped!";
    console.log(blockScopedVariable); // Accessible here
}
console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined

//example of function scope
function functionScopeExample() {
    var functionScopedVariable = "I am function scoped!";
    console.log(functionScopedVariable); // Accessible here
}
functionScopeExample(); 
console.log(functionScopedVariable); // Uncaught ReferenceError: functionScopedVariable is not defined

//example of const
const constantVariable = "I cannot be reassigned!";
// constantVariable = "Trying to reassign"; // Uncaught TypeError: Assignment to constant variable. 

