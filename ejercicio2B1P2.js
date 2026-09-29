var mesIntroducido = prompt("Introduce un mes:").toLowerCase();
var mensaje = "Estamos en ";

switch (mesIntroducido) {
    case "diciembre":
    case "enero":
    case "febrero":
        alert(mensaje + "Invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        alert(mensaje + "Primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        alert(mensaje + "Verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        alert(mensaje + "Otoño");
        break;
    default:
        alert("Mes no válido");
}