const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector("#mobile-menu-close-btn");
const mobileMenuBtn = document.querySelector("#mobile-menu-open-btn");
const addQuantityBtn = document.querySelector("#add-to-cart #qty-add");
const subQuantityBtn = document.querySelector("#add-to-cart #qty-subtract");
const qtyInput = document.querySelector("#add-to-cart #qty-total");
const addToCartBtn = document.querySelector("#addToCart-btn");
const cartNotification = document.querySelector("#checkout-cart-btn");
const shoppingCartBtn = document.querySelector("#checkout-cart-btn");
const shoppingCartCard = document.querySelector("#shopping-cart");
const cartBasket = document.querySelector("#basket");
const deleteBtn = document.querySelector("#delete");
const productPrice = document.querySelector("#price");
const itemPrice = document.querySelector("#item-price");
const itemQty = document.querySelector("#item-qty");
const itemTotal = document.querySelector("#item-total");

const prevImgBtn = document.querySelector("#prev-img-btn");
const nextImgBtn = document.querySelector("#next-img-btn");
const productImg = document.querySelector("#product-image");

let cartTotal = 0;
let qtyTotal = 0;
let price = productPrice.innerHTML.substring(1);
qtyInput.value = 0;

const imgArray = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
const totalImgs = imgArray.length;
let imgIndex = 0;

// //////////// Functions
// //// Lightbox

function changeImgUrl(number) {
  productImg.src = imgArray[number];
}

// //////////// Event Listeners
// //// Mobile Nav Menu
mobileMenuBtn.addEventListener("click", (e) => {
  console.log("clicked");
  mobileNav.classList.add("open");
  mobileMenuCloseBtn.classList.add("open");
});

mobileMenuCloseBtn.addEventListener("click", (e) => {
  mobileNav.classList.remove("open");
  mobileMenuCloseBtn.classList.remove("open");
});

// //// Shopping Cart Toggle
shoppingCartBtn.addEventListener("click", (e) => {
  shoppingCartCard.classList.toggle("hide");
});

// //// Lightbox

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

// //// Adjust Product Quantity
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

// ////  Add item To Cart

addToCartBtn.addEventListener("click", (e) => {
  //  Toggle empty basket class
  cartBasket.classList.remove("empty");

  // // Update totals
  // update shopping cart icon total
  cartTotal += qtyTotal;

  if (cartTotal > 0) {
    cartNotification.classList.remove("empty");
    cartNotification.setAttribute("data-count", cartTotal);
  } else {
    return;
  }

  // Update cart totals and quantity
  itemTotal.innerHTML = "$" + price * cartTotal + ".00";
  itemQty.innerHTML = cartTotal;
});

// Delete item from cart
deleteBtn.addEventListener("click", (e) => {
  cartNotification.setAttribute("data-count", 0);
  cartNotification.classList.add("empty");
  cartBasket.classList.add("empty");
  qtyInput.value = cartTotal = qtyTotal = 0;
});
