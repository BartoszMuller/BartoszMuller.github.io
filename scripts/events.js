document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menuNav = document.getElementById("menu-nav");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("isClicked");
    menuNav.classList.toggle("isOpen");
  });

  //   const elementsToFold = [...document.getElementsByClassName("howWeWork-item")];

  //   elementsToFold.forEach((currentElement) => {
  //     const elementDesc = currentElement.querySelector(".howWeWork-desc");
  //     const unfoldButton = currentElement.querySelector(".unfold-button");

  //     elementDesc.style.height = elementDesc.clientHeight + "px";
  //     currentElement.classList.add("isHidden");

  //     unfoldButton?.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       if (!currentElement.classList.contains("isHidden")) {
  //         elementDesc.style.height = elementDesc.clientHeight + "px";
  //       }
  //       currentElement.classList.toggle("isHidden");
  //     });
  //   });
  // });

  const elementsToFold = [
    ...document.querySelectorAll(".foldable-item, .foldable-items > *"),
  ];

  elementsToFold.forEach((currentElement) => {
    const content = currentElement.querySelector(".foldable-content");
    const button = currentElement.querySelector(".unfold-button");
    const contentHeight = content.clientHeight + "px";

    content.style.height = contentHeight;
    currentElement.classList.add("isFold");

    button?.addEventListener("click", (event) => {
      event.preventDefault();
      if (!currentElement.classList.contains("isFold")) {
        content.style.height = contentHeight;
      }
      currentElement.classList.toggle("isFold");
    });
  });
});
