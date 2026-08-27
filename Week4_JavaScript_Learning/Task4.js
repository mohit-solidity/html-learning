// Selecting HTML elements

let title = document.getElementById("title");
let message = document.getElementById("message");
let details = document.getElementById("details");
let skills = document.getElementById("skills");

// Changing text content

title.textContent = "Mohit Sharma - Web Developer";

message.textContent =
  "I am learning Web Development and Blockchain Development.";

// Changing HTML content

details.innerHTML = `
    <p><strong>Name:</strong> Mohit Sharma</p>
    <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, Solidity</p>
    <p><strong>Interest:</strong> Web3 Development</p>
`;

// Changing CSS styles

title.style.color = "blue";
title.style.fontSize = "32px";

message.style.color = "green";
message.style.fontSize = "18px";

// Adding elements

let newSkill = document.createElement("li");

newSkill.textContent = "JavaScript";

skills.appendChild(newSkill);

let anotherSkill = document.createElement("li");

anotherSkill.textContent = "Solidity";

skills.appendChild(anotherSkill);

// Removing an element

let firstSkill = skills.firstElementChild;

skills.removeChild(firstSkill);
