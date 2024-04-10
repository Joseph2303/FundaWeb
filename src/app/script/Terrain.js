import { destroy } from "../components/vehicleComponent.js";
const tabla = document.getElementById("terrain-table");
const btnBox = document.getElementById("btn-box");
const eliminarButton = document.getElementById("btn-eliminar");
const actualizarButton = document.getElementById("btn-actualizar");


function filtrar() {
    var inputBusqueda = document.getElementById('busquedaTerrain');
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
        const placa = checkboxes[0].closest('tr').getAttribute('data-placa');
        
        if (confirm(`¿Está seguro de que desea eliminar el terreno con cédula ${placa}?`)) {
            try {
                 destroy(placa);
            } catch (error) {
                console.error('Error al eliminar el vehiculo:', error);
            }
        }
    } else {
        alert('Por favor, seleccione un terreno para eliminar.');
    }
});

actualizarButton.addEventListener('click', function (event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (checkboxes.length > 0) {
        const filaSeleccionada = checkboxes[0].closest('tr');
        const vehicleDataString = filaSeleccionada.getAttribute('data-terrain');
        const placa = filaSeleccionada.getAttribute('data-numeroPlano');
        const vehicleData = JSON.parse(vehicleDataString);
        llenarFormularioActualizacion(vehicleData,placa); // Llenar los campos del formulario de actualización
    } else {
        alert('Por favor, seleccione un vehiculo para actualizar.');
    }
});


function llenarFormularioActualizacion(terreno, codigo) {
    $("#codigoAct").val(codigo);
    $("#colindanteNorteAct").val(terreno.colindanteNorte);
    $("#colindanteSurAct").val(terreno.colindanteSur);
    $("#colindanteEsteAct").val(terreno.colindanteEste);
    $("#colindanteOesteAct").val(terreno.colindanteOeste);
    $("#medidaAct").val(terreno.medida);
    $("#numeroPlanoAct").val(terreno.numeroPlano);
    $("#documentoAct").val(terreno.documento);
}

