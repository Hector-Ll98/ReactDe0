
const apiKey = '5PcpCE3AmnLgFqU11UYZGtzmU7BED0ao';

const peticion = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);