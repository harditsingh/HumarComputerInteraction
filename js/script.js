
// This code segment is used to autoplay the gallery, courtesy: Slick Slider
$(document).ready(function () {
  $('.index-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
});

// This code segment is used to detect the scroll position of the webpage to display the scrolling menu, courtesy: Waypoints
$(function () {
  let offsetValue = '0%';
  if ($(document).width() < "560") {
    if (document.getElementById("sun-tshirt") != null) {
      offsetValue = '80%';
    } else {
      offsetValue = '0%';
    }
  } else {
    offsetValue = '0%';
  }
  $('#first-container').waypoint(function (direction) {
    $('.scrolling').toggleClass("active");
  }, {
    offset: offsetValue
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

  var reviews = document.getElementsByClassName("hidden-discussion");
  for(var i = 0; i < reviews.length; i++)
  {
    document.getElementsByClassName("hidden-discussion")[i].style.display = "block";
  }

  document.getElementById("read-more-button").innerHTML = "read less";
}

/**
 * Close most of the discussion board when clicked on Read Less
 */
function readLess() {
  document.getElementById("read-more-button").className = "read-more-button";

  var reviews = document.getElementsByClassName("hidden-discussion");
  for(var i = 0; i < reviews.length; i++)
  {
    document.getElementsByClassName("hidden-discussion")[i].style.display = "none";
  }

  document.getElementById("read-more-button").innerHTML = "read more";
}
