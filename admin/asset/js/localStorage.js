const menu = [
    //cafe
    {id: 1, nombre: 'Espresso', descripcion: 'Cafe concentrado', precio: 1500, categoria:'cafe'},
    {id: 2, nombre: 'Cappuchino', descripcion: 'Espresso con leche vaporizada', precio: 2200, categoria:'cafe'},
    {id: 3, nombre: 'Latte', descripcion: 'Espresso con agua caliente', precio: 1700, categoria:'cafe'},
    {id: 4, nombre: 'Mocha', descripcion: 'Café con chocolate y leche', precio: 2700, categoria:'cafe'},
    {id: 5, nombre: 'Macchiato', descripcion: 'Espresso con espuma de leche', precio: 2000, categoria:'cafe'},
    {id: 6, nombre: 'Flat White', descripcion: 'Café intenso con leche cremosa', precio: 2400, categoria:'cafe'},
    {id: 7, nombre: 'Cold Brew', descripcion: 'Café frío infusionado', precio: 2600, categoria:'cafe'},
    {id: 8, nombre: 'Affogato', descripcion: 'Espresso con helado', precio: 2900, categoria:'cafe'},
    {id: 9, nombre: 'Café Doble', descripcion: 'Doble shot de espresso', precio: 2100, categoria:'cafe'},
    {id: 10, nombre: 'Americano', descripcion: 'Espresso con agua caliente', precio: 1700, categoria:'cafe'},
    //panaderia
    {id: 11, nombre: 'Medialunas', descripcion: 'Clásicas de manteca x3', precio: 1800, categoria:'panaderia'},
    {id: 12, nombre: 'Factura de crema', descripcion: 'Masa dulce con crema pastelera', precio: 1600, categoria:'panaderia'},
    {id: 13, nombre: 'Chipá', descripcion: 'Panecillo de queso', precio: 1700, categoria:'panaderia'},
    {id: 14, nombre: 'Tostado', descripcion: 'Jamón y queso caliente', precio: 2800, categoria:'panaderia'},
    {id: 15, nombre: 'Bagel', descripcion: 'Pan redondo suave', precio: 2000, categoria:'panaderia'},
    {id: 16, nombre: 'Croissant', descripcion: 'Hojaldre francés', precio: 2300, categoria:'panaderia'},
    {id: 17, nombre: 'Pan integral', descripcion: 'Pan con harina integral', precio: 2100, categoria:'panaderia'},
    {id: 18, nombre: 'Rosca dulce', descripcion: 'Con azúcar y frutas', precio: 2500, categoria:'panaderia'},
    {id: 19, nombre: 'Pepas', descripcion: 'Galletas con membrillo', precio: 1900, categoria:'panaderia'},
    {id: 20, nombre: 'Pan de campo', descripcion: 'Pan artesanal crocante', precio: 2200, categoria:'panaderia'},
    //pasteleria
    {id: 21, nombre: 'Brownie', descripcion: 'Chocolate semi amargo y nueces', precio: 2000, categoria:'pasteleria'},
    {id: 22, nombre: 'Cheesecake', descripcion: 'Tarta cremosa de queso', precio: 3000, categoria:'pasteleria'},
    {id: 23, nombre: 'Lemon Pie', descripcion: 'Crema de limón y merengue', precio: 2800, categoria:'pasteleria'},
    {id: 24, nombre: 'Tiramisú', descripcion: 'Postre italiano con café', precio: 3200, categoria:'pasteleria'},
    {id: 25, nombre: 'Red Velvet', descripcion: 'Torta roja con crema', precio: 3300, categoria:'pasteleria'},
    {id: 26, nombre: 'Budín de limón', descripcion: 'Esponjoso y cítrico', precio: 2200, categoria:'pasteleria'},
    {id: 27, nombre: 'Alfajor artesanal', descripcion: 'Relleno con dulce de leche', precio: 1700, categoria:'pasteleria'},
    {id: 28, nombre: 'Cookie', descripcion: 'Galleta con chips de chocolate', precio: 1600, categoria:'pasteleria'},
    {id: 29, nombre: 'Selva Negra', descripcion: 'Torta de chocolate y cerezas', precio: 3500, categoria:'pasteleria'},
    {id: 30, nombre: 'Flan casero', descripcion: 'Con dulce de leche', precio: 2400, categoria:'pasteleria'},
    //Licuados
    {id: 31, nombre: 'Licuado de banana', descripcion: 'Dulce de banana con leche', precio: 2500, categoria:'licuados'},
    {id: 32, nombre: 'Licuado de frutilla', descripcion: 'Frutillas frescas y leche', precio: 2700, categoria:'licuados'},
    {id: 33, nombre: 'Licuado tropical', descripcion: 'Mango y ananá', precio: 3000, categoria:'licuados'},
    {id: 34, nombre: 'Licuado verde', descripcion: 'Espinaca y manzana', precio: 2900, categoria:'licuados'},
    {id: 35, nombre: 'Licuado de durazno', descripcion: 'Durazno y yogur', precio: 2800, categoria:'licuados'},
    {id: 36, nombre: 'Licuado energético', descripcion: 'Avena y banana', precio: 3100, categoria:'licuados'},
    {id: 37, nombre: 'Licuado cítrico', descripcion: 'Naranja y limón', precio: 2600, categoria:'licuados'},
    {id: 38, nombre: 'Licuado berries', descripcion: 'Frutos rojos', precio: 3200, categoria:'licuados'},
    {id: 39, nombre: 'Licuado de chocolate', descripcion: 'Chocolate y leche fría', precio: 3000, categoria:'licuados'},
    {id: 40, nombre: 'Licuado detox', descripcion: 'Manzana y pepino', precio: 3100, categoria:'licuados'},
    //Sin Tacc
    {id: 41, nombre: 'Pan libre de gluten', descripcion: 'Pan hecho con harina premezcla', precio: 1800, categoria:'sin-tacc'},
    {id: 42, nombre: 'Cookie sin TACC', descripcion: 'Galleta apta celíacos', precio: 1900, categoria:'sin-tacc'},
    {id: 43, nombre: 'Brownie sin TACC', descripcion: 'Chocolate sin gluten', precio: 2300, categoria:'sin-tacc'},
    {id: 44, nombre: 'Muffin sin TACC', descripcion: 'Esponjoso de vainilla', precio: 2100, categoria:'sin-tacc'},
    {id: 45, nombre: 'Budín sin TACC', descripcion: 'Budín artesanal', precio: 2200, categoria:'sin-tacc'},
    {id: 46, nombre: 'Alfajor sin TACC', descripcion: 'Dulce de leche artesanal', precio: 2000, categoria:'sin-tacc'},
    {id: 47, nombre: 'Crackers sin gluten', descripcion: 'Snack crocante', precio: 1700, categoria:'sin-tacc'},
    {id: 48, nombre: 'Torta sin TACC', descripcion: 'Chocolate apta celíacos', precio: 3200, categoria:'sin-tacc'}
]

