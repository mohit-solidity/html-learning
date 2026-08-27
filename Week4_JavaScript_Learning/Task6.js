// Student records

let students = [];

let form = document.getElementById("studentForm");
let studentsDiv = document.getElementById("students");

// Display students

function displayStudents() {
  studentsDiv.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    let student = document.createElement("div");

    student.className = "student";

    student.innerHTML = `
            <h3>${students[i].name}</h3>
            <p>Age: ${students[i].age}</p>
            <p>Course: ${students[i].course}</p>
            <button onclick="removeStudent(${i})">Delete</button>
        `;

    studentsDiv.appendChild(student);
  }
}

// Add student

function addStudent(name, age, course) {
  let student = {
    name: name,
    age: age,
    course: course,
  };

  students.push(student);

  displayStudents();
}

// Remove student

function removeStudent(index) {
  students.splice(index, 1);

  displayStudents();
}

// Form submit event

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  addStudent(name, age, course);

  form.reset();
});

displayStudents();
