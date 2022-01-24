const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector("#mobile-menu-close-btn");
const mobileMenuBtn = document.querySelector("#mobile-menu-open-btn");
const addQuantityBtn = document.querySelector("#add-to-cart #qty-add");
const subQuantityBtn = document.querySelector("#add-to-cart #qty-subtract");
const qtyInput = document.querySelector("#add-to-cart #qty-total");
const addToCartBtn = document.querySelector("#addToCart-btn");
const cartNotification = document.querySelector("#checkout-cart-btn");
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
