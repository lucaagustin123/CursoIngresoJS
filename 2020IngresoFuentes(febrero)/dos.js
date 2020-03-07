/*peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/ 
function mostrar()

{ 
  var respuesta;
  var producto;
	var precio;
  var contador;
  var alimentoMasCaro;
  var tipo
  var 
  


  do
	{
		producto=prompt("ingrse un numero valido");
	}while(!isNaN(producto)  || (producto != "v" && producto !="a" &&  producto != "m"));
	
	do
	{ 
		precio=prompt("ingrse un numero valido");
		precio=parseInt(precio)
  }while(!isNaN(precio)   && precio >300 &&  precio >100);
  if(contador == 0 || alimentoMasCaro < precio )
  {
    alimentoMasCaro = precio
    alimentoMasCarotipo = tipo
  }
  


  respuesta= confirm("deseas continuar");
}
