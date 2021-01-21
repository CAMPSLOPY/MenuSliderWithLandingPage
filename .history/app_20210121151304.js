const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe() {
  const cta = ctaBtn.target;
  console.log(cta);
}
