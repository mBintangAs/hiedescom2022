// ====== FOR IMAGE CAROUSEL ====== //

const carouselImages = document.querySelector(".carousel-images");
const carouselButtons = document.querySelectorAll(".carousel-button");
const numberOfImages = document.querySelectorAll(".carousel-images img").length;

let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex > 1) {
        imageIndex--;
        translateX += 810;
      } else {
        imageIndex = numberOfImages;
        translateX -= 810 * (numberOfImages - 1);
      }
    }
    if (event.target.id === "next") {
      if (imageIndex < numberOfImages) {
        imageIndex++;
        translateX -= 810;
      } else {
        imageIndex = 1;
        translateX = 0;
      }
    }
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

// ====== ====== ====== ====== ====== //

// ====== FOR IMAGE CAROUSEL (GALLERY) ====== //

const earthImages = document.querySelector(".earthimg");
const earthButtons = document.querySelectorAll(".earth-button");
const numberOfEarth = document.querySelectorAll(".earthimg img").length;

let Index = 1;
let x = 0;

earthButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous-slide") {
      if (Index > 1) {
        Index--;
        x += 600;
      } else {
        Index = numberOfEarth;
        x -= 600 * (numberOfEarth - 1);
      }
    }
    if (event.target.id === "next-slide") {
      if (Index < numberOfEarth) {
        Index++;
        x -= 600;
      } else {
        Index = 1;
        x = 0;
      }
    }
    earthImages.style.transform = `translateX(${x}px)`;
  });
});

// ====== ====== ====== ====== ====== //

// ====== FOR ANIMATING STATS (DISCONTINUED) ====== //

// function animateValue(obj, end, start = 0, duration = 1000) {
//   if (obj) {
//     var textStarting = obj.innerHTML;

//     end = end || parseInt(textStarting.replace(/\D/g, ""));

//     var range = end - start;

//     var minTimer = 50;

//     var stepTime = Math.abs(Math.floor(duration / range));

//     stepTime = Math.max(stepTime, minTimer);

//     var startTime = new Date().getTime();
//     var endTime = startTime + duration;
//     var timer;

//     function run() {
//       var now = new Date().getTime();
//       var remaining = Math.max((endTime - now) / duration, 0);
//       var value = Math.round(end - remaining * range);
//       obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
//       if (value == end) {
//         clearInterval(timer);
//       }
//     }

//     timer = setInterval(run, stepTime);
//     run();
//   }
// }
// animateValue(document.getElementById("hutan"), 28);
// animateValue(document.getElementById("makanan"), 48);
// animateValue(document.getElementById("sumberdaya"), 100);
// animateValue(document.getElementById("polusi"), 280);

// ====== ====== ====== ====== ====== //

// ====== FOR TABS ====== //

function pustakaTabs(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("ensiklobencana");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("pustaka");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" green-button", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " green-button";
}
// ====== ====== ====== ====== ====== //
