import { obtenerVehiculos, guardarVehiculo, getVehiculoByMatricula, eliminarVehiculo, actualizarVehiculo } from "../Service/VehiculoService.js";


async function send() {
    const vehiculoData = {
        placa: $("#placa").val(),
        marca: $("#marca").val(),
        estilo: $("#estilo").val(),
        carroceria: $("#carroceria").val(),
        numeroChasis: $("#numeroChasis").val(),
        numeroMotor: $("#numeroMotor").val(),
        marcaMotor: $("#marcaMotor").val(),
        valorFiscal: $("#valorFiscal").val(),
        documento: $("#documento").val()
    };

    try {
        await guardarVehiculo(vehiculoData);
        cargarTabla();
    } catch (error) {
        console.error('Error al enviar los datos del vehículo:', error);
    }
}

async function update() {
    const vehiculoData = {
        placa: $("#placaAct").val(),
        carroceria: $("#carroceriaAct").val(),
        estilo: $("#estiloAct").val(),
        marca: $("#marcaAct").val(),
        marcaMotor: $("#marcaMotorAct").val(),
        numeroChasis: $("#numeroChasisAct").val(),
        numeroMotor: $("#numeroMotorAct").val(),
        documento: $("#documentoAct").val()
    };
    console.log(vehiculoData)
    try {
        await actualizarVehiculo($("#placaAct").val(), vehiculoData); // Pasar la placa como primer parámetro
        cargarTabla();
    } catch (error) {
        console.error('Error al actualizar el vehículo:', error);
    }
}

async function destroy(placa) {
    try {
        await eliminarVehiculo(placa);
        cargarTabla();
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
    }
}

$(document).ready(function () {
    cargarTabla();
});

async function cargarTabla() {
    try {
        const response = await obtenerVehiculos(); // Esperar a que se resuelva la promesa
        console.log('Vehículos obtenidos:', response);
        $("#data-tableVehiculo").empty();
        response.data.forEach(vehiculo => {
            const vehiculoString = JSON.stringify(vehiculo);
            let filaHTML = `<tr data-placa="${vehiculo.placa}" data-vehicle='${vehiculoString}'>
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.marca}</td>
                <td>${vehiculo.estilo}</td>
                <td>${vehiculo.carroceria}</td>
                <td>${vehiculo.numeroChasis}</td>
                <td>${vehiculo.numeroMotor}</td>
                <td>${vehiculo.marcaMotor}</td>
                <td>${vehiculo.valorFiscal}</td>
                <td>${vehiculo.documento}</td>
                <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
            </tr>`;
            $("#data-tableVehiculo").append(filaHTML);
        });
    } catch (error) {
        console.error('Error al obtener los vehículos:', error);
    }
}


$('#sendVehicle').click(send);
$('#updateVehicle').click(update);

export { destroy, update, send };

async function cargarDocumentos() {
            
    try {
        // Obtener la lista de documentos desde la base de datos (suponiendo que hay una función llamada obtenerDocumentos en tu módulo de servicio)
        const documentos = await obtenerDocumentos();
        console.log(documentos)
        // Obtener el select de documentos por su ID
        const selectDocumento = document.getElementById('documento');

        // Limpiar el select por si ya contiene opciones
        selectDocumento.innerHTML = '';

        // Iterar sobre la lista de documentos y agregar cada uno como una opción en el select
        documentos.forEach(documento => {
            const option = document.createElement('option');
            option.value = documento.numeroDocumento; // Suponiendo que cada documento tiene un ID
            option.textContent = documento.numeroDocumento; // Suponiendo que cada documento tiene un nombre
            selectDocumento.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar los documentos:', error);
    }
}

