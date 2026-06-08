// Guarda todas las opciones del panel lateral.
const opcionesPanel = document.querySelectorAll(".opcion-panel"); 

// Guarda todas las secciones principales del panel.
const seccionesPanel = document.querySelectorAll(".seccion-panel");

opcionesPanel.forEach(function(opcion){

    //dectectamos cuando aga click el usuario
    opcion.addEventListener("click", function(){

        //obtenemos el nombre de la seccion gurdad en data-section
        const seccionElegida = opcion.dataset.section;

        //recorremos todas las seccion del main
        seccionesPanel.forEach(function(seccion){

            //oculta cada seccion quirando la clase activa
            seccion.classList.remove("seccion-activa")
        });

        opcionesPanel.forEach(function(item){
            item.classList.remove("activo-panel")
        });
        //muestra la seccion que elegimos 
        document.getElementById(seccionElegida).classList.add("seccion-activa");
        //marca las seccion elegida en el aside
        opcion.classList.add("activo-panel")
    })
})

const filtroMenu = document.getElementById('filtroMenu');
let seleccionMenu = '';//guarda la seleccion del menu

filtroMenu.addEventListener('change', () => {
    seleccionMenu = filtroMenu.value.toLowerCase();
    filtrarMenu();
});

function filtrarMenu(){
    const menu = obtenerLista('menu');
    const resultadoMenu = menu.filter(filtrar);

    cargarMenu(resultadoMenu);
}

function filtrar(comida){
    if(seleccionMenu === ''){
        return true ;
    }else{
        return comida.categoria.toLowerCase() === seleccionMenu;
    }
}
