let fruits = ['apple','cherry', 'banana','date', 'elderberry'];
fruits.sort(); // Sorts the array in alphabetical order
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry'] 
let numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);  // Sorts the array in ascending order
console.log(numbers);
numbers.sort((a, b) => b - a);  // Sorts the array in descending order
console.log(numbers);