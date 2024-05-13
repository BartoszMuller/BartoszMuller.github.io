document.addEventListener("DOMContentLoaded", function () {
  const speed = 30;
  const typeText = (elementToType, textToType, newLineIndex, initalContent) => {
    console.log(newLineIndex);
    let letterIndex = 0;
    const type = () => {
      if (letterIndex < textToType.length) {
        console.log(textToType.charAt(letterIndex));
        if (newLineIndex.includes(letterIndex)) {
          elementToType.innerHTML += "<br />";
          console.log(letterIndex);
        }

        elementToType.innerHTML += textToType.charAt(letterIndex);
        letterIndex++;

        setTimeout(type, speed);
      } else {
        elementToType.innerHTML = initalContent;
        elementToType.style.minHeight = "unset";
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
    // const newLine = document.createElement("br");
    fadedTextElement.classList.add("faded");

    // fadedTextElement.innerHTML = currentElement.innerHTML;

    const newLineIndex = [];
    const initalContent = currentElement.innerHTML;
    const elementText = currentElement.textContent.trim();
    const words = elementText.split(/\s+/);

    currentElement.appendChild(fadedTextElement);
    currentElement.textContent = words[0];
    fadedTextElement.textContent = words[0];
    let elementLastHeight = currentElement.clientHeight;
    for (let i = 1; i < words.length; i++) {
      currentElement.textContent += " " + words[i];

      if (currentElement.clientHeight > elementLastHeight) {
        newLineIndex.push(fadedTextElement.textContent.length + 1);
        fadedTextElement.innerHTML += "<br />";
        console.log();
        elementLastHeight = currentElement.clientHeight;
      }
      fadedTextElement.innerHTML += " " + words[i];
    }

    const textToType = fadedTextElement.textContent;
    // const textToType = fadedTextElement.innerText;

    currentElement.style.minHeight = currentElement.scrollHeight + "px";
    currentElement.textContent = "";
    currentElement.appendChild(fadedTextElement);

    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 2;

      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        typeText(currentElement, textToType, newLineIndex, initalContent);
        window.removeEventListener("scroll", onScrollSection);
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});
