function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero= NaN;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

while (contador < 5) {
	var numero = prompt( "ingrese un numero");
	numero = parseInt(numero);

 while (isNaN(numero)) { 
	numero = prompt( "error: ingresa un numero valido");
	numero = parseInt(numero);

} contador ++;

acumulador += numero;
}



}//FIN DE LA FUNCIÓN