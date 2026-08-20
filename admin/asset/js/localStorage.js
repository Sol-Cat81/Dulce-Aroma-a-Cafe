const menuInicial = [
    {id: 1, nombre: "Espresso", descripcion: "Cafe concentrado", precio: 1500, categoria: "cafe", estado: true},
    {id: 2, nombre: "Cappuchino", descripcion: "Espresso con leche vaporizada", precio: 2200, categoria: "cafe", estado: true},
    {id: 3, nombre: "Latte", descripcion: "Espresso con agua caliente", precio: 1700, categoria: "cafe", estado: true},
    {id: 4, nombre: "Mocha", descripcion: "Café con chocolate y leche", precio: 2700, categoria: "cafe", estado: true},
    {id: 5, nombre: "Macchiato", descripcion: "Espresso con espuma de leche", precio: 2000, categoria: "cafe", estado: true},
    {id: 6, nombre: "Flat White", descripcion: "Café intenso con leche cremosa", precio: 2400, categoria: "cafe", estado: true},
    {id: 7, nombre: "Cold Brew", descripcion: "Café frío infusionado", precio: 2600, categoria: "cafe", estado: true},
    {id: 8, nombre: "Affogato", descripcion: "Espresso con helado", precio: 4000, categoria: "cafe", estado: true},
    {id: 9, nombre: "Café Doble", descripcion: "Doble shot de espresso", precio: 2100, categoria: "cafe", estado: true},
    {id: 10, nombre: "Americano", descripcion: "Espresso con agua caliente", precio: 1700, categoria: "cafe", estado: true},
    {id: 11, nombre: "Medialunas", descripcion: "Clásicas de manteca x3", precio: 1800, categoria: "panaderia", estado: true},
    {id: 12, nombre: "Factura de crema", descripcion: "Masa dulce con crema pastelera", precio: 1600, categoria: "panaderia", estado: true},
    {id: 13, nombre: "Chipá", descripcion: "Panecillo de queso", precio: 1700, categoria: "panaderia", estado: true},
    {id: 14, nombre: "Tostado", descripcion: "Jamón y queso caliente", precio: 2800, categoria: "panaderia", estado: true},
    {id: 15, nombre: "Bagel", descripcion: "Pan redondo suave", precio: 2000, categoria: "panaderia", estado: true},
    {id: 16, nombre: "Croissant", descripcion: "Hojaldre francés", precio: 2300, categoria: "panaderia", estado: true},
    {id: 17, nombre: "Pan integral", descripcion: "Pan con harina integral", precio: 2100, categoria: "panaderia", estado: true},
    {id: 18, nombre: "Rosca dulce", descripcion: "Con azúcar y frutas", precio: 2500, categoria: "panaderia", estado: true},
    {id: 19, nombre: "Pepas", descripcion: "Galletas con membrillo", precio: 1900, categoria: "panaderia", estado: true},
    {id: 20, nombre: "Pan de campo", descripcion: "Pan artesanal crocante", precio: 2200, categoria: "panaderia", estado: true},
    {id: 21, nombre: "Brownie", descripcion: "Chocolate semi amargo y nueces", precio: 2000, categoria: "pasteleria", estado: true},
    {id: 22, nombre: "Cheesecake", descripcion: "Tarta cremosa de queso", precio: 3000, categoria: "pasteleria", estado: true},
    {id: 23, nombre: "Lemon Pie", descripcion: "Crema de limón y merengue", precio: 2800, categoria: "pasteleria", estado: true},
    {id: 24, nombre: "Tiramisú", descripcion: "Postre italiano con café", precio: 3200, categoria: "pasteleria", estado: true},
    {id: 25, nombre: "Red Velvet", descripcion: "Torta roja con crema", precio: 3300, categoria: "pasteleria", estado: true},
    {id: 26, nombre: "Budín de limón", descripcion: "Esponjoso y cítrico", precio: 2200, categoria: "pasteleria", estado: true},
    {id: 27, nombre: "Alfajor artesanal", descripcion: "Relleno con dulce de leche", precio: 1700, categoria: "pasteleria", estado: true},
    {id: 28, nombre: "Cookie", descripcion: "Galleta con chips de chocolate", precio: 1600, categoria: "pasteleria", estado: true},
    {id: 29, nombre: "Selva Negra", descripcion: "Torta de chocolate y cerezas", precio: 3500, categoria: "pasteleria", estado: true},
    {id: 30, nombre: "Flan casero", descripcion: "Con dulce de leche", precio: 2400, categoria: "pasteleria", estado: true},
    {id: 31, nombre: "Licuado de banana", descripcion: "Dulce de banana con leche", precio: 2500, categoria: "licuados", estado: true},
    {id: 32, nombre: "Licuado de frutilla", descripcion: "Frutillas frescas y leche", precio: 2700, categoria: "licuados", estado: true},
    {id: 33, nombre: "Licuado tropical", descripcion: "Mango y ananá", precio: 3000, categoria: "licuados", estado: true},
    {id: 34, nombre: "Licuado verde", descripcion: "Espinaca y manzana", precio: 2900, categoria: "licuados", estado: true},
    {id: 35, nombre: "Licuado de durazno", descripcion: "Durazno y yogur", precio: 2800, categoria: "licuados", estado: true},
    {id: 36, nombre: "Licuado energético", descripcion: "Avena y banana", precio: 3100, categoria: "licuados", estado: true},
    {id: 37, nombre: "Licuado cítrico", descripcion: "Naranja y limón", precio: 2600, categoria: "licuados", estado: true},
    {id: 38, nombre: "Licuado berries", descripcion: "Frutos rojos", precio: 3200, categoria: "licuados", estado: true},
    {id: 39, nombre: "Licuado de chocolate", descripcion: "Chocolate y leche fría", precio: 3000, categoria: "licuados", estado: true},
    {id: 40, nombre: "Licuado detox", descripcion: "Manzana y pepino", precio: 3100, categoria: "licuados", estado: true},
    {id: 41, nombre: "Pan libre de gluten", descripcion: "Pan hecho con harina premezcla", precio: 1800, categoria: "sin-tacc", estado: true},
    {id: 42, nombre: "Cookie sin TACC", descripcion: "Galleta apta celíacos", precio: 1900, categoria: "sin-tacc", estado: true},
    {id: 43, nombre: "Brownie sin TACC", descripcion: "Chocolate sin gluten", precio: 2300, categoria: "sin-tacc", estado: true},
    {id: 44, nombre: "Muffin sin TACC", descripcion: "Esponjoso de vainilla", precio: 2100, categoria: "sin-tacc", estado: true},
    {id: 45, nombre: "Budín sin TACC", descripcion: "Budín artesanal", precio: 2200, categoria: "sin-tacc", estado: true},
    {id: 46, nombre: "Alfajor sin TACC", descripcion: "Dulce de leche artesanal", precio: 2000, categoria: "sin-tacc", estado: true},
    {id: 47, nombre: "Crackers sin gluten", descripcion: "Snack crocante", precio: 1700, categoria: "sin-tacc", estado: true},
    {id: 48, nombre: "Torta sin TACC", descripcion: "Chocolate apta celíacos", precio: 3200, categoria: "sin-tacc", estado: true}
];

