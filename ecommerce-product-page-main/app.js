"use strict";
import { openCart, showCart } from "./logica-js/carrito.js";
import { showSlides, openCompletePhoto } from "./logica-js/sliders.js";

/*Algo global*/
const body = document.getElementById("body");
/*---------------------------*/

// Slider Logica
showSlides();
openCompletePhoto();

// Variables carrito
openCart();
showCart();

/*Menu responsive*/
const hamburgerMenu = document.getElementById("hamburger__menu");
const submenu = document.querySelector(".container__submenu");
const closeMenuIcon = document.querySelector(".container__submenu svg");

const openMenu = () => {
  hamburgerMenu.addEventListener("click", () => {
    submenu.classList.add("show__menu");
    overlay.classList.add("overlay");
    body.classList.add("body");
  });
};

const closeMenu = () => {
  closeMenuIcon.addEventListener("click", () => {
    submenu.classList.remove("show__menu");
    overlay.classList.remove("overlay");
    body.classList.remove("body");
  });

  overlay.addEventListener("click", () => {
    submenu.classList.remove("show__menu");
    overlay.classList.remove("overlay");
    body.classList.remove("body");
  });
};

openMenu();
closeMenu();
