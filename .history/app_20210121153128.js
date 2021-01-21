const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (!e.target.classList.toggle('cta-btn')) {
    meBtn.innerHTML = "Avoid me Bro";
  } else {
    meBtn.remove()
  }
}
