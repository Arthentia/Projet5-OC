let content = document.getElementById("produits");
let productnumber = document.getElementById("productnumber");
productnumber.innerHTML = localStorage.getItem("cartNumbers");
let cartNumbers = localStorage.getItem("cartNumbers");




fetch("http://localhost:3000/api/teddies/")
  .then(response => response.json())
  .then(teddies => {
    teddies.forEach(teddy => {
      let img = document.createElement("img");
      img.src = teddy.imageUrl;
      img.style.height = "200px";
      img.style.width = "250px";
      content.appendChild(img);
      content.innerHTML += `<a href="ours.html?id=${teddy._id}">${teddy.name}</a>
        <p>Prix: ${teddy.price / 100},00 €</p>`
    });

  });


if (cartNumbers) {
  productnumber.innerText = localStorage.getItem("cartNumbers");
} else {
  productnumber.innerText = "0";
}