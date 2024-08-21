// Declare an array of Marvel heroes
const marvel_heros = ["thor", "ironman", "spiderman"];
// Declare an array of DC heroes
const dc_heros = ["superman", "flash", "batman"];

// Push the entire dc_heros array into marvel_heros, creating a nested array
marvel_heros.push(dc_heros);
// Log the modified marvel_heros array to the console
console.log(marvel_heros); // Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

// Create a new array that combines marvel_heros and dc_heros using concat
// This method creates a new array without modifying the original arrays
const allHeros = marvel_heros.concat(dc_heros);
// Log the combined heroes to the console
console.log(allHeros); // Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

// Use the spread operator to create a new array that includes both marvel_heros and dc_heros
// This avoids nesting and creates a flat array
const all_new_heros = [...marvel_heros, ...dc_heros];
// Log the new array of all heroes to the console
console.log(all_new_heros); // Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

// Declare an array containing mixed elements, including nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// Flatten the nested arrays into a single-level array using flat with Infinity
const real_another_array = another_array.flat(Infinity);
// Log the flattened array to the console
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Check if "Hitesh" is an array and log the result to the console (returns false)
console.log(Array.isArray("Hitesh")); //imp
// Convert the string "Hitesh" to an array of characters and log the result
console.log(Array.from("Hitesh")); // imp Output: ['H', 'i', 't', 'e', 's', 'h']
// Convert an object to an array; since the object has no iterable properties, it results in an empty array
console.log(Array.from({ name: "hitesh" })); // Output: []

// Declare scores for three different instances
let score1 = 100;
let score2 = 300;
let score3 = 400;

// Create a new array containing the scores using Array.of, which creates an array from the provided arguments
console.log(Array.of(score1, score2, score3)); // Output: [100, 300, 400]
