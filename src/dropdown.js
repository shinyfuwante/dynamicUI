// 1) Dropdown menu
// element that on click, will display the list
// can do on hover also.
const mainElement = document.querySelector("div#content");

const initializeDropDown = () => {
    /* eslint-disable no-console */
    // create the main dropdown element
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    mainElement.appendChild(dropdownMenu);
    dropdownMenu.innerText = "Hover me!";
    dropdownMenu.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("dropdown-menu")) return;
    const { children } = e.target;
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        element.classList.add("visible");
    }
    });

    dropdownMenu.addEventListener("mouseout", (e) => {
        if (!e.target.classList.contains("dropdown-menu")) return;
        const { children } = e.target;
        for (let i = 0; i < children.length; i++) {
        const element = children[i];
        element.classList.remove("visible");
        }
    });

    // create the children of the dropdown element
    for (let i = 0; i < 3; i++) {
    const element = document.createElement("div");
    element.innerText = `List Item ${i + 1}`;
    element.classList.add("dropdown-element");
    dropdownMenu.appendChild(element);
    }
}
export default initializeDropDown;