$(document).ready(function(){
    for (let i=0; i<productos.length; i++){
        $("#catalogo").append(
            '<div>' +
            '<h2>'+productos[i].nombre +'</h2>' +
            '</div>'
        );
    }
})