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

// adding validator to the FORM

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value == "") {
    showError("Username is Required");
  } else {
    showSuccess(username);
  }
});


showError(input,message){
 const formControl = input.value;
}