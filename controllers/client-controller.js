import { clientServices } from "../services/client-services.js";

const cargarProductosEnJSON = (nombre, imagen, precio, id) => {

    const contenedorTipoTarjeta = document.createElement ("div");
    contenedorTipoTarjeta.setAttribute ("class", "d-flex flex-column py-3 gap-2")
    const contenido =
    `
        <div class="d-flex gap-2 position-absolute">
        
            <a href="./editar-producto.html?id=${id}"><img id="main_boton_editar" title="Editar este Producto" style="height: 18px; width: 18px;" src="./assets/editar.svg" type="button"></a>

            <img id="${id}" class="boton_eliminar" title="Eliminar este Producto" style="height: 18px; width: 18px;" src="./assets/borrar.svg" type="button">
        </div>
        <img style="height: 174px; width: 176px;" src="${imagen}">
        <span style="font-weight: 500; outline-color: #464646; font-size: 14px;">${nombre}</span>
        <span style="font-weight: 700; outline-color: #464646; font-size: 16px;">${precio}</span>
        <a style="font-weight: 700;" class="text-decoration-none" href="./productos.html?id=${id}">Ver Producto</a>
    `;
    contenedorTipoTarjeta.innerHTML = contenido;
    
    const boton_eliminar= contenedorTipoTarjeta.querySelector (".boton_eliminar");

    boton_eliminar.addEventListener ("click", () => {

        const id = boton_eliminar.id;

        clientServices.eliminarProducto(id).then(respuesta => {

            console.log (respuesta);

        }).catch(error => alert ("Ocurrio un error al intentar eliminar el producto"));

    });

    return contenedorTipoTarjeta;

};

const contenedorProductosHijo = document.querySelector ("[data-producto]");

clientServices.listaProductos().then((data) =>{

    data.forEach (({nombre, imagen, precio, id}) => {

        const productosCargados = cargarProductosEnJSON (nombre, imagen, precio, id);
        contenedorProductosHijo.appendChild (productosCargados);
    
    });

}).catch((error) => alert ("Ha ocurrido un error al cargar productos desde el archivo JSON. Asegurese que el JSON-SERVER este corriendo ó que la direccion IP y puerto a la que se apunta sea correcta."));

