const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (meBtn.classList.contains("cta)) {
    meBtn.innerTextContent = "Avoid me Bro";
  } else {
    meBtn.innerTextContent = "Sign Up";
  }
}
