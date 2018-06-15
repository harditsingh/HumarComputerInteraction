// $(function() {
//   $('#slideshow').waypoint(function(direction) {
//     $('.scrolling').toggleClass("active");
//   }, {
//     offset: '0%'
//   });
// });

$(function () {
  $('#first-container').waypoint(function (direction) {
    $('.scrolling').toggleClass("active");
  }, {
    offset: '0%'
  });
});