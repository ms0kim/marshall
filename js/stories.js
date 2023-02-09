$(document).ready(function(){


  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 1691 && docuTop < 4787 ||
      docuTop > 6466 && docuTop < 7700){
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