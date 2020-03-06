/*function mostrar()
{
	var contador= 0; 
	while (contador < 10){
		console.log(10 - contador );
		++contador;
	 }
}//FIN DE LA FUNCIÓN */


 /* Bienvenidos.
	Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
	la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
	a) La cantidad de temperaturas pares.
	b) El nombre y temperatura del animal más pesado
	c) La cantidad de animales que viven a menos de 0 grados.
	d) El promedio del peso de todos los animales.
	f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
 */
{
	var nombre;
	var respuesta;
	var peso;
	var temperatura;
	var contadorDePares;
	var pesoMaximo;
	var nombrePesoMaximo;
	var temperaturaPesoMaximo;
	var acumuladorDePeso;
	var contadorAnimales;
	var promedioDePeso;
	var pasoMaximoBajo;
	var pesoMinimo;
	pesoMinimo = 0;
	pesoMaximoBajo = 0;
	contadorAnimales = 0;
	acumuladorDePeso = 0;
	contadorAnimalesBajo = 0;
	pesoMaximo= 0;
	contadorDePares = 0;
	respuesta = "si"; 

	while (respuesta == "si");
	{ 
		do 
		{
			nombre = prompt("ingrese un nombre");
		} while (!isNaN(nombre));
		do
		{
			peso = prompt("ingrese peso");
			peso = parseInt (peso);

		}while(isNaN(peso) || peso <1 && peso >1000 );
		// b) El nombre y temperatura del animal más pesado.
		if (peso > pesoMaximo)
		{
			pesoMaximo = peso;
			nombrePesoMaximo = nombre;
			temperaturaPesoMaximo = temperatura;
		}
		// c) La cantidad de animales que viven a menos de 0 grados.
		// f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
		if (temperatura < 0)
		{
			contadorAnimalesBajo++;
		} else if (peso > pesoMaximoBajo)
		{
			pesoMaximoBajo = peso;
		} else if (peso > pesoMinimo)
		{
			pesoMinimo = peso;
		}
		
		do
		{
			temperatura = prompt("ingrese temperatura");
			temperatura = parseInt (temperatura);

		}while(isNaN(temperatura) || temperatura < -30 && temperatura >30 );
		//a) La cantidad de temperaturas pares.
		if(temperatura % 2 == 0)
		{
			contadorDePares++
		}
		//d) El promedio del peso de todos los animales.
		acumuladorDePeso += peso;
		contadorAnimales ++;
		
		


		respuesta = prompt("si para continuar?");

	}//fin del while

	//d) El promedio del peso de todos los animales. part 2
	if(contadorAnimales == 0 )
	{
		promedioDePeso = "promedio invalido";	
	} 
	else
	{
		promedioDePeso = acumuladorDePeso / contadorAnimales;
	}
	
	document.write("cantidad de temperaturas pares:" + contadorDePares + "</br>" );
	document.write("nombre y temperatura del animal más pesado:" + nombrePesoMaximo + " con " + temperaturaPesoMaximo + "</br>" );
	document.write("cantidad de animales que viven a menos de 0 grados:" + contadorAnimalesBajo + "</br>" );
	document.write("promedio del peso de todos los animales:" + promedioDePeso + "</br>" );
	document.write("peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero:" + pesoMaximoBajo + "y" + pesoMinimo + "</br>" );


}// fin de la funcion.