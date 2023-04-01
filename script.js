const carousel = document.querySelector(".carousel");
const slidesNodeList = carousel.querySelectorAll("img");
const slides = Array.from(slidesNodeList); // Convert NodeList to an array
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");

function updateCarousel() {
  carousel.innerHTML = "";
  slides.forEach((slide) => carousel.appendChild(slide));
}

function handleRightClick(e) {
  e.preventDefault(); // Prevent the default right-click menu
  const firstSlide = slides.shift(); // Remove the first slide
  slides.push(firstSlide); // Add the removed slide to the end
  updateCarousel();
}

function handleLeftClick() {
  const lastSlide = slides.pop(); // Remove the last slide
  slides.unshift(lastSlide); // Add the removed slide to the beginning
  updateCarousel();
}

arrowRight.addEventListener("click", handleRightClick); // Use contextmenu event for right-click
arrowLeft.addEventListener("click", handleLeftClick);