const merchInicial = [
    {id: 1, nombre: "Remera blanca estampada", direccion: "/admin/asset/img/images.jpg", precio: 10000, categoria: "remeras", estado: true},
    {id: 2, nombre: "Remera latido de cafe", direccion: "/admin/asset/img/ChatGPT-Image-remera.png", precio: 12000, categoria: "Remeras", estado: true},
    {id: 3, nombre: "Gorra estampada", direccion: "/admin/asset/img/ChatGPT-Image-gorra.png", precio: 4000, categoria: "Gorras", estado: true},
    {id: 4, nombre: "Taza con el logo", direccion: "/admin/asset/img/taza1.png", precio: 8000, categoria: "Tazas", estado: true},
    {id: 5, nombre: "Taza amante del cafe", direccion: "/admin/asset/img/Despertar.png", precio: 9000, categoria: "Tazas", estado: true},
    {id: 6, nombre: "Vaso termico estampado", direccion: "/admin/asset/img/vaso1.png", precio: 10000, categoria: "Vasos", estado: true},
    {id: 7, nombre: "Vaso de vidrio x6", direccion: "/admin/asset/img/ChatGPT-Image-vaso2.png", precio: 15000, categoria: "Vasos",estado: true},
    {id: 8, nombre: "Buzo estampado", direccion: "/admin/asset/img/buzo.png", precio: 12000, categoria: "Otros", estado: true},
    {id: 9, nombre: "Bolso estampado", direccion: "/admin/asset/img/bolso.png", precio: 11000, categoria: "Otros", estado: true}
];

let pedidos = []
let detallePedido = []
let usuarios = [
    {id: 1, nombre: 'Messi', gmail: 'messi@gmail.com', telefono: 3863452039, direccion: 'Monteros,av. san cristonomo 34', password: 'S4lch1p4p4', estado: false}
]

