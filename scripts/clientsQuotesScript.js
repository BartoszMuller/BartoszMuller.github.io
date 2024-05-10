import checkWindowCurrency from "./checkWindowCurrency.js";
document.addEventListener("DOMContentLoaded", function () {
  let autoChangeInterval = false;
  let currentQuoteNumber = 1;
  let autoChangeQuoteSpeed = 6000;
  const clientsQuotesElement = document.querySelector(".clientsQuotes-content");
  const currentQuoteNumberElement = document.querySelector(".current-quote");
  const amountOfQuotesElement = document.querySelector(".max-quote");
  const prevQuoteButton = document.querySelector(".prev-quote");
  const nextQuoteButton = document.querySelector(".next-quote");
  const clientsQuotesSection = clientsQuotesElement.closest("section");

  const amountOfQuotes = clientsQuotesElement.childElementCount;

  currentQuoteNumberElement.innerHTML = currentQuoteNumber;
  amountOfQuotesElement.innerHTML = amountOfQuotes;
  clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "1";

  const updateUI = () => {
    currentQuoteNumberElement.innerHTML = currentQuoteNumber;
    clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "1";
    clientsQuotesElement.style.transform = `translateX(-${
      (currentQuoteNumber - 1) * 100
    }vw)`;

    prevQuoteButton.classList.toggle("disabled", currentQuoteNumber <= 1);
    nextQuoteButton.classList.toggle(
      "disabled",
      currentQuoteNumber >= amountOfQuotes
    );
  };

  const showQuote = (newIndex) => {
    clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "0";
    if (newIndex <= amountOfQuotes) {
      currentQuoteNumber = newIndex;
    } else {
      currentQuoteNumber = 1;
    }

    updateUI();
  };

  const showPrevQuote = () => {
    if (currentQuoteNumber > 1) {
      showQuote(currentQuoteNumber - 1);
    }
  };

  const showNextQuote = () => {
    if (currentQuoteNumber < amountOfQuotes) {
      showQuote(currentQuoteNumber + 1);
    }
  };

  const autoChangeQuotes = () => {
    clearInterval(autoChangeInterval);

    autoChangeInterval = setInterval(
      () => showQuote(currentQuoteNumber + 1),
      autoChangeQuoteSpeed
    );
  };

  updateUI();
  checkWindowCurrency(clientsQuotesSection, autoChangeQuotes, () => {
    clearInterval(autoChangeInterval);
  });

  prevQuoteButton.addEventListener("click", showPrevQuote);
  nextQuoteButton.addEventListener("click", showNextQuote);
});
