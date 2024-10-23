// 1. Variable Declarations
var name = "Sujal";      // Declared using var
let age = 19;            // Declared using let (block-scoped)
const college = "FAMT";  // Declared using const (constant)

// 2. Arithmetic Operations
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;    // Addition
let difference = num1 - num2;  // Subtraction

console.log("Sum:", sum);            // Output: 15
console.log("Difference:", difference); // Output: 5

// 3. Conditional Statement (if-else)
if (age > 18) {
    console.log(name + " is an adult.");  // Output: Sujal is an adult.
} else {
    console.log(name + " is not an adult.");
}

// 4. Loop (for loop)
for (let i = 0; i < 5; i++) {
    console.log("Loop iteration:", i);  // Iterates 5 times from 0 to 4
}

// 5. Function Declaration (Regular Function)
function greet(personName) {
    return "Hello, " + personName + "!";
}
console.log(greet("Sujal"));  // Output: Hello, Sujal!

// 6. Arrow Function (Modern way)
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(4, 3));  // Output: 12

// 7. More Complex Arrow Function
const getDetails = (personName, personAge) => {
    return `${personName} is ${personAge} years old and studies at ${college}.`;
};
console.log(getDetails(name, age));  // Output: Sujal is 19 years old and studies at FAMT.
