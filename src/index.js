import "./styles/reset.css";
import "./styles/dropdown.css";
import initializeDropDown from "./dropdown";
import initializeCarousel from "./carousel"

const mainElement = document.querySelector("div#content");
// create tabs/buttons
const buttons = (() => {
  const dropdownButton = document.createElement("button");
  const carouselButton = document.createElement("button");
  const configButtons = () => {
    dropdownButton.innerText = "Dropdown";
    carouselButton.innerText = "Carousel";
  };
  const renderButtons = () => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(dropdownButton);
    buttonContainer.appendChild(carouselButton);
    configButtons();
    mainElement.appendChild(buttonContainer);
  };
  const clearPage = () => {
    while (mainElement.hasChildNodes()) {
      mainElement.lastChild.remove();
    }
    renderButtons();
  };
  dropdownButton.addEventListener("click", () => {
    clearPage();
    initializeDropDown();
    console.log('clicked dropdown');
  });
  carouselButton.addEventListener("click", () => {
    clearPage();
    initializeCarousel();
    console.log('clicked carousel');
  });
  return {
    renderButtons,
  };
})();
buttons.renderButtons();
initializeDropDown();

// 2)Image slider/carousel
