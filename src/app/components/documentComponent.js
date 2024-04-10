
import { getDocumentos, guardarDocumento, getDocumentoByNumero, eliminarDocumento, actualizarDocumento } from "../Service/DocumentoService.js";
async function send() {
  
  const documentoData = {
      numeroDocumento: $("#numeroDocumento").val(),
      "fechaRegistro": $("#fechaRegistro").val(),
      "cedulaCompareciente1": $("#cedulaCompareciente1").val(),
      "cedulaCompareciente2": $("#cedulaCompareciente2").val()
    };
    
    try {
      console.log(documentoData);
      await guardarDocumento(documentoData);
      cargarTablaDocumentos(); // Recargar la tabla después de crear el documento
    } catch (error) {
      console.error('Error al enviar los datos del documento:', error);
    }
  }
  

async function update(numeroDocumento) {
    const documentoData = {
      numero: $("#numeroDocumento").val(),
      "Fecha de Registro": $("#fechaRegistro").val(),
      "Cedula Compareciente 1": $("#cedulaCompareciente1").val(),
      "Cedula Compareciente 2": $("#cedulaCompareciente2").val()
    };
    console.log(documentoData);
  
    try {
      await actualizarDocumento(numeroDocumento, documentoData);
      cargarTablaDocumentos(); // Recargar la tabla después de la actualización
    } catch (error) {
      console.error('Error al actualizar los datos del documento:', error);
    }
  }

async function destroy(numeroDocumento) {
  try {
    await eliminarDocumento(numeroDocumento);
    cargarTablaDocumentos(); // Recargar la tabla después de la eliminación
  } catch (error) {
    console.error('Error al eliminar el documento:', error);
  }
}

$(document).ready(function () {
    cargarTabla();
});

async function cargarTabla() {
  try {
      console.log("Esta levantando");
      const response =  await getDocumentos();
      console.log('Documentos obtenidos:', response);
      console.log('Datos de documentos:', response.data);
      $("#dataTableDocumentos").empty(); // Vaciar la tabla antes de llenarla
      response.data.forEach(documento => {
          let filaHTML = `<tr data-id="${documento.numeroDocumento}">
              <td>${documento.numeroDocumento}</td>
              <td>${documento.fechaRegistro}</td>
              <td>${documento.cedulaCompareciente1}</td>
              <td>${documento.cedulaCompareciente2}</td>
              <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
          </tr>`;
          $("#dataTableDocumentos").append(filaHTML); // Agregar la fila a la tabla
      });
  } catch (error) {
      console.error('Error al obtener los documentos:', error);
  }
}



$('#guardarDocument').click(send);
$('#updateDocument').click(update);
export { destroy };