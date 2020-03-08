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
{   
	var respuesta;
	var nombre;
	var sexo;
	var edad;
	var edadMinina;
	var banderaPrimeraVezEdad;
	var estadoCivil;
	var contadorDeHombres;
	var acumuladorDeEdadHombres;
	var promedioEdadHombres;
	var contadorDeMujeres;
	var acumuladorDeEdadMujeres;
	var promedioEdadMujeres;
	

    respuesta = true;
	contadorDeHombre = 0;
	acumuladorDeEdadHombres = 0;
	contadorDeMujeres = 0;
	acumuladorDeEdadMujeres = 0;

	do
	{ 
		nombre=prompt("ingrese un nombre");
		respuesta =confirm(nombre);
	} while(!isNaN(nombre));
	do
	{
		sexo=prompt("ingrese uno sexo f o m");
		respuesta =confirm(sexo);

	} while(!isNaN(sexo)  || sexo !="m" &&  sexo != "f");
	
	if(sexo == "m")
	{
		contadorDeHombre ++;
		acumuladorDeEdadHombres += sexo;
	}

	if(sexo == "f")
	{
		contadorDeMujeres++;
		acumuladorDeEdadMujeres += sexo;
	}
	do
	{
		edad=prompt("ingrese un edad");
		edad=parseInt(edad);
		respuesta = confirm(edad);
	}while(isNaN(edad) || edad < 18 );

	
	

	do
	{
		estadoCivil=prompt("ingrese un estado Civil");
		respuesta =confirm(estadoCivil);

	}while(!isNaN(estadoCivil)  || (estadoCivil != "soltero" && estadoCivil !="casado" &&  estadoCivil != "viudo"));
	
	banderaPrimeraVezEdad = "no paso";
	if(nombre == "nombre" && banderaPrimeraVezEdad != "no paso" || edadMinina < edad )
  	{
		edadMinina = edad;
		edadMinina = nombre;

		banderaPrimeraVezEdad = "paso";	
		
	}
	
	promedioEdadHombres = acumuladorDeEdadHombres / contadorDeHombres;
	promedioEdadMujeres = acumuladorDeEdadMujeres / contadorDeMujeres;
	
	console.log(nombre);
	console.log(edad);
	console.log(sexo);
	console.log(promedioEdadHombres);
	console.log(promedioEdadMujeres);
	

	respuesta = confirm("deseas continuar");


}// fin del la funcion
