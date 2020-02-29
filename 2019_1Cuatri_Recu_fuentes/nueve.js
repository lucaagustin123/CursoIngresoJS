function mostrar()
/*
c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.
*/

{
    var kilosPorBolsa;
    var cantidadDeBolsa;
    var importePorBolsa;
    var marca;
    var acumuladorDeKilos;
    var maximaDeKilos;

    maximaDeKilos= 1000
    marca=0;
    kilosPorBolsa=0;
    cantidadDeBolsa=0;
    importePorBolsa=0; 
    respuesta ="s";
    while (respuesta == "s")
    {
    kilosPorBolsa=prompt("kilos por bolsa");
    parseInt(kilosPorBolsa);
    while(isNaN(kilosPorBolsa) || kilosPorBolsa<1)
    {
        kilosPorBolsa=prompt("kilos por bolsa");
        parseInt(kilosPorBolsa);
    }
    cantidadDeBolsa=prompt("cantidad de bolsa");
    parseInt(cantidadDeBolsa);
    while(isNaN(cantidadDeBolsa) || cantidadDeBolsa<1)
    {
        cantidadDeBolsa=prompt("cantidad de bolsa");
        parseInt(cantidadDeBolsa);
    }
    importePorBolsa=prompt("importe por la bolsa");
    parseInt(importePorBolsa);
    while(isNaN(importePorBolsa) || importePorBolsa<1)
    {
        importePorBolsa=prompt("importe por la bolsa");
        parseInt(importePorBolsa); 
    }
    marca=prompt("ingresa marca"); 
    while(isNaN(marca) || marca<1)
    {
        marca=prompt("marca");
        parseInt(marca);
    } 
    while(!isNaN(kilosPorBolsa) || kilosPorBolsa >= 8 && kilosPorBolsa <= 1000)
    {
        KilosPorBolsa= prompt("kilo por bolsa");
    }
    acumuladorDeKilos= acumuladorDeKilos + kilosPorBolsa;
    if(kilosPorBolsa == 1 || cantidadDeBolsa>maximaDeKilos)
    {
        maximaDeKilos=kilosPorBolsa;
        kilosPorBolsa= marca;
    }
}
