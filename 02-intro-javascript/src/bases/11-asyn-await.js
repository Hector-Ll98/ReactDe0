
const getImagen = async() => {
    try {
        const apiKey = '5PcpCE3AmnLgFqU11UYZGtzmU7BED0ao';
    const peticion = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);
    const {data} = await peticion.json();
    const url = await data.images.original.url;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    }catch(error){
        console.error(error);
    }
};

getImagen();


// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn);