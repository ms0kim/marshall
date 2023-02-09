$(document).ready(function(){


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 1681 && docuTop < 3701){
      $('.logo').removeClass('white');
      $('.logo').addClass('black');
      $('nav').css({'color':'#181716'});
    }else{
      $('.logo').removeClass('black');
      $('.logo').addClass('white');
      $('nav').css({'color':'#f9f6f3'});
    }
  });


});