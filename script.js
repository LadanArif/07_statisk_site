window.addEventListener("DOMContentLoaded", init);

const modeURL = "https://kea-alt-del.dk/t7/api/products";

let modeTemplate;
let modeContainer;

function init() {
  console.log("init");

  modeTemplate = document.querySelector(".mode_template");
  console.log("mode_template", modeTemplate);

  modeContainer = document.querySelector(".mode_container");
  console.log("mode_container", modeContainer);

  fetch(modeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProduct(json);
    });
}

function showProduct(beerJSON) {
  let productClone;

  beerJSON.forEach((product) => {
    console.log("product", product);
    productClone = modeTemplate.cloneNode(true).content;
    productClone.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    productClone.querySelector(".product_image").alt = `Picture of ${product.name} clothes`;
    productClone.querySelector(".produkt_titel").textContent = product.productdisplayname;
    productClone.querySelector(".mode_pris").textContent = product.price;
    modeContainer.appendChild(productClone);
  });
}
