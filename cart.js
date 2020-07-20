let productnumber = document.getElementById("productnumber");
productnumber.innerText = localStorage.getItem("cartNumbers");
let items = document.getElementById("items");
items.innerHTML = localStorage.getItem("itemsinCart");