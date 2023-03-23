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
  centerPadding: "0",
  autoplay: true,
});
