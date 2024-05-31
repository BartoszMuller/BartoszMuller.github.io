document.addEventListener("DOMContentLoaded", function () {
  const leafs = [...document.querySelectorAll(".leaf-item")];

  leafs.shift();

  const onScrollLeaf1 = () => {
    const elementOffset = leafs[0].getBoundingClientRect();
    const viewPoint = window.innerHeight * 0.4;

    if (
      elementOffset.top <= viewPoint &&
      elementOffset.bottom >= viewPoint * 0.4
    ) {
      leafs.forEach((leaf) => leaf.classList.add("firstUnfold"));
      window.removeEventListener("scroll", onScrollLeaf1);
      setTimeout(() => {
        window.addEventListener("scroll", onScrollLeaf2);
        window.dispatchEvent(new Event("scroll"));
      }, 1000);
      leafs.shift();
    }
  };
  window.addEventListener("scroll", onScrollLeaf1);

  const onScrollLeaf2 = () => {
    const elementOffset = leafs[0].getBoundingClientRect();
    const viewPoint = window.innerHeight / 1.5;

    if (
      elementOffset.top <= viewPoint &&
      elementOffset.bottom >= viewPoint / 2
    ) {
      leafs.forEach((leaf) => leaf.classList.add("secondUnfold"));
      window.removeEventListener("scroll", onScrollLeaf2);
      setTimeout(() => {
        window.addEventListener("scroll", onScrollLeaf3);
        window.dispatchEvent(new Event("scroll"));
      }, 1000);
    }
  };

  const onScrollLeaf3 = () => {
    const elementOffset = leafs[0].getBoundingClientRect();
    const viewPoint = window.innerHeight / 1.5;

    if (
      elementOffset.top <= viewPoint &&
      elementOffset.bottom >= viewPoint / 2
    ) {
      leafs.forEach((leaf) => leaf.classList.add("thirdUnfold"));
      window.removeEventListener("scroll", onScrollLeaf3);
    }
  };
});
