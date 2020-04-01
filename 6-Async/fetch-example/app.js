const fetch = require('node-fetch');

const getPromise = ()=>{
    return fetch('https://restcountries.eu/rest/v2/all');
}
getPromise()
    .then((data)=>{
        return data.json();
    })
    .then((paises)=>{
        console.log(paises)
    })
    .catch((error)=>{
        console.log(error);
    })