import { clientServices } from "../services/product-services.js";

const formulario = document.querySelector ("[data-formulario]");

const obtenerInformacion = async () => {

    const url = new URL (window.location);
    const id = (url.searchParams.get ("id"));

    if (id === null || id === undefined) {

        alert ("Error. \nNo hay ID pre-definido para editar producto. \nSeras redireccionado a la Pagina Principal.");
        window.location.href = "./index.html";

    }

    const imagen = document.querySelector ("[data-imagen]");
    const nombre = document.querySelector ("[data-nombre]");
    const precio = document.querySelector ("[data-precio]");

    try {

        const productos = await clientServices.detalleProducto (id);

        if (productos.imagen && productos.nombre && productos.precio) {

            imagen.value = productos.imagen;
            nombre.value = productos.nombre;
            precio.value = productos.precio;

        }

        else {

            throw new Error ();

        }

    }

    catch (error) {

        console.log ("Catch - ", error);
        alert ("Error al obtener datos (id) del producto. Seras redirigido a la pagina principal.");
        window.location.href ("./index.html")

    }

}

obtenerInformacion ();

formulario.addEventListener ("submit", (evento) => {

    evento.preventDefault ();
    const url = new URL (window.location);
    const id = (url.searchParams.get ("id"));
    const imagen = document.querySelector ("[data-imagen]").value;
    const nombre = document.querySelector ("[data-nombre]").value;
    const precio = document.querySelector ("[data-precio]").value;

    clientServices.actualizarProducto (imagen, nombre, precio, id).then(() => {

        alert ("Producto editado satisfactoriamente.");
        window.location.href = "./editarProducto.html";

    });

});
