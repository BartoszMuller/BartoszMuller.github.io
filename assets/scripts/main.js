import fadeInAnimation from "./fade_in_animation.js";
import lightGalleryInit from "./light_gallery_init.js";
import onFirstTimeSection from "./on_first_time_section.js";
import onFirstTimeView from "./on_first_time_view.js";
import currentSection from "./on_window_currency.js";
import pageMainEvents from "./page_main_events.js";
import scrollAnimate from "./scroll_animate.js";
import swiperInit from "./swiper_init.js";

document.addEventListener("DOMContentLoaded", function () {
  pageMainEvents();
  scrollAnimate();
  fadeInAnimation();
  currentSection();
  onFirstTimeView();
  swiperInit();
  lightGalleryInit();

  const setHomeisShown = () => {
    const home = document.getElementById("home");
    home.classList.add("isShown");
  };
  onFirstTimeSection("#o-nas", setHomeisShown);

  window.dispatchEvent(new Event("scroll"));
});
