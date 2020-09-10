
let totalcart = 0;
let form = document.getElementById('cartform');
let inCart = 0;



fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(norbert => {
        let myPrice = document.createElement('p');
        myPrice.innerHTML = `${norbert.price / 100}€`;
        myPrice = parseInt(myPrice);

        form.addEventListener("submit", function (e) {
            let quantite = parseInt(form.elements.quantite.value);

            if (quantite > 0) {
                totalcart = totalcart + quantite;
            }
            else {
                totalcart = totalcart;
            }
            e.preventDefault();
            document.getElementById('productnumber').innerText = totalcart;
            cartNumbers();
            norbert.inCart = quantite;
            setItems(norbert, quantite);
            totalCost(norbert);

        });
    });


//Calcul du prix total du panier
function totalCost(norbert) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + ((norbert.price) / 100));
    } else {
        localStorage.setItem("totalCost", (norbert.price) / 100);
    }

}

//Choisir la quantité à ajouter
function setItems(norbert, quantite) {

    let cartItems = localStorage.getItem("itemsInCart");
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        if (cartItems[norbert.name] == undefined) {
            cartItems = {
                ...cartItems,
                [norbert.name]: norbert,
            }

        } else {
            cartItems[norbert.name].inCart += quantite;

        }
    }
    else {
        norbert.inCart = quantite;

        cartItems = {
            [norbert.name]: norbert
        }
    }
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
    localStorage.setItem("inCart", cartItems[norbert.name].inCart);
}






//Bouton +
function incrementValue() {
    let quantite = parseInt(document.getElementById('quantite').value);
    quantite++;
    console.log("qty " + quantite);
    document.getElementById('quantite').value = quantite;
}

//Bouton -
function decrementValue() {
    let quantite = parseInt(document.getElementById('quantite').value);
    quantite--;
    if (quantite < 0) {
        quantite = 0;
    }
    document.getElementById('quantite').value = quantite;

}


function cartNumbers() {
    localStorage.setItem('cartNumbers', totalcart);
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.getElementById('productnumber').textContent = productNumbers;
    }
    productNumbers = parseInt(productNumbers);

    if (productNumbers > 0) {
        totalcart = productNumbers + totalcart;
    }


}

onLoadCartNumbers()