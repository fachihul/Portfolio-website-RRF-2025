$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

$(document).ready(function () {
  // Portfolio filter
  $(".portfolio-filters a").click(function (e) {
    e.preventDefault();

    const filter = $(this).data("filter");

    // Highlight active filter
    $(".portfolio-filters a").removeClass("active");
    $(this).addClass("active");

    // Show/hide items based on category
    $(".portfolio-item").each(function () {
      const categories = $(this).data("category").split(" ");
      if (filter === "all" || categories.includes(filter)) {
        $(this).fadeIn(300);
      } else {
        $(this).fadeOut(300);
      }
    });
  });
});
// For logo Carousel
let copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
