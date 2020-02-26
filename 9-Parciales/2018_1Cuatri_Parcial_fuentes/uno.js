
function mostrar()
{ var largo;
  var ancho;
  var perimetro;

  largo = prompt("ingrese el largo");
  ancho = prompt("ingrese el ancho");

  largo = parseInt (largo);
  ancho = parseInt (ancho);
  perimetro= largo + ancho;

  alert("el perimetro " + perimetro);
}
