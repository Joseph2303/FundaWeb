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
    cargarTabla();
  } catch (error) {
    console.error('Error al enviar los datos del cliente:', error);
  }
}

async function update() {
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
    await actualizarCliente($("#cedula").val(), clienteData);
    cargarTabla();
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
  }
}


async function destroy() {
  const cedula = $("#cedula").val();
  
  try {
    await eliminarCliente(cedula);
    cargarTabla();
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
  }
}

$(document).ready(function () {
  cargarTabla();
});

async function cargarTabla() {
  try {
    const response = await obtenerClientes();
    $("#data-tableClient").empty();
    response.data.forEach(cliente => {
      let filaHTML = `<tr data-ced="${cliente.cedula}">
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.estadoCivil}</td>
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