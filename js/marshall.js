$(document).ready(function(){

  jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(1000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

  $(window).scroll(function(){
    $('#txt1').text($(this).scrollTop());
  });

  
  AOS.init({duration: 1000});


  let mouseMove = document.documentElement.style;

  document.addEventListener('mousemove', function(e) {
    mouseMove.setProperty('--mouse-x', e.clientX);
    mouseMove.setProperty('--mouse-y', e.clientY);
  });


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 500){
      $('.side_btn').addClass('active');
    }else{
      $('.side_btn').removeClass('active');
    }
  });

  $('.top').on('click', function(){
    let offset = $('#wrap').offset();
    $('html').animate({scrollTop : offset.top});
  });

  $('.bottom').on('click', function(){
    let offset = $('#bottom').offset();
    $('html').animate({scrollTop : offset.top});
  });

});