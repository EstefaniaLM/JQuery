$(document).ready(function (){
    $("#start").click(function(){
        var div = $("div");
        div.animate({height: 150,width: 150}, "slow");
        div.queue(function () {
            div.css("background-color", "red");
            div.dequeue();
        });
        div.animate({height: 400,width: 400}, "slow");
        div.fadeOut("slow");
        div.fadeIn("slow");
 })
    $("#off").click(function(){
        $("div").stop();
    })
 })
 