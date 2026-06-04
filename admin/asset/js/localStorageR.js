const postulaciones = [
    {id: 1 , cargo : 'barista' , descripcion: ' Buscamos una persona responsable, amable y con buena presencia para atender clientes preparar bebidas y trabajar en equipo', ubicacion: 'tucuman', modo: 'presencial', turno: 'tarde', hora_inicio : '08:50',hora_fin:'13:00',estado: true},
    {id: 2 , cargo : 'cajero' , descripcion: ' Buscamos una persona responsable, amable y con buena presencia para atender clientes preparar bebidas y trabajar en equipo', ubicacion: 'tucuman', modo: 'presencial', turno: 'tarde', hora_inicio : '08:50',hora_fin:'13:00',estado: true}
]



const reclutas = [
    {
        id: 1 , 
        id_postulacion: 1 ,
        nombre: 'juan carlos bodoque',
        correo: 'juancarlos@bodoque',
        numeroTelefono: '1554425' ,
        archivo_cv: 'cv.pdf' ,
        estado : "pendiente",
    },
    {
        id: 2,
        id_postulacion:2 ,
        nombre: 'roko carlo',
        correo: 'roko@carlo',
        numeroTelefono: '155454',
        archivo_cv: 'cv_roko.pdf',
        estado : "pendiente",
    }
]

//para diferenciar si el formulario esta creando o editando una ya existente
let idEditado = null;

// Verificamos si ya existe información guardada
if (!localStorage.getItem("postulaciones")) {

    // Convertimos el array a texto JSON y lo guardamos
    localStorage.setItem(
        "postulaciones",
        JSON.stringify(postulaciones)
    );
}

if (!localStorage.getItem("reclutas")) {

    localStorage.setItem(
        "reclutas",
        JSON.stringify(reclutas)
    );
}

// Función encargada de pintar la tabla
function mostrarPostulaciones() {

    // Obtenemos el tbody
    const bodyTabla = document.getElementById("bodyTablaReclutacion");

    // Limpiamos el contenido anterior
    bodyTabla.innerHTML = "";

    // Recuperamos los datos del localStorage
    const postulacionesGuardadas = JSON.parse(
        localStorage.getItem("postulaciones")
    );

    // Recorremos cada postulación
    postulacionesGuardadas.forEach(postulacion => {

        // Creamos una fila
        const fila = document.createElement("tr");
        fila.id = `fila-${postulacion.id}`;

        // Insertamos las columnas
        fila.innerHTML = `
            <td>${postulacion.cargo}</td>
            <td>${postulacion.descripcion.substring(0,10)}</td>
            <td>${postulacion.ubicacion}</td>
            <td>${postulacion.modo}</td>
            <td>${postulacion.turno}</td>
            <td>${postulacion.hora_inicio}</td>
            <td>${postulacion.hora_fin}</td>
            <td>
    <button
        class="${postulacion.estado ? 'estado-abierto' : 'estado-cerrado'}"
        onclick="cambiarEstado(${postulacion.id})">

        ${postulacion.estado ? 'Abierto' : 'Cerrado'}

    </button>
</td>

<td class="columna-acciones">
    <button
        class="btn-editar"
        onclick="editarPostulacion(${postulacion.id})">
        Editar
    </button>

    <button
        class="btn-eliminar"
        onclick="eliminarPostulacion(${postulacion.id})">
       eliminar
    </button>
     <button
        class="btn-detalle"
        onclick="verPostulantes(${postulacion.id})">
        ver mas
    </button>
</td>
        `;

        // Agregamos la fila al tbody
        bodyTabla.appendChild(fila);
    });
}

/* cambiar estado del boton */
function cambiarEstado(id){

    // Recuperamos postulaciones
    const postulacionesGuardadas = JSON.parse(
        localStorage.getItem("postulaciones")
    );

    // Buscamos la postulación
    const postulacion = postulacionesGuardadas.find(
        p => p.id === id
    );

    // Invertimos el estado
    postulacion.estado = !postulacion.estado;

    // Guardamos cambios
    localStorage.setItem(
        "postulaciones",
        JSON.stringify(postulacionesGuardadas)
    );

    // Actualizamos tabla
    mostrarPostulaciones();
}

