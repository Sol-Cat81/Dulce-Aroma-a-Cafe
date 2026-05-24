const usuario = {
    nombre_usuario: "nicolas",
    password_usuario: "roko"
}

const admin = {
    nombre_admin: "admin",
    password_admin: "123",
}

const nombre = document.getElementById('nombre');
const password = document.getElementById('password')
const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click',()=>{

    if(usuario.nombre_usuario === nombre.value 
        && 
        usuario.password_usuario === password.value)
        {
            window.location.href = "../../index.html";
        }else if(
            admin.nombre_admin === nombre.value 
            &&
            admin.password_admin === password.value
        ){
            window.location.href = "../admin/index.html";
        }else{
            alert("usuario no existe")
        }
})