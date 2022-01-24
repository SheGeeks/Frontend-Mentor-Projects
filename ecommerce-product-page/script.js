const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector("#mobile-menu-close-btn");
const mobileMenuBtn = document.querySelector("#mobile-menu-open-btn");
const addQuantityBtn = document.querySelector("#add-to-cart #qty-add");
const subQuantityBtn = document.querySelector("#add-to-cart #qty-subtract");
const qtyInput = document.querySelector("#add-to-cart #qty-total");
const addToCartBtn = document.querySelector("#addToCart-btn");
let qtyTotal = 0;
qtyInput.value = 0;

console.log(qtyInput);

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
