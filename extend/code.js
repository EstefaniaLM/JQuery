$(document).ready(function () {

    $("#boton").click(function () {
            $('p').changeColor({
                color: 'blue',
                fontFamily: 'sans-serif'
            });
        });

        $.fn.changeColor = function(options) {
            let config = {
                size: "35px",
                color: 'red',
            }
        $.extend(config, options);  

        this.css("color", config.color);
        this.css("font-size", config.size);

        };

    
});