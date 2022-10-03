const BackToTop = document.querySelector("#back-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    BackToTop.style.display = "block";
  } else {
    BackToTop.style.display = "none";
  }
}
