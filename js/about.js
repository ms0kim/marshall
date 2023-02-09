$(document).ready(function(){


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 1749 && docuTop < 3804 ||
      docuTop > 5766 && docuTop < 8633){
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