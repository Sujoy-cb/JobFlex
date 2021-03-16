/*----------preloader-part-----------*/

setTimeout(function(){
  $("#preloader").slideUp()
},3000)


/*----------nav-barfixed-part-----------*/

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  if(scrollamount > 50){
    $(".menu-bar").addClass("fixed-menu")
  }else{
    $(".menu-bar").removeClass("fixed-menu")
  }
})





/*----------counter-part-----------*/

$(function(){
    $('.counter').rCounter({
      duration: 30
    });
  });



  /*----------top-button-----------*/

  $(".top-button").click(function(){
    $('html, body').animate({
        scrollTop:0
    },)
  })

  /*----------top-button-invisible-----------*/
  $(window).on('scroll', function(){
    var scrollPos = $(window).scrollTop();

    if (scrollPos > 100) {
      $(".top-button").fadeIn(100);
    }else{
      $(".top-button").fadeOut(100);
    }
  });