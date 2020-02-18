function mostrar()
{

	var contador=0;
	var acumulador=0;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

while (contador < 5) {
	var numero= NaN
	
if (isNaN(numero)) { 
	numero = prompt( "ingrese un numero");
	numero = parseInt(numero);

} contador++;

acumulador+= numero;
}



}//FIN DE LA FUNCIÓN