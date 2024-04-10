$(document).ready(function () {
    cargarTabla();
});

function cargarTabla() {
    $.ajax({
        url: "http://localhost:8000/api/registroTardias",
        type: "GET"
    }).done(function (response) {
        $("#data-tableClient").empty(); // Vaciar la tabla antes de cargar los nuevos datos
        var respObj = response.data;
        for (k in respObj) {         
            let filaHTML = `<tr data-idRegistro="${respObj[k].idRegistroTardia}" data-justificacion="${encodeURIComponent(JSON.stringify(respObj[k].justificacion_tardia))}" data-empleado="${encodeURIComponent(JSON.stringify(respObj[k].empleado))}">
                <td>${respObj[k].fecha}</td>
                <td>${respObj[k].cantMinutos}</td>
                <td id="justificacion">${justificacion}</td>
                <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
            </tr>`;

            let fila = $(filaHTML);

            $("#data-tableClient").append(fila);
        }
        mostrarMensajeDeInfo("Las aunsecias que se encuentran pendiente puedes editarlas");
    }).fail(function (error) {
        console.log(error)
    });
}

