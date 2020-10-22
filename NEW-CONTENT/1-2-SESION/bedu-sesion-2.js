/*
    var nombre = 'Ricardo';
    var ubicacion = 'Las vegas';
    var edad = 21;
    var tieneDinero = false;

    // &&  checa si el calor a su izquierda y a su derecha son true,
    //entonces regresa true

    if (edad >= 21 && tieneDinero === true) { // true o false
        // codigo si el if evalua a verdadero
        console.log(nombre + ', puedes jugar')
    } else {
        console.log(nombre + ', NO puedes jugar')
    }
*/

/* Seleccionan el codigo
shift + alt + a */
/* var tiempo = 5;
var saludo;

if(tiempo > 0 && tiempo < 12) {
    saludo = 'Buenos dias';
} else if (tiempo >= 12 && tiempo < 19 ) {
    saludo = 'Buenas tardes';
} else if (tiempo >= 19 && tiempo <= 24) {
    saludo = 'Buenas noches';
}else if (tiempo < 1 || tiempo > 24){
    saludo = 'Tiempo no valido';
}

console.log(saludo); */


/* var clima = 'soleado'; 
var nombre = 'Ricardo';
var ubicacion = 'playa';

if(ubicacion === 'playa') {
    switch ( clima ) {
        case 'soleado':
            console.log('Sal a nadar');
            break;
        case 'nublado':
            console.log('Sal a comer');
            break;
        case 'lluvioso':
            console.log('Quedate en tu habitacion');
            break;
        case 'nevado':
            console.log('Regresate a casa');
            break;
        case 'vientos fuertes':
            console.log('Haz navegacion');
            break;
        case 'humedo':
            console.log('Usa ropa ligera');
            break;
        default:
            console.log('Disfruta el clima');
    }

} */


/* var calificacion = 8;
var mensaje = (calificacion >= 7)? 'Aprobado' : 'Reprobado'; */
/* var mensaje;

if (calificacion >= 7) {
    mensaje = 'Aprobado';
} else {
    mensaje = 'Reprobado';
}
 */


/* var status = 'Extraordinario'; // 'Regular' , 'Extrordinario'
var color =  (status === 'Regular') ? 'verde' : 'azul';
console.log(color) // selected */

/* var resultadoDeLaBaseDeDatos = 'Hola mundo' / 0; // NaN

if(resultadoDeLaBaseDeDatos) {
    console.log('funciona la base de datos');
} else {
    console.log('no funciona la base de datos');
}

 */

/* for(var contador = 1; contador <= 100 ; contador++) {
    if(contador % 2 === 1) {
        console.log(contador + ' es impar')
    } else {
        console.log(contador + ' es par');
    }
} */

/* var contador = 100;

while(contador >= 1) {
    console.log(contador+ ' bedu');
    contador--;
}
 */

//              contador
//                 |
// 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 
// contadorDeModulo = 2;
//      contadorDos 
//               |
// 1 , 2, 3, 4 , 5
// 5 % 2 === 0 -> true

// 2, 3, 5 
for(var contador = 2; contador <= 10; contador++) {
    var contadorDeModulo = 0;
    for(var contadorDos = 1; contadorDos<= contador; contadorDos++){
        if(contador % contadorDos === 0) {
            contadorDeModulo += 1;
        }
    }
    if(contadorDeModulo === 2) {
        console.log(contador + ' es primo')
    }
}

























