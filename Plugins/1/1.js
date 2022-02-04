$(document).ready(function(){
    jQuery.fn.desaparece = function() {
        this.each(function(){
           elem = $(this);
           elem.css("display", "none");
        });   
        return this;
     }; 
     
     $("#desaparecer").click(function(){
        $("p").desaparece(); 
    });
});

