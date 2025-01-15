export default function swiperInit() {
  const gallerySwiper = new Swiper(".gallery", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    allowTouchMove: true,
    noSwiping: false,
    enabled: true,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 0,
        allowTouchMove: false,
        noSwiping: true,
        pagination: false,
        enabled: false,
      },
    },
  });
}
