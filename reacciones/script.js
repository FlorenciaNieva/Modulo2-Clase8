// Consigna:
// En un documento html hacer un post de una red social que contenga:
// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que:
// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const tipografia = document.getElementsByTagName('body');
tipografia[0].style.fontFamily = 'Helvetica';
const span = document.querySelectorAll('.reacciones');
span.style.margin = '5px';
span.style.display = 'inline-block';
span.style.backgroundColor = 'beige';
span.style.borderRadius = '5px';
span.style.padding = '10px';

const meGusta = Number(prompt('Ingrese la cantidad de Me gusta:'));
document.getElementById("gusta").textContent = meGusta;

const meEncanta = Number(prompt('Ingrese la cantidad de Me encanta:'));
document.getElementById("encanta").textContent = meEncanta;

const meAsombra = Number(prompt('Ingrese la cantidad de Me asombra:'));
document.getElementById("asombra").textContent = meAsombra;