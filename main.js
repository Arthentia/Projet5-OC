let content = document.getElementById("produits");




fetch("http://localhost:3000/api/teddies/")
  .then(response => response.json())
  .then(teddies => {
    console.log(teddies);
    teddies.forEach(teddy => {
      let img = document.createElement("img");
      img.src = teddy.imageUrl;
      img.style.height = "200px";
      img.style.width = "250px";
      content.appendChild(img);
      content.innerHTML += `<a href="ours.html?id=${teddy._id}">${teddy.name}</a>
        <p>Prix: ${teddy.price} €</p>`
    });

  });
