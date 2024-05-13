document.addEventListener("DOMContentLoaded", function () {
  const speed = 30;

  const typeText = (elementToType, textToType) => {
    let letterIndex = 0;
    const type = () => {
      if (letterIndex < textToType.length) {
        elementToType.innerHTML += textToType.charAt(letterIndex);
        letterIndex++;
        setTimeout(type, speed);
      } else {
        // elementToType.style.minHeight = "inherit";
      }
    };
    type();
  };

  const elementsToType = [
    ...document.getElementsByClassName("typeTextAnimation"),
  ];

  elementsToType.forEach((currentElement) => {
    currentElement.parentNode.style.position = "relative";

    const fadedTextElement = document.createElement("span");
    fadedTextElement.classList.add("faded");

    fadedTextElement.innerHTML = currentElement.innerHTML;

    const elementHeight = currentElement.scrollHeight;

    const elementWidth = currentElement.clientWidth;
    const elementText = currentElement.textContent.trim();
    currentElement.appendChild(fadedTextElement);
    const words = elementText.split("/s+/");
    words.forEach((word) => {
      fadedTextElement.textContent += word + " ";
      console.log(fadedTextElement.clientHeight);
    });
    const textToType = currentElement.innerText;

    currentElement.innerHTML = "";
    currentElement.style.minHeight = elementHeight + "px";

    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 2;

      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        typeText(currentElement, textToType);
        window.removeEventListener("scroll", onScrollSection);
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});
