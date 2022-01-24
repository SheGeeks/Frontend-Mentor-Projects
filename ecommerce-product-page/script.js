const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector("#mobile-menu-close-btn");
const mobileMenuBtn = document.querySelector("#mobile-menu-open-btn");
const addQuantityBtn = document.querySelector("#add-to-cart #qty-add");
const subQuantityBtn = document.querySelector("#add-to-cart #qty-subtract");
const qtyInput = document.querySelector("#add-to-cart #qty-total");
const addToCartBtn = document.querySelector("#addToCart-btn");
const cartNotification = document.querySelector("#checkout-cart-btn");

const prevImgBtn = document.querySelector("#prev-img-btn");
const nextImgBtn = document.querySelector("#next-img-btn");
const productImg = document.querySelector("#product-image");

const imgArray = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const totalImgs = imgArray.length;
let imgIndex = 0;

let cartTotal = 0;
let qtyTotal = 0;
qtyInput.value = 0;

// //////////// Mobile Nav Menu
mobileMenuBtn.addEventListener("click", (e) => {
  console.log("clicked");
  mobileNav.classList.add("open");
  mobileMenuCloseBtn.classList.add("open");
});

mobileMenuCloseBtn.addEventListener("click", (e) => {
  mobileNav.classList.remove("open");
  mobileMenuCloseBtn.classList.remove("open");
});

// ///////////////// Lightbox

function changeImgUrl(number) {
  productImg.src = imgArray[number];
}

prevImgBtn.addEventListener("click", (e) => {
  if (imgIndex !== 0) {
    imgIndex--;
    changeImgUrl(imgIndex);
  } else {
    imgIndex = 3;
    changeImgUrl(imgIndex);
  }
});

nextImgBtn.addEventListener("click", (e) => {
  if (imgIndex < 3) {
    imgIndex++;
    changeImgUrl(imgIndex);
  } else {
    imgIndex = 0;
    changeImgUrl(imgIndex);
  }
});

// ///////////////// Add Quantity

addQuantityBtn.addEventListener("click", (e) => {
  qtyTotal++;
  qtyInput.value = qtyTotal;
});

subQuantityBtn.addEventListener("click", (e) => {
  if (!qtyInput.value || qtyInput.value == 0) {
    qtyInput.value = 0;
  } else {
    qtyTotal--;
    qtyInput.value = qtyTotal;
  }
});

// // ////////////// Add to Cart Btn

addToCartBtn.addEventListener("click", (e) => {
  // grab info for select product

  // check if item is already in cart

  // // +1 if already in cart

  // // else: add info to cart

  // update cart icon total
  cartTotal += qtyTotal;

  if (cartTotal > 0) {
    cartNotification.classList.remove("empty");
    cartNotification.setAttribute("data-count", cartTotal);
  } else {
    return;
  }
});
