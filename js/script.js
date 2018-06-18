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


/* Discussion JS */

function main() {
  document.getElementById("read-more-button").addEventListener("click", readMore);
}

window.addEventListener("load", main);

function readMore() {
  var x = document.getElementById("read-more-button");
  if (x.className === "read-more-button") {
      x.className = "read-less-button";
      document.getElementById("hidden-discussion").style.display = "block";
      x.innerHTML = "read less";
  } else if (x.className === "read-less-button") {
      /*x.className = "read-more-button";
      document.getElementById("hidden-discussion").style.display = "none";
      x.innerHTML = "read more";*/
  }
}
