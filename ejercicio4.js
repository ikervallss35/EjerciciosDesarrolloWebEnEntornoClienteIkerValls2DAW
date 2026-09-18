var numero = prompt("Introduce un número: ");
var mensaje = "El número " + numero + " es ";
if (numero % 2 == 0) {
    alert(mensaje + "par");
} else if (numero % 2 == 1) {
    alert(mensaje + "impar");
}
else {
    alert("El valor introducido no es un número válido.");
}