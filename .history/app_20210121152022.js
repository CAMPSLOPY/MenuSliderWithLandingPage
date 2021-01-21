const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (meBtn.classList.toggle("open")) {
    meBtn.innerTextContent = "Avoid me Bro";
  } else {
    meBtn.inner = "Sign Up";
  }
}
