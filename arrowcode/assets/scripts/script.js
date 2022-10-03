const body = document.querySelector("body");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector('.nav-mobile');
const navLinks = document.querySelector('.navbar');
const navA = document.querySelectorAll("nav ul li a");
const bg = document.querySelector(".bg");
const shuffleBtn = document.querySelector(".shuffle-btn");
const items = document.querySelectorAll(".item");
const images = document.querySelectorAll(".item-img");
const card = document.getElementsByClassName("card");
const cardContent = document.getElementsByClassName("content");
const cardArrow = document.getElementsByClassName("arrow");
let slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const btnDark = document.querySelector(".btn-dark"); 
const line = document.getElementsByClassName("line-ver");
let clicked = false;

// Array declaration for shuffle image
const imageLinks = [
 "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
 "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
 "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2F2ZSUyMGVhcnRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
 "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
 "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2F2ZSUyMGVhcnRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1610093680335-187fe0bcf4f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
 "https://images.unsplash.com/photo-1569326513296-6112506c096d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1592116080530-030715e389f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1648387169622-019970e16c51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNhdmUlMjBlYXJ0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1500471929063-235c721eedf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
 "https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGQlMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
 "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
 "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
];

// Nav Mobile Menu
let clicknav = true;
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  bg.classList.toggle("background-blur");
  body.classList.toggle("fixed-scroll");

  navLinks.style.display = "flex";
  bg.style.display = "block";
})

// Hide Nav Mobile When Link clicked
for(let i = 0; i < navA.length;i++){
  navA[i].addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
    bg.style.display = "none";
  })
}



// Slide Show 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}


// Card Area
for (let i = 0; i < card.length; i++) {
  let cardStyle = card[i];
  let arrowStyle = cardArrow[i];
  card[i].addEventListener("click", function () {
    this.classList.toggle("active");


    let content = this.nextElementSibling;


    if (content.style.display === "block") {
      content.style.display = "none";
      cardStyle.style.borderRadius = "10px";
      arrowStyle.style.transform = "rotate(-45deg)";
    } else {
      content.style.display = "block";
      cardStyle.style.borderRadius = "10px 10px 0 0";
      arrowStyle.style.transform = "rotate(45deg)";
    }
  });
}



// Create Random Gallery Image
randomImage();
checkOrientation();

window.addEventListener("resize", () => {
  checkOrientation();
});

shuffleBtn.addEventListener("click", randomImage);

items.forEach((elem) => {
  elem.addEventListener("click", () => {
    zoomImage(elem);
  });
});

function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    body.classList.add("vertical");
  } else {
    body.classList.remove("vertical");
  }
}

function zoomImage(el) {
  el.classList.toggle("active");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function randomImage() {
  shuffleArray(imageLinks);

  for (let i = 0; i < images.length; i++) {
    images[i].src = imageLinks[i];
  }
}

// Dark Mode
document.body.onload = function(){
  btnDark.checked = false; // To Reset Checkbox When Web Reloaded
}
btnDark.addEventListener("click", ()=>{
  mode = document.body;
  mode.classList.toggle("dark");
  let span = document.querySelectorAll(".nav-mobile span");
  nav.classList.toggle("dark");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle('card-dark');
    cardContent[i].classList.toggle('card-dark');
}

if(btnDark.checked === true){
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "#044751";
    cardContent[i].style.backgroundColor = "#044751";
    line[0,1,2].style.backgroundColor = "#fff";
    navLinks.style.backgroundColor = "#01333b";
    for(let j = 0; j < span.length;j++){
      span[j].style.backgroundColor = "#fff"
    }

}
}else{
  for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "#48fb8441";
    cardContent[i].style.backgroundColor = "#48fb8441";
    line[0,1,2].style.backgroundColor = " #3d3d32";
    navLinks.style.backgroundColor = "#fff";
    for(let j = 0; j < span.length;j++){
      span[j].style.backgroundColor = "#3d3d32"
    }
   
}

}

})


