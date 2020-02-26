function mostrar()
{ var elPrecioFinal;
  var precio;
  var porcentaje;

  
  precio = prompt("ingrese el precio");
  porcentaje = prompt( "ingrese el porcentaje");
  
  precio= parseInt(precio);
  porcentaje= parseInt(porcentaje);
  
  elPrecioFinal = document.getElementById("elPrecioFinal").value = precio*porcentaje / 100;

  


}
