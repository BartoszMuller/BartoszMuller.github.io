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
    // const lines = currentElement.textContent.split("\n");

    // // Iteracja przez każdą linijkę tekstu
    // const lineHeight = parseInt(window.getComputedStyle(currentElement).lineHeight);
    // // Pobranie szerokości kontenera dla elementu
    // const containerWidth = currentElement.clientWidth;
    // // Pobranie tekstu bez białych znaków z elementu
    // const text = currentElement.textContent.trim();
    // // Podzielenie tekstu na słowa
    // const words = text.split(/\s+/);
    // // Inicjalizacja zmiennych
    // let lineWords = [];
    // let currentLineWidth = 0;
    // // Iteracja przez każde słowo w tekście
    // words.forEach(word => {
    //     // Utworzenie tymczasowego elementu, aby uzyskać szerokość słowa
    //     const tempSpan = document.createElement('span');
    //     tempSpan.textContent = word;
    //     document.body.appendChild(tempSpan);
    //     const wordWidth = tempSpan.clientWidth;
    //     document.body.removeChild(tempSpan);
    //     // Jeśli dodanie słowa nie przekroczy szerokości kontenera
    //     if (currentLineWidth + wordWidth <= containerWidth) {
    //         lineWords.push(word);
    //         currentLineWidth += wordWidth + 5; // Dodajemy trochę marginesu między słowami (5 pikseli)
    //     } else {
    //         // Wyświetlenie ostatniego słowa z linii
    //         const lastWord = lineWords[lineWords.length - 1];
    //         console.log(lastWord);
    //         // Rozpoczęcie nowej linii
    //         lineWords = [word];
    //         currentLineWidth = wordWidth + 5;
    //     }
    // });
    // // Wyświetlenie ostatniego słowa z ostatniej linii
    // if (lineWords.length > 0) {
    //     const lastWord = lineWords[lineWords.length - 1];
    //     console.log(lastWord);
    // }

    currentElement.parentNode.style.position = "relative";

    const fadedTextElement = document.createElement("span");
    fadedTextElement.classList.add("faded");

    fadedTextElement.innerHTML = currentElement.innerHTML;

    const elementHeight = currentElement.scrollHeight;
    const textToType = currentElement.innerText;

    currentElement.innerHTML = "";
    currentElement.style.minHeight = elementHeight + "px";
    currentElement.appendChild(fadedTextElement);

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
