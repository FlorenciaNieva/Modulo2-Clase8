// Consigna:
// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const rgb1 = prompt('ingrese el primer número');
const rgb2 = prompt('ingrese el primer número');
const rgb3 = prompt('ingrese el primer número');
const color = (`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
const body = document.getElementsByTagName('body');
body.style.backgroundColor = color;