const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// variables for validating the form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
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
  if (e.target == modal) {
    modal.classList.remove("show-modal");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value.trim() === "") {
    showError(username, "Username is Required");
  } else {
    showSuccess(username);
  }
  validateEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 3, 15);
  if (password.value.trim() === "") {
    showError(password, "Password is Required");
  } else {
    showSuccess(password);
  }
  if (password2.value.trim() == "") {
    showError(password2, "Password Does not Match");
  }
});

// SHOW ERROR
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// show SUCCESS
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// to check if email is valid
function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// check for lenght of the username
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.name} must be atleast ${}`);
  }
}
