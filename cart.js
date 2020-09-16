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
let productscontainer = document.getElementById("products-container")


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
                                <div class="product"><input type = "button" id="deletebtn" value = "x"></input><img src = "${item.imageUrl}">${item.name}</div>
                                
                                <div class="prix">${item.price / 100},00€</div>
                                
                                <div class="quantite">
                                <input type="button" class="button-minus"  value="-"></input>
                                <div class="quantite_unit">${item.inCart}</div>
                                <input type="button" class="button-plus"  value="+"></input>
                                </div>
                                <div class="total">
                                ${item.inCart * (item.price / 100)},00 €
                                </div>
                              </div>
                `
            totalCost.innerHTML = "Panier total: " + localStorage.getItem("totalCost") + "€";

        })
    }
}

displayCart()
buttons()

// function UpdateCart(Element) {
//     cartNumbers = localStorage.getItem("cartNumbers") - (Element.inCart);
//     localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
//     productnumber.innerHTML = cartNumbers;
//     delete Element;
//     localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
//     displayCartNumbers()
// }

function buttons() {
    let removeCartItemButtons = document.querySelectorAll("#deletebtn");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem);

    }

    function removeCartItem(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
        let productElt = buttonClicked.nextSibling.nextSibling;
        console.log(productElt);

        if (productElt.textContent == 'Arnold') {
            // UpdateCart(cartItems.Arnold)
            cartNumbers = localStorage.getItem("cartNumbers") - (cartItems.Arnold.inCart);
            localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
            productnumber.innerHTML = cartNumbers;
            delete cartItems.Arnold
        }
        if (productElt.textContent == 'Lenny and Carl') {
            cartNumbers = localStorage.getItem("cartNumbers") - (cartItems['Lenny and Carl'].inCart);
            localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
            productnumber.innerHTML = cartNumbers;
            delete cartItems['Lenny and Carl'];
        }
        if (productElt.textContent == 'Norbert') {
            cartNumbers = localStorage.getItem("cartNumbers") - (cartItems.Norbert.inCart);
            localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
            productnumber.innerHTML = cartNumbers;
            delete cartItems.Norbert;
        }
        if (productElt.textContent == 'Gustav') {
            cartNumbers = localStorage.getItem("cartNumbers") - (cartItems.Gustav.inCart);
            localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
            productnumber.innerHTML = cartNumbers;
            delete cartItems.Gustav;
        }
        if (productElt.textContent == 'Garfunkel') {
            cartNumbers = localStorage.getItem("cartNumbers") - (cartItems.Garfunkel.inCart);
            localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers))
            productnumber.innerHTML = cartNumbers;
            delete cartItems.Garfunkel;
        }
        localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
        location.reload();
        displayCartNumbers()
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

        if (productElt.textContent == 'Arnold') {
            cartItems.Arnold.inCart++
            quantite_unit.innerHTML = cartItems.Arnold.inCart


        }
        if (productElt.textContent == 'Lenny and Carl') {
            cartItems['Lenny and Carl'].inCart++
            quantite_unit.innerHTML = cartItems['Lenny and Carl'].inCart

        }
        if (productElt.textContent == 'Norbert') {
            cartItems.Norbert.inCart++
            quantite_unit.innerHTML = cartItems.Norbert.inCart
        }
        if (productElt.textContent == 'Gustav') {
            cartItems.Gustav.inCart++
            quantite_unit.innerHTML = cartItems.Gustav.inCart
        }
        if (productElt.textContent == 'Garfunkel') {
            cartItems.Garfunkel.inCart++
            quantite_unit.innerHTML = cartItems.Garfunkel.inCart
        }

        let plus = true
        UpdateCartNumbers(plus)

    }

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
        productnumber.innerHTML = localStorage.getItem("cartNumbers");
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

        if (productElt.textContent == 'Arnold') {
            if (cartItems.Arnold.inCart == 1) {
                delete cartItems.Arnold
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                location.reload();
                UpdateCartNumbers()
            }
            else {
                cartItems.Arnold.inCart--
                quantite_unit.innerHTML = cartItems.Arnold.inCart
                UpdateCartNumbers()
            }
        }
        if (productElt.textContent == 'Lenny and Carl') {
            if (cartItems['Lenny and Carl'].inCart == 1) {
                delete cartItems['Lenny and Carl']
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                location.reload();
                UpdateCartNumbers()
            }
            else {
                cartItems['Lenny and Carl'].inCart--
                quantite_unit.innerHTML = cartItems['Lenny and Carl'].inCart
                UpdateCartNumbers()
            }
        }
        if (productElt.textContent == 'Norbert') {
            if (cartItems.Norbert.inCart == 1) {
                delete cartItems.Norbert
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                location.reload();
                UpdateCartNumbers()
            }
            else {
                cartItems.Norbert.inCart--
                quantite_unit.innerHTML = cartItems.Norbert.inCart
                UpdateCartNumbers()
            }
        }
        if (productElt.textContent == 'Gustav') {
            if (cartItems.Gustav.inCart == 1) {
                delete cartItems.Gustav
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                location.reload();
                UpdateCartNumbers()
            }
            else {
                cartItems.Gustav.inCart--
                quantite_unit.innerHTML = cartItems.Gustav.inCart
                UpdateCartNumbers()
            }
        }
        if (productElt.textContent == 'Garfunkel') {
            if (cartItems.Garfunkel.inCart == 1) {
                delete cartItems.Garfunkel
                localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
                location.reload();
                UpdateCartNumbers()
            }
            else {
                cartItems.Garfunkel.inCart--
                quantite_unit.innerHTML = cartItems.Garfunkel.inCart
                UpdateCartNumbers()
            }
        }

        localStorage.setItem('itemsInCart', JSON.stringify(cartItems))

    }

}






//Vérification du formulaire
function verif() {
    if (!lastName.value || !firstName.value || !address.value || !mail.value || !city.value || cartItems == null) {
        console.log("invalide")
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
            "products": ["5be9c8541c9d440000665243", "5beaa8bf1c9d440000a57d94"]
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
            console.log(myForm)
            document.location = 'order.html';
        });

}



