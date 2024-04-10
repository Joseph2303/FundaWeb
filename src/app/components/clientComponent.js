//import { obtenerClientes } from "../Service/ClienteService.js";

function send() {
  const clienteData = {
      cedula: $("#cedula").val(),
      nombre: $("#nombre").val(),
      apellidos: $("#apellidos").val(),
      estadoCivil: $("#estadoCivil").val(),
      direccion: $("#direccion").val(),
      profesion: $("#profesion").val(),
      nacionalidad: $("#nacionalidad").val()
  };
  console.log(clienteData)
  fetch('http://localhost:8080/cliente', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(clienteData)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al enviar los datos del cliente');
      }
      console.log('Cliente creado exitosamente');
      // Aquí puedes realizar cualquier acción adicional después de que se envíen los datos, como cargar una nueva tabla, etc.
  })
  .catch(error => {
      console.error('Error al enviar los datos del cliente:', error);
  });
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
    data.forEach(cliente => {
     
        let filaHTML = `<tr data-ced="${cliente.cedula}">
            <td>${cliente.cedula}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.estadoCivil}</td>
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