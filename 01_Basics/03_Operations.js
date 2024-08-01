// ~~~~~~~~~~~~~~ Operations ~~~~~~~~~~~~~ //

let value = 3;
let negValue = -value;
console.log(value); // Output: 3
console.log(-value); // Output: -3

console.log(2 + 2); // Output: 4
console.log(2 - 2); // Output: 0
console.log(2 * 2); // Output: 4
console.log(2 ** 2); // Output: 4
console.log(2 / 2); // Output: 1
console.log(2 % 2); // Output: 0

let str1 = "Tvs";
let str2 = " Chaitanya";

let str3 = str1 + str2;
console.log(str3); // Output: Tvs Chaitanya

console.log("1" + 2); // Output: "12"
console.log(1 + "2"); // Output: "32"
console.log("1" + 2 + 2); // Output: "122"
console.log(1 + 2 + "2"); // Output: "32"

// ~~~ Prefix and Postfix Incrementing ~~~ //
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// in postfix (x++), y=x++, x value will be assigned to y and then x will be incremented
// in prefix (++x), y=++x, y value is already incremented by 1 and assigned to x
