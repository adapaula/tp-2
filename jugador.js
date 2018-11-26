var click = 0;
var maxIntentos;
var intentos = 0;
var match = 0;


let imagenes = [
    {id: 1, img: "img1", data: "uno", src: "images/alce.jpg"}, 
    {id: 2, img: "img2", data: "dos", src: "images/alce.jpg"}, 
    {id: 3, img: "img3", data: "tres", src: "images/zapatillas.jpg"}, 
    {id: 4, img: "img4", data: "cuatro", src: "images/zapatillas.jpg"}, 
    {id: 5, img: "img5", data: "cinco", src: "images/elefante.jpg"}, 
    {id: 6, img: "img6", data: "seis", src: "images/elefante.jpg"}, 
    {id: 7, img: "img7", data: "siete", src: "images/peces.jpg"},
    {id: 8, img: "img8", data: "ocho", src: "images/peces.jpg"}, 
    {id: 9, img: "img9", data: "nueve", src: "images/chica.jpg"},
    {id: 10, img: "img10", data: "diez", src: "images/chica.jpg"},
    {id: 11, img: "img11", data: "once", src: "images/unichancho.jpg"},
    {id: 12, img: "img12", data: "doce", src: "images/unichancho.jpg"}

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
 var valorBtn= $(this).html()
 var inputNombre =$("#nombre-jugador").val()
 var inputNombreJugador = $("#jugadorx").append(inputNombre);
 
// dificultades
if (inputNombre != ""){
    $("#tablero01").hide();
    $("#tablero02").show();

  switch(valorBtn){
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

 }else{
  $(".ups-nombre").show();
  
 }
})

// probando flip
$(document).on('click', '.card', function () {
  $(this).toggleClass('flipped');
  $(this).children('.card-tapada').hide()
  $(this).children('.card-destapada').show()

  return false;

});

// creacion del tablero con las cartas de forma dinamica
for (let i = 0; i < imagenes.length; i++) {
    let divCard = $('<div></div>').addClass('card');
    let divCardTapada = $('<div></div>').addClass('card-tapada');
    let imgDivCardTapada = $('<img />').attr('src', 'images/back.jpg');
    let divCardDestapada = $('<div></div>').addClass('card-destapada');
    let imgDivCardDestapada = $('<img />').attr('src', imagenes[i].src);
    divCardDestapada.append(imgDivCardDestapada);
    divCardTapada.append(imgDivCardTapada);
    divCard.append(divCardTapada).append(divCardDestapada);
    $('.cards').append(divCard);
  } 

  /*var cliks = 0;
$(".card").on("click", function(){
  const imgSrc = $(this).children().attr("src")
  const id = $(this).attr("id")

  cliks++;
  if (clicks == + 1) {
    carta1 = {
      scr: imgSrc,
      id: id
    } else {
      carta2 = {
        scr: imgSrc,
        id: id   
    }
    clicks = 0
  }

})

$("#" + imagen1.id)*/


var carta1 = {
  data: "",
  id: null
};

// NO FUNCIONA - comparar cartas
$("carta-destapada").on("click", function () {
  
  if (click == + 1 && intentos < maxIntentos && carta1.id != $(this)[0].id) {
         
    $(this).children("card-destapada").show();
    $(this).parent("img").addClass("visible");
    
    if (carta1.src == "") {
      carta1.id = $(this)[0].id; 
      carta1.src = $(this).src("card-destapada");
      click++;
    }   
    
    else { 
      carta2 = $(this).children("img").attr("src"); 
      
      if (carta1 === carta2) { 
        $(".card-tapada").children("img[src='" + carta2 + "']").addClass("match");
      } 
      
      else { 
        setTimeout(function () {
          that.attr("src", "images/back.jpg"); 
            $("#" + carta1.id).attr("src", "images/back.jpg");
            $("#" + carta1.id).removeClass("flipped");
            that.removeClass("flipped");

        }, 1000);
      }
      
           click = 0; 
      setTimeout(function () { 
        console.clear(); }, 60000);      
    }
  }
});