// nose qie tiene que llevar la de usuario xD
//mostrar datos del menu iniciales al momento
const bodyTablaUsuarios = document.getElementById('bodyTablaUsuarios')

const modalDetalle = document.querySelector('.modal-body')

const modalHistorial = document.querySelector('.modal-body-historial')
const tituloHistorial = document.querySelector('#exampleModalToggleLabel')
const tituloDetalleHistorial = document.querySelector('#exampleModalToggleLabel2')
const modalDetalleHistorial = document.querySelector('.modal-body-detalleHistorial')

//para evitar que se inicie dos veces y evitar comflicto entre la libreri
let tablaMenu = null;

let tablaProducto = null;

let tablaUsuarios = null

let tablaPedidos = null

if (localStorage.getItem('usuarios') === null){
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
}

if (localStorage.getItem('pedidos') === null){
    localStorage.setItem('pedidos',JSON.stringify(pedidos));
}

if (localStorage.getItem('detallePedido') === null){
    localStorage.setItem('detallePedido',JSON.stringify(detallePedido));
}

if (localStorage.getItem('menu') === null){
    localStorage.setItem('menu',JSON.stringify(menuInicial));
}

//mostrar datos del merch iniciales al momento
if (localStorage.getItem('merch') === null){
    localStorage.setItem('merch',JSON.stringify(merchInicial));
}


function obtenerLista(clave){
    return JSON.parse(localStorage.getItem(clave)) || []
}

function guardarLista (clave,lista){
    localStorage.setItem(clave, JSON.stringify(lista));
}

// activar o desactivar items
function activarOdesactivar(id, tipo){
    let indice = id - 1
    if(tipo === 'producto'){
        const merch = obtenerLista('merch')
        if(merch[indice]){
            merch[indice].estado = !merch[indice].estado
        }else{
            console.log('no existe')
            return
        }
        guardarLista('merch', merch);
        cargarProductos()
    }else{
        const menu = obtenerLista('menu')
        if(menu[indice]){
            menu[indice].estado = !menu[indice].estado
        }else{
            console.log('no existe')
            return
        }
        guardarLista('menu', menu)
        cargarMenu()
    }
}

//crear un nuevo id tomando el ultimo de la lista como punto de partida
function crearId(lista){
    if(lista.length === 0){
        return 1;
    }
    return lista[lista.length - 1].id + 1;
}

// Destruye DataTable antes de volver a dibujar la tabla.
function destruirTabla(tabla) {
    if (tabla !== null) {
        tabla.destroy();
    }
}

// Activa DataTable en una tabla HTML
function activarTabla(selector) {
    return new DataTable(selector, {
        scrollX: true,
        responsive: true,
        language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "No se encontraron coincidencias",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Sin contenido",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
    });
}

// Crea una fila HTML para la tabla del menu
function crearFilaMenu(comida) {
    let activo =''
    if(comida.estado){
        activo = 'Activo'
    }else{
        activo = 'Desactivo'
    }
    return `
        <tr>
            <td>${comida.nombre}</td>
            <td>${comida.descripcion}</td>
            <td>${comida.precio}</td>
            <td><button class="${activo}" onclick="activarOdesactivar(${comida.id},'comida')">${activo}</button></td>
            <td>
                <button class="editar" data-accion="editar-menu" data-id="${comida.id}">Editar</button>
                <button class="activo" data-accion="eliminar-menu" data-id="${comida.id}">Eliminar</button>
        
            </td>
        </tr>
    `;
}

// Crea una fila HTML para la tabla de productos
function crearFilaProducto(producto) {
    let activo =''
    if(producto.estado){
        activo = 'Activo'
    }else{
        activo = 'Desactivo'
    }
    return `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.direccion}</td>
            <td>${producto.precio}</td>
            <td><button class="${activo}" onclick="activarOdesactivar(${producto.id},'producto')">${activo}</button></td>
            <td>
                <button class="editar" data-accion="editar-producto" data-id="${producto.id}">Editar</button>
                <button class="activo" data-accion="eliminar-producto" data-id="${producto.id}">Eliminar</button>
            </td>
        </tr>
    `;
}

function crearFilaUsuario(usuario) {
    let activo =''
    if(usuario.estado){
        activo = 'Activo'
    }else{
        activo = 'Desactivo'
    }
    return `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.direccion}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.gmail}</td>
            <td><button class="${activo}">${activo}</button></td>
            <td><button class="editar" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" onclick="historialUsuario(${usuario.id})">Historial</button></td>
        </tr>
    `;
}

