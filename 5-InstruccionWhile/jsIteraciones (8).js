function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta= true;

	while(respuesta){

		var numero = prompt( "ingresar un numero");
		numero= parseInt(numero);
		break;
 }   while (isNaN(numero)) {
		 numero = prompt( "error: ingresa un numero valido");
		
		 numero = parseInt(numero);
}     
if(numero >=0 ){
	positivo= positivo + numero;
} else{
	negativo *= numero;
}
		respuesta= confirm("deseas continuar");


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN


