$(document).ready(function(){


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 1803 && docuTop < 2830 ||
      docuTop > 4688 && docuTop < 7511){
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