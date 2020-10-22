// number
var x = 10 + 8;
var y = x;
x = 5;

//string
var nombre = 'Maria';
nombre[4] // 'a'
// boolean
var esMayorDeEdad = true;

//undefined
var indefinido = undefined;

//null
var valorNulo = null;

//Bigint
//Symbol

//object
//objecct literal
var persona = {
    nombre: 'Maria',
    edad: 21,
    esMayorDeEdad: null,
    direccion: {
        calle: 'calle 1',
        numeroExt: 2334,
        colonia: 'centro'
    }
} 
console.log('Persona: ', persona)
persona.edad = 17;
persona['edad'] = 16;


/*console.log('x: ',x,'y: ', y);
console.log('nombre: ', nombre)
console.log('Es mayor de Edad: ', esMayorDeEdad)
console.log(indefinido, valorNulo  );
console.log('Objeto Persona', persona);*/

//mutar un string
nombre[0] = 'K' // 'Karia'
//console.log(nombre)

//function
function multiplicaPorDos (numero) {
    return numero * 2;
}

//var miNumeroMultiplicado = multiplicaPorDos(10);  // 20
//console.log(miNumeroMultiplicado)



//  true

function determinarSiEsMayor(){
    if(persona.edad >= 18){
        persona.esMayorDeEdad = true;
    } else {
        persona.esMayorDeEdad = false;
    }
}
console.log('Persona',persona)














//RETO: Escribir una variable para cada tipo de dato

//string
//numero
//booleano
//undefined
//null

//objeto