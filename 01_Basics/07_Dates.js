// Dates

// This line creates a new Date object representing the current time
let currentDate = new Date();

// This line logs the current date and time to the console
console.log(currentDate);

// This line converts the date to a string representation and logs it to the console
console.log(currentDate.toString());

// This line converts the date to a string representation in a specific format (YYYY-MM-DD) and logs it to the console
console.log(currentDate.toISOString());

// This line converts the date to a string representation in a user-friendly format (e.g., January 1, 2024) and logs it to the console
console.log(currentDate.toLocaleString());

// This line converts the date to a string representation in a specific format, including only the date (e.g., 01/01/2024) and logs it to the console
console.log(currentDate.toLocaleDateString());

// This line checks the data type of the date object and logs it to the console
console.log(typeof currentDate);

// This line creates a date object with a specific date (January 24, 2024)
let specificDate = new Date(2024, 0, 24);

// This line converts the date to a string representation and logs it to the console
console.log(specificDate.toDateString());

// This line creates a date object with a specific date and time (5:30 PM on January 24, 2024)
let dateTimeObject = new Date(2024, 0, 24, 17, 30);

// This line converts the date to a string representation in a user-friendly format and logs it to the console
console.log(dateTimeObject.toLocaleString());

// This section demonstrates creating a Date object from a string representation of a date
// - Format: YYYY-MM-DD
let dateFromString = new Date("2024-01-24");
// - Format: MM DD YYYY
let anotherDateFromString = new Date("01-22-2024");

// This section demonstrates working with timestamps
// - `Date.now()` returns the current timestamp (milliseconds since epoch)
// - `getTime()` returns the timestamp of the date object in milliseconds

// // This section demonstrates accessing the month name of the date
let anotherDate = new Date();
console.log(anotherDate);
console.log(anotherDate.getMonth() + 1); // Months are zero-indexed, so adding 1 gives the actual month number

// This section defines an array of month names
let monthNames = [
  "Jan",
  "Feb",
  // ... and so on for the other months
];

// This line gets the month name of the current date and logs it to the console
console.log(monthNames[anotherDate.getMonth()]);

// This line formats the date and time and logs it to the console
console.log(
  `Today date is ${anotherDate.getDate()} and time is ${anotherDate.getTime()}`
);

// This section demonstrates using the `toLocaleDateString()` method with a custom format
const formattedDate = anotherDate.toLocaleDateString("default", {
  weekday: "long",
});
console.log(formattedDate);
