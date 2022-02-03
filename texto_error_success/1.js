$(document).ready(function(){
  $("#boton").click(function(){
    $.ajax({ 
      url: "./texto.txt",
      success:function(response){
        $("#contenedor").html(response)
      },
      error : function() {
        alert('La transferencia no se ha realizado correctamente.');
    },
    }); 
  });
});
