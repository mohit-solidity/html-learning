// Student records

let students = [
    {
        name: "Mohit Sharma",
        age: 20,
        course: "Computer Science",
        marks: 85
    },
    {
        name: "Rahul Sharma",
        age: 21,
        course: "Web Development",
        marks: 78
    }
];


// Calculate grade

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "F";
    }
}


// Add a student

function addStudent(name, age, course, marks) {

    let student = {
        name: name,
        age: age,
        course: course,
        marks: marks
    };

    students.push(student);
}


// Find a student

function findStudent(name) {

    return students.find(function (student) {
        return student.name.toLowerCase() === name.toLowerCase();
    });
}


// Calculate total marks

function getTotalMarks() {

    let total = 0;

    for (let i = 0; i < students.length; i++) {
        total += students[i].marks;
    }

    return total;
}


// Show student records in console

function showStudents() {

    for (let i = 0; i < students.length; i++) {

        console.log(
            students[i].name,
            "-",
            students[i].course,
            "-",
            students[i].marks,
            "- Grade:",
            getGrade(students[i].marks)
        );

    }
}


// Add a new student

addStudent("Aman Kumar", 20, "JavaScript", 92);


// Display records

showStudents();

console.log("Total Students:", students.length);
console.log("Total Marks:", getTotalMarks());
console.log("Found Student:", findStudent("Mohit Sharma"));