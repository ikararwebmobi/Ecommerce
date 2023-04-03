/*
 BODY TOP PADDING AS PER HEADER HEIGHT
--------------------------------------------*/
/* jQuery(document).ready(function() {
    var headerHeight = $(".header").outerHeight();
     $("body").css("padding-top", headerHeight);

}); */

/* SLIDER */

$(".topbar-offer-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  dots:false,
  arrows: false,
  centerPadding: "0",
  autoplay: true,
});

$(".product-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
 // autoplay: true,
  draggabley: true,
  swipe: true,
  dots: true,
  arrows: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

