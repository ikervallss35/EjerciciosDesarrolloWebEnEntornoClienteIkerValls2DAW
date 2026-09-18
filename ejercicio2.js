var numeros = [7, 8, 2, 9, 10];
var suma = 0;
var mensaje = "La suma de los números mayores a 8 es: ";
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 8) {
        suma += numeros[i];
    }
}
alert(mensaje + suma);