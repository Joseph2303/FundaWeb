import axiosApi from './ApiService';

async function crearCliente(nuevoCliente) {
  try {
    const response = await axiosApi.post('/cliente', nuevoCliente, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Nuevo cliente creado:', response.data);
    cargarTabla(); 
  } catch (error) {
    console.error('Error al crear el cliente:', error);
  }
}

async function actualizarCliente(cedula, clienteActualizado) {
  try {
    const response = await axiosApi.put(`/cliente/${cedula}`, clienteActualizado, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Cliente actualizado:', response.data);
    cargarTabla(); 
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
  }
}

async function eliminarCliente(cedula) {
  try {
    const response = await axiosApi.delete(`/cliente/${cedula}`);
    console.log('Mensaje del servidor:', response.data);
    cargarTabla(); 
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
  }
}

export {crearCliente, obtenerClientes, actualizarCliente, eliminarCliente}