$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: true,

    responsive: {
    0: {
      items: 3
    },
    960: {
      items: 3
    },
    1200: {
      items: 4,

    }
  }
  });
});
