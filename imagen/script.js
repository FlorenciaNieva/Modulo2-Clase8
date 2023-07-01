// Consigna:
// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	        200px
// mediana	        500px
// grande	        800px

const tamanio = prompt('Elija el tamaño de la imagen: chica, mediana o grande', 'chica');

const tamanioImg = (tamanio) => {
    const img = document.getElementsByTagName('img');
    if (tamanio == 'chica'){
        img[0].style.width = "200px";
    } else if (tamanio == 'mediana') {
        img[0].style.width = "500px";
    } else if (tamanio == 'grande') {
        img[0].style.width = "800px";
    } else {
        alert(`El tamaño de la imagen no es valido`);
    }
}

tamanioImg(tamanio);