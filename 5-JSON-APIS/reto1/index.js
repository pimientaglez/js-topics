//https://dog.ceo/api/breeds/image/random
const dogButton = document.querySelector('#dogButton');
const container = document.querySelector('#container');

dogButton.addEventListener('click',()=>{
    container.innerHTML = '';
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(data=> {return data.json()})
        .then(data => {
            let image = document.createElement('img');
            image.src = data.message;
            container.appendChild(image);
        });
});

