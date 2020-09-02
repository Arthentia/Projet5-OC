
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

if (cartNumbers) {
    productnumber.innerText = localStorage.getItem("cartNumbers");
} else {
    productnumber.innerText = "0";
}

let myForm = {
    "contact": {
        "firstName": "string",
        "lastName": "string",
        "address": "string",
        "city": "string",
        "email": "string"
    },
    "products": ["5be9c8541c9d440000665243", "5beaa8bf1c9d440000a57d94"]
}
function order() {


    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myForm)
    }

    fetch("http://localhost:3000/api/teddies/order", requestOptions)
        .then(response => response.json())
        .then(orders => {
            console.log(orders);
            console.log(orders.orderId)

            localStorage.setItem("orderID", JSON.stringify(orders.orderId));
            document.location = 'order.html';
        });


}


// Affichage du panier

function displayCart() {

    if (cartItems && items) {
        items.innerHTML = '';
        Object.values(cartItems).forEach(item => {

            items.innerHTML += '';
            console.log(item.name);
            items.innerHTML += `
                                <div class="product">
                                <input type = "button" id="deletebtn" onclick = "deleted()" value = "x"></input>
                                <img src = "${item.imageUrl}">
                                    ${item.name}     
                                </div>
                                
                                <div class="prix">
                               ${item.price / 100},00€
                                </div>
                                <div class="quantite">
                                <input type="button" class="button-minus" onclick="decrementValue()" value="-"></input>
                                ${item.inCart}
                                <input type="button" class="button-plus"  value="+"></input>
                                </div>
                                <div class="total">
                                ${item.inCart * (item.price / 100)},00 €
                                </div>
                `
            totalCost.innerHTML = "Panier total: " + localStorage.getItem("totalCost") + "€";

        })
    }
}



// let btnmoins = document.getElementsByClassName("button-minus");

// btnmoins[0].addEventListener('click', decrementValue, true);

// function decrementValue(item) {
//     console.log("ok")
//     item.inCart -= 1;
// }

// document.getElementsByClassName("btnmoins").addEventListener("click", function (e) {
//     console.log("ok")

// });


// onclick="decrementValue()
{/* <input type = "button" id="deletebtn" onclick = "deleted()" value = "x"></input> */ }

function verif() {
    if (!lastName.value || !firstName.value || !address.value || !mail.value || !city.value || cartItems == null) {
        console.log("invalide")
    } else {
        localStorage.setItem("lastName", lastName.value)
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("address", address.value)
        localStorage.setItem("mail", mail.value)
        localStorage.setItem("city", city.value)
        order();

    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    verif();

})



displayCart()

