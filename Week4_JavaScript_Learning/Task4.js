// Selecting HTML elements

let title = document.getElementById("title");
let message = document.getElementById("message");
let details = document.getElementById("details");
let skills = document.getElementById("skills");


// Changing text content

title.textContent = "My Student Information";

message.textContent = "This information was updated using JavaScript.";


// Changing HTML content

details.innerHTML = `
    <p><strong>Name:</strong> Mohit Sharma</p>
    <p><strong>Course:</strong> Computer Science</p>
    <p><strong>Year:</strong> 3rd Year</p>
`;


// Changing CSS styles

title.style.color = "blue";
message.style.fontSize = "20px";
message.style.backgroundColor = "#eeeeee";


// Adding a new element

let newSkill = document.createElement("li");

newSkill.textContent = "JavaScript";

skills.appendChild(newSkill);


// Adding another element

let anotherSkill = document.createElement("li");

anotherSkill.textContent = "React";

skills.appendChild(anotherSkill);


// Removing an element

let firstSkill = skills.firstElementChild;

skills.removeChild(firstSkill);