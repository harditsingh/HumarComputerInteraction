$(function () {
  $('#first-container').waypoint(function (direction) {
    $('.scrolling').toggleClass("active");
  }, {
    offset: '0%'
  });
});

/* Discussion JS */

/**
 * Open/Close hidden part of the discussion
 */
function alterDiscussion() {
  if (document.getElementById("read-more-button").className === "read-more-button") {
    readMore();
  }
  else if (document.getElementById("read-more-button").className === "read-less-button") {
    readLess();
  }

}

/**
 * Open full discussion board when clicked on Read More
 */
function readMore() {
  document.getElementById("read-more-button").className = "read-less-button";
  document.getElementById("hidden-discussion").style.display = "block";
  document.getElementById("read-more-button").innerHTML = "read less";
}

/**
 * Close most of the discussion board when clicked on Read Less
 */
function readLess() {
  document.getElementById("read-more-button").className = "read-more-button";
  document.getElementById("hidden-discussion").style.display = "none";
  document.getElementById("read-more-button").innerHTML = "read more";
}
