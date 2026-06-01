/* variables */
const menuOpciones = document.querySelector(".menu-opciones");
const header = document.querySelector("header");
const contenedor = document.querySelector(".contenedor-nav");
const btnMenu = document.getElementById("btn-menu");

const menu = JSON.parse(localStorage.getItem('menu'))
const bodyTabla = document.getElementById('bodyTabla')
const filtroMenu = document.getElementById('filtro-menu')
let selectFiltroMenu = ''
let table

const productoGuardado = JSON.parse(localStorage.getItem('merch'))
const contenedorMerch = document.querySelector('.swiper-wrapper')
const filtroMerch = document.getElementById('filtro-merch')
let selectFiltroMerch = ''
// swiper - motion - chartjs - lucide
// nomenclatura BEM
/* Slider de productos con la libreria swiper */
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

/* FUNCIONES */
function cargaMenu(menu) {

    table.clear()

    menu.forEach(comida => {
        table.row.add([
            comida.nombre,
            comida.descripcion,
            comida.precio,
            `<ion-icon name="bag-add-outline" class="btn-agregar" onclick="comprar[${comida.id}]" id="btn-agregar"></ion-icon>`
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
                    <button class="btn btn-dark comprar-merch">
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

/* EVENTOS */
/* para desplegar el menu */
btnMenu.addEventListener("click", () => {
    menuOpciones.classList.toggle("mostrar");
});

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

window.addEventListener('load', ()=>{
    table = new DataTable('#menutabla', {
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
// filtro menu
filtroMenu.addEventListener('change',e =>{
    let seleccionMenu = e.target.value;
    if(seleccionMenu == "todos"){
        selectFiltroMenu = ''
    }else{
        selectFiltroMenu = seleccionMenu;
    }
    filtrar_Menu()

    let seleccionMerch = e.target.value;
    if(seleccionMerch == "todos"){
        selectFiltroMerch = ''
    }else{
        selectFiltroMerch = seleccionMerch;
    }
    filtrarMerch()
})
filtroMerch.addEventListener('change',e =>{
    let seleccionMerch = e.target.value;
    if(seleccionMerch == "todos"){
        selectFiltroMerch = ''
    }else{
        selectFiltroMerch = seleccionMerch;
    }
    filtrarMerch()
})
