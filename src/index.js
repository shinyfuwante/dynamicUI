// 1) Dropdown menu
// element that on click, will display the list
// can do on hover also.
const mainElement = document.querySelector("div#content");

/* eslint-disable no-console */
// create the main dropdown element
const dropdownMenu = document.createElement("div");
dropdownMenu.classList.add("dropdown-menu");
mainElement.appendChild(dropdownMenu);
dropdownMenu.innerText = "Hover me!";
dropdownMenu.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("dropdown-menu")) return;
  console.log("button hovered");
  console.log(e.target);
});

// create the children of the dropdown element
for (let i = 0; i < 3; i++) {
  const element = document.createElement("div");
  element.innerText = `List Item ${i + 1}`;
  element.classList.add("dropdown-element");
  dropdownMenu.appendChild(element);
}
// now to add css

// 2) Mobile menu (like a hamburger menu)

// 3)Image slider/carousel
