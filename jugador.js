var clicks = 0;
var maxIntentos;
var intentos = 0;

let imagenes = [
    {id: 1, imgcard: "img1", src: "images/alce.jpg"}, 
    {id: 2, imgcard: "img1", src: "images/alce.jpg"}, 
    {id: 3, imgcard: "img2", src: "images/zapatillas.jpg"}, 
    {id: 4, imgcard: "img2", src: "images/zapatillas.jpg"}, 
    {id: 5, imgcard: "img3", src: "images/elefante.jpg"}, 
    {id: 6, imgcard: "img3", src: "images/elefante.jpg"}, 
    {id: 7, imgcard: "img4", src: "images/peces.jpg"},
    {id: 8, imgcard: "img4", src: "images/peces.jpg"}, 
    {id: 9, imgcard: "img5", src: "images/chica.jpg"},
    {id: 10, imgcard: "img5", src: "images/chica.jpg"},
    {id: 11, imgcard: "img6", src: "images/unichancho.jpg"},
    {id: 12, imgcard: "img6", src: "images/unichancho.jpg"}
  ];
    
    // mezclamos las cartas
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  shuffle(imagenes);

  $(".ups-nombre").hide();
  $(".resultado-juego").hide();


 $("#facil, #intermedio, #experto").on("click", function(){
	 // console.log("apretaste un boton")
	 var valorBtn = $(this).html()
	 console.log(valorBtn)
	 //console.log(valorBtn)
	 var inputNombre = $("#nombre-jugador").val()
	 //console.log(111, inputNombre)
	 var inputNombreJugador = $("#jugadorx").append(inputNombre);
	 
	// Cuando el imput tenga valor (es decir que sea distinto a "")
	// hacer sectionDificultad.hide() y en cambio hacer .show de la
	// sección tablero
	if (inputNombre != "") {
	 //   console.log("campo llenoS")
		$("#tablero01").hide();
		$("#tablero02").show();
	
	// definimos las dificultades
	  switch(valorBtn) {
		case "FÁCIL": maxIntentos = 18;
			 $(".intentos-memo").append(maxIntentos);
			 $(".dificultad").append(valorBtn);
			 break;
		case "INTERMEDIO": maxIntentos = 12;
			 $(".intentos-memo").append(maxIntentos);
			 $(".dificultad").append(valorBtn);
			 break;
		case "EXPERTO": maxIntentos = 9;
			 $(".intentos-memo").append(maxIntentos);
			 $(".dificultad").append(valorBtn);
			 break;
		}
	 } else {
	  $(".ups-nombre").show();
	  
	 }
})

// creamos el tablero
function crearTablero() {
  for (let i = 0; i < imagenes.length; i++) {
	  var card = $('<div></div>').addClass('card');
	  var cardTapada = $('<div></div>').addClass('card-tapada');
	  var imgCardTapada = $('<img />').attr('src', 'images/back.jpg');
	  var cardDestapada = $('<div></div>').addClass('card-destapada');
	  var imgCardDestapada = $('<img />').attr('src', imagenes[i].src);
	
	  cardDestapada.append(imgCardDestapada);
	  cardTapada.append(imgCardTapada);
	  card.append(cardTapada).append(cardDestapada);
	  imgCardDestapada.attr('id', imagenes[i].id);
	  imgCardDestapada.attr('imgcard', imagenes[i].imgcard);
	  //imgCardDestapada.attr("id", i);
	  
	  $('.cards').append(card);
  } 
}

  // probando flip
$(document).on('click', '.card', function () {
	$(this).toggleClass('flipped');
	$(this).children('.card-tapada').hide()
  $(this).children('.card-destapada').show()
	
	var primerCarta = $(this);
	const imgSrc = $(this).children('.card-destapada').children('img').attr('src');
	const imgId = $(this).children('.card-destapada').children('img').attr('id');
	primerCarta.addClass("flipped");
	
	clicks = clicks + 1;
	if (clicks === 1) {
		carta1 = {
		imgSrc,
		imgId
		} 
	} else {
		carta2 = {
		imgSrc,
		imgId   
		}
		compararCartas(carta1, carta2)
		clicks = 0
	
		//Acá habría que setear carta 1 y 2 para que se tapen de nuevo?
	}
//	console.log(clicks)
//	console.log(carta1)
//	console.log(carta2)
  
      return false;
});

var carta1 = null;
var carta2 = null;
var noCoinciden = 0;

function compararCartas(imagen1, imagen2) {
	var coinciden = false;
	
	if (imagen1.imgSrc === imagen2.imgSrc && imagen1.imgId === imagen2.imgId) {
		//console.log(imagen1)
		//console.log(imagen2)
		setTimeout(function(){  
			$("#" + imagen1.imgId).children().addClass("grayscale");
			$("#" + imagen2.imgId).children().addClass("grayscale");
		}, 600)
		intentos = intentos + 1

		coinciden = true;
		
		return coinciden
	} else {
		setTimeout(function(){
		//	console.log(imagen1)
		//	console.log(imagen2)
		$("#" + imagen1.imgId).removeClass("flipped");
		$("#" + imagen2.imgId).removeClass("flipped");
		
		}, 800) 
		noCoinciden = noCoinciden + 1
		$(".intentos").text(noCoinciden)
		
		return coinciden;
	}
}

crearTablero();




  

