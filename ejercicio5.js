var precioArticulo = parseFloat(prompt("Introduce el precio del artículo:"));
var iva = precioArticulo * 0.21;
var precioTotal = precioArticulo + iva;

precioTotal = precioTotal.toFixed(2);

alert("El precio total del artículo con IVA incluido es: " + precioTotal + "€");