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

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show-modal");
  }else
});
