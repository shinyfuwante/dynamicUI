// image slider
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";

const mainElement = document.querySelector("div#content");
const pictureArray = [img1, img2, img3, img4, img5];
const galleryElement = document.createElement("div");
const leftArrow = document.createElement('a');
leftArrow.classList.add('left');
leftArrow.innerText = '←';
const rightArrow = document.createElement('a');
rightArrow.innerText = '→';
rightArrow.classList.add('right');

let currentSlideIndex = 0;
const displaySlide = (n) => {
    console.log(`call display slide with value: ${n}`);
    const dots = document.querySelectorAll('.navigation-dot');
  if (n > pictureArray.length - 1) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = pictureArray.length - 1;
  }
  for (let i = 0; i < galleryElement.children.length; i++) {
    galleryElement.children[i].classList.add("invisible");
    dots[i].classList.remove("active");
  }
  galleryElement.children[currentSlideIndex].classList.remove("invisible");
  dots[currentSlideIndex].classList.add("active");
};
const changeSlides = (n) => {
  displaySlide((currentSlideIndex += n));
};

const skipToSlide = (n) => {
  displaySlide((currentSlideIndex = n));
};

const initializeCarousel = () => {
  galleryElement.id = "gallery";
  mainElement.appendChild(galleryElement);
  // throw in the 5 images
  for (let i = 0; i < pictureArray.length; i++) {
    const picture = document.createElement("img");
    picture.src = pictureArray[i];
    picture.classList.add("gallery-pic", "fade");
    galleryElement.appendChild(picture);

    const dot = document.createElement('span');
    dot.classList.add('navigation-dot');
    dot.addEventListener('click', () => skipToSlide(i));
    mainElement.appendChild(dot);
  }
  mainElement.appendChild(leftArrow);
  mainElement.appendChild(rightArrow);
  skipToSlide(0);
  leftArrow.addEventListener('click', () => changeSlides(1));
  rightArrow.addEventListener('click', () => changeSlides(-1));
  setTimeout(() => changeSlides(1), 2000);
};

export default initializeCarousel;
