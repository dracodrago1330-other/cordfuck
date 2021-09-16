$(function() {
    $("div.center").scrollTop( 200 );
               
    $("div.center").mousemove(function () {
       var top = $("div.center").scrollTop();
       $("#result").html("top offset: <span>" + top + "</span>.");
    });
});