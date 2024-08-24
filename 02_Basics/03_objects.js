// Create a unique Symbol key for the JsUser object
const mySym = Symbol("Key1");

// Define the JsUser object with various properties and methods
const JsUser = {
  name: "Chai", // A property for the user's first name
  "full name": "TVS Chaitanya", // A property with a space in its name; accessed using bracket notation
  [mySym]: "myKey1", // Use bracket notation to define a property with a Symbol key
  age: 26, // A property for the user's age
  location: "Florida", // A property for the user's location
  email: "chai@gmail.com", // A property for the user's email address
  isLoggedIn: false, // A property to indicate if the user is logged in
  lastLoginDays: ["Monday", "Tuesday"], // An array property for the days the user last logged in
};

// Log the user's email using dot notation
console.log(JsUser.email); // Output: chai@gmail.com

// Log the user's email using bracket notation
console.log(JsUser["email"]); // Output: chai@gmail.com

// Log the user's full name using bracket notation
console.log(JsUser["full name"]); // Output: TVS Chaitanya

// Log the value of the property with the Symbol key
console.log(JsUser[mySym]); // Output: myKey1

// Modify the user's email address
JsUser.email = "chaitanya@gmail.com";
// Uncomment the following line to freeze the object and prevent further modifications
// Object.freeze(JsUser);

// Update the user's email address again
JsUser.email = "tvschaitanya@yahoo.com"; // The last assignment will take effect

// Add a method to the JsUser object to log a greeting message
JsUser.greeting = function () {
  // The method logs a greeting message using the 'full name' property
  console.log(`Hello JS User: ${this["full name"]}`);
};

// Call the greeting method directly; the method will log the message internally
JsUser.greeting(); // Output: Hello JS User: TVS Chaitanya
