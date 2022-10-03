// ---------Responsive-navbar-active-animation-----------
const gunung = document.getElementById("gunung");
let stars = document.getElementById("awan");
let stars2 = document.getElementById("awan2");
let stars3 = document.getElementById("awan3");
// let batu = document.getElementById("batu");
let pohon = document.getElementById("pohon");
// let text = document.getElementById("text");
// let btn = document.getElementById("btn");
let rumput = document.getElementById("rumput");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  gunung.style.backgroundSize = 100 + window.pageYOffset / 50 + "%";
  gunung.style.opacity = 0.5 + +window.pageYOffset / 500 + "";
  // batu.style.left = value * 0.2 + "px";
  pohon.style.right = value * 0.2 + "px";
  awan.style.left = value * 1 + "px";
  awan2.style.right = value * 0.1 + "px";
  awan3.style.right = value * 1 + "px";
  rumput.style.right = value * 1 + "px";
});
