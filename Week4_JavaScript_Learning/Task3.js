// Creating three student objects

let student1 = {
    name: "Mohit",
    age: 20,
    course: "Computer Science"
};

let student2 = {
    name: "Rahul",
    age: 21,
    course: "Web Development"
};

let student3 = {
    name: "Aman",
    age: 20,
    course: "JavaScript"
};

console.log(student1);
console.log(student2);
console.log(student3);


// Accessing properties
console.log("Student Name:", student1.name);
console.log("Student Course:", student2.course);


// Getting object values
console.log("Student 1 Values:", Object.values(student1));


// Updating a property
student1.age = 21;
console.log("Updated Age:", student1.age);


// Adding a new property
student1.email = "mohit@example.com";
console.log("Email:", student1.email);


// Removing a property
delete student1.course;
console.log("After Removing Course:", student1);