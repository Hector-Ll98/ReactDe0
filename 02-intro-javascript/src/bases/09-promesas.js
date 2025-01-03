import { getHeroeById } from "./bases/08-import-export";


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         // Tarea
//         const heroe = getHeroeById(1);
//         resolve(heroe);
//         reject('No se encontro el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.log(err));

const getHeroesByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            // Tarea
            const heroe = getHeroeById(id);
            if (heroe) {
                return resolve(heroe);
            }
            return reject('No se encontro el heroe');
        }, 2000);
    });
}

// getHeroesByIdAsync(8)
//     .then( heroe => console.log('Heroe', heroe))
//     .catch( err => console.log( err ));

getHeroesByIdAsync(3)
    .then( console.log)
    .catch( console.warn);