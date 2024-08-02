// Define constants for name and repository count
const personalName = "Chaitanya";
const numberOfRepositories = 50;

// Log a greeting message using template literals
console.log(
  `Hello, my name is ${personalName} and I have ${numberOfRepositories} repositories.`
);

// Create a new String object for the game name
const gameTitle = new String("Prince of Persia");

// Log the game title
console.log(gameTitle);

// Convert the game title to uppercase and log it
console.log(gameTitle.toUpperCase());

// Log the length of the game title
console.log(gameTitle.length);

// Get the character at index 3 of the game title and log it
console.log(gameTitle.charAt(3));

// Find the index of the first occurrence of "e" in the game title and log it
console.log(gameTitle.indexOf("e"));

// Extract a substring from the game title and assign it to a new variable
const extractedSubstring = gameTitle.substring(0, 6);
console.log(extractedSubstring);

// Correctly slice the game title to get the last two characters and log it
const anotherString = gameTitle.slice(0, 4);
console.log(anotherString);

const newStringOne = "   Chai   !  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chiatanya.com/chai%202024";
const newUrl = url.replace(/%20/g, "-");

console.log(newUrl);
console.log(url.includes(`chai`));

console.log(gameTitle.split(`-`));
