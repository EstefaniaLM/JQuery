$(document).ready(function(){

    //inicio plugin.......................................

    $.fn.biggerimg = function(){
        this.each(function(){
            elem = $(this);

            //funcionalidad del plugin
            elem.animate({
                height: 400,
                width: 1000,
                opacity: 0.5
            });

        });
        return this;
    };

    //fin plugin..........................................
       
    $("#boton").click (function(){
        $("img").biggerimg();
    })
 });