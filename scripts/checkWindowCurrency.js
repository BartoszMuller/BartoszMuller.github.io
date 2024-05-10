export default function checkWindowCurrency(
  currentElement,
  onInView,
  onNotInView = () => {}
) {
  let isInView = false;
  const onScrollSection = () => {
    const elementOffset = currentElement.getBoundingClientRect();
    const viewPoint = window.innerHeight / 2;
    if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
      !isInView && onInView();

      isInView = true;
    } else {
      onNotInView();
      isInView = false;
    }
  };

  window.addEventListener("scroll", onScrollSection);
}
