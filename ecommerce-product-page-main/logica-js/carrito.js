const cartIcon = document.getElementById("cartIcon");
const containerCart = document.querySelector(".container__cart");
const overlay = document.getElementById("overlay");
const minus = document.getElementById("minus");
const more = document.getElementById("more");
const quantity = document.getElementById("quantity");
const precio = document.getElementById("precio");
const trashIcon = document.getElementById("trash__icon");
const nombre = document.getElementsByTagName("h1");
const botonAgregar = document.getElementsByTagName("button");
const thumbnailSliderCart = document.querySelector(".thumbnail--slider img");
const containerCartContent = document.querySelector(
  ".container__cart--products"
);
const closeCartIcon = document.getElementById("close__cart");
let additionQuantity = 0;
let createTagProduct = ``;
// let productDetails = [];

const addProductToCart = (product) => {
  botonAgregar[0].addEventListener("click", () => {
    localStorage.setItem("orderCart", JSON.stringify(product));
    showCart();
  });
};

const quantityProduct = (number = 0) => {
  additionQuantity += number;

  if (additionQuantity <= 0) {
    additionQuantity = 0;
    minus.classList.add("limit");
  } else if (additionQuantity >= 10) {
    additionQuantity = 10;
    more.classList.add("limit");
  } else {
    minus.classList.remove("limit");
    more.classList.remove("limit");
  }

  quantity.textContent = additionQuantity;
  //Mala practica creo

  let productDetails = [
    {
      nombre: nombre[0].textContent,
      precio: precio.textContent,
      cantidad: additionQuantity,
      img: thumbnailSliderCart.getAttribute("src"),
    },
  ];

  if (additionQuantity > 0) {
    addProductToCart(productDetails);
  }
};

more.addEventListener("click", () => quantityProduct(1));
minus.addEventListener("click", () => quantityProduct(-1));

// Mostrar carrito
const showCart = () => {
  let items = JSON.parse(localStorage.getItem("orderCart"));
  if (items.length > 0) {
    items.forEach((item) => {
      createTagProduct = `
        <article class="container__cart--product">
        <div class="container__cart--img">
        <img src="${item.img}" alt="">
        </div>
        <div class="container__cart--content">
        <p>${item.nombre}</p>
        <p>$${item.precio} x ${item.cantidad}  <span>$${
        item.precio * item.cantidad
      }.00</span></p>
        </div>
        <svg width="14" height="16" id="trash__icon"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </article>`;
    });
  } else {
    createTagProduct = `<p class="message__cart--empty" >No hay elementos en el carrito :(</p>`;
  }
  containerCartContent.innerHTML = createTagProduct;
};

const deleteFromCart = () => {
  if (document.getElementById("trash__icon")) {
    document.getElementById("trash__icon").addEventListener("click", () => {
      localStorage.setItem("orderCart", JSON.stringify({}));
      showCart();
    });
  }
};

const openCart = () => {
  cartIcon.addEventListener("click", () => {
    containerCart.classList.add("show__cart");
    overlay.classList.add("overlay");
    body.classList.add("body");
    closeCart();
    deleteFromCart();
  });
};

const closeCart = () => {
  overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay");
    containerCart.classList.remove("show__cart");
    body.classList.remove("body");
  });

  closeCartIcon.addEventListener("click", () => {
    overlay.classList.remove("overlay");
    containerCart.classList.remove("show__cart");
    body.classList.remove("body");
  });
};

export { openCart, showCart };
