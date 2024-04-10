import { obtenerTerrenos, guardarTerreno} from "../Service/TerrenoService.js";

async function send() {
    const terrenoData = {
        colindanteNorte: $("#colindanteNorte").val(),
        colindanteSur: $("#colindanteSur").val(),
        colindanteEste: $("#colindanteEste").val(),
        colindanteOeste: $("#colindanteOeste").val(),
        medida: $("#medida").val(),
        numeroPlano: $("#numeroPlano").val(),
        documento: $("#documento").val()
    };
console.log(terrenoData)
    try {
        console.log(terrenoData);
        await guardarTerreno(terrenoData);
        cargarTabla();
    } catch (error) {
        console.error('Error al enviar los datos del terreno:', error);
    }
}

async function update() {
    const terrenoData = {
        colindanteNorte: $("#colindanteNorteAct").val(),
        colindanteSur: $("#colindanteSurAct").val(),
        colindanteEste: $("#colindanteEsteAct").val(),
        colindanteOeste: $("#colindanteOesteAct").val(),
        medida: $("#medidaAct").val(),
        numeroPlano: $("#numeroPlanoAct").val(),
        documento: $("#documentoAct").val()
    };
    console.log(terrenoData)
    try {
        await actualizarTerreno($("#codigoAct").val(), terrenoData); // Pasar el código como primer parámetro
        cargarTabla();
    } catch (error) {
        console.error('Error al actualizar el terreno:', error);
    }
}

async function destroy(codigo) {
    try {
        await eliminarTerreno(codigo);
        cargarTabla();
    } catch (error) {
        console.error('Error al eliminar el terreno:', error);
    }
}

$(document).ready(function () {
    cargarTabla();
});

async function cargarTabla() {
    try {
        const response = await obtenerTerrenos();
        $("#data-tableTerreno").empty();
        response.forEach(terreno => {
            const terrenoString = JSON.stringify(terreno);
            let filaHTML = `<tr data-id="${terreno.codigo}" data-terreno='${terrenoString}'>
                <td>${terreno.numeroPlano}</td>
                <td>${terreno.colindanteEste}</td>
                <td>${terreno.colindanteNorte}</td>
                <td>${terreno.colindanteSur}</td>
                <td>${terreno.colindanteOeste}</td>
                <td>${terreno.medida}</td>
                <td>${terreno.documento}</td>
                <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
            </tr>`;
            $("#data-tableTerreno").append(filaHTML);
        });
    } catch (error) {
        console.error('Error al obtener los terrenos:', error);
    }
}

$('#sendTerrain').click(send);
$('#updateTerreno').click(update);

export { destroy, update, send };
