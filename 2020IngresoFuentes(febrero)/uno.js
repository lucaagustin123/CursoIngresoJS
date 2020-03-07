
function mostrar()
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total
 */
{	var contadorDeCarga;
	var producto;
	var precio;
	var cantidadDeUnidad;
	var fabricante;
	var tipo;
	var barbijoMasCaro;

	
	contadorDeCarga = 0;
	while(contadorDeCarga < 5)
	do
	{
		producto=prompt("ingrse un numero valido");
	}while(!isNaN(producto)  || (producto != "barbijo" && producto !="jabon" &&  producto != "alcohol"));
	
	do
	{ 
		precio=prompt("ingrse un numero valido");
		precio=parseInt(precio)
	}while(!isNaN(precio)  || (precio != "barbijo" && precio !="jabon" &&  precio != "alcohol"));

	do
	{ 
		cantidadDeUnidad=prompt("ingrse un numero valido");
		cantidadDeUnidad=parseInt(cantidadDeUnidad)
	}while(!isNaN(cantidadDeUnidad)  && cantidadDeUnidad >1 &&  cantidadDeUnidad <1000);
	// BanderaDeBarbijo = "no paso" 
	BanderaDeBarbijo = "no paso"
	if( tipo == "barbijo" && BanderaDeBarbijo != "no paso" || barbijoMasCaro < precio )
	{
		barbijoMasCaro = precio;
		barbijoMasCaro = fabricante = fabricante;
		barbijoMasCaro = cantidadDeUnidad = cantidadDeUnidad;

		BanderaDeBarbijo = "paso";
	}
	
}
