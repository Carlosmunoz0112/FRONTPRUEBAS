const url = 'https://apifinalcarlos.onrender.com/api/producto';

const listarproducto = async () => {
    let body = document.getElementById('contenido');
    if (body) {
        let mensaje = '';

        fetch(url)
            .then(res => res.json())
            .then(function (data) {
                if (Array.isArray(data.productos)) { // Verifica si data.productos es un arreglo
                    data.productos.forEach((producto) => {
                        mensaje +=
                            `<tr><td>${producto.Nombreproducto}</td>` +
                            `<td>${producto.categoria}</td>` +
                            `<td>${producto.precio}</td>` +
                            `<td>${producto.cantidad}</td>` +
                            `<td>${producto.descripcionproducto}</td>` +
                            `<td>${producto.estado}</td>` +
                            `<td>
                                <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(producto)})'>Editar</a>
                                <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${producto._id}")'>Eliminar</a>
                            </td></tr>`;
                    });
                    body.innerHTML = mensaje;
                } else {
                    console.error('La propiedad "productos" no es un arreglo en los datos recibidos');
                }
            });
    }
};

listarproducto();
