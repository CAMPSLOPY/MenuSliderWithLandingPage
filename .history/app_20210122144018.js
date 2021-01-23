"use strict";

const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// variables for validating the form
const form = document.getElementById("form");
const username = document.getElementById("name");
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
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});

// adding validator to the FORM

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  validateEmail(email);
  checkPasswordMatch(password, password2);
});

// Showing  The Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector(".small");
  small.innerText = null;
}

// show success on the input
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

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.name} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.name} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.name} must be at less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check if passwords match

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password Do not match");
  }
}
