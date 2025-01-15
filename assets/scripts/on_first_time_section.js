export default function onFirstTimeSection(sectionSelector, onEventFn) {
  const sectionToObserv = document.querySelector(sectionSelector);

  const onScrollSection = () => {
    const elementOffset = sectionToObserv.getBoundingClientRect();
    const viewPoint = window.innerHeight / 1.8;

    if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
      sectionToObserv.classList.add("isShown");
      onEventFn();
      window.removeEventListener("scroll", onScrollSection);
    }
  };

  window.addEventListener("scroll", onScrollSection);
}
