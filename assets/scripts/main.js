import onFirstTimeSection from "./on_first_time_section.js";
import onFirstTimeView from "./on_first_time_view.js";
import currentSection from "./on_window_currency.js";
import pageMainEvents from "./page_main_events.js";
import swiperInit from "./swiper_init.js";

document.addEventListener("DOMContentLoaded", function () {
  pageMainEvents();
  currentSection();
  onFirstTimeView();
  swiperInit();

  const setHomeisShown = () => {
    const home = document.getElementById("home");
    home.classList.add("isShown");
  };
  onFirstTimeSection("#o-nas", setHomeisShown);

  window.dispatchEvent(new Event("scroll"));
});
