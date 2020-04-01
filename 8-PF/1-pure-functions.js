/* 
Characterestics of Pure Functions
    The return value of the pure functions solely depends on its arguments
    Hence, if you call the pure functions with the same set of arguments, you will always get the same return values
They do not have any side effects like network or database calls
They do not modify the arguments which are passed to them 

*/

/* 
function suma(x,y) {
    return  x+y;
}

console.log(suma(2,3))// 5
console.log(suma(2,3))// 5
console.log(suma(2,3))
console.log(suma(2,3))
console.log(suma(2,3))
console.log(suma(2,3))
console.log(suma(2,3))


var palabraSaludo = 'Adios';

function saludar(nombre) {
    return  palabraSaludo + nombre;
}

console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
console.log(saludar('Ricardo'));
 */
//impure
/* Characterisitcs of Impure functions
The return value of the impure functions does not solely depend on its arguments
    Hence, if you call the impure functions with the same set of arguments, you might get the different return values
    For example, Math.random(), Date.now()
They may have any side effects like network or database calls
They may modify the arguments which are passed to them */

/* let saludo = 'Adios';

function impuro(nombre){
    return saludo +' '+nombre
}

console.log(impuro('Ricardo'));
*/
//impure http
/* let url = 'https://restcountries.eu/rest/v2/name/';

function getData(name){
    const promesa = fetch(url+name);
    promesa
        .then((response)=>{
            return response.json();
        })
        .then((mexico)=>{
            console.log(mexico);
            return mexico;
        })
}

getData('mexico');
 */
//impure mutable


function sumaValores(x) {
    Date.now()
    return x + Math.random(1);
}

console.log('Funcion Impura: ',sumaValores(5))
console.log('Funcion Impura: ',sumaValores(5))
console.log('Funcion Impura: ',sumaValores(5))
console.log('Funcion Impura: ',sumaValores(5))

let saludo = 'Adios';

function impuro(nombre){
    return saludo +' '+nombre
}