$(document).ready(function(){
    $(".saludo").click(function(){
        $("#parrafo").fadeIn(2500);
    });

    $(".despedida").click(function(){
        $("#parrafo").fadeOut(2500);
    });
});

