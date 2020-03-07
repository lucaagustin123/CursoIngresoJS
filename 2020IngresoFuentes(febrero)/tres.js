/* En el ingreso a un viaje en crucero nos solicitan nombre ,
 edad(mayores de 18),
 sexo("f" o "m") 
 estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{   var respuesta;
	var nombre;
	var sexo;
	var edad;
	var edadMinina;
	var banderaPrimeraVezEdad;
	var estadoCivil;
	var contadorDeHombre;
	var acumuladorDeEdadHombres;
	var contadorDeMUjeres;
	var acumuladorDeEdadMujeres;

	do
	{
		sexo=prompt("ingrse un numero valido");
	}while(!isNaN(sexo)  || sexo !="m" &&  sexo != "f");
	if(sexo == "m")
	{
		contadorDeHombre++;
		acumuladorDeEdadHombres += sexo
	}
	if(sexo == "m")
	{
		contadorDeMUjeres++;
		acumuladorDeEdadMujeres += sexo
	}
	do
	{ 
		nombre=prompt("ingrse un nombre valido");
	}while(isNaN(nombre));

	do
	{
		edad=prompt("ingrse un numero valido");
		edad=parseInt(edad);
	}while(!isNaN(edad) || edad > 18 );

	do
	{
		estadoCivil=prompt("ingrse un numero valido");
	}while(!isNaN(estadoCivil)  || (estadoCivil != "soltero" && estadoCivil !="casado" &&  estadoCivil != "viudo"));

	banderaPrimeraVezEdad = "no paso";
	if(nombre == "nombre" && banderaPrimeraVezEdad != "no paso" || edadMinina < edad )
  	{
		edadMinina = edad;
		edadMinina = nombre;

		banderaPrimeraVezEdad= "paso"		
	}
	 
	
		







	respuesta=confirm("deseas continuar");
}
