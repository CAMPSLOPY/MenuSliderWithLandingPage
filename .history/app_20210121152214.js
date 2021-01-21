const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
 !meBtn.classList.contains("cta-btn")) {
    meBtn.innerTextContent = "Avoid me Bro";
  } else {
    meBtn.innerTextContent = "Sign Up";
  }
}
