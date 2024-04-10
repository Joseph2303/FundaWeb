import axiosApi from './ApiService';

// Función para crear un nuevo cliente
async function crearCliente(nuevoCliente) {
  try {
    const response = await axiosApi.post('/cliente', nuevoCliente, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Nuevo cliente creado:', response.data);
  } catch (error) {
    console.error('Error al crear el cliente:', error);
  }
}

// Función para obtener todos los clientes
async function obtenerClientes() {
  try {
    const response = await axiosApi.get('/cliente');
    console.log('Clientes:', response.data);
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
  }
}

// Función para actualizar un cliente
async function actualizarCliente(cedula, clienteActualizado) {
  try {
    const response = await axiosApi.put(`/cliente/${cedula}`, clienteActualizado, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Cliente actualizado:', response.data);
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
  }
}

// Función para eliminar un cliente
async function eliminarCliente(cedula) {
  try {
    const response = await axiosApi.delete(`/cliente/${cedula}`);
    console.log('Mensaje del servidor:', response.data);
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
  }
}

export {crearCliente, obtenerClientes, actualizarCliente, eliminarCliente}