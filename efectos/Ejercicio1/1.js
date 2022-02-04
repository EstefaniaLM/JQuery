
$(document).ready(function(){
  $("#animate").click(function(){
    $("img").animate({
      height: "20px",
      width: "10px",
      }, 1000);
  });
  $("#fundido").click(function(){
    $("img").fadeOut(1200);
  });
  $("#deslizar").click(function(){
    $("img").slideDown(1000);
    });
});
