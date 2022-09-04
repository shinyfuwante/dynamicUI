import "./styles/reset.css";
import "./styles/dropdown.css";
import initializeDropDown from "./dropdown";

const mainElement = document.querySelector("div#content");
// create tabs/buttons
const buttons = (() => {
  const dropdownButton = document.createElement("button");
  const hamburgerButton = document.createElement("button");
  const carouselButton = document.createElement("button");
  const configButtons = () => {
    dropdownButton.innerText = "Dropdown";
    hamburgerButton.innerText = "Hamburger Menu";
    carouselButton.innerText = "Carousel";
  };
  const renderButtons = () => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(dropdownButton);
    buttonContainer.appendChild(hamburgerButton);
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
  hamburgerButton.addEventListener("click", () => {
    clearPage();
    // initializeDropDown();
    console.log('clicked hamburger');
  });
  carouselButton.addEventListener("click", () => {
    clearPage();
    // initializeDropDown();
    console.log('clicked carousel');
  });
  return {
    renderButtons,
  };
})();
buttons.renderButtons();
initializeDropDown();

// 2) Mobile menu (like a hamburger menu)

// 3)Image slider/carousel
