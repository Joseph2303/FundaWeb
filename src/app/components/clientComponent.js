function send() {
    let clienteData = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        estadoCivil: $("#estadoCivil").val(),
        direccion: $("#direccion").val(),
        profesion: $("#profesion").val(),
        nacionalidad: $("#nacionalidad").val()
    };

    let jsonData = JSON.stringify(clienteData);

    $.ajax({
        url: "http://localhost:8080/cliente",
        type: "POST",
        data: { data: jsonData }, 
        success: function(response) {
            console.log(response);
            cargarTabla(); 
        },
        error: function(xhr, status, error) {
            console.log(xhr);
        }
    });
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

$("#sendClient").click(send);
