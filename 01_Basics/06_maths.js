const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log("The length of string is :", balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(5)); //  overall numbers in the output rounded off to nearby value

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //by default it uses US values

// ~~~~~~~~~~~~~~~~ Maths ~~~~~~~~~~~~~~~~ //
console.log(Math);
console.log(Math.abs(-4)); //Always positive numbers, or negative to postive numbers
console.log(Math.round(4.4));
console.log(Math.ceil(4.2)); // will be 5
console.log(Math.floor(4.9)); // will be 4

console.log(Math.min(4, 5, 6, 8, 2));
console.log(Math.max(4, 5, 6, 8, 2));

console.log(Math.random()); //always between 0 and 1

console.log((Math.random() * 10) + 1);