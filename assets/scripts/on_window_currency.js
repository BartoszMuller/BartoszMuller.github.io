export default function currentSection() {
  const sections = document.querySelectorAll("#main-container > section");
  const headerLinks = document.querySelectorAll("#main-header .nav-list__item");
  let currentSectionIndex = false;
  sections.forEach((currentElement, index) => {
    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 2;
      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        if (index !== currentSectionIndex) {
          currentSectionIndex = index;
          headerLinks.forEach((link) => link.classList.remove("active"));
          headerLinks[index].classList.add("active");
        }
      } else {
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
}
