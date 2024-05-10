document.addEventListener("DOMContentLoaded", function () {
  const elementsToCheck = [
    ...document.getElementsByClassName("onWindowCurrency"),
  ];

  elementsToCheck.forEach((currentElement) => {
    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 2;
      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        currentElement.classList.add("isCurrentWindow");
      } else {
        currentElement.classList.remove("isCurrentWindow");
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});
