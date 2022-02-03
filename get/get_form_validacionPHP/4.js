$(document).ready(function () {
  $("#boton").click(function(){
  $.get( "./archivo.php", $("form").serialize(), (response) => $("#contenedor").html(response))
  .fail((request) => $("#contenedor").html(request.status));
  });
  });