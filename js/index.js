/*OLD CODE WORKS*/
/*
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
*/
const navbarToggle = document.querySelector('.navbar-toggle');
const navMenuContainer = document.querySelector('.nav-menu-container');
const nav = document.querySelector('nav');


navbarToggle.addEventListener('click', () => {
  navMenuContainer.classList.toggle('nav-menu-container_active');

  if (navMenuContainer.classList.contains("navMenuContainer_visible")) {
    navbarToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navbarToggle.setAttribute("aria-label", "Abrir menú");
  }
});



function closeMenu() {
  nav.classList.remove("open");
}
navbarToggle.addEventListener("click", () => {
  if (!nav.classList.contains("open")) {
      nav.classList.add("open");
  } else {
      closeMenu();
  }
});
/*
navToggle.addEventListener("click", () => {
  socialMedia.classList.toggle("nav-menu_visible");
});*/




/*NEW CODE*/



