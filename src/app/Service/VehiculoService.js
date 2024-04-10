import { axiosApi } from './ApiService.js';

// Función para obtener todos los vehículos
async function obtenerVehiculos() {
  try {
    const response = await axiosApi.get('/vehiculo');
    console.log('Vehículos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los vehículos:', error);
    return null;
  }
}

// Función para guardar un nuevo vehículo
async function guardarVehiculo(vehiculo) {
  try {
    const response = await axiosApi.post('/vehiculo', vehiculo);
    console.log('Nuevo vehículo creado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al guardar el vehículo:', error);
    return null;
  }
}

// Función para obtener un vehículo por matrícula
async function getVehiculoByMatricula(matricula) {
  try {
    const response = await axiosApi.get(`/vehiculo/${matricula}`);
    console.log('Vehículo:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el vehículo:', error);
    return null;
  }
}

// Función para eliminar un vehículo por matrícula
async function eliminarVehiculo(matricula) {
  try {
    const response = await axiosApi.delete(`/vehiculo/${matricula}`);
    console.log('Mensaje del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el vehículo:', error);
    return null;
  }
}

// Función para actualizar un vehículo por matrícula
async function actualizarVehiculo(matricula, vehiculoActualizado) {
  try {
    const response = await axiosApi.put(`/vehiculo/${matricula}`, vehiculoActualizado);
    console.log('Vehículo actualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el vehículo:', error);
    return null;
  }
}

export { obtenerVehiculos, guardarVehiculo, getVehiculoByMatricula, eliminarVehiculo, actualizarVehiculo };
