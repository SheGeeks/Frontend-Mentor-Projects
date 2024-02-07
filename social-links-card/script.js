const button = document.querySelector(".btn");
const useLight = window.matchMedia("(prefers-color-scheme: light)");

function toggleLightMode(state) {
  document.documentElement.classList.toggle("light-mode", state);
}

toggleLightMode(useLight.matches);

useLight.addEventListener("change", (evt) => {
  toggleLightMode(evt.matches);
});

button.addEventListener("click", (evt) => {
  document.documentElement.classList.toggle("light-mode");
});
