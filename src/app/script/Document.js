import { destroy } from "../components/documentComponent.js";
const tabla = document.getElementById("document-table");
const btnBox = document.getElementById("btn-box");
const eliminarButton = document.getElementById("btn-eliminar");
const actualizarButton = document.getElementById("btn-actualizar");



tabla.addEventListener('change', function (event) {
    let seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    if (event.target.type === 'checkbox') {
        if (seleccionados.length > 1) {
            event.target.checked = false;

            alert('¡Solo puede seleccionar un documento a la vez!')
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
        const obj = checkboxes[0].closest('tr').getAttribute('data-id');
        
        // Confirmar con el usuario antes de eliminar el cliente
        if (confirm(`¿Está seguro de que desea eliminar el documento con id ${obj}?`)) {
            try {
                 destroy(obj);
            } catch (error) {
                console.error('Error al eliminar el documento:', error);
            }
        }
    } else {
        alert('Por favor, seleccione un documento para eliminar.');
    }
});

/*actualizarButton.addEventListener('click', function (event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Verificar si se ha seleccionado al menos un checkbox
    if (checkboxes.length > 0) {
        const filaSeleccionada = checkboxes[0].closest('tr');
        const objDataString = filaSeleccionada.getAttribute('data-obj');
        const id = filaSeleccionada.getAttribute('data-id');
        const objData = JSON.parse(objDataString);
        console.log(objData)
        llenarFormularioActualizacion(objData,id); // Llenar los campos del formulario de actualización
    } else {
        alert('Por favor, seleccione un documento para actualizar.');
    }
});


function llenarFormularioActualizacion(obj, id) {
    $("#numeroDocumentoAct").val(id);
    $("#fechaRegistroAct").val(obj.fechaRegistro);
    $("#cedulaCompareciente1Act").val(obj.cedulaCompareciente1);
    $("#cedulaCompareciente2Act").val(obj.cedulaCompareciente2);
}
*/