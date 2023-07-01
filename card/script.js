// Consigna:
// Hacer un programa que al iniciarse pregunte mediante prompts por
// un título
// una url de una imagen
// una url a un artículo
// Utilizar esos datos para completar en el html una card que tenga
// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado
// Dar algunos estilos mínimos a la card:
// centrarla con respecto a la pantalla
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto

const titulo = prompt('Ingrese un título');
const urlImagen = prompt('Ingrese la url de la imagen');
const urlArticulo = prompt('Ingrese la url del articulo');

const card = document.getElementById('card');
const imagen = document.getElementById('imagen');
const h1 = document.getElementById('titulo')
const articulo = document.getElementById('link')

imagen.setAttribute('src', urlImagen);
h1.innerText = titulo;
articulo.setAttribute('href', urlArticulo);

card.style.display = 'flex';
card.style.flexDirection = 'column'
card.style.justifyContent = 'center';
card.style.alignItems = 'center';
card.style.backgroundColor = 'black';
card.style.padding = '10px';
card.style.borderRadius = '10px';
card.style.fontFamily = 'Sans Serif';
card.style.fontSize = '30px';
card.style.color = 'white';