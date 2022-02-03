$ (document).ready(function(){
    
    $("#boton").click(function(){

        $.get("./archivo.xml", function (xml) {
            let text = ""
            $(xml).find("blog").each(function () {
               let name = $(this).find('name').text();
               let description = $(this).find('description').text();
               let url = $(this).find('url').text();

               text += name + " " + description + " " + url +"<br><br>"
         
               $("#container").html(text)
            });
        });

    })
})