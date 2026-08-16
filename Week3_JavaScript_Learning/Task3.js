// ## ✅ Task 3: Operators (20 Marks)

// Create JavaScript programs demonstrating different types of operators.

// Your programs should include:

// * Arithmetic Operators
// * Assignment Operators
// * Comparison Operators
// * Logical Operators
// * Increment Operator
// * Decrement Operator

// Create suitable examples and display the results using `console.log()`.

// Arithmetic Operators

let firstNumber = 20;
let secondNumber = 5;

console.log("Addition :", firstNumber + secondNumber);
console.log("Subtraction :", firstNumber - secondNumber);
console.log("Multiplication :", firstNumber * secondNumber);
console.log("Division :", firstNumber / secondNumber);
console.log("Remainder :", firstNumber % secondNumber);
console.log("Power :", firstNumber ** secondNumber);


// Assignment Operators

let score = 10;

score += 5;
console.log("After += :", score);

score -= 3;
console.log("After -= :", score);

score *= 2;
console.log("After *= :", score);

score /= 4;
console.log("After /= :", score);


// Comparison Operators

let age = 20;
let requiredAge = 18;

console.log("Equal :", age == requiredAge);
console.log("Strictly Equal :", age === requiredAge);
console.log("Not Equal :", age != requiredAge);
console.log("Strictly Not Equal :", age !== requiredAge);
console.log("Greater Than :", age > requiredAge);
console.log("Less Than :", age < requiredAge);
console.log("Greater Than or Equal :", age >= requiredAge);
console.log("Less Than or Equal :", age <= requiredAge);


// Logical Operators

let hasWallet = true;
let knowsSolidity = true;
let knowsPython = false;

console.log("AND :", hasWallet && knowsSolidity);
console.log("OR :", knowsSolidity || knowsPython);
console.log("NOT :", !knowsPython);


// Increment Operator

let projects = 5;

projects++;

console.log("Projects after increment :", projects);


// Decrement Operator

projects--;

console.log("Projects after decrement :", projects);