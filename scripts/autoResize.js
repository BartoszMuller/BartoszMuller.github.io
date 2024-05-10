document.addEventListener("DOMContentLoaded", function () {
  const textareaElement = document.querySelector(".autoresize");
  textareaElement.addEventListener("input", autoResize, false);

  function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }
});
