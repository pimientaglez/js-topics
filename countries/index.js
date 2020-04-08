const displayButton = document.getElementById('display');
const clearButton = document.getElementById('clear');
const input = document.getElementById('name');
const tbody = document.querySelector('#countries-tbody');
const loader = document.querySelector('.loader-div');
const restCountriesURL = "https://restcountries.eu/rest/v2/";

displayButton.addEventListener('click', ()=>{
    loader.style.display = 'block';
    display()
})
clearButton.addEventListener('click', ()=>{
    input.value = '';
    loader.style.display = 'none';
    clear();
})
input.addEventListener('keyup',()=>{
    clear();
    loader.style.display = 'block';
    const name = input.value;
    displayByName(name);
})

function display(){
    loader.style.display = 'block';
    const miPromesa = fetch(`${restCountriesURL}all`)//promise
    miPromesa
        .then(data=>{
            return data.json();//promise
        })
        .then((paises) =>{
            loader.style.display = 'none';
            print(paises);
        })
        .catch((error)=>{
            loader.style.display = 'none';
            console.log('Error, algo pasó con el servidor',error);
        })
}

displayByName = (name) => {
    const miPromesa = fetch(`${restCountriesURL}name/${name}`)//promise
    miPromesa
        .then(data=>{
            return data.json();//promise
        })
        .then((paises) =>{
            loader.style.display = 'none';
            print(paises);
        })
        .catch((error)=>{
            loader.style.display = 'none';
            console.log('Error, algo pasó con el servidor',error);
        })
}

const print = (paises)=>{
    paises.forEach((pais, index)=>{
        tbody.innerHTML += `<tr>
        <th scope="row">${index+1}</th>
        <td>${pais.name}</td>
        <td>${pais.capital}</td>
        <td>${pais.region}</td>
        <td><img src="${pais.flag}" width="20px" height="20px"/></td>
    </tr>`;
    })
}

const clear = () => {
    tbody.innerHTML = '';
}