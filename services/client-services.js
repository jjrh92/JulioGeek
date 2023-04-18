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

const listaProductos = () => {

    const promise = new Promise ((resolve, reject) => {

        const http = new XMLHttpRequest ();
        http.open ("GET","http://localhost:3000/producto");
        http.send ();

        http.onload = () => {

            const response = JSON.parse (http.response);

            if (http.status >= 400) {

                reject (response);

            }

            else {

                resolve (response);

            }

        };


    });

    return promise;

};

listaProductos().then((data) =>{

    data.forEach (producto => {

        const productosCargados = cargarProductosEnJSON(producto.nombre, producto.imagen, producto.precio, producto.id);
        contenedorProductosHijo.appendChild (productosCargados);
    
    });

}).catch((error) => alert ("Ha ocurrido un error."));