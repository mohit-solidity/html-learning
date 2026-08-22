// ## ✅ Task 5: Loops (20 Marks)

// Create JavaScript programs demonstrating the use of loops.

// Your programs should include:

// * `for` Loop
// * `while` Loop
// * `do...while` Loop
// * Loop with conditions
// * Increment and decrement in loops

// Solve suitable problems such as:

// * Printing numbers from 1 to 10
// * Printing even numbers
// * Printing odd numbers
// * Printing multiplication tables
// * Finding the sum of numbers
// * Printing numbers in reverse order

// ---

// for loop -> print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while loop -> print even numbers
let number = 2;
while (number <= 20) {
  console.log(number);
  number += 2;
}

// do...while loop
let count = 1;
do {
  console.log("Count:", count);
  count++;
} while (count <= 5);

// loop with condition -> find the sum of even numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Sum of even numbers:", sum);

// decrement  [print numbers in reverse]
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// multiplication table
let tableNumber = 7;
for (let i = 1; i <= 10; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}

// print odd numbers
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log("Odd : ", i);
  }
}

// calculate the sum from 1 to 100
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("Sum from 1 to 100 : ", total);
