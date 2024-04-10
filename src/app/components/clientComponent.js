function send(){

}

function update(){

}

function destroy(){

}

$(document).ready(function () {
    cargarTabla();
});

function cargarTabla() {
    $.ajax({
        url: "http://localhost:8080/cliente",
        type: "GET"
    }).done(function (response) {
        $("#data-tableClient").empty(); // Vaciar la tabla antes de cargar los nuevos datos
        var respObj = response.data;
        for (k in respObj) {         
            let filaHTML = `<tr data-ced="${respObj[k].cedula}">
                <td>${respObj[k].cedula}</td>
                <td>${respObj[k].nombre}</td>
                <td>${respObj[k].apellidos}</td>
                <td>${respObj[k].direccion}</td>
                <td>${respObj[k].profesion}</td>
                <td>${respObj[k].nacionalidad}</td>
                <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
            </tr>`;

            let fila = $(filaHTML);

            $("#data-tableClient").append(fila);
        }
    }).fail(function (error) {
        console.log(error)
    });
}

