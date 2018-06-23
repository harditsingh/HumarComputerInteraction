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


/* READ MORE BUTTON ON THE DISCUSSION PAGE */

function main() {
  document.getElementById("read-more-button").addEventListener("click", readMore);
}

window.addEventListener("load", main);

function readMore() {
  document.getElementById("read-more-button").style.display = "none";
  var x = document.getElementsByClassName("hidden-discussion")
  x[0].style.display = "block";
  x[1].style.display = "block";
  /* the original try with a ReadMore / ReadLess combination */
  /*var x = document.getElementById("read-more-button");
  if (x.className === "read-more-button") {
      x.className = "read-less-button";
      var y = document.getElementsByClassName("hidden-discussion")
      y[0].style.display = "block";
      y[1].style.display = "block";
      x.innerHTML = "read less";
  } else if (x.className === "read-less-button") {
      x.className = "read-more-button";
      var y = document.getElementsByClassName("hidden-discussion")
      y[0].style.display = "none";
      y[1].style.display = "none";
      x.innerHTML = "read more";
  }*/
}
