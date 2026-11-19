//Functions are hoisted in JavaScript, meaning they can be called before they are defined in the code. This is because function declarations are moved to the top of their containing scope during the compilation phase.

//Function Declaration
console.log(greet("Alice")); // Output: "Hello, Alice!"

function greet(name) {
    return `Hello, ${name}!`;
}

//Function Expression is not hoisted in the same way as function declarations. If you try to call a function expression before it is defined, you will get a TypeError.
console.log(greet2("Bob")); // Output: "Hello, Bob!"
var greet2 = function(name) {
    return `Hello, ${name}!`;
};  

//Arrow Function Expression is also not hoisted. If you try to call an arrow function before it is defined, you will get a ReferenceError.

//example of arrow function expression

console.log(greet3("Charlie")); // Output: "Hello, Charlie!"
const greet3 = (name) => {
    return `Hello, ${name}!`;
};  

//Classes in JavaScript are not hoisted in the same way as functions. If you try to create an instance of a class before it is defined, you will get a ReferenceError.

class Person {
    constructor(name) {
        this.name = name;
    }
}