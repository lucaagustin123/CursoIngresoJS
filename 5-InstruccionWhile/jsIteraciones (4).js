function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero <0 || numero >9 || numero == isNaN (numero)){ 
		alert("ingrese un numero valido");

		numero= parseInt(numero);

		console.log (numero);
		console.log (isNaN(numero));





 }
}//FIN DE LA FUNCIÓN