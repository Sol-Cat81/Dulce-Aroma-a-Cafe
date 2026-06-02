/* ---------- VARIABLES ---------- */

/* Para el cabezal */
const menuOpciones = document.querySelector(".menu-opciones");// contenedor de las opciones de navegacion
const header = document.querySelector("header");// cabezal
const contenedor = document.querySelector(".contenedor-nav");// contenedor principal
const btnMenu = document.getElementById("btn-menu");// boton para desplegar el menu

/* Para el filtro del menu */
const menu = JSON.parse(localStorage.getItem('menu'))
const bodyTabla = document.getElementById('bodyTabla')//cuerpo de la tabla menu
const filtroMenu = document.getElementById('filtro-menu')// select para filtrar menu
let selectFiltroMenu = ''// guarda la seleccion del menu
let table// para la tabla

/* Para el filtro del slider */
const productoGuardado = JSON.parse(localStorage.getItem('merch'))
const contenedorMerch = document.querySelector('.swiper-wrapper')// contenedor para las cards de los productos
const filtroMerch = document.getElementById('filtro-merch')// select para filtrar el slider
let selectFiltroMerch = ''// guarda la seleccion de la merch
// swiper - motion - chartjs - lucide
// nomenclatura BEM

/* configurecion del Slider de productos (con la libreria swiper) */
const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay:true,
            AddIcons:true,
            spaceBetween:10,

            pagination: {
            el: 'swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: "auto",
            }
        }
});

/* ---------- FUNCIONES ---------- */

/* para cargar el menu */
function cargaMenu(menu) {

    table.clear()// borra la anterior tabla

    menu.forEach(comida => {// recorremos el array menu y cargamos la tabla
        table.row.add([
            comida.nombre,
            comida.descripcion,
            `$` + comida.precio,
            `<div class="btn-agre" onclick="agregar(${comida.id},'consumible')" id="btn-agregar"><ion-icon name="add-outline"></ion-icon> Agregar </div>`
        ])
    })

    table.draw()
}
function filtrar_Menu(){
    const resultadoMenu = menu.filter(filtrar)
    cargaMenu(resultadoMenu)
}
function filtrar(comida){
    if(selectFiltroMenu.toLowerCase()){
        return comida.categoria.toLowerCase() === selectFiltroMenu
    } else{
        return comida
    }
}

function cargaMerch(productoGuardado){
    contenedorMerch.innerHTML=""
    let carga = ``

    productoGuardado.forEach(prod=>{
        carga+=`
        <div class="swiper-slide">
            <div class="producto">
                <img src="${prod.direccion}" alt="">
                <div class="infoprod">
                    <div class="nombre">${prod.nombre}</div>
                    <div class="precio">${prod.precio}</div>
                    <button class="btn comprar-merch" id="btn-agregar" onclick="agregar(${prod.id},'merch')">
                        comprar 
                    </button>
                </div>
            </div>
        </div>
        `
    })
    contenedorMerch.innerHTML= carga
}
function filtrarMerch(){
    const resultadoMerch = productoGuardado.filter(filtrarM)
    cargaMerch(resultadoMerch)
}
function filtrarM(prod){
    if(selectFiltroMerch.toLowerCase()){
        return prod.categoria.toLowerCase() === selectFiltroMerch
    } else{
        return prod
    }
}

/* ---------- EVENTOS ---------- */
/* para desplegar el menu cuando se haga click en las 3 lineas (para telefono) */
btnMenu.addEventListener("click", () => {
    menuOpciones.classList.toggle("mostrar");
});
/* para ocultar las opciones del menu y se muestre el icono de 3 rayas */
const responsive = () => {
    if(window.innerWidth < 950){
        header.appendChild(menuOpciones);
    } else {
        contenedor.appendChild(menuOpciones);
        menuOpciones.classList.remove("mostrar");
    }
}
responsive();
window.addEventListener("resize", responsive);

/* para cuando el menu sale del hero */
window.addEventListener("scroll", () => {

            if(window.scrollY > 100){
                header.classList.add("scrolled");
            }else{
                header.classList.remove("scrolled");
            }
        });
/* cuando la pagina carga se configura la tabla y se carga el local store */
window.addEventListener('load', ()=>{
    table = new DataTable('#menutabla', {
        scrollX: true,
        responsive: true,
        language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
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

    cargaMenu(menu)
    cargaMerch(productoGuardado)
})
// filtro del menu 
filtroMenu.addEventListener('change',e =>{
    let seleccionMenu = e.target.value;
    if(seleccionMenu == "todos"){
        selectFiltroMenu = ''
    }else{
        selectFiltroMenu = seleccionMenu;
    }
    filtrar_Menu()
})
/* filtro del slider merch */
filtroMerch.addEventListener('change',e =>{
    let seleccionMerch = e.target.value;
    if(seleccionMerch == "todos"){
        selectFiltroMerch = ''
    }else{
        selectFiltroMerch = seleccionMerch;
    }
    filtrarMerch()
})

