var slider = document.querySelector(".resume .slider");

var slideIndex = 0;

function nextSlide() {
  slideIndex++;
  if (slideIndex > slider.children.length - 1) {
    slideIndex = 0;
  }

  slider.children[slideIndex].style.display = "block";
  slider.children[slideIndex - 1].style.display = "none";
}

setInterval(nextSlide, 2000);