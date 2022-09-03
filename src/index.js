// 1) Dropdown menu
// element that on click, will display the list
// can do on hover also.
const mainElement = document.querySelector("div#content");

/* eslint-disable no-console */
// create the dropdown element
const dropdownMenu = document.createElement("div");
dropdownMenu.classList.add("dropdown-menu");
mainElement.appendChild(dropdownMenu);
dropdownMenu.innerText("Hover me!");
dropdownMenu.addEventListener("hover", console.log("dropdown element hovered"));

// 2) Mobile menu (like a hamburger menu)

// 3)Image slider/carousel
