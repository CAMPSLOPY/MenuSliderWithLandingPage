const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (e.target.contains()) {
    meBtn.innerHTML = "Avoid me Bro";
  } else {
    meBtn.innerHTML = "Sign Up";
  }
}
