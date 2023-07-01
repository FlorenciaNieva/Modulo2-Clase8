// Consigna:
// Hacer un programa que al iniciarse pregunte mediante un prompt por una temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:
// Temperatura	                        Color
// Menor a 0°	                        Azul
// Mayor o igual a 0° y menor a 15°	    Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	                        Rojo

const temperatura = Number(prompt('Ingrese la temperatura actual:'));
const titulo = document.getElementsByTagName('h1');
titulo[0].innerText = "La temperatura actual: " + temperatura + "°";
const colorTitulo = (temperatura, titulo) => {
    if (temperatura < 0) {
        titulo[0].style.color = 'blue';
    } else if (temperatura >= 0 && temperatura < 15) {
        titulo[0].style.color = 'aqua';
    } else if (temperatura >= 15 && temperatura < 25) {
        titulo[0].style.color = 'green';
    } else if (temperatura >= 25 && temperatura < 30) {
        titulo[0].style.color = 'yellow';
    } else if (temperatura >= 30 && temperatura < 35) {
        titulo[0].style.color = 'orange';
    } else if (temperatura >= 35) {
        titulo[0].style.color = 'red';
    } 
}
colorTitulo(temperatura, titulo);