

let url = "http://localhost:3000/api/teddies/5be9c8541c9d440000665243";
fetch (url).then(response => response.json()).then(products => console.log(products))


let requestURL = 'http://localhost:3000/api/teddies/5be9c8541c9d440000665243';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let nom = document.getElementById('nom');
let prix = document.getElementById('prix');
let couleur = document.getElementById('couleur');

request.onload = function(){
    let ours = request.response;
    Remplissage(ours);

}

function Remplissage(jsonObj) {
    let myName = document.createElement('h1');
    myName.textContent = jsonObj['name'];
    nom.appendChild(myName);

    let myPrice = document.createElement('p');
    myPrice.textContent = jsonObj ['price'];
    prix.appendChild(myPrice);

    let myColor = document.createElement('p');
    myColor.textContent = jsonObj ['colors'];
    couleur.appendChild(myColor);
    totalprix(myPrice);
  }

  document.getElementById("colorForm").addEventListener("change", function (e) {
    console.log("Couleur choisie:" + e.target.value);
});

function totalprix(myPrice){
  let prixtotal = parseInt(myPrice)*totalcart;
  console.log(prixtotal);

}

