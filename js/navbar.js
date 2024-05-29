"use strict"

function checkScreenWidth() {
  if (window.matchMedia("(min-width: 820px)").matches) {
    window.addEventListener('scroll', handleScrollLaptop);
    window.removeEventListener('scroll', handleScrollMobile);
  } else if (window.matchMedia("(max-width: 821px)").matches) {
    window.addEventListener('scroll', handleScrollMobile);
    window.removeEventListener('scroll', handleScrollLaptop);
  }
}

// Function til farven på navigationsbar ved scrool på laptop
function handleScrollLaptop() {
  const nav = document.querySelector("header");
  const logo = document.getElementById("logo-nav");
  let threshold = 80;

  if (window.pageYOffset > threshold) {
    nav.style.backgroundColor = "#fdf2e0";
    logo.style.height = "65px";
  } else {
    nav.style.backgroundColor = 'transparent';
    logo.style.height = "100px";
  }
}

// Function til farven på navigationsbar ved scrool på mobil
function handleScrollMobile() {
  const nav = document.querySelector("header");
  const logo = document.getElementById("logo-nav");
  let threshold = 40;

  if (window.pageYOffset > threshold) {
    nav.style.backgroundColor = "#fdf2e0";
  } else {
    nav.style.backgroundColor = 'transparent';
  }
}

// Initial check
checkScreenWidth();

// Recheck when window is resized
window.addEventListener('resize', checkScreenWidth);