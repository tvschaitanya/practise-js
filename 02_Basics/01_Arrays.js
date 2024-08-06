// Arrays

// () = parentheses, [] = brackets, {} = braces

// Create an array of numbers
const myArr = [0, 1, 2, 3, 4, 5]; // Can include other data types too
// Create an array of strings
const myHeros = ["shaktiman", "naagraj"];

// Another way to create an array
const myyArr2 = new Array(1, 2, 3, 4);

// Array Methods

// Add elements to the end of the array
myArr.push(6, 7);
// Remove the last element from the array
myArr.pop();

// Add elements to the beginning of the array
myArr.unshift(9); // Ideal for adding tasks to a todo list
// Remove the first element from the array
myArr.shift();

// Check if the array includes a specific value
console.log(myArr.includes(4)); // Output: true or false
// Get the index of the first occurrence of a value in the array
console.log(myArr.indexOf(4)); // Output: index of the value or -1 if not found

// Log the entire array
console.log(myArr);

// Convert the array to a string, separating elements with commas
const newARR = myArr.join();
console.log(newARR); // Output: a string of numbers separated by commas
console.log(typeof newARR); // Output: "string"

// Slice and Splice

// Log the original array
console.log("A ", myArr);

// Create a new array by copying a portion of the original array (does not modify original)
const myn1 = myArr.slice(1, 3); // Creates a new array with elements at indices 1 and 2
console.log("The MYN-1 :");
// Log the original array (unchanged)
console.log("B ", myArr);
// Log the new array
console.log(myn1);

// Remove and return a portion of the array (modifies original array)
const myn2 = myArr.splice(1, 3); // Removes elements at indices 1, 2, and 3 and returns them in a new array
console.log("The MYN-2 :");
// Log the modified original array
console.log("C ", myArr);
// Log the removed elements
console.log(myn2);
