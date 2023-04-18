import { clientServices } from "../services/client-services.js";

const cargarProductosEnJSON = (nombre, imagen, precio, id) => {
    const contenedorTipoTarjeta = document.createElement ("div");
    contenedorTipoTarjeta.setAttribute ("class", "d-flex flex-column py-3 gap-2")
    const contenido =
    `
        <img style="height: 174px; width: 176px;" src="${imagen}">
        <span style="font-weight: 500; outline-color: #464646; font-size: 14px;">${nombre}</span>
        <span style="font-weight: 700; outline-color: #464646; font-size: 16px;">${precio}</span>
        <a style="font-weight: 700;" class="text-decoration-none" href=""../productos.html?id=${id}">Ver Producto</a>
    `;
    contenedorTipoTarjeta.innerHTML = contenido;
    return contenedorTipoTarjeta;

};

const contenedorProductosHijo = document.querySelector ("[data-producto]");

clientServices.listaProductos().then((data) =>{

    data.forEach (productos => {

        const productosCargados = cargarProductosEnJSON(productos.nombre, productos.imagen, productos.precio, productos.id);
        contenedorProductosHijo.appendChild (productosCargados);
    
    });

}).catch((error) => alert ("Ha ocurrido un error al cargar el JSON. Contacte al administrador de esta pagina."));