function eliminarPostulacion(id) {

    // Recuperamos las postulaciones
    let postulacionesGuardadas = JSON.parse(
        localStorage.getItem("postulaciones")
    );

    // Filtramos todas menos la seleccionada
    postulacionesGuardadas = postulacionesGuardadas.filter(
        postulacion => postulacion.id !== id
    );

    // Guardamos nuevamente
    localStorage.setItem(
        "postulaciones",
        JSON.stringify(postulacionesGuardadas)
    );

    // Actualizamos la tabla
    mostrarPostulaciones();
}

function editarPostulacion(id) {

    // Recuperamos los datos

    const postulacionesGuardadas = JSON.parse(
        localStorage.getItem("postulaciones")
    );

    const postulacion = postulacionesGuardadas.find(
        postulacion => postulacion.id === id
    );

    if(!postulacion){
        return;
    }

    // Cargar datos en el formulario
    document.getElementById("cargo-postulacion").value =
        postulacion.cargo;

    document.getElementById("descripcion-postulacion").value =
        postulacion.descripcion;

    document.getElementById("ubicacion-postulacion").value =
        postulacion.ubicacion;

    document.getElementById("modalidad-postulacion").value =
        postulacion.modo;

    document.getElementById("turno-postulacion").value =
        postulacion.turno;

    document.getElementById("hora-inicio").value =
        postulacion.hora_inicio;

    document.getElementById("hora-fin").value =
        postulacion.hora_fin;

    // Guardamos el id que se está editando
    idEditando = id;

    // Cambiar texto del botón
    document.querySelector(".agregar").textContent =
        "Guardar cambios";
}

mostrarPostulaciones();

// Obtenemos el formulario
const formularioPostulacion = document.querySelector(".form-postulacion");

// Cuando se envía el formulario
formularioPostulacion.addEventListener("submit", crearPostulacion);

function crearPostulacion(evento){

    // Evita que la página se recargue
    evento.preventDefault();

    // Capturamos los valores de los inputs
    const cargo = document.getElementById("cargo-postulacion").value;

    const descripcion = document.getElementById("descripcion-postulacion").value;

    const ubicacion = document.getElementById("ubicacion-postulacion").value;

    const modo = document.getElementById("modalidad-postulacion").value;

    const turno = document.getElementById("turno-postulacion").value;

    const horaInicio = document.getElementById("hora-inicio").value;

    const horaFin = document.getElementById("hora-fin").value;

    // Validación básica
    if(
        cargo === "" ||
        descripcion === "" ||
        ubicacion === "" ||
        horaInicio === "" ||
        horaFin === ""
    ){
        alert("Debe completar todos los campos");
        return;
    }

    // Recuperamos las postulaciones guardadas
    const postulacionesGuardadas = JSON.parse(
    localStorage.getItem("postulaciones"));

    if(idEditando !== null){

    const postulacionEditar =
        postulacionesGuardadas.find(
            p => p.id === idEditando
        );

    postulacionEditar.cargo = cargo;
    postulacionEditar.descripcion = descripcion;
    postulacionEditar.ubicacion = ubicacion;
    postulacionEditar.modo = modo;
    postulacionEditar.turno = turno;
    postulacionEditar.hora_inicio = horaInicio;
    postulacionEditar.hora_fin = horaFin;

    localStorage.setItem(
        "postulaciones",
        JSON.stringify(postulacionesGuardadas)
    );

    mostrarPostulaciones();

    formularioPostulacion.reset();

    idEditando = null;

    document.querySelector(".agregar").textContent =
        "Agregar";

    alert("Postulación actualizada correctamente");

    return;
    }

    // Generamos un id nuevo
    let nuevoId ;

    //si ecisten postulaciones
    if(postulacionesGuardadas.length > 0){

        //toma el ultimo id de la postulacion de la ultima
        const ultimaPostulacion = postulacionesGuardadas[
            postulacionesGuardadas.length - 1
        ];

        //suma 1 al ultimo id
        nuevoId = ultimaPostulacion.id + 1;
    }else{
        nuevoId = 1;
    }
    // Creamos el objeto
    const nuevaPostulacion = {

        id: nuevoId,

        cargo: cargo,

        descripcion: descripcion,

        ubicacion: ubicacion,

        modo: modo,

        turno: turno,

        hora_inicio: horaInicio,

        hora_fin: horaFin,

        // Siempre inicia cerrada
        estado: false
    };

    // Agregamos la nueva postulación
    postulacionesGuardadas.push(nuevaPostulacion);

    // Guardamos nuevamente
    localStorage.setItem(
        "postulaciones",
        JSON.stringify(postulacionesGuardadas)
    );

    // Actualizamos la tabla
    mostrarPostulaciones();

    // Limpiamos formulario
    formularioPostulacion.reset();

    alert("Postulación creada correctamente");
}

