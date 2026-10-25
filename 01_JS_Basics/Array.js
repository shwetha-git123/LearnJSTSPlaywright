let arr1=[10,20,30,40]
const arr2= [50, "shwetha", false]
console.log(arr1)
arr1[0] = 100
console.log(arr1)
console.log(arr2)
arr2[1] = 60
console.log(arr2)

let scores=new Array(5)
console.log(scores)
scores[0]=10

let scores1=new Array(10,20,30,40)
console.log(scores1)

let scores2=new Array("shwetha", "sowmya", "sindhu")
console.log(scores2)    

//Access modifiers
let arr3 = [1, 2, 3];
console.log(arr3[0]); // Accessing the first element
console.log(arr3.at(1)); // Accessing the second element using at() method
console.log(arr3.at(-1)); // Accessing the last element using negative index
console.log(arr3.at(-4)); // Accessing element not present in the array using negative index (returns undefined)

// apending elements
let arr4 = [1, 2, 3];
console.log(arr4.length); // Output: 3
arr4.push(4);
console.log(arr4.length); // Output: 4
arr4.push(5, 6);
console.log(arr4.length); // Output: 6  
arr4.pop(); // Removes the last element
console.log(arr4.length);   

arr4.unshift(0); // Adds an element at the beginning
console.log(arr4.length);   
console.log(arr4);
arr4.shift(); // Removes the first element
console.log(arr4);   

arr4.splice(1, 2); // Removes 2 elements starting from index 1
console.log(arr4); // Output: [1, 4, 5]
arr4.splice(1, 0, 2, 3); // Inserts 2 and 3 at index 1 without removing any elements
console.log(arr4); // Output: [1, 2, 3, 4, 5]

//Searching elements
let arr5 = [1, 2, 3, 4, 5]; 
console.log(arr5.indexOf(3)); // Output: 2
console.log(arr5.indexOf(6)); // Output: -1
console.log(arr5.at(-1)); // Output: 5
console.log(arr5.includes(4)); // Output: true

//find elements
let arr6 = [1, 2, 3, 4, 5];
const found = arr6.find(element => element > 3);
console.log(found); // Output: 4            
const foundIndex = arr6.findIndex(element => element > 3);
console.log(foundIndex); // Output: 3


for(let i of arr6){
    console.log(i); // Output: 1, 2, 3, 4, 5
}   

//forEach
arr6.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

//map
const arr7 = [1, 2, 3, 4, 5];
const mappedArr = arr7.map(element => element * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8, 10]
console.log(typeof mappedArr); // Output: object

//filter
const arr8 = [1, 2, 3, 4, 5];
const filteredArr = arr8.filter(element => element > 3);
console.log(filteredArr); // Output: [4, 5]
