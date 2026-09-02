let students = [
    {
        id: 1,
        name: "Mohit Sharma",
        age: 20,
        course: "Computer Science",
        marks: 85
    },
    {
        id: 2,
        name: "Rahul Sharma",
        age: 21,
        course: "Web Development",
        marks: 78
    }
];

let form = document.getElementById("studentForm");
let cards = document.querySelector(".cards");
let searchInput = document.querySelector(".search input");


// DISPLAY STUDENTS
function displayStudents(list) {
    cards.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        let card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <h3>${list[i].name}</h3>
            <p>Age: ${list[i].age}</p>
            <p>Course: ${list[i].course}</p>
            <p>Marks: ${list[i].marks}</p>
            <button onclick="editStudent(${list[i].id})">Edit</button>
            <button onclick="deleteStudent(${list[i].id})">Delete</button>
        `;
        cards.appendChild(card);
    }
}


// ADD STUDENT
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let course = document.getElementById("course").value.trim();
    let marks = Number(document.getElementById("marks").value);

    // FORM VALIDATION
    if (
        name === "" ||
        course === "" ||
        age <= 0 ||
        marks < 0 ||
        marks > 100
    ) {
        alert("Please enter valid student details.");
        return;
    }

    let student = {
        id: Date.now(),
        name: name,
        age: age,
        course: course,
        marks: marks
    };

    students.push(student);
    displayStudents(students);
    form.reset();
    alert("Student added successfully!");
});


// DELETE STUDENT
function deleteStudent(id) {
    students = students.filter(function (student) {
        return student.id !== id;
    });
    displayStudents(students);
}


// EDIT STUDENT
function editStudent(id) {
    // Find student using ID
    let student = students.find(function (student) {
        return student.id === id;
    });

    // If student doesn't exist
    if (!student) {
        alert("Student not found.");
        return;
    }

    // Ask for updated Name
    let name = prompt(
        "Enter Student Name:",
        student.name
    );
    if (name === null) {
        return;
    }

    // Ask for updated Age
    let age = prompt(
        "Enter Student Age:",
        student.age
    );
    if (age === null) {
        return;
    }

    // Ask for updated Course
    let course = prompt(
        "Enter Student Course:",
        student.course
    );
    if (course === null) {
        return;
    }

    // Ask for updated Marks
    let marks = prompt(
        "Enter Student Marks:",
        student.marks
    );
    if (marks === null) {
        return;
    }

    // Convert numbers
    age = Number(age);
    marks = Number(marks);

    // Validate updated values
    if (
        name.trim() === "" ||
        course.trim() === "" ||
        age <= 0 ||
        marks < 0 ||
        marks > 100
    ) {
        alert("Please enter valid student details.");
        return;
    }

    // Update student
    student.name = name.trim();
    student.age = age;
    student.course = course.trim();
    student.marks = marks;

    // Refresh student cards
    displayStudents(students);
    alert("Student updated successfully!");
}


// SEARCH STUDENT
searchInput.addEventListener("input", function () {
    let searchText = searchInput.value.toLowerCase().trim();
    let result = students.filter(function (student) {
        return student.name
            .toLowerCase()
            .includes(searchText);
    });
    displayStudents(result);
});


// INITIAL DISPLAY
displayStudents(students);