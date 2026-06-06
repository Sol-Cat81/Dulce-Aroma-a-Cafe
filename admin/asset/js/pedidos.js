const totalPedidos = document.getElementById('totalPedidos')
const totalPendientes = document.getElementById('pedidosPendientes')
const totalEntregados = document.getElementById('pedidosEntregados')

function actualizarCardsPedidos(){
    const ped = JSON.parse(localStorage.getItem('pedidos')) || []
    const pendientes = ped.filter(Elem => Elem.estado === 'pendiente')
    const entregados = ped.filter(Elem => Elem.estado === 'entregado')

    totalPedidos.innerHTML = `${ped.length}`
    totalPendientes.innerHTML = `${pendientes.length}`
    totalEntregados.innerHTML = `${entregados.length}`
}

window.addEventListener('load', ()=>{
    actualizarCardsPedidos()
})

bodyTablaPedidos.addEventListener('change',()=>{
    actualizarCardsPedidos()
})