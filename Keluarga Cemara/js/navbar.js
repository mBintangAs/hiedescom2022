function changeBg() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 500) {
    navbar.classList.remove("bgcolor");
  } else {
    navbar.classList.add("bgcolor");
  }
}

window.addEventListener("scroll", changeBg);
