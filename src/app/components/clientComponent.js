import { obtenerClientes, crearCliente } from "../Service/ClienteService.js";

async function send() {
  const clienteData = {
    cedula: $("#cedula").val(),
    nombre: $("#nombre").val(),
    apellidos: $("#apellidos").val(),
    estadoCivil: $("#estadoCivil").val(),
    direccion: $("#direccion").val(),
    profesion: $("#profesion").val(),
    nacionalidad: $("#nacionalidad").val()
  };
  console.log(clienteData);

  try {
    await crearCliente(clienteData);
    // Si no hay errores en la creación del cliente, puedes cargar la tabla
    cargarTabla();
  } catch (error) {
    console.error('Error al enviar los datos del cliente:', error);
  }
}

function update() {
}

function destroy() {
}

$(document).ready(function () {
  console.log("esta levantando");
  cargarTabla();
});

async function cargarTabla() {
  try {
    console.log("esta levantando");
    const response = await obtenerClientes();
    console.log('Clientes obtenidos:', response);
    $("#data-tableClient").empty();
    response.data.forEach(cliente => {
      let filaHTML = `<tr data-ced="${cliente.cedula}">
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.estadoCivil}</td>
            <td>${cliente.cedula}</td>
            <td>${cliente.cedula}</td>
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
$('#sendClient').click(send);