console.log("Testing again");

fetch('http://localhost:3000/api/products')
.then(response => response.json())
.then(jsonResponse => createProductCards(jsonResponse));

// let itemsElement = document.getElementById('items');
// console.log(itemsElement.childNodes);
// itemsElement.remove();


function createProductCards(productCards){
    console.log('Inside product cards');
    console.log(productCards);
    // Finish this function
}