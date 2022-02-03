$ (document).ready(function(){
    
    $("#btn").click(function(){
        $.post("./file.php", {name: $("#name").val(), age: $("#age").val()}, function(response){
            $("#container").html(response);
        })

    })
})