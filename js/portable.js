$(document).ready(function(){


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 1803 && docuTop < 3005 ||
      docuTop > 4870 && docuTop < 7694){
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