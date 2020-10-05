let cartNumbers = localStorage.getItem("cartNumbers");
let items = document.querySelector(".products");
let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
let email = document.getElementById("mail").value;
let totalCost = document.getElementById("totalCost");
let form = document.getElementById("pay_form");
let lastName = document.getElementById("lastName");
let mail = document.getElementById("mail");
let firstName = document.getElementById("firstName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let empty = document.getElementById("empty");
let productscontainer = document.getElementById("products-container");
let totalCostUpdated = parseInt(localStorage.getItem("totalCost"))


//Effacer page panier si celui-ci est vide
function displayCartNumbers() {
    if (cartNumbers == "0" || cartNumbers == null) {
        productnumber.innerHTML = "0";
        empty.innerHTML = 'Votre panier est vide';
        form.style.display = "none";
        productscontainer.style.display = "none";

    }
    else {
        productnumber.innerHTML = localStorage.getItem("cartNumbers");
        empty.style.display = "none";
    }
}
displayCartNumbers()




// Affichage du panier

function displayCart() {

    if (cartItems && items) {
        items.innerHTML = '';
        Object.values(cartItems).forEach(item => {
            items.innerHTML += '';
            items.innerHTML += `<div class="product_box">
                                <div class="product"><input type = "button" class="deletebtn" value = "x"><img src = "${item.imageUrl}">${item.name}</div>
                                
                                <div class="prix">${item.price / 100},00 €</div>
                                
                                <div class="quantite">
                                <input type="button" class="button-minus"  value="-">
                                <div class="quantite_unit">${item.inCart}</div>
                                <input type="button" class="button-plus"  value="+">
                                </div>
                                <div class="total">
                                ${item.inCart * (item.price / 100)},00 €
                                </div>
                              </div>
                `
            totalCost.innerHTML = "Panier total: " + localStorage.getItem("totalCost") + " €";

        })
    }
}

displayCart()
buttons()


// Obtenir la taille du panier
Object.size = function (cartItems) {
    let cart_size = 0, key;
    for (key in cartItems) {
        if (cartItems.hasOwnProperty(key)) cart_size++;
    }
    return cart_size;
};
let cart_size = Object.size(cartItems);




function buttons() {
    let removeCartItemButtons = document.querySelectorAll(".deletebtn");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem);

    }

    function removeCartItem(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
        let productElt = buttonClicked.nextSibling.nextSibling;

        for (let i = 0; i <= cart_size - 1; i++) {
            if (productElt.textContent == cartItems[Object.keys(cartItems)[i]].name) {
                totalCostUpdated -= (cartItems[Object.keys(cartItems)[i]].price / 100) * cartItems[Object.keys(cartItems)[i]].inCart
                localStorage.setItem("totalCost", totalCostUpdated)
                totalCost.innerHTML = "Panier total: " + localStorage.getItem("totalCost") + " €";
                cartNumbers = localStorage.getItem("cartNumbers") - (cartItems[Object.keys(cartItems)[i]].inCart);
                localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
                productnumber.innerHTML = cartNumbers;
                delete cartItems[Object.keys(cartItems)[i]]
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                cart_size--
                AddID();

            }
        }

        if (cart_size == 0) {
            location.reload();
            displayCartNumbers()
        }

    }


    let btnplus = document.querySelectorAll(".button-plus");
    for (let i = 0; i < btnplus.length; i++) {
        let button = btnplus[i];
        button.addEventListener('click', incrementValue);
    }

    function incrementValue(event) {
        let buttonClicked = event.target
        let quantite_unit = buttonClicked.previousSibling.previousSibling
        let productElt = buttonClicked.parentElement.previousSibling.previousSibling.previousSibling.previousSibling
        let total_unit = buttonClicked.parentElement.nextSibling.nextSibling

        for (let i = 0; i <= cart_size - 1; i++) {
            if (productElt.textContent == cartItems[Object.keys(cartItems)[i]].name) {
                cartItems[Object.keys(cartItems)[i]].inCart++
                quantite_unit.innerHTML = cartItems[Object.keys(cartItems)[i]].inCart
                total_unit.innerHTML = (cartItems[Object.keys(cartItems)[i]].inCart * cartItems[Object.keys(cartItems)[i]].price) / 100 + ',00 €'
                totalCostUpdated += (cartItems[Object.keys(cartItems)[i]].price / 100)
                localStorage.setItem("totalCost", totalCostUpdated)
                AddID();
            }
        }

        let plus = true
        UpdateCartNumbers(plus)

    }

    let btnmoins = document.querySelectorAll(".button-minus");
    for (let i = 0; i < btnmoins.length; i++) {
        let button = btnmoins[i];
        button.addEventListener('click', decrementValue);
    }
    function decrementValue(event) {
        let buttonClicked = event.target
        let quantite_unit = buttonClicked.nextSibling.nextSibling
        let productElt = buttonClicked.parentElement.previousSibling.previousSibling.previousSibling.previousSibling
        let total_unit = buttonClicked.parentElement.nextSibling.nextSibling


        for (let i = 0; i <= cart_size - 1; i++) {

            if (cartItems[Object.keys(cartItems)[i]].inCart == 1) {
                totalCostUpdated -= (cartItems[Object.keys(cartItems)[i]].price / 100)
                localStorage.setItem("totalCost", totalCostUpdated)
                cartNumbers = localStorage.getItem("cartNumbers") - (cartItems[Object.keys(cartItems)[i]].inCart);
                localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
                productnumber.innerHTML = cartNumbers;
                delete cartItems[Object.keys(cartItems)[i]]
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                location.reload();
                AddID();
            }
            if (productElt.textContent == cartItems[Object.keys(cartItems)[i]].name) {
                cartItems[Object.keys(cartItems)[i]].inCart--
                quantite_unit.innerHTML = cartItems[Object.keys(cartItems)[i]].inCart
                total_unit.innerHTML = (cartItems[Object.keys(cartItems)[i]].inCart * cartItems[Object.keys(cartItems)[i]].price) / 100 + ',00 €'
                totalCostUpdated -= (cartItems[Object.keys(cartItems)[i]].price / 100)
                localStorage.setItem("totalCost", totalCostUpdated)
                UpdateCartNumbers()
                AddID();
            }


        }
        localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
    }

}

