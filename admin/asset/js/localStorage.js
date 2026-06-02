const menuInicial = [
    { id: 1, nombre: 'Espresso', descripcion: 'Cafe concentrado', precio: 1500, categoria: 'cafe' },
    { id: 2, nombre: 'Cappuchino', descripcion: 'Espresso con leche vaporizada', precio: 2200, categoria: 'cafe' },
    { id: 3, nombre: 'Latte', descripcion: 'Espresso con agua caliente', precio: 1700, categoria: 'cafe' },
    { id: 4, nombre: 'Mocha', descripcion: 'Cafe con chocolate y leche', precio: 2700, categoria: 'cafe' },
    { id: 5, nombre: 'Macchiato', descripcion: 'Espresso con espuma de leche', precio: 2000, categoria: 'cafe' }
];

const merchInicial = [
    { id: 1, nombre: 'Remera blanca estampada', direccion: '/admin/asset/img/images.jpg', precio: 10000, categoria: 'remeras' },
    { id: 2, nombre: 'Gorra estampada', direccion: '/admin/asset/img/ChatGPT-Image-gorra.png', precio: 4000, categoria: 'gorras' },
    { id: 3, nombre: 'Taza con el logo', direccion: '/admin/asset/img/taza1.png', precio: 8000, categoria: 'tazas' }
];

let pedidos = []
let detallePedido = []
// nose qie tiene que llevar la de usuario xD

//mostrar datos del menu iniciales al momento
if (localStorage.getItem('menu') === null){
    localStorage.setItem('menu',JSON.stringify(menuInicial));
}

//mostrar datos del merch iniciales al momento
if (localStorage.getItem('merch') === null){
    localStorage.setItem('merch',JSON.stringify(merchInicial));
}

//para evitar que se inicie dos veces y evitar comflicto entre la libreri
let tablaMenu = null;

let tablaProducto = null;

function obtenerLista(clave){
    return JSON.parse(localStorage.getItem(clave)) || []
}

function guardarLista (clave,lista){
    localStorage.setItem(clave, JSON.stringify(lista));
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
    return `
        <tr>
            <td>${comida.nombre}</td>
            <td>${comida.descripcion}</td>
            <td>${comida.precio}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="activo">Activar</button>
            </td>
        </tr>
    `;
}

// Crea una fila HTML para la tabla de productos
function crearFilaProducto(producto) {
    return `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.direccion}</td>
            <td>${producto.precio}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="activo">Activar</button>
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
        categoria: categoriaMenu.value
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
        direccion: imagen,
        precio: Number(precioProducto.value),
        categoria: categoriaProducto.value
    };

    productos.push(productoNuevo);

    guardarLista('merch', productos);

    formProducto.reset();

    cargarProductos();
}

// Cuando carga la pagina, conecta formularios y carga tablas
window.addEventListener('load', () => {
    formMenu.addEventListener('submit', agregarMenu);

    formProducto.addEventListener('submit', agregarProducto);

    cargarMenu();

    cargarProductos();
});