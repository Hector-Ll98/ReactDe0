

const persona = {
    nombre: 'Tony',
    apellido: 'Satrk',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 383847478,
        lat: 14.38378,
        lng: 34.3722,
    }
};

// console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);