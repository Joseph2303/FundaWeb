import { obtenerClientes, crearCliente, eliminarCliente, actualizarCliente } from "../Service/ClienteService.js";

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
    nombre: $("#nombreAct").val(),
    apellidos: $("#apellidosAct").val(),
    estadoCivil: $("#estadoCivilAct").val(),
    direccion: $("#direccionAct").val(),
    profesion: $("#profesionAct").val(),
    nacionalidad: $("#nacionalidadAct").val()
  };
  console.log(clienteData)
  try {
    await actualizarCliente($("#cedulaAct").val(), clienteData); // Pasar la cédula como primer parámetro
    cargarTabla();
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
  }
}



async function destroy(cedula) {  
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
      const clienteString = JSON.stringify(cliente);
      let filaHTML = `<tr data-ced="${cliente.cedula}" data-cliente='${clienteString}'>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.estadoCivil}</td>
            <td>${cliente.cedula}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.profesion}</td>
            <td>${cliente.nacionalidad}</td>
            <td><input name="checkbox" type="checkbox" class="checkbox-accion" onchange=""></td>
        </tr>`;
      $("#data-tableClient").append(filaHTML);
    });
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
  }
}

$('#sendClient').click(send);
$('#updateClient').click(update);



export { destroy };
