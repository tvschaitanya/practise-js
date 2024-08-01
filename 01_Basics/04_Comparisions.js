// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // false

console.log(undefined == 0); // false

// ~~~~~~~~~~~~~~~~ Notes: ~~~~~~~~~~~~~~~ //
// In JS, the comparison and equality check are different
// === checks with datatype
// == checks with datatype and performs type coercion if necessary
// null and undefined are loosely equal to each other but not strictly equal to anything else
// When comparing strings with numbers, JavaScript converts the string to a number before comparison
// This can lead to unexpected results if not carefully handled
