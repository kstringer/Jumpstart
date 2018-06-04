$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var $scroll = 0;
  $(window).scroll(function() {
    var $top = $(this).scrollTop();
    if ($top - $scroll > 50) {
      var $navHeight = $('.navbar').height();
      $('.navbar').animate({top: '-' + $navHeight}, 80);
      $scroll = $top;
    } else if ($scroll - $top > 50) {
      $('.navbar').animate({top: '0px'}, 80);
      $scroll = $top;
    }

  });
});



    // One slide should scroll at a time.
  //  // The carousel should autoplay when the page is loaded.
  //  // The speed should be 4000 milliseconds.
  //  // Do not include arrow buttons.
  //  // Do not allow the user to drag the images.
  //  // Do not pause on "focus" or "hover".
