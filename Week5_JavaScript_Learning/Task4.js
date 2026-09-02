// Student records
let students = [
  {
    name: "Mohit Sharma",
    age: 20,
    course: "Computer Science",
    marks: 85,
  },
  {
    name: "Rahul Sharma",
    age: 21,
    course: "Web Development",
    marks: 78,
  },
];

let form = document.querySelector("form");
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let courseInput = document.getElementById("course");
let marksInput = document.getElementById("marks");
let searchInput = document.querySelector(".search input");
let cards = document.querySelector(".cards");

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

// Display students
function displayStudents(list = students) {
  cards.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
            <h3>${list[i].name}</h3>
            <p>Age: ${list[i].age}</p>
            <p>Course: ${list[i].course}</p>
            <p>Marks: ${list[i].marks}</p>
            <p>Grade: ${getGrade(list[i].marks)}</p>
            <button onclick="removeStudent(${i})">Delete</button>
        `;
    cards.appendChild(card);
  }
}

// Add student using form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = nameInput.value.trim();
  let age = Number(ageInput.value);
  let course = courseInput.value.trim();
  let marks = Number(marksInput.value);
  if (name === "" || course === "" || age <= 0 || marks < 0 || marks > 100) {
    alert("Please enter valid student details.");
    return;
  }
  let student = {
    name: name,
    age: age,
    course: course,
    marks: marks,
  };
  students.push(student);
  displayStudents();
  form.reset();
});

// Search student using input event
searchInput.addEventListener("input", function () {
  let searchText = searchInput.value.toLowerCase();
  let result = students.filter(function (student) {
    return student.name.toLowerCase().includes(searchText);
  });
  displayStudents(result);
});

// Delete student using button click
function removeStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
// Display students when page loads
displayStudents();
