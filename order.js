let orderNumber = document.getElementById("orderId");
orderNumber.innerHTML = 'Numéro de commande: ' + localStorage.getItem("orderID");
let lastName = document.getElementById("lastName");
lastName.innerHTML = 'Nom: ' + localStorage.getItem("lastName");
let firstName = document.getElementById("firstName");
firstName.innerHTML = 'Prénom: ' + localStorage.getItem("firstName");
let email = document.getElementById("email");
email.innerHTML = "Email: " + localStorage.getItem("mail");
let address = document.getElementById("address");
address.innerHTML = "Adresse: " + localStorage.getItem("address");
let city = document.getElementById("city");
city.innerHTML = "Ville: " + localStorage.getItem("city");
let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
let items_order = document.querySelector(".products_order");
let totalCost = document.getElementById("totalCost");
totalCost.innerHTML = "Panier total: " + localStorage.getItem("totalCost") + "€";

function displayCart() {

    if (cartItems && items_order) {
        items_order.innerHTML = '';
        Object.values(cartItems).forEach(item => {

            items_order.innerHTML += '';
            console.log(item.name);
            items_order.innerHTML += `
                                <div class="product_order">
                                <img src = "${item.imageUrl}">
                                    ${item.name}     
                                </div>
                                
                                <div class="prix_order">
                               ${item.price / 100},00€
                                </div>
                                <div class="quantite_order">
                                ${item.inCart}
                                </div>
                                <div class="total_order">
                                ${item.inCart * (item.price / 100)},00 €
                                </div>
                `


        })
    }
}

localStorage.clear();

displayCart();