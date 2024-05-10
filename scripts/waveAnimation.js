document.addEventListener("DOMContentLoaded", function () {
  const elementsToCheck = [...document.querySelectorAll(".rowWave > *")];
  
  let currentHeight = undefined;
  let counter = 0;

  elementsToCheck.forEach((currentElement) => {
    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 1.3;

      if (
        elementOffset.top <= viewPoint &&
        elementOffset.bottom >= window.innerHeight - viewPoint
      ) {
        if (currentHeight !== elementOffset.top) {
          currentHeight = elementOffset.top;
          counter = 1;
        } else {
          counter++;
        }
        setTimeout(() => {
          currentElement.classList.add("UpDownIn");
        }, 300 * counter);
        window.removeEventListener("scroll", onScrollSection);
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});
