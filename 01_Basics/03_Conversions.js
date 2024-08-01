// Initialize variables with the specified values
let score = 33; // Number
let scoreString = "44"; // String
let scoreMixed = "55abc"; // String
let scoreNull = null; // Null
let scoreUndefined; // Undefined
let scoreTrue = true; // Boolean

// Convert each variable to a number and log the result and its type
console.log(`Converting ${score} to a number:`);
console.log(Number(score)); // Expected output: 33
console.log(typeof Number(score)); // Expected output: "number"

console.log(`Converting "${scoreString}" to a number:`);
console.log(Number(scoreString)); // Expected output: 44
console.log(typeof Number(scoreString)); // Expected output: "number"

console.log(`Converting "${scoreMixed}" to a number:`);
console.log(Number(scoreMixed)); // Expected output: NaN
console.log(typeof Number(scoreMixed)); // Expected output: "number"

console.log(`Converting ${scoreNull} to a number:`);
console.log(Number(scoreNull)); // Expected output: NaN
console.log(typeof Number(scoreNull)); // Expected output: "number"

console.log(`Converting ${scoreUndefined} to a number:`);
console.log(Number(scoreUndefined)); // Expected output: NaN
console.log(typeof Number(scoreUndefined)); // Expected output: "number"

console.log(`Converting ${scoreTrue} to a number:`);
console.log(Number(scoreTrue)); // Expected output: 1
console.log(typeof Number(scoreTrue)); // Expected output: "number"

// Additional conversions
let isLoggedIn = ""; // Empty string
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Expected output: false

let someNumber = 66; // Number
let stringNumber = String(someNumber);
console.log(stringNumber); // Expected output: "66"
console.log(typeof stringNumber); // Expected output: "string"

// Notes:
// "33" => 33
// "33abc" => NaN
// true => 1; false = 0;
// "" => false //empty string
// "HEY" => true
