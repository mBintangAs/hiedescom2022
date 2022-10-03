//untuk auto scroll top

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
