let content = document.getElementById("produits");
let productnumber = document.getElementById("productnumber");
productnumber.innerHTML = localStorage.getItem("cartNumbers");
let cartNumbers = localStorage.getItem("cartNumbers");
let testcontent = document.getElementsByClassName("testcontent")

fetch("http://localhost:3000/api/teddies/")
  .then(response => response.json())
  .then(teddies => {
    teddies.forEach(teddy => {
      content.innerHTML += `<div class="ours">${teddy.name}<a href="ours.html?id=${teddy._id}"><img src = "${teddy.imageUrl}"></a>
        <p>Prix: ${teddy.price / 100},00 €</p></div>`
    });

  });

//Afficher 0 si le panier est vide
if (cartNumbers) {
  productnumber.innerText = localStorage.getItem("cartNumbers");
} else {
  productnumber.innerText = "0";
}