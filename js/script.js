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

function main() {
  document.getElementById("read-more-button").addEventListener("click", readMore);
}

window.addEventListener("load", main);

function readMore() {
  let readMoreButton = document.getElementById("read-more-button");

  if (readMoreButton.classList.contains("read-less")) {
    readMoreButton.classList.remove("read-less");

    let hiddenDisscussions = document.getElementsByClassName("hidden-discussion")
    for (let i = 0; i < hiddenDisscussions.length; i++) {
      hiddenDisscussions[i].style.display = "none";
    }
    readMoreButton.innerHTML = "Read More";
  } else {
    readMoreButton.classList.add("read-less");

    let hiddenDisscussions = document.getElementsByClassName("hidden-discussion")
    for (let i = 0; i < hiddenDisscussions.length; i++) {
      hiddenDisscussions[i].style.display = "block";
    }
    readMoreButton.innerHTML = "Read Less";
  }
}