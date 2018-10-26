$(function(){
    $("input:radio").change(function(){
        console.log("hice change la elemento -> ", $(this).attr("id"));
       $("input:radio[name="+ $(this).attr("id") +"]").attr("disabled",true);
       if($("input:radio[name="+ $(this).attr("id") +"]:checked").val() == "Correcto"){
           $(".Respuesta"+ $(this).attr("id")).append("<span>La respuesta es correcta <span>");
           $(".Respuesta"+ $(this).attr("id")).addClass("respuestaCorrecta");
       }else{
           $(".Respuesta"+ $(this).attr("id")).append("<span>La respuesta es incorrecta <span>");
           $(".Respuesta"+ $(this).attr("id")).addClass("respuestaIncorrecta");
       }
    });
    //se ajustara el tamaño del frame de twitter
    console.log($(".ContenedorTwitter").children().children().children().children("body"));
    ///$(".timeline-Widget").css({"height":"20px","overflow":"auto"});
});