function verPostulantes(idPostulacion){

    console.log(
        "Se hizo click en:",
        idPostulacion
    );

    // Verifica si ya está abierta
    const detalleExistente =
        document.getElementById(`detalle-${idPostulacion}`);

    // Si existe la cerramos
    if(detalleExistente){
        detalleExistente.remove();
        return;
    }

    // Obtener fila principal
    const filaPrincipal =
        document.getElementById(`fila-${idPostulacion}`);
        console.log(filaPrincipal);

    // Filtrar reclutas de esta postulación
    const reclutasGuardados = JSON.parse(localStorage.getItem("reclutas"));

    const reclutasFiltrados = 
        reclutasGuardados.filter(
            recluta => recluta.id_postulacion === idPostulacion
        )
        console.log(reclutasFiltrados);
    // Crear fila detalle
    const filaDetalle =
        document.createElement("tr");

    filaDetalle.id = `detalle-${idPostulacion}`;

    filaDetalle.innerHTML = `
        <td colspan="9">

            <div class="detalle-postulantes">

                <h3>
                    Postulantes para esta vacante
                </h3>

                <table class="tabla-postulantes">

                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>CV</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>

                        ${
                            reclutasFiltrados.map(recluta => `
                                <tr>
                                    <td>${recluta.nombre}</td>
                                    <td>${recluta.correo}</td>
                                    <td>${recluta.numeroTelefono}</td>
                                    <td>${recluta.archivo_cv}</td>
                                    <td>
                                        <button class=" ${recluta.estado === "pendiente" 
                                            ? "estado-recluta-activo"
                                            : "estado-recluta"
                                        } "
                                        onclick = " cambiarEstadoRecluta(${recluta.id},'pendiente') ">
                                        Pendiente </button>

                                        <button class="${recluta.estado === "revisado"
                                            ? "estado-recluta-revisado"
                                            : "estado-recluta"
                                        } " onclick = " cambiarEstadoRecluta (${recluta.id},'revisado') ">
                                        Revisado
                                        </button>

                                        <button class=" ${recluta.estado === "descartado" 
                                            ?"estado-recluta-descartado"
                                            :"estado-recluta"
                                        } " onclick = " cambiarEstadoRecluta (${recluta.id},'descartado') ">
                                        Descartado
                                        </button>
                                    </td>

                                </tr>`).join("")
                        }

                    </tbody>

                </table>

            </div>

        </td>`;

    filaPrincipal.insertAdjacentElement(
        "afterend",
        filaDetalle
    );
}

function cambiarEstadoRecluta (idRecluta,nuevoEstado){
    const reclutasGuardados = JSON.parse(localStorage.getItem("reclutas"));

    const recluta = reclutasGuardados.find(r => r.id === idRecluta);

    if(!recluta){
        return;
    }

    recluta.estado = nuevoEstado;

    localStorage.setItem("reclutas",JSON.stringify(reclutasGuardados));

    const idPostulacion =
        recluta.id_postulacion;

    const detalleExistente =
        document.getElementById(
            `detalle-${idPostulacion}`
        );

    if(detalleExistente){
        detalleExistente.remove();
    }

    verPostulantes(idPostulacion);
}
