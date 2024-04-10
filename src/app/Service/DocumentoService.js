import axiosApi from './ApiService';

// Función para obtener todos los documentos
async function getDocumentos() {
  try {
    const response = await axiosApi.get('/documento');
    console.log('Documentos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
    return null;
  }
}

// Función para guardar un nuevo documento
async function guardarDocumento(documento) {
  try {
    const response = await axiosApi.post('/documento', documento);
    console.log('Nuevo documento creado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al guardar el documento:', error);
    return null;
  }
}

// Función para obtener un documento por número de documento
async function getDocumentoByNumero(numeroDocumento) {
  try {
    const response = await axiosApi.get(`/documento/${numeroDocumento}`);
    console.log('Documento:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el documento:', error);
    return null;
  }
}

// Función para eliminar un documento por número de documento
async function eliminarDocumento(numeroDocumento) {
  try {
    const response = await axiosApi.delete(`/documento/${numeroDocumento}`);
    console.log('Mensaje del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el documento:', error);
    return null;
  }
}

// Función para actualizar un documento por número de documento
async function actualizarDocumento(numeroDocumento, documentoActualizado) {
  try {
    const response = await axiosApi.put(`/documento/${numeroDocumento}`, documentoActualizado);
    console.log('Documento actualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el documento:', error);
    return null;
  }
}

export { getDocumentos, guardarDocumento, getDocumentoByNumero, eliminarDocumento, actualizarDocumento };
