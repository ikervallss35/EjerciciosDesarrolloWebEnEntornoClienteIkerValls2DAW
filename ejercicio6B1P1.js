var cadena = prompt("Introduce una cadena:");
var longitud = cadena.length;
var mayus = cadena.toUpperCase();
var minus = cadena.toLowerCase();
var palabras = cadena.split(" ");

document.write("La longitud de la cadena es: " + longitud + " caracteres<br><br>");
document.write("La cadena en mayúsculas es: " + mayus + "<br>");
document.write("La cadena en minúsculas es: " + minus + "<br><br>");

document.write("CADENA NORMAL<br>");
for (var palabra of palabras) {
    document.write(palabra + "<br>");
}

document.write("<br>CADENA AL REVÉS<br>");
palabras.reverse();
for (var palabra of palabras) {
    document.write(palabra + "<br>");
}