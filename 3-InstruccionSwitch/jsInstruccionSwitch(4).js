function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert (mesDelAño);
//alert (mesDelAño);
switch (mesDelAño){
    case "Abril":
    case "Junio":
    case "Semptiembre":
    case "Noviembre":
    alert ("tiene 30 días");
    break;
    case "Febrero":
    alert ("tiene 29 dias");
    break;
    default:
    alert ("tiene 31 dias");
    break;
    
}
	



}//FIN DE LA FUNCIÓN