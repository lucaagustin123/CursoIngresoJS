function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iterador;

iterador = prompt("ingresar cantidad de veces");
iterador= parseInt(iterador)

while(isNaN (iterador)){

   iterador = prompt("ingresar cantidad de veces");
   iterador= parseInt(iterador)
}

while (contador <iterador){
	var numero = prompt( "ingrese un numero");
	
	numero = parseInt(numero);
	break;
}	
	 while (isNaN(numero)) {
		 numero = prompt( "error: ingresa un numero valido");
		
		 numero = parseInt(numero);
}
contador ++;

acumulador += numero;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN


