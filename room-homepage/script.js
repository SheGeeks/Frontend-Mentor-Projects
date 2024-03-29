const navBar = document.querySelector("nav");
const navLinks = document.querySelector("ul");
const mobileMenuOpen = document.querySelector("#mobile-menu");
const mobileMenuClosed = document.querySelector("#mobile-menu-close");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

const heroImgs = document.querySelector(".hero-img").children;
const totalImages = heroImgs.length;
let index = 0;

const contentBlocks = document.querySelector("#featured-content").children;
const totalBlocks = contentBlocks.length;

// Functions
// Open and close menu
function mobileMenu(status) {
  if (status == "close") {
    navBar.classList.remove("open");
    navLinks.classList.remove("open");
  } else {
    navBar.classList.add("open");
    navLinks.classList.add("open");
  }
}

// Change direction
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
//// Mobile Menu
mobileMenuOpen.addEventListener("click", () => {
  mobileMenu("open");
});

mobileMenuClosed.addEventListener("click", () => {
  mobileMenu("close");
});

//// Navigation icons
navNext.addEventListener("click", () => {
  nextImage("next");
});

navPrev.addEventListener("click", () => {
  nextImage("prev");
});
