// Define a simple function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Assign the function to a variable
const sayHello = greet;
console.log(sayHello)

// Call the function through the variable
sayHello("John"); // This will output: Hello, John!
