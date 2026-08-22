// ## ✅ Task 6: JavaScript Practice Programs (5 Marks)

// Create a separate JavaScript file containing **at least 5 practice programs** combining the concepts covered in Week 3.

// The programs should use:

// * Variables
// * Data Types
// * Operators
// * Conditional Statements
// * Loops

// Use different problems for each program and write clean, readable code.

// ---

// Program 1 - Even or Odd
let number = 17;
if (number % 2 === 0) {
  console.log(number, "is even.");
} else {
  console.log(number, "is odd.");
}

// Program 2 -> Largest of Three Numbers
let first = 25;
let second = 40;
let third = 30;
if (first >= second && first >= third) {
  console.log("Largest:", first);
} else if (second >= first && second >= third) {
  console.log("Largest:", second);
} else {
  console.log("Largest:", third);
}

// Program 3 -> Factorial
let factorialNumber = 5;
let factorial = 1;
for (let i = 1; i <= factorialNumber; i++) {
  factorial *= i;
}
console.log("Factorial:", factorial);

// Program 4 -> Average and Grade
let marks1 = 80;
let marks2 = 75;
let marks3 = 90;
let average = (marks1 + marks2 + marks3) / 3;
console.log("Average:", average);
if (average >= 90) {
  console.log("Grade: A+");
} else if (average >= 80) {
  console.log("Grade: A");
} else if (average >= 70) {
  console.log("Grade: B");
} else if (average >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Program 5 -> Numbers Divisible by 3

let limit = 30;
for (let i = 1; i <= limit; i++) {
  if (i % 3 === 0) {
    console.log("Divisible by 3:", i);
  }
}
