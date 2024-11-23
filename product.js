class Product {
    constructor (title, price, description, images) {
    this.title = title
    this.price = price
    this.description = description
    this.images = images
}

htmlCard (pos) {
    return `
         <div class="product-card" onclick='productSelected(${pos})'>
                     <img src="${this.images[0]}" alt="Skin Care">
                     <h3>${this.title}</h3>
                     <p>${this.description}</p>
                     <p class="price">${this.price}</p>
                     <button>Añadir al carrito</button>
                </div>
        
        `
    }
}