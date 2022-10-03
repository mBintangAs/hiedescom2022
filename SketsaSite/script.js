var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

function scrollToTop(){
    window.scrollTo(0, 0);
}


$(window).scroll(function(){
  if($(this).scrollTop() > 500){
    $('.scrollOnTop').fadeIn();
  } else{
    $('.scrollOnTop').fadeOut();
  }
});