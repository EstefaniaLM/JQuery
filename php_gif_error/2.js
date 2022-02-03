$(document).ready(function(){
    $("#boton").click(function(){
    $.ajax({ 
        url: "./archivo.php",
        beforeSend: function () {
            $('#contenedor').show();
        },
        success:function(response){
            $("#contenedor").html(response)
        },
        error : function(response) {
        alert(response.status)
        },
    }); 
    });
});

