
const button = document.getElementById('displayCountries');

button.addEventListener('click', ()=>{
    displayCountries()
})

async function displayCountries(){
    const miPromesa = await fetch('https://restcountries.eu/rest/v2/all')//promise
   /*  miPromesa
        .then(data=>{
            return data.json();//promise
        })
        .then(paises =>{
            //aqui el codigo
            console.log(paises)
        })
        .catch((error)=>{
            console.log('Error, algo pasó con el servidor',error);
        }) */
    console.log(miPromesa)
}