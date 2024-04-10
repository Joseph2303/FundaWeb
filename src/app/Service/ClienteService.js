import { axiosApi } from './ApiService.js';

async function crearCliente(nuevoCliente) {
  try {
    const response = await axiosApi.post('/cliente', nuevoCliente, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    });
    console.log('Nuevo cliente creado:', response); // No se puede acceder al cuerpo de la respuesta
    cargarTabla(); 
  } catch (error) {
    console.error('Error al crear el cliente:', error);
  }
}

async function obtenerClientes() {
  try {
    const response = await axiosApi.get('/cliente', {
      mode: 'no-cors'
    }); // No se puede acceder al cuerpo de la respuesta
    return response; // No se puede acceder al cuerpo de la respuesta
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    //return [];
  }
}

async function actualizarCliente(cedula, clienteActualizado) {
  try {
    const response = await axiosApi.put(`/cliente/${cedula}`, clienteActualizado, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    });
    console.log('Cliente actualizado:', response); // No se puede acceder al cuerpo de la respuesta
    cargarTabla(); 
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
  }
}

async function eliminarCliente(cedula) {
  try {
    const response = await axiosApi.delete(`/cliente/${cedula}`, {
      mode: 'no-cors'
    });
    console.log('Mensaje del servidor:', response); // No se puede acceder al cuerpo de la respuesta
    cargarTabla(); 
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
  }
}

export {crearCliente, obtenerClientes, actualizarCliente, eliminarCliente}
