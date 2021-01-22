const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Event Listeners

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// show Modal
// the open var is the signUP button in the header..
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// close modal
// the close var is inside the modal element
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// this is used to remove the modal when anywhere is clicked on the homepage...
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});

// adding validator to the FORM

// variables for validating the form
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submit = document.getElementById("submit-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // checkRequired([username, email, password, password2]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 25);
  // validateEmail(email);
  // checkPasswordMatch(password, password2);
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small =
}

submit.addEventListener("click", (e) => {
  showError();
});
// this will show the error on the input
