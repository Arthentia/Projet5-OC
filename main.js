let oursobj = {
    id:1,
    name: 'Ours en peluche',
    price:24,
    description:'description',
    imageUrl:'images/teddy_1.jpg'
};
  document.querySelector('#ours').innerText = `Nom: ${oursobj.name}
  Prix: ${oursobj.price} €`;