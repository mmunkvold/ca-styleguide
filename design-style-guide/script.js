// Hamburger menu

const nav = document.getElementById("navbar");
const navbar = document.getElementById("navbar-nav");

const toggle = document.getElementById("navbar-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
    toggle.classList.toggle("show");
  });
}

if (navbar) {
  navbar.addEventListener("click", () => {
    navbar.classList.remove("show");
    toggle.classList.remove("show");
  });
}
