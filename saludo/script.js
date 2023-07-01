// Consigna:
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

const nombre = prompt('Ingresé su nombre');
const titulo = document.getElementById('titulo');
titulo.innerHTML = `Hola bienvenide ${nombre}`;
titulo.style.textAlign = 'center';
titulo.style.fontFamily = 'Melvetica';
titulo.style.color = 'pink';
titulo.style.fontSize = '50px'