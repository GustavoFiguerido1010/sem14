

const datosJSON = [
    {
        "id": 1,
        "producto": "Country Roll",
        "precio": 93.14,
        "imagen": "imagenes/img1.jpg",
    },
    {
        "id": 2,
        "producto": "Pastry - Carrot Muffin - Mini",
        "precio": 98.49,
        "imagen": "imagenes/img2.jpg",
    },
    {
        "id": 3,
        "producto": "Chips Potato Reg 43g",
        "precio": 55.36,
        "imagen": "imagenes/img3.jpg",
    },
    {
        "id": 4,
        "producto": "Sugar - Sweet N Low, Individual",
        "precio": 88.31,
        "imagen": "imagenes/img4.jpg",
    },
    {
        "id": 5,
        "producto": "Chips Potato All Dressed - 43g",
        "precio": 28.22,
        "imagen": "imagenes/img5.jpg",
    },
    {
        "id": 6,
        "producto": "Tea - English Breakfast",
        "precio": 36.28,
        "imagen": "imagenes/img6.jpg",
    },
    {
        "id": 7,
        "producto": "Tart - Raisin And Pecan",
        "precio": 57.14,
        "imagen": "imagenes/img7.jpg",
    }
 
];


// Función para mostrar los productos en la lista
function mostrarProductos() {
    const lista = document.getElementById("productos-lista");

    datosJSON.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>ID:</strong> ${producto.id}<br>
                        <strong>Producto:</strong> ${producto.producto}<br>
                        <strong>Precio:</strong> $${producto.precio.toFixed(2)}<br>
                        <img src="${producto.imagen}" alt="${producto.producto}" width="100">`; // Agrega la imagen
        lista.appendChild(li);
    });
}

// Variables para el carrito y la lista de productos
let carrito = [];
const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("lista-carrito");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const totalCarrito = document.getElementById("total-carrito"); 

// Función para agregar un producto al carrito
function agregarAlCarrito(e) {
    if (e.target.classList.contains("agregar")) {
        const productoSeleccionado = e.target.parentElement;
        const producto = {
            id: productoSeleccionado.getAttribute("data-id"),
            nombre: productoSeleccionado.getAttribute("data-nombre"),
            precio: parseFloat(productoSeleccionado.getAttribute("data-precio"))
        };
        
        carrito.push(producto);
        mostrarCarrito();
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = ` ${producto.nombre} - $${producto.precio.toFixed(2)}`;

        // Agrega un botón de eliminación junto al producto en el carrito
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Quitar del carrito";
        botonEliminar.classList.add("eliminar");
        botonEliminar.setAttribute("data-id", producto.id);
        li.appendChild(botonEliminar);

        listaCarrito.appendChild(li);
    });

    // Calcular y mostrar el total del carrito
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    totalCarrito.textContent = `Total del Carrito: $${total.toFixed(2)}`;

    // Agregar eventos click a los botones de eliminación después de mostrar los productos
    const botonesEliminar = document.querySelectorAll(".eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const productoId = e.target.getAttribute("data-id");

    // Filtrar el carrito para eliminar el producto con el ID correspondiente
    carrito = carrito.filter(producto => producto.id !== productoId);

    mostrarCarrito(); // Actualizar la lista del carrito en la interfaz



    // Calcular y mostrar el total del carrito
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    totalCarrito.textContent = `Total del Carrito: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const productoId = e.target.getAttribute("data-id");

    // Filtrar el carrito para eliminar el producto con el ID correspondiente
    carrito = carrito.filter(producto => producto.id !== productoId);

    mostrarCarrito(); // Actualizar la lista del carrito en la interfaz
}

// Agregar evento click a la lista de productos
listaProductos.addEventListener("click", agregarAlCarrito);

// Agregar evento click al botón "Vaciar Carrito"
vaciarCarritoBtn.addEventListener("click", () => {
    carrito.length = 0;
    mostrarCarrito();
});

// Llamar a la función para mostrar los primeros 10 productos al cargar la página
mostrarProductos();


// Función para mostrar los productos en la lista
function mostrarProductos() {
    for (let i = 0; i < 10 && i < datosJSON.length; i++) {
        const producto = datosJSON[i];
        const li = document.createElement("li");
        li.innerHTML = `${producto.producto} - $${producto.precio.toFixed(2)} <button class="agregar" id="icon-carrito"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg></button>`;
        li.setAttribute("data-id", producto.id);
        li.setAttribute("data-nombre", producto.producto);
        li.setAttribute("data-precio", producto.precio);
        listaProductos.appendChild(li);
    }
}


// Llamar a la función para mostrar los primeros 10 productos al cargar la página
mostrarProductos();