function send() {
    let clienteData = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        estadoCivil: $("#estadoCivil").val(),
        direccion: $("#direccion").val(),
        profesion: $("#profesion").val(),
        nacionalidad: $("#nacionalidad").val()
    };

    crearCliente(clienteData); 
}

function update() {
}

function destroy() {
}

$(document).ready(function () {
    cargarTabla();
});

async function cargarTabla() {
  try {
    const response = await axiosApi.get('/cliente');
    $("#data-tableClient").empty(); 
    response.data.forEach(cliente => {
        let filaHTML = `<tr data-ced="${cliente.cedula}">
            <td>${cliente.cedula}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.profesion}</td>
            <td>${cliente.nacionalidad}</td>
            <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
        </tr>`;
        $("#data-tableClient").append(filaHTML);
    });
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
  }
}