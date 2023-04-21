const listaProductos = () => fetch ("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (nombre, imagen, precio, id) => {

    return fetch ("http://localhost:3000/productos", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify ({nombre, imagen, precio, id:uuid.v4()}),

    })

};

const eliminarProducto = (id) => {

    alert ("Se ha eliminado el producto id "+id+ ".");
    
    return fetch (`http://localhost:3000/productos/${id}`,{

        method: "DELETE",

    });

};

const detalleProducto = (id) => {
    
    return fetch (`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());

};

const actualizarProducto = (imagen, nombre, precio, id) => {

    return fetch (`http://localhost:3000/productos/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",

        },

        body: JSON.stringify({imagen, nombre, precio, id})

    })

    .then (respuesta => respuesta)
    .catch (error => console.log(error))


};

export const clientServices = {

    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,

};