$(window).on("load", function () {
  $(".loader-container").fadeOut(500, function () {
    $(this).remove();
  });
});

let screenHeight = $(window).height();
// console.log(screenHeight);

$(window).scroll(function () {
  let currentPosition = $(this).scrollTop();
  // console.log(currentPosition);
  if (currentPosition >= screenHeight - 100) {
    $(".site-nav").addClass("site-nav-scroll");
  } else {
    $(".site-nav").removeClass("site-nav-scroll");
    setActive("home");
  }
});

function setActive(current) {
  $(".nav-link").removeClass("current-section");

  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        let currentSectionId = $(this.element).attr("id");
        console.log(currentSectionId);
        setActive(currentSectionId);
      }
    },
    { offset: "15%" }
  );

  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        let currentSectionId = $(this.element).attr("id");
        console.log(currentSectionId);
        setActive(currentSectionId);
      }
    },
    { offset: "-85%" }
  );
}

navScroll();

new WOW().init();
$(".pricing-slide").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
