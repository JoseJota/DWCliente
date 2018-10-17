window.onload = function() {
var numero = document.getElementById('numero');
var resultado = numero*numero*numero;
var boton = document.getElementsById("boton1");
boton.onclick=hola;
function hola(){
alert("El cubo de "+numero+" es "+resultado);
}
}