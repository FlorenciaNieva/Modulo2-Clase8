// Consigna:
// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

const porcentaje = Number(prompt('¿Cuál es el porcentaje de progreso de la barra?'));
const progreso = document.getElementsByClassName('progreso');
const barraProgreso = (porcentaje, progreso) => {
    if (porcentaje >= 0 && porcentaje <= 100) {
        progreso[0].style.width = `${porcentaje}%`;
    } else {
        alert(`El porcentaje es invalido`);
    }
}
barraProgreso(porcentaje, progreso);