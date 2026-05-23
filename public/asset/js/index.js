const menuOpciones = document.querySelector(".menu-opciones");
const header = document.querySelector("header");
const contenedor = document.querySelector(".contenedor-nav");
const btnMenu = document.getElementById("btn-menu");

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

/* Slider de productos con la libreria swiper */