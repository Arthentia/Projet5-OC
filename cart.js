
let productnumber = document.getElementById("productnumber");
let cartNumbers = localStorage.getItem("cartNumbers");
let items = document.querySelector(".products");
let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
let inCart = document.getElementById("inCart");
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


//Afficher 0 si le panier est vide
if (cartNumbers) {
    productnumber.innerHTML = localStorage.getItem("cartNumbers");
    empty.style.display = "none";

} else {
    productnumber.innerHTML = "0";
    empty.innerHTML = 'Votre panier est vide';
    form.style.display = "none";
    productscontainer.style.display = "none";
}







// Affichage du panier

function displayCart() {

    if (cartItems && items) {
        items.innerHTML = '';
        Object.values(cartItems).forEach(item => {
            console.log(item.inCart)
            items.innerHTML += '';
            items.innerHTML += `<div class="product_box">
                                <div class="product">
                                <input type = "button" id="deletebtn" value = "x"></input>
                                <img src = "${item.imageUrl}">
                                    ${item.name}     
                                </div>
                                
                                <div class="prix">
                               ${item.price / 100},00€
                                </div>
                                <div class="quantite">
                               
                                <input type="button" class="button-minus"  value="-"></input>
                                ${item.inCart}
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

function buttons() {
    let removeCartItemButtons = document.querySelectorAll("#deletebtn");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem);
        let newCart = cartItems.Norbert
    }
    function removeCartItem(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()

    }
    let btnmoins = document.querySelectorAll(".button-minus");
    for (let i = 0; i < btnmoins.length; i++) {
        let button = btnmoins[i];
        button.addEventListener('click', decrementValue);
    }
    function decrementValue() {
        Object.values(cartItems).forEach(item => {
            item.inCart--;
            console.log(item.inCart)
            quantite = document.getElementsByClassName('quantite')
            quantite.innerHTML += item.inCart;
        })
    }
}

console.log(cartItems[1])
// let removed = itemsInCart.splice(1, 1);
console.log(typeof cartItems)
console.log(cartItems.Norbert)

function test() {
    for (let i = 0; i <= cartNumbers.length; i++) {
    }
}
test()


// let btnmoins = document.querySelectorAll(".button-minus");

// btnmoins[0].addEventListener('click', decrementValue);

// function decrementValue(item) {
//     console.log("ok")
//     item.inCart = 0
// }
// console.log(btnmoins[0]);

// let btnplus = document.querySelectorAll(".button-plus");
// btnplus[0].addEventListener('click', increaseValue())
// function increaseValue() {
//     item.inCart++;
// }


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
            // document.location = 'order.html';
        });

}



