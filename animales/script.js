// Consigna:
// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

const animal = prompt('Elija un animal entre: perro, gato o hamster');

const perro = document.getElementById('imgPerro');
const gato = document.getElementById('imgGato');
const hamster = document.getElementById('imgHamster');

perro.style.width = '400px';
gato.style.width = '400px';
hamster.style.width = '400px';

const imagen = (animal, perro, gato ,hamster) => {
    if (animal == 'perro') {
        gato.style.display = 'none';
        hamster.style.display = 'none';
    } else if (animal == 'gato') {
        perro.style.display = 'none';
        hamster.style.display = 'none';
    } else if (animal == 'hamster') {
        gato.style.display = 'none';
        perro.style.display = 'none';
    } else {
        alert(`Animal invalido`);
    }
}

imagen(animal, perro, gato ,hamster);