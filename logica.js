let products = []
function parseDataToProducts() {
    console.log(data)
    for(let i = 0; i < data.length; i++) {
        let map= data [i]
        console.log (map)
        let product = new Product(map["title"], map["price"], map["description"], map["images"], map["size"])
        products.push(product)
    }
}

function renderAllProducts () {
    let container = document.getElementById("products")
    console.log(products)
    for(let i = 0; i < products.length; i++) {
        let product = products [i]
        console.log(product)
        container.innerHTML += product.htmlCard(i)
    }
}

function productSelected (pos) {
    let productSelected = products [pos]
    window.location = "./detallesproducto.html?name=" + productSelected.title
}

parseDataToProducts()
renderAllProducts()