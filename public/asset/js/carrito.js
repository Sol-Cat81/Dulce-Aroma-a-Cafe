/* ---------- VARIABLES ---------- */
const contenedorCarrito = document.querySelector('.modal-body')
const footerCarrito = document.querySelector('.modal-footer')
const listaCarrito = document.getElementById('list-group')
const btnTerminarCompra = document.getElementById('btnTerminarCompra')
const btnCargaCarrito = document.getElementById('btn-agregar')
const botonCarrito = document.getElementById('svgCarrito')

const pedidos = JSON.parse(localStorage.getItem('pedidos')) || []
const detallePedido = JSON.parse(localStorage.getItem('detallePedido')) || []

let lista = []

/* ---------- FUNCIONES ---------- */
function agregar(id,tipo){
    const filtro = lista.filter(clase => clase.tipo === tipo)
    const existe = filtro.find(busca => busca.id === id)
  
    if(existe){

        lista.forEach(modificar =>{

            if(modificar.tipo === tipo && modificar.id === id){

                let aumentar = modificar.cantidad
                modificar.cantidad = aumentar + 1
            }
        })
    }else if(tipo === 'consumible'){
        menu.forEach(comida => {

        let carga = {}

        if(comida.id === id){

            carga = comida
            carga.cantidad = 1
            carga.tipo = 'consumible'
            lista.push(carga)
        }
    });
    }else if(tipo === 'merch'){
        productoGuardado.forEach(prod => {

        carga = {}

        if(prod.id === id){

            carga = prod
            carga.cantidad = 1
            carga.tipo = 'merch'
            lista.push(carga)
        }
    });
}
actualizarCantidadCarrito(lista)
subirCarrito(lista)
}

function actualizarCantidadCarrito(lista){
    let cantidadTotal = lista.reduce((acum, elem) => acum + elem.cantidad, 0)
    if(cantidadTotal > 0){
        botonCarrito.classList.add('carrito-icono')
        botonCarrito.setAttribute('items', cantidadTotal)
    }else{
        botonCarrito.classList.remove('carrito-icono')
        botonCarrito.setAttribute('items', cantidadTotal)
    }
}

function subirCarrito(lista){
    contenedorCarrito.innerHTML = ''
    let listaConsumible = ''
    let listaMerch = ''
    if(lista.length > 0){
        const SumTotal = lista.reduce((acum, elem) => acum + elem.precio*elem.cantidad, 0)
        lista.forEach(elem =>{
            if(elem.tipo === 'consumible'){
                listaConsumible+=`
                <li class="list-group-item">
                <span>${elem.nombre}</span>
                <span>$${elem.precio}c/u</span>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-sumar" onclick="sumarCantidad(${elem.id},'${elem.tipo}')">+</button>
                    <button type="button" class="btn btn-cantidad">${elem.cantidad}</button>
                    <button type="button" class="btn btn-restar" onclick="restarCantidad(${elem.id},'${elem.tipo}')">-</button>
                </div>
                <span><ion-icon name="trash-outline" onclick="eliminarItem(${elem.id},'${elem.tipo}')"></ion-icon></span>
                </li>
                `
            }
            if(elem.tipo === 'merch'){
                listaMerch+=`
                <li class="list-group-item">
                <span>${elem.nombre}</span>
                <span>$${elem.precio}c/u</span>
                <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-sumar" onclick="sumarCantidad(${elem.id},'${elem.tipo}')">+</button>
                <button type="button" class="btn btn-cantidad">${elem.cantidad}</button>
                <button type="button" class="btn btn-restar" onclick="restarCantidad(${elem.id},'${elem.tipo}')"">-</button>
            </div>
                <span><ion-icon name="trash-outline" onclick="eliminarItem(${elem.id},'${elem.tipo}')"></ion-icon></span>
                </li>
                `
            }
        })
        contenedorCarrito.innerHTML +=`<h4>Menu:</h4>
        <ul class="list-group">
            ${listaConsumible}
        </ul>`
        contenedorCarrito.innerHTML +=`<h4>Merch oficial:</h4>
        <ul class="list-group">
            ${listaMerch}
        </ul>`
        contenedorCarrito.innerHTML += `
        <p class="text-end">Total:$${SumTotal}</p>`
        footerCarrito.innerHTML =`
        <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" id="btnTerminarCompra" class="btn btn-terminar">Terminar compra</button>`
    }else{
        contenedorCarrito.innerHTML ='<p>Carrito Vacio</p>'
        footerCarrito.innerHTML = '<button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>'
    }
}
function sumarCantidad(id, tipo){
    lista.forEach(item => {

        if(item.id == id && item.tipo == tipo){
            let aumentarItem = item.cantidad
            item.cantidad = aumentarItem + 1
        }
    })
    actualizarCantidadCarrito(lista)
    subirCarrito(lista)
}
function restarCantidad(id, tipo){
    lista.forEach(item => {

        if(item.id == id && item.tipo == tipo){
            item.cantidad--
        }
    })
    lista = lista.filter(item => item.cantidad > 0)
    actualizarCantidadCarrito(lista)
    subirCarrito(lista)
}
function eliminarItem(id, tipo){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id && lista[i].tipo === tipo){
            lista.splice(i,1)
        }
    }
    actualizarCantidadCarrito(lista)
    subirCarrito(lista)
}
/* ---------- EVENTOS ---------- */
window.addEventListener('load',() =>{
    if(lista.length === 0){
        contenedorCarrito.innerHTML ='<p>Carrito Vacio</p>'
        footerCarrito.innerHTML = '<button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>'
    }
})