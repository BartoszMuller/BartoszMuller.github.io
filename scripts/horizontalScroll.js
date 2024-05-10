document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    ...document.querySelectorAll(
      ".horizontalScroll, .benefits-section-container"
    ),
  ];
  elements.forEach((currentElement) => {
    currentElement.addEventListener("wheel", (event) => {
      event.preventDefault();
      event.currentTarget.scrollLeft += event.deltaY * 3;
    });
  });
});
