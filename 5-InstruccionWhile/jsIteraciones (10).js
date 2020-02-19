function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorDeCero;
	var contadorDePares;
	var promedioDePositivos;
	var promediosDeNegativos;
	var diferenciasDePositivosYNegativos;
	
	var respuesta= true;

	while(respuesta) {
		var numero= prompt ("ingrese un numero");
		respesta = parseInt(numero)
		
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

	}
	respuesta = confirm("desea continuar");

	promedioDePositivos= sumaPositivos / contadorPositivos;

	promediosDeNegativos = sumaNegativos / contadorNegativos;

	diferenciasDePositivosYNegativos = sumaPositivos - sumaNegativos;

	document.white("promedio de positivos" + promedioDePositivos + "<br >");
	document.white("promedio de negativos" + promediosDeNegativos + "<br >" );
	document.white( "diferencia:" + diferenciasDePositivosYNegativos + "<br >");
	document.white("contador de ceros " + contadorDeCero + "<br >");
	document.white("contador de pares" + contadorDePares + "<br >" );
	document.white("contador de positivos" + contadorPositivos + "<br >");
	document.white("contador de negativo" + contadorNegativos + "<br >");
	

}//FIN DE LA FUNCIÓN