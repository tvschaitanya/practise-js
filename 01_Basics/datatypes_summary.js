// Primitive Types Demonstration
// Primitive data types are immutable and are passed by value, meaning a copy of the value is used when assigned to another variable.

// String Type
const score = 300; // A number representing a score.

// Boolean Type
const isLoggedIn = false; // A boolean value indicating login status.

// Null Type
const outsideTemp = null; // Represents an unknown or intentional absence of any object value.

// Undefined Type
let userEmail; // A variable declared but not assigned, thus its value is undefined.

// Symbol Type
const id = Symbol("123"); // A unique identifier.
const anotherId = Symbol("123"); // Another unique identifier with the same description.

// BigInt Type
const bigNumber = 2345653455344n; // A large numeric value.

// Demonstrating uniqueness of Symbols
console.log(id); // Logs the symbol itself.
console.log(anotherId); // Logs the other symbol.
console.log(id === anotherId); // Checks if both symbols are equal, demonstrating they are not due to their descriptions.

// Non-Primitive (Reference) Types Demonstration
// Non-primitive data types are mutable and are passed by reference, meaning the reference to the object is used when assigned to another variable.

// Array Type
const heroes = ["Ironman", "Dr. Strange", "Spidy"]; // An array of hero names.

// Object Type
let myObj = {
  name: "Chaitanya", // An object with properties
  age: 25,
};

// Function Type
const myFunction = function () {
  console.log("Hello World"); // A function that logs a message.
};

// Note: Due to pass-by-reference, modifications to objects, arrays, or functions inside a function will reflect outside the function.

console.log(typeof score);

// ~~~~~~~~~~~~~~~~ Memory ~~~~~~~~~~~~~~~ //

// Stack (Primitive) - you get a copy
// Heap (Non-Primitive) - you get a original value reference

let myYoutubeName = "Chaitanya";

let anotherName = myYoutubeName;
anotherName = "Chai";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user@yahoo.com";

console.log(userOne.email);
console.log(userTwo.email);
