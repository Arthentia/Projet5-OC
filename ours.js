
let myImg = document.getElementById("img");
let nom = document.getElementById('nom');
let prix = document.getElementById('prix');
let url = window.location.href;
let urlObject = new URL(url);
let id = urlObject.searchParams.get('id');
console.log(id);


fetch("http://localhost:3000/api/teddies/" + id)
  .then(response => response.json())
  .then(norbert => {
    console.log(norbert);
    let img = document.createElement("img");
    img.src = norbert.imageUrl;
    img.style.height = "200px";
    img.style.width = "250px";
    myImg.appendChild(img);

    let myName = document.createElement('h1');
    myName.textContent = norbert.name;
    nom.appendChild(myName);

    let myPrice = document.createElement('p');
    myPrice.innerHTML = `${norbert.price} €`;
    prix.appendChild(myPrice);

    remplissage(norbert);
  });



function remplissage(jsonObj) {
  let myColor = document.createElement('p');
  let couleurs = jsonObj['colors'];
  console.log(couleurs);
  remplissageCouleur(couleurs);
}

function creerElementOption(texte, valeur) {
  var element = document.createElement("option");
  element.textContent = texte;
  element.value = valeur;
  return element;
}

// //obtenir couleur choisie
// document.getElementById("colorForm").addEventListener("change", function (e) {
//   console.log("Couleur choisie:" + e.target.value);
// })

// Remplit la liste déroulante des couleurs
function remplissageCouleur(couleurs) {
  var couleurElt = document.querySelector("select");
  couleurs.forEach(function (couleurs) {
    couleurElt.appendChild(creerElementOption(couleurs));
  });
}



