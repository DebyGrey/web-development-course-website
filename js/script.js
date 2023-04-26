// Hamburger open/close
// get the hamburger element
const hamburger = document.querySelector('#hamburger');
// get the close-btn element
const closeBtn = document.querySelector('#close-hamburger');
// get the menu-item elements
// const links = document.querySelectorAll('.menu-item a');
// get the mobile menu container element
const mobileMenu = document.querySelector('.mobile-menu');

// toggle visibility function for nav menu
function toggleNavMenu() {
  mobileMenu.classList.toggle('show-menu');
}

// open mobile nav container
if (hamburger) {
  hamburger.addEventListener('click', toggleNavMenu);
}
// close mobile nav container
if (closeBtn) {
  closeBtn.addEventListener('click', toggleNavMenu);
}
