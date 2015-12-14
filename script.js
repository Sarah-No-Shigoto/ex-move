$(document).ready(function() {

	// Cliquer sur move
	$("#move").click(function() {

		// Récupérer les input
		var translateX = parseInt($("#x").val());
		console.log(translateX);
		var translateY = parseInt($("#y").val());
		console.log(translateY);

		// Animer l'img
		$("img").animate({
			left:  "+=" + translateX + "px",
			top:  "+=" + translateY + "px"
		});
	});

}); //Fin de la fonction ready