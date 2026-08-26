// Function declaration

function sayHello(name) {
    return "Hello " + name;
}

console.log(sayHello("Mohit"));


// Function with parameters and arguments

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);

console.log("Sum:", result);


// Multiple functions

function totalMarks(math, english, computer) {
    return math + english + computer;
}

function averageMarks(total) {
    return total / 3;
}

let marks = totalMarks(80, 75, 90);
let average = averageMarks(marks);

console.log("Total Marks:", marks);
console.log("Average Marks:", average);


// Arrow function

const multiply = (a, b) => {
    return a * b;
};
const myFunction = () => {
    console.log("Hello World. ")
}
console.log("Multiplication:", multiply(5, 4));
myFunction();