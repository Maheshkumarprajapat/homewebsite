$(document).ready(function() {    

    var owl = $('#banner-slider')
    owl.owlCarousel({
      margin: 0,
      loop: true,
      dots:true,
      nav:true,  
    //   autoplay:true,
    //   autoplayTimeout:3000,
    //   autoplayHoverPause:false,      
      navText: ["<img src='images/left-arrow.png'>", "<img src='images/right-arrow.png'>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

});