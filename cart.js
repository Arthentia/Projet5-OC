
let totalcart = 0;
let cart = document.querySelector('cart');
let form = document.querySelector('form');



form.addEventListener("submit", function(e){
    let quantite = form.elements.quantite.value;
    
    if (quantite > 0){
        totalcart = totalcart + parseInt(quantite);
    }
    else{
        totalcart = totalcart;
    }
    e.preventDefault();
    console.log(totalcart);
    document.getElementById('cart').innerText = totalcart;
    window.localStorage.getItem('totalcart');

});

function incrementValue(){
    let quantite = parseInt(document.getElementById('quantite').value);
    quantite++;
    console.log("qty " + quantite)
    document.getElementById('quantite').value = quantite;
}

function decrementValue(){
    let quantite = parseInt(document.getElementById('quantite').value);
    quantite--;
    console.log("qty " + quantite)
    document.getElementById('quantite').value = quantite;
}

