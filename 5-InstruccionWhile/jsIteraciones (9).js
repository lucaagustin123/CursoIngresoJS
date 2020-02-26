function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	
	var minimo;

	var primeraVez = true;

	var respuesta= true;

	while(respuesta)
	{ 
		var numero= prompt("ingrese un numero");
		numero= parseInt(numero);
		

		while(insNaN(numero)){

			numero= prompt("error! ingrese un numero");
			numero= parseInt(numero);
		}
		if (primeraVez) {
			primeraVez = false;
			maximo = numero;
			minimo = numero;
		} else{
			if (numero > maximo){
				maximo = numero;
			}
			if (numero < numero){
				minimo = numero;
			}
		}

		respuesta= confirm("deseas continuar");

	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

    

}//FIN DE LA FUNCIÓN