const mobileNav = document.querySelector(".mobile-nav");
const mobileMenuCloseBtn = document.querySelector("#mobile-menu-close-btn");
const mobileMenuBtn = document.querySelector("#mobile-menu-open-btn");
const addQuantityBtn = document.querySelector("#add-to-cart #qty-add");
const subQuantityBtn = document.querySelector("#add-to-cart #qty-subtract");
const qtyInput = document.querySelector("#add-to-cart #qty-total");
const addToCartBtn = document.querySelector("#addToCart-btn");
const shoppingCartBtn = document.querySelector("#checkout-cart-btn");
const shoppingCartCard = document.querySelector("#shopping-cart");
const cartBasket = document.querySelector("#basket");
const deleteBtn = document.querySelector("#delete");
const productPrice = document.querySelector("#price");
const itemPrice = document.querySelector("#item-price");
const itemQty = document.querySelector("#item-qty");
const itemTotal = document.querySelector("#item-total");

let cartTotal = 0;
let qtyTotal = 0;
let price;
qtyInput.value = 0;
itemPrice.innerHTML = price = productPrice.innerHTML.substring(1);

const prevImgBtn = document.querySelector("#prev-img-btn");
const nextImgBtn = document.querySelector("#next-img-btn");
const productImg = document.querySelector("#product-image");
const imgThumbs = document.querySelector("#img-thumbs");

const imgArray = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const totalImgs = imgArray.length;
let imgIndex = 0;

// //////////// Functions

function toggleFade() {
  productImg.classList.remove("fade");
}

function changeImgUrl(number) {
  productImg.src = imgArray[number];
}

function closeCart() {
  shoppingCartCard.classList.add("hide");
}

function openLightbox() {
  if (window.innerWidth < 1024) {
    document.location = document.location.toString().split("#")[0] + "#map";
    return false;
  } else {
    document.getElementById("lightbox-modal").style.display = "block";
    toSlide(imgIndex);
  }
}

function closeLightbox() {
  document.getElementById("lightbox-modal").style.display = "none";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

// //////////// Event Listeners
// //// Mobile Nav Menu
mobileMenuBtn.addEventListener("click", (e) => {
  mobileNav.classList.add("open");
  mobileMenuCloseBtn.classList.add("open");
});

mobileMenuCloseBtn.addEventListener("click", (e) => {
  mobileNav.classList.remove("open");
  mobileMenuCloseBtn.classList.remove("open");
});

// //// Lightbox Modal

var slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

prevImgBtn.addEventListener("click", (e) => {
  productImg.classList.add("fade");
  if (imgIndex !== 0) {
    imgIndex--;
    changeImgUrl(imgIndex);
  } else {
    imgIndex = 3;
    changeImgUrl(imgIndex);
  }
  setTimeout(toggleFade, 600);
});

nextImgBtn.addEventListener("click", (e) => {
  productImg.classList.add("fade");
  if (imgIndex < 3) {
    imgIndex++;
    changeImgUrl(imgIndex);
  } else {
    imgIndex = 0;
    changeImgUrl(imgIndex);
  }
  setTimeout(toggleFade, 600);
});

imgThumbs.addEventListener("click", (e) => {
  productImg.classList.add("fade");

  const thumbnails = [...imgThumbs.children];
  var thumbIndex = Array.prototype.indexOf.call(imgThumbs.children, e.target);

  thumbnails.forEach((img) => {
    img.classList.remove("selected");
    e.target.classList.add("selected");
    productImg.src = imgArray[thumbIndex];

    if (thumbIndex == 0) {
      imgIndex = 1;
    } else {
      imgIndex = thumbIndex + 1;
    }
  });
  setTimeout(toggleFade, 600);
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
  if (qtyInput.value == 0) {
    return;
  } else {
    //  Toggle empty basket class
    cartBasket.classList.remove("empty");

    // // Update totals
    // update checkout cart badge total
    cartTotal += qtyTotal;

    if (cartTotal > 0) {
      shoppingCartBtn.classList.remove("empty");
      shoppingCartBtn.setAttribute("data-count", cartTotal);
    } else {
      return;
    }

    // Update checkout cart item total and quantity
    itemTotal.innerHTML = "$" + price * cartTotal + ".00";
    itemQty.innerHTML = cartTotal;
  }
});

// //// Shopping Cart Toggle
shoppingCartBtn.addEventListener("click", (e) => {
  shoppingCartCard.classList.toggle("hide");

  if (shoppingCartCard.classList.contains("hide")) {
    shoppingCartBtn.style.color = "var(--gray-blue)";
  } else {
    shoppingCartBtn.style.color = "#000";
  }
});

// Delete item from cart
deleteBtn.addEventListener("click", (e) => {
  shoppingCartBtn.setAttribute("data-count", 0);
  shoppingCartBtn.classList.add("empty");
  cartBasket.classList.add("empty");
  qtyInput.value = cartTotal = qtyTotal = 0;
  setTimeout(closeCart, 1000);
});
