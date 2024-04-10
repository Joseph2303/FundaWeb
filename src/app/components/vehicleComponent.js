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
        numeroDocumento: $("#documento").val()
    };

    try {
        console.log(vehiculoData);
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
        numeroDocumento: $("#documentoAct").val()
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
        response.forEach(vehiculo => {
            const vehiculoString = JSON.stringify(vehiculo);
            let filaHTML = `<tr data-placa="${vehiculo.placa}" data-vehicle='${vehiculoString}'>
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.estilo}</td>
                <td>${vehiculo.carroceria}</td>
                <td>${vehiculo.marca}</td>
                <td>${vehiculo.marcaMotor}</td>
                <td>${vehiculo.numeroChasis}</td>
                <td>${vehiculo.numeroMotor}</td>
                <td>${vehiculo.numeroDocumento}</td>
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
