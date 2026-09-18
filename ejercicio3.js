var estaciones = ["invierno", "primavera", "verano", "otoño"];
var mesIntroducido = prompt("Dime un mes:").toLowerCase();
var mensaje = "Estamos en ";

if (mesIntroducido === "diciembre" || mesIntroducido === "enero" || mesIntroducido === "febrero") {
    alert(mensaje + estaciones[0]);
} else if (mesIntroducido === "marzo" || mesIntroducido === "abril" || mesIntroducido === "mayo") {
    alert(mensaje + estaciones[1]);
} else if (mesIntroducido === "junio" || mesIntroducido === "julio" || mesIntroducido === "agosto") {
    alert(mensaje + estaciones[2]);
} else if (mesIntroducido === "septiembre" || mesIntroducido === "octubre" || mesIntroducido === "noviembre") {
    alert(mensaje + estaciones[3]);
}
else {
    alert("Mes no válido");
}