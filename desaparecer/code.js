$(document).ready(function(){
    $("#boton").click (function(){
        $("p").desaparecer();
    })
    
    $.fn.desaparecer = function(){
        this.each(function(){
            elem = $(this);
            elem.css("display", "none");
        });
        return this;
    };

    
 });