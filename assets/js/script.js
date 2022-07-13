$(function(){

	$("#calcular").bind("click",function(){
		var inicio = $("#inicio").val();
		var final = $("#final").val();

		var resultado = (final-inicio) / inicio * 100

		$("#resultado").html("A porcentagem é "+resultado+"%");
	})
})