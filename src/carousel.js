// image slider
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";

const mainElement = document.querySelector("div#content");
const pictureArray = [img1, img2, img3, img4, img5];
const galleryElement = document.createElement("div");
const leftArrow = document.createElement('a#left');
const rightArrow = document.createElement('a#right');

let currentSlideIndex = 0;
const displaySlide = (n) => {
  if (n > pictureArray.length - 1) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = pictureArray.length - 1;
  }
  for (let i = 0; i < galleryElement.children.length; i++) {
    galleryElement.children[i].classList.add("invisible");
  }
  galleryElement.children[currentSlideIndex].classList.remove("invisible");
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
    picture.classList.add("gallery-pic");
    galleryElement.appendChild(picture);
  }
  mainElement.appendChild(leftArrow);
  mainElement.appendChild(rightArrow);
  skipToSlide(0);
};

export default initializeCarousel;
