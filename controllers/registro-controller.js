import { clientServices } from "../services/client-services.js";

const formulario = document.querySelector ("[data-formulario]");

formulario.addEventListener ("submit", (evento) => {

    evento.preventDefault ();
    const imagen = document.querySelector ("[data-imagen]").value;
    const nombre = document.querySelector ("[data-nombre]").value;
    const precio = document.querySelector ("[data-precio]").value;

    clientServices.crearProducto (nombre, imagen, precio).then (respuesta => {

        console.log (respuesta);
        alert ("Se ha creado un nuevo producto satisfactoriamente.");

    }).catch (err => console.log (err));

    

});