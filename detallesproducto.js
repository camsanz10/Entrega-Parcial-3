function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderProductDetail() {
    
    const productName = getQueryParam("name");

    const product = data.find(item => item.title === productName);

    const productDetailContainer = document.getElementById("product-detail");

    if (product) {
        productDetailContainer.innerHTML = `
            <h1>${product.title}</h1>
            <img src="${product.images[0]}" alt="${product.title}" />
            <p>${product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Disponibilidad:</strong> ${product.availability}</p>
            <p><strong>Tipo de piel:</strong> ${product.skinType}</p>
            <button onclick="window.history.back()">Volver a la tienda</button>
        `;
    } else {
        productDetailContainer.innerHTML = "<p>Producto no encontrado.</p>";
    }
}

renderProductDetail();
