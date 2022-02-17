const navButtonContainer = document.querySelector(".nav-btn-container");
const navOverlay = document.querySelector(".overlay");

navButtonContainer.addEventListener("click", () => {
  navButtonContainer.classList.toggle("nav-btn-clicked");
  navOverlay.classList.toggle("show");
});