import { clientServices } from "../services/client-services.js";

const cargarProductosEnJSON = (nombre, imagen, precio, id) => {

    const contenedorTipoTarjeta = document.createElement ("div");
    contenedorTipoTarjeta.setAttribute ("class", "d-flex flex-column py-3 gap-2")
    const contenido =
    `
        <div class="d-flex gap-2 position-absolute" id="botonera">
            <img id="main_boton_editar" title="Editar." style="height: 18px; width: 18px;" src="./assets/editar.svg" type="button">
            <img id="${id}" class="boton_eliminar" title="Eliminar." style="height: 18px; width: 18px;" src="./assets/borrar.svg" type="button">
        </div>
        <img style="height: 174px; width: 176px;" src="${imagen}">
        <span style="font-weight: 500; outline-color: #464646; font-size: 14px;">${nombre}</span>
        <span style="font-weight: 700; outline-color: #464646; font-size: 16px;">${precio}</span>
        <a style="font-weight: 700;" class="text-decoration-none" href="./productos.html?id=${id}">Ver Producto</a>
    `;
    contenedorTipoTarjeta.innerHTML = contenido;
    
    const boton_eliminar = document.querySelector ("button");

    boton_eliminar.addEventListener ("click", () => {

        const id = boton_eliminar.id;
        alert ("El click ", id);

    });

    // debuggear esta seccion


        




    
    return contenedorTipoTarjeta;

};





const contenedorProductosHijo = document.querySelector ("[data-producto]");

clientServices.listaProductos().then((data) =>{

    data.forEach (({nombre, imagen, precio, id}) => {

        const productosCargados = cargarProductosEnJSON (nombre, imagen, precio, id);
        contenedorProductosHijo.appendChild (productosCargados);
    
    });

}).catch((error) => console.log (error));