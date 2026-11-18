let fruits = ['apple','cherry', 'banana','date', 'elderberry'];
fruits.sort(); // Sorts the array in alphabetical order
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry'] 
let numbers = [5, 3, 8, 1, 2];
// numbers.sort((a, b) => a - b);  // Sorts the array in ascending order
// console.log(numbers);
// numbers.sort((a, b) => b - a);  // Sorts the array in descending order
// console.log(numbers);

//slice
let slicedNumbers = numbers.slice(1, 4);  // Extracts elements from index 1 to 3
console.log(slicedNumbers);  // Output: [3, 8, 1]   

//Filter
let filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers);  // Output: [5, 8]    

//map
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [10, 6, 16, 2, 4]  

//reduce
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 17

//every and some
let allGreaterThanZero = numbers.every(num => num > 0);
console.log(allGreaterThanZero);  // Output: true

let someGreaterThanFive = numbers.some(num => num > 5);
console.log(someGreaterThanFive);  // Output: true  


let [a,b,...remaining] = [1,2,3,4,5];
console.log(a); // Output: 1
console.log(b); // Output: 2  
console.log(remaining); // Output: [3, 4, 5]