//Mise à jour du nombre total d'items dans le panier
function UpdateCartNumbers(plus) {
    localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
    cartNumbers = parseInt(cartNumbers)

    //Vérifie si le bouton cliqué est le bouton + ou -
    if (plus == true) {
        cartNumbers++
    }
    else {
        cartNumbers--
    }
    localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers));
    totalCost.innerHTML = "Panier total: " + localStorage.getItem("totalCost") + " €";
    productnumber.innerHTML = localStorage.getItem("cartNumbers");
}

//Ajouter les ID des produits dans un tableau
let products = []
function AddID() {
    products = []
    for (i = 0; i < cart_size; i++) {
        if (cartItems[Object.keys(cartItems)[i]].inCart > 1) {
            for (j = 0; j < cartItems[Object.keys(cartItems)[i]].inCart - 1; j++) {
                products.push(cartItems[Object.keys(cartItems)[i]]._id)
            }
        }
        products.push(cartItems[Object.keys(cartItems)[i]]._id)
    }
}
AddID()

//Vérification du formulaire
function verif() {
    if (!lastName.value || !firstName.value || !address.value || !mail.value || !city.value || cartItems == null) {
    } else {

        localStorage.setItem("lastName", lastName.value)
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("address", address.value)
        localStorage.setItem("mail", mail.value)
        localStorage.setItem("city", city.value);

        let myForm = {
            "contact": {
                "firstName": firstName.value,
                "lastName": lastName.value,
                "address": address.value,
                "city": city.value,
                "email": mail.value
            },
            products
        }
        order(myForm);
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    verif();
})

//Envoie du formulaire et des ID produits
function order(myForm) {

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myForm)
    }

    fetch("http://localhost:3000/api/teddies/order", requestOptions)
        .then(response => response.json())
        .then(orders => {

            localStorage.setItem("orderID", JSON.stringify(orders.orderId));
            document.location = 'order.html';
        });

}



