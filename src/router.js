$("#salir").on('click', function () { routing() });

////////////////////////////////////////////////////////////////////////////////////////////////

$("#client").on('click', function () { router("client") });
$("#document").on('click', function () { router("document") });
$("#terrain").on('click', function () { router("terrain") });
$("#vehicle").on('click', function () { router("vehicle") });


function router(router) {
    $('#main-container').load('/src/app/views/' + router + '.html');
}





function routerApp(router) {
    $('#main-container').load('/src/app/' + router + '.html');
}

document.addEventListener('DOMContentLoaded', function () {
    routerApp("app")
});