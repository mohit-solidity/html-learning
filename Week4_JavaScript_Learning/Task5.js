// Click event

let helloButton = document.getElementById("helloButton");
let message = document.getElementById("message");

helloButton.addEventListener("click", function () {
  message.textContent = "Thanks for visiting my website!";
});

// Input event

let nameInput = document.getElementById("nameInput");
let inputMessage = document.getElementById("inputMessage");

nameInput.addEventListener("input", function () {
  inputMessage.textContent = "Hello " + nameInput.value;
});

// Change event

let skill = document.getElementById("skill");
let skillMessage = document.getElementById("skillMessage");

skill.addEventListener("change", function () {
  skillMessage.textContent = "You selected: " + skill.value;
});

// Submit event

let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent = "Form submitted successfully.";
});

// Mouse event

let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {
  mouseBox.textContent = "Mouse is over the box!";
});

mouseBox.addEventListener("mouseout", function () {
  mouseBox.textContent = "Move your mouse over this box";
});

// Keyboard event

let keyInput = document.getElementById("keyInput");
let keyMessage = document.getElementById("keyMessage");

keyInput.addEventListener("keydown", function (event) {
  keyMessage.textContent = "You pressed: " + event.key;
});
