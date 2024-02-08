// PRODUKTLISTE INSPO KODE - VED IKKE OM DET ER SÅDAN?

let katTemplate;
let katContainer;

katContainer = document.querySelector(".katContainer");
console.log("katContainer", katContainer);

katTemplate = document.querySelector(".katTemplate");
console.log("katTemplate", katTemplate);

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    showProduct(json);
  });

function showProduct(kategoriJSON) {
  let kateClone;

  kategoriJSON.forEach((kategori) => {
    console.log("kategori", kategori);

    kateClone = katTemplate.cloneNode(true).content;

    kateClone.querySelector("a").textContent = kategori.category;
    kateClone.querySelector("a").href = "produktliste.html?kat=" + kategori.category;

    katContainer.appendChild(kateClone);
  });
}

// tidligere kode

//   document.querySelector("toej").textContent = info.Apparel;
//   document.querySelector("tilbehoer").textContent = info.Accessories;

// // document.querySelector(".kategoriliste").textContent = info.Apparel;
//   document.querySelector(".kategoriliste").textContent = info.Apparel;
