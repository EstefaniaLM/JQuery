
$(document).ready(function () {
    var pokeApi = "https://pokeapi.co/api/v2/pokemon/";
    $("#boton").click(function (evento) {
    $.getJSON(pokeApi, function(data){
        $.each(data.results, function(_,results) {
            $('#contenedor').append('<p>' + results.name + '</p>');
        })
    .fail(function (request,status,error) {
        $("#contenedor").html(error);
    })
});
});
});