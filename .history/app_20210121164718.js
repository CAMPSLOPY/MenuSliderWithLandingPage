const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Event Listeners

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// show Modal

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// close modal