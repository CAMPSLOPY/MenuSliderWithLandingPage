const ctaBtn = document.getElementById("open");

ctaBtn.addEventListener("click", touchMe);

function touchMe(e) {
  const meBtn = e.target;
  if (e.target.con) {
    meBtn.innerHTML = "Avoid me Bro";
  } else {
    meBtn.innerTextContent = "Sign Up";
  }
}