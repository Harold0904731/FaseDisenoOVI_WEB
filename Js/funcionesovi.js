$(function(){
    $("input:radio").change(function(){
        //console.log("hice change la elemento -> ", $(this).attr("id"));
       $("input:radio[name="+ $(this).attr("id") +"]").attr("disabled",true);
       if($("input:radio[name="+ $(this).attr("id") +"]:checked").val() == "Correcto"){
           $(".Respuesta"+ $(this).attr("id")).append("<span>La respuesta es correcta <span>");
           $(".Respuesta"+ $(this).attr("id")).addClass("respuestaCorrecta");
       }else{
           $(".Respuesta"+ $(this).attr("id")).append("<span>La respuesta es incorrecta <span>");
           $(".Respuesta"+ $(this).attr("id")).addClass("respuestaIncorrecta");
       }
    });
});

