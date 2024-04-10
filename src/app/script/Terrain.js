import { destroy } from "../components/terrainComponent.js";
const tabla = document.getElementById("terrain-table");
const btnBox = document.getElementById("btn-box");
const eliminarButton = document.getElementById("btn-eliminar");
const actualizarButton = document.getElementById("btn-actualizar");




tabla.addEventListener('change', function (event) {
    let seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    if (event.target.type === 'checkbox') {
        if (seleccionados.length > 1) {
            event.target.checked = false;

            alert('¡Solo puede seleccionar un terreno a la vez!')
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
        const id = checkboxes[0].closest('tr').getAttribute('data-id');
        
        if (confirm(`¿Está seguro de que desea eliminar el terreno con cédula ${id}?`)) {
            try {
                 destroy(id);
            } catch (error) {
                console.error('Error al eliminar el vehiculo:', error);
            }
        }
    } else {
        alert('Por favor, seleccione un terreno para eliminar.');
    }
});



