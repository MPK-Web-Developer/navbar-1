const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const navLogin = document.querySelector(".nav__login");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLogin.classList.toggle("active");
  navMenu.classList.toggle("active");
});
