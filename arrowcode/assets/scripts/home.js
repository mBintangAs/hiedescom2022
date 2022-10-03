const menuBtn = document.querySelector('.nav-mobile');
const navA = document.querySelectorAll("nav ul li a");
const btnDark = document.querySelector(".btn-dark");
const nav = document.querySelector("nav");
const navLinks = document.querySelector('.navbar');
const bg = document.querySelector(".bg-blur");
const nextM = document.querySelector(".next-mobile");
let clicknav = true;
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
    bg.classList.toggle("background-blur");
    document.body.classList.toggle("fixed-scroll");
    navLinks.style.display = "flex";
    bg.style.display = "block";
})

// Hide Nav Mobile When Link clicked
for (let i = 0; i < navA.length; i++) {
    navA[i].addEventListener("click", () => {
        navLinks.classList.toggle("mobile-menu");
        bg.style.display = "none";
    })
}

// Dark Mode
document.body.onload = function () {
    btnDark.checked = false; // To Reset Checkbox When Web Reloaded
}
btnDark.addEventListener("click", () => {
    mode = document.body;
    mode.classList.toggle("dark");
    let span = document.querySelectorAll(".nav-mobile span");
    nav.classList.toggle("dark");

    if (btnDark.checked === true) {
        navLinks.style.backgroundColor = "#01333b";
        nextM.style.color = "#fff";
        for (let j = 0; j < span.length; j++) {
            span[j].style.backgroundColor = "#fff"
        }
    } else {
        navLinks.style.backgroundColor = "#fff";
        nextM.style.color = "#000";
        for (let j = 0; j < span.length; j++) {
            span[j].style.backgroundColor = "#3d3d32"
        }
    }
})