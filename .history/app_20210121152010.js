const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (meBtn.classList.toggle("open")) {
    meBtn.inner = "Avoid me Bro";
  } else {
    meBtn.innerHtml = "Sign Up";
  }
}
