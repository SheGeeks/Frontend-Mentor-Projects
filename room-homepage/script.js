const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

const heroImgs = document.querySelector(".hero-img").children;
const totalImages = heroImgs.length;
let index = 0;

const contentBlocks = document.querySelector("#featured-content").children;
const totalBlocks = contentBlocks.length;

// Functions
function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages - 1) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 2;
    } else {
      index--;
    }
  }

  // Switch selected image & content block
  for (let i = 0; i < heroImgs.length - 1; i++) {
    heroImgs[i].classList.remove("selected");
    contentBlocks[i].classList.remove("selected");
  }
  heroImgs[index].classList.add("selected");
  contentBlocks[index].classList.add("selected");
}

// Event Listeners
navNext.addEventListener("click", () => {
  nextImage("next");
});

navPrev.addEventListener("click", () => {
  nextImage("prev");
});
