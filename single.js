const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.log(data);
  document.querySelector("h2").textContent = data.productdisplayname;
}
