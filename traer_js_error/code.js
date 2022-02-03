$(document).ready(function(){
    $("#boton").click(function(){
    $.ajax({ 
        dataType: "script",
        url: "./javascript.js",
        success:function(response){
        $("#contenedor").html(response)
        },
    }); 
    });
});


/*
$(document).ready(function() {    
    $("#btn").click(function(){
        
        $.ajax({
            dataType: "script",
            url: "doc.js"
            })
        
        // .done(function(data) {
        //     $('#container').html("Programa ejecutado con exito");
        // })

        .fail(function(request, status, error){
            $('#container').html(request.responseText);
        })
    });              
});   
*/