document.addEventListener("DOMContentLoaded", function () {
  let pageScrollY = 0;
  let isScrollDisable = false;

  const pageContainer = document.getElementById("page-container");

  // MENU & HEADER STICKY
  const header = document.getElementById("main-header");

  const menuButton = document.getElementById("menu-button");
  const menuNav = document.getElementById("menu-nav");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("isClicked");
    menuNav.classList.toggle("isOpen");
    // header.classList.toggle("isHidden");

    if (isScrollDisable) {
      enableScroll();
      document.addEventListener("scroll", headerStickyHandler);

      isScrollDisable = false;
    } else {
      document.removeEventListener("scroll", headerStickyHandler);
      disableScroll();
      
      isScrollDisable = true;
    }
  });

  let prevScrollY = 0;
  const headerStickyHandler = () => {
    const scrollY = window.scrollY;

    if (scrollY > prevScrollY && !header?.classList.contains("isOpen")) {
      header.classList.add("isHidden", "inMove");
    } else if (scrollY === 0) {
      header.classList.remove("inMove");
    } else {
      header.classList.remove("isHidden");
    }

    prevScrollY = scrollY;
  };

  document.addEventListener("scroll", headerStickyHandler);

  // CONTACT POPUP

  const disableScroll = (event) => {
    pageScrollY = window.scrollY;
    pageContainer.style.position = "fixed";
    pageContainer.style.height = "calc( 100svh + " + pageScrollY + "px)";
    pageContainer.style.bottom = 0;
  };

  const enableScroll = () => {
    pageContainer.style.position = "unset";
    pageContainer.style.height = "unset";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, pageScrollY);
    document.documentElement.style.scrollBehavior = "smooth";
  };

  const contactPopup = document.getElementById("contactPopup");

  const contactOpenButtons = [
    ...document.getElementsByClassName("contactPopup-openButton"),
  ];
  const contactCloseButton = contactPopup?.querySelector(
    ".contactPopup-closeButton"
  );

  contactOpenButtons?.forEach((currentButton) => {
    currentButton.addEventListener("click", () => {
      contactPopup.classList.add("isOpen");
      disableScroll();

      // pageContainer.addEventListener("wheel", disableScroll);
    });
  });
  contactCloseButton?.addEventListener("click", () => {
    contactPopup.classList.remove("isOpen");
    enableScroll();
    // pageContainer.removeEventListener("wheel", disableScroll);
  });

  // UNFOLD CONTENT
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