const merch = [
    {id: 1, nombre: 'Remera blanca estampada', direccion: '/admin/asset/img/images.jpg', precio: 10000, categoria: 'remeras'},
    {id: 2, nombre: 'Remera latido de cafe', direccion: '/admin/asset/img/ChatGPT-Image-remera.png', precio: 12000, categoria: 'Remeras'},
    {id: 3, nombre: 'Gorra estampada', direccion: '/admin/asset/img/ChatGPT-Image-gorra.png', precio: 4000, categoria: 'Gorras'},
    {id: 4, nombre: 'Taza con el logo', direccion: '/admin/asset/img/taza1.png', precio: 8000, categoria: 'Tazas'},
    {id: 5, nombre: 'Taza amante del cafe', direccion: '/admin/asset/img/Despertar.png', precio: 9000, categoria: 'Tazas'},
    {id: 6, nombre: 'Vaso termico estampado', direccion: '/admin/asset/img/vaso1.png', precio: 10000, categoria: 'Vasos'},
    {id: 7, nombre: 'Vaso de vidrio x6', direccion: '/admin/asset/img/ChatGPT-Image-vaso2.png', precio: 15000, categoria: 'Vasos'},
    {id: 8, nombre: 'Buzo estampado', direccion: '/admin/asset/img/buzo.png', precio: 12000, categoria: 'Otros'},
    {id: 9, nombre: 'Bolso estampado', direccion: '/admin/asset/img/bolso.png', precio: 11000, categoria: 'Otros'}
]

// nose qie tiene que llevar la de usuario xD
localStorage.setItem('menu', JSON.stringify(menu))

const guardado = JSON.parse(localStorage.getItem('menu'))
console.log(guardado)

const cargaMenu = async() => {
    contenido = "";
    guardado.forEach(comida => {
         cont =`<tr><td>${comida.nombre}</td>
                <td>${comida.descripcion}</td>
                <td>${comida.precio}</td>
                <td>
                <button class="editar">Editar</button>
                <button class="activo">Activar</button>
                </td>
                </tr>`
         contenido = contenido + cont
    });
    bodyTabla.innerHTML = contenido
}

window.addEventListener('load',async()=>{
    cargaMenu()
    let table = new DataTable('#menutabla', {
    responsive: true,
});
})

localStorage.setItem('merch', JSON.stringify(merch))

const productoGuardado = JSON.parse(localStorage.getItem('merch'))
console.log(productoGuardado)

const cargamerch = async()=>{
    contenidoProducto = "";
    productoGuardado.forEach(produc =>{
         contP =`<tr><td>${produc.nombre}</td>
                <td>${produc.direccion}</td>
                <td>${produc.precio}</td>
                <td>
                <button class="editar">Editar</button>
                <button class="activo">Activar</button>
                </td>
                </tr>`
         contenidoProducto = contenidoProducto + contP
    });
    bodyTablaProduc.innerHTML = contenidoProducto
}
window.addEventListener('load',async()=>{
    cargamerch()
    let table = new DataTable('#productable', {
    responsive: true,
});
})