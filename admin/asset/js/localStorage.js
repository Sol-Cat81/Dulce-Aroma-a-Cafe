const menuInicial = [
    { id: 1, nombre: 'Espresso', descripcion: 'Cafe concentrado', precio: 1500, categoria: 'cafe', estado: true },
    { id: 2, nombre: 'Cappuchino', descripcion: 'Espresso con leche vaporizada', precio: 2200, categoria: 'cafe', estado: true },
    { id: 3, nombre: 'Latte', descripcion: 'Espresso con agua caliente', precio: 1700, categoria: 'cafe' , estado: true},
    { id: 4, nombre: 'Mocha', descripcion: 'Cafe con chocolate y leche', precio: 2700, categoria: 'cafe', estado: true },
    { id: 5, nombre: 'Macchiato', descripcion: 'Espresso con espuma de leche', precio: 2000, categoria: 'cafe' , estado: true}
];

const merchInicial = [
    { id: 1, nombre: 'Remera blanca estampada', direccion: '/admin/asset/img/images.jpg', precio: 10000, categoria: 'remeras',estado: true  },
    { id: 2, nombre: 'Gorra estampada', direccion: '/admin/asset/img/ChatGPT-Image-gorra.png', precio: 4000, categoria: 'gorras',estado: true },
    { id: 3, nombre: 'Taza con el logo', direccion: '/admin/asset/img/taza1.png', precio: 8000, categoria: 'tazas' ,estado: true}
];
let pedidos = []
let detallePedido = []
let usuarios = [
    {id: 1, nombre: 'Messi', gmail: 'messi@gmail.com', telefono: 3863452039, direccion: 'Monteros,av. san cristonomo 34', password: 'S4lch1p4p4', estado: false}
]
localStorage.setItem('usuarios',JSON.stringify(usuarios))
localStorage.setItem('pedidos',JSON.stringify(pedidos))
localStorage.setItem('detallePedido',JSON.stringify(detallePedido))
// nose qie tiene que llevar la de usuario xD
//mostrar datos del menu iniciales al momento

//para evitar que se inicie dos veces y evitar comflicto entre la libreri
let tablaMenu = null;

let tablaProducto = null;
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
        console.log(merch)
        if(merch[indice]){
            merch[indice].estado = !merch[indice].estado
        }else{
            console.log('no esxiste')
            return
        }
        guardarLista('merch', merch);
        cargarProductos()
    }else{
        if(menu[indice]){
            menu[indice].estado = !menu[indice].estado
        }else{
            console.log('no esxiste')
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
        responsive: true
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

// Carga los datos del menu en la tabla
function cargarMenu() {
    const menu = obtenerLista('menu');

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

// Cuando carga la pagina, conecta formularios y carga tablas

window.addEventListener('load', () => {
    formMenu.addEventListener('submit', agregarMenu);

    formProducto.addEventListener('submit', agregarProducto);

    bodyTabla.addEventListener('click', manejarAccionesMenu);

    bodyTablaProduc.addEventListener('click', manejarAccionesProductos);

    cargarMenu();

    cargarProductos();
});