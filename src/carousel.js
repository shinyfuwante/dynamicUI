// image slider
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";

const mainElement = document.querySelector("div#content");
const pictureArray = [img1, img2, img3, img4, img5];
let currentSlideIndex = 0;
const initializeCarousel = () => {
  const galleryElement = document.createElement("div");
  galleryElement.id = "gallery";
  mainElement.appendChild(galleryElement);
  // throw in the 5 images
  for (let i = 0; i < pictureArray.length; i++) {
    console.log("trying to add image");
    const picture = document.createElement("img");
    picture.src = pictureArray[i];
    picture.classList.add("gallery-pic");
    galleryElement.appendChild(picture);
  }
};

// display the slide at index (currentSlideIndex)
const displaySlide = () => {};
// create left and right functions
const slideLeft = () => {
  // assume currentSlide is 0..
  if (currentSlideIndex === 0) {
    currentSlideIndex = pictureArray.length - 1;
  } else {
    currentSlideIndex -= 1;
  }
};

const slideRight = () => {
  // assume currentSlide is 0..
  if (currentSlideIndex === pictureArray.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex += 1;
  }
};

export default initializeCarousel;
