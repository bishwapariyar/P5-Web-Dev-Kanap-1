

fetch('http://localhost:3000/api/products')
.then(response => response.json())
.then(jsonResponse => createProductCards(jsonResponse));

let itemsElement = document.getElementById('items');


function createProductCards(productCards){
    console.log('Inside product cards');
    console.log(productCards);
    productCards.forEach(element => {
        console.log(element);
        let productCard = document.createElement('a');
        productCard.href = `./product.html?id=${element._id}`;
        let productArticle = document.createElement('article');
        let productImage = document.createElement ('img');
        productImage.src = element.imageUrl;
        let productName = document.createElement('h3');
        productName.className = "productName";
        productName.innerText = element.name;
        let productDescription = document.createElement('p');
        productDescription.innerText = element.description;
        productDescription.className = "productDescription";

        productCard.appendChild(productArticle);
        productArticle.appendChild(productImage);
        productArticle.appendChild(productName);
        productArticle.appendChild(productDescription);
        itemsElement.appendChild(productCard);
    })
}

