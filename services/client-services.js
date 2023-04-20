const listaProductos = () => fetch ("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (nombre, imagen, precio, id) => {

    return fetch ("http://localhost:3000/productos", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify ({nombre, imagen, precio, id:uuid.v4()}),

    })

}

const eliminarProducto = (id) => {

    alert ("Se ha eliminado el producto id "+id+ ".");
    
    return fetch (`http://localhost:3000/productos/${id}`,{

        method: "DELETE",

    });

} 

export const clientServices = {

    listaProductos,
    crearProducto,
    eliminarProducto,

}