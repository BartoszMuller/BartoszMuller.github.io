document.addEventListener("DOMContentLoaded", function () {
  let pageScrollY = 0;
  let isScrollDisable = false;

  const isMobile = () => {
    return window.innerWidth <= 767;
  };

  const pageContainer = document.getElementById("page-container");

  const disableScroll = () => {
    document.removeEventListener("scroll", headerStickyHandler);
    
    pageScrollY = window.scrollY;
    pageContainer.style.position = "fixed";
    pageContainer.style.height = "calc( 100svh + " + pageScrollY + "px)";
    pageContainer.style.bottom = 0;

    isScrollDisable = true;
  };

  const enableScroll = () => {
    pageContainer.style.position = "unset";
    pageContainer.style.height = "unset";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, pageScrollY);
    document.documentElement.style.scrollBehavior = "smooth";

    document.addEventListener("scroll", headerStickyHandler);

    isScrollDisable = false;
  };

  // MENU & HEADER STICKY
  const header = document.getElementById("main-header");

  const menuButton = document.getElementById("menu-button");
  const menuNav = document.getElementById("menu-nav");

  menuButton?.addEventListener("click", () => {
    menuButton?.classList.toggle("isClicked");
    menuNav?.classList.toggle("isOpen");
    setTimeout(() => window.scrollTo(0, window.scrollY), 1);

    if (isMobile()) {
      isScrollDisable ? enableScroll() : disableScroll();
    }
  });

  let prevScrollY = 0;
  const headerStickyHandler = () => {
    const scrollY = window.scrollY;

    if (scrollY > prevScrollY) {
      !menuNav?.classList.contains("isOpen")
        ? header?.classList.add("isHidden", "inMove")
        : header?.classList.add("inMove");
    } else if (scrollY === 0) {
      header?.classList.remove("inMove");
    } else {
      header?.classList.remove("isHidden");
    }

    prevScrollY = scrollY;
  };

  document.addEventListener("scroll", headerStickyHandler);

  // CONTACT POPUP

  const contactPopup = document.getElementById("contactPopup");

  const contactOpenButtons = [
    ...document.getElementsByClassName("contactPopup-openButton"),
  ];
  const contactCloseButton = contactPopup?.querySelector(
    ".contactPopup-closeButton"
  );

  contactOpenButtons?.forEach((currentButton) => {
    currentButton?.addEventListener("click", () => {
      !isScrollDisable && disableScroll();
      contactPopup?.classList.add("isOpen");
    });
  });
  contactCloseButton?.addEventListener("click", () => {
    contactPopup?.classList.remove("isOpen");
    if (!isMobile() || !menuNav?.classList.contains("isOpen")) {
      enableScroll();
    }
  });

  // UNFOLD CONTENT
  const elementsToFold = [
    ...document.querySelectorAll(".foldable-item, .foldable-items > *"),
  ];

  elementsToFold?.forEach((currentElement) => {
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
