mobileNav = document.querySelector(".mobile-nav");
mobileMenuCloseBtn = document.querySelector("button.mobile-menu-close-btn");
mobileMenuBtn = document.querySelector(".mobile-menu-open-btn");

mobileMenuBtn.addEventListener("click", (e) => {
  mobileNav.classList.add("open");
});

mobileMenuCloseBtn.addEventListener("click", (e) => {
  mobileNav.classList.remove("open");
});