function crearFilaPedido(pedido) {
    let estado =''
    if(pedido.estado === 'pendiente'){
        estado = `
        <option selected>Pendiente</option>
        <option value="preparando">Preparando</option>
        <option value="enviado">Enviado</option>
        <option value="entregado">Entregado</option>
        `
    }else if(pedido.estado === 'preparando'){
        estado = `
        <option selected>Preparando</option>
        <option value="enviado">Enviado</option>
        <option value="entregado">Entregado</option>
        `
    }else if(pedido.estado === 'enviado'){
        estado = `
        <option selected>Enviado</option>
        <option value="entregado">Entregado</option>
        `
    }else if(pedido.estado === 'entregado'){
        estado = `
        <option selected>Entregado</option>
        `
    }
    return `
        <tr>
            <td>${pedido.id}</td>
            <td>${pedido.Cliente}</td>
            <td>${pedido.direccion}</td>
            <td>${pedido.total}</td>
            <td>
            <select class="selectPedido ${pedido.estado}" data-id="${pedido.id}">
            ${estado}
            </select>
            </td>
            <td>
            <button type="button" class="editar" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="verDetalle(${pedido.id},'detallePedido')">
            Ver detalle
            </button>
            </td>
        </tr>
    `;
}// pediente preparando enviado entregado

// Carga los datos del menu en la tabla
function cargarMenu(menuFiltrado = null) {
    const menuCompleto = obtenerLista('menu');
    const filtroActual = document.getElementById('filtroMenu')?.value.toLowerCase() || '';
    const menu = menuFiltrado || menuCompleto.filter((comida) => {
        return filtroActual === '' || comida.categoria.toLowerCase() === filtroActual;
    });

    destruirTabla(tablaMenu);

    bodyTabla.innerHTML = menu.map(crearFilaMenu).join('');

    tablaMenu = activarTabla('#menutabla');
}


// Carga los productos en la tabla
function cargarProductos() {
    const productos = obtenerLista('merch');

    destruirTabla(tablaProducto);

    bodyTablaProduc.innerHTML = productos.map(crearFilaProducto).join('');

    tablaProducto = activarTabla('#productable');
}

function cargarUsuarios(){
    const user = obtenerLista('usuarios')

    console.log(user)

    destruirTabla(tablaUsuarios)

    bodyTablaUsuarios.innerHTML = user.map(crearFilaUsuario).join('')

    tablaUsuarios = activarTabla('#tablaUsuarios')

    console.log('tabla cargada')
}

function cargarPedidos(){
    const pedidos = obtenerLista('pedidos')

    console.log(pedidos)

    destruirTabla(tablaPedidos)

    bodyTablaPedidos.innerHTML = pedidos.map(crearFilaPedido).join('')

    tablaPedidos = activarTabla('#tablaPedidos')

}

function verDetalle(id, donde){
    console.log(id)
    const pedi = JSON.parse(localStorage.getItem('pedidos')) || []
    const detallePedi = JSON.parse(localStorage.getItem('detallePedido')) || []
    let indice = id - 1
    let detalles = ''
    detallePedi.forEach(element => {
        if(element.idPedido === id){
            detalles +=`
            <li class="list-group-item">
            <span>${element.item}</span>
            <span>x${element.cantidad}</span>
            <span>${element.subTotal}</span>
            </li>
            `
        }
    });
    if(donde === 'detallePedido'){
        modalDetalle.innerHTML = `
        Pedido Num: #${pedi[indice].id}</br>
        Cliente: ${pedi[indice].Cliente}</br>
        Direccion: ${pedi[indice].direccion}</br>
        Estado: ${pedi[indice].estado}</br>
        <h5>Total:$${pedi[indice].total}</h5>
        <ul class="list-group list-group-flush">
            ${detalles}
        </ul>
        `
}else{
    tituloDetalleHistorial.innerHTML = `Detalle del pedido #${pedi[indice].id}`
    modalDetalleHistorial.innerHTML = `
        Pedido Num: #${pedi[indice].id}</br>
        Cliente: ${pedi[indice].Cliente}</br>
        Direccion: ${pedi[indice].direccion}</br>
        Estado: ${pedi[indice].estado}</br>
        <h5>Total:$${pedi[indice].total}</h5>
        <ul class="list-group list-group-flush">
            ${detalles}
        </ul>
        `
}
    }
