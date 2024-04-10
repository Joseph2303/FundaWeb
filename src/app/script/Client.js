import { destroy } from "../components/clientComponent.js";
const tabla = document.getElementById("client-table");
const btnBox = document.getElementById("btn-box");
const eliminarButton = document.getElementById("btn-eliminar");
const actualizarButton = document.getElementById("btn-actualizar");


function filtrar() {
    var inputBusqueda = document.getElementById('busquedaClient');
    var filtro = inputBusqueda.value.toUpperCase();

    var filas = tabla.getElementsByTagName('tr');

    for (var i = 0; i < filas.length; i++) {
        if (filas[i].getElementsByTagName('th').length === 0) {
            var celdas = filas[i].getElementsByTagName('td');
            var mostrarFila = false;

            for (var j = 0; j < celdas.length; j++) {
                var textoCelda = celdas[j].textContent || celdas[j].innerText;
                if (textoCelda.toUpperCase().indexOf(filtro) > -1) {
                    mostrarFila = true;
                    break;
                }
            }

            filas[i].style.display = mostrarFila ? '' : 'none';
        }
    }
}


tabla.addEventListener('change', function (event) {
    let seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    if (event.target.type === 'checkbox') {
        if (seleccionados.length > 1) {
            event.target.checked = false;

            alert('¡Solo puede seleccionar un empleado a la vez!')
        } else {
            if (seleccionados.length > 0) {
                btnBox.style.display = 'inline-block';
                eliminarButton.style.display = 'inline-block';
            } else {
                btnBox.style.display = 'none';
                eliminarButton.style.display = 'none';
            }

        }
    }
});

eliminarButton.addEventListener('click', async function (event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Verificar si se ha seleccionado al menos un checkbox
    if (checkboxes.length > 0) {
        const cedula = checkboxes[0].closest('tr').getAttribute('data-ced');
        
        // Confirmar con el usuario antes de eliminar el cliente
        if (confirm(`¿Está seguro de que desea eliminar el cliente con cédula ${cedula}?`)) {
            try {
                 destroy(cedula);
            } catch (error) {
                console.error('Error al eliminar el cliente:', error);
            }
        }
    } else {
        alert('Por favor, seleccione un cliente para eliminar.');
    }
});

actualizarButton.addEventListener('click', function (event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Verificar si se ha seleccionado al menos un checkbox
    if (checkboxes.length > 0) {
        const filaSeleccionada = checkboxes[0].closest('tr');
        const clienteDataString = filaSeleccionada.getAttribute('data-cliente');
        const cedula = filaSeleccionada.getAttribute('data-ced');
        const clienteData = JSON.parse(clienteDataString);
        llenarFormularioActualizacion(clienteData,cedula); // Llenar los campos del formulario de actualización
    } else {
        alert('Por favor, seleccione un cliente para actualizar.');
    }
});

// Función para llenar los campos del formulario de actualización con los datos del cliente seleccionado
// Función para llenar los campos del formulario de actualización con los datos del cliente seleccionado
function llenarFormularioActualizacion(cliente,cedula) {
    $("#cedulaAct").val(cedula);
    $("#nombreAct").val(cliente.nombre);
    $("#apellidosAct").val(cliente.apellidos);
    $("#estadoCivilAct").val(cliente.estadoCivil);
    $("#direccionAct").val(cliente.direccion);
    $("#profesionAct").val(cliente.profesion);
    $("#nacionalidadAct").val(cliente.nacionalidad);
}
