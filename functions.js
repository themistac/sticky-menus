$(document).ready(function () {

    $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var wHeight = $(window).height();
    var nav = $('.header');
    var subnav = $('.subnav');
    var backtotop = $('.top');

      if ($(this).scrollTop() > 110) {
        nav.addClass("header-fade");
      } else {
        nav.removeClass("header-fade");
      }

      if ($(this).scrollTop() > 470) {
        subnav.addClass("subnav-fixed");
      } else {
        subnav.removeClass("subnav-fixed");
      }

      if ($(this).scrollTop() > 110) {
        backtotop.addClass("top-fade");
      } else {
        backtotop.removeClass("top-fade");
      }



     if(wScroll > $('.meet-the-team .hello-fade').offset().top - ($(window).height() / 1.2)) {
      $('.meet-the-team .hello-fade').each(function(i){
        setTimeout(function(){
          $('.meet-the-team .hello-fade').eq(i).addClass('hello-fade-show');
        }, 150 * (i+1));
      });
    }

     if(wScroll > $('.masonry .panel').offset().top - ($(window).height() / 1.2)) {
      $('.masonry .panel').each(function(i){
        setTimeout(function(){
          $('.masonry .panel').eq(i).addClass('panel-show');
        }, 150 * (i+1));
      });
    }


     // console.log(wHeight);

  }); // end scroll funtion



    /*      $('.entry .col-6').each(function(i){
          setTimeout(function(){
          $('.entry .col-6').eq(i).addClass('hello-fade-show');
          }, 300 * (i+1));
      }); */


});
