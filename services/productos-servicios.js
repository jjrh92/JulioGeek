// Inicio

const listaProductos = () => {

    fetch ("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log (error))

};


// POST

const crearProductos = (imagen, nombre, precio) => {

    fetch (`http://localhost:3000/producto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            imagen,
            precio,
            nombre,
        })

    }).then (respuesta => {
        if (respuesta.ok) {
            return respuesta.body;
        }
    })
    throw new Error ("No se pudo crear el producto");

};


export const productosServicios = {

    listaProductos,
    crearProductos

}


// Fin

// json-server --watch db.json