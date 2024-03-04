const imageContainer = document.querySelector(".slider__photo");
const prevButton = document.querySelector(".slider__button-back");
const nextButton = document.querySelector(".slider__button-next");

let sources = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
  "./images/10.jpg",
  "./images/11.jpg",
  "./images/12.jpg",
];

let currentImage = 0;
imageContainer.src = sources[currentImage];

function nextImage() {
  currentImage++;
  if (currentImage > sources.length - 1) {
    currentImage = sources.length - 1;
  }
  imageContainer.src = sources[currentImage];
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = 0;
  }
  imageContainer.src = sources[currentImage];
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