//'detallePedido' 'detalleHistorialUsuario'
//agregar una comida nueva
function agregarMenu(evento) {
    evento.preventDefault();

    const menu = obtenerLista('menu');

    const comidaNueva = {
        id: crearId(menu),
        nombre: nombreMenu.value,
        descripcion: descripcionMenu.value,
        precio: Number(precioMenu.value),
        categoria: categoriaMenu.value,
        estado: true
    };

    menu.push(comidaNueva);

    guardarLista('menu', menu);

    formMenu.reset();

    cargarMenu();
}

// Agrega un producto nuevo a merch
function agregarProducto(evento) {
    
    evento.preventDefault();

    const productos = obtenerLista('merch');

    const imagen = imgProducto.files.length > 0 ? imgProducto.files[0].name : 'Sin imagen';

    const productoNuevo = {
        id: crearId(productos),
        nombre: nombreProducto.value,
        direccion: '/admin/asset/img/' + imagen,
        precio: Number(precioProducto.value),
        categoria: categoriaProducto.value,
        estado: true
    };

    productos.push(productoNuevo);

    guardarLista('merch', productos);

    formProducto.reset();

    cargarProductos();
}


// Edita una comida del menu usando su id
function editarMenu(id) {
    // Obtiene la lista actual del menu desde localStor
    const menu = obtenerLista('menu');

    // Busca la posicion de la comida que tenga el mismo id
    const posicion = menu.findIndex((comida) => comida.id === id);

    // Si no encuentra la comida termine la funcio 
    if (posicion === -1) {
        return;
    }

    // Guarda la comida encontrada 
    const comida = menu[posicion];

    // Pide el nuevo nombre y deja el anterior como valor sugerido
    const nuevoNombre = prompt('Editar nombre:', comida.nombre);

    // Si no se agrega nada se cansela
    if (nuevoNombre === null) {
        return;
    }

    // Pide la nueva descripcion y deja la anterior como valor sugerido
    const nuevaDescripcion = prompt('Editar descripcion:', comida.descripcion);

    // Si no se agrega nada se cansela 
     if (nuevaDescripcion === null) {
        return;
    }

    // Pide el nuevo precio y deja el anterior como valor sugerido
    const nuevoPrecio = prompt('Editar precio:', comida.precio);

    // Si no se agrega nada se cansela
    if (nuevoPrecio === null) {
        return;
    }

    // Pide la nueva categoria y deja la anterior como valor sugerido
    const nuevaCategoria = prompt('Editar categoria: cafe, licuados, pasteleria, panaderia o sin-tacc', comida.categoria);

    // Si no se agrega nada se cansela
    if (nuevaCategoria === null) {
        return;
    }

    // Reemplaza los datos anteriores por los nuevos
    menu[posicion] = {
        id: comida.id,
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
        precio: Number(nuevoPrecio),
        categoria: nuevaCategoria,
        estado: true
    };

    // Guarda el menu editado en localStorage
    guardarLista('menu', menu);

    // Vuelve a cargar la tabla para mostrar el cambio
    cargarMenu();
}

// Elimina una comida del menu usando su id
function eliminarMenu(id) {
    // Pregunta antes de eliminar para evitar borrados
    const confirma = confirm('¿Seguro que queres eliminar esta comida del menu?');

    // Si cansela no hace nada
    if (confirma === false) {
        return;
    }

    // Obtiene la lista actual del menu.
    const menu = obtenerLista('menu');

    // Crea una nueva lista sin la comida eliminada
    const menuActualizado = menu.filter((comida) => comida.id !== id);

    // Guarda la nueva lista en localStorage
    guardarLista('menu', menuActualizado);

    // Vuelve a cargar la tabla
    cargarMenu();
}
// Edita un producto de merch usando su id.
function editarProducto(id) {
    // Obtiene la lista actual de productos desde localStorage.
    const productos = obtenerLista('merch');

    // Busca la posicion del producto que tenga el mismo id.
    const posicion = productos.findIndex((producto) => producto.id === id);

    if (posicion === -1) {
        return;
    }

    const producto = productos[posicion];

    const nuevoNombre = prompt('Editar nombre:', producto.nombre);

    if (nuevoNombre === null) {
        return;
    }

    const nuevaDireccion = prompt('Editar imagen o direccion:', producto.direccion);

    if (nuevaDireccion === null) {
        return;
    }

    const nuevoPrecio = prompt('Editar precio:', producto.precio);

    if (nuevoPrecio === null) {
        return;
    }

    const nuevaCategoria = prompt('Editar categoria: remeras, gorras, tazas, vasos u otros', producto.categoria);

    if (nuevaCategoria === null) {
        return;
    }

    // Reemplaza los datos anteriores por los nuevos
    productos[posicion] = {
        id: producto.id,
        nombre: nuevoNombre,
        direccion: nuevaDireccion,
        precio: Number(nuevoPrecio),
        categoria: nuevaCategoria,
        estado: true
    };

    // Guarda los productos editados
    guardarLista('merch', productos);

    // Vuelve a cargar la tabla para mostrar el cambio
    cargarProductos();
}

