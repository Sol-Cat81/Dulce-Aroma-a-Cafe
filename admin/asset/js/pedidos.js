const pedidosinfo = JSON.parse(localStorage.getItem('pedidos'))
let table

function cargapedido(pedidos) {

    table.clear()// borra la anterior tabla

    pedidos.forEach(pedido => {// recorremos el array menu y cargamos la tabla
        table.row.add([
            pedido.id,
            pedido.Cliente,
            pedido.direccion,
            pedido.total,
            pedido.estado,
            `<button class="editar" data-accion="editar-producto" data-id="${producto.id}">Editar</button>`
        ])
    })

    table.draw()
}

window.addEventListener('load', ()=>{
    table = new DataTable('#tablaUsuarios', {
        scrollX: true,
        responsive: true,
        language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ninguna comida encontrada",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ninguna comida encontrada",
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

    cargapedido(pedidosinfo)
})