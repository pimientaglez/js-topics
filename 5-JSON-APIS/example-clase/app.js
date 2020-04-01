const button = document.querySelector('.buttonPais');
const container = document.querySelector('.container');

button.addEventListener('click', ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
        .then(data=>{ return data.json()})
        .then(paises=>{
            //aqui va su codigo
        })
})