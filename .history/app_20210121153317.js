const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (!e.target.classList.toggle("cta-btn")) {
    meBtn = "Avoid me Bro";
  } else {
    meBtn.add("cta-btn");
  }
}
