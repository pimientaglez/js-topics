/* 
    Axel - Dark - Netflix - Thriller - Ciencia Ficcion - Serie
    Nalleli - What we do in the shadows - FX - Comedia - Vampiros - Serie
    Martin - The hounting of bly manor - Netflix - Terror - Serie
    Alejandra - Akame GA Kill - Netflix -  Anime - Epico - Serie
    Raul - Armapedia - Yotube - Documental - Serie
    Yasser - The Boys - Prime Video - Accion/ Comedia Negra - Serie
    Uriel - La Mujer en la ventana - Netflix - Suspenso - Pelicula
*/

/* function sumarDosNumeros(valor1, valor2) {
    var suma = valor1 + valor2;
    return suma;
}

var suma = sumarDosNumeros(5, 10); // 15

function imprimirNombre(nombre) {
    console.log('El nombre es: '+ nombre)
}
function imprimirBedu() {
    console.log('El nombre es: BEDU' )
}

function iniciarConexionConServidor(){
    //codigo
} */

//contexto global 
/* var añoDeIndependencia = 1810;

imprimeAñoImportante();

function imprimeAñoImportante() {
    //contexto Local
    var añoDeIndependencia = 1821;
    console.log(añoDeIndependencia)
} */


/* function calcularEdad(añoDeNacimiento) {
    return 2020 - añoDeNacimiento;
}

calcularEdad(1995); // 25

function añosParaRetiro(año, nombre) {
    var edad = calcularEdad(año); 
    var retiro = 65 - edad;
    console.log(nombre + ' se retira en ' + retiro + ' años')
}

añosParaRetiro(1995, 'Juan');  */
// 'Juan se retira en 40 años'
//                                2010
/* function añosParaTitularse(añoDeNacimiento, nombre) {
    var edad = 2020 - añoDeNacimiento; // 30
    var añosParaTitularse = 23 - edad; // -7
    if(añosParaTitularse < 0) { //negativo
        // Si añosParaTitularse es negativo, entonces Pedro ya se debió haber titulado
        console.log(nombre + ' ya se debió haber titulado')
    } else if(añosParaTitularse === 0){ // cero
        //Si el año es 0
        //Pedro se titula este año
        console.log(nombre + ' se titula este año')
    }else {// positivo
        // A pedro le faltan x años para titularse
        var mensaje = 'A '+ nombre + ' le faltan ' + añosParaTitularse + ' años para titularse'; 
        console.log(mensaje);
    }
}

añosParaTitularse(1990, 'Pedro'); */
// A pedro le faltan 13 años para titularse
// Pedo ya se debió haber titulado

function imprimirHasta(mensaje, numero) {
    var contador = 0;
    //     true
    while(contador < numero){
        console.log(mensaje)
        contador++;
    }
    
}

imprimirHasta('Hola Mundo', 10)
imprimirHasta('Hola Bedu', 100)



function operacionMatematica(operador, valor1, valor2) {

}
function power(base, exponent){ 

}



// programador : Desarrolla software
// diseñador : Crea diseños de las aplicaciones
// manager : Administra los proyectos
// default : trabaja en la empresa






function queHaces(profesion, nombre) {
    //Switch
    switch (profesion) {
        case 'programador':
        case 'programadora':
            //codigo
            console.log(nombre + ' Desarrolla software')
            break;
        case 'diseñador':
        case 'diseñadora':
            //codigo
            console.log(nombre + ' Crea diseños de las aplicaciones')
            break;
        case 'manager':
        case 'project manager':
            //codigo
            console.log(nombre + ' Administra los proyectos')
            break;
        default:
            console.log(nombre + ' Trabaja en la empresa')
            break;
    }

}

queHaces('programadora', 'Alejandra');// 'Alejandro Desarrolla software'
queHaces('diseñador', 'Emilia');// 'Emilia Crea diseños de las aplicaciones'
queHaces('project manager', 'Diego');// 'Diego Administra los proyectos'
queHaces('director', 'Mariana');// 'Mariana trabaja en la empresa'
queHaces('secretaria', 'Mariana');// 'Mariana trabaja en la empresa'
queHaces('doctora', 'Mariana');// 'Mariana trabaja en la empresa'





// function declaration
function sumarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
sumarNumeros(2,3); // 5
// function expression

var suma = function (numero1, numero2) {
    return numero1 + numero2;
};

suma(2,3) // 5

function multiplicaPorCinco(valor) {
    return valor * 5;
}

multiplicaPorCinco(5) // 25

var cuadradoDeCuatro = function(numero) {
    return numero * numero;
}

cuadradoDeCuatro(4); // 16



// IIFE: iffy  Expresión de función ejecutada inmediatamente


















function cambiarStatus(status) {
    //toggle
}