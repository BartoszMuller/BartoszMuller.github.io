export default function lightGalleryInit() {
  const gallery = document.getElementById("lightgallery");
  const openGalleryBtn = document.getElementById("openGallery");

  const lgInstance = lightGallery(gallery, {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    download: false,
    mobileSettings: {
      controls: true,
      showCloseIcon: true,
    },
  });

  openGalleryBtn.addEventListener("click", function (e) {
    e.preventDefault();
    lgInstance.openGallery();
  });
}
