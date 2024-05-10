document.addEventListener("DOMContentLoaded", function () {
  const elementsToCheck = [
    ...document.getElementsByClassName("onFirstTimeView"),
  ];

  elementsToCheck.forEach((currentElement) => {
    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 1.8;

      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        currentElement.classList.add("isShown");
        window.removeEventListener("scroll", onScrollSection);
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});

