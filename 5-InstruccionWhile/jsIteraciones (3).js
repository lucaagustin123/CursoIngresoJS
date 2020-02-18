function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0

clave = clave.toLowerCase(); 
while (clave != "utn750" ){
    contador++;
    if (contador == 3){
        break;
    }
    
    
    clave= prompt ("error ingrese su clave");
    clave.toLowerCase();

 }
 if (clave == "utn750") {
      alert("bienvenido");
 } else {
     alert("maximo intentos ingresados");
 }



}






}//FIN DE LA FUNCIÓN
