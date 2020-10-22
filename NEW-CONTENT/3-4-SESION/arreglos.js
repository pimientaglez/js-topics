
/*
console.log(colores[0])
console.log(colores[1])
console.log(colores[2])
console.log(colores[3]) */

function imprimeColores () {
    var colores = ['azul', 'verde', 'amarillo', 'rojo', 'purpura'];
    colores.push('cafe')
    console.log(colores.length)

    for(var i = 0; i < colores.length ; i++) {
        console.log(colores[i]);// 0
    }
}

//imprimeColores();


function multiplicarPorDos(arreglo) {
    var nuevoArreglo = [];
    for(var i = 0; i < arreglo.length; i++) {
        nuevoArreglo[i] = arreglo[i] * 2;
    }
    return nuevoArreglo;
}

//console.log(multiplicarPorDos([1,2,3,4,5,6])); 
// [2,4,6,8,10,12]

/* 
    Axel - Dark - Netflix - Thriller - Ciencia Ficcion - Serie
    Nalleli - What we do in the shadows - FX - Comedia - Vampiros - Serie
    Martin - The hounting of bly manor - Netflix - Terror - Serie
    Alejandra - Akame GA Kill - Netflix -  Anime - Epico - Serie
    Raul - Armapedia - Yotube - Documental - Serie
    Yasser - The Boys - Prime Video - Accion/ Comedia Negra - Serie
    Uriel - La Mujer en la ventana - Netflix - Suspenso - Pelicula
*/
var streaming = ['netflix', 'prime video', 'FX', 'youtube', 'HBO'];
var alumnos = ['Axel', 'Nalleli', 'Martin', 'Alejandra', 'Raul'];


function queVen(compañias, nombres) {
    for(var i = 0; i < compañias.length; i++) {
        console.log(nombres[i]+ ' ve: '+ compañias[i])
    }
}

//queVen(streaming, alumnos)


function numerosPares () {
    var numeros = [1,231,44,234,25,34,2,56,67,100];
    for(var i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0) {
            console.log(numeros[i] + ' es par')
        }
    }
}

//numerosPares();


function puedeManejar(edades) {
    for(var i = 0; i< edades.length; i++) {
        if(edades[i] >= 16) {
            console.log('A los ' +edades[i]+ ' puedes manejar')
        }
    }
}

puedeManejar([20,10,15,14,7,29,34,16,0,100]);

/* 
edades[0] =  20
edades[1] =  10
edades[2] =  15
edades[3] =  14
edades[4] =  7
edades[5] =  29
edades[6] =  34
edades[7] =  16
edades[8] =  0
edades[9] =  100 
*/
