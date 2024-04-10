import {axiosApi} from './ApiService.js';

async function obtenerTerrenos() {
  try {
    const response = await axiosApi.get('/terreno');
    console.log('Terrenos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los terrenos:', error);
    return null;
  }
}

async function guardarTerreno(terreno) {
  try {
    const response = await axiosApi.post('/terreno', terreno);
    console.log('Nuevo terreno guardado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al guardar el terreno:', error);
    return null;
  }
}

async function obtenerTerrenoPorNumero(numeroPlano) {
  try {
    const response = await axiosApi.get(`/terreno/${numeroPlano}`);
    console.log('Terreno:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el terreno:', error);
    return null;
  }
}

async function eliminarTerrenoPorNumero(numeroPlano) {
  try {
    const response = await axiosApi.delete(`/terreno/${numeroPlano}`);
    console.log('Mensaje del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el terreno:', error);
    return null;
  }
}

async function actualizarTerrenoPorNumero(numeroPlano, terrenoActualizado) {
  try {
    const response = await axiosApi.put(`/terreno/${numeroPlano}`, terrenoActualizado);
    console.log('Terreno actualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el terreno:', error);
    return null;
  }
}

export { obtenerTerrenos, guardarTerreno, obtenerTerrenoPorNumero, eliminarTerrenoPorNumero, actualizarTerrenoPorNumero };