// Elimina un producto de merch usando su id.
function eliminarProducto(id) {
    
    const confirma = confirm('¿Seguro que queres eliminar este producto?');

    if (confirma === false) {
        return;
    }

    // Obtiene la lista actual de productos
    const productos = obtenerLista('merch');

    // Crea una nueva lista sin el producto eliminado
    const productosActualizados = productos.filter((producto) => producto.id !== id);

    // Guarda la nueva lista 
    guardarLista('merch', productosActualizados);

    // Vuelve a cargar la tabla
    cargarProductos();
}

// detecta si se presiono editar o elominar
function manejarAccionesMenu(evento) {
    // guarda el boton presionado
    const boton = evento.target;

    // Lee la accion guardada en data-accion.
    const accion = boton.dataset.accion;

    // Lee el id guardado en data-id y lo convierte a numero.
    const id = Number(boton.dataset.id);

    // Si la accion es editar menu, llama a la funcion editar.
    if (accion === 'editar-menu') {
        editarMenu(id);
    }

    // Si la accion es eliminar menu, llama a la funcion eliminar.
    if (accion === 'eliminar-menu') {
        eliminarMenu(id);
    }
}


//detectamos si se preciona editar o eliminar 
function manejarAccionesProductos(evento){
    //guardar el boton precionado
    const boton = evento.target;
    //lee la accion guardada en data-accion
    const accion = boton.dataset.accion;
    //lee el ide guardado en data-id y lo convierte en numero
    const id = Number (boton.dataset.id);

    //si la accion es editar llama la funcion editar
    if(accion === 'editar-producto'){
        editarProducto(id);
    }
    //si la accion es eliminar
    if (accion === 'eliminar-producto'){
        eliminarProducto(id);
    }
}

function historialUsuario(id){
    const ped = obtenerLista('pedidos')
    const users = obtenerLista('usuarios')
    const pedidosUsuario = ped.filter(elem => elem.idCliente === id)
    let contenidoHistorial = ''
    pedidosUsuario.forEach(ped =>{
        contenidoHistorial+=`
        <tr>
        <td>${ped.id}</td>
        <td>${ped.estado}</td>
        <td>$${ped.total}</td>
        <td>
        <button class="editar" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
         onclick="verDetalle(${ped.id},'detalleHistorialUsuario')">Ver</button>
        </td>
        </tr>
        `
    })
    tituloHistorial.innerHTML = `Historial de ${users[id - 1].nombre}`
    if(contenidoHistorial === ''){
        modalHistorial.innerHTML = `<br>El usuario no a realizado algun pedido hasta el momento..<br><br>`
    }else{
        modalHistorial.innerHTML = `
        <table class="tabla">
            <thead>
                <tr>
                    <th>P.Num</th>
                    <th>Estado</th>
                    <th>Total</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
            ${contenidoHistorial}
            </tbody>
        </table>
        `
    }
}

// Cuando carga la pagina, conecta formularios y carga tablas

window.addEventListener('load', () => {
    formMenu.addEventListener('submit', agregarMenu);

    formProducto.addEventListener('submit', agregarProducto);

    bodyTabla.addEventListener('click', manejarAccionesMenu);

    bodyTablaProduc.addEventListener('click', manejarAccionesProductos);

    cargarMenu();

    cargarProductos();

    cargarUsuarios();

    cargarPedidos()
});
bodyTablaPedidos.addEventListener('change', function(e){

    if(!e.target.classList.contains('selectPedido')){
        return;
    }

    const nuevoEstado = e.target.value;
    const idPedido = Number(e.target.dataset.id);
    
    const pedidos = obtenerLista('pedidos');

    const pedido = pedidos.find(p => p.id === idPedido);

    if(!pedido){
        return;
    }

    pedido.estado = nuevoEstado;

    guardarLista('pedidos', pedidos);

    cargarPedidos()
});
