const users = JSON.parse(localStorage.getItem('usuarios'))

const admin = {
    nombre_admin: "admin",
    password_admin: "123",
}

const nombre = document.getElementById('nombre');
const password = document.getElementById('password')
const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click',()=>{
    if(admin.nombre_admin === nombre.value && admin.password_admin === password.value)
        {
            window.location.href = ".../../../admin/index.html";

        }else{
            for(let i = 0; i < users.length; i++){
                if(users[i].nombre === nombre.value && users[i].password === password.value)
            {
                users[i].estado = true
                localStorage.setItem('usuarios', JSON.stringify(users));
                sessionStorage.clear()
                sessionStorage.setItem('usuario', users[i].id);
                window.location.href = ".../../index.html";
                return;
            }
            }
        }
})

const card = document.getElementById('card');
const mostrarRegistro = document.getElementById('mostrarRegistro');
const mostrarLogin = document.getElementById('mostrarLogin');

mostrarRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    card.classList.add('modo-registro');
});

mostrarLogin.addEventListener('click', (e) => {
    e.preventDefault();
    card.classList.remove('modo-registro');
});

/* ----- REGISTRO DE USUARIO ----- */

const nombreUsuario = document.getElementById('nombre-usuario')
const correoUsuario = document.getElementById('correo-usuario')
const telefonoUsuario = document.getElementById('telefono-usuario')
const direccionUsuario = document.getElementById('dirrecion-usuario')
const passwordUsuario = document.getElementById('password-register')
const btnCrearRegistro = document.getElementById('btnCrearRegistro')
const alertaNombre = document.getElementById("AlertaNombre");
const alertaCorreo = document.getElementById("AlertaCorreo");
const alertaTelefono = document.getElementById("AlertaTelefono");

function crearId(lista){
    if(lista.length === 0){
        return 1;
    }
    return lista[lista.length - 1].id + 1;
}

const formularioRegistro = document.querySelector('.panel-registro form');

formularioRegistro.addEventListener('submit', function(e){
    
    e.preventDefault();

    if (!formularioRegistro.checkValidity()) {
        alert('Por favor completa todos los campos obligatorios (incluido la política de privacidad)');
        return;
    }

    
    const existeNombre = users.find(busca => busca.nombre === nombreUsuario.value)
    const existeCorreo = users.find(busca => busca.gmail === correoUsuario.value)
   
    if(existeNombre){
        alertaNombre.textContent = "Ese usuario ya existe.";
        alertaNombre.style.display = "block";
    }else if(existeCorreo){
        alertaCorreo.textContent = "Ese correo ya esta registrado.";
        alertaCorreo.style.display = "block";
    }else{
        const usuarioNuevo = {
            id: crearId(users),
            nombre: nombreUsuario.value,
            gmail: correoUsuario.value,
            telefono: telefonoUsuario.value,
            direccion: direccionUsuario.value,
            password: passwordUsuario.value,
            estado: false
        }
        users.push(usuarioNuevo)
        alert('Usuario registrado con exito!. Ya puede iniciar sesion')
        localStorage.setItem('usuarios', JSON.stringify(users));
        window.location.reload(true);
    }
})