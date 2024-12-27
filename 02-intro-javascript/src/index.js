// Variables y Constantes


const nombre = 'Hector';
const apellido = 'Llanas';

const nombreCompleto = `${nombre}${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre, apellido){
    return `Hola ${nombre} ${apellido}`;
}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`);