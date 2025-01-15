export default function pageMainEvents() {
  let pageScrollY = 0;
  let isScrollDisable = false;

  const isMobile = () => {
    return window.innerWidth <= 860;
  };

  const pageContainer = document.getElementById("main-container");
  const header = document.getElementById("main-header");

  if (header) {
    const disableScroll = () => {
      document.removeEventListener("scroll", headerStickyHandler);

      pageScrollY = window.scrollY;
      pageContainer.classList.add("scrollLock");
      pageContainer.style.height = "calc( 100svh + " + pageScrollY + "px)";

      isScrollDisable = true;
    };

    const enableScroll = () => {
      pageContainer.classList.remove("scrollLock");
      pageContainer.style.height = "unset";
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, pageScrollY);
      document.documentElement.style.scrollBehavior = "smooth";

      document.addEventListener("scroll", headerStickyHandler);

      isScrollDisable = false;
    };

    // MENU & HEADER STICKY

    const menuButton = document.getElementById("menu-button");
    const menuNav = document.getElementById("menu-nav");

    menuButton?.addEventListener("click", (event) => {
      event.preventDefault();

      menuButton?.classList.toggle("isClicked");
      menuNav?.classList.toggle("isOpen");
      setTimeout(() => window.scrollTo(0, window.scrollY), 1);

      isScrollDisable ? enableScroll() : disableScroll();
    });

    let prevScrollY = 0;
    let showHeaderTimeout;
    const showHeader = () => {
      header.classList.remove("isHidden");
    };

    const headerStickyHandler = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 100 && scrollY > prevScrollY) {
        clearTimeout(showHeaderTimeout);
        if (!menuNav.classList.contains("isOpen")) {
          header.classList.add("isHidden", "inMove");
        } else {
          header.classList.add("inMove");
        }
        showHeaderTimeout = setTimeout(showHeader, 500);
      } else if (scrollY <= 100) {
        header.classList.remove("inMove");
        header.classList.remove("isHidden");
      } else {
        header.classList.remove("isHidden");
      }

      prevScrollY = scrollY;
    };
    document.addEventListener("scroll", headerStickyHandler);

    //FIX LINK MENU
    const headerHeight = header.clientHeight;
    const menuLinks = menuNav.querySelectorAll(".nav-list__link");
    if (menuLinks && menuLinks.length > 0) {
      menuLinks.forEach((menuLink) => {
        if (menuLink.hash.startsWith("#")) {
          menuLink.addEventListener("click", (event) => {
            event.preventDefault();

            const elementLink = document.querySelector(menuLink.hash);

            elementLink.style.scrollMarginTop = headerHeight + "px";
            elementLink?.scrollIntoView({ block: "start" });
          });
        }
      });
    }
  }
}
