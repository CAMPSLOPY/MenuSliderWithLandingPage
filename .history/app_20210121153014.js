const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (e.target.classList('cta-btn')) {
    meBtn.innerHTML = "Avoid me Bro";
  } else {
    meBtn.innerHTML = "Sign Up";
  }
}
