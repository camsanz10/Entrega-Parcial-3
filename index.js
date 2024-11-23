let products = [];

class Product {
    constructor(title, price, description, size, color, image) {
        this.Title = title;
        this.Price = price;
        this.description = description;
        this.Size = size;
        this.Image = image;
    }

    htmlCard(index) {
        return `
            <div class="product-card">
                <img src="${this.Image}" alt="${this.Title}">
                <h3>${this.Title}</h3>
                <p>${this.description}</p>
                <p class="price">${this.Price}</p>
                <button onclick="productselected(${index})">Añadir al carrito</button>
            </div>
        `;
    }
}

function parseDataToProducts() {
    const productsContainer = document.getElementById("products");

    if (!productsContainer) {
        console.error("Element with id 'products' not found.");
        return;
    }

    data.forEach((item, index) => {
        let product = new Product(
            item.Title,
            item.Price,
            item.description || item.Description,
            item.Size,
            item.Image
        );

        products.push(product);
        productsContainer.innerHTML += product.htmlCard(index);
    });
}

function filterProducts(searchTerm) {
    const productsContainer = document.getElementById("products");

    if (!productsContainer) {
        console.error("Element with id 'products' not found.");
        return;
    }

    const filtered = products.filter(product =>
        product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    productsContainer.innerHTML = "";
    filtered.forEach((product, index) => {
        productsContainer.innerHTML += product.htmlCard(index);
    });
}


function productselected(pos) {
    const selectedProduct = products[pos];
    window.location.href = `detallesproducto.html?name=${encodeURIComponent(selectedProduct.Title)}`;
}

document.addEventListener("DOMContentLoaded", function() {
    parseDataToProducts();
});