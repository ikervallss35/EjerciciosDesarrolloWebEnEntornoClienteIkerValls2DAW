var mayores100 = 0;
var resultado = 0;

for (let i = 1; i <= 5; i++) {
    var numero = parseInt(prompt("Introduce el número " + i));

    resultado += numero;

    if (numero > 100) {
        mayores100++;
    }
}
alert("La suma de los 5 números es igual a " + resultado);
alert("Hay " + mayores100 + " números mayores de 100");