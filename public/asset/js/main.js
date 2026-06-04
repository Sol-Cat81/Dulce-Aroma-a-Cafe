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
            for(let i = 0; i < users.length; i++){
                console.log('hola')
                if(users[i].nombre === nombre.value && users[i].password === password.value)
            {
                users[i].estado = true
                localStorage.setItem('usuarios', JSON.stringify(users));
                sessionStorage.clear()
                sessionStorage.setItem('usuario', users[i].id);
                window.location.href = ".../../index.html";

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