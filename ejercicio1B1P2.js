var precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));
function calcularPrecioTotalConIVA(precioArticulo) {
    var precioConIVA = precioArticulo * 0.21;
    var precioTotal = precioArticulo + precioConIVA;
    return precioTotal.toFixed(2);
}
if (!isNaN(precioArticulo) && precioArticulo > 0) {
    alert("El precio final del artículo con IVA es: " + calcularPrecioTotalConIVA(precioArticulo) + "€");
} else {
    alert("Por favor, ingrese un número válido mayor que 0.");
}