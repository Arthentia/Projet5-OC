
let totalcart = 0;
let cart = document.querySelector('cart');
let form = document.getElementById('cartform');



form.addEventListener("submit", function (e) {
    let quantite = form.elements.quantite.value;

    if (quantite > 0) {
        totalcart = totalcart + parseInt(quantite);
    }
    else {
        totalcart = totalcart;
    }
    e.preventDefault();
    console.log("total cart = " + totalcart);
    document.getElementById('cart').innerText = totalcart;
    cartNumbers();
});

function incrementValue() {
    let quantite = parseInt(document.getElementById('quantite').value);
    quantite++;
    console.log("qty " + quantite)
    document.getElementById('quantite').value = quantite;
}

function decrementValue() {
    let quantite = parseInt(document.getElementById('quantite').value);
    quantite--;
    console.log("qty " + quantite)
    document.getElementById('quantite').value = quantite;

}


function cartNumbers() {
    localStorage.setItem('cartNumbers', totalcart)

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.getElementById('cart').textContent = productNumbers;
    }
    productNumbers = parseInt(productNumbers);

    if (productNumbers > 0) {
        totalcart = productNumbers + totalcart;
    }
}

onLoadCartNumbers()