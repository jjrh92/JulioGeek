const nuevoProducto = (nombre, imagen, precio, id) => {

    const card = document.createElement ("div");
    const contenido = 
    `
        <div id="contenedorTipoTarjeta" class="d-flex flex-column gap-1">
            <img style="height: 174px; width: 176px;" src="${imagen}">
            <span style="font-weight: 500; outline-color: #464646; font-size: 14px;">${nombre}</span>
            <span style="font-weight: 700; outline-color: #464646; font-size: 16px;">${precio}</span>
            <a style="font-weight: 700;" class="text-decoration-none" href="../productos.html?id=${id}">Ver Producto</a>
        </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;


}

const productos = document.querySelector ("[data-producto]")