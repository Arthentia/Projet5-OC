
let totalcart = 0;
let cart = document.querySelector('productnumber');
let form = document.getElementById('cartform');
let totalprice = document.getElementById('prixtotal');
let inCart = 0;


fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(norbert => {
        console.log(norbert.price);

        let myPrice = document.createElement('p');
        myPrice.innerHTML = `${norbert.price} €`;
        totalprice.appendChild(myPrice);
        totalprice = JSON.stringify(totalprice);
        totalprice = parseInt(totalprice);
        console.log(totalprice);
        console.log(typeof totalprice);
        totalcost(totalprice);


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
            document.getElementById('productnumber').innerText = totalcart;
            cartNumbers();
            setItems(norbert);
        });
    });



function setItems(norbert) {
    console.log("My product is", norbert);

    let cartItems = localStorage.setItem("itemsinCart", JSON.stringify(norbert));
    if (cartItems != null) {
        cartItems[norbert.name].inCart += 1;
    } else {
        norbert.inCart = 1;
        cartItems = {
            [norbert.name]: norbert
        }
    }

}



function totalcost(quantite, totalprice) {
    console.log(typeof quantite);
    console.log(typeof totalprice);
}



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
        document.getElementById('productnumber').textContent = productNumbers;
    }
    productNumbers = parseInt(productNumbers);

    if (productNumbers > 0) {
        totalcart = productNumbers + totalcart;
    }
}

onLoadCartNumbers()