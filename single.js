const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.log(data);
  document.querySelector("h2").textContent = data.productdisplayname;
  document.querySelector("p").textContent = data.price;
  document.querySelector("varetxt").textContent = data.articletype;
  document.querySelector("h3").textContent = data.productdisplayname;
  document.querySelector(".model").textContent = data.productdisplayname;
  document.querySelector(".id").textContent = data.id;
}

// virker ikkje for andre varer eller nike t shirt tekst på andre varer. men kun for den første t shirt
