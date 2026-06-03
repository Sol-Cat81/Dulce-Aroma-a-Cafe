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

        }else
            {
                console.log(users)
            users.forEach(usuario => {
            if(usuario.nombre === nombre.value && usuario.password === password.value)
            {
                sessionStorage.clear()
                sessionStorage.setItem('usuario', usuario.id);
                window.location.href = ".../../index.html";

            }else
            {
                alert("usuario no existe")
            }
    });
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