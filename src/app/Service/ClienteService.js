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

async function obtenerClientes() {
    try {
        console.log('Clientes obtenidos:', response.data);
      const response = await axiosApi.get('/clientes');
      console.log('Clientes obtenidos:', response.data);
      // Aquí puedes retornar la lista de clientes o hacer algún otro procesamiento
      return response.data;
    } catch (error) {
        console.log('Clientes obtenidos:', response.data);
      console.error('Error al obtener los clientes:', error);
      return [];
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