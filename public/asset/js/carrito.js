// creacion de constantes para su utilizacion
const btnCarrito = document.getElementById("btn-carrito");
const carritoContenedor = document.getElementById("carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalSpan = document.getElementById("total");
const badge = document.getElementById("svgCarrito")

//getelementbyid() = busca un solo elemento
//querySelectorAll() = busca muchos elementos y deuvelve una collecion de ellos

// ahora buscamos los botones del menu SOLO dentro de #menu
// para no confundirlos con los del merch
const botonesMenu = document.querySelectorAll("#menu .comprar-menu");

// NUEVO: buscamos los botones de compra dentro de la seccion de merch (#productos)
const botonesmerch = document.querySelectorAll("#productos .comprar-merch");

let carrito = [];

//mostrar y ocultar el carrito
btnCarrito.addEventListener("click", (e) => {

    //propieda que evita que el navegador recargue si se actualizan datos
    e.preventDefault();

    //abreviacion de if y else
    carritoContenedor.style.display =
        carritoContenedor.style.display === "block"
            ? "none"
            : "block";
});

//agregar productos menu

//recorre todos los botones comprar del menu
botonesMenu.forEach((boton) => {
    //agregamos a cada boton un evento de click
    boton.addEventListener("click", () => {

        //busca el ancestro mas cercano con su especificacion (fila de la tabla)
        const fila = boton.closest("tr");

        //children sirve para obtener todos los hijos de la fila "nombre, descripcion, precio"
        //.textContent obtiene el texto interno .trim elimina el espacio vacio
        const nombre = fila.children[0].textContent.trim();

        const precio = parseInt(
            //obtiene solo el precio y reemplaza los signos
            fila.children[2].textContent.replace(/[$\.]/g, ""),
            //referencia a la base 10
            10
        );

        //buscamos y devolvemos si el producto ya existe
        //find busca el elemento dentro de un array, item recorre el array uno por uno
        //al buscar duplicados tambien comparamos la seccion
        // para que un producto del menu y uno del merch con el mismo nombre no se mezclen
        const producto = carrito.find(
            (item) => item.nombre === nombre && item.seccion === "menu"
        );

        if (producto) {
            producto.cantidad++;
        } else {
            // agregamos el campo "seccion" para saber de donde viene el producto
            carrito.push({
                nombre,
                precio,
                cantidad: 1,
                seccion: "menu", // identifica que el producto es del menu
            });
        }

        actualizarCarrito();

        // mostrar carrito
        carritoContenedor.style.display = "block";
    });
});

//agregar merch

// recorre todos los botones comprar del merch
botonesmerch.forEach((boton) => {
    boton.addEventListener("click", () => {

        // para el merch el ancestro es el .swiper-slide 
        const slide = boton.closest(".swiper-slide");

        //el nombre y precio estan dentro de .infoprod del slide
        const nombre = slide.querySelector(".nombre").textContent.trim();

        //extraemos el precio del merch y eliminamos el signo $
        const precio = parseInt(
            slide.querySelector(".precio").textContent.replace(/[$\.]/g, ""),
            10
        );

        // buscamos si el producto del merch ya existe en el carrito
        // comparando tambien la seccion para no confundir con productos del menu
        const producto = carrito.find(
            (item) => item.nombre === nombre && item.seccion === "merch"
        );

        if (producto) {
            producto.cantidad++;
        } else {
            // el campo seccion "merch" para distinguirlo del menu
            carrito.push({
                nombre,
                precio,
                cantidad: 1,
                seccion: "merch", // identifica que el producto es del merch
            });
        }

        actualizarCarrito();

        // mostrar carrito al agregar un producto de merch
        carritoContenedor.style.display = "block";
    });
});

//actualizar carrito

function actualizarCarrito() {
    //inner html permite leer modificar y reemplazar el html ya existente
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML =
            '<li class="list-group-item text-center"> El carrito esta vacio </li>';

        totalSpan.textContent = "0";
        return;
    }

    let total = 0;

    //filtramos los productos por seccion para mostrarlos separados
    const productosMenu = carrito.filter((item) => item.seccion === "menu");
    const productosMerch = carrito.filter((item) => item.seccion === "merch");

    // funcion auxiliar que renderiza un grupo de productos con su encabezado
    // recibe el array de productos y el titulo del encabezado
    function renderizarGrupo(productos, titulo) {

        // si el grupo no tiene productos no mostramos nada
        if (productos.length === 0) return;

        // creamos el encabezado del grupo ("menu" o "merch oficial")
        const encabezado = document.createElement("li");
        encabezado.className = "list-group-item fw-bold text-muted small py-1";
        encabezado.textContent = titulo;
        listaCarrito.appendChild(encabezado);

        // recoremos todos los productos del grupo
        productos.forEach((producto) => {

            // necesitamos el indice real dentro del array global para poder eliminarlo
            //buscamos el indice del producto en el carrito global
            const indiceReal = carrito.findIndex(
                (item) => item.nombre === producto.nombre && item.seccion === producto.seccion
            );

            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            //creamos elementos de html con js
            const item = document.createElement("li");

            //agregamos una clase de lista
            item.className =
                "list-group-item d-flex justify-content-between align-items-center";

            //insertamos html con js
            // data-indice ahora guarda el indice del array global (no del subgrupo)
            item.innerHTML = `
        <span>${producto.nombre} x${producto.cantidad}</span>
        <div class="d-flex align-items-center gap-2">
          <span>$${subtotal.toLocaleString("es-AR")}</span>
          <button class="btn btn-sm btn-outline-danger" data-indice="${indiceReal}">
            ✕
          </button>
        </div>
      `;
            //<span>$${subtotal.toLocaleString("es-AR")}</span> sirve para formatear 1500 a 1.500
            //<button data-indice="${indiceReal}"> guarda el indice real dentro del carrito global

            //sirve para insertar los elementos ya creados
            listaCarrito.appendChild(item);
        });
        // para la insignia del carrito
        if(carrito.length != 0){
            badge.setAttribute("items", carrito.length)
            badge.classList.add("carrito-icono")
            console.log(carrito)
        }else{
            badge.classList.remove("carrito-icono")
        }
    }

    //renderizamos primero los productos del menu con su encabezado
    renderizarGrupo(productosMenu, " Menu");

    //renderizamos los productos del merch con su propio encabezado
    renderizarGrupo(productosMerch, " Merch Oficial");

    //actualizamos el total general (menu + merch sumados)
    totalSpan.textContent = total.toLocaleString("es-AR");
}

//eliminar carrito
listaCarrito.addEventListener("click", (e) => {
    //target referencia al elemento donde hara click el usuario
    if (e.target.tagName !== "BUTTON") return;

    //dataset permite leer los atributos del boton que empiecen con data-
    const indice = e.target.dataset.indice;

    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--;
    } else {
        carrito.splice(indice, 1);
    }

    actualizarCarrito();
});