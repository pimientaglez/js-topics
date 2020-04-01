//higher Order Function o de Orden Superior
// retorna una funcion
function ordenSuperior(fn){
    return function(){
        console.log('Hola');
    }
}

const saludo = ordenSuperior();
saludo();

//recibe una funcion

promise.then(()=>{})






/* 



function multiplicador(numero) {
    return function(factor) {
        return numero * factor;
    }
}

var porDos = multiplicador(2);
console.log(porDos(5));


var porTres = multiplicador(3);
console.log(porTres(5));



const dimeAlgo = (mensaje) => {
    return 'Ricardo: '+ mensaje;
}

function mensajero(mensaje){
    return dimeAlgo(mensaje)
}

console.log(mensajero('Me caes bien!'));




 */








/* 



function secundario(){
    console.log('Dentro de Secundario')
}

function principal(secundario){
    console.log('Dentro de principal');
    secundario()
}
//principal(secundario);
//////////

function multiplica(factor) {
    return function (numero) {
        return numero * factor;
    }
}

var alDoble = multiplica(2);
//console.log(alDoble);
console.log(alDoble(5));

var alTriple = multiplica(3);
//console.log(alTriple);
console.log(alTriple(8));

var multiplicaPor7 = multiplica(7);
console.log(multiplicaPor7(10));
 */