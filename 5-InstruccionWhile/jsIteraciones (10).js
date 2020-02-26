function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaNegativos =0;
	var sumaPositivos =0;
	var contadorPositivos =0;
	var contadorNegativos =0;
	var contadorDeCero =0;
	var contadorDePares =0;
	var promediosDePositivos =0;
	var promediosDeNegativos =0;
	var diferenciasDePositivosYNegativos =0;
	var respuesta =true;
	while(respuesta) {
		var numero= prompt ("ingrese un numero");
		respuesta = parseInt(numero);
		respuesta = confirm("desea continuar");
		
	} 
	while (isNaN (numero)) {
		numero= prompt("error: ingrese un numero valido");
		numero = parseInt(numero);
		
		
	
	} 
	if (numero > 0 ) {
	//punto 2
		sumaNegativos += numero;
		// punto 3
		contadorPositivos ++;
	
	} else if ( numero < 0 ){
		 //punto 1
		 sumaNegativos += numeros;
		 contadorNegativo ++;
	} else { 
		contadorDeCero ++;

	}
	if (numero % 2 == 0) {
		contadorDePares ++;

	}promediosDePositivos= sumaPositivos / contadorPositivos;

	promediosDeNegativos = sumaNegativos / contadorNegativos;

	diferenciasDePositivosYNegativos = sumaPositivos - sumaNegativos;
	
	document.white ("contador de negativo"+ contadorNegativos + "<br >");
	document.white ("promedio de positivos:"+ promediosDePositivos + "<br >" );
	document.white ("promedio de negativos:"+ promediosDeNegativos + "<br >" );
	document.white ( "diferencia:"+ diferenciasDePositivosYNegativos + "<br >");
	document.white ("contador de ceros"+ contadorDeCero + "<br >");
	document.white ("contador de pares"+ contadorDePares + "<br >" );
	document.white ("contador de positivos"+ contadorPositivos + "<br >");
	
	

}//FIN DE LA FUNCIÓN