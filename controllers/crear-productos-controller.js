import { productosServicios } from "../services/productos-servicios";

const form = document.querySelector ("[data-form]");

form.addEventListener ("submit", (evento) => {

    evento.preventDefault ();

    const url = document.querySelector ("[data-url]").value;
    const nombre = document.querySelector ("[data-nombre]").value;
    const precio = document.querySelector ("[data-precio]").value;

    productosServicios.crearProductos (url, nombre, precio)
    .then (respuesta => {
        window.location.href = "../screens/index.html";
        console.log (respuesta);
    }) .catch(error => {
        console.log (error);
    })

});