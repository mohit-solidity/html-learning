// ## ✅ Task 4: Conditional Statements (20 Marks)

// Create JavaScript programs using conditional statements to solve different problems.

// Your programs should demonstrate:

// * `if`
// * `if...else`
// * `else if`
// * Nested `if`
// * Comparison using conditions
// * Logical conditions

// Create meaningful examples such as:

// * Checking whether a number is positive, negative, or zero
// * Checking whether a number is even or odd
// * Checking eligibility based on age
// * Finding the greater of two or three numbers
// * Assigning grades based on marks

// 1st - IF
let num = 19;
if(num>0){
    console.log('Number Is EVEN')
}

// If-else
let number = 20;
if(num % 2 ==0){
    console.log('Number Is Even')
}else{
    console.log('Number Is ODD')
}

//else-if
num = 5;
if(num<0){
    console.log('Number Is Negative')
}else if(num==0){
    console.log('Number Is 0')
}else{
    console.log("Number Is Positive")
}

// Nested if
let name =  "Mohit"
let isAdmin = true
if(name =="Mohit"){
    if(isAdmin){
        console.log('Welcome ADMIN')
    }else{
        console.log('No Access')
    }
}else{
    console.log('Hello User')
}

// Comparison Using Conditions
let num1 = 20
let num2 = 40
if(num1>num2){
    console.log('Number 1 Is Greater')
}else if(num1 == num2){
    console.log('Both Numbers Are Equal')
}else{
    console.log('Number 2 Is Greater Than Nummber 1')
}

// Logical Conditions

let age = 22;
let hasID = true;

if (age >= 18 && hasID === true) {
    console.log("Eligible to enter.");
} else {
    console.log("Not eligible to enter.");
}