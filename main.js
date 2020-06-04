
// let oursobj = {
//     id:1,
//     name: 'Ours en peluche',
//     price:24,
//     description:'description',
//     imageUrl: 'images/teddy_1'
// };


// let cameraobj = {
//     id:2,
//     name: 'Caméra vintage',
//     price:24,
//     description:'description',
//     imageUrl:''
// };

// document.querySelector('#ours').innerText = `${oursobj.name}
//   Prix: ${oursobj.price} €`;


let url = "http://localhost:3000/api/cameras";
fetch (url).then(response => response.json()).then(products => console.log(products))

let url2 = "http://localhost:3000/api/teddies";
fetch (url2).then(response => response.json()).then(products => console.log(products))
