function send(){

}

function update(){

}

function destroy(){

}

$(document).ready(function () {
    cargarTabla();
});

function cargarTablaDocumentos() {
    try {
        console.log("Esta levantando");
        const response =  obtenerDocumentos();
        console.log('Documentos obtenidos:', response);
        $("#dataTableDocumentos").empty(); // Vaciar la tabla antes de llenarla
        response.data.forEach(documento => {
            let filaHTML = `<tr data-id="${documento.id}">
                <td>${documento.numero}</td>
                <td>${documento.fechaRegistro}</td>
                <td>${documento.cedulaCompareciente1}</td>
                <td>${documento.cedulaCompareciente2}</td>
                <td><input type="checkbox" class="checkbox-accion" onchange=""></td>
            </tr>`;
            $("#dataTableDocumentos").append(filaHTML); // Agregar la fila a la tabla
        });
    } catch (error) {
        console.error('Error al obtener los documentos:', error);
    }
}


