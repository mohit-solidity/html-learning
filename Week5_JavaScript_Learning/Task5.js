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

let form = document.getElementById("studentForm");
let cards = document.querySelector(".cards");
let searchInput = document.querySelector(".search input");

// Display students
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
            <button onclick="deleteStudent(${i})">Delete</button>
        `;

        cards.appendChild(card);
    }
}

// Add student
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let course = document.getElementById("course").value.trim();
    let marks = Number(document.getElementById("marks").value);

    // Form validation
    if (name === "" || course === "" || age <= 0 || marks < 0 || marks > 100) {
        alert("Please enter valid student details.");
        return;
    }

    let student = {
        name: name,
        age: age,
        course: course,
        marks: marks
    };

    students.push(student);

    displayStudents(students);

    form.reset();
});

// Delete student
function deleteStudent(index) {
    students.splice(index, 1);

    displayStudents(students);
}

// Search student
searchInput.addEventListener("input", function () {
    let searchText = searchInput.value.toLowerCase();

    let result = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchText);
    });

    displayStudents(result);
});

displayStudents(students);