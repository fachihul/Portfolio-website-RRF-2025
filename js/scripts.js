$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 500,
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
// Accordion
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Close all other content sections
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

    // Toggle the clicked section
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
