//manejar evento click en boton-saludo y aparecer ventana con saludo

/* document.getElementById('boton-saludo').addEventListener('click', function(){
    console.log('alguien acaba de dar click en boton saludo')
    alert('!!!Hola Reclutador!!!')
}) */






var boton = document.getElementById('boton-saludo');

boton.addEventListener('click', saludo);

function saludo(){
    alert('Hola Reclutador!!!!')
}

























var input = document.getElementById('text');
var inputDiv = document.getElementById('input-text');

input.addEventListener('keyup', function(){
    inputDiv.textContent = input.value;
});










