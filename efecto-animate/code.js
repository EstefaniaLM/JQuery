$(document).ready(function () {
    $("#mover").click(function () {
        $("#imagen").animate({
            top: "+=150",
        }, function() {
            $("#imagen").animate({
                top: "-=150",
            }); 
        });
    });

    $("#gato").mouseover(function(){
        $("p").css('display', 'block');
    });
    
    $("#gato").mouseout(function(){
        $("p").css('display', 'none');
});

$("#parrafoFondo").click(function(){
    $("p").Color();
});

}); 

jQuery.fn.Color = function() {
    this.each(function(){
    elem = $(this);
    elem.css("backgroundColor", "red");
    });   
return this;
}; 