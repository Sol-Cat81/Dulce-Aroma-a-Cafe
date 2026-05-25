// creacion de constantes para su utilizacion
const btnCarrito = document.getElementById("btn-carrito");
const carritoContenedor = document.getElementById("carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalSpan = document.getElementById("total");
//getelementbyid() = busca un solo elemento
//querySelectorAll() = busca muchos elementos y deuvelve una collecion de ellos
const botonesComprar = document.querySelectorAll(".comprar-menu");

let carrito = [];

//mostrar y ocultar el carrito
btnCarrito.addEventListener("click",(e)=>{

    //propieda que evita que el navegador recargue si se actualizan datos
    e.preventDefault();

    //abreviacion de if y else
    carritoContenedor.style.display = 
    carritoContenedor.style.display ==="block"
    ?"none"
    :"block";
})

//agregar productos

//recorre todos los botne compar
botonesComprar.forEach((boton) => {
    //agregamos a cada voton un evento de click
  boton.addEventListener("click",()=>{

    //busca el acestro mas cercano con su especificacion
    const fila = boton.closest("tr");
    //children sive para optener todos los hijos de la fila"nombre, descripcion, precio " y 0 debido al indice
    //.obtine el texto interno .trim elimina el espacio vacio por la mosca
    const nombre = fila.children[0].textContent.trim();

    const precio = parseInt(
        //que ontenga solo la del precio y que remplaze los signos
      fila.children[2].textContent.replace(/[$\.]/g, ""),
      //referencia a la base 10
      10
    );

    //buscamos y devuelve si el producto ya existe find buqueda de lemento dentro de un array 
    //item busca el producto uno por uno
    const producto = carrito.find((item) => item.nombre === nombre);

    if (producto) {
      producto.cantidad++;
    } else {
      carrito.push({
        nombre,
        precio,
        cantidad: 1,
      });
    }

    actualizarCarrito();

    // mostrar carrito
    carritoContenedor.style.display = "block";
  });
});

//actualizar carrito
function actualizarCarrito(){
    //inner html permite leer modificar y remplar el html ya existente
    listaCarrito.innerHTML="";

    if(carrito.length === 0){
        listaCarrito.innerHTML =
         '<li class = "list-group-item tex-center"> El carrito esta vacio </li>';

         totalSpan.textContent = "0";
         return;
    }
    let total = 0;

    //recoremos todos los productos del carrito
    carrito.forEach((producto, indice)=>{

        const subtotal = producto.precio * producto.cantidad

        total += subtotal;

        //creamos elementos de html con js
        const item = document.createElement("li");

        //agregamos una clase de lista o en pocas palanras le agregamos datos
        item.className =
          "list-group-item d-flex justify-content-between align-items-center";

          //insertamos html con js
        item.innerHTML = `
      <span>${producto.nombre} x${producto.cantidad}</span>

      <div class="d-flex align-items-center gap-2">
      
        
        <span>$${subtotal.toLocaleString("es-AR")}</span>

        <button class="btn btn-sm btn-outline-danger" data-indice="${indice}">
          ✕
        </button>
      </div>
    `;
    //<span>$${subtotal.toLocaleString("es-AR")}</span> sirve para formatear pasar de 1500 a 1.500
    //<button class="btn btn-sm btn-outline-danger" data-indice="${indice}"> sirve para guardar informafcion del indice agregado
    
    //sirve para insertar los elementos ya creados
    listaCarrito.appendChild(item);
    });

    totalSpan.textContent = total.toLocaleString("es-AR")
}



//eliminar carrito 


listaCarrito.addEventListener("click", (e) => {
  //target referencia al elemento que en donde hara click el usuario 3
  if (e.target.tagName !== "BUTTON") return;

  //dataset permite leer los atributos del boton que empice con data
  const indice = e.target.dataset.indice;

  if (carrito[indice].cantidad > 1) {
    carrito[indice].cantidad--;
  } else {
    carrito.splice(indice, 1);
  }

  actualizarCarrito();